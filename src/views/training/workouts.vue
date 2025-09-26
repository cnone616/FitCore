<template>
  <div class="workouts-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">
          🏋️‍♂️ 训练动作库
        </h1>
        <p class="text-lg text-fg-muted">
          丰富的健身动作视频和详细说明
        </p>
      </div>

      <!-- 分类筛选 -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-lg transition-colors',
            selectedCategory === category 
              ? 'bg-blue-500 text-on-primary' 
              : 'bg-gray-200 bg-subtle text-fg hover:bg-gray-300'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- 动作列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="workout in filteredWorkouts" 
          :key="workout.id"
        class="bg-surface rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <div class="text-6xl">{{ workout.icon }}</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ workout.name }}</h3>
            <p class="text-fg-muted mb-4">{{ workout.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="muscle in workout.muscles" 
                :key="muscle"
                class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
              >
                {{ muscle }}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-fg-muted">
                难度: {{ workout.difficulty }}
              </span>
              <button class="bg-blue-500 hover:bg-blue-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
                查看详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Workout {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  muscles: string[];
  difficulty: '初级' | '中级' | '高级';
}

const workouts: Workout[] = [
  {
    id: '1',
    name: '俯卧撑',
    description: '经典的上肢力量训练动作',
    icon: '💪',
    category: '力量训练',
    muscles: ['胸肌', '三头肌', '肩部'],
    difficulty: '初级'
  },
  {
    id: '2',
    name: '深蹲',
    description: '下肢力量训练的基础动作',
    icon: '🦵',
    category: '力量训练',
    muscles: ['股四头肌', '臀大肌', '核心'],
    difficulty: '初级'
  },
  {
    id: '3',
    name: '引体向上',
    description: '背部力量训练的王牌动作',
    icon: '🏋️',
    category: '力量训练',
    muscles: ['背阔肌', '二头肌', '肩部'],
    difficulty: '中级'
  },
  {
    id: '4',
    name: '平板支撑',
    description: '核心稳定性训练',
    icon: '🧘‍♂️',
    category: '核心训练',
    muscles: ['腹肌', '核心', '肩部'],
    difficulty: '初级'
  },
  {
    id: '5',
    name: '波比跳',
    description: '全身有氧训练动作',
    icon: '🏃‍♂️',
    category: '有氧训练',
    muscles: ['全身', '心肺'],
    difficulty: '高级'
  },
  {
    id: '6',
    name: '硬拉',
    description: '全身力量训练的复合动作',
    icon: '🏋️‍♀️',
    category: '力量训练',
    muscles: ['背部', '臀大肌', '股二头肌'],
    difficulty: '高级'
  }
];

const categories = ['全部', '力量训练', '有氧训练', '核心训练'];
const selectedCategory = ref('全部');

const filteredWorkouts = computed(() => {
  if (selectedCategory.value === '全部') {
    return workouts;
  }
  return workouts.filter(workout => workout.category === selectedCategory.value);
});
</script>

<style scoped>
.workouts-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}
</style>
