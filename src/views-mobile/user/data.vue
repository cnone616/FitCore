<template>
  <div class="user-data-page">
    <div class="container mx-auto px-3 py-6">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-semibold text-fg mb-3">📊 数据概览</h1>
        <p class="text-base text-fg-muted">查看你的健身和营养数据统计</p>
      </div>

      <!-- 加载状态 -->
      <div v-if="userStore.loading" class="text-center py-6">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p class="mt-2 text-fg-muted">加载中...</p>
      </div>

      <!-- 未登录状态 -->
      <div v-if="!userStore.isLoggedIn" class="text-center py-9">
        <div class="text-5xl mb-3">📊</div>
        <h2 class="text-xl font-semibold text-fg mb-3">还没有数据</h2>
        <p class="text-fg-muted mb-5 text-sm">请先创建用户档案并添加数据</p>
        <router-link to="/user/settings" class="bg-primary hover:bg-primary-dark text-on-primary px-4 py-2.5 rounded-lg transition-colors text-sm">
          去设置页面
        </router-link>
      </div>

      <!-- 数据概览 -->
      <div v-else class="space-y-6">
        <!-- 今日营养摄入 -->
        <div class="bg-surface rounded-lg shadow-md p-4">
          <h3 class="text-lg font-semibold text-fg mb-3">🍎 今日营养摄入</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div class="text-xl font-bold text-red-600 dark:text-red-400">
                {{ userStore.todayNutritionSummary.calories }}
              </div>
              <div class="text-sm text-fg-muted">热量 (kcal)</div>
            </div>
            <div class="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div class="text-xl font-bold text-blue-600 dark:text-blue-400">
                {{ userStore.todayNutritionSummary.protein }}
              </div>
              <div class="text-sm text-fg-muted">蛋白质 (g)</div>
            </div>
            <div class="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div class="text-xl font-bold text-green-600 dark:text-green-400">
                {{ userStore.todayNutritionSummary.carbs }}
              </div>
              <div class="text-sm text-fg-muted">碳水 (g)</div>
            </div>
            <div class="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div class="text-xl font-bold text-yellow-600 dark:text-yellow-400">
                {{ userStore.todayNutritionSummary.fat }}
              </div>
              <div class="text-sm text-fg-muted">脂肪 (g)</div>
            </div>
          </div>
          
          <!-- 营养目标对比 -->
          <div v-if="userStore.nutritionGoals" class="mt-4">
            <h4 class="text-base font-medium text-fg mb-2.5">目标达成情况</h4>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-fg-muted">热量</span>
                  <span class="text-fg">{{ userStore.todayNutritionSummary.calories }} / {{ userStore.nutritionGoals.dailyCalories }}</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-red-500 h-2 rounded-full transition-all duration-300"
                    :style="{ width: `${Math.min(100, (userStore.todayNutritionSummary.calories / userStore.nutritionGoals.dailyCalories) * 100)}%` }"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-fg-muted">蛋白质</span>
                  <span class="text-fg">{{ userStore.todayNutritionSummary.protein }} / {{ userStore.nutritionGoals.protein }}</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    :style="{ width: `${Math.min(100, (userStore.todayNutritionSummary.protein / userStore.nutritionGoals.protein) * 100)}%` }"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-fg-muted">碳水</span>
                  <span class="text-fg">{{ userStore.todayNutritionSummary.carbs }} / {{ userStore.nutritionGoals.carbs }}</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-green-500 h-2 rounded-full transition-all duration-300"
                    :style="{ width: `${Math.min(100, (userStore.todayNutritionSummary.carbs / userStore.nutritionGoals.carbs) * 100)}%` }"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-fg-muted">脂肪</span>
                  <span class="text-fg">{{ userStore.todayNutritionSummary.fat }} / {{ userStore.nutritionGoals.fat }}</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                    :style="{ width: `${Math.min(100, (userStore.todayNutritionSummary.fat / userStore.nutritionGoals.fat) * 100)}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 今日饮食记录 -->
        <div class="bg-surface rounded-lg shadow-md p-4">
          <h3 class="text-lg font-semibold text-fg mb-3">🍽️ 今日饮食记录</h3>
          <div v-if="userStore.todayFoodRecords.length === 0" class="text-center py-6 text-fg-muted text-sm">
            还没有记录今天的饮食
          </div>
          <div v-else class="space-y-2.5">
            <div 
              v-for="record in userStore.todayFoodRecords" 
              :key="record.id"
              class="flex justify-between items-center p-2.5 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div>
                <div class="font-medium text-fg">{{ record.foodName }}</div>
                <div class="text-xs text-fg-muted">
                  {{ record.amount }}g · {{ getMealTypeText(record.mealType) }}
                </div>
              </div>
              <div class="text-right">
                <div class="font-medium text-fg">{{ record.calories }}kcal</div>
                <div class="text-xs text-fg-muted">
                  P:{{ record.protein }}g C:{{ record.carbs }}g F:{{ record.fat }}g
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 身体数据历史 -->
        <div class="bg-surface rounded-lg shadow-md p-4">
          <h3 class="text-lg font-semibold text-fg mb-3">📏 身体数据历史</h3>
          <div v-if="userStore.bodyData.length === 0" class="text-center py-6 text-fg-muted text-sm">
            还没有身体数据记录
          </div>
          <div v-else class="space-y-2.5">
            <div 
              v-for="data in userStore.bodyData.slice(0, 5)" 
              :key="data.id"
              class="flex justify-between items-center p-2.5 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div>
                <div class="font-medium text-fg">
                  {{ data.height }}cm · {{ data.weight }}kg · {{ data.age }}岁
                </div>
                <div class="text-xs text-fg-muted">
                  {{ getGenderText(data.gender) }} · {{ getActivityLevelText(data.activityLevel) }} · {{ getGoalText(data.goal) }}
                </div>
              </div>
              <div class="text-xs text-fg-muted">
                {{ formatDate(data.recordedAt) }}
              </div>
            </div>
          </div>
        </div>

        <!-- 训练记录 -->
        <div class="bg-surface rounded-lg shadow-md p-4">
          <h3 class="text-lg font-semibold text-fg mb-3">💪 今日训练记录</h3>
          <div v-if="userStore.workoutRecords.length === 0" class="text-center py-6 text-fg-muted text-sm">
            还没有记录今天的训练
          </div>
          <div v-else class="space-y-2.5">
            <div 
              v-for="record in userStore.workoutRecords" 
              :key="record.id"
              class="flex justify-between items-center p-2.5 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div>
                <div class="font-medium text-fg">{{ record.workoutType }}</div>
                <div class="text-xs text-fg-muted">
                  {{ record.duration }}分钟 · {{ record.exercises.length }}个动作
                </div>
              </div>
              <div class="text-right">
                <div class="font-medium text-fg">{{ record.calories }}kcal</div>
                <div class="text-xs text-fg-muted">
                  {{ formatTime(record.recordedAt) }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 快速操作 -->
        <div class="bg-surface rounded-lg shadow-md p-4">
          <h3 class="text-lg font-semibold text-fg mb-3">⚡ 快速操作</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button @click="showAddFoodModal = true" class="p-3 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors text-sm">
              <div class="text-xl mb-1.5">🍎</div>
              <div class="text-sm font-medium text-fg">添加饮食</div>
            </button>
            <button @click="showAddWorkoutModal = true" class="p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors text-sm">
              <div class="text-xl mb-1.5">💪</div>
              <div class="text-sm font-medium text-fg">记录训练</div>
            </button>
            <button @click="showAddBodyDataModal = true" class="p-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors text-sm">
              <div class="text-xl mb-1.5">📏</div>
              <div class="text-sm font-medium text-fg">更新身体数据</div>
            </button>
            <router-link to="/user/settings" class="p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-center text-sm">
              <div class="text-xl mb-1.5">⚙️</div>
              <div class="text-sm font-medium text-fg">设置</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加饮食模态框 -->
    <div v-if="showAddFoodModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-surface rounded-lg p-4 w-full max-w-md mx-4">
        <h3 class="text-lg font-semibold text-fg mb-3">添加饮食记录</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">食物名称</label>
            <input 
              v-model="foodForm.foodName" 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="例如：鸡胸肉"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">重量 (g)</label>
            <input 
              v-model.number="foodForm.amount" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="100"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">餐次</label>
            <select v-model="foodForm.mealType" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg">
              <option value="breakfast">早餐</option>
              <option value="lunch">午餐</option>
              <option value="dinner">晚餐</option>
              <option value="snack">加餐</option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">热量 (kcal)</label>
              <input 
                v-model.number="foodForm.calories" 
                type="number" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                placeholder="165"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">蛋白质 (g)</label>
              <input 
                v-model.number="foodForm.protein" 
                type="number" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                placeholder="31"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">碳水 (g)</label>
              <input 
                v-model.number="foodForm.carbs" 
                type="number" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                placeholder="0"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">脂肪 (g)</label>
              <input 
                v-model.number="foodForm.fat" 
                type="number" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                placeholder="3.6"
              />
            </div>
          </div>
        </div>
        <div class="flex gap-2.5 mt-5">
          <button @click="addFoodRecord" class="flex-1 bg-green-500 hover:bg-green-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            添加
          </button>
          <button @click="showAddFoodModal = false" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            取消
          </button>
        </div>
      </div>
    </div>

    <!-- 添加训练模态框 -->
    <div v-if="showAddWorkoutModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-surface rounded-lg p-4 w-full max-w-md mx-4">
        <h3 class="text-lg font-semibold text-fg mb-3">添加训练记录</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">训练类型</label>
            <input 
              v-model="workoutForm.workoutType" 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="例如：胸部训练"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">训练时长 (分钟)</label>
            <input 
              v-model.number="workoutForm.duration" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="60"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">消耗热量 (kcal)</label>
            <input 
              v-model.number="workoutForm.calories" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="300"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">备注</label>
            <textarea 
              v-model="workoutForm.notes" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              rows="3"
              placeholder="训练感受、注意事项等..."
            ></textarea>
          </div>
        </div>
        <div class="flex gap-2.5 mt-5">
          <button @click="addWorkoutRecord" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            添加
          </button>
          <button @click="showAddWorkoutModal = false" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            取消
          </button>
        </div>
      </div>
    </div>

    <!-- 添加身体数据模态框 -->
    <div v-if="showAddBodyDataModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-surface rounded-lg p-4 w-full max-w-md mx-4">
        <h3 class="text-lg font-semibold text-fg mb-3">更新身体数据</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">身高 (cm)</label>
            <input 
              v-model.number="bodyDataForm.height" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="175"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">体重 (kg)</label>
            <input 
              v-model.number="bodyDataForm.weight" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="70"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">年龄</label>
            <input 
              v-model.number="bodyDataForm.age" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="25"
            />
          </div>
        </div>
        <div class="flex gap-2.5 mt-5">
          <button @click="addBodyData" class="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            更新
          </button>
          <button @click="showAddBodyDataModal = false" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

// 响应式数据
const showAddFoodModal = ref(false);
const showAddWorkoutModal = ref(false);
const showAddBodyDataModal = ref(false);

// 表单数据
const foodForm = reactive({
  foodName: '',
  amount: 100,
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  mealType: 'lunch' as 'breakfast' | 'lunch' | 'dinner' | 'snack'
});

const workoutForm = reactive({
  workoutType: '',
  duration: 60,
  calories: 300,
  notes: ''
});

const bodyDataForm = reactive({
  height: 175,
  weight: 70,
  age: 25
});

// 方法
const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('zh-CN');
};

