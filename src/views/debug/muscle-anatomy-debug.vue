<template>
  <div class="muscle-debug-page">
    <!-- 页面头部 -->
    <div class="header">
      <h1 class="text-4xl font-bold text-gray-800 mb-2">
        🧪 肌肉组件调试页面
      </h1>
      <p class="text-gray-600">HumanMuscleAnatomy 组件调试和测试</p>
    </div>

    <!-- 左右布局 -->
    <div class="debug-layout">
      <!-- 左侧控制面板 -->
      <div class="control-panel">
        <h2 class="text-2xl font-semibold mb-4">🎛️ 控制面板</h2>
        
        <!-- 性别选择 -->
        <div class="control-group">
          <label class="block text-sm font-medium text-gray-700 mb-2">性别</label>
          <select v-model="gender" class="w-full border border-gray-300 rounded-md px-3 py-2">
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </div>

        <!-- 颜色设置 -->
        <div class="control-group">
          <label class="block text-sm font-medium text-gray-700 mb-2">主要肌肉颜色</label>
          <input 
            v-model="primaryColor" 
            type="color" 
            class="w-full h-10 border border-gray-300 rounded"
          />
        </div>

        <div class="control-group">
          <label class="block text-sm font-medium text-gray-700 mb-2">次要肌肉颜色</label>
          <input 
            v-model="secondaryColor" 
            type="color" 
            class="w-full h-10 border border-gray-300 rounded"
          />
        </div>

        <div class="control-group">
          <label class="block text-sm font-medium text-gray-700 mb-2">背景颜色</label>
          <input 
            v-model="backgroundColor" 
            type="color" 
            class="w-full h-10 border border-gray-300 rounded"
          />
        </div>

        <div class="control-group">
          <label class="block text-sm font-medium text-gray-700 mb-2">默认肌肉颜色</label>
          <input 
            v-model="defaultMuscleColor" 
            type="color" 
            class="w-full h-10 border border-gray-300 rounded"
          />
        </div>

        <!-- 透明度设置 -->
        <div class="control-group">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            主要肌肉透明度: {{ primaryOpacity }}
          </label>
          <input 
            v-model="primaryOpacity" 
            type="range" 
            min="0" 
            max="1" 
            step="0.1"
            class="w-full"
          />
        </div>

        <div class="control-group">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            次要肌肉透明度: {{ secondaryOpacity }}
          </label>
          <input 
            v-model="secondaryOpacity" 
            type="range" 
            min="0" 
            max="1" 
            step="0.1"
            class="w-full"
          />
        </div>

        <!-- 显示设置 -->
        <div class="control-group">
          <label class="block text-sm font-medium text-gray-700 mb-2">显示设置</label>
          <div class="space-y-2">
            <label class="flex items-center">
              <input v-model="showLegend" type="checkbox" class="mr-2" />
              显示图例
            </label>
            <label class="flex items-center">
              <input v-model="showConnections" type="checkbox" class="mr-2" />
              显示连线
            </label>
            <label class="flex items-center">
              <input v-model="showTestMode" type="checkbox" class="mr-2" />
              测试模式
            </label>
          </div>
        </div>

        <!-- 肌肉选择 -->
        <div v-if="!showTestMode" class="muscle-selection">
          <h3 class="text-lg font-semibold mb-2">主要肌肉群</h3>
          <div class="muscle-grid">
            <label 
              v-for="muscle in allMuscles" 
              :key="muscle" 
              class="muscle-item"
            >
              <input 
                v-model="selectedPrimaryMuscles" 
                :value="muscle" 
                type="checkbox"
                class="rounded"
              />
              <span class="text-sm">{{ getMuscleName(muscle) }}</span>
            </label>
          </div>
        </div>

        <div v-if="!showTestMode" class="muscle-selection">
          <h3 class="text-lg font-semibold mb-2">次要肌肉群</h3>
          <div class="muscle-grid">
            <label 
              v-for="muscle in allMuscles" 
              :key="muscle" 
              class="muscle-item"
            >
              <input 
                v-model="selectedSecondaryMuscles" 
                :value="muscle" 
                type="checkbox"
                class="rounded"
              />
              <span class="text-sm">{{ getMuscleName(muscle) }}</span>
            </label>
          </div>
        </div>

        <!-- 测试模式图例数据编辑 -->
        <div v-if="showTestMode" class="test-mode-panel">
          <h3 class="text-lg font-semibold mb-4">图例数据测试面板</h3>
          
          <!-- 测试按钮 -->
          <div class="test-buttons mb-4">
            <button @click="selectLeftLegend" class="test-btn bg-blue-500 hover:bg-blue-600">
              选择左侧图例
            </button>
            <button @click="selectRightLegend" class="test-btn bg-green-500 hover:bg-green-600">
              选择右侧图例
            </button>
          </div>
          
          <!-- 左侧图例数据 -->
          <div class="legend-section">
            <h4 class="text-md font-medium mb-3">左侧图例数据 ({{ leftLegendData.length }}个肌肉)</h4>
            <div class="legend-list">
              <div v-for="(item, index) in leftLegendData" :key="item.muscle" class="legend-item">
                <div class="muscle-name">{{ item.name }} ({{ item.muscle }})</div>
                <div class="coordinates">
                  <div class="coord-group">
                    <label>中心点 ({{ gender === 'male' ? '男性' : '女性' }}):</label>
                    <input 
                      type="number" 
                      :value="getCurrentCenter(item).x" 
                      @input="updateLegendData('left', index, 'center', 'x', Number(($event.target as HTMLInputElement).value), gender)"
                      class="coord-input"
                    />
                    <input 
                      type="number" 
                      :value="getCurrentCenter(item).y" 
                      @input="updateLegendData('left', index, 'center', 'y', Number(($event.target as HTMLInputElement).value), gender)"
                      class="coord-input"
                    />
                  </div>
                  <div class="coord-group">
                    <label>图例位置:</label>
                    <input 
                      type="number" 
                      :value="item.legend.x" 
                      @input="updateLegendData('left', index, 'legend', 'x', Number(($event.target as HTMLInputElement).value))"
                      class="coord-input"
                    />
                    <input 
                      type="number" 
                      :value="item.legend.y" 
                      @input="updateLegendData('left', index, 'legend', 'y', Number(($event.target as HTMLInputElement).value))"
                      class="coord-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧图例数据 -->
          <div class="legend-section">
            <h4 class="text-md font-medium mb-3">右侧图例数据 ({{ rightLegendData.length }}个肌肉)</h4>
            <div class="legend-list">
              <div v-for="(item, index) in rightLegendData" :key="item.muscle" class="legend-item">
                <div class="muscle-name">{{ item.name }} ({{ item.muscle }})</div>
                <div class="coordinates">
                  <div class="coord-group">
                    <label>中心点 ({{ gender === 'male' ? '男性' : '女性' }}):</label>
                    <input 
                      type="number" 
                      :value="getCurrentCenter(item).x" 
                      @input="updateLegendData('right', index, 'center', 'x', Number(($event.target as HTMLInputElement).value), gender)"
                      class="coord-input"
                    />
                    <input 
                      type="number" 
                      :value="getCurrentCenter(item).y" 
                      @input="updateLegendData('right', index, 'center', 'y', Number(($event.target as HTMLInputElement).value), gender)"
                      class="coord-input"
                    />
                  </div>
                  <div class="coord-group">
                    <label>图例位置:</label>
                    <input 
                      type="number" 
                      :value="item.legend.x" 
                      @input="updateLegendData('right', index, 'legend', 'x', Number(($event.target as HTMLInputElement).value))"
                      class="coord-input"
                    />
                    <input 
                      type="number" 
                      :value="item.legend.y" 
                      @input="updateLegendData('right', index, 'legend', 'y', Number(($event.target as HTMLInputElement).value))"
                      class="coord-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 快速测试按钮 -->
        <div v-if="!showTestMode" class="quick-tests">
          <h3 class="text-lg font-semibold mb-2">快速测试</h3>
          <div class="test-buttons">
            <button 
              @click="testPullUp" 
              class="test-btn bg-blue-500 hover:bg-blue-600"
            >
              测试引体向上
            </button>
            <button 
              @click="testChest" 
              class="test-btn bg-red-500 hover:bg-red-600"
            >
              测试胸部
            </button>
            <button 
              @click="clearAll" 
              class="test-btn bg-gray-500 hover:bg-gray-600"
            >
              清空选择
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧肌肉组件显示区域 -->
      <div class="anatomy-display">
        <h2 class="text-2xl font-semibold mb-4">🎯 肌肉组件预览</h2>
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
            class="w-full h-auto"
          />
        </div>
        
        <!-- 当前状态显示 -->
        <div class="status-display">
          <h3 class="font-semibold mb-2">当前状态:</h3>
          <p><strong>性别:</strong> {{ gender }}</p>
          <p><strong>主要肌肉:</strong> {{ selectedPrimaryMuscles.join(', ') || '无' }}</p>
          <p><strong>次要肌肉:</strong> {{ selectedSecondaryMuscles.join(', ') || '无' }}</p>
          <p><strong>主要颜色:</strong> {{ primaryColor }}</p>
          <p><strong>次要颜色:</strong> {{ secondaryColor }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { HumanMuscleAnatomy, type MuscleGroup } from '../../components/muscle-anatomy/src'

// 响应式数据
const gender = ref<'male' | 'female'>('male')
const selectedPrimaryMuscles = ref<MuscleGroup[]>([])
const selectedSecondaryMuscles = ref<MuscleGroup[]>([])
const primaryColor = ref('#16a085')
const secondaryColor = ref('#16a085')
const backgroundColor = ref('#ffffff')
const defaultMuscleColor = ref('#828d99')
const primaryOpacity = ref(0.6)
const secondaryOpacity = ref(0.4)
const showLegend = ref(true)
const showConnections = ref(true)
const showTestMode = ref(false)

// 所有可用的肌肉群
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
]

