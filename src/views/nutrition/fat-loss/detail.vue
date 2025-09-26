<template>
  <div class="nutrition-page">
    <div class="container mx-auto px-4 py-8">
      <!-- 返回按钮 -->
      <div class="mb-6">
        <button 
          @click="goBack"
          class="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          返回方案列表
        </button>
      </div>
      <!-- 方案详情 -->
      <div v-if="plan" ref="captureRef" class="max-w-4xl mx-auto">
        <!-- 方案标题 -->
        <div class="text-center mb-8">
          <div class="text-4xl mb-4">{{ getPlanIcon(plan.id) }}</div>
          <h1 class="text-4xl font-bold text-fg mb-4">{{ plan.name }}</h1>
          <p class="text-lg text-fg-muted">{{ plan.description }}</p>
        </div>
        <PlanInfoCards :plan="plan" />
        <BasicInfoBMI 
          v-model:gender="gender" 
          v-model:height="heightCm" 
          v-model:weight="weightKg" 
          v-model:age="age"
          @update:bmi="onBmiUpdate"
          @update:valid="onValidUpdate"
          @update:bmiCategory="onBmiCategoryUpdate"
        />
        <HeatDesign
          :gender="gender"
          :age="age"
          :height-cm="heightCm"
          :weight-kg="weightKg"
          :strength-level="strengthLevel"
          :mode="'fat-loss'"
          v-model:bmrManual="bmrManual"
          v-model:maintainManual="maintainManual"
          v-model:strengthKcal="strengthKcal"
          v-model:cardioKcal="cardioKcal"
        />

        <DietOverview
          :gender="gender"
          :height-cm="heightCm"
          :weight-kg="weightKg"
          :has-valid-inputs="hasValidInputs"
          :plan="plan"
          :mode="'fat-loss'"
        />
        <!-- 动态渲染的章节 -->
        <div v-for="section in fatLossSections" :key="section.id" class="bg-surface rounded-lg shadow-lg p-6 mb-8">
          <h3 class="text-xl font-semibold text-fg mb-6 flex items-center">
            <span class="text-2xl mr-3">{{ section.icon }}</span>
            {{ section.title }}
          </h3>
          <div class="space-y-4">
            <div v-for="item in section.items" :key="item.title">
              <div class="font-semibold text-fg mb-1" :class="{ 'text-red-500': item.isImportant }">{{ item.title }}</div>
              <p class="text-fg-muted whitespace-pre-line" v-html="item.content"></p>
            </div>
          </div>
        </div>

        <!-- 行动按钮 -->
        <ScreenshotButton :file-name="plan?.name || 'plan'" />
      </div>

      <!-- 方案不存在 -->
      <div v-else class="text-center py-16">
        <div class="text-6xl mb-4">😕</div>
        <h2 class="text-2xl font-bold text-fg mb-4">方案不存在</h2>
        <p class="text-fg-muted mb-6">抱歉，您访问的方案不存在或已被删除。</p>
        <button 
          @click="goBack"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
        >
          返回方案列表
        </button>
      </div>
      <!-- 预览弹窗（移动端长按保存） -->
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import BasicInfoBMI from '@/components/nutrition/BasicInfoBMI.vue';
import PlanInfoCards from '@/components/nutrition/PlanInfoCards.vue';
import HeatDesign from '@/components/nutrition/HeatDesign.vue';
import DietOverview from '@/components/nutrition/DietOverview.vue';
import { useRoute, useRouter } from 'vue-router';
import ScreenshotButton from '@/components/nutrition/ScreenshotButton.vue';
import { useNutritionStore } from '@/stores/nutrition';

const route = useRoute();
const router = useRouter();
const nutritionStore = useNutritionStore();

// 使用 store 中的数据
const plan = computed(() => nutritionStore.currentPlan);
const gender = computed({
  get: () => nutritionStore.gender,
  set: (value) => nutritionStore.updateUserData({ gender: value })
});
const heightCm = computed({
  get: () => nutritionStore.heightCm,
  set: (value) => nutritionStore.updateUserData({ heightCm: value })
});
const weightKg = computed({
  get: () => nutritionStore.weightKg,
  set: (value) => nutritionStore.updateUserData({ weightKg: value })
});
const age = computed({
  get: () => nutritionStore.age,
  set: (value) => nutritionStore.updateUserData({ age: value })
});
const strengthLevel = computed({
  get: () => nutritionStore.strengthLevel,
  set: (value) => nutritionStore.updateUserData({ strengthLevel: value })
});
const strengthKcal = computed({
  get: () => nutritionStore.strengthKcal,
  set: (value) => nutritionStore.updateCalorieData({ strengthKcal: value })
});
const cardioKcal = computed({
  get: () => nutritionStore.cardioKcal,
  set: (value) => nutritionStore.updateCalorieData({ cardioKcal: value })
});
const bmrManual = computed({
  get: () => nutritionStore.bmrManual,
  set: (value) => nutritionStore.updateCalorieData({ bmrManual: value })
});
const maintainManual = computed({
  get: () => nutritionStore.maintainManual,
  set: (value) => nutritionStore.updateCalorieData({ maintainManual: value })
});
const hasValidInputs = computed(() => nutritionStore.hasValidInputs);
const fatLossSections = computed(() => nutritionStore.fatLossSections);

