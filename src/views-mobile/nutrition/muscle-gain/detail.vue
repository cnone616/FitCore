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

        <BasicInfoBMI v-model:gender="gender" v-model:height="heightCm" v-model:weight="weightKg" v-model:age="age" />

        <HeatDesign
          :gender="gender"
          :age="age"
          :height-cm="heightCm"
          :weight-kg="weightKg"
          :strength-level="strengthLevel"
          :mode="'muscle-gain'"
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
          :mode="'muscle-gain'"
        />
        <!-- 动态渲染的章节 -->
        <div v-for="section in muscleGainSections" :key="section.id" class="bg-surface rounded-lg shadow-lg p-6 mb-8">
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
        <ScreenshotButton :file-name="plan?.name || 'plan'">
          <!-- 方案内容，用于预览弹窗 -->
          <div v-if="plan" class="space-y-6">
            <!-- 方案标题 -->
            <div class="text-center">
              <div class="text-4xl mb-4">{{ getPlanIcon(plan.id) }}</div>
              <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ plan.name }}</h1>
              <p class="text-lg text-gray-600">{{ plan.description }}</p>
            </div>

            <!-- 方案信息卡片 -->
            <PlanInfoCards :plan="plan" />

            <!-- 基本信息与BMI -->
            <BasicInfoBMI v-model:gender="gender" v-model:height="heightCm" v-model:weight="weightKg" v-model:age="age" />

            <!-- 热量设计 -->
            <HeatDesign
              :gender="gender"
              :age="age"
              :height-cm="heightCm"
              :weight-kg="weightKg"
              :strength-level="strengthLevel"
              :mode="'muscle-gain'"
              v-model:bmrManual="bmrManual"
              v-model:maintainManual="maintainManual"
              v-model:strengthKcal="strengthKcal"
              v-model:cardioKcal="cardioKcal"
            />

            <!-- 饮食总览 -->
            <DietOverview
              :gender="gender"
              :height-cm="heightCm"
              :weight-kg="weightKg"
              :has-valid-inputs="hasValidInputs"
              :plan="plan"
              :mode="'muscle-gain'"
            />

            <!-- 动态渲染的章节 -->
            <div v-for="section in muscleGainSections" :key="section.id" class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span class="text-2xl mr-3">{{ section.icon }}</span>
                {{ section.title }}
              </h3>
              <div class="space-y-4">
                <div v-for="item in section.items" :key="item.title">
                  <div class="font-semibold text-gray-800 mb-1" :class="{ 'text-red-500': item.isImportant }">{{ item.title }}</div>
                  <p class="text-gray-600 whitespace-pre-line" v-html="item.content"></p>
                </div>
              </div>
            </div>
          </div>
        </ScreenshotButton>
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
import { ref, computed, onMounted } from 'vue';
import BasicInfoBMI from '@/components/nutrition/BasicInfoBMI.vue';
import PlanInfoCards from '@/components/nutrition/PlanInfoCards.vue';
import HeatDesign from '@/components/nutrition/HeatDesign.vue';
import DietOverview from '@/components/nutrition/DietOverview.vue';
import { useRoute, useRouter } from 'vue-router';
import ScreenshotButton from '@/components/nutrition/ScreenshotButton.vue';
import { getMuscleGainPlan } from './plans-data.ts';
import type { MuscleGainPlan } from './plans-data.ts';
import { muscleGainSections } from './sections-data.ts';

const route = useRoute();
const router = useRouter();
const plan = ref<MuscleGainPlan | null>(null);

// 基本信息与 BMI
const gender = ref<'male' | 'female'>('male');
const heightCm = ref<number | null>(null);
const weightKg = ref<number | null>(null);
const age = ref<number | null>(null);
const strengthLevel = ref<'beginner' | 'intermediate' | 'advanced'>('beginner');
const strengthKcal = ref<number>(0);
const cardioKcal = ref<number>(0);
const bmrManual = ref<number | null>(null);
const maintainManual = ref<number | null>(null);

// 由 BasicInfoBMI 负责计算并上抛；此处不再单独计算，避免未使用告警

// 兼容历史命名，保留但不再单独使用
const hasValidInputs = computed(() => !!(weightKg.value && heightCm.value && age.value));

onMounted(() => {
  const planId = route.params.id as string;
  const found = getMuscleGainPlan(planId);
  plan.value = found ?? null;
});

// 步进控制逻辑已改用 ElInputNumber

function goBack() {
  router.push('/nutrition/muscle-gain');
}

function getPlanIcon(planId: string): string {
  const iconMap: Record<string, string> = {
    'morning_early': '🌅',
    'morning_late': '🌞',
    'before_lunch': '🍽️',
    'after_lunch': '🥗',
    'before_dinner': '🌆',
    'after_dinner': '🌙',
    'night_training': '🌃'
  };
  return iconMap[planId] || '💪';
}

const captureRef = ref<HTMLElement | null>(null);

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
