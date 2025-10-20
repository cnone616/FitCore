<template>
  <section class="certificate-panel">
    <header class="panel-header">
      <div class="title-group">
        <div class="emoji">📜</div>
        <div>
          <h2 class="heading">专业证书路径</h2>
          <p class="subtitle">了解行业常见证书与推荐学习路径，帮助规划能力输出与职业发展。</p>
        </div>
      </div>
    </header>

    <div v-if="!certificates.length" class="empty-state" role="status" aria-live="polite">
      <p>证书数据加载中，请稍候。</p>
    </div>

    <div v-else class="certificate-grid">
      <CertificateCard
        v-for="cert in certificates"
        :key="cert.id"
        :certificate="cert"
        @view-detail="openDetail"
      />
    </div>

    <el-dialog
      v-model="detailVisible"
      :title="activeCertificate?.name"
      width="520px"
      class="certificate-dialog"
    >
      <div v-if="activeCertificate" class="dialog-content">
        <section class="dialog-section">
          <h3>认证机构</h3>
          <p>{{ activeCertificate.organization }}</p>
        </section>
        <section class="dialog-section">
          <h3>适用人群</h3>
          <ul>
            <li v-for="role in activeCertificate.applicableRoles" :key="role">{{ role }}</li>
          </ul>
        </section>
        <section class="dialog-section">
          <h3>推荐先修模块</h3>
          <ul>
            <li v-for="moduleId in activeCertificate.recommendedModules" :key="moduleId">
              {{ resolveModuleName(moduleId) }}
            </li>
          </ul>
        </section>
        <section class="dialog-section">
          <h3>认证简介</h3>
          <p>{{ activeCertificate.description }}</p>
        </section>
        <section class="dialog-section">
          <h3>有效期</h3>
          <p>{{ activeCertificate.validityPeriod ?? '—' }}</p>
        </section>
      </div>
      <template #footer>
        <el-button @click="detailVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CertificateCard from './CertificateCard.vue';
import { useCoachKnowledgeStore } from '@/stores/coachKnowledge';
import type { CertificateInfo } from '@/types/coach-knowledge';

const coachKnowledgeStore = useCoachKnowledgeStore();

const certificates = computed(() => coachKnowledgeStore.sortedCertificates);
const detailVisible = ref(false);
const activeCertificate = ref<CertificateInfo | null>(null);

function openDetail(cert: CertificateInfo) {
  activeCertificate.value = cert;
  detailVisible.value = true;
}

function resolveModuleName(moduleId: string) {
  const module = coachKnowledgeStore.moduleList.find((item) => item.id === moduleId);
  return module?.name ?? moduleId;
}
</script>

<style scoped>
.certificate-panel {
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background-color: var(--color-surface);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-top: 0.25rem;
  max-width: 420px;
  line-height: 1.5;
}

.empty-state {
  font-size: 0.95rem;
  color: var(--color-fg-muted);
  border: 1px dashed var(--color-border);
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
}

.certificate-grid {
  display: grid;
  gap: 1rem;
}

.certificate-dialog :deep(.el-dialog__body) {
  padding-top: 0.5rem;
}

.dialog-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dialog-section h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-fg);
  margin-bottom: 0.35rem;
}

.dialog-section p,
.dialog-section ul {
  font-size: 0.9rem;
  color: var(--color-fg-muted);
  margin: 0;
  padding-left: 1rem;
}

.dialog-section ul {
  list-style: disc;
}

@media (max-width: 720px) {
  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .subtitle {
    max-width: none;
  }
}
</style>
