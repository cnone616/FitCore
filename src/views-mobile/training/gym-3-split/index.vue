<template>
  <div>
    <!-- 训练指南 -->
    <TrainingGuide />
    
    <!-- 训练计划展示 -->
    <TrainingPlanDisplay :overview="planOverviewData" :plans="trainingPlans" />
  </div>
</template>

<script setup lang="ts">
import TrainingGuide from '@/components/training/TrainingGuide.vue';
import TrainingPlanDisplay from '@/components/training/TrainingPlanDisplay.vue';
import { planOverview, gym3SplitPlans } from './data';

// 获取计划概览和训练计划数据
const planOverviewData = planOverview;
const trainingPlans = gym3SplitPlans;
</script>

<style scoped>
</style>