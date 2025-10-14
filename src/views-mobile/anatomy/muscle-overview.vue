<template>
  <div class="muscle-overview-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">
          📖 健身解剖总结
        </h1>
      </div>

      <div class="layout-container">
        <div class="control-panel">
          <div class="panel-card">
            <h3 class="text-xl font-semibold mb-4">控制面板</h3>

            <div class="mb-6">
              <label class="block text-sm font-medium mb-2">性别</label>
              <div class="flex gap-2">
                <button
                  @click="gender = 'male'"
                  :class="['px-4 py-2 rounded', gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700']"
                >
                  男性
                </button>
                <button
                  @click="gender = 'female'"
                  :class="['px-4 py-2 rounded', gender === 'female' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700']"
                >
                  女性
                </button>
              </div>
            </div>

            <div class="mb-6">
              <div class="flex items-center justify-between mb-3">
                <label class="block text-sm font-medium">肌肉部位</label>
                <div class="flex gap-2">
                  <button
                    @click="toggleSelectAll"
                    class="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    {{ isAllSelected ? '取消全选' : '全选' }}
                  </button>
                  <button
                    @click="clearAllSelections"
                    class="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    取消选择
                  </button>
                </div>
              </div>
              <div class="muscle-list-container">
                <div class="space-y-2">
                  <label
                    v-for="(muscle, id) in muscleData"
                    :key="id"
                    class="flex items-start space-x-2 cursor-pointer p-2 rounded hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      :checked="isMuscleSelected(id)"
                      @change="toggleMuscle(id)"
                      class="rounded mt-0.5 flex-shrink-0"
                    />
                    <div class="flex-1 min-w-0">
                      <div class="text-sm font-medium text-gray-900">{{ muscle.name }}</div>
                      <div class="text-xs text-gray-500 mt-1 leading-relaxed">{{ muscle.description }}</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="muscle-diagram-container">
          <div class="figure-container">
            <h3 class="figure-title text-2xl font-semibold text-fg mb-4">人体肌肉解剖图</h3>
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
  background: #f8f9fa;
  padding: 2rem 0;
}

.layout-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.control-panel {
  width: 100%;
}

.panel-card {
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.muscle-list-container {
  overflow-y: auto;
  max-height: 320px;
  padding-right: 4px;
}

.muscle-diagram-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
}

.figure-container {
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  width: 100%;
}

.figure-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
  background: var(--color-background, #ffffff);
  border-radius: 1rem;
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
    max-width: 320px;
    position: sticky;
    top: 1rem;
  }

  .muscle-diagram-container {
    flex: 1;
    margin-bottom: 0;
  }
}
</style>