onMounted(() => {
  // 初始化 store
  nutritionStore.initializeStore();
  
  // 设置当前方案
  const planId = route.params.id as string;
  nutritionStore.setCurrentPlan(planId);
  // 初始计算一次热量设计相关数值
  computeAndStoreHeatDesign();
});

function goBack() {
  router.push('/nutrition/fat-loss');
}

function getPlanIcon(planId: string): string {
  return nutritionStore.getPlanIcon(planId);
}

// BMI 相关事件处理
function onBmiUpdate(bmi: string) {
  // 将计算好的 BMI 存储到 store
  nutritionStore.updateCalculatedData({ bmi });
}

function onValidUpdate(valid: boolean) {
  // 有效性状态更新
  console.log('Valid inputs:', valid);
}

function onBmiCategoryUpdate(category: string) {
  // 将计算好的 BMI 分类存储到 store
  nutritionStore.updateCalculatedData({ bmiCategory: category });
}

const captureRef = ref<HTMLElement | null>(null);

// 计算并写入“热量设计”所有展示用数值，保持与 HeatDesign 组件一致
function computeAndStoreHeatDesign() {
  const g = gender.value;
  const h = heightCm.value;
  const w = weightKg.value;
  const a = age.value;
  if (!g || !h || !w || !a) {
    nutritionStore.updateCalculatedData({
      bmr: '',
      maintain: '',
      balanceTrainKcal: 0,
      balanceRestKcal: 0,
      eatTrainKcal: 0,
      eatRestKcal: 0,
    });
    return;
  }

  // BMR（Mifflin-St Jeor）
  const bmrCalc = g === 'male'
    ? w * 9.99 + h * 6.25 - a * 4.92 + 5
    : w * 9.99 + h * 6.25 - a * 4.92 - 161;
  const bmrUsed = nutritionStore.bmrManual && nutritionStore.bmrManual > 0 ? nutritionStore.bmrManual : bmrCalc;

  // 无运动总消耗（维持热量基线）
  const maintainKcal = bmrUsed / 0.7;
  const maintainUsed = nutritionStore.maintainManual && nutritionStore.maintainManual > 0
    ? nutritionStore.maintainManual
    : maintainKcal;

  // 力训/有氧消耗（遵循 HeatDesign 逻辑：手动优先，否则按性别+水平）
  let strengthBurn = nutritionStore.strengthKcal || 0;
  if (!strengthBurn || strengthBurn <= 0) {
    if (g === 'male') {
      strengthBurn = strengthLevel.value === 'advanced' ? 250 : (strengthLevel.value === 'intermediate' ? 200 : 150);
    } else {
      strengthBurn = strengthLevel.value === 'advanced' ? 200 : (strengthLevel.value === 'intermediate' ? 150 : 100);
    }
  }
  const cardioBurn = nutritionStore.cardioKcal || 0;

  // 平衡热量
  const balanceTrain = maintainUsed + strengthBurn + cardioBurn;
  const balanceRest = maintainUsed + cardioBurn;

  // 根据路由判断模式：增肌用 0.84，减脂用 0.64
  const path = route.path || '';
  const isMuscleGain = path.includes('/nutrition/muscle-gain');
  const multiplier = isMuscleGain ? 0.84 : 0.64;
  const eatTrain = balanceTrain * multiplier;
  const eatRest = balanceRest * multiplier;

  nutritionStore.updateCalculatedData({
    bmr: Math.round(bmrUsed).toString(),
    maintain: Math.round(maintainUsed).toString(),
    balanceTrainKcal: Math.round(balanceTrain),
    balanceRestKcal: Math.round(balanceRest),
    eatTrainKcal: Math.round(eatTrain),
    eatRestKcal: Math.round(eatRest),
  });
}

// 监听相关输入与手动值变化，实时同步到 store
watch(
  [gender, heightCm, weightKg, age, strengthLevel, bmrManual, maintainManual, strengthKcal, cardioKcal],
  () => {
    computeAndStoreHeatDesign();
  },
  { immediate: false }
);

</script>

<style scoped>
.nutrition-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}
.compact-input {
  padding-top: 0.25rem; /* 4px */
  padding-bottom: 0.25rem; /* 4px */
  line-height: 1.1;
}
</style>
