<template>
  <div class="muscle-overview-page">
    <div class="container mx-auto px-4 py-8">
      <!-- 页面头部 -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">
          📖 健身解剖总结
        </h1>
      </div>
      <!-- 专业的人体肌肉解剖图 -->
      <div class="muscle-diagram-container">
        <div class="figure-container">
          <h3 class="figure-title text-2xl font-semibold text-fg mb-4">人体肌肉解剖图</h3>
          <div class="figure-wrapper" @click="handleSVGClick" ref="svgContainer">
            <!-- 选中肌肉名称显示在组件内部 -->
            <div v-if="currentSelectedMuscle" class="muscle-info-overlay">
              <span class="muscle-name-text">{{ currentSelectedMuscle.name }}</span>
              <button @click="clearSelection" class="clear-btn-inline">✕</button>
            </div>
            <HumanMuscleAnatomy
              gender="male"
              :selected-primary-muscle-groups="getMappedMuscleGroups() as any"
              :selected-secondary-muscle-groups="[]"
              default-muscle-color="#828d99"
              primary-highlight-color="#51d5ce"
              secondary-highlight-color="#828d99"
              background-color="#99a5c3"
              class="anatomy-svg-figure"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { HumanMuscleAnatomy } from '@lucawahlen/vue-human-muscle-anatomy';

const router = useRouter();
const utils = { back: () => router.back() };

// 肌肉选中状态
const selectedMuscles = ref<Set<string>>(new Set());
const currentSelectedMuscle = ref<any>(null);

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

// 1:1 直接映射 - 我们直接使用组件支持的肌肉群名称
const muscleMapping: Record<string, string> = {
  'chest': 'chest',
  'lats': 'lats',
  'traps': 'traps',
  'lowerBack': 'lowerBack',
  'frontDelts': 'frontDelts',
  'sideDelts': 'sideDelts',
  'rearDelts': 'rearDelts',
  'rotatorCuffs': 'rotatorCuffs',
  'biceps': 'biceps',
  'triceps': 'triceps',
  'forearms': 'forearms',
  'abs': 'abs',
  'obliques': 'obliques',
  'neck': 'neck',
  'glutes': 'glutes',
  'quads': 'quads',
  'hamstrings': 'hamstrings',
  'adductors': 'adductors',
  'abductors': 'abductors',
  'calves': 'calves'
};

// 组件内部ID到我们的ID的映射 - 1:1映射
const svgIdToOurId: Record<string, string> = {
  'chest': 'chest',
  'lats': 'lats',
  'traps': 'traps',
  'rotatorCuffs': 'rotatorCuffs',
  'lowerBack': 'lowerBack',
  'frontDelts': 'frontDelts',
  'sideDelts': 'sideDelts',
  'rearDelts': 'rearDelts',
  'biceps': 'biceps',
  'triceps': 'triceps',
  'forearms': 'forearms',
  'abs': 'abs',
  'obliques': 'obliques',
  'glutes': 'glutes',
  'quads': 'quads',
  'hamstrings': 'hamstrings',
  'adductors': 'adductors',
  'abductors': 'abductors',
  'calves': 'calves',
  'neck': 'neck'
};

// 获取映射后的肌肉组
const getMappedMuscleGroups = (): string[] => {
  return Array.from(selectedMuscles.value)
    .map(id => muscleMapping[id])
    .filter(Boolean);
};

// 处理SVG点击
const svgContainer = ref<HTMLElement>();

const handleSVGClick = (event: MouseEvent) => {
  const target = event.target as SVGElement;
  
  // 检查是否是肌肉路径点击
  if (target.tagName === 'path' || target.tagName === 'g') {
    // 获取点击的肌肉ID
    const svgMuscleId = target.getAttribute('id') || target.closest('[id]')?.getAttribute('id');
    
    // 添加调试信息，显示所有点击的ID
    console.log('点击的元素ID:', svgMuscleId);
    
    if (svgMuscleId && svgMuscleId in svgIdToOurId) {
      const ourMuscleId = svgIdToOurId[svgMuscleId];
      console.log('✅ 成功映射:', svgMuscleId, '->', ourMuscleId);
      
      // 清除其他选中状态，只选中当前肌肉
      selectedMuscles.value.clear();
      selectedMuscles.value.add(ourMuscleId);
      
      // 更新当前选中肌肉信息（会在模板中显示）
      currentSelectedMuscle.value = muscleData[ourMuscleId as keyof typeof muscleData];
    } else {
      console.log('❌ 未找到映射:', svgMuscleId);
    }
  }
};

// 清除选中状态
const clearSelection = () => {
  selectedMuscles.value.clear();
  currentSelectedMuscle.value = null;
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

/* 肌肉图容器 */
.muscle-diagram-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.figure-container {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
}

.figure-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid #e5e7eb;
}

/* 选中肌肉名称显示 */
.selected-muscle-title {
  display: flex;
  justify-content: center;
}

.muscle-name-display {
  background: #ffffff;
  border: 2px solid #51d5ce;
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #1f2937;
  font-size: 16px;
  font-weight: 700;
}

.muscle-type-text {
  color: #6b7280;
  font-size: 14px;
  font-weight: 400;
}

.clear-btn-small {
  background: #51d5ce;
  border: none;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.2s ease;
}

.clear-btn-small:hover {
  background: #0d9488;
  transform: scale(1.1);
}

/* 覆盖显示在组件内部 */
.muscle-info-overlay {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #51d5ce;
  border-radius: 6px;
  padding: 8px 12px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.muscle-name-text {
  color: #1f2937;
  font-size: 14px;
  font-weight: 600;
}

.muscle-type-badge {
  background: #51d5ce;
  color: white;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 3px;
}

.clear-btn-inline {
  background: #ef4444;
  color: white;
  border: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 10px;
}

/* 为SVG内的肌肉路径添加点击事件支持 */
.figure-wrapper :deep(.vue-human-muscle-anatomy svg path) {
  cursor: pointer;
  transition: fill 0.3s ease;
}

.figure-wrapper :deep(.vue-human-muscle-anatomy svg path:hover) {
  fill: #51d5ce !important;
  stroke: #0d9488 !important;
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