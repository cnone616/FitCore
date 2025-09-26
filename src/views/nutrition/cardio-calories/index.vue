<template>
  <div class="nutrition-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">🔥 有氧增加饮食热量</h1>
        <p class="text-lg text-fg-muted">根据有氧训练量动态调整每日饮食摄入</p>
      </div>

      <!-- 计算器 -->
      <div class="max-w-2xl mx-auto mb-10 bg-surface rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4 cardio-calories-center-item-h2">有氧热量消耗计算器（每小时）</h2>
        <div class="mb-4 flex gap-3 justify-center">
          <router-link to="/nutrition/fat-loss" class="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-on-primary text-sm">减脂方案</router-link>
          <router-link to="/nutrition/muscle-gain" class="px-3 py-1.5 rounded-md bg-orange-600 hover:bg-orange-700 text-on-primary text-sm">增肌方案</router-link>
        </div>
        <form @submit.prevent class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium mb-2 cardio-calories-center-item-label">选择有氧项目</label>
            <select v-model="selectedActivityId" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-surface text-fg">
              <option v-for="a in activityOptions" :key="a.key" :value="a.key">{{ a.label }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2 cardio-calories-center-item-label">选择子项</label>
            <select v-model="selectedItemId" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-surface text-fg">
              <option v-for="s in itemOptions" :key="s.key" :value="s.key">{{ s.label }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2 cardio-calories-center-item-label">选择体重</label>
            <select v-model.number="selectedWeightKg" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-surface text-fg">
              <option v-for="w in weightOptions" :key="w.key" :value="w.key">{{ w.label }}</option>
            </select>
          </div>
        </form>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-lg bg-blue-50 dark:bg-blue-900 text-center">
            <div class="text-sm mb-1 cardio-calories-center-item-text-sm">所选项目</div>
            <div class="text-lg font-semibold cardio-calories-center-item-text-lg">{{ currentSelection.act?.name || '-' }}</div>
          </div>
          <div class="p-4 rounded-lg bg-green-50 dark:bg-green-900 text-center">
            <div class="text-sm mb-1 cardio-calories-center-item-text-sm">选择情况</div>
            <div class="text-lg font-semibold cardio-calories-center-item-text-lg">{{ currentSelection.item?.name || '-' }}</div>
          </div>
          <div class="p-4 rounded-lg bg-orange-50 dark:bg-orange-900 text-center">
            <div class="text-sm mb-1 cardio-calories-center-item-text-sm">≈ 每小时消耗</div>
            <div class="text-2xl font-bold cardio-calories-center-item-text-lg">{{ hourlyCalories }} kcal</div>
          </div>
        </div>
        <p class="mt-3 text-sm cardio-calories-center-item-text-sm">说明：此处为模拟数据（按体重区间与情况预估每小时消耗）。实际数值视个体差异与环境而变动。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { cardioActivities } from './data';

interface ActivityItem { id: string; name: string; kcal_per_kg: number }
interface Activity { id: string; name: string; items: ActivityItem[] }

const activities = cardioActivities as unknown as Activity[];

const selectedActivityId = ref<string>(activities[0]?.id || '');
const selectedItemId = ref<string>(activities[0]?.items[0]?.id || '');
const selectedWeightKg = ref<number>(50);

const activityOptions = computed(() => activities.map(a => ({ key: a.id, label: a.name })));
const itemOptions = computed(() => {
  const act = activities.find(a => a.id === selectedActivityId.value);
  return (act?.items || []).map(i => ({ key: i.id, label: i.name }));
});
const weightOptions = computed(() => {
  const opts: { key: number; label: string }[] = [];
  for (let kg = 50; kg <= 120; kg += 5) {
    opts.push({ key: kg, label: `${kg}kg` });
  }
  return opts;
});

const currentSelection = computed(() => {
  const act = activities.find(a => a.id === selectedActivityId.value);
  const item = act?.items.find(i => i.id === selectedItemId.value);
  return { act, item } as { act?: Activity; item?: ActivityItem };
});

const hourlyCalories = computed(() => {
  const item = currentSelection.value.item;
  const weight = selectedWeightKg.value;
  if (!item || !weight) return 0;
  // 从80kg开始，每增加5kg，功率递减3%
  let factor = 1;
  if (weight >= 80) {
    const steps = Math.floor((weight - 80) / 5) + 1; // 80=>1步,85=>2步...
    factor = Math.max(0, 1 - 0.03 * steps);
  }
  return Math.round(item.kcal_per_kg * weight * factor);
});
</script>

<style scoped>
.nutrition-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}

.cardio-calories-center-item-h2 {
  color: var(--cardio-calories-center-item-h2);
}

.cardio-calories-center-item-label {
  color: var(--cardio-calories-center-item-label);
}

.cardio-calories-center-item-text-sm {
  color: var(--cardio-calories-center-item-text-sm);
}

.cardio-calories-center-item-select {
  color: var(--cardio-calories-center-item-select);
}

.cardio-calories-center-item-text-lg {
  color: var(--cardio-calories-center-item-text-lg);
}

</style>


