<template>
  <div class="nutrition-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">📊 日常食物营养率</h1>
        <p class="text-lg text-fg-muted">常见食物的碳水/蛋白/脂肪占比与参考数据</p>
        <div class="mt-4">
          <SearchInput
            v-model="keyword"
            placeholder="搜索食物名称..."
          />
        </div>
      </div>
      <div class="mt-10 text-center mb-4">
        <h2 class="text-2xl font-bold text-fg">🍚 碳水表（含GI）</h2>
        <p class="text-fg-muted">表头：大类 / 食物 / 碳水率 / GI值 / 讲解</p>
      </div>

      <div v-for="category in filteredCarbCategories" :key="category.category" class="mb-8">
        <!-- 分类标题和讲解 -->
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-fg mb-2">{{ category.category }}</h3>
          <div v-if="category.notes" class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p class="text-sm text-fg-muted whitespace-pre-line">{{ category.notes }}</p>
          </div>
        </div>

        <!-- 桌面端表格显示 -->
        <div class="hidden md:block bg-surface rounded-lg shadow-lg overflow-x-auto">
          <table class="min-w-full table-fixed">
            <thead>
              <tr class="text-left text-sm text-fg-muted">
                <th class="px-4 py-3 whitespace-nowrap w-32">食物</th>
                <th class="px-4 py-3 whitespace-nowrap w-20">碳水率</th>
                <th class="px-4 py-3 whitespace-nowrap w-16">GI值</th>
                <th class="px-4 py-3 whitespace-nowrap w-48">讲解</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in category.items" :key="item.id" class="border-t border-gray-200 dark:border-gray-700 text-sm">
                <td class="px-4 py-3 nutrition-item-td">{{ item.name }}</td>
                <td class="px-4 py-3 nutrition-item-td">{{ formatRate(item.carbRate) }}</td>
                <td class="px-4 py-3 nutrition-item-td">{{ item.gi ?? '-' }}</td>
                <td class="px-4 py-3 text-fg-muted">{{ item.notes || '-' }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 移动端卡片显示 -->
        <div class="md:hidden space-y-3">
          <div v-for="item in category.items" :key="item.id" class="bg-surface rounded-lg shadow p-4">
            <div class="flex justify-between items-start mb-2">
              <h4 class="text-lg font-semibold nutrition-item-td">{{ item.name }}</h4>
              <div class="text-right">
                <div class="text-lg font-bold nutrition-item-td">{{ formatRate(item.carbRate) }}</div>
                <div v-if="item.gi" class="text-sm text-fg-muted">GI: {{ item.gi }}</div>
              </div>
            </div>
            <div v-if="item.notes" class="text-sm text-fg-muted">{{ item.notes }}</div>
          </div>
        </div>
      </div>
      <p class="mt-3 text-sm text-fg-muted">注：GI为参考区间值，因品种/成熟度/烹饪方式而变动。</p>

      <div class="mt-10 text-center mb-4">
        <h2 class="text-2xl font-bold text-fg">🥩 蛋白质表</h2>
        <p class="text-fg-muted">表头：大类 / 食物 / 蛋白率 / 定位 / 讲解</p>
      </div>

      <div v-for="category in filteredProteinCategories" :key="category.category" class="mb-8">
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-fg mb-2">{{ category.category }}</h3>
          <div v-if="category.notes" class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <p class="text-sm text-fg-muted whitespace-pre-line">{{ category.notes }}</p>
          </div>
        </div>

        <!-- 桌面端表格显示 -->
        <div class="hidden md:block bg-surface rounded-lg shadow-lg overflow-x-auto">
          <table class="min-w-full table-fixed">
            <thead>
              <tr class="text-left text-sm text-fg-muted">
                <th class="px-4 py-3 whitespace-nowrap w-32">食物</th>
                <th class="px-4 py-3 whitespace-nowrap w-24">蛋白率</th>
                <th class="px-4 py-3 whitespace-nowrap w-24">定位</th>
                <th class="px-4 py-3 whitespace-nowrap w-48">讲解</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in category.items" :key="item.id" class="border-t border-gray-200 dark:border-gray-700 text-sm">
                <td class="px-4 py-3 nutrition-item-td">{{ item.name }}</td>
                <td class="px-4 py-3 nutrition-item-td">{{ item.proteinRate }}</td>
                <td class="px-4 py-3 nutrition-item-td">{{ item.position }}</td>
                <td class="px-4 py-3 text-fg-muted">{{ item.notes || '-' }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 移动端卡片显示 -->
        <div class="md:hidden space-y-3">
          <div v-for="item in category.items" :key="item.id" class="bg-surface rounded-lg shadow p-4">
            <div class="flex justify-between items-start mb-2">
              <h4 class="text-lg font-semibold nutrition-item-td">{{ item.name }}</h4>
              <div class="text-right">
                <div class="text-lg font-bold nutrition-item-td">{{ item.proteinRate }}</div>
                <div class="text-sm text-fg-muted">{{ item.position }}</div>
              </div>
            </div>
            <div v-if="item.notes" class="text-sm text-fg-muted">{{ item.notes }}</div>
          </div>
        </div>
      </div>
      <p class="mt-3 text-sm text-fg-muted">注：蛋白率为每100g食物中蛋白质占比；动物蛋白通常为完全蛋白。</p>

      <div class="mt-10 text-center mb-4">
        <h2 class="text-2xl font-bold text-fg">🥑 脂肪表</h2>
        <p class="text-fg-muted">表头：名称 / 解释</p>
      </div>

      <!-- 桌面端表格显示 -->
      <div class="hidden md:block bg-surface rounded-lg shadow-lg overflow-x-auto">
        <table class="min-w-full table-fixed">
          <thead>
            <tr class="text-left text-sm text-fg-muted">
              <th class="px-4 py-3 whitespace-nowrap w-32">名称</th>
              <th class="px-4 py-3 whitespace-nowrap w-96">解释</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="f in filteredFats" :key="f.id" class="border-t border-gray-200 dark:border-gray-700 text-sm">
              <td class="px-4 py-3 nutrition-item-td">{{ f.name }}</td>
              <td class="px-4 py-3 text-fg-muted">{{ f.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 移动端卡片显示 -->
      <div class="md:hidden space-y-3">
        <div v-for="f in filteredFats" :key="f.id" class="bg-surface rounded-lg shadow p-4">
          <h4 class="text-lg font-semibold nutrition-item-td mb-2">{{ f.name }}</h4>
          <div class="text-sm text-fg-muted">{{ f.description }}</div>
        </div>
      </div>
      <p class="mt-3 text-sm text-fg-muted">注：不同脂肪类型有不同的健康效益和烹饪适用性。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { carbData } from './carbData';
import { proteinData } from './proteinData';
import { fatData } from './fatData';
import SearchInput from '@/components/SearchInput.vue';

const keyword = ref<string>('');

// 过滤碳水化合物分类数据
const filteredCarbCategories = computed(() => {
  const k = keyword.value.trim().toLowerCase();
  if (!k) return carbData;
  
  return carbData.filter(category => {
    // 过滤该分类下的食物
    const filteredItems = category.items.filter(item =>
      item.name.toLowerCase().includes(k) || 
      (item.notes?.toLowerCase().includes(k) ?? false)
    );
    
    // 如果分类名称匹配或该分类下有匹配的食物，则返回该分类
    return category.category.toLowerCase().includes(k) || 
           (category.notes?.toLowerCase().includes(k) ?? false) ||
           filteredItems.length > 0;
  }).map(category => {
    // 过滤该分类下的食物
    const filteredItems = category.items.filter(item =>
      item.name.toLowerCase().includes(k) || 
      (item.notes?.toLowerCase().includes(k) ?? false)
    );
    
    return {
      ...category,
      items: filteredItems.length > 0 ? filteredItems : category.items
    };
  });
});

// 过滤蛋白质分类数据
const filteredProteinCategories = computed(() => {
  const k = keyword.value.trim().toLowerCase();
  if (!k) return proteinData;

  return proteinData.filter(category => {
    const filteredItems = category.items.filter(item =>
      item.name.toLowerCase().includes(k) ||
      item.position.toLowerCase().includes(k) ||
      (item.notes?.toLowerCase().includes(k) ?? false)
    );

    return category.category.toLowerCase().includes(k) ||
           (category.notes?.toLowerCase().includes(k) ?? false) ||
           filteredItems.length > 0;
  }).map(category => {
    const filteredItems = category.items.filter(item =>
      item.name.toLowerCase().includes(k) ||
      item.position.toLowerCase().includes(k) ||
      (item.notes?.toLowerCase().includes(k) ?? false)
    );

    return {
      ...category,
      items: filteredItems.length > 0 ? filteredItems : category.items
    };
  });
});

const filteredFats = computed(() => {
  const k = keyword.value.trim().toLowerCase();
  if (!k) return fatData;
  return fatData.filter(r =>
    r.name.toLowerCase().includes(k) || r.description.toLowerCase().includes(k)
  );
});

function formatRate(v: number) {
  return `${Math.round(v * 100)}%`;
}
</script>

<style scoped>
.nutrition-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}

.nutrition-item-td {
  color: var(--nutrition-item-td);
}

.nutrition-input {
  color: var(--nutrition-input);
}
</style>


