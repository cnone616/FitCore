<template>
  <section class="module-panel">
    <header class="panel-header">
      <div class="title-group">
        <div class="emoji">📚</div>
        <div>
          <h2 class="heading">知识模块</h2>
          <p class="subtitle">按模块管理核心知识点，支持记录进度与查看建议先修关系。</p>
        </div>
      </div>

      <div class="legend" aria-hidden="true">
        <span class="legend-item">
          <span class="dot completed"></span>
          已完成
        </span>
        <span class="legend-item">
          <span class="dot progress"></span>
          学习中
        </span>
        <span class="legend-item">
          <span class="dot not-started"></span>
          未开始
        </span>
      </div>
    </header>

    <el-collapse
      v-model="activeSections"
      accordion
      class="module-collapse"
      role="list"
      aria-label="知识模块列表"
    >
      <el-collapse-item
        v-for="module in modules"
        :key="module.id"
        :name="module.id"
        role="listitem"
      >
        <template #title>
          <div class="module-title">
            <div class="module-info">
              <h3 class="module-name">{{ module.name }}</h3>
              <el-tag size="small" effect="plain" type="info">
                {{ categoryLabel(module.category) }}
              </el-tag>
            </div>
            <div class="module-meta">
              <span>完成 {{ summary(module.id).completedTopics }}/{{ summary(module.id).totalTopics }}</span>
              <el-tag size="small" :type="statusTag(summary(module.id).status)">
                {{ statusLabel(summary(module.id).status) }}
              </el-tag>
            </div>
            <p class="module-description">{{ module.description }}</p>
          </div>
        </template>

        <div class="module-content">
          <div class="progress-wrapper">
            <div class="progress-label">模块完成度</div>
            <div class="progress-value">{{ summary(module.id).percent }}%</div>
          </div>
          <ProgressTracker :percent="summary(module.id).percent" :status="summary(module.id).status" />

          <div v-if="module.prerequisites?.length" class="prerequisite" role="note">
            <span class="note-label">建议先完成：</span>
            <ul class="prerequisite-list">
              <li v-for="pid in module.prerequisites" :key="pid">
                <el-tag size="small" effect="plain" type="warning">
                  {{ resolveModuleName(pid) }}
                </el-tag>
              </li>
            </ul>
          </div>

          <div v-if="dependentModules(module.id).length" class="dependency" role="note">
            <span class="note-label">解锁模块：</span>
            <ul class="prerequisite-list">
              <li v-for="dep in dependentModules(module.id)" :key="dep.id">
                <el-tag size="small" type="success" effect="plain">
                  {{ dep.name }}
                </el-tag>
              </li>
            </ul>
          </div>

          <div class="topic-list">
            <KnowledgeTopicItem
              v-for="topic in module.topics"
              :key="topic.id"
              :topic="topic"
            />
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import KnowledgeTopicItem from './KnowledgeTopicItem.vue';
import ProgressTracker from './ProgressTracker.vue';
import { useCoachKnowledgeStore } from '@/stores/coachKnowledge';

const coachKnowledgeStore = useCoachKnowledgeStore();
const modules = computed(() => coachKnowledgeStore.moduleList);

const activeSections = ref<string[]>([]);

watch(
  modules,
  (next) => {
    if (!next.length) {
      activeSections.value = [];
      return;
    }
    if (!activeSections.value.length || !next.some((item) => item.id === activeSections.value[0])) {
      activeSections.value = [next[0].id];
    }
  },
  { immediate: true }
);

const categoryMap: Record<string, string> = {
  training: '训练理论',
  nutrition: '营养知识',
  emergency: '应急处理',
  recovery: '肌肉松懈',
  planning: '计划规划'
};

function categoryLabel(category: string) {
  return categoryMap[category] ?? category;
}

function summary(moduleId: string) {
  return coachKnowledgeStore.getModuleProgress(moduleId);
}

function resolveModuleName(moduleId: string) {
  const module = coachKnowledgeStore.moduleList.find((item) => item.id === moduleId);
  return module?.name ?? moduleId;
}

function statusLabel(status: string) {
  if (status === 'completed') return '已完成';
  if (status === 'in_progress') return '学习中';
  return '未开始';
}

function statusTag(status: string) {
  if (status === 'completed') return 'success';
  if (status === 'in_progress') return 'warning';
  return 'info';
}

function dependentModules(moduleId: string) {
  return coachKnowledgeStore.getDependentModules(moduleId);
}
</script>

<style scoped>
.module-panel {
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background-color: var(--color-surface);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

.title-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.emoji {
  font-size: 2rem;
}

.heading {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-fg);
}

.subtitle {
  font-size: 0.95rem;
  color: var(--color-fg-muted);
  margin-top: 0.2rem;
  max-width: 420px;
}

.legend {
  display: flex;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: var(--color-fg-muted);
}

.legend-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 999px;
  background-color: var(--color-border);
}

.dot.completed {
  background-color: var(--el-color-success);
}

.dot.progress {
  background-color: var(--el-color-warning);
}

.dot.not-started {
  background-color: var(--el-color-info);
}

.module-collapse {
  background-color: transparent;
}

.module-title {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
}

.module-info {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.module-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-fg);
}

.module-meta {
  display: flex;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: var(--color-fg-muted);
  align-items: center;
}

.module-description {
  font-size: 0.9rem;
  color: var(--color-fg-muted);
  line-height: 1.5;
}

.module-content {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: var(--color-surface-2);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.progress-wrapper {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--color-fg-muted);
}

.progress-value {
  font-weight: 600;
  color: var(--color-fg);
}

.prerequisite {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: rgba(255, 196, 45, 0.12);
  border: 1px solid rgba(255, 196, 45, 0.28);
}

.dependency {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.28);
}

.note-label {
  font-size: 0.85rem;
  color: var(--color-fg-muted);
  font-weight: 600;
}

.prerequisite-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.topic-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 720px) {
  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .legend {
    flex-wrap: wrap;
  }

  .subtitle {
    max-width: none;
  }
}
</style>