// 肌肉名称映射
const muscleNames: Record<MuscleGroup, string> = {
  'chest': '胸大肌',
  'lats': '背阔肌',
  'traps': '斜方肌',
  'rotatorCuffs': '旋转肌袖',
  'lowerBack': '竖脊肌',
  'frontDelts': '三角肌前束',
  'sideDelts': '三角肌中束',
  'rearDelts': '三角肌后束',
  'triceps': '肱三头肌',
  'biceps': '肱二头肌',
  'forearms': '前臂肌群',
  'abs': '腹直肌',
  'obliques': '腹斜肌',
  'glutes': '臀大肌',
  'quads': '股四头肌',
  'hamstrings': '腘绳肌',
  'adductors': '大腿内收肌',
  'abductors': '大腿外展肌',
  'calves': '小腿肌群',
  'neck': '颈部肌群'
}

// 获取肌肉中文名称
const getMuscleName = (muscle: MuscleGroup): string => {
  return muscleNames[muscle] || muscle
}

// 测试函数
const testPullUp = () => {
  selectedPrimaryMuscles.value = ['lats']
  selectedSecondaryMuscles.value = ['biceps', 'rearDelts']
}

const testChest = () => {
  selectedPrimaryMuscles.value = ['chest']
  selectedSecondaryMuscles.value = ['frontDelts', 'triceps']
}

