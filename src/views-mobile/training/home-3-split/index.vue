<template>
  <div>
    <!-- 居家健身指导 -->
    <TrainingGuide :custom-guide="homeTrainingGuide" />
    
    <!-- 训练计划展示 -->
    <TrainingPlanDisplay :overview="planOverviewData" :plans="trainingPlans" />
  </div>
</template>

<script setup lang="ts">
import TrainingGuide from '@/components/training/TrainingGuide.vue';
import TrainingPlanDisplay from '@/components/training/TrainingPlanDisplay.vue';
import { planOverview, home3SplitPlans, homeTrainingGuide } from './data';

// 获取计划概览和训练计划数据
const planOverviewData = planOverview;
const trainingPlans = home3SplitPlans;
</script>

<style scoped>
</style>