<template>
  <div class="progress-tracker">
    <div class="label-row">
      <slot name="label">
        <span>完成度</span>
      </slot>
      <strong>{{ percent }}%</strong>
    </div>
    <div class="bar" role="progressbar" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100">
      <div class="bar-fill" :style="{ width: `${percent}%` }" :class="statusClass" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ProgressStatus } from '@/types/coach-knowledge';

const props = defineProps<{
  percent: number;
  status: ProgressStatus;
}>();

const statusClass = computed(() => {
  if (props.status === 'completed') return 'is-completed';
  if (props.status === 'in_progress') return 'is-progress';
  return 'is-idle';
});
</script>

<style scoped>
.progress-tracker {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.label-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--color-fg-muted);
}

.label-row strong {
  color: var(--color-fg);
}

.bar {
  position: relative;
  height: 0.75rem;
  width: 100%;
  border-radius: 999px;
  background-color: var(--color-border);
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.bar-fill.is-completed {
  background: linear-gradient(90deg, #16a34a, #22c55e);
}

.bar-fill.is-progress {
  background: linear-gradient(90deg, #f59e0b, #f97316);
}

.bar-fill.is-idle {
  background: linear-gradient(90deg, #6366f1, #60a5fa);
}
</style>
