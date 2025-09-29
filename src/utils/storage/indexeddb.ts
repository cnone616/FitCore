// IndexedDB 工具类 - 处理复杂数据存储

import { StorageKeys, StorageResult, PaginationParams, QueryFilter, PaginatedResult } from '@/types/user-data';

export class IndexedDBManager {
  private dbName = 'FitCoreDB';
  private version = 1;
  private db: IDBDatabase | null = null;

  // 初始化数据库
  async init(): Promise<StorageResult<void>> {
    return new Promise((resolve) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => {
        resolve({ success: false, error: 'Failed to open IndexedDB' });
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve({ success: true });
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        this.createObjectStores(db);
      };
    });
  }

  // 创建对象存储
  private createObjectStores(db: IDBDatabase) {
    // 身体数据表
    if (!db.objectStoreNames.contains(StorageKeys.BODY_DATA)) {
      const bodyDataStore = db.createObjectStore(StorageKeys.BODY_DATA, { keyPath: 'id' });
      bodyDataStore.createIndex('userId', 'userId', { unique: false });
      bodyDataStore.createIndex('recordedAt', 'recordedAt', { unique: false });
    }

    // 营养目标表
    if (!db.objectStoreNames.contains(StorageKeys.NUTRITION_GOALS)) {
      const goalsStore = db.createObjectStore(StorageKeys.NUTRITION_GOALS, { keyPath: 'id' });
      goalsStore.createIndex('userId', 'userId', { unique: false });
      goalsStore.createIndex('createdAt', 'createdAt', { unique: false });
    }

    // 饮食记录表
    if (!db.objectStoreNames.contains(StorageKeys.FOOD_RECORDS)) {
      const foodStore = db.createObjectStore(StorageKeys.FOOD_RECORDS, { keyPath: 'id' });
      foodStore.createIndex('userId', 'userId', { unique: false });
      foodStore.createIndex('recordedAt', 'recordedAt', { unique: false });
      foodStore.createIndex('mealType', 'mealType', { unique: false });
    }

    // 训练记录表
    if (!db.objectStoreNames.contains(StorageKeys.WORKOUT_RECORDS)) {
      const workoutStore = db.createObjectStore(StorageKeys.WORKOUT_RECORDS, { keyPath: 'id' });
      workoutStore.createIndex('userId', 'userId', { unique: false });
      workoutStore.createIndex('recordedAt', 'recordedAt', { unique: false });
      workoutStore.createIndex('workoutType', 'workoutType', { unique: false });
    }
  }

  // 通用添加方法
  async add<T>(storeName: string, data: T): Promise<StorageResult<T>> {
    if (!this.db) {
      return { success: false, error: 'Database not initialized' };
    }

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.add(data);

      request.onsuccess = () => {
        resolve({ success: true, data });
      };

      request.onerror = () => {
        resolve({ success: false, error: 'Failed to add data' });
      };
    });
  }

  // 通用更新方法
  async update<T>(storeName: string, data: T): Promise<StorageResult<T>> {
    if (!this.db) {
      return { success: false, error: 'Database not initialized' };
    }

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(data);

      request.onsuccess = () => {
        resolve({ success: true, data });
      };

      request.onerror = () => {
        resolve({ success: false, error: 'Failed to update data' });
      };
    });
  }

  // 通用删除方法
  async delete(storeName: string, id: string): Promise<StorageResult<void>> {
    if (!this.db) {
      return { success: false, error: 'Database not initialized' };
    }

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(id);

      request.onsuccess = () => {
        resolve({ success: true });
      };

      request.onerror = () => {
        resolve({ success: false, error: 'Failed to delete data' });
      };
    });
  }

  // 通用获取方法
  async get<T>(storeName: string, id: string): Promise<StorageResult<T>> {
    if (!this.db) {
      return { success: false, error: 'Database not initialized' };
    }

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(id);

      request.onsuccess = () => {
        resolve({ success: true, data: request.result });
      };

      request.onerror = () => {
        resolve({ success: false, error: 'Failed to get data' });
      };
    });
  }

  // 通用获取所有方法
  async getAll<T>(storeName: string): Promise<StorageResult<T[]>> {
    if (!this.db) {
      return { success: false, error: 'Database not initialized' };
    }

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve({ success: true, data: request.result });
      };

      request.onerror = () => {
        resolve({ success: false, error: 'Failed to get all data' });
      };
    });
  }

  // 按索引查询
  async getByIndex<T>(storeName: string, indexName: string, value: any): Promise<StorageResult<T[]>> {
    if (!this.db) {
      return { success: false, error: 'Database not initialized' };
    }

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const index = store.index(indexName);
      const request = index.getAll(value);

      request.onsuccess = () => {
        resolve({ success: true, data: request.result });
      };

      request.onerror = () => {
        resolve({ success: false, error: 'Failed to get data by index' });
      };
    });
  }

  // 分页查询
  async getPaginated<T>(
    storeName: string,
    params: PaginationParams,
    filters?: QueryFilter[]
  ): Promise<StorageResult<PaginatedResult<T>>> {
    if (!this.db) {
      return { success: false, error: 'Database not initialized' };
    }

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        let data = request.result as T[];

        // 应用过滤器
        if (filters && filters.length > 0) {
          data = this.applyFilters(data, filters);
        }

        // 排序
        if (params.sortBy) {
          data.sort((a: any, b: any) => {
            const aVal = a[params.sortBy!];
            const bVal = b[params.sortBy!];
            const order = params.sortOrder === 'desc' ? -1 : 1;
            return aVal < bVal ? -1 * order : aVal > bVal ? 1 * order : 0;
          });
        }

        // 分页
        const total = data.length;
        const totalPages = Math.ceil(total / params.limit);
        const startIndex = (params.page - 1) * params.limit;
        const endIndex = startIndex + params.limit;
        const paginatedData = data.slice(startIndex, endIndex);

        resolve({
          success: true,
          data: {
            data: paginatedData,
            total,
            page: params.page,
            limit: params.limit,
            totalPages
          }
        });
      };

      request.onerror = () => {
        resolve({ success: false, error: 'Failed to get paginated data' });
      };
    });
  }

  // 应用过滤器
  private applyFilters<T>(data: T[], filters: QueryFilter[]): T[] {
    return data.filter(item => {
      return filters.every(filter => {
        const value = (item as any)[filter.field];
        switch (filter.operator) {
          case 'eq':
            return value === filter.value;
          case 'gt':
            return value > filter.value;
          case 'lt':
            return value < filter.value;
          case 'gte':
            return value >= filter.value;
          case 'lte':
            return value <= filter.value;
          case 'contains':
            return String(value).toLowerCase().includes(String(filter.value).toLowerCase());
          default:
            return true;
        }
      });
    });
  }

  // 清空指定表
  async clear(storeName: string): Promise<StorageResult<void>> {
    if (!this.db) {
      return { success: false, error: 'Database not initialized' };
    }

    return new Promise((resolve) => {
      const transaction = this.db!.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.clear();

      request.onsuccess = () => {
        resolve({ success: true });
      };

      request.onerror = () => {
        resolve({ success: false, error: 'Failed to clear data' });
      };
    });
  }

  // 关闭数据库连接
  close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}

// 单例实例
export const indexedDBManager = new IndexedDBManager();
