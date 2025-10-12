<template>
  <component :is="activeComponent" v-if="activeComponent" />
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue';
import { useDevice } from '@/utils/device';
import DesktopExerciseDetail from '@/views/training/exercises/exercise-detail.vue';
import MobileExerciseDetail from '@/views-mobile/training/exercises/exercise-detail.vue';

const { isMobile } = useDevice();
const activeComponent = shallowRef(isMobile.value ? MobileExerciseDetail : DesktopExerciseDetail);

// 监听设备类型变化
watch(isMobile, (newVal) => {
  activeComponent.value = newVal ? MobileExerciseDetail : DesktopExerciseDetail;
}, { immediate: true });
</script>
