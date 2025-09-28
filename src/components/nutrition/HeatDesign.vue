<template>
  <div class="bg-surface rounded-lg shadow-lg p-6 mb-8">
    <h3 class="text-xl font-semibold text-fg-muted mb-6 flex items-center">
      <span class="text-2xl mr-3">🔥</span>
      热量设计
    </h3>
    <div v-if="!hasValidInputs" class="text-sm text-yellow-700 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-900/30 rounded-md p-3 mb-4">
      身高/体重/年龄输入不完善，无法计算与设计热量。
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 rounded-lg bg-subtle">
        <div class="font-semibold text-fg mb-2">基础数据</div>
        <ul class="text-sm space-y-1 text-fg-muted">
          <li class="flex items-center gap-2">基础代谢BMR：
            <input v-model.number="bmrManualLocal" type="number" min="0" step="10" :placeholder="formatInt(bmrKcal)" class="input w-28 compact-input" />
            <span class="text-fg-muted text-sm">kcal</span>
          </li>
          <div class="text-xs mt-1">Mifflin-St Jeor：男 9.99×体重 + 6.25×身高 − 4.92×年龄 + 5；女 9.99×体重 + 6.25×身高 − 4.92×年龄 − 161</div>
          <li class="flex items-center gap-2">无运动总消耗：
            <input v-model.number="maintainManualLocal" type="number" min="0" step="10" :placeholder="formatInt(maintainKcal)" class="input w-28 compact-input" />
            <span class="text-fg-muted text-sm">kcal</span>
          </li>
          <div class="text-xs mt-1 text-red-500"> * 在没有力训、有氧的情况下，基础代谢约占人体热量消耗的70%</div>
          <li class="flex items-center gap-2">力训消耗：
            <input v-model.number="strengthKcalLocal" type="number" min="0" step="10" class="input w-24 compact-input" />
            <span class="text-fg-muted text-sm">kcal/日</span>
          </li>
          <div class="text-xs mt-1">建议：男(新手/有基础/老手) 150/200/250；女 100/150/200;</div>
          <li class="flex items-center gap-2">有氧消耗：
            <input v-model.number="cardioKcalLocal" type="number" min="0" step="10" class="input w-24 compact-input" />
            <span class="text-fg-muted text-sm">kcal/日</span>
          </li>
          <div class="text-xs mt-1">如果你有主动或被动的有氧活动，请参考《每小时有氧热量消耗》</div>
        </ul>
      </div>
      <div class="p-4 rounded-lg bg-subtle">
        <div class="font-semibold text-fg mb-2">平衡热量</div>
        <div class="text-sm text-fg-muted">力训日: </div>
        <div class="mt-2 text-2xl font-semibold text-fg">{{ formatInt(balanceTrainKcal) }} kcal/日</div>
        <div class="text-sm text-fg-muted">休息日: </div>
        <div class="mt-2 text-2xl font-semibold text-fg">{{ formatInt(balanceRestKcal) }} kcal/日</div>
        <p class="text-xs mt-2 text-red-500">* 这是理论上的平衡热量，意即理论上这个饮食热量能让体重不变，力训日因为多了力训的热量消耗，所以力训日的平衡热量高一些</p>
      </div>
      <div class="p-4 rounded-lg bg-subtle">
        <div class="font-semibold text-fg mb-2">应吃热量</div>
        <div class="text-sm text-fg-muted">力训日: </div>
        <div class="mt-2 text-2xl font-semibold text-fg">{{ formatInt(eatTrainKcal) }} kcal/日</div>
        <div class="text-sm text-fg-muted">休息日: </div>
        <div class="mt-2 text-2xl font-semibold text-fg">{{ formatInt(eatRestKcal) }} kcal/日</div>
        <p class="text-xs mt-2 text-red-500">＊ {{ mode === 'muscle-gain' ? ' * 干净增肌合适热量盈余取5%，应吃热量本该是平衡热量×1.05，但我们需要留出余地：一是因为研究表明人们在定量饮食里也会不自觉多吃约10-20%热量，二是因为下表有些食物的部分热量没有计入（如主食的蛋白质和脂肪），所以我们把应吃热量设计为理论平衡热量的1×1.05×0.8=0.84，算出的热量看似偏低，实际上你吃的热量是高于此数的，我们只是提前留了余地！' : ' * 减脂的合适热量缺口为20%，应吃热量本该是平衡热量×0.8，但我们需要留出余地：一是因为研究表明人们在定量饮食里也会不自觉多吃约10-20%热量，二是因为下表有些食物的部分热量没有计入（如主食的蛋白质和脂肪），所以我们把应吃热量设计为理论平衡热量的1×0.8×0.8=0.64，算出的热量看似很低，不要被吓到，实际上你吃的热量是高于此数的，我们只是提前留了余地！' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

interface Props {
  gender: 'male' | 'female';
  age: number | null;
  heightCm: number | null;
  weightKg: number | null;
  strengthLevel: 'beginner' | 'intermediate' | 'advanced';
  bmrManual?: number | null;
  maintainManual?: number | null;
  strengthKcal?: number | null;
  cardioKcal?: number | null;
  mode?: 'fat-loss' | 'muscle-gain'; // 新增模式参数
}

const props = defineProps<Props>();
const emit = defineEmits<{ (e:'update:bmrManual', v:number|null):void; (e:'update:maintainManual', v:number|null):void; (e:'update:strengthKcal', v:number|null):void; (e:'update:cardioKcal', v:number|null):void }>();

const { gender, age, heightCm, weightKg, strengthLevel } = toRefs(props);

const bmrManualLocal = computed({ get: () => props.bmrManual ?? null, set: v => emit('update:bmrManual', v) });
const maintainManualLocal = computed({ get: () => props.maintainManual ?? null, set: v => emit('update:maintainManual', v) });
const strengthKcalLocal = computed({ get: () => props.strengthKcal ?? null, set: v => emit('update:strengthKcal', v) });
const cardioKcalLocal = computed({ get: () => props.cardioKcal ?? null, set: v => emit('update:cardioKcal', v) });

const hasValidInputs = computed(() => !!(heightCm?.value && weightKg?.value && age?.value));

const bmrKcal = computed(() => {
  if (!heightCm?.value || !weightKg?.value || !age?.value) return 0;
  const w = weightKg.value, h = heightCm.value, a = age.value;
  return gender?.value === 'male' ? w * 9.99 + h * 6.25 - a * 4.92 + 5 : w * 9.99 + h * 6.25 - a * 4.92 - 161;
});
const maintainKcal = computed(() => (bmrManualLocal.value && bmrManualLocal.value > 0 ? bmrManualLocal.value : bmrKcal.value) / 0.7);

const strengthBurnKcal = computed(() => {
  const manual = strengthKcalLocal.value;
  if (manual && manual > 0) return manual;
  if (gender?.value === 'male') {
    if (strengthLevel?.value === 'advanced') return 250;
    if (strengthLevel?.value === 'intermediate') return 200;
    return 150;
  } else {
    if (strengthLevel?.value === 'advanced') return 200;
    if (strengthLevel?.value === 'intermediate') return 150;
    return 100;
  }
});
const cardioBurnKcal = computed(() => (cardioKcalLocal.value && cardioKcalLocal.value > 0 ? cardioKcalLocal.value : 0));

const maintainUsed = computed(() => (maintainManualLocal.value && maintainManualLocal.value > 0 ? maintainManualLocal.value : maintainKcal.value));
const balanceTrainKcal = computed(() => maintainUsed.value + strengthBurnKcal.value + cardioBurnKcal.value);
const balanceRestKcal = computed(() => maintainUsed.value + cardioBurnKcal.value);

// 根据模式选择不同的系数（增肌按 0.84；减脂按 0.64）
const calorieMultiplier = computed(() => props.mode === 'muscle-gain' ? 0.84 : 0.64);
const eatTrainKcal = computed(() => balanceTrainKcal.value * calorieMultiplier.value);
const eatRestKcal = computed(() => balanceRestKcal.value * calorieMultiplier.value);

function formatInt(v: number): string { return Math.round(v).toString(); }
</script>

<style scoped>
</style>


