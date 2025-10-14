<template>
  <div class="muscle-overview-page">
    <div class="container mx-auto px-4 py-8">
      <!-- 页面头部 -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">
          📖 健身解剖总结
        </h1>
      </div>
      
      <!-- 交互布局 -->
      <div class="layout-container">
        <!-- 控制面板 -->
        <div class="control-panel">
          <div class="panel-card">
            <h3 class="text-xl font-semibold mb-4">控制面板</h3>
            
            <!-- 性别切换 -->
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
            
            <!-- 肌肉部位勾选 -->
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
        
        <!-- 肌肉解剖图 -->
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

// 性别状态
const gender = ref<'male' | 'female'>('male');

// 肌肉高亮状态
const selectedPrimaryMuscleGroups = ref<string[]>([]);
const selectedSecondaryMuscleGroups = ref<string[]>([]);

// 肌肉数据 - 对应组件支持的21种肌肉群
const muscleData = {
  // 胸部
  'chest': {
    name: '胸大肌',
    type: 'primary',
    description: '最大的胸部肌肉，负责推举动作和胸部轮廓塑造'
  },
  // 背部
  'lats': {
    name: '背阔肌',
    type: 'primary',
    description: '最大的背部肌肉，负责下拉和拉引动作'
  },
  'traps': {
    name: '斜方肌',
    type: 'secondary',
    description: '负责肩胛骨抬升和收缩运动'
  },
  'lowerBack': {
    name: '竖脊肌',
    type: 'primary',
    description: '负责脊柱伸展和姿势保持'
  },
  // 肩部
  'frontDelts': {
    name: '三角肌前束',
    type: 'primary',
    description: '负责肩部前平举和前伸动作'
  },
  'sideDelts': {
    name: '三角肌中束',
    type: 'primary',
    description: '负责肩部侧平举和外展动作'
  },
  'rearDelts': {
    name: '三角肌后束',
    type: 'primary',
    description: '负责肩部后伸和外旋动作'
  },
  'rotatorCuffs': {
    name: '旋转肌袖',
    type: 'secondary',
    description: '肩关节稳定肌群，负责肩关节内外旋'
  },
  // 手臂
  'biceps': {
    name: '肱二头肌',
    type: 'primary',
    description: '负责肘关节屈曲和肩部稳定'
  },
  'triceps': {
    name: '肱三头肌',
    type: 'primary',
    description: '负责肘关节伸展和肩部稳定'
  },
  'forearms': {
    name: '前臂肌群',
    type: 'secondary',
    description: '负责手部和腕部的精细运动'
  },
  // 核心
  'abs': {
    name: '腹直肌',
    type: 'primary',
    description: '六块腹肌，负责脊柱屈曲和核心稳定'
  },
  'obliques': {
    name: '腹斜肌',
    type: 'secondary',
    description: '负责脊柱侧弯和旋转动作'
  },
  'neck': {
    name: '颈部肌群',
    type: 'secondary',
    description: '负责头部运动和颈椎稳定'
  },
  // 下肢
  'glutes': {
    name: '臀大肌',
    type: 'primary',
    description: '负责髋关节伸展和稳定'
  },
  'quads': {
    name: '股四头肌',
    type: 'primary',
    description: '负责膝关节伸展和髋关节屈曲'
  },
  'hamstrings': {
    name: '腘绳肌',
    type: 'primary',
    description: '负责膝关节屈曲和髋关节伸展'
  },
  'adductors': {
    name: '大腿内收肌',
    type: 'secondary',
    description: '负责大腿内收和稳定'
  },
  'abductors': {
    name: '大腿外展肌',
    type: 'secondary',
    description: '负责大腿外展和骨盆稳定'
  },
  'calves': {
    name: '小腿肌群',
    type: 'secondary',
    description: '负责踝关节跖屈和腿部线条'
  }
};


// 计算属性 - 检查是否全选
const isAllSelected = computed(() => {
  const allMuscleIds = Object.keys(muscleData);
  return allMuscleIds.every(id => isMuscleSelected(id));
});

// 检查肌肉是否被选中
const isMuscleSelected = (muscleId: string) => {
  return selectedPrimaryMuscleGroups.value.includes(muscleId) || 
         selectedSecondaryMuscleGroups.value.includes(muscleId);
};

