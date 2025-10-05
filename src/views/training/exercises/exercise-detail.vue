<template>
  <div class="exercise-detail-page">
    <!-- 返回按钮 -->
    <div class="back-button-section">
      <button @click="goBack" class="back-button">
        <span class="back-icon">←</span>
        返回上一页
      </button>
    </div>

    <!-- 主要内容布局：左侧肌肉图，右侧详细信息 -->
    <div class="main-layout">
      <!-- 左侧肌肉解剖图 -->
      <div class="left-panel">
        <div class="muscle-anatomy-section">
          <h2 class="section-title">🎯 目标肌肉</h2>
          <div class="muscle-anatomy-wrapper">
           <HumanMuscleAnatomy 
            gender="male"
            :selectedPrimaryMuscleGroups="selectedMuscles as any"
            :selectedSecondaryMuscleGroups="selectedSecondaryMuscles as any"
            defaultMuscleColor="#828d99"
            primaryHighlightColor="#16a085"
            :primaryOpacity="0.6"
            secondaryHighlightColor="#16a085"
            :secondaryOpacity="0.4"
            backgroundColor="#ffffff"
            :showLegend="true"
           />
          </div>
          <div class="muscle-info">
            <div class="muscle-list">
              <div v-for="muscle in highlightedMuscles" :key="muscle.id" class="muscle-item">
                <span class="muscle-dot" :class="muscle.type"></span>
                <span class="muscle-name">{{ muscle.name }}</span>
                <span class="muscle-role">{{ muscle.type === 'primary' ? '主要' : '次要' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧详细信息 -->
      <div class="right-panel">
        <!-- 动作标题和基本信息 -->
        <div class="exercise-header">
          <h1 class="exercise-title">{{ currentExercise?.chineseName || '标题' }}</h1>
          <div class="exercise-subtitle">{{ currentExercise?.name }}</div>
        </div>

        <!-- 动作基本信息 -->
        <div class="exercise-info-section">
          <h2 class="section-title">📋 基本信息</h2>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">难度等级</span>
              <span class="info-value difficulty">{{ getDifficultyText(currentExercise?.difficulty) }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">器械类型</span>
              <span class="info-value">{{ getEquipmentText(currentExercise?.equipmentType) }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">训练部位</span>
              <span class="info-value">{{ getMuscleTypeText(currentExercise?.primaryMuscles) }}</span>
            </div>
          </div>
        </div>

        <!-- 动作步骤详解 -->
        <div class="instructions-section">
          <h2 class="section-title">📝 动作详解</h2>
          <div class="instructions-list">
            <div 
              v-for="(instruction, index) in currentExercise?.instructions || []" 
              :key="index"
              class="instruction-item"
            >
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <div class="step-text">{{ instruction }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 动作描述 -->
        <div class="description-section">
          <h2 class="section-title">📖 动作说明</h2>
          <div class="description-content">
            <p>{{ currentExercise?.description || '暂无具体说明' }}</p>
          </div>
        </div>

        <!-- 动作图片/视频区域 -->
        <div class="media-section">
          <h2 class="section-title">🎥 动作演示</h2>
          <div class="media-placeholder">
            <span class="media-icon">🏋️‍♂️</span>
            <h3>动作示范视频</h3>
            <p>后续会添加动作的图片或视频示范</p>
          </div>
        </div>

        <!-- 注意事项和技巧 -->
        <div class="tips-section">
          <h2 class="section-title">💡 训练技巧</h2>
          <div class="tips-content">
            <div class="tip-item">
              <span class="tip-icon">🎯</span>
              <div class="tip-text">
                <strong>重点注意：</strong>
                确保全程保持肌肉张力，避免过快或过慢的动作速度
              </div>
            </div>
            <div class="tip-item">
              <span class="tip-icon">⚠️</span>
              <div class="tip-text">
                <strong>安全提醒：</strong>
                重量不宜过重，以保持标准动作为准，避免受伤
              </div>
            </div>
            <div class="tip-item">
              <span class="tip-icon">💪</span>
              <div class="tip-text">
                <strong>训练效果：</strong>
                每周3-4次，每次3-4组，每组10-15次
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { HumanMuscleAnatomy } from '@lucawahlen/vue-human-muscle-anatomy';
import { findExerciseById } from '@/utils/exercise-lookup';

const route = useRoute();
const router = useRouter();

// 返回函数 - 使用浏览器历史记录返回上一页
const goBack = () => {
  router.go(-1);
};


// 从URL参数获取动作ID
const exerciseId = computed(() => {
  // 优先从路径参数获取ID，如果没有则从查询参数获取
  const pathId = route.params.id as string;
  const queryId = route.query.id as string;
  const id = pathId || queryId;
  return id ? decodeURIComponent(id) : '';
});

// 获取当前动作的详细信息
const currentExercise = computed(() => {
  if (!exerciseId.value) return null;
  
  // 使用统一的动作查找系统
  return findExerciseById(exerciseId.value);
});

// 肌肉组件相关的computed属性
const selectedMuscles = computed(() => {
  const muscles = getComponentMuscleIds(currentExercise.value?.primaryMuscles || []);
  console.log('主要肌肉原始数据:', currentExercise.value?.primaryMuscles);
  console.log('主要肌肉映射结果:', muscles);
  return muscles;
});

const selectedSecondaryMuscles = computed(() => {
  const muscles = getComponentMuscleIds(currentExercise.value?.secondaryMuscles || []);
  console.log('次要肌肉原始数据:', currentExercise.value?.secondaryMuscles);
  console.log('次要肌肉映射结果:', muscles);
  return muscles;
});

// 映射肌肉名称到组件ID
const getComponentMuscleIds = (muscles: string[]): string[] => {
  const muscleMapping: Record<string, string> = {
    // 胸部
    'chest': 'chest',
    'upper-chest': 'chest',
    'middle-lower-chest': 'chest',
    
    // 背部
    'upper-back': 'lats', // 上背部主要对应背阔肌
    'lower-back': 'lowerBack',
    
    // 肩部
    'front-delts': 'frontDelts',
    'middle-delts': 'sideDelts',
    'rear-delts': 'rearDelts',
    'traps': 'traps',
    
    // 手臂
    'biceps': 'biceps',
    'biceps-inner': 'biceps',
    'biceps-outer': 'biceps',
    'triceps': 'triceps',
    'triceps-long-head': 'triceps',
    'triceps-short-head': 'triceps',
    'forearms': 'forearms',
    
    // 腹部
    'upper-abs': 'abs',
    'lower-abs': 'abs',
    
    // 臀部
    'upper-glutes': 'glutes',
    'lower-glutes': 'glutes',
    
    // 腿部
    'quadriceps': 'quads',
    'hamstrings': 'hamstrings',
    'calves': 'calves',
    
    // 其他
    'neck': 'neck',
    'rotatorCuffs': 'rotatorCuffs',
    
    // 腹斜肌
    'obliques': 'obliques',
    
    // 大腿肌群
    'adductors': 'adductors',
    'abductors': 'abductors'
  };
  
  const mappedMuscles = muscles.map(muscle => muscleMapping[muscle] || muscle).filter(Boolean);
  console.log('肌肉映射过程:', muscles, '->', mappedMuscles);
  return mappedMuscles;
};

// 高亮的肌肉信息描述
const highlightedMuscles = computed(() => {
  const muscles: any[] = [];
  
  // 主要肌肉
  (currentExercise.value?.primaryMuscles || []).forEach(muscleId => {
    const muscleData = getMuscleData(muscleId);
    if (muscleData) {
      muscles.push({ ...muscleData, type: 'primary' });
    }
  });
  
  // 次要肌肉
  (currentExercise.value?.secondaryMuscles || []).forEach(muscleId => {
    const muscleData = getMuscleData(muscleId);
    if (muscleData) {
      muscles.push({ ...muscleData, type: 'secondary' });
    }
  });
  
  return muscles;
});

// 动态设置次要肌肉颜色
const updateSecondaryMusclesColors = async () => {
  await nextTick();
  
  const secondaryMuscles = currentExercise.value?.secondaryMuscles || [];
  if (secondaryMuscles.length === 0) return;
  
  const svgElement = document.querySelector('.muscle-anatomy-wrapper svg');
  if (!svgElement) return;
  
  // 遍历次要肌肉ID并设置颜色
  secondaryMuscles.forEach(muscleId => {
    const selectors = [
      `[id*="${muscleId}"]`,
      `[class*="${muscleId}"]`,
      `g[id*="${muscleId}"] path`,
      `g[class*="${muscleId}"] path`,
      `path[id*="${muscleId}"]`,
      `polygon[id*="${muscleId}"]`,
      `ellipse[id*="${muscleId}"]`
    ];
    
    selectors.forEach(selector => {
      const elements = svgElement.querySelectorAll(selector);
      elements.forEach((el: any) => {
        if (el) {
          el.style.fill = '#16a085';
          el.style.stroke = '#16a085';
          el.style.strokeWidth = '2px';
          el.style.opacity = '0.4';
        }
      });
    });
  });
  
  console.log('次要肌肉颜色已更新:', secondaryMuscles);
};

// 监听动作变化，更新次要肌肉颜色
watch(currentExercise, () => {
  setTimeout(() => {
    updateSecondaryMusclesColors();
  }, 1000); // 给组件时间渲染
}, { immediate: true });

// 肌肉数据映射（从肌肉概览页面抄过来的）
const getMuscleData = (muscleId: string) => {
  const muscleData: Record<string, any> = {
    // 胸部
    'chest': { id: 'chest', name: '胸大肌' },
    'upper-chest': { id: 'chest', name: '上胸' },
    'middle-lower-chest': { id: 'chest', name: '中下胸' },
    
    // 背部
    'upper-back': { id: 'lats', name: '背阔肌' },
    'lower-back': { id: 'lowerBack', name: '竖脊肌' },
    
    // 肩部
    'front-delts': { id: 'frontDelts', name: '前三角肌' },
    'middle-delts': { id: 'sideDelts', name: '中三角肌' },
    'rear-delts': { id: 'rearDelts', name: '三角肌后束' },
    'traps': { id: 'traps', name: '斜方肌' },
    
    // 手臂
    'biceps': { id: 'biceps', name: '肱二头肌' },
    'biceps-inner': { id: 'biceps', name: '肱二头肌内侧' },
    'biceps-outer': { id: 'biceps', name: '肱二头肌外侧' },
    'triceps': { id: 'triceps', name: '肱三头肌' },
    'triceps-long-head': { id: 'triceps', name: '肱三头肌长头' },
    'triceps-short-head': { id: 'triceps', name: '肱三头肌短头' },
    'forearms': { id: 'forearms', name: '前臂肌群' },
    
    // 腹部
    'upper-abs': { id: 'abs', name: '上腹部' },
    'lower-abs': { id: 'abs', name: '下腹部' },
    
    // 臀部
    'upper-glutes': { id: 'glutes', name: '上臀部' },
    'lower-glutes': { id: 'glutes', name: '下臀部' },
    
    // 腿部
    'quadriceps': { id: 'quads', name: '股四头肌' },
    'hamstrings': { id: 'hamstrings', name: '腘绳肌' },
    'calves': { id: 'calves', name: '小腿肌群' },
    
    // 其他
    'neck': { id: 'neck', name: '颈部肌群' },
    'rotatorCuffs': { id: 'rotatorCuffs', name: '旋转肌袖' },
    
    // 腹斜肌
    'obliques': { id: 'obliques', name: '腹斜肌' },
    
    // 大腿肌群
    'adductors': { id: 'adductors', name: '大腿内收肌' },
    'abductors': { id: 'abductors', name: '大腿外展肌' }
  };
  
  return muscleData[muscleId];
};

// 辅助函数：获取难度文本
const getDifficultyText = (difficulty: string | undefined) => {
  const difficultyMap: Record<string, string> = {
    'beginner': '初级',
    'intermediate': '中级',
    'advanced': '高级'
  };
  return difficultyMap[difficulty || 'intermediate'] || difficulty;
};

// 辅助函数：获取器械文本
const getEquipmentText = (equipmentType: string | undefined) => {
  const equipmentMap: Record<string, string> = {
    'barbell': '杠铃',
    'dumbbell': '哑铃',
    'cable': '绳索',
    'hammer': '悍马机',
    'smith': '史密斯机',
    'machine': '器械',
    'bodyweight': '自重'
  };
  return equipmentMap[equipmentType || ''] || equipmentType || '未指定';
};

// 辅助函数：获取肌肉类型文本
const getMuscleTypeText = (muscles: string[] | undefined) => {
  if (!muscles || muscles.length === 0) return '未指定';
  
  const muscleNameMap: Record<string, string> = {
    // 胸部
    'chest': '胸部',
    'upper-chest': '上胸',
    'middle-lower-chest': '中下胸',
    
    // 背部
    'upper-back': '背阔肌',
    'lower-back': '竖脊肌',
    
    // 肩部
    'front-delts': '前三角肌',
    'middle-delts': '中三角肌',
    'rear-delts': '三角肌后束',
    'traps': '斜方肌',
    
    // 手臂
    'biceps': '肱二头肌',
    'biceps-inner': '肱二头肌内侧',
    'biceps-outer': '肱二头肌外侧',
    'triceps': '肱三头肌',
    'triceps-long-head': '肱三头肌长头',
    'triceps-short-head': '肱三头肌短头',
    'forearms': '前臂肌群',
    
    // 腹部
    'upper-abs': '上腹部',
    'lower-abs': '下腹部',
    
    // 臀部
    'upper-glutes': '上臀部',
    'lower-glutes': '下臀部',
    
    // 腿部
    'quadriceps': '股四头肌',
    'hamstrings': '腘绳肌',
    'calves': '小腿肌群',
    
    // 其他
    'neck': '颈部肌群',
    'rotatorCuffs': '旋转肌袖',
    
    // 腹斜肌
    'obliques': '腹斜肌',
    
    // 大腿肌群
    'adductors': '大腿内收肌',
    'abductors': '大腿外展肌'
  };
  
  return muscles.map(muscle => muscleNameMap[muscle] || muscle).join('、');
};

// CSS已经处理次要肌肉颜色覆盖，不需要JavaScript了
</script>

<style scoped>
.exercise-detail-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  background: #f8f9fa;
}

/* 返回按钮样式 */
.back-button-section {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #16a085;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.back-button:hover {
  background: #138f76;
}

.back-button:active {
  background: #128071;
}

.back-icon {
  font-size: 1rem;
  font-weight: bold;
}

/* 主要内容布局 */
.main-layout {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 1.5rem;
  align-items: start;
}

/* 左侧肌肉图面板 */
.left-panel {
  position: sticky;
  top: 1rem;
}

.muscle-anatomy-section {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.muscle-anatomy-wrapper {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.75rem;
}

.anatomy-svg-figure {
  width: 280px;
  height: auto;
}

/* 动态次要肌肉颜色覆盖 - 等待组件加载后执行 */
.anatomy-svg-figure {
  opacity: 1;
}

/* 确保次要肌肉正确高亮 - 覆盖组件内部可能的bug */
.muscle-anatomy-wrapper :deep(svg .muscle-group.secondary),
.muscle-anatomy-wrapper :deep(svg path.secondary),
.muscle-anatomy-wrapper :deep(svg polygon.secondary),
.muscle-anatomy-wrapper :deep(svg ellipse.secondary),
.muscle-anatomy-wrapper :deep(svg circle.secondary) {
  fill: #16a085 !important;
  stroke: #16a085 !important;
  stroke-width: 2px !important;
  opacity: 0.4 !important;
}

/* 备用方案：通过SVG内的数据属性来识别次要肌肉 */
.muscle-anatomy-wrapper :deep(svg [data-muscle-group="secondary"]) {
  fill: #16a085 !important;
  stroke: #16a085 !important;
  stroke-width: 2px !important;
  opacity: 0.4 !important;
}

.muscle-info {
  margin-top: 1rem;
}

.muscle-list {
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 0.5rem;
}

.muscle-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.muscle-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.muscle-dot.primary {
  background: #51d5ce;
}

.muscle-dot.secondary {
  background: #10b981;
}

.muscle-name {
  font-weight: 500;
  color: #374151;
}

.muscle-role {
  font-size: 0.8rem;
  color: #6b7280;
  margin-left: auto;
}

/* 右侧详情面板 */
.right-panel {
  display: grid;
  gap: 1.5rem;
}

.exercise-header {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.exercise-title {
  font-size: 2rem;
  font-weight: 700;
  color: #374151;
  margin: 0 0 0.5rem 0;
}

.exercise-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  font-style: italic;
}

/* 通用的section样式 */
.exercise-info-section,
.instructions-section,
.description-section,
.media-section,
.tips-section {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 基本信息网格 */
.info-grid {
  display: grid;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: #f3f4f6;
  border-radius: 0.5rem;
}

.info-label {
  font-weight: 600;
  color: #374151;
}

.info-value {
  color: #6b7280;
}

.info-value.difficulty {
  padding: 0.25rem 0.5rem;
  background: #10b981;
  color: white;
  border-radius: 4px;
  font-size: 0.8rem;
}

/* 动作步骤 */
.instructions-list {
  display: grid;
  gap: 1rem;
}

.instruction-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.75rem;
  border-left: 4px solid #10b981;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-text {
  color: #374151;
  line-height: 1.6;
  font-size: 1rem;
}

/* 动作说明 */
.description-content {
  color: #374151;
  line-height: 1.6;
  font-size: 1rem;
}

/* 媒体占位 */
.media-placeholder {
  text-align: center;
  padding: 3rem 2rem;
  background: #f3f4f6;
  border: 2px dashed #d1d5db;
  border-radius: 0.75rem;
  color: #6b7280;
}

.media-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.media-placeholder h3 {
  font-size: 1.25rem;
  color: #6b7280;
  margin: 0 0 0.5rem 0;
}

/* 训练技巧 */
.tips-content {
  display: grid;
  gap: 1rem;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: #f0f9ff;
  border-radius: 0.5rem;
  border-left: 4px solid #0ea5e9;
}

.tip-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.tip-text {
  color: #374151;
  line-height: 1.5;
}

.tip-text strung {
  color: #0ea5e9;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .main-layout {
    grid-template-columns: 350px 1fr;
  }
  
  .anatomy-svg-figure {
    width: 240px;
  }
}

@media (max-width: 768px) {
  .main-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .exercise-detail-page {
    padding: 0.5rem;
  }
  
  .left-panel {
    position: static;
  }
  
  .exercise-title {
    font-size: 1.5rem;
  }
  
  .muscle-anatomy-section,
  .exercise-header,
  .exercise-info-section,
  .instructions-section,
  .description-section,
  .media-section,
  .tips-section {
    padding: 1rem;
  }
  
  .media-placeholder {
    padding: 2rem 1rem;
  }
  
  .media-icon {
    font-size: 2.5rem;
  }
  
  .instruction-item {
    padding: 0.75rem;
    gap: 0.75rem;
  }
  
  .step-number {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
  
  .anatomy-svg-figure {
    width: 200px;
  }
}
</style>
