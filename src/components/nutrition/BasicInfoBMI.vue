<template>
  <div class="bg-surface rounded-lg shadow-lg p-6 mb-8">
    <h3 class="text-xl font-semibold text-fg-muted mb-6 flex items-center">
      <span class="text-2xl mr-3">🧍</span>
      基本信息与 BMI
    </h3>
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-3">
        <span class="text-sm text-fg-muted">性别</span>
        <label class="inline-flex items-center gap-1 cursor-pointer">
          <input type="radio" class="accent-blue-600" value="male" v-model="genderLocal" />
          <span class="text-fg text-sm">男</span>
        </label>
        <label class="inline-flex items-center gap-1 cursor-pointer">
          <input type="radio" class="accent-blue-600" value="female" v-model="genderLocal" />
          <span class="text-fg text-sm">女</span>
        </label>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-sm text-fg-muted">身高</span>
        <NumberStepper v-model="heightLocal" :min="1" :max="999" :step="1" placeholder="填写后可计算" input-mode="numeric" />
        <span class="text-fg-muted text-sm">cm</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-sm text-fg-muted">体重</span>
        <NumberStepper v-model="weightLocal" :min="1" :max="999" :step="1" :precision="1" placeholder="填写后可计算" input-mode="decimal" />
        <span class="text-fg-muted text-sm">kg</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-sm text-fg-muted">年龄</span>
        <NumberStepper v-model="ageLocal" :min="1" :max="120" :step="1" placeholder="填写后可计算" input-mode="numeric" />
        <span class="text-fg-muted text-sm">岁</span>
      </div>
    </div>

    <div class="mt-4 p-4 rounded-lg bg-subtle">
      <div class="text-sm text-fg-muted mb-2">BMI 公式：BMI = 体重(kg) ÷ 身高(m) ÷ 身高(m)</div>
      <template v-if="hasValidInputs">
        <div class="flex flex-wrap items-baseline gap-3">
          <div class="text-fg">当前 BMI：<span class="font-semibold">{{ bmiDisplay }}</span></div>
          <div class="text-fg-muted text-sm">（正常 18.5–24｜超重 24–28｜肥胖 ＞28）</div>
          <div v-if="bmiCategory" class="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs">{{ bmiCategory }}</div>
        </div>
      </template>
      <template v-else>
        <div class="text-sm text-fg-muted">请先填写身高、体重与年龄，完成后将自动计算 BMI 与饮食推荐。</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import NumberStepper from '@/components/NumberStepper.vue';
import { watch, computed } from 'vue';

const props = defineProps<{ gender: 'male' | 'female'; height: number | null; weight: number | null; age: number | null }>();
const emit = defineEmits<{
  (e:'update:gender', v:'male'|'female'):void;
  (e:'update:height', v:number|null):void;
  (e:'update:weight', v:number|null):void;
  (e:'update:age', v:number|null):void;
  (e:'update:bmi', v:string):void;
  (e:'update:valid', v:boolean):void;
  (e:'update:bmiCategory', v:string):void;
}>();

const genderLocal = computed({ get: () => props.gender, set: v => emit('update:gender', v) });
const heightLocal = computed({ get: () => props.height, set: v => emit('update:height', v) });
const weightLocal = computed({ get: () => props.weight, set: v => emit('update:weight', v) });
const ageLocal    = computed({ get: () => props.age,    set: v => emit('update:age', v) });

const hasValidInputs = computed(() => !!(props.height && props.weight && props.age));
const bmiDisplay = computed(() => {
  if (!props.height || !props.weight) return '-';
  const h = props.height / 100;
  const v = props.weight / (h * h);
  return (Math.round(v * 10) / 10).toFixed(1);
});
const bmiCategory = computed(() => {
  const v = parseFloat(bmiDisplay.value);
  if (!isFinite(v)) return '';
  if (v < 18.5) return '偏瘦';
  if (v < 24) return '正常';
  if (v < 28) return '超重';
  return '肥胖';
});

watch([bmiDisplay, hasValidInputs, bmiCategory], () => {
  emit('update:bmi', bmiDisplay.value);
  emit('update:valid', hasValidInputs.value);
  emit('update:bmiCategory', bmiCategory.value);
});
</script>

<style scoped>
</style>


