<template>
  <div class="mobile-home">
    <!-- 移动端首页头部 -->
    <div class="mobile-header">
      <h1 class="app-title">🏋️‍♂️ FitCore</h1>
      <p class="app-subtitle">专业健身工具平台</p>
    </div>

    <!-- 四大功能模块 -->
    <div class="modules-grid">
      <router-link to="/nutrition" class="module-card nutrition">
        <div class="module-icon">🍎</div>
        <div class="module-name">饮食管理</div>
      </router-link>

      <router-link to="/training" class="module-card training">
        <div class="module-icon">💪</div>
        <div class="module-name">训练计划</div>
      </router-link>

      <router-link to="/stretching" class="module-card stretching">
        <div class="module-icon">🧘</div>
        <div class="module-name">拉伸指导</div>
        <div class="module-desc">含解剖学习</div>
      </router-link>

      <router-link to="/user/data" class="module-card user">
        <div class="module-icon">👤</div>
        <div class="module-name">我的</div>
      </router-link>
    </div>

    <!-- 快速入口 -->
    <div class="quick-actions">
      <h3 class="section-title">快速工具</h3>
      <div class="actions-grid">
        <router-link to="/nutrition/calculator" class="action-item">
          <span class="action-icon">🧮</span>
          <span class="action-name">营养计算</span>
        </router-link>
        <router-link to="/training/one-rep-max" class="action-item">
          <span class="action-icon">💯</span>
          <span class="action-name">力量预测</span>
        </router-link>
        <router-link to="/training/exercise-library" class="action-item">
          <span class="action-icon">📚</span>
          <span class="action-name">动作库</span>
        </router-link>
        <router-link to="/about" class="action-item">
          <span class="action-icon">ℹ️</span>
          <span class="action-name">关于我们</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log('移动端首页加载完成');
});
</script>

<style scoped>
.mobile-home {
  padding: 20px 16px;
  background-color: var(--color-background);
  min-height: 100vh;
  padding-bottom: 80px; /* 为底部导航留出空间 */
}

.mobile-header {
  text-align: center;
  margin-bottom: 30px;
}

.app-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--color-text);
}

.app-subtitle {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 30px;
}

.module-card {
  background-color: var(--color-surface);
  border-radius: 16px;
  padding: 24px 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.module-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.module-card.nutrition {
  background: linear-gradient(135deg, #ff9a56, #ff6b35);
  color: white;
}

.module-card.training {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
}

.module-card.stretching {
  background: linear-gradient(135deg, #4ecdc4, #44a8a0);
  color: white;
}

.module-card.anatomy {
  background: linear-gradient(135deg, #95e1d3, #3fc1c9);
  color: white;
}

.module-card.user {
  background: linear-gradient(135deg, #a8e6cf, #7fcdbb);
  color: white;
}

.module-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.module-name {
  font-size: 14px;
  font-weight: 600;
}

.module-desc {
  font-size: 11px;
  opacity: 0.9;
  margin-top: 4px;
}

.quick-actions {
  margin-top: 30px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--color-text);
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.action-item {
  display: flex;
  align-items: center;
  background-color: var(--color-surface);
  border-radius: 12px;
  padding: 16px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.action-item:hover {
  background-color: var(--color-surface-hover);
  transform: translateX(4px);
}

.action-icon {
  font-size: 20px;
  margin-right: 12px;
}

.action-name {
  font-size: 14px;
  color: var(--color-text);
  font-weight: 500;
}

/* 适配不同屏幕尺寸 */
@media (max-width: 360px) {
  .mobile-home {
    padding: 16px 12px;
  }

  .modules-grid {
    gap: 12px;
  }

  .module-card {
    padding: 20px 12px;
  }

  .app-title {
    font-size: 24px;
  }
}
</style>