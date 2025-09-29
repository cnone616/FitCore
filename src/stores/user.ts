// 用户数据 Vue Store - 提供响应式状态管理

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { storageManager } from '@/utils/storage/manager';
import { 
  UserProfile, 
  UserBodyData, 
  NutritionGoals, 
  FoodRecord, 
  WorkoutRecord, 
  UserSettings 
} from '@/types/user-data';

export const useUserStore = defineStore('user', () => {
  // 状态
  const currentUser = ref<UserProfile | null>(null);
  const userSettings = ref<UserSettings | null>(null);
  const bodyData = ref<UserBodyData[]>([]);
  const nutritionGoals = ref<NutritionGoals | null>(null);
  const foodRecords = ref<FoodRecord[]>([]);
  const workoutRecords = ref<WorkoutRecord[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // 计算属性
  const isLoggedIn = computed(() => currentUser.value !== null);
  const latestBodyData = computed(() => {
    if (bodyData.value.length === 0) return null;
    return bodyData.value.sort((a, b) => b.recordedAt.getTime() - a.recordedAt.getTime())[0];
  });
  const todayFoodRecords = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return foodRecords.value.filter(record => {
      const recordDate = new Date(record.recordedAt);
      return recordDate >= today && recordDate < tomorrow;
    });
  });
  const todayNutritionSummary = computed(() => {
    return todayFoodRecords.value.reduce((acc, record) => ({
      calories: acc.calories + record.calories,
      protein: acc.protein + record.protein,
      carbs: acc.carbs + record.carbs,
      fat: acc.fat + record.fat
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
  });

  // 初始化
  async function init() {
    loading.value = true;
    error.value = null;
    
    try {
      await storageManager.init();
      await loadCurrentUser();
      if (currentUser.value) {
        await Promise.all([
          loadUserSettings(),
          loadBodyData(),
          loadNutritionGoals(),
          loadTodayFoodRecords(),
          loadTodayWorkoutRecords()
        ]);
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '初始化失败';
    } finally {
      loading.value = false;
    }
  }

  // 用户管理
  async function createUser(profile: Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>) {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.createUser(profile);
      if (result.success && result.data) {
        currentUser.value = result.data;
        await loadUserSettings();
      } else {
        error.value = result.error || '创建用户失败';
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '创建用户失败';
    } finally {
      loading.value = false;
    }
  }

  async function loadCurrentUser() {
    try {
      const result = await storageManager.getCurrentUser();
      if (result.success) {
        currentUser.value = result.data || null;
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '加载用户信息失败';
    }
  }

  async function findUserByName(name: string) {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.findUserByName(name);
      return result;
    } catch (err) {
      error.value = err instanceof Error ? err.message : '查找用户失败';
      return { success: false, error: error.value };
    } finally {
      loading.value = false;
    }
  }

  async function setCurrentUser(user: UserProfile) {
    currentUser.value = user;
    await loadUserSettings();
  }

  async function updateUser(profile: Partial<UserProfile>) {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.updateUser(profile);
      if (result.success && result.data) {
        currentUser.value = result.data;
      } else {
        error.value = result.error || '更新用户信息失败';
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '更新用户信息失败';
    } finally {
      loading.value = false;
    }
  }

  async function deleteUser() {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.deleteUser();
      if (result.success) {
        // 清空所有状态
        currentUser.value = null;
        userSettings.value = null;
        bodyData.value = [];
        nutritionGoals.value = null;
        foodRecords.value = [];
        workoutRecords.value = [];
      } else {
        error.value = result.error || '删除用户失败';
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '删除用户失败';
    } finally {
      loading.value = false;
    }
  }

  // 身体数据管理
  async function addBodyData(data: Omit<UserBodyData, 'id' | 'userId' | 'recordedAt'>) {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.addBodyData(data);
      if (result.success && result.data) {
        bodyData.value.push(result.data);
      } else {
        error.value = result.error || '添加身体数据失败';
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '添加身体数据失败';
    } finally {
      loading.value = false;
    }
  }

  async function loadBodyData() {
    try {
      const result = await storageManager.getBodyData();
      if (result.success) {
        bodyData.value = result.data || [];
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '加载身体数据失败';
    }
  }

  // 营养目标管理
  async function setNutritionGoals(goals: Omit<NutritionGoals, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.setNutritionGoals(goals);
      if (result.success && result.data) {
        nutritionGoals.value = result.data;
      } else {
        error.value = result.error || '设置营养目标失败';
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '设置营养目标失败';
    } finally {
      loading.value = false;
    }
  }

  async function loadNutritionGoals() {
    try {
      const result = await storageManager.getNutritionGoals();
      if (result.success) {
        nutritionGoals.value = result.data || null;
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '加载营养目标失败';
    }
  }

  // 饮食记录管理
  async function addFoodRecord(record: Omit<FoodRecord, 'id' | 'userId' | 'recordedAt'>) {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.addFoodRecord(record);
      if (result.success && result.data) {
        foodRecords.value.push(result.data);
      } else {
        error.value = result.error || '添加饮食记录失败';
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '添加饮食记录失败';
    } finally {
      loading.value = false;
    }
  }

  async function loadTodayFoodRecords() {
    try {
      const result = await storageManager.getFoodRecords(new Date());
      if (result.success) {
        foodRecords.value = result.data || [];
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '加载饮食记录失败';
    }
  }

  async function loadFoodRecordsByDate(date: Date) {
    try {
      const result = await storageManager.getFoodRecords(date);
      if (result.success) {
        foodRecords.value = result.data || [];
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '加载饮食记录失败';
    }
  }

  // 训练记录管理
  async function addWorkoutRecord(record: Omit<WorkoutRecord, 'id' | 'userId' | 'recordedAt'>) {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.addWorkoutRecord(record);
      if (result.success && result.data) {
        workoutRecords.value.push(result.data);
      } else {
        error.value = result.error || '添加训练记录失败';
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '添加训练记录失败';
    } finally {
      loading.value = false;
    }
  }

  async function loadTodayWorkoutRecords() {
    try {
      const result = await storageManager.getWorkoutRecords(new Date());
      if (result.success) {
        workoutRecords.value = result.data || [];
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '加载训练记录失败';
    }
  }

  // 用户设置管理
  async function loadUserSettings() {
    try {
      const result = await storageManager.getUserSettings();
      if (result.success) {
        userSettings.value = result.data || null;
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '加载用户设置失败';
    }
  }

  async function updateUserSettings(settings: Partial<UserSettings>) {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.setUserSettings(settings);
      if (result.success && result.data) {
        userSettings.value = result.data;
      } else {
        error.value = result.error || '更新用户设置失败';
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '更新用户设置失败';
    } finally {
      loading.value = false;
    }
  }

  // 数据导出导入
  async function exportUserData() {
    try {
      return await storageManager.exportUserData();
    } catch (err) {
      error.value = err instanceof Error ? err.message : '导出数据失败';
      return { success: false, error: error.value };
    }
  }

  async function importUserData(data: any) {
    loading.value = true;
    error.value = null;
    
    try {
      const result = await storageManager.importUserData(data);
      if (result.success) {
        // 重新加载所有数据
        await init();
      } else {
        error.value = result.error || '导入数据失败';
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : '导入数据失败';
    } finally {
      loading.value = false;
    }
  }

  // 清除错误
  function clearError() {
    error.value = null;
  }

  return {
    // 状态
    currentUser,
    userSettings,
    bodyData,
    nutritionGoals,
    foodRecords,
    workoutRecords,
    loading,
    error,
    
    // 计算属性
    isLoggedIn,
    latestBodyData,
    todayFoodRecords,
    todayNutritionSummary,
    
    // 方法
    init,
    createUser,
    loadCurrentUser,
    findUserByName,
    setCurrentUser,
    updateUser,
    deleteUser,
    addBodyData,
    loadBodyData,
    setNutritionGoals,
    loadNutritionGoals,
    addFoodRecord,
    loadTodayFoodRecords,
    loadFoodRecordsByDate,
    addWorkoutRecord,
    loadTodayWorkoutRecords,
    loadUserSettings,
    updateUserSettings,
    exportUserData,
    importUserData,
    clearError
  };
});
