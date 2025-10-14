<template>
  <component :is="activeComponent" v-if="activeComponent" />
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue';
import { useDevice } from '@/utils/device';
import DesktopView from '@/views/anatomy/joint-muscles.vue';
import MobileView from '@/views-mobile/anatomy/joint-muscles.vue';

const { isMobile } = useDevice();
const activeComponent = shallowRef(isMobile.value ? MobileView : DesktopView);

watch(isMobile, (value) => {
  activeComponent.value = value ? MobileView : DesktopView;
}, { immediate: true });
</script>
