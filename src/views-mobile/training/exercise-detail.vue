<template>
  <div class="exercise-detail-page">
    <!-- 返回按钮 -->
    <div class="page-header">
      <button class="back-button" @click="goBack">
        <i class="iconfont icon-arrow-left mr-2"></i>
        返回训练计划
      </button>
      <h1 class="exercise-title">{{ exerciseName }}</h1>
    </div>

    <!-- 主要内容 -->
    <div class="exercise-content">
      <!-- 动作图片/视频区域 -->
      <div class="media-section">
        <div class="media-placeholder">
          <i class="iconfont icon-video"></i>
          <h3>动作图片/视频</h3>
          <p>后续会添加具体的图片或视频内容</p>
        </div>
      </div>
      
      <!-- 关节活动详情 -->
      <div class="joint-movements-section">
        <h2 class="section-title">关节活动</h2>
        <div class="joint-movements">
          <div 
            v-for="(movement, index) in jointMovements" 
            :key="movement.jointId"
            :class="movementClass(index)"
          >
            <span class="joint-name">{{ movement.jointName }}</span>
            <span class="movement-description">{{ movement.movementDescription }}</span>
          </div>
        </div>
      </div>

      <!-- 动作要领（预留） -->
      <div class="technique-section">
        <h2 class="section-title">动作要领</h2>
        <div class="technique-placeholder">
          <p>后续会添加动作要领、注意事项等详细信息</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// 从URL参数获取动作信息
const exerciseId = computed(() => route.params.id as string);
const exerciseName = computed(() => route.query.name as string || '未知动作');
const jointMovements = computed(() => {
  try {
    return JSON.parse(route.query.joints as string || '[]');
  } catch {
    return [];
  }
});

// 返回上一页
const goBack = () => {
  router.back();
};

// 关节运动样式类
const movementClass = (index: number) => {
  const colors = ['movement-shoulder', 'movement-elbow', 'movement-knee', 'movement-hip', 'movement-spine'];
  return `joint-movement ${colors[index % colors.length]}`;
};
</script>

<style scoped>
.exercise-detail-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.page-header {
  margin-bottom: 3rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  margin-bottom: 1rem;
}

.back-button:hover {
  background-color: var(--color-primary-light);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.exercise-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.exercise-content {
  display: grid;
  gap: 2rem;
}

.media-section {
  background-color: var(--color-surface);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--color-border);
}

.media-placeholder {
  text-align: center;
  padding: 3rem;
  background-color: var(--color-background);
  border: 2px dashed var(--color-border);
  border-radius: 0.75rem;
  color: var(--color-text-muted);
}

.media-placeholder i {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
}

.media-placeholder h3 {
  font-size: 1.5rem;
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
}

.joint-movements-section,
.technique-section {
  background-color: var(--color-surface);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--color-border);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 1.5rem 0;
}

.joint-movements {
  display: grid;
  gap: 1rem;
}

.joint-movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1rem;
}

.joint-name {
  font-weight: 600;
  margin-right: 1rem;
}

.movement-description {
  opacity: 0.9;
}

.technique-placeholder {
  background-color: var(--color-background);
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  color: var(--color-text-muted);
}

/* 关节类型颜色 */
.movement-shoulder {
  background-color: #e3f2fd;
  color: #1976d2;
}

.movement-elbow {
  background-color: #f3e5f5;
  color: #7b1fa2;
}

.movement-knee {
  background-color: #e8f5e8;
  color: #388e3c;
}

.movement-hip {
  background-color: #fff3e0;
  color: #f57c00;
}

.movement-spine {
  background-color: #fce4ec;
  color: #c2185b;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .exercise-detail-page {
    padding: 1rem 0.5rem;
  }
  
  .exercise-title {
    font-size: 1.5rem;
  }
  
  .media-section,
  .joint-movements-section,
  .technique-section {
    padding: 1.5rem;
  }
  
  .media-placeholder {
    padding: 2rem;
  }
  
  .media-placeholder i {
    font-size: 3rem;
  }
  
  .joint-movement {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem;
  }
  
  .joint-name {
    margin-right: 0;
  }
}
</style>
