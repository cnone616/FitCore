<template>
  <div class="nutrition-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">🍖 增肌饮食方案</h1>
        <p class="text-lg text-fg-muted">以适度热量盈余与高蛋白为核心的增肌饮食建议</p>
      </div>

      <!-- 搜索框 -->
      <SearchInput
        v-model="searchQuery"
        placeholder="搜索增肌方案名称或说明（例如：早饭/午饭/晚饭/夜里/无力训）"
      />

      <!-- 方案卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="plan in filteredPlans"
          :key="plan.id"
          @click="goToPlanDetail(plan.id)"
          class="bg-surface rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
        >
          <div class="text-center">
            <div class="text-4xl mb-4">{{ getPlanIcon(plan.id) }}</div>
            <h3 class="text-xl font-semibold text-fg mb-2">{{ plan.name }}</h3>
            <p class="text-fg-muted mb-4">{{ plan.description }}</p>
            <div class="text-sm text-fg-muted">
              <p><strong>训练时间：</strong>{{ plan.trainingTime }}</p>
              <p><strong>适合人群：</strong>{{ plan.suitableFor.join('、') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getAllMuscleGainPlans } from './plans-data';
import SearchInput from '@/components/SearchInput.vue';

const router = useRouter();
const searchQuery = ref('');

const allPlans = getAllMuscleGainPlans();

const filteredPlans = computed(() => {
  if (!searchQuery.value) {
    return allPlans;
  }
  
  const query = searchQuery.value.toLowerCase();
  return allPlans.filter(plan => 
    plan.name.toLowerCase().includes(query) ||
    plan.description.toLowerCase().includes(query) ||
    plan.trainingTime.toLowerCase().includes(query) ||
    plan.suitableFor.some(audience => audience.toLowerCase().includes(query))
  );
});

function goToPlanDetail(planId: string) {
  router.push(`/nutrition/muscle-gain/${planId}`);
}

function getPlanIcon(planId: string): string {
  const iconMap: Record<string, string> = {
    'morning_early': '🌅',
    'morning_late': '🌞',
    'before_lunch': '🍽️',
    'after_lunch': '🥗',
    'before_dinner': '🌆',
    'after_dinner': '🌙',
    'night_training': '🌃'
  };
  return iconMap[planId] || '💪';
}
</script>

<style scoped>
.nutrition-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}
</style>


