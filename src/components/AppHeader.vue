<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-left">
        <router-link to="/" class="app-brand">
          <h1 class="app-title">{{ title }}</h1>
          <p class="app-subtitle">{{ subtitle }}</p>
        </router-link>
      </div>
      <div class="header-right">
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue';

interface Props {
  title?: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'FitCore',
  subtitle: '专业健身工具平台'
});
</script>

<style scoped>
.app-header {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(8px);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.app-brand {
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
}

.app-brand:hover {
  opacity: 0.8;
}

.app-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.2;
}

.app-subtitle {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.2;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 0.75rem;
  }
  
  .app-title {
    font-size: 1.25rem;
  }
  
  .app-subtitle {
    font-size: 0.75rem;
  }
}
</style>
