<template>
  <div class="stepper" :class="$attrs.class">
    <button type="button" @click="decrement" class="stepper-btn" aria-label="decrement">−</button>
    <input
      :value="displayValue"
      @input="onInput"
      :inputmode="inputMode"
      :placeholder="placeholder"
      class="stepper-input"
      type="text"
    />
    <button type="button" @click="increment" class="stepper-btn" aria-label="increment">＋</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: number | null;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  placeholder?: string;
  inputMode?: 'numeric' | 'decimal';
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', v: number | null): void;
}>();

const step = computed(() => props.step ?? 1);
const min = computed(() => props.min ?? Number.NEGATIVE_INFINITY);
const max = computed(() => props.max ?? Number.POSITIVE_INFINITY);
const precision = computed(() => props.precision ?? (String(step.value).includes('.') ? 1 : 0));
const placeholder = computed(() => props.placeholder ?? '');
const inputMode = computed(() => props.inputMode ?? (precision.value > 0 ? 'decimal' : 'numeric'));

const displayValue = computed(() => props.modelValue ?? '');

function toFixed(v: number): number {
  if (!isFinite(v)) return 0;
  const m = Math.pow(10, precision.value);
  return Math.round(v * m) / m;
}

function clamp(v: number): number {
  return Math.min(max.value, Math.max(min.value, v));
}

function increment() {
  const base = props.modelValue ?? 0;
  const next = clamp(toFixed(base + step.value));
  emit('update:modelValue', next);
}

function decrement() {
  const base = props.modelValue ?? 0;
  const next = clamp(toFixed(base - step.value));
  emit('update:modelValue', next);
}

function onInput(ev: Event) {
  const target = ev.target as HTMLInputElement;
  const raw = target.value.trim();
  if (raw === '') {
    emit('update:modelValue', null);
    return;
  }
  const v = Number(raw.replace(/，/g, ',').replace(/\s+/g, ''));
  if (isNaN(v)) return;
  emit('update:modelValue', clamp(toFixed(v)));
}
</script>

<style scoped>
.stepper {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  background-color: var(--color-background);
  height: 36px;
  transition: var(--transition-colors);
}
.stepper-btn {
  width: 36px;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  background-color: var(--color-surface-subtle);
  border: none;
  cursor: pointer;
  transition: var(--transition-colors);
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
/* 固定灰色背景，不使用 hover/active/focus 变化 */
.stepper-input {
  width: 96px;
  text-align: center;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color-text);
}
</style>


