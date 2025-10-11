<template>
  <div class="nutrition-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">📘 分类食物营养率</h1>
        <p class="text-lg text-fg-muted">基于数据源的名称/碳水/蛋白质/脂肪展示与搜索</p>
        <div class="mt-4">
          <SearchInput
            v-model="keyword"
            placeholder="搜索食物名称..."
          />
        </div>
      </div>

      <!-- 桌面端表格显示 -->
      <div class="hidden md:block bg-surface rounded-lg shadow-lg overflow-x-auto">
        <table class="min-w-full table-fixed">
          <thead>
            <tr class="text-left text-sm text-fg-muted">
              <th class="px-4 py-3 whitespace-nowrap w-64">名称</th>
              <th class="px-4 py-3 whitespace-nowrap w-28">碳水(g/100g)</th>
              <th class="px-4 py-3 whitespace-nowrap w-28">蛋白质(g/100g)</th>
              <th class="px-4 py-3 whitespace-nowrap w-28">脂肪(g/100g)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filtered" :key="item.id" class="border-t border-gray-200 dark:border-gray-700 text-sm">
              <td class="px-4 py-3 nutrition-item-td">{{ item.name }}</td>
              <td class="px-4 py-3 nutrition-item-td">{{ formatGram(item.carb) }}</td>
              <td class="px-4 py-3 nutrition-item-td">{{ formatGram(item.protein) }}</td>
              <td class="px-4 py-3 nutrition-item-td">{{ formatGram(item.fat) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 移动端卡片显示 -->
      <div class="md:hidden space-y-3">
        <div v-for="item in filtered" :key="item.id" class="bg-surface rounded-lg shadow p-4">
          <div class="flex justify-between items-start mb-2">
            <h4 class="text-lg font-semibold nutrition-item-td">{{ item.name }}</h4>
            <div class="text-right">
              <div class="text-xs text-fg-muted mb-1">每100g含量</div>
              <div class="text-sm nutrition-item-td">碳水：<b>{{ formatGram(item.carb) }}</b>/100g</div>
              <div class="text-sm nutrition-item-td">蛋白：<b>{{ formatGram(item.protein) }}</b>/100g</div>
              <div class="text-sm nutrition-item-td">脂肪：<b>{{ formatGram(item.fat) }}</b>/100g</div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-3 text-sm text-fg-muted">注：所有数值均为每100g食物所含克数。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { nutrientRates, type NutrientRow } from './data';
import SearchInput from '@/components/SearchInput.vue';

const keyword = ref<string>('');

const filtered = computed<NutrientRow[]>(() => {
  const k = keyword.value.trim().toLowerCase();
  if (!k) return nutrientRates;
  return nutrientRates.filter(r => r.name.toLowerCase().includes(k));
});

function formatGram(v: number) {
  return `${v}g`;
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
</style>


