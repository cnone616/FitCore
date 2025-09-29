<template>
  <div id="app">
    <AppHeader ref="appHeader" />
    <AppBreadcrumb v-if="$route.path !== '/'" />
    <main class="app-main" :class="{ 'with-nav': $route.path !== '/' }">
      <router-view />
      <FloatingNav />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import { useTheme } from '@/utils/theme';
import FloatingNav from '@/components/FloatingNav.vue';

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>

<style>
@import '@/styles/themes/index.css';
@import '@/styles/iconfont.css';
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

#app {
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: var(--transition-colors);
}

.app-main {
  min-height: calc(100vh - 80px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.app-main.with-nav {
  min-height: calc(100vh - 80px);
  padding-top: 55px;
}

@media (max-width: 768px) {
  .app-main {
    padding: 0 0.75rem;
  }
}
</style>
