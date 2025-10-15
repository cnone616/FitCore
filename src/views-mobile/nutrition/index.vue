<template>
  <div class="nutrition-page">
    <div class="container mx-auto px-3 py-6">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-semibold text-fg mb-3">
          🍎 饮食管理
        </h1>
        <p class="text-base text-fg-muted">
          科学营养搭配，健康饮食管理
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- 减脂饮食方案 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">🥗</div>
            <h3 class="text-lg font-semibold mb-1 nutrition-center-item-h3">减脂饮食方案</h3>
            <p class="text-sm text-fg-muted mb-3">能量赤字与蛋白优先的科学减脂</p>
            <router-link to="/nutrition/fat-loss" class="inline-block bg-green-500 hover:bg-green-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              查看方案
            </router-link>
          </div>
        </div>

        <!-- 增肌饮食方案 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">🍖</div>
            <h3 class="text-lg font-semibold mb-1 nutrition-center-item-h3">增肌饮食方案</h3>
            <p class="text-sm text-fg-muted mb-3">适度热量盈余，高蛋白覆盖训练</p>
            <router-link to="/nutrition/muscle-gain" class="inline-block bg-orange-500 hover:bg-orange-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              查看方案
            </router-link>
          </div>
        </div>

        <!-- 有氧增加饮食热量 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">🔥</div>
            <h3 class="text-lg font-semibold mb-1 nutrition-center-item-h3">有氧增加饮食热量</h3>
            <p class="text-sm text-fg-muted mb-3">按有氧消耗弹性补回热量</p>
            <router-link to="/nutrition/cardio-calories" class="inline-block bg-red-500 hover:bg-red-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              查看建议
            </router-link>
          </div>
        </div>

        <!-- 问答汇总 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">❓</div>
            <h3 class="text-lg font-semibold mb-1 nutrition-center-item-h3">问答汇总</h3>
            <p class="text-sm text-fg-muted mb-3">饮食常见问题集中解答</p>
            <router-link to="/nutrition/faq" class="inline-block bg-indigo-500 hover:bg-indigo-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              查看问答
            </router-link>
          </div>
        </div>

        <!-- 日常食物营养率 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">📊</div>
            <h3 class="text-lg font-semibold mb-1 nutrition-center-item-h3">日常食物营养率</h3>
            <p class="text-sm text-fg-muted mb-3">常见食物的碳水/蛋白/脂肪占比</p>
            <router-link to="/nutrition/nutrient-rates" class="inline-block bg-blue-500 hover:bg-blue-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              查看数据
            </router-link>
          </div>
        </div>

        <!-- 分类食物营养率（基于 data.ts 数据源） -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">📘</div>
            <h3 class="text-lg font-semibold mb-1 nutrition-center-item-h3">分类食物营养率</h3>
            <p class="text-sm text-fg-muted mb-3">一键搜索，名称/碳水/蛋白/脂肪</p>
            <router-link to="/nutrition/food-nutrient-rate" class="inline-block bg-cyan-500 hover:bg-cyan-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              打开列表
            </router-link>
          </div>
        </div>

        <!-- 用户数据管理 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">👤</div>
            <h3 class="text-lg font-semibold mb-1 nutrition-center-item-h3">用户数据管理</h3>
            <p class="text-sm text-fg-muted mb-3">个人信息、身体数据、营养目标</p>
            <router-link to="/user/settings" class="inline-block bg-purple-500 hover:bg-purple-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              用户设置
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// 饮食管理页面逻辑
</script>

<style scoped>
.nutrition-page {
  min-height: calc(100vh - 72px);
  background-color: var(--color-background);
}
.nutrition-center-item-h3 {
  color: var(--nutrition-center-item-h3);
}
</style>
