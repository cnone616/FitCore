<template>
  <div class="coach-knowledge-mobile">
    <div class="page-container">
      <header class="page-header">
        <div class="emoji">🎓</div>
        <div>
          <h1 class="page-title">教练知识储备</h1>
          <p class="page-subtitle">
            面向移动端的知识路径导航，稍后将接入进度、模块与证书组件。
          </p>
        </div>
      </header>

      <section class="card placeholder">
        <h2 class="section-title">学习进度概览</h2>
        <p class="section-text">后续步骤会展示整体学习进度与统计信息。</p>
      </section>

      <section class="card placeholder">
        <h2 class="section-title">知识模块</h2>
        <p class="section-text">稍后将把模块列表与知识点折叠内容加入此处。</p>
      </section>

      <section class="card placeholder">
        <h2 class="section-title">专业证书</h2>
        <p class="section-text">未来步骤将展示证书详情与推荐先修模块。</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCoachKnowledgeStore } from '@/stores/coachKnowledge';

const coachKnowledgeStore = useCoachKnowledgeStore();

onMounted(() => {
  coachKnowledgeStore.init();
});
</script>

<style scoped>
.coach-knowledge-mobile {
  min-height: calc(100vh - 72px);
  background-color: var(--color-background);
}

.page-container {
  max-width: 640px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.page-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.emoji {
  font-size: 2.5rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-fg);
  margin-bottom: 0.4rem;
}

.page-subtitle {
  font-size: 0.95rem;
  color: var(--color-fg-muted);
  line-height: 1.5;
}

.card {
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}

.section-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-fg);
  margin-bottom: 0.75rem;
}

.section-text {
  font-size: 0.9rem;
  color: var(--color-fg-muted);
  line-height: 1.6;
}

@media (max-width: 420px) {
  .page-container {
    padding: 2rem 1rem 2.5rem;
  }

  .page-title {
    font-size: 1.75rem;
  }
}
</style>
