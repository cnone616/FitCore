<template>
  <div class="muscle-overview-page">
    <div class="page-container">
      <div class="title-block">
        <h1>📖 健身解剖总结</h1>
      </div>

      <div class="layout-container">
        <div class="control-panel">
          <div class="panel-card">
            <h3 class="section-title">控制面板</h3>

            <div class="section-field">
              <label class="field-label">性别</label>
              <div class="gender-switch">
                <button
                  @click="gender = 'male'"
                  :class="['toggle', gender === 'male' ? 'toggle-active' : '']"
                >
                  男性
                </button>
                <button
                  @click="gender = 'female'"
                  :class="['toggle', gender === 'female' ? 'toggle-active' : '']"
                >
                  女性
                </button>
              </div>
            </div>

            <div class="section-field">
              <div class="field-toolbar">
                <label class="field-label">肌肉部位</label>
                <div class="toolbar-actions">
                  <button
                    @click="toggleSelectAll"
                    class="toolbar-btn primary"
                  >
                    {{ isAllSelected ? '取消全选' : '全选' }}
                  </button>
                  <button
                    @click="clearAllSelections"
                    class="toolbar-btn danger"
                  >
                    取消选择
                  </button>
                </div>
              </div>
              <div class="muscle-list-container">
                <div class="muscle-list">
                  <label
                    v-for="(muscle, id) in muscleData"
                    :key="id"
                    class="muscle-item"
                  >
                    <input
                      type="checkbox"
                      :checked="isMuscleSelected(id)"
                      @change="toggleMuscle(id)"
                      class="rounded mt-0.5 flex-shrink-0"
                    />
                    <div class="muscle-info">
                      <div class="name">{{ muscle.name }}</div>
                      <div class="desc">{{ muscle.description }}</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="muscle-diagram-container">
          <div class="figure-container">
            <h3 class="figure-title">人体肌肉解剖图</h3>
            <div class="figure-wrapper" ref="svgContainer">
              <HumanMuscleAnatomy
                :gender="gender"
                :selected-primary-muscle-groups="selectedPrimaryMuscleGroups as any"
                :selected-secondary-muscle-groups="selectedSecondaryMuscleGroups as any"
                :show-legend="true"
                :enable-click-highlight="true"
                @update:selected-primary-muscle-groups="selectedPrimaryMuscleGroups = $event"
                @update:selected-secondary-muscle-groups="selectedSecondaryMuscleGroups = $event"
                default-muscle-color="#828d99"
                primary-highlight-color="#16a085"
                secondary-highlight-color="#16a085"
                background-color="#e1e1e1"
                class="anatomy-svg-figure"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { HumanMuscleAnatomy } from '@/components/muscle-anatomy/src';
import muscleData from '@/data/anatomy/muscleOverview';

const gender = ref<'male' | 'female'>('male');
const selectedPrimaryMuscleGroups = ref<string[]>([]);
const selectedSecondaryMuscleGroups = ref<string[]>([]);

const isAllSelected = computed(() => {
  const allMuscleIds = Object.keys(muscleData);
  return allMuscleIds.every(id => isMuscleSelected(id));
});

const isMuscleSelected = (id: string) =>
  selectedPrimaryMuscleGroups.value.includes(id) || selectedSecondaryMuscleGroups.value.includes(id);

const toggleMuscle = (id: string) => {
  if (isMuscleSelected(id)) {
    selectedPrimaryMuscleGroups.value = selectedPrimaryMuscleGroups.value.filter(item => item !== id);
    selectedSecondaryMuscleGroups.value = selectedSecondaryMuscleGroups.value.filter(item => item !== id);
  } else {
    selectedPrimaryMuscleGroups.value.push(id);
  }
};

const toggleSelectAll = () => {
  const allMuscleIds = Object.keys(muscleData);
  if (isAllSelected.value) {
    selectedPrimaryMuscleGroups.value = [];
    selectedSecondaryMuscleGroups.value = [];
  } else {
    selectedPrimaryMuscleGroups.value = [...allMuscleIds];
    selectedSecondaryMuscleGroups.value = [];
  }
};

const clearAllSelections = () => {
  selectedPrimaryMuscleGroups.value = [];
  selectedSecondaryMuscleGroups.value = [];
};
</script>

<style scoped>
.muscle-overview-page {
  min-height: 100vh;
  background: #f4f6f8;
  padding: 1.4rem 0;
}

.page-container {
  padding: 0 0.85rem 2rem;
  margin: 0 auto;
  max-width: 960px;
}

.title-block {
  text-align: center;
  margin-bottom: 1.4rem;
}

.title-block h1 {
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--color-text, #1f2937);
}

.layout-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.control-panel {
  width: 100%;
}

.panel-card {
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 0.9rem;
  padding: 1.1rem;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.section-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text, #1f2937);
  margin: 0;
}

.section-field {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.field-label {
  font-size: 0.85rem;
  color: var(--color-text-muted, #64748b);
}

.gender-switch {
  display: flex;
  gap: 0.5rem;
}

.toggle {
  flex: 1;
  padding: 0.45rem 0.6rem;
  border-radius: 0.6rem;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: #f1f5f9;
  font-size: 0.85rem;
  color: #475569;
}

.toggle-active {
  background: #2563eb;
  color: #ffffff;
  border-color: #2563eb;
}

.field-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar-actions {
  display: flex;
  gap: 0.4rem;
}

.toolbar-btn {
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 0.55rem;
  color: #ffffff;
  border: none;
}

.toolbar-btn.primary {
  background: #2563eb;
}

.toolbar-btn.danger {
  background: #f43f5e;
}

.muscle-list-container {
  max-height: 260px;
  overflow-y: auto;
  padding-right: 3px;
}

.muscle-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.muscle-item {
  display: flex;
  gap: 0.55rem;
  align-items: flex-start;
  padding: 0.45rem;
  border-radius: 0.6rem;
  background: #f8fafc;
}

.muscle-info {
  flex: 1;
  min-width: 0;
}

.muscle-info .name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #1f2937;
}

.muscle-info .desc {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
  line-height: 1.45;
}

.muscle-diagram-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.figure-container {
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 0.9rem;
  padding: 1.1rem;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.06);
  width: 100%;
}

.figure-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text, #1f2937);
  margin-bottom: 0.75rem;
}

.figure-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 360px;
  background: var(--color-background, #ffffff);
  border-radius: 0.9rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid #e5e7eb;
}

@media (min-width: 1024px) {
  .layout-container {
    flex-direction: row;
    align-items: flex-start;
  }

  .control-panel {
    max-width: 300px;
    position: sticky;
    top: 1rem;
  }

  .muscle-diagram-container {
    flex: 1;
  }
}
</style>
