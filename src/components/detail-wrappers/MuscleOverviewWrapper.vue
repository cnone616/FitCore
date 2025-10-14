<template>
  <component :is="activeComponent" v-if="activeComponent" />
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue';
import { useDevice } from '@/utils/device';
import DesktopView from '@/views/anatomy/muscle-overview.vue';
import MobileView from '@/views-mobile/anatomy/muscle-overview.vue';

const { isMobile } = useDevice();
const activeComponent = shallowRef(isMobile.value ? MobileView : DesktopView);

watch(isMobile, (value) => {
  activeComponent.value = value ? MobileView : DesktopView;
}, { immediate: true });
</script>