const formatTime = (date: Date) => {
  return new Date(date).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
};

const getMealTypeText = (type: string) => {
  const types = {
    breakfast: '早餐',
    lunch: '午餐',
    dinner: '晚餐',
    snack: '加餐'
  };
  return types[type as keyof typeof types] || type;
};

const getGenderText = (gender: string) => {
  return gender === 'male' ? '男' : '女';
};

const getActivityLevelText = (level: string) => {
  const levels = {
    sedentary: '久坐',
    light: '轻度活动',
    moderate: '中度活动',
    active: '高度活动',
    very_active: '极高活动'
  };
  return levels[level as keyof typeof levels] || level;
};

const getGoalText = (goal: string) => {
  const goals = {
    lose_weight: '减脂',
    maintain: '维持',
    gain_weight: '增重',
    gain_muscle: '增肌'
  };
  return goals[goal as keyof typeof goals] || goal;
};

const addFoodRecord = async () => {
  await userStore.addFoodRecord({
    foodId: `food_${Date.now()}`,
    foodName: foodForm.foodName,
    amount: foodForm.amount,
    calories: foodForm.calories,
    protein: foodForm.protein,
    carbs: foodForm.carbs,
    fat: foodForm.fat,
    mealType: foodForm.mealType
  });
  
  if (!userStore.error) {
    showAddFoodModal.value = false;
    // 重置表单
    Object.assign(foodForm, {
      foodName: '',
      amount: 100,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      mealType: 'lunch'
    });
  }
};

