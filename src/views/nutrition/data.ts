// 营养数据接口定义
export interface NutritionData {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  category: string;
}

// 食物数据库
export const foodDatabase: NutritionData[] = [
  {
    id: '1',
    name: '鸡胸肉',
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    category: '肉类'
  },
  {
    id: '2',
    name: '糙米',
    calories: 111,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    fiber: 1.8,
    category: '主食'
  },
  {
    id: '3',
    name: '西兰花',
    calories: 34,
    protein: 2.8,
    carbs: 7,
    fat: 0.4,
    fiber: 2.6,
    category: '蔬菜'
  },
  {
    id: '4',
    name: '香蕉',
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fat: 0.3,
    fiber: 2.6,
    category: '水果'
  },
  {
    id: '5',
    name: '鸡蛋',
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11,
    fiber: 0,
    category: '蛋类'
  }
];

// 营养目标配置
export interface NutritionGoals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export const defaultGoals: NutritionGoals = {
  calories: 2000,
  protein: 150,
  carbs: 250,
  fat: 67,
  fiber: 25
};

// 营养计算工具函数
export function calculateBMI(weight: number, height: number): number {
  return weight / Math.pow(height / 100, 2);
}

export function calculateBMR(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
}

export function calculateTDEE(bmr: number, activityLevel: number): number {
  return bmr * activityLevel;
}
