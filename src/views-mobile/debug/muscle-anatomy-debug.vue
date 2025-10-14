<template>
  <div class="muscle-debug-page">
    <header class="header">
      <h1>🧪 肌肉组件调试（移动端）</h1>
      <p>调试 HumanMuscleAnatomy 组件的颜色、图例和高亮状态</p>
    </header>

    <div class="debug-layout">
      <section class="control-panel">
        <h2>🎛️ 控制面板</h2>

        <div class="control-group">
          <label>性别</label>
          <select v-model="gender">
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </div>

        <div class="control-row">
          <label>主要颜色</label>
          <input v-model="primaryColor" type="color" />
        </div>
        <div class="control-row">
          <label>次要颜色</label>
          <input v-model="secondaryColor" type="color" />
        </div>
        <div class="control-row">
          <label>背景色</label>
          <input v-model="backgroundColor" type="color" />
        </div>
        <div class="control-row">
          <label>默认颜色</label>
          <input v-model="defaultMuscleColor" type="color" />
        </div>

        <div class="control-group">
          <label>主要肌肉透明度: {{ primaryOpacity }}</label>
          <input v-model="primaryOpacity" type="range" min="0" max="1" step="0.1" />
        </div>
        <div class="control-group">
          <label>次要肌肉透明度: {{ secondaryOpacity }}</label>
          <input v-model="secondaryOpacity" type="range" min="0" max="1" step="0.1" />
        </div>

        <div class="control-group">
          <label>显示选项</label>
          <label class="check-row"><input v-model="showLegend" type="checkbox" /> 显示图例</label>
          <label class="check-row"><input v-model="showConnections" type="checkbox" /> 显示连线</label>
          <label class="check-row"><input v-model="showTestMode" type="checkbox" /> 测试模式</label>
        </div>

        <div v-if="!showTestMode" class="muscle-selection">
          <h3>主要肌肉</h3>
          <div class="muscle-grid">
            <label v-for="muscle in allMuscles" :key="muscle">
              <input v-model="selectedPrimaryMuscles" :value="muscle" type="checkbox" />
              <span>{{ getMuscleName(muscle) }}</span>
            </label>
          </div>
        </div>

        <div v-if="!showTestMode" class="muscle-selection">
          <h3>次要肌肉</h3>
          <div class="muscle-grid">
            <label v-for="muscle in allMuscles" :key="muscle">
              <input v-model="selectedSecondaryMuscles" :value="muscle" type="checkbox" />
              <span>{{ getMuscleName(muscle) }}</span>
            </label>
          </div>
        </div>

        <div v-if="showTestMode" class="test-mode-panel">
          <h3>图例测试</h3>
          <div class="test-buttons">
            <button @click="selectLeftLegend">左侧图例</button>
            <button @click="selectRightLegend">右侧图例</button>
          </div>

          <div class="legend-section">
            <h4>左侧图例 ({{ leftLegendData.length }})</h4>
            <div class="legend-list">
              <div v-for="(item, index) in leftLegendData" :key="item.muscle">
                <strong>{{ item.name }} ({{ item.muscle }})</strong>
                <div class="coord-group">
                  <span>中心点 {{ gender === 'male' ? '男' : '女' }}</span>
                  <input
                    type="number"
                    :value="getCurrentCenter(item).x"
                    @input="updateLegendData('left', index, 'center', 'x', Number(($event.target as HTMLInputElement).value), gender)"
                  />
                  <input
                    type="number"
                    :value="getCurrentCenter(item).y"
                    @input="updateLegendData('left', index, 'center', 'y', Number(($event.target as HTMLInputElement).value), gender)"
                  />
                </div>
                <div class="coord-group">
                  <span>图例坐标</span>
                  <input
                    type="number"
                    :value="item.legend.x"
                    @input="updateLegendData('left', index, 'legend', 'x', Number(($event.target as HTMLInputElement).value))"
                  />
                  <input
                    type="number"
                    :value="item.legend.y"
                    @input="updateLegendData('left', index, 'legend', 'y', Number(($event.target as HTMLInputElement).value))"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="legend-section">
            <h4>右侧图例 ({{ rightLegendData.length }})</h4>
            <div class="legend-list">
              <div v-for="(item, index) in rightLegendData" :key="item.muscle">
                <strong>{{ item.name }} ({{ item.muscle }})</strong>
                <div class="coord-group">
                  <span>中心点 {{ gender === 'male' ? '男' : '女' }}</span>
                  <input
                    type="number"
                    :value="getCurrentCenter(item).x"
                    @input="updateLegendData('right', index, 'center', 'x', Number(($event.target as HTMLInputElement).value), gender)"
                  />
                  <input
                    type="number"
                    :value="getCurrentCenter(item).y"
                    @input="updateLegendData('right', index, 'center', 'y', Number(($event.target as HTMLInputElement).value), gender)"
                  />
                </div>
                <div class="coord-group">
                  <span>图例坐标</span>
                  <input
                    type="number"
                    :value="item.legend.x"
                    @input="updateLegendData('right', index, 'legend', 'x', Number(($event.target as HTMLInputElement).value))"
                  />
                  <input
                    type="number"
                    :value="item.legend.y"
                    @input="updateLegendData('right', index, 'legend', 'y', Number(($event.target as HTMLInputElement).value))"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!showTestMode" class="quick-tests">
          <h3>快速测试</h3>
          <div class="test-buttons">
            <button @click="testPullUp">模拟引体向上</button>
            <button @click="testChest">模拟胸推</button>
            <button @click="clearAll">清空选择</button>
          </div>
        </div>
      </section>

      <section class="anatomy-display">
        <h2>🎯 肌肉可视化</h2>
        <div class="muscle-container">
          <HumanMuscleAnatomy
            :gender="gender"
            :selectedPrimaryMuscleGroups="selectedPrimaryMuscles"
            :selectedSecondaryMuscleGroups="selectedSecondaryMuscles"
            :defaultMuscleColor="defaultMuscleColor"
            :primaryHighlightColor="primaryColor"
            :secondaryHighlightColor="secondaryColor"
            :primaryOpacity="primaryOpacity"
            :secondaryOpacity="secondaryOpacity"
            :backgroundColor="backgroundColor"
            :showLegend="showLegend"
            :showConnections="showConnections"
            :showTestMode="showTestMode"
            :leftLegendData="leftLegendData"
            :rightLegendData="rightLegendData"
            @update:selectedPrimaryMuscleGroups="selectedPrimaryMuscles = $event"
            @update:selectedSecondaryMuscleGroups="selectedSecondaryMuscles = $event"
            class="anatomy-canvas"
          />
        </div>

        <div class="status-display">
          <h3>当前状态</h3>
          <p><strong>性别：</strong>{{ gender }}</p>
          <p><strong>主要肌肉：</strong>{{ selectedPrimaryMuscles.join(', ') || '无' }}</p>
          <p><strong>次要肌肉：</strong>{{ selectedSecondaryMuscles.join(', ') || '无' }}</p>
          <p><strong>主要颜色：</strong>{{ primaryColor }}</p>
          <p><strong>次要颜色：</strong>{{ secondaryColor }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HumanMuscleAnatomy, type MuscleGroup } from '@/components/muscle-anatomy/src';