const clearAll = () => {
  selectedPrimaryMuscles.value = []
  selectedSecondaryMuscles.value = []
}

// 图例数据 - 支持性别区分
const leftLegendData = ref([
  { muscle: 'neck', name: '颈部肌群', center: { male: { x: 263, y: 184 }, female: { x: 260, y: 190 } }, legend: { x: 60, y: 80 }, textSide: 'left' },
  { muscle: 'traps', name: '斜方肌', center: { male: { x: 210, y: 196 }, female: { x: 210, y: 195 } }, legend: { x: 60, y: 150 }, textSide: 'left' },
  { muscle: 'chest', name: '胸大肌', center: { male: { x: 220, y: 250 }, female: { x: 220, y: 250 } }, legend: { x: 60, y: 220 }, textSide: 'left' },
  { muscle: 'obliques', name: '腹斜肌', center: { male: { x: 210, y: 342 }, female: { x: 210, y: 342 } }, legend: { x: 60, y: 290 }, textSide: 'left' },
  { muscle: 'forearms', name: '前臂肌群', center: { male: { x: 110, y: 400 }, female: { x: 123, y: 400 } }, legend: { x: 60, y: 360 }, textSide: 'left' },
  { muscle: 'abductors', name: '大腿外展肌', center: { male: { x: 176, y: 515 }, female: { x: 176, y: 515 } }, legend: { x: 60, y: 570 }, textSide: 'left' },
  { muscle: 'quads', name: '股四头肌', center: { male: { x: 202, y: 590 }, female: { x: 202, y: 590 } }, legend: { x: 60, y: 710 }, textSide: 'left' },
  { muscle: 'sideDelts', name: '三角肌中束', center: { male: { x: 360, y: 220 }, female: { x: 356, y: 214 } }, legend: { x: 450, y: 80 }, textSide: 'right' },
  { muscle: 'frontDelts', name: '三角肌前束', center: { male: { x: 358, y: 236 }, female: { x: 358, y: 236 } }, legend: { x: 450, y: 150 }, textSide: 'right' },
  { muscle: 'biceps', name: '肱二头肌', center: { male: { x: 375, y: 301 }, female: { x: 362, y: 301 } }, legend: { x: 450, y: 220 }, textSide: 'right' },
  { muscle: 'triceps', name: '肱三头肌', center: { male: { x: 405, y: 310 }, female: { x: 383, y: 310 } }, legend: { x: 450, y: 290 }, textSide: 'right' },
  { muscle: 'lats', name: '背阔肌', center: { male: { x: 348, y: 308 }, female: { x: 330, y: 308 } }, legend: { x: 450, y: 360 }, textSide: 'right' },
  { muscle: 'abs', name: '腹直肌', center: { male: { x: 283, y: 370 }, female: { x: 283, y: 370 } }, legend: { x: 450, y: 430 }, textSide: 'right' },
  { muscle: 'adductors', name: '大腿内收肌', center: { male: { x: 292, y: 520 }, female: { x: 280, y: 520 } }, legend: { x: 450, y: 570 }, textSide: 'right' },
  { muscle: 'calves', name: '小腿肌群', center: { male: { x: 299, y: 772 }, female: { x: 284, y: 772 } }, legend: { x: 450, y: 710 }, textSide: 'right' }
])

