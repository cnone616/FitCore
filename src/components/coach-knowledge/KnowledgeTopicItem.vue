<template>
  <article class="topic-card" :aria-label="topic.title">
    <header class="topic-header">
      <div class="title-block">
        <h4 class="topic-title">{{ topic.title }}</h4>
        <p class="topic-summary">{{ topic.summary }}</p>
      </div>
      <div class="status-block">
        <el-tag size="small" :type="statusTag" effect="plain">
          {{ statusLabel }}
        </el-tag>
        <div class="status-controls" role="group" aria-label="学习状态切换">
          <el-button
            size="small"
            :type="status === 'in_progress' ? 'primary' : 'default'"
            @click="markInProgress"
            aria-pressed="status === 'in_progress'"
          >
            学习中
          </el-button>
          <el-button
            size="small"
            :type="status === 'completed' ? 'success' : 'default'"
            @click="markCompleted"
            aria-pressed="status === 'completed'"
          >
            已完成
          </el-button>
          <el-button size="small" @click="resetStatus">
            重置
          </el-button>
        </div>
      </div>
    </header>

    <footer v-if="topic.resources?.length" class="resource-block">
      <div class="resource-label">参考资料</div>
      <ul class="resource-list">
        <li v-for="resource in topic.resources" :key="resource.url">
          <a
            :href="resource.url"
            class="resource-link"
            target="_blank"
            rel="noopener"
          >
            {{ resource.label }}
          </a>
        </li>
      </ul>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { KnowledgeTopic } from '@/types/coach-knowledge';
import { useCoachKnowledgeStore } from '@/stores/coachKnowledge';

const props = defineProps<{
  topic: KnowledgeTopic;
}>();

const coachKnowledgeStore = useCoachKnowledgeStore();

const status = computed(() => coachKnowledgeStore.getTopicStatus(props.topic.id));

const statusLabel = computed(() => {
  if (status.value === 'completed') return '已完成';
  if (status.value === 'in_progress') return '学习中';
  return '未开始';
});

const statusTag = computed(() => {
  if (status.value === 'completed') return 'success';
  if (status.value === 'in_progress') return 'warning';
  return 'info';
});

function markInProgress() {
  coachKnowledgeStore.setTopicStatus(props.topic.id, 'in_progress');
}

function markCompleted() {
  coachKnowledgeStore.setTopicStatus(props.topic.id, 'completed');
}

function resetStatus() {
  coachKnowledgeStore.resetTopic(props.topic.id);
}
</script>

<style scoped>
.topic-card {
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background-color: var(--color-surface);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.topic-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.title-block {
  flex: 1 1 220px;
  min-width: 200px;
}

.topic-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-fg);
  margin-bottom: 0.35rem;
}

.topic-summary {
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-fg-muted);
}

.status-block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
  min-width: 180px;
}

.status-controls {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.resource-block {
  border-top: 1px solid var(--color-border);
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.resource-label {
  font-size: 0.75rem;
  color: var(--color-fg-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.resource-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}

.resource-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  color: var(--el-color-info);
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.resource-link:hover {
  background-color: rgba(59, 130, 246, 0.12);
}

@media (max-width: 480px) {
  .status-block {
    width: 100%;
    align-items: stretch;
  }

  .status-controls {
    justify-content: stretch;
  }
}
</style>
