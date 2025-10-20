<template>
  <div class="coach-knowledge-page">
    <div class="page-container">
      <header class="page-header">
        <div class="emoji">🎓</div>
        <div>
          <h1 class="page-title">教练知识储备</h1>
          <p class="page-subtitle">
            集中管理训练理论、营养科学、应急处理、肌肉恢复与训练计划规划的核心知识。
          </p>
        </div>
      </header>

      <main class="page-grid">
        <section class="card overview">
          <CoachKnowledgeOverview />
        </section>

        <section class="card modules">
          <KnowledgeModuleList />
        </section>

        <section class="card certificates">
          <CertificateList />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCoachKnowledgeStore } from '@/stores/coachKnowledge';
import CoachKnowledgeOverview from '@/components/coach-knowledge/CoachKnowledgeOverview.vue';
import KnowledgeModuleList from '@/components/coach-knowledge/KnowledgeModuleList.vue';
import CertificateList from '@/components/coach-knowledge/CertificateList.vue';

const coachKnowledgeStore = useCoachKnowledgeStore();

onMounted(() => {
  coachKnowledgeStore.init();
});
</script>

<style scoped>
.coach-knowledge-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}

.page-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
}

.page-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2.5rem;
}

.emoji {
  font-size: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-fg);
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1rem;
  color: var(--color-fg-muted);
  max-width: 680px;
}

.page-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.card {
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  padding: 1.5rem;
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    text-align: center;
  }

  .emoji {
    font-size: 2.5rem;
  }
}
</style>