const rightLegendData = ref([
  { muscle: 'rearDelts', name: '三角肌后束', center: { male: { x: 653, y: 216 }, female: { x: 672, y: 216 } }, legend: { x: 580, y: 80 }, textSide: 'left' },
  { muscle: 'rotatorCuffs', name: '旋转肌袖', center: { male: { x: 700, y: 250 }, female: { x: 707, y: 250 } }, legend: { x: 580, y: 150 }, textSide: 'left' },
  { muscle: 'lowerBack', name: '竖脊肌', center: { male: { x: 747, y: 400 }, female: { x: 747, y: 400 } }, legend: { x: 580, y: 290 }, textSide: 'left' },
  { muscle: 'glutes', name: '臀大肌', center: { male: { x: 712, y: 469 }, female: { x: 712, y: 469 } }, legend: { x: 580, y: 390 }, textSide: 'left' },
  { muscle: 'adductors', name: '大腿内收肌', center: { male: { x: 745, y: 575 }, female: { x: 745, y: 560 } }, legend: { x: 580, y: 630 }, textSide: 'left' },
  { muscle: 'hamstrings', name: '腘绳肌', center: { male: { x: 696, y: 598 }, female: { x: 716, y: 598 } }, legend: { x: 580, y: 730 }, textSide: 'left' },
  { muscle: 'traps', name: '斜方肌', center: { male: { x: 795, y: 200 }, female: { x: 795, y: 200 } }, legend: { x: 970, y: 80 }, textSide: 'right' },
  { muscle: 'lats', name: '背阔肌', center: { male: { x: 810, y: 320 }, female: { x: 810, y: 320 } }, legend: { x: 970, y: 150 }, textSide: 'right' },
  { muscle: 'triceps', name: '肱三头肌', center: { male: { x: 880, y: 300 }, female: { x: 867, y: 300 } }, legend: { x: 970, y: 290 }, textSide: 'right' },
  { muscle: 'forearms', name: '前臂肌群', center: { male: { x: 918, y: 400 }, female: { x: 902, y: 400 } }, legend: { x: 970, y: 390 }, textSide: 'right' },
  { muscle: 'abductors', name: '大腿外展肌', center: { male: { x: 849, y: 566 }, female: { x: 839, y: 566 } }, legend: { x: 950, y: 630 }, textSide: 'right' },
  { muscle: 'calves', name: '小腿肌群', center: { male: { x: 820, y: 770 }, female: { x: 807, y: 770 } }, legend: { x: 970, y: 770 }, textSide: 'right' }
])

