<template>
  <div class="user-settings-page">
    <div class="container mx-auto px-3 py-6">
      <!-- 页面标题和主题切换器 -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <div class="flex items-center gap-3">
          <ThemeSwitcher />
        </div>
      </div>
      <!-- 加载状态 -->
      <div v-if="userStore.loading" class="text-center py-6">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p class="mt-2 text-fg-muted">加载中...</p>
      </div>

      <!-- 错误提示 -->
      <div v-if="userStore.error" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3.5 mb-5">
        <p class="text-red-600 dark:text-red-400">{{ userStore.error }}</p>
        <button @click="userStore.clearError()" class="mt-2 text-sm text-red-500 hover:text-red-700">关闭</button>
      </div>

      <!-- 未登录状态 -->
      <div v-if="!userStore.isLoggedIn" class="text-center py-9">
        <div class="text-5xl mb-3">👤</div>
        <h2 class="text-xl font-semibold text-fg mb-3">还没有用户信息</h2>
        <p class="text-fg-muted mb-5 text-sm">创建你的用户档案，开始记录你的健身数据</p>
        <button @click="showCreateUserModal = true" class="bg-primary hover:bg-primary-dark text-on-primary px-4 py-2.5 rounded-lg transition-colors text-sm">
          创建用户档案
        </button>
      </div>

      <!-- 已登录状态 -->
      <div v-else class="max-w-2xl mx-auto">
        <!-- 用户信息与身体数据卡片 -->
        <div class="bg-surface rounded-lg shadow-md p-4">
          <h3 class="text-lg font-semibold text-fg mb-3">👤 个人信息</h3>
          <div class="space-y-3">
            <!-- 基本信息 -->
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">姓名</label>
              <input 
                v-model="userForm.name" 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                placeholder="请输入姓名"
              />
            </div>
            
            <!-- 身体数据 -->
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium text-fg-muted mb-2">身高 (cm)</label>
                <input 
                  v-model="bodyDataForm.height" 
                  type="number" 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                  placeholder="175"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-fg-muted mb-2">体重 (kg)</label>
                <input 
                  v-model="bodyDataForm.weight" 
                  type="number" 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                  placeholder="70"
                />
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium text-fg-muted mb-2">年龄</label>
                <input 
                  v-model="bodyDataForm.age" 
                  type="number" 
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                  placeholder="25"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-fg-muted mb-2">性别</label>
                <div class="custom-select" :class="{ 'open': showGenderDropdown }">
                  <div class="select-trigger" @click="toggleGenderDropdown">
                    <span class="select-value">{{ bodyDataForm.gender === 'male' ? '男' : '女' }}</span>
                    <svg class="dropdown-icon" :class="{ 'rotate-180': showGenderDropdown }" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <transition name="dropdown">
                    <div v-if="showGenderDropdown" class="select-dropdown">
                      <div 
                        class="select-option"
                        :class="{ active: bodyDataForm.gender === 'male' }"
                        @click="selectGender('male')"
                      >
                        男
                      </div>
                      <div 
                        class="select-option"
                        :class="{ active: bodyDataForm.gender === 'female' }"
                        @click="selectGender('female')"
                      >
                        女
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">活动水平</label>
              <div class="custom-select" :class="{ 'open': showActivityDropdown }">
                <div class="select-trigger" @click="toggleActivityDropdown">
                  <span class="select-value">{{ getActivityLevelText(bodyDataForm.activityLevel) }}</span>
                  <svg class="dropdown-icon" :class="{ 'rotate-180': showActivityDropdown }" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <transition name="dropdown">
                  <div v-if="showActivityDropdown" class="select-dropdown">
                    <div 
                      v-for="option in activityLevelOptions" 
                      :key="option.value"
                      class="select-option"
                      :class="{ active: bodyDataForm.activityLevel === option.value }"
                      @click="selectActivityLevel(option.value as 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active')"
                    >
                      {{ option.label }}
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            
            <button @click="saveUserData" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-lg transition-colors text-sm">
              保存信息
            </button>
          </div>
        </div>

      </div>

    </div>
    <!-- 创建用户模态框 -->
    <div v-if="showCreateUserModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-surface rounded-lg p-4 w-full max-w-md mx-4">
        <h3 class="text-lg font-semibold text-fg mb-3">创建用户档案</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">用户名</label>
            <input 
              v-model="createUserForm.name" 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="请输入用户名"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">密码</label>
            <input 
              v-model="createUserForm.password" 
              type="password" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="请输入密码"
            />
          </div>
        </div>
        <div class="flex gap-2.5 mt-5">
          <button @click="createUser" class="flex-1 bg-primary hover:bg-primary-dark text-on-primary py-1.5 rounded-lg transition-colors text-sm">
            创建
          </button>
          <button @click="showCreateUserModal = false" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            取消
          </button>
        </div>
      </div>
    </div>


    <!-- 营养目标模态框 -->
    <div v-if="showNutritionModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-surface rounded-lg p-4 w-full max-w-md mx-4">
        <h3 class="text-lg font-semibold text-fg mb-3">营养目标</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">每日热量 (kcal)</label>
            <input 
              v-model.number="nutritionForm.dailyCalories" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="2000"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">蛋白质 (g)</label>
            <input 
              v-model.number="nutritionForm.protein" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="150"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">碳水 (g)</label>
            <input 
              v-model.number="nutritionForm.carbs" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="250"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">脂肪 (g)</label>
            <input 
              v-model.number="nutritionForm.fat" 
              type="number" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
              placeholder="65"
            />
          </div>
        </div>
        <div class="flex gap-2.5 mt-5">
          <button @click="setNutritionGoals" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            保存
          </button>
          <button @click="showNutritionModal = false" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            取消
          </button>
        </div>
      </div>
    </div>

    <!-- 导入数据模态框 -->
    <div v-if="showImportModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-surface rounded-lg p-4 w-full max-w-md mx-4">
        <h3 class="text-lg font-semibold text-fg mb-3">导入数据</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-fg-muted mb-2">选择文件</label>
            <input 
              ref="fileInput"
              type="file" 
              accept=".json"
              @change="handleFileImport"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
            />
          </div>
          <p class="text-sm text-fg-muted">
            请选择之前导出的 JSON 数据文件
          </p>
        </div>
        <div class="flex gap-2.5 mt-5">
          <button @click="showImportModal = false" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1.5 rounded-lg transition-colors text-sm">
            关闭
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/stores/user';
import type { UserSettings } from '@/types/user-data';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';

