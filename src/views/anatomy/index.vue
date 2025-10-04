<template>
  <div class="anatomy-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">
          🫀 解剖学习
        </h1>
        <p class="text-lg text-fg-muted">
          深入了解人体结构，掌握运动原理
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 健身解剖总结（文字版） -->
        <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">📖</div>
            <h3 class="text-xl font-semibold mb-2">健身解剖总结</h3>
            <p class="text-fg-muted mb-4">
              系统性学习健身相关的人体解剖知识
            </p>
            <button @click="goToMuscleOverview" class="bg-blue-500 hover:bg-blue-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              查看交互版
            </button>
          </div>
        </div>

        <!-- 关节活动的肌肉（图示版） -->
        <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">🦴</div>
            <h3 class="text-xl font-semibold mb-2">关节活动的肌肉</h3>
            <p class="text-fg-muted mb-4">
              详细展示各关节周围的主要肌肉图解
            </p>
            <button @click="goToJointMuscles" class="bg-green-500 hover:bg-green-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              查看图示版
            </button>
          </div>
        </div>

        <!-- 肌肉的关节活动（图示版） -->
        <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">💪</div>
            <h3 class="text-xl font-semibold mb-2">肌肉的关节活动</h3>
            <p class="text-fg-muted mb-4">
              通过肌肉视角了解其参与的关节活动
            </p>
            <button @click="goToMuscleMovements" class="bg-purple-500 hover:bg-purple-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              查看图示版
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// 跳转到交互式肌肉概览页面
const goToMuscleOverview = () => {
  router.push('/anatomy/muscle-overview');
};

// 跳转到关节活动肌肉页面
const goToJointMuscles = () => {
  router.push('/anatomy/joint-muscles');
};

// 跳转到肌肉活动页面
const goToMuscleMovements = () => {
  router.push('/anatomy/muscle-movements');
};
</script>

<style scoped>
.anatomy-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}
</style>