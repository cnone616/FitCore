<template>
  <div class="training-page">
    <div class="container mx-auto px-3 py-6">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-semibold text-fg mb-3">
          💪 训练计划
        </h1>
        <p class="text-base text-fg-muted">
          个性化训练方案，科学健身指导
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- 动作库 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">🏋️</div>
            <h3 class="text-lg font-semibold mb-1">动作库</h3>
            <p class="text-sm text-fg-muted mb-3">
              丰富的健身动作视频和说明
            </p>
            <router-link to="/training/exercise-library" class="inline-block bg-green-500 hover:bg-green-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              浏览动作
            </router-link>
          </div>
        </div>

      <!-- 健身房三分化 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">🏋️‍♂️</div>
            <h3 class="text-lg font-semibold mb-1">健身房三分化</h3>
            <p class="text-sm text-fg-muted mb-3">经典三分化力量训练</p>
            <router-link to="/training/gym-3-split" class="inline-block bg-orange-500 hover:bg-orange-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              进入
            </router-link>
          </div>
        </div>

        <!-- 健身房四分化(单练肩) -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">🧑‍🦰</div>
            <h3 class="text-lg font-semibold mb-1">健身房四分化(单练肩)</h3>
            <p class="text-sm text-fg-muted mb-3">肩部专项四分化</p>
            <router-link to="/training/gym-4-split-shoulders" class="inline-block bg-red-500 hover:bg-red-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              进入
            </router-link>
          </div>
        </div>

        <!-- 健身房四分化(单练手臂) -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">💪</div>
            <h3 class="text-lg font-semibold mb-1">健身房四分化(单练手臂)</h3>
            <p class="text-sm text-fg-muted mb-3">手臂专项四分化</p>
            <router-link to="/training/gym-4-split-arms" class="inline-block bg-indigo-500 hover:bg-indigo-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              进入
            </router-link>
          </div>
        </div>

        <!-- 居家三分话 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">🏠</div>
            <h3 class="text-lg font-semibold mb-1">居家三分化</h3>
            <p class="text-sm text-fg-muted mb-3">无需器械的居家三分化</p>
            <router-link to="/training/home-3-split" class="inline-block bg-green-500 hover:bg-green-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              进入
            </router-link>
          </div>
        </div>

        <!-- 最大力量预测公式 -->
      <div class="bg-surface rounded-lg shadow-md p-4">
          <div class="text-center">
            <div class="text-2xl mb-3">📐</div>
            <h3 class="text-lg font-semibold mb-1">最大力量预测公式</h3>
            <p class="text-sm text-fg-muted mb-3">1RM 估算工具与说明</p>
            <router-link to="/training/one-rep-max" class="inline-block bg-purple-500 hover:bg-purple-600 text-on-primary px-3 py-1.5 rounded-md transition-colors text-sm">
              进入
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// 训练计划页面逻辑
</script>

<style scoped>
.training-page {
  min-height: calc(100vh - 72px);
  background-color: var(--color-background);
}
</style>