import {
  leftLegendData as leftLegendSource,
  rightLegendData as rightLegendSource,
  getLegendCenter,
  type LegendItem,
  type LegendCenter,
  type Gender
} from '@/data/anatomy/muscleLegend';

const gender = ref<'male' | 'female'>('male');
const selectedPrimaryMuscles = ref<MuscleGroup[]>([]);
const selectedSecondaryMuscles = ref<MuscleGroup[]>([]);
const primaryColor = ref('#16a085');
const secondaryColor = ref('#16a085');
const backgroundColor = ref('#ffffff');
const defaultMuscleColor = ref('#828d99');
const primaryOpacity = ref(0.6);
const secondaryOpacity = ref(0.4);
const showLegend = ref(true);
const showConnections = ref(true);
const showTestMode = ref(false);

const allMuscles: MuscleGroup[] = [
  'chest',
  'lats',
  'traps',
  'rotatorCuffs',
  'lowerBack',
  'frontDelts',
  'sideDelts',
  'rearDelts',
  'triceps',
  'biceps',
  'forearms',
  'abs',
  'obliques',
  'glutes',
  'quads',
  'hamstrings',
  'adductors',
  'abductors',
  'calves',
  'neck'
];

const muscleNames: Record<MuscleGroup, string> = {
  chest: '胸大肌',
  lats: '背阔肌',
  traps: '斜方肌',
  rotatorCuffs: '旋转肌袖',
  lowerBack: '竖脊肌',
  frontDelts: '三角肌前束',
  sideDelts: '三角肌中束',
  rearDelts: '三角肌后束',
  triceps: '肱三头肌',
  biceps: '肱二头肌',
  forearms: '前臂肌群',
  abs: '腹直肌',
  obliques: '腹斜肌',
  glutes: '臀大肌',
  quads: '股四头肌',
  hamstrings: '腘绳肌',
  adductors: '大腿内收肌',
  abductors: '大腿外展肌',
  calves: '小腿肌群',
  neck: '颈部肌群'
};

const getMuscleName = (muscle: MuscleGroup): string => muscleNames[muscle] || muscle;

const testPullUp = () => {
  selectedPrimaryMuscles.value = ['lats'];
  selectedSecondaryMuscles.value = ['biceps', 'rearDelts'];
};

