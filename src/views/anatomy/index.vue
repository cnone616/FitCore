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
        <!-- 肌肉解剖图 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">💪</div>
            <h3 class="text-xl font-semibold mb-2">肌肉解剖图</h3>
            <p class="text-fg-muted mb-4">
              详细的人体肌肉结构图解
            </p>
            <button class="bg-blue-500 hover:bg-blue-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              查看解剖图
            </button>
          </div>
        </div>

        <!-- 骨骼系统 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">🦴</div>
            <h3 class="text-xl font-semibold mb-2">骨骼系统</h3>
            <p class="text-fg-muted mb-4">
              人体骨骼结构详解
            </p>
            <button class="bg-green-500 hover:bg-green-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              学习骨骼
            </button>
          </div>
        </div>

        <!-- 关节运动 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">🔄</div>
            <h3 class="text-xl font-semibold mb-2">关节运动</h3>
            <p class="text-fg-muted mb-4">
              关节运动原理和范围
            </p>
            <button class="bg-purple-500 hover:bg-purple-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              了解关节
            </button>
          </div>
        </div>

        <!-- 运动原理 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">⚡</div>
            <h3 class="text-xl font-semibold mb-2">运动原理</h3>
            <p class="text-fg-muted mb-4">
              肌肉收缩和运动机制
            </p>
            <button class="bg-orange-500 hover:bg-orange-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              学习原理
            </button>
          </div>
        </div>

        <!-- 解剖知识库 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">📚</div>
            <h3 class="text-xl font-semibold mb-2">解剖知识库</h3>
            <p class="text-fg-muted mb-4">
              丰富的解剖学知识资料
            </p>
            <button class="bg-red-500 hover:bg-red-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              浏览知识库
            </button>
          </div>
        </div>

        <!-- 3D模型 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">🎯</div>
            <h3 class="text-xl font-semibold mb-2">3D模型</h3>
            <p class="text-fg-muted mb-4">
              交互式3D人体模型
            </p>
            <button class="bg-indigo-500 hover:bg-indigo-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              查看3D模型
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// 解剖学习页面逻辑
</script>

<style scoped>
.anatomy-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}
</style>