// 切换肌肉选中状态
const toggleMuscle = (muscleId: string) => {
  if (isMuscleSelected(muscleId)) {
    // 如果已选中，则移除
    selectedPrimaryMuscleGroups.value = selectedPrimaryMuscleGroups.value.filter(id => id !== muscleId);
    selectedSecondaryMuscleGroups.value = selectedSecondaryMuscleGroups.value.filter(id => id !== muscleId);
  } else {
    // 如果未选中，则添加到主要肌肉组
    selectedPrimaryMuscleGroups.value.push(muscleId);
  }
};

// 全选/取消全选
const toggleSelectAll = () => {
  const allMuscleIds = Object.keys(muscleData);
  if (isAllSelected.value) {
    // 取消全选
    selectedPrimaryMuscleGroups.value = [];
    selectedSecondaryMuscleGroups.value = [];
  } else {
    // 全选
    selectedPrimaryMuscleGroups.value = [...allMuscleIds];
    selectedSecondaryMuscleGroups.value = [];
  }
};

// 取消选择（清空所有选择）
const clearAllSelections = () => {
  selectedPrimaryMuscleGroups.value = [];
  selectedSecondaryMuscleGroups.value = [];
};
</script>

<style scoped>
/* 页面样式 */
.muscle-overview-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem 0;
}

/* 返回按钮 */
.back-button {
  background: white;
  border: 2px solid #e5e7eb;
  color: #374151;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.back-button:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* 布局适配 */
.layout-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* 控制面板 */
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

/* 肌肉列表容器 */
.muscle-list-container {
  overflow-y: auto;
  max-height: 320px;
  padding-right: 4px; /* 为滚动条留出空间 */
}

.muscle-list-container::-webkit-scrollbar {
  width: 6px;
}

.muscle-list-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.muscle-list-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.muscle-list-container::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 肌肉项目样式 */
.muscle-list-container label {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.muscle-list-container .text-xs {
  line-height: 1.4;
  word-break: break-word;
}

/* 肌肉图容器 */
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

  .panel-card {
    padding: 1.75rem;
  }
}


/* 为SVG内的肌肉路径添加点击事件支持 */
.figure-wrapper :deep(.vue-human-muscle-anatomy svg path) {
  cursor: pointer;
  transition: fill 0.3s ease;
}

.figure-wrapper :deep(.vue-human-muscle-anatomy svg path:hover) {
  fill: #16a085 !important;
  stroke: #138d75 !important;
  stroke-width: 2px !important;
  filter: brightness(1.2);
}

/* 肌肉高亮样式 */
:deep(.muscle-area) {
  fill: #828d99 !important; /* 默认颜色 */
  stroke: #6b7280;
  stroke-width: 1px;
  transition: fill 0.3s ease, stroke 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

:deep(.muscle-area:hover) {
  fill: #51d5ce !important; /* 悬停颜色 - 青色 */
  stroke: #0d9488 !important;
  stroke-width: 2px !important;
  transform: scale(1.05);
  filter: brightness(1.2);
}

/* 选中状态的肌肉 */
:deep(.muscle-area.selected),
:deep(.muscle-area.is-selected) {
  fill: #51d5ce !important; /* 选中颜色 - 青色 */
  stroke: #0d9488 !important;
  stroke-width: 2px !important;
  transform: scale(1.05);
  filter: brightness(1.2);
}

/* 悬停状态的肌肉 */
:deep(.muscle-area.hovered),
:deep(.muscle-area.is-hovered) {
  fill: #51d5ce !important; /* 悬停颜色 - 青色 */
  stroke: #0d9488 !important;
  stroke-width: 2px !important;
  transform: scale(1.05);
  filter: brightness(1.2);
}

/* 未选中状态 - 保持默认颜色 */
:deep(.muscle-area.unselected) {
  fill: #828d99 !important;
  opacity: 0.7;
}

/* 覆盖组件容器，强制单个视图 */
.figure-wrapper :deep(.vue-human-muscle-anatomy) {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

/* 强制显示单个结合视图 */
.figure-wrapper :deep(.vue-human-muscle-anatomy > *) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.figure-wrapper :deep(.vue-human-muscle-anatomy > *:not(:first-child)) {
  display: none !important;
}

:deep(.vue-human-muscle-anatomy svg) {
  display: block !important;
  width: 100%;
  height: auto;
}
</style>