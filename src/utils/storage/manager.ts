// 统一存储管理器 - 提供透明化的存储接口

import { indexedDBManager } from './indexeddb';
import { localStorageManager } from './localstorage';
import { 
  StorageKeys, 
  StorageResult, 
  UserProfile, 
  UserBodyData, 
  NutritionGoals, 
  FoodRecord, 
  WorkoutRecord, 
  UserSettings,
  PaginationParams,
  QueryFilter,
  PaginatedResult
} from '@/types/user-data';

export class StorageManager {
  private initialized = false;

  // 初始化存储系统
  async init(): Promise<StorageResult<void>> {
    if (this.initialized) {
      return { success: true };
    }

    const result = await indexedDBManager.init();
    if (result.success) {
      this.initialized = true;
    }
    return result;
  }

  // 用户管理
  async createUser(profile: Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>): Promise<StorageResult<UserProfile>> {
    const userProfile: UserProfile = {
      ...profile,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = localStorageManager.setUserProfile(userProfile);
    if (result.success) {
      await localStorageManager.setCurrentUserId(userProfile.id);
    }
    
    return result.success 
      ? { success: true, data: userProfile }
      : { success: false, error: result.error };
  }

  async getCurrentUser(): Promise<StorageResult<UserProfile | null>> {
    const userIdResult = localStorageManager.getCurrentUserId();
    if (!userIdResult.success || !userIdResult.data) {
      return { success: true, data: null };
    }

    return localStorageManager.getUserProfile<UserProfile>();
  }

  async findUserByName(name: string): Promise<StorageResult<UserProfile | null>> {
    try {
      // 从 localStorage 中查找用户
      const result = localStorageManager.getUserProfile<UserProfile>();
      if (result.success && result.data && result.data.name === name) {
        return { success: true, data: result.data };
      }
      
      // 如果当前用户不匹配，返回未找到
      return { success: true, data: null };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : '查找用户失败' 
      };
    }
  }

  async updateUser(profile: Partial<UserProfile>): Promise<StorageResult<UserProfile>> {
    const currentUserResult = await this.getCurrentUser();
    if (!currentUserResult.success || !currentUserResult.data) {
      return { success: false, error: 'No current user found' };
    }

    const updatedProfile: UserProfile = {
      ...currentUserResult.data,
      ...profile,
      updatedAt: new Date()
    };

    const result = localStorageManager.setUserProfile(updatedProfile);
    return result.success 
      ? { success: true, data: updatedProfile }
      : { success: false, error: result.error };
  }

  async deleteUser(): Promise<StorageResult<void>> {
    const userIdResult = localStorageManager.getCurrentUserId();
    if (!userIdResult.success || !userIdResult.data) {
      return { success: false, error: 'No current user found' };
    }

    // 删除所有相关数据
    await Promise.all([
      localStorageManager.remove(StorageKeys.USER_PROFILE),
      localStorageManager.removeCurrentUserId(),
      indexedDBManager.clear(StorageKeys.BODY_DATA),
      indexedDBManager.clear(StorageKeys.NUTRITION_GOALS),
      indexedDBManager.clear(StorageKeys.FOOD_RECORDS),
      indexedDBManager.clear(StorageKeys.WORKOUT_RECORDS)
    ]);

    return { success: true };
  }

  // 身体数据管理
  async addBodyData(data: Omit<UserBodyData, 'id' | 'userId' | 'recordedAt'>): Promise<StorageResult<UserBodyData>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    const bodyData: UserBodyData = {
      ...data,
      id: this.generateId(),
      userId: currentUser.data.id,
      recordedAt: new Date()
    };

