<template>
  <div class="training-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">
          💪 训练计划
        </h1>
        <p class="text-lg text-fg-muted">
          个性化训练方案，科学健身指导
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 动作库 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">🏋️</div>
            <h3 class="text-xl font-semibold mb-2">动作库</h3>
            <p class="text-fg-muted mb-4">
              丰富的健身动作视频和说明
            </p>
            <router-link to="/training/exercise-library" class="inline-block bg-green-500 hover:bg-green-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              浏览动作
            </router-link>
          </div>
        </div>

      <!-- 健身房三分化 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">🏋️‍♂️</div>
            <h3 class="text-xl font-semibold mb-2">健身房三分化</h3>
            <p class="text-fg-muted mb-4">经典三分化力量训练</p>
            <router-link to="/training/gym-3-split" class="inline-block bg-orange-500 hover:bg-orange-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              进入
            </router-link>
          </div>
        </div>

        <!-- 健身房四分化(单练肩) -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">🧑‍🦰</div>
            <h3 class="text-xl font-semibold mb-2">健身房四分化(单练肩)</h3>
            <p class="text-fg-muted mb-4">肩部专项四分化</p>
            <router-link to="/training/gym-4-split-shoulders" class="inline-block bg-red-500 hover:bg-red-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              进入
            </router-link>
          </div>
        </div>

        <!-- 健身房四分化(单练手臂) -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">💪</div>
            <h3 class="text-xl font-semibold mb-2">健身房四分化(单练手臂)</h3>
            <p class="text-fg-muted mb-4">手臂专项四分化</p>
            <router-link to="/training/gym-4-split-arms" class="inline-block bg-indigo-500 hover:bg-indigo-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              进入
            </router-link>
          </div>
        </div>

        <!-- 居家三分话 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">🏠</div>
            <h3 class="text-xl font-semibold mb-2">居家三分化</h3>
            <p class="text-fg-muted mb-4">无需器械的居家三分化</p>
            <router-link to="/training/home-3-split" class="inline-block bg-green-500 hover:bg-green-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
              进入
            </router-link>
          </div>
        </div>

        <!-- 最大力量预测公式 -->
      <div class="bg-surface rounded-lg shadow-lg p-6">
          <div class="text-center">
            <div class="text-3xl mb-4">📐</div>
            <h3 class="text-xl font-semibold mb-2">最大力量预测公式</h3>
            <p class="text-fg-muted mb-4">1RM 估算工具与说明</p>
            <router-link to="/training/one-rep-max" class="inline-block bg-purple-500 hover:bg-purple-600 text-on-primary px-4 py-2 rounded-lg transition-colors">
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
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}
</style>
