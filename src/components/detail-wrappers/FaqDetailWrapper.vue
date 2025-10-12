<template>
  <component :is="activeComponent" v-if="activeComponent" />
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue';
import { useDevice } from '@/utils/device';
import DesktopDetail from '@/views/nutrition/faq/detail.vue';
import MobileDetail from '@/views-mobile/nutrition/faq/detail.vue';

const { isMobile } = useDevice();
const activeComponent = shallowRef(isMobile.value ? MobileDetail : DesktopDetail);

// 监听设备类型变化
watch(isMobile, (newVal) => {
  activeComponent.value = newVal ? MobileDetail : DesktopDetail;
}, { immediate: true });
</script>