const userStore = useUserStore();

// 响应式数据
const showCreateUserModal = ref(false);
const showNutritionModal = ref(false);
const showImportModal = ref(false);
const fileInput = ref<HTMLInputElement>();
const showGenderDropdown = ref(false);
const showActivityDropdown = ref(false);

// 表单数据
const userForm = reactive({
  name: ''
});

const createUserForm = reactive({
  name: '',
  password: ''
});

const bodyDataForm = reactive({
  height: 175,
  weight: 70,
  age: 25,
  gender: 'male' as 'male' | 'female',
  activityLevel: 'moderate' as 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active',
  goal: 'maintain' as 'lose_weight' | 'maintain' | 'gain_weight' | 'gain_muscle'
});

// 活动水平选项
const activityLevelOptions = [
  { value: 'sedentary', label: '久坐不动' },
  { value: 'light', label: '轻度活动' },
  { value: 'moderate', label: '中度活动' },
  { value: 'active', label: '高度活动' },
  { value: 'very_active', label: '极高活动' }
];

const nutritionForm = reactive({
  dailyCalories: 2000,
  protein: 150,
  carbs: 250,
  fat: 65
});

const settingsForm = reactive<UserSettings>({
  theme: 'light',
  notifications: {
    mealReminder: true,
    workoutReminder: true,
    waterReminder: true
  },
  privacy: {
    shareData: false,
    analytics: true
  }
});

// 方法

// 性别下拉框
const toggleGenderDropdown = () => {
  showGenderDropdown.value = !showGenderDropdown.value;
  showActivityDropdown.value = false;
};

const selectGender = (gender: 'male' | 'female') => {
  bodyDataForm.gender = gender;
  showGenderDropdown.value = false;
};

// 活动水平下拉框
const toggleActivityDropdown = () => {
  showActivityDropdown.value = !showActivityDropdown.value;
  showGenderDropdown.value = false;
};

const selectActivityLevel = (level: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active') => {
  bodyDataForm.activityLevel = level;
  showActivityDropdown.value = false;
};

const getActivityLevelText = (level: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active') => {
  const option = activityLevelOptions.find(opt => opt.value === level);
  return option ? option.label : '请选择活动水平';
};

const saveUserData = async () => {
  // 更新用户基本信息
  await userStore.updateUser({
    name: userForm.name
  });
  
  // 添加身体数据
  await userStore.addBodyData(bodyDataForm);
};

const createUser = async () => {
  await userStore.createUser({
    name: createUserForm.name,
    password: createUserForm.password
  });
  if (userStore.isLoggedIn) {
    showCreateUserModal.value = false;
    createUserForm.name = '';
    createUserForm.password = '';
  }
};


const setNutritionGoals = async () => {
  await userStore.setNutritionGoals(nutritionForm);
  if (!userStore.error) {
    showNutritionModal.value = false;
  }
};



const handleFileImport = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      await userStore.importUserData(data);
      if (!userStore.error) {
        showImportModal.value = false;
        target.value = '';
      }
    } catch (error) {
      userStore.error = '文件格式错误';
    }
  }
};


// 初始化
// 点击外部关闭下拉框
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.custom-select')) {
    showGenderDropdown.value = false;
    showActivityDropdown.value = false;
  }
};

onMounted(async () => {
  await userStore.init();
  
  // 加载用户数据到表单
  if (userStore.currentUser) {
    userForm.name = userStore.currentUser.name;
  }
  
  if (userStore.latestBodyData) {
    bodyDataForm.height = userStore.latestBodyData.height;
    bodyDataForm.weight = userStore.latestBodyData.weight;
    bodyDataForm.age = userStore.latestBodyData.age;
    bodyDataForm.gender = userStore.latestBodyData.gender;
    bodyDataForm.activityLevel = userStore.latestBodyData.activityLevel;
  }
  
  if (userStore.userSettings) {
    Object.assign(settingsForm, userStore.userSettings);
  }
  
  // 添加点击外部关闭下拉框的监听器
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.user-settings-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}

/* 自定义下拉框样式 */
.custom-select {
  position: relative;
  display: block;
}

.select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: var(--transition-colors);
  user-select: none;
}

.select-trigger:hover {
  background-color: var(--color-border);
}

.select-value {
  font-size: 0.875rem;
  color: var(--color-text);
}

.dropdown-icon {
  width: 1rem;
  height: 1rem;
  color: var(--color-text-secondary);
  transition: transform 0.2s ease;
}

.dropdown-icon.rotate-180 {
  transform: rotate(180deg);
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.25rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 50;
  overflow: hidden;
}

.select-option {
  padding: 0.75rem;
  cursor: pointer;
  transition: var(--transition-colors);
  font-size: 0.875rem;
  color: var(--color-text);
}

.select-option:hover {
  background-color: var(--color-border);
}

.select-option.active {
  background-color: var(--color-primary);
  color: white;
}

/* 下拉动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