const addWorkoutRecord = async () => {
  await userStore.addWorkoutRecord({
    workoutType: workoutForm.workoutType,
    duration: workoutForm.duration,
    calories: workoutForm.calories,
    exercises: [], // 简化版本，不包含具体动作
    notes: workoutForm.notes
  });
  
  if (!userStore.error) {
    showAddWorkoutModal.value = false;
    // 重置表单
    Object.assign(workoutForm, {
      workoutType: '',
      duration: 60,
      calories: 300,
      notes: ''
    });
  }
};

const addBodyData = async () => {
  await userStore.addBodyData({
    height: bodyDataForm.height,
    weight: bodyDataForm.weight,
    age: bodyDataForm.age,
    gender: userStore.latestBodyData?.gender || 'male',
    activityLevel: userStore.latestBodyData?.activityLevel || 'moderate',
    goal: userStore.latestBodyData?.goal || 'maintain'
  });
  
  if (!userStore.error) {
    showAddBodyDataModal.value = false;
  }
};

// 初始化
onMounted(async () => {
  await userStore.init();
  
  // 如果有最新身体数据，预填充表单
  if (userStore.latestBodyData) {
    bodyDataForm.height = userStore.latestBodyData.height;
    bodyDataForm.weight = userStore.latestBodyData.weight;
    bodyDataForm.age = userStore.latestBodyData.age;
  }
});
</script>

<style scoped>
.user-data-page {
  min-height: calc(100vh - 72px);
  background-color: var(--color-background);
}
</style>
