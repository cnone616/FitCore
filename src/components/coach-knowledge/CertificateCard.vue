<template>
  <article
    class="certificate-card"
    :aria-labelledby="`cert-${certificate.id}`"
  >
    <header class="card-header">
      <div class="title-group">
        <h3 :id="`cert-${certificate.id}`" class="certificate-name">{{ certificate.name }}</h3>
        <el-tag :type="levelTag.type" size="small">{{ levelTag.label }}</el-tag>
      </div>
      <div class="meta">
        <span class="organization">{{ certificate.organization }}</span>
        <el-tag type="info" size="small" effect="plain">
          有效期：{{ certificate.validityPeriod ?? '—' }}
        </el-tag>
      </div>
    </header>

    <p class="description">
      {{ certificate.description }}
    </p>

    <section class="info-grid">
      <div>
        <h4 class="info-title">适用人群</h4>
        <ul class="tag-list">
          <li v-for="role in certificate.applicableRoles" :key="role">
            <el-tag size="small" type="success" effect="plain">
              {{ role }}
            </el-tag>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="info-title">建议先修模块</h4>
        <ul class="tag-list">
          <li v-for="moduleId in certificate.recommendedModules" :key="moduleId">
            <el-tag size="small" type="warning" effect="plain">
              {{ resolveModuleName(moduleId) }}
            </el-tag>
          </li>
        </ul>
      </div>
    </section>

    <div class="actions">
      <el-button type="primary" text @click="$emit('view-detail', certificate)">
        查看详情
      </el-button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { CertificateInfo } from '@/types/coach-knowledge';
import { useCoachKnowledgeStore } from '@/stores/coachKnowledge';

const props = defineProps<{
  certificate: CertificateInfo;
}>();

defineEmits<{
  (e: 'view-detail', cert: CertificateInfo): void;
}>();

const coachKnowledgeStore = useCoachKnowledgeStore();

const levelTag = computed(() => {
  const map = {
    basic: { type: 'info', label: '基础' },
    advanced: { type: 'primary', label: '高级' },
    specialist: { type: 'danger', label: '专项' }
  } as const;

  if (!props.certificate.level) {
    return { type: 'info', label: '标准' };
  }
  return map[props.certificate.level] ?? { type: 'info', label: '标准' };
});

function resolveModuleName(moduleId: string) {
  const module = coachKnowledgeStore.moduleList.find((item) => item.id === moduleId);
  return module?.name ?? moduleId;
}
</script>

<style scoped>
.certificate-card {
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background-color: var(--color-surface-2);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.title-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.certificate-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-fg);
}

.meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: var(--color-fg-muted);
}

.description {
  font-size: 0.95rem;
  color: var(--color-fg-muted);
  line-height: 1.6;
}

.info-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.info-title {
  font-size: 0.85rem;
  color: var(--color-fg-muted);
  margin-bottom: 0.5rem;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 480px) {
  .meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