    return indexedDBManager.add(StorageKeys.BODY_DATA, bodyData);
  }

  async getBodyData(): Promise<StorageResult<UserBodyData[]>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    return indexedDBManager.getByIndex(StorageKeys.BODY_DATA, 'userId', currentUser.data.id);
  }

  async getLatestBodyData(): Promise<StorageResult<UserBodyData | null>> {
    const result = await this.getBodyData();
    if (!result.success || !result.data || result.data.length === 0) {
      return { success: true, data: null };
    }

    // 按时间排序，返回最新的
    const sorted = result.data.sort((a, b) => b.recordedAt.getTime() - a.recordedAt.getTime());
    return { success: true, data: sorted[0] };
  }

  // 营养目标管理
  async setNutritionGoals(goals: Omit<NutritionGoals, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<StorageResult<NutritionGoals>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    const nutritionGoals: NutritionGoals = {
      ...goals,
      id: this.generateId(),
      userId: currentUser.data.id,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return indexedDBManager.add(StorageKeys.NUTRITION_GOALS, nutritionGoals);
  }

  async getNutritionGoals(): Promise<StorageResult<NutritionGoals | null>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    const result = await indexedDBManager.getByIndex<NutritionGoals>(StorageKeys.NUTRITION_GOALS, 'userId', currentUser.data.id);
    if (!result.success || !result.data || result.data.length === 0) {
      return { success: true, data: null };
    }

    // 返回最新的目标
    const sorted = result.data.sort((a: NutritionGoals, b: NutritionGoals) => b.createdAt.getTime() - a.createdAt.getTime());
    return { success: true, data: sorted[0] };
  }

  // 饮食记录管理
  async addFoodRecord(record: Omit<FoodRecord, 'id' | 'userId' | 'recordedAt'>): Promise<StorageResult<FoodRecord>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    const foodRecord: FoodRecord = {
      ...record,
      id: this.generateId(),
      userId: currentUser.data.id,
      recordedAt: new Date()
    };

    return indexedDBManager.add(StorageKeys.FOOD_RECORDS, foodRecord);
  }

  async getFoodRecords(date?: Date): Promise<StorageResult<FoodRecord[]>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    const result = await indexedDBManager.getByIndex<FoodRecord>(StorageKeys.FOOD_RECORDS, 'userId', currentUser.data.id);
    if (!result.success) {
      return result;
    }

    let records = result.data || [];
    
    // 如果指定了日期，过滤该日期的记录
    if (date) {
      const targetDate = new Date(date);
      targetDate.setHours(0, 0, 0, 0);
      const nextDay = new Date(targetDate);
      nextDay.setDate(nextDay.getDate() + 1);
      
      records = records.filter((record: FoodRecord) => {
        const recordDate = new Date(record.recordedAt);
        return recordDate >= targetDate && recordDate < nextDay;
      });
    }

    return { success: true, data: records };
  }

  async getFoodRecordsPaginated(params: PaginationParams, filters?: QueryFilter[]): Promise<StorageResult<PaginatedResult<FoodRecord>>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    // 添加用户ID过滤器
    const userFilter: QueryFilter = { field: 'userId', operator: 'eq', value: currentUser.data.id };
    const allFilters = filters ? [userFilter, ...filters] : [userFilter];

    return indexedDBManager.getPaginated(StorageKeys.FOOD_RECORDS, params, allFilters);
  }

  // 训练记录管理
  async addWorkoutRecord(record: Omit<WorkoutRecord, 'id' | 'userId' | 'recordedAt'>): Promise<StorageResult<WorkoutRecord>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    const workoutRecord: WorkoutRecord = {
      ...record,
      id: this.generateId(),
      userId: currentUser.data.id,
      recordedAt: new Date()
    };

    return indexedDBManager.add(StorageKeys.WORKOUT_RECORDS, workoutRecord);
  }

  async getWorkoutRecords(date?: Date): Promise<StorageResult<WorkoutRecord[]>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    const result = await indexedDBManager.getByIndex<WorkoutRecord>(StorageKeys.WORKOUT_RECORDS, 'userId', currentUser.data.id);
    if (!result.success) {
      return result;
    }

    let records = result.data || [];
    
    // 如果指定了日期，过滤该日期的记录
    if (date) {
      const targetDate = new Date(date);
      targetDate.setHours(0, 0, 0, 0);
      const nextDay = new Date(targetDate);
      nextDay.setDate(nextDay.getDate() + 1);
      
      records = records.filter((record: WorkoutRecord) => {
        const recordDate = new Date(record.recordedAt);
        return recordDate >= targetDate && recordDate < nextDay;
      });
    }

    return { success: true, data: records };
  }

  // 用户设置管理
  async setUserSettings(settings: Partial<UserSettings>): Promise<StorageResult<UserSettings>> {
    const currentSettingsResult = localStorageManager.getUserSettings<UserSettings>();
    const currentSettings = currentSettingsResult.success ? currentSettingsResult.data : null;

    const defaultSettings: UserSettings = {
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
    };

    const updatedSettings: UserSettings = {
      ...defaultSettings,
      ...currentSettings,
      ...settings
    };

    const result = localStorageManager.setUserSettings(updatedSettings);
    return result.success 
      ? { success: true, data: updatedSettings }
      : { success: false, error: result.error };
  }

  async getUserSettings(): Promise<StorageResult<UserSettings>> {
    const result = localStorageManager.getUserSettings<UserSettings>();
    if (result.success && result.data) {
      return { success: true, data: result.data };
    }

    // 返回默认设置
    const defaultSettings: UserSettings = {
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
    };

    return { success: true, data: defaultSettings };
  }

  // 数据统计
  async getDailyNutritionSummary(date: Date): Promise<StorageResult<{ calories: number; protein: number; carbs: number; fat: number }>> {
    const recordsResult = await this.getFoodRecords(date);
    if (!recordsResult.success) {
      return { success: false, error: recordsResult.error };
    }

    const records = recordsResult.data || [];
    const summary = records.reduce((acc, record) => ({
      calories: acc.calories + record.calories,
      protein: acc.protein + record.protein,
      carbs: acc.carbs + record.carbs,
      fat: acc.fat + record.fat
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

    return { success: true, data: summary };
  }

  // 工具方法
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // 数据导出
  async exportUserData(): Promise<StorageResult<any>> {
    const currentUser = await this.getCurrentUser();
    if (!currentUser.success || !currentUser.data) {
      return { success: false, error: 'No current user found' };
    }

    const userId = currentUser.data.id;
    
    const [bodyData, nutritionGoals, foodRecords, workoutRecords, settings] = await Promise.all([
      indexedDBManager.getByIndex(StorageKeys.BODY_DATA, 'userId', userId),
      indexedDBManager.getByIndex(StorageKeys.NUTRITION_GOALS, 'userId', userId),
      indexedDBManager.getByIndex(StorageKeys.FOOD_RECORDS, 'userId', userId),
      indexedDBManager.getByIndex(StorageKeys.WORKOUT_RECORDS, 'userId', userId),
      localStorageManager.getUserSettings()
    ]);

    const exportData = {
      user: currentUser.data,
      bodyData: bodyData.data || [],
      nutritionGoals: nutritionGoals.data || [],
      foodRecords: foodRecords.data || [],
      workoutRecords: workoutRecords.data || [],
      settings: settings.data,
      exportedAt: new Date().toISOString()
    };

    return { success: true, data: exportData };
  }

  // 数据导入
  async importUserData(data: any): Promise<StorageResult<void>> {
    try {
      // 验证数据格式
      if (!data.user || !data.exportedAt) {
        return { success: false, error: 'Invalid data format' };
      }

      // 导入用户信息
      await localStorageManager.setUserProfile(data.user);
      await localStorageManager.setCurrentUserId(data.user.id);

      // 导入各种数据
      if (data.bodyData) {
        for (const item of data.bodyData) {
          await indexedDBManager.add(StorageKeys.BODY_DATA, item);
        }
      }

      if (data.nutritionGoals) {
        for (const item of data.nutritionGoals) {
          await indexedDBManager.add(StorageKeys.NUTRITION_GOALS, item);
        }
      }

      if (data.foodRecords) {
        for (const item of data.foodRecords) {
          await indexedDBManager.add(StorageKeys.FOOD_RECORDS, item);
        }
      }

      if (data.workoutRecords) {
        for (const item of data.workoutRecords) {
          await indexedDBManager.add(StorageKeys.WORKOUT_RECORDS, item);
        }
      }

      if (data.settings) {
        await localStorageManager.setUserSettings(data.settings);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to import data' };
    }
  }
}

// 单例实例
export const storageManager = new StorageManager();
