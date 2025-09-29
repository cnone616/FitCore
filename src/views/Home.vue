<template>
  <div class="home-page">
    <div class="container mx-auto px-4 py-8">
      <!-- 欢迎区域 -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-fg mb-6">
          🏋️‍♂️ FitCore
        </h1>
        <p class="text-xl text-fg-muted mb-8 max-w-3xl mx-auto">
          专业健身工具平台，涵盖饮食、训练、拉伸、解剖四大核心板块，助您科学健身，健康生活
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/nutrition" class="bg-orange-500 hover:bg-orange-600 text-on-primary px-6 py-3 rounded-lg transition-colors">
            🍎 饮食管理
          </router-link>
          <router-link to="/training" class="bg-red-500 hover:bg-red-600 text-on-primary px-6 py-3 rounded-lg transition-colors">
            💪 训练计划
          </router-link>
          <router-link to="/stretching" class="bg-blue-500 hover:bg-blue-600 text-on-primary px-6 py-3 rounded-lg transition-colors">
            🧘 拉伸指导
          </router-link>
          <router-link to="/anatomy" class="bg-green-500 hover:bg-green-600 text-on-primary px-6 py-3 rounded-lg transition-colors">
            🫀 解剖学习
          </router-link>
        </div>
      </div>
      <!-- 核心功能展示 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- 饮食管理 -->
        <div class="bg-surface rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="text-3xl mr-3">🍎</div>
            <h2 class="text-2xl font-bold home-center-item-h2">饮食管理</h2>
          </div>
          <p class="text-fg-muted mb-4">
            科学营养搭配，健康饮食管理。提供营养计算、食谱推荐、卡路里追踪等功能。
          </p>
          <ul class="space-y-2 text-fg-muted">
            <li>• 营养计算器</li>
            <li>• 个性化食谱推荐</li>
            <li>• 卡路里追踪</li>
            <li>• 食物数据库</li>
          </ul>
          <router-link to="/nutrition" class="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
            开始使用
          </router-link>
        </div>

        <!-- 训练计划 -->
        <div class="bg-surface rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="text-3xl mr-3">💪</div>
            <h2 class="text-2xl font-bold home-center-item-h2">训练计划</h2>
          </div>
          <p class="text-fg-muted mb-4">
            个性化训练方案，科学健身指导。涵盖力量训练、有氧运动、动作库等。
          </p>
          <ul class="space-y-2 text-fg-muted">
            <li>• 个性化训练方案</li>
            <li>• 丰富动作库</li>
            <li>• 进度跟踪</li>
            <li>• 训练记录</li>
          </ul>
          <router-link to="/training" class="inline-block mt-4 bg-red-500 hover:bg-red-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
            开始训练
          </router-link>
        </div>

        <!-- 拉伸指导 -->
        <div class="bg-surface rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="text-3xl mr-3">🧘</div>
            <h2 class="text-2xl font-bold home-center-item-h2">拉伸指导</h2>
          </div>
          <p class="text-fg-muted mb-4">
            专业拉伸动作，提升柔韧性和恢复能力。包含动态拉伸、静态拉伸、瑜伽等。
          </p>
          <ul class="space-y-2 text-fg-muted">
            <li>• 动态拉伸</li>
            <li>• 静态拉伸</li>
            <li>• 瑜伽拉伸</li>
            <li>• 柔韧性测试</li>
          </ul>
          <router-link to="/stretching" class="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
            开始拉伸
          </router-link>
        </div>

        <!-- 解剖学习 -->
        <div class="bg-surface rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="text-3xl mr-3">🫀</div>
            <h2 class="text-2xl font-bold home-center-item-h2">解剖学习</h2>
          </div>
          <p class="text-fg-muted mb-4">
            深入了解人体结构，掌握运动原理。提供肌肉解剖、骨骼系统、3D模型等。
          </p>
          <ul class="space-y-2 text-fg-muted">
            <li>• 肌肉解剖图</li>
            <li>• 骨骼系统</li>
            <li>• 关节运动</li>
            <li>• 3D交互模型</li>
          </ul>
          <router-link to="/anatomy" class="inline-block mt-4 bg-green-500 hover:bg-green-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
            开始学习
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

onMounted(async () => {
  await userStore.init();
  console.log('FitCore 首页加载完成');
});
</script>

<style scoped>
.home-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }

  .home-center-item-h2 {
    color: var(--home-center-item-h2);
  }
}
</style>