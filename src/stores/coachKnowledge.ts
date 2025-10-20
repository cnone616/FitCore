import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { knowledgeModules, certificates } from '@/data/coach-knowledge';
import type {
  CertificateInfo,
  KnowledgeModule,
  ProgressRecord,
  ProgressStatus
} from '@/types/coach-knowledge';
import { localStorageManager } from '@/utils/storage/localstorage';

const STORAGE_KEY = 'coach_knowledge_progress';

interface ModuleProgressSummary {
  totalTopics: number;
  completedTopics: number;
  inProgressTopics: number;
  percent: number;
  status: ProgressStatus;
}

function calculateModuleProgress(
  module: KnowledgeModule,
  progress: Record<string, ProgressRecord>
): ModuleProgressSummary {
  const totalTopics = module.topics.length;
  let completedTopics = 0;
  let inProgressTopics = 0;

  module.topics.forEach((topic) => {
    const record = progress[topic.id];
    if (!record) {
      return;
    }
    if (record.status === 'completed') {
      completedTopics += 1;
    } else if (record.status === 'in_progress') {
      inProgressTopics += 1;
    }
  });

  const percent = totalTopics === 0
    ? 0
    : Math.round((completedTopics / totalTopics) * 100);

  let status: ProgressStatus = 'not_started';
  if (completedTopics === totalTopics && totalTopics > 0) {
    status = 'completed';
  } else if (completedTopics > 0 || inProgressTopics > 0) {
    status = 'in_progress';
  }

  return {
    totalTopics,
    completedTopics,
    inProgressTopics,
    percent,
    status
  };
}

function calculateOverallProgress(
  modules: KnowledgeModule[],
  progress: Record<string, ProgressRecord>
) {
  const totals = modules.reduce(
    (acc, module) => {
      const summary = calculateModuleProgress(module, progress);
      acc.total += summary.totalTopics;
      acc.completed += summary.completedTopics;
      acc.inProgress += summary.inProgressTopics;
      return acc;
    },
    { total: 0, completed: 0, inProgress: 0 }
  );

  const percent = totals.total === 0
    ? 0
    : Math.round((totals.completed / totals.total) * 100);

  let status: ProgressStatus = 'not_started';
  if (totals.total > 0 && totals.completed === totals.total) {
    status = 'completed';
  } else if (totals.completed > 0 || totals.inProgress > 0) {
    status = 'in_progress';
  }

  return {
    totalTopics: totals.total,
    completedTopics: totals.completed,
    inProgressTopics: totals.inProgress,
    percent,
    status
  };
}

function setStatusChain(current: ProgressStatus, next: ProgressStatus): ProgressStatus {
  if (next === 'not_started' || next === 'in_progress' || next === 'completed') {
    return next;
  }
  return current;
}

export const useCoachKnowledgeStore = defineStore('coachKnowledge', () => {
  const modules = ref<KnowledgeModule[]>([]);
  const certificateList = ref<CertificateInfo[]>([]);
  const progressMap = ref<Record<string, ProgressRecord>>({});

  function loadProgress() {
    const stored = localStorageManager.get<Record<string, ProgressRecord>>(STORAGE_KEY);
    if (stored.success && stored.data) {
      progressMap.value = stored.data;
    } else {
      progressMap.value = {};
    }
  }

  function persistProgress() {
    localStorageManager.set(STORAGE_KEY, progressMap.value);
  }

  watch(
    progressMap,
    () => {
      persistProgress();
    },
    { deep: true }
  );

  function init() {
    modules.value = knowledgeModules;
    certificateList.value = certificates;
    loadProgress();
  }

  function getTopicStatus(topicId: string): ProgressStatus {
    return progressMap.value[topicId]?.status ?? 'not_started';
  }

  function setTopicStatus(topicId: string, status: ProgressStatus) {
    const now = new Date().toISOString();
    const currentRecord = progressMap.value[topicId];
    const nextStatus = setStatusChain(currentRecord?.status ?? 'not_started', status);

    if (currentRecord && currentRecord.status === nextStatus) {
      return;
    }

    progressMap.value = {
      ...progressMap.value,
      [topicId]: {
        topicId,
        status: nextStatus,
        updatedAt: now
      }
    };
  }

  function resetTopic(topicId: string) {
    if (!progressMap.value[topicId]) {
      return;
    }
    const updated = { ...progressMap.value };
    delete updated[topicId];
    progressMap.value = updated;
  }

  function clearAllProgress() {
    progressMap.value = {};
  }

  function getModuleProgress(moduleId: string): ModuleProgressSummary {
    const target = modules.value.find((module) => module.id === moduleId);
    if (!target) {
      return {
        totalTopics: 0,
        completedTopics: 0,
        inProgressTopics: 0,
        percent: 0,
        status: 'not_started'
      };
    }
    return calculateModuleProgress(target, progressMap.value);
  }

  const moduleList = computed(() => modules.value);

  const sortedCertificates = computed(() => certificateList.value);

  const overallProgress = computed(() =>
    calculateOverallProgress(modules.value, progressMap.value)
  );

  const nextModuleSuggestion = computed(() => {
    return modules.value.find((module) => {
      const summary = calculateModuleProgress(module, progressMap.value);
      return summary.status !== 'completed';
    }) ?? null;
  });

  const unlockedCertificates = computed(() =>
    certificateList.value.filter((certificate) =>
      certificate.recommendedModules.every((moduleId) => {
        const target = modules.value.find((module) => module.id === moduleId);
        if (!target) {
          return false;
        }
        const summary = calculateModuleProgress(target, progressMap.value);
        return summary.status === 'completed';
      })
    )
  );

  function getDependentModules(moduleId: string) {
    return modules.value.filter((module) => module.prerequisites?.includes(moduleId));
  }

  function getCertificatesByModule(moduleId: string) {
    return certificateList.value.filter((certificate) =>
      certificate.recommendedModules.includes(moduleId)
    );
  }

  return {
    // state
    modules,
    certificateList,
    progressMap,
    // getters
    moduleList,
    sortedCertificates,
    overallProgress,
    getTopicStatus,
    getModuleProgress,
    nextModuleSuggestion,
    unlockedCertificates,
    // actions
    init,
    setTopicStatus,
    resetTopic,
    clearAllProgress,
    getDependentModules,
    getCertificatesByModule
  };
});
