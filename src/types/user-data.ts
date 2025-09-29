// 用户数据模型和类型定义

// 用户基础信息
export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  password: string; // 添加密码字段
  createdAt: Date;
  updatedAt: Date;
}

// 用户身体数据
export interface UserBodyData {
  id: string;
  userId: string;
  height: number; // cm
  weight: number; // kg
  age: number;
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  goal: 'lose_weight' | 'maintain' | 'gain_weight' | 'gain_muscle';
  recordedAt: Date;
}

// 营养目标
export interface NutritionGoals {
  id: string;
  userId: string;
  dailyCalories: number;
  protein: number; // g
  carbs: number; // g
  fat: number; // g
  fiber?: number; // g
  water?: number; // ml
  createdAt: Date;
  updatedAt: Date;
}

// 饮食记录
export interface FoodRecord {
  id: string;
  userId: string;
  foodId: string; // 关联到 nutrient-rates 数据
  foodName: string;
  amount: number; // g
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  recordedAt: Date;
  notes?: string;
}

// 训练记录
export interface WorkoutRecord {
  id: string;
  userId: string;
  workoutType: string;
  duration: number; // minutes
  calories: number;
  exercises: ExerciseRecord[];
  recordedAt: Date;
  notes?: string;
}

// 单个训练动作记录
export interface ExerciseRecord {
  id: string;
  name: string;
  sets: SetRecord[];
  restTime?: number; // seconds
}

// 组数记录
export interface SetRecord {
  reps: number;
  weight?: number; // kg
  duration?: number; // seconds (for cardio)
  rpe?: number; // Rate of Perceived Exertion 1-10
}

// 用户设置
export interface UserSettings {
  theme: 'light' | 'dark';
  notifications: {
    mealReminder: boolean;
    workoutReminder: boolean;
    waterReminder: boolean;
  };
  privacy: {
    shareData: boolean;
    analytics: boolean;
  };
}

// 存储键名枚举
export enum StorageKeys {
  // localStorage 键名
  USER_PROFILE = 'user_profile',
  USER_SETTINGS = 'user_settings',
  CURRENT_USER_ID = 'current_user_id',
  
  // IndexedDB 表名
  BODY_DATA = 'body_data',
  NUTRITION_GOALS = 'nutrition_goals',
  FOOD_RECORDS = 'food_records',
  WORKOUT_RECORDS = 'workout_records',
}

// 存储操作结果
export interface StorageResult<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// 分页查询参数
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// 查询过滤器
export interface QueryFilter {
  field: string;
  operator: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | 'contains';
  value: any;
}

// 分页查询结果
export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