const testChest = () => {
  selectedPrimaryMuscles.value = ['chest'];
  selectedSecondaryMuscles.value = ['frontDelts', 'triceps'];
};

const clearAll = () => {
  selectedPrimaryMuscles.value = [];
  selectedSecondaryMuscles.value = [];
};

const isGenderedCenter = (center: LegendCenter): center is { male: { x: number; y: number }; female: { x: number; y: number } } =>
  typeof center === 'object' && center !== null && 'male' in center;

const cloneCenter = (center: LegendCenter): LegendCenter => {
  if (isGenderedCenter(center)) {
    return {
      male: { ...center.male },
      female: { ...center.female }
    };
  }
  return { ...(center as { x: number; y: number }) };
};

const cloneLegendItems = (items: LegendItem[]) =>
  items.map(item => ({
    ...item,
    center: cloneCenter(item.center),
    legend: { ...item.legend }
  }));

const leftLegendData = ref(cloneLegendItems(leftLegendSource));
const rightLegendData = ref(cloneLegendItems(rightLegendSource));

const getCurrentCenter = (item: LegendItem) => getLegendCenter(item, gender.value as Gender);

const updateLegendData = (
  type: 'left' | 'right',
  index: number,
  field: 'center' | 'legend',
  coordinate: 'x' | 'y',
  value: number,
  genderParam?: Gender
) => {
  if (type === 'left') {
    const item = leftLegendData.value[index];
    if (field === 'center') {
      if (genderParam && isGenderedCenter(item.center)) {
        item.center[genderParam][coordinate] = value;
      } else {
        (item.center as { x: number; y: number })[coordinate] = value;
      }
    } else {
      item[field][coordinate] = value;
    }
  } else {
    const item = rightLegendData.value[index];
    if (field === 'center') {
      if (genderParam && isGenderedCenter(item.center)) {
        item.center[genderParam][coordinate] = value;
      } else {
        (item.center as { x: number; y: number })[coordinate] = value;
      }
    } else {
      item[field][coordinate] = value;
    }
  }
};

const selectLeftLegend = () => {
  const muscles: MuscleGroup[] = leftLegendData.value.map(item => item.muscle as MuscleGroup);
  selectedPrimaryMuscles.value = muscles;
  selectedSecondaryMuscles.value = [];
};

const selectRightLegend = () => {
  const muscles: MuscleGroup[] = rightLegendData.value.map(item => item.muscle as MuscleGroup);
  selectedPrimaryMuscles.value = muscles;
  selectedSecondaryMuscles.value = [];
};
</script>

<style scoped>
.muscle-debug-page {
  min-height: 100vh;
  background: #f5f7fb;
  padding: 1.25rem 1rem 3rem;
}

.header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f2937;
}

.header p {
  color: #64748b;
  font-size: 0.95rem;
}

.debug-layout {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.control-panel,
.anatomy-display {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
  padding: 1.25rem;
}

.control-panel h2,
.anatomy-display h2 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: #334155;
}

.control-group select,
.control-group input[type="range"] {
  width: 100%;
}

.control-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.control-row input {
  width: 3rem;
  height: 2rem;
  padding: 0;
  border: none;
  background: transparent;
}

.check-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #475569;
}

.muscle-selection {
  margin-bottom: 1.5rem;
}

.muscle-selection h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.muscle-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.muscle-grid label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.75rem;
  background: #f8fafc;
  font-size: 0.9rem;
}

.test-mode-panel {
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 0.75rem;
  padding: 1rem;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.test-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.test-buttons button {
  flex: 1 1 30%;
  min-width: 120px;
  padding: 0.6rem 0.8rem;
  border-radius: 0.75rem;
  border: none;
  background: #2563eb;
  color: white;
  font-size: 0.9rem;
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.2);
}

.legend-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.legend-list {
  display: grid;
  gap: 0.75rem;
}

.legend-list > div {
  background: white;
  border-radius: 0.75rem;
  padding: 0.75rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.coord-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}

.coord-group input {
  width: 60px;
  padding: 0.4rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background: #fff;
}

.quick-tests h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.anatomy-display {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.muscle-container {
  background: #f8fafc;
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.anatomy-canvas {
  width: 100%;
  height: auto;
}

.status-display {
  background: #f8fafc;
  border-radius: 0.75rem;
  padding: 1rem;
  font-size: 0.9rem;
  color: #475569;
  display: grid;
  gap: 0.4rem;
}

@media (min-width: 768px) {
  .muscle-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .debug-layout {
    flex-direction: row;
    align-items: flex-start;
  }

  .control-panel {
    flex: 0 0 340px;
    position: sticky;
    top: 1rem;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
  }

  .anatomy-display {
    flex: 1;
  }
}
</style>
