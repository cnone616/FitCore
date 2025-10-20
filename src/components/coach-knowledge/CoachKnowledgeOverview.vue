<template>
  <section class="overview-card">
    <header class="overview-header">
      <div class="title-group">
        <div class="emoji">📊</div>
        <div>
          <h2 class="heading">总览进度</h2>
          <p class="subtitle">掌握整体学习状态与剩余知识点，方便制定下一步计划。</p>
        </div>
      </div>
      <el-tag :type="statusType" effect="plain" size="small">
        {{ statusLabel }}
      </el-tag>
    </header>

    <div class="progress-block">
      <div class="progress-label">完成度</div>
      <div class="progress-value">{{ overall.percent }}%</div>
    </div>
    <ProgressTracker :percent="overall.percent" :status="overall.status" />

    <dl class="stats-grid" aria-label="整体统计">
      <div class="stat-item">
        <dt>已完成知识点</dt>
        <dd>{{ overall.completedTopics }}</dd>
      </div>
      <div class="stat-item">
        <dt>学习中知识点</dt>
        <dd>{{ overall.inProgressTopics }}</dd>
      </div>
      <div class="stat-item">
        <dt>总知识点</dt>
        <dd>{{ overall.totalTopics }}</dd>
      </div>
    </dl>

    <div class="insight-block" v-if="nextModule || unlockedCertificates.length">
      <h3 class="insight-title">下一步建议</h3>
      <ul class="insight-list">
        <li v-if="nextModule">
          <span class="label">优先学习模块：</span>
          <strong>{{ nextModule.name }}</strong>
        </li>
        <li v-for="cert in unlockedCertificates" :key="cert.id">
          <span class="label">已解锁证书：</span>
          <strong>{{ cert.name }}</strong>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCoachKnowledgeStore } from '@/stores/coachKnowledge';

const coachKnowledgeStore = useCoachKnowledgeStore();

const overall = computed(() => coachKnowledgeStore.overallProgress);
const nextModule = computed(() => coachKnowledgeStore.nextModuleSuggestion);
const unlockedCertificates = computed(() => coachKnowledgeStore.unlockedCertificates);

const statusLabel = computed(() => {
  if (overall.value.status === 'completed') return '已完成';
  if (overall.value.status === 'in_progress') return '学习中';
  return '未开始';
});

const statusType = computed(() => {
  if (overall.value.status === 'completed') return 'success';
  if (overall.value.status === 'in_progress') return 'warning';
  return 'info';
});
</script>

<style scoped>
.overview-card {
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background-color: var(--color-surface);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.overview-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
}

.title-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.emoji {
  font-size: 2rem;
}

.heading {
  font-size: 1.45rem;
  font-weight: 600;
  color: var(--color-fg);
}

.subtitle {
  margin-top: 0.25rem;
  font-size: 0.95rem;
  color: var(--color-fg-muted);
  line-height: 1.5;
  max-width: 360px;
}

.progress-block {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: var(--color-fg-muted);
}

.progress-value {
  font-weight: 600;
  color: var(--color-fg);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.stat-item {
  border-radius: 0.75rem;
  background-color: var(--color-surface-2);
  padding: 1rem;
  border: 1px solid var(--color-border-subtle, rgba(255, 255, 255, 0.04));
}

.stat-item dt {
  font-size: 0.85rem;
  color: var(--color-fg-muted);
  margin-bottom: 0.5rem;
}

.stat-item dd {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-fg);
}

@media (max-width: 540px) {
  .overview-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .title-group {
    align-items: flex-start;
  }

  .subtitle {
    max-width: none;
  }
}
</style>
