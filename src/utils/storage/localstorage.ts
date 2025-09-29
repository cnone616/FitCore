// localStorage 工具类 - 处理简单配置数据

import { StorageKeys, StorageResult } from '@/types/user-data';

export class LocalStorageManager {
  // 检查 localStorage 是否可用
  private isAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  // 通用设置方法
  set<T>(key: string, value: T): StorageResult<void> {
    if (!this.isAvailable()) {
      return { success: false, error: 'localStorage is not available' };
    }

    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to save to localStorage' };
    }
  }

  // 通用获取方法
  get<T>(key: string): StorageResult<T | null> {
    if (!this.isAvailable()) {
      return { success: false, error: 'localStorage is not available' };
    }

    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return { success: true, data: null };
      }
      const parsed = JSON.parse(item) as T;
      return { success: true, data: parsed };
    } catch (error) {
      return { success: false, error: 'Failed to parse data from localStorage' };
    }
  }

  // 通用删除方法
  remove(key: string): StorageResult<void> {
    if (!this.isAvailable()) {
      return { success: false, error: 'localStorage is not available' };
    }

    try {
      localStorage.removeItem(key);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to remove from localStorage' };
    }
  }

  // 检查键是否存在
  has(key: string): boolean {
    if (!this.isAvailable()) {
      return false;
    }
    return localStorage.getItem(key) !== null;
  }

  // 清空所有数据
  clear(): StorageResult<void> {
    if (!this.isAvailable()) {
      return { success: false, error: 'localStorage is not available' };
    }

    try {
      localStorage.clear();
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to clear localStorage' };
    }
  }

  // 获取所有键名
  keys(): string[] {
    if (!this.isAvailable()) {
      return [];
    }

    try {
      return Object.keys(localStorage);
    } catch {
      return [];
    }
  }

  // 获取存储大小（字节）
  getSize(): number {
    if (!this.isAvailable()) {
      return 0;
    }

    try {
      let total = 0;
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          total += localStorage[key].length + key.length;
        }
      }
      return total;
    } catch {
      return 0;
    }
  }

  // 用户相关方法
  setUserProfile(profile: any): StorageResult<void> {
    return this.set(StorageKeys.USER_PROFILE, profile);
  }

  getUserProfile<T>(): StorageResult<T | null> {
    return this.get<T>(StorageKeys.USER_PROFILE);
  }

  setUserSettings(settings: any): StorageResult<void> {
    return this.set(StorageKeys.USER_SETTINGS, settings);
  }

  getUserSettings<T>(): StorageResult<T | null> {
    return this.get<T>(StorageKeys.USER_SETTINGS);
  }

  setCurrentUserId(userId: string): StorageResult<void> {
    return this.set(StorageKeys.CURRENT_USER_ID, userId);
  }

  getCurrentUserId(): StorageResult<string | null> {
    return this.get<string>(StorageKeys.CURRENT_USER_ID);
  }

  removeCurrentUserId(): StorageResult<void> {
    return this.remove(StorageKeys.CURRENT_USER_ID);
  }

  // 批量操作
  setMultiple(items: Record<string, any>): StorageResult<void> {
    if (!this.isAvailable()) {
      return { success: false, error: 'localStorage is not available' };
    }

    try {
      for (const [key, value] of Object.entries(items)) {
        const serialized = JSON.stringify(value);
        localStorage.setItem(key, serialized);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to save multiple items to localStorage' };
    }
  }

  getMultiple<T>(keys: string[]): StorageResult<Record<string, T | null>> {
    if (!this.isAvailable()) {
      return { success: false, error: 'localStorage is not available' };
    }

    try {
      const result: Record<string, T | null> = {};
      for (const key of keys) {
        const item = localStorage.getItem(key);
        result[key] = item ? JSON.parse(item) : null;
      }
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: 'Failed to get multiple items from localStorage' };
    }
  }

  // 监听存储变化
  onStorageChange(callback: (key: string, newValue: any, oldValue: any) => void): () => void {
    const handler = (event: StorageEvent) => {
      if (event.storageArea === localStorage) {
        let newValue = null;
        let oldValue = null;
        
        try {
          newValue = event.newValue ? JSON.parse(event.newValue) : null;
          oldValue = event.oldValue ? JSON.parse(event.oldValue) : null;
        } catch {
          newValue = event.newValue;
          oldValue = event.oldValue;
        }
        
        callback(event.key || '', newValue, oldValue);
      }
    };

    window.addEventListener('storage', handler);
    
    // 返回清理函数
    return () => {
      window.removeEventListener('storage', handler);
    };
  }
}

// 单例实例
export const localStorageManager = new LocalStorageManager();
