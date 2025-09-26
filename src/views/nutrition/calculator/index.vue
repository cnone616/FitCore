<template>
  <div class="nutrition-calculator-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">
          🧮 营养计算器
        </h1>
        <p class="text-lg text-fg-muted">
          计算您的每日营养需求
        </p>
      </div>

      <div class="max-w-2xl mx-auto">
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <form @submit.prevent="calculateNutrition">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-fg mb-2">
                  年龄
                </label>
                <NumberStepper v-model="form.age" :min="1" :max="120" :step="1" class="w-full" placeholder="请输入年龄" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-fg mb-2">
                  性别
                </label>
                <select 
                  v-model="form.gender" 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-surface text-fg"
                >
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-fg mb-2">
                  身高 (cm)
                </label>
                <NumberStepper v-model="form.height" :min="50" :max="250" :step="1" class="w-full" placeholder="请输入身高" />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-fg mb-2">
                  体重 (kg)
                </label>
                <NumberStepper v-model="form.weight" :min="20" :max="250" :step="0.5" :precision="1" class="w-full" placeholder="请输入体重" />
              </div>
            </div>
            
            <div class="mt-6">
              <button 
                type="submit" 
                class="w-full bg-blue-500 hover:bg-blue-600 text-on-primary py-3 px-6 rounded-lg transition-colors font-medium"
              >
                计算营养需求
              </button>
            </div>
          </form>
        </div>

        <!-- 计算结果 -->
        <div v-if="results" class="mt-8 bg-surface rounded-lg shadow-lg p-6">
          <h2 class="text-2xl font-bold text-fg mb-4">计算结果</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <div class="text-2xl font-bold text-blue-600 dark:text-blue-300">{{ results.calories }}</div>
              <div class="text-sm text-fg-muted">每日卡路里</div>
            </div>
            <div class="text-center p-4 bg-green-50 dark:bg-green-900 rounded-lg">
              <div class="text-2xl font-bold text-green-600 dark:text-green-300">{{ results.protein }}g</div>
              <div class="text-sm text-fg-muted">蛋白质</div>
            </div>
            <div class="text-center p-4 bg-orange-50 dark:bg-orange-900 rounded-lg">
              <div class="text-2xl font-bold text-orange-600 dark:text-orange-300">{{ results.carbs }}g</div>
              <div class="text-sm text-fg-muted">碳水化合物</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NumberStepper from '@/components/NumberStepper.vue';

interface NutritionResults {
  calories: number;
  protein: number;
  carbs: number;
}

const form = ref({
  age: '',
  gender: 'male',
  height: '',
  weight: ''
});

const results = ref<NutritionResults | null>(null);

function calculateNutrition() {
  // 简单的营养计算逻辑
  const age = parseInt(form.value.age);
  const height = parseInt(form.value.height);
  const weight = parseInt(form.value.weight);
  
  if (!age || !height || !weight) {
    alert('请填写完整信息');
    return;
  }
  
  // 基础代谢率计算 (简化版)
  let bmr;
  if (form.value.gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
  
  const calories = Math.round(bmr * 1.2); // 轻度活动
  const protein = Math.round(weight * 1.6); // 每公斤体重1.6g蛋白质
  const carbs = Math.round(calories * 0.5 / 4); // 50%卡路里来自碳水
  
  results.value = {
    calories,
    protein,
    carbs
  };
}
</script>

<style scoped>
.nutrition-calculator-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}
</style>


