<template>
  <div class="nutrition-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">🥗 减脂方案</h1>
        <p class="text-lg text-fg-muted">减脂方案（体重1-2周稳定不掉 请看
          <router-link to="/nutrition/faq" class="text-blue-600 hover:underline">《减脂-问答汇总》</router-link>来调整）</p>
      </div>

      <!-- 搜索框 -->
      <SearchInput
        v-model="q"
        placeholder="搜索方案名称或说明（例如：早饭/午饭/晚饭/夜里/无力训）"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="plan in filteredPlans" 
          :key="plan.id"
          @click="goToPlanDetail(plan.id)"
        class="bg-surface rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
        >
          <div class="text-center">
            <div class="text-3xl mb-3">{{ getPlanIcon(plan.id) }}</div>
            <h3 class="text-xl font-semibold text-fg-muted mb-2">{{ plan.name }}</h3>
            <p class="text-fg-muted text-sm mb-4">{{ plan.description }}</p>
            
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-fg-muted">训练时间:</span>
                <span class="text-fg-muted">{{ plan.trainingTime }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-fg-muted">适用人群:</span>
                <span class="text-fg-muted">{{ plan.suitableFor.slice(0, 2).join('、') }}</span>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <span class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                查看详情 →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAllFatLossPlans } from './plans-data';
import SearchInput from '@/components/SearchInput.vue';

const router = useRouter();
const fatLossPlans = getAllFatLossPlans();

const q = ref('');
const filteredPlans = computed(() => {
  const keyword = q.value.trim().toLowerCase();
  if (!keyword) return fatLossPlans;
  return fatLossPlans.filter(p => {
    const name = (p.name || '').toLowerCase();
    const desc = (p.description || '').toLowerCase();
    const time = (p.trainingTime || '').toLowerCase();
    return name.includes(keyword) || desc.includes(keyword) || time.includes(keyword);
  });
});

function goToPlanDetail(planId: string) {
  router.push(`/nutrition/fat-loss/${planId}`);
}

function getPlanIcon(planId: string): string {
  const iconMap: Record<string, string> = {
    'morning_early': '🌅',
    'morning_late': '🌞',
    'before_lunch': '🍽️',
    'after_lunch': '🥗',
    'before_dinner': '🌆',
    'after_dinner': '🌙',
    'night_training': '🌃',
    'no_training': '🏠'
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