// 获取当前性别的中心点坐标
const getCurrentCenter = (item: any) => {
  if (item.center && typeof item.center === 'object' && 'male' in item.center) {
    return item.center[gender.value];
  }
  return item.center;
};

// 更新图例数据
const updateLegendData = (type: 'left' | 'right', index: number, field: 'center' | 'legend', coordinate: 'x' | 'y', value: number, gender?: 'male' | 'female') => {
  if (type === 'left') {
    const item = leftLegendData.value[index];
    if (field === 'center') {
      // 支持性别区分的中心点
      if (gender && item.center && typeof item.center === 'object' && 'male' in item.center) {
        item.center[gender][coordinate] = value;
      } else {
        // 兼容旧格式
        (item.center as unknown as { x: number; y: number })[coordinate] = value;
      }
    } else {
      item[field][coordinate] = value;
    }
  } else {
    const item = rightLegendData.value[index];
    if (field === 'center') {
      // 支持性别区分的中心点
      if (gender && item.center && typeof item.center === 'object' && 'male' in item.center) {
        item.center[gender][coordinate] = value;
      } else {
        // 兼容旧格式
        (item.center as unknown as { x: number; y: number })[coordinate] = value;
      }
    } else {
      item[field][coordinate] = value;
    }
  }
}

// 选择图例函数
const selectLeftLegend = () => {
  const leftMuscles: MuscleGroup[] = leftLegendData.value.map(item => item.muscle as MuscleGroup)
  selectedPrimaryMuscles.value = leftMuscles
  selectedSecondaryMuscles.value = []
}

const selectRightLegend = () => {
  const rightMuscles: MuscleGroup[] = rightLegendData.value.map(item => item.muscle as MuscleGroup)
  selectedPrimaryMuscles.value = rightMuscles
  selectedSecondaryMuscles.value = []
}
</script>

<style scoped>
.muscle-debug-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.debug-layout {
  display: flex;
  gap: 20px;
  height: calc(100vh - 120px);
}

.control-panel {
  width: 350px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
}

.anatomy-display {
  flex: 1;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.control-group {
  margin-bottom: 16px;
}

.muscle-selection {
  margin-bottom: 20px;
}

.muscle-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.muscle-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.muscle-item:hover {
  background-color: #f3f4f6;
}

.quick-tests {
  margin-top: 20px;
}

.test-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.test-btn {
  padding: 8px 16px;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.test-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.muscle-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.status-display {
  background: #f3f4f6;
  border-radius: 8px;
  padding: 16px;
}

.status-display p {
  margin: 4px 0;
  font-size: 14px;
}

/* 测试模式样式 */
.test-mode-panel {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  max-height: 600px;
  overflow-y: auto;
}

.legend-section {
  margin-bottom: 30px;
}

.legend-section h4 {
  color: #6c757d;
  margin-bottom: 15px;
  font-size: 1.2rem;
  border-bottom: 2px solid #dee2e6;
  padding-bottom: 8px;
}

.legend-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.legend-item {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.muscle-name {
  font-weight: 600;
  color: #495057;
  margin-bottom: 10px;
  font-size: 1rem;
}

.coordinates {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.coord-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coord-group label {
  font-size: 0.9rem;
  color: #6c757d;
  min-width: 60px;
}

.coord-input {
  width: 60px;
  padding: 4px 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
}

.coord-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .debug-layout {
    flex-direction: column;
    height: auto;
  }
  
  .control-panel {
    width: 100%;
    margin-bottom: 20px;
  }
  
  .muscle-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .muscle-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .test-buttons {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
