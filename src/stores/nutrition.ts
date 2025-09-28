import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getFatLossPlan } from '@/views/nutrition/fat-loss/plans-data';
import { fatLossSections } from '@/views/nutrition/fat-loss/sections-data';
import type { FatLossPlan } from '@/views/nutrition/fat-loss/plans-data';

export const useNutritionStore = defineStore('nutrition', () => {
  // 当前方案数据
  const currentPlan = ref<FatLossPlan | null>(null);
  const currentPlanId = ref<string | null>(null);

  // 用户基本信息
  const gender = ref<'male' | 'female'>('male');
  const heightCm = ref<number | null>(null);
  const weightKg = ref<number | null>(null);
  const age = ref<number | null>(null);
  const strengthLevel = ref<'beginner' | 'intermediate' | 'advanced'>('beginner');

  // 热量相关数据
  const strengthKcal = ref<number>(0);
  const cardioKcal = ref<number>(0);
  const bmrManual = ref<number | null>(null);
  const maintainManual = ref<number | null>(null);

  // 已计算的数据（从页面组件获取）
  const calculatedBmi = ref<string>('');
  const calculatedBmiCategory = ref<string>('');
  const calculatedProteinTarget = ref<string>('');
  const calculatedCarbTarget = ref<string>('');
  const calculatedFatTarget = ref<string>('');
  const calculatedBmr = ref<string>('');
  const calculatedMaintain = ref<string>('');
  // 热量设计派生数据（与 HeatDesign 展示一致）
  const balanceTrainKcal = ref<number>(0);
  const balanceRestKcal = ref<number>(0);
  const eatTrainKcal = ref<number>(0);
  const eatRestKcal = ref<number>(0);

  // 计算属性
  const hasValidInputs = computed(() => !!(weightKg.value && heightCm.value && age.value));
  
  // BMI 计算
  const bmi = computed(() => {
    if (!weightKg.value || !heightCm.value) return null;
    const heightM = heightCm.value / 100;
    return Number((weightKg.value / (heightM * heightM)).toFixed(1));
  });
  
  const bmiStatus = computed(() => {
    if (!bmi.value) return '';
    if (bmi.value < 18.5) return '偏瘦';
    if (bmi.value <= 24) return '正常';
    if (bmi.value <= 28) return '超重';
    return '肥胖';
  });

  // 方案相关方法
  function setCurrentPlan(planId: string) {
    const plan = getFatLossPlan(planId);
    if (plan) {
      currentPlan.value = plan;
      currentPlanId.value = planId;
      // 保存到 localStorage
      localStorage.setItem('nutrition_current_plan_id', planId);
    }
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

  // 用户数据更新方法
  function updateUserData(data: {
    gender?: 'male' | 'female';
    heightCm?: number | null;
    weightKg?: number | null;
    age?: number | null;
    strengthLevel?: 'beginner' | 'intermediate' | 'advanced';
  }) {
    if (data.gender !== undefined) gender.value = data.gender;
    if (data.heightCm !== undefined) heightCm.value = data.heightCm;
    if (data.weightKg !== undefined) weightKg.value = data.weightKg;
    if (data.age !== undefined) age.value = data.age;
    if (data.strengthLevel !== undefined) strengthLevel.value = data.strengthLevel;
    
    // 保存到 localStorage
    saveUserDataToStorage();
  }

  function updateCalorieData(data: {
    strengthKcal?: number;
    cardioKcal?: number;
    bmrManual?: number | null;
    maintainManual?: number | null;
  }) {
    if (data.strengthKcal !== undefined) strengthKcal.value = data.strengthKcal;
    if (data.cardioKcal !== undefined) cardioKcal.value = data.cardioKcal;
    if (data.bmrManual !== undefined) bmrManual.value = data.bmrManual;
    if (data.maintainManual !== undefined) maintainManual.value = data.maintainManual;
    
    // 保存到 localStorage
    saveUserDataToStorage();
  }

  // 更新已计算的数据
  function updateCalculatedData(data: {
    bmi?: string;
    bmiCategory?: string;
    proteinTarget?: string;
    carbTarget?: string;
    fatTarget?: string;
    bmr?: string;
    maintain?: string;
    balanceTrainKcal?: number;
    balanceRestKcal?: number;
    eatTrainKcal?: number;
    eatRestKcal?: number;
  }) {
    if (data.bmi !== undefined) calculatedBmi.value = data.bmi;
    if (data.bmiCategory !== undefined) calculatedBmiCategory.value = data.bmiCategory;
    if (data.proteinTarget !== undefined) calculatedProteinTarget.value = data.proteinTarget;
    if (data.carbTarget !== undefined) calculatedCarbTarget.value = data.carbTarget;
    if (data.fatTarget !== undefined) calculatedFatTarget.value = data.fatTarget;
    if (data.bmr !== undefined) calculatedBmr.value = data.bmr;
    if (data.maintain !== undefined) calculatedMaintain.value = data.maintain;
    if (data.balanceTrainKcal !== undefined) balanceTrainKcal.value = data.balanceTrainKcal;
    if (data.balanceRestKcal !== undefined) balanceRestKcal.value = data.balanceRestKcal;
    if (data.eatTrainKcal !== undefined) eatTrainKcal.value = data.eatTrainKcal;
    if (data.eatRestKcal !== undefined) eatRestKcal.value = data.eatRestKcal;
    
    // 保存到 localStorage
    saveUserDataToStorage();
  }

  // 数据持久化方法
  function saveUserDataToStorage() {
    const userData = {
      gender: gender.value,
      heightCm: heightCm.value,
      weightKg: weightKg.value,
      age: age.value,
      strengthLevel: strengthLevel.value,
      strengthKcal: strengthKcal.value,
      cardioKcal: cardioKcal.value,
      bmrManual: bmrManual.value,
      maintainManual: maintainManual.value,
      // 已计算的数据
      calculatedBmi: calculatedBmi.value,
      calculatedBmiCategory: calculatedBmiCategory.value,
      calculatedProteinTarget: calculatedProteinTarget.value,
      calculatedCarbTarget: calculatedCarbTarget.value,
      calculatedFatTarget: calculatedFatTarget.value,
      calculatedBmr: calculatedBmr.value,
      calculatedMaintain: calculatedMaintain.value,
      balanceTrainKcal: balanceTrainKcal.value,
      balanceRestKcal: balanceRestKcal.value,
      eatTrainKcal: eatTrainKcal.value,
      eatRestKcal: eatRestKcal.value,
    };
    localStorage.setItem('nutrition_user_data', JSON.stringify(userData));
  }

  function loadUserDataFromStorage() {
    try {
      const stored = localStorage.getItem('nutrition_user_data');
      if (stored) {
        const userData = JSON.parse(stored);
        gender.value = userData.gender || 'male';
        heightCm.value = userData.heightCm || null;
        weightKg.value = userData.weightKg || null;
        age.value = userData.age || null;
        strengthLevel.value = userData.strengthLevel || 'beginner';
        strengthKcal.value = userData.strengthKcal || 0;
        cardioKcal.value = userData.cardioKcal || 0;
        bmrManual.value = userData.bmrManual || null;
        maintainManual.value = userData.maintainManual || null;
        // 加载已计算的数据
        calculatedBmi.value = userData.calculatedBmi || '';
        calculatedBmiCategory.value = userData.calculatedBmiCategory || '';
        calculatedProteinTarget.value = userData.calculatedProteinTarget || '';
        calculatedCarbTarget.value = userData.calculatedCarbTarget || '';
        calculatedFatTarget.value = userData.calculatedFatTarget || '';
        calculatedBmr.value = userData.calculatedBmr || '';
        calculatedMaintain.value = userData.calculatedMaintain || '';
        balanceTrainKcal.value = userData.balanceTrainKcal || 0;
        balanceRestKcal.value = userData.balanceRestKcal || 0;
        eatTrainKcal.value = userData.eatTrainKcal || 0;
        eatRestKcal.value = userData.eatRestKcal || 0;
      }
    } catch (error) {
      console.error('Failed to load user data from storage:', error);
    }
  }

  function loadCurrentPlanFromStorage() {
    try {
      const storedPlanId = localStorage.getItem('nutrition_current_plan_id');
      if (storedPlanId) {
        setCurrentPlan(storedPlanId);
      }
    } catch (error) {
      console.error('Failed to load current plan from storage:', error);
    }
  }

  // 初始化方法
  function initializeStore() {
    loadUserDataFromStorage();
    loadCurrentPlanFromStorage();
  }

  // 清除所有数据
  function clearAllData() {
    currentPlan.value = null;
    currentPlanId.value = null;
    gender.value = 'male';
    heightCm.value = null;
    weightKg.value = null;
    age.value = null;
    strengthLevel.value = 'beginner';
    strengthKcal.value = 0;
    cardioKcal.value = 0;
    bmrManual.value = null;
    maintainManual.value = null;
    // 清除已计算的数据
    calculatedBmi.value = '';
    calculatedBmiCategory.value = '';
    calculatedProteinTarget.value = '';
    calculatedCarbTarget.value = '';
    calculatedFatTarget.value = '';
    calculatedBmr.value = '';
    calculatedMaintain.value = '';
    balanceTrainKcal.value = 0;
    balanceRestKcal.value = 0;
    eatTrainKcal.value = 0;
    eatRestKcal.value = 0;
    
    localStorage.removeItem('nutrition_user_data');
    localStorage.removeItem('nutrition_current_plan_id');
  }

  return {
    // 状态
    currentPlan,
    currentPlanId,
    gender,
    heightCm,
    weightKg,
    age,
    strengthLevel,
    strengthKcal,
    cardioKcal,
    bmrManual,
    maintainManual,
    fatLossSections,
    
    // 已计算的数据
    calculatedBmi,
    calculatedBmiCategory,
    calculatedProteinTarget,
    calculatedCarbTarget,
    calculatedFatTarget,
    calculatedBmr,
    calculatedMaintain,
    balanceTrainKcal,
    balanceRestKcal,
    eatTrainKcal,
    eatRestKcal,
    
    // 计算属性
    hasValidInputs,
    bmi,
    bmiStatus,
    
    // 方法
    setCurrentPlan,
    getPlanIcon,
    updateUserData,
    updateCalorieData,
    updateCalculatedData,
    saveUserDataToStorage,
    loadUserDataFromStorage,
    loadCurrentPlanFromStorage,
    initializeStore,
    clearAllData,
  };
});
