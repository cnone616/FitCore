<template>
  <div class="theme-switcher">
    <div class="theme-switcher-trigger" @click="toggleDropdown">
      <div class="theme-preview" :style="{ backgroundColor: theme.colors.primary }"></div>
      <span class="theme-name">{{ theme.displayName }}</span>
      <i class="iconfont icon-arrow-down dropdown-icon" :class="{ 'rotate-180': showDropdown }"></i>
    </div>
    
    <transition name="dropdown">
      <div v-if="showDropdown" class="theme-dropdown">
        <div 
          v-for="themeOption in themes" 
          :key="themeOption.name"
          class="theme-option"
          :class="{ active: themeOption.name === currentTheme }"
          @click="selectTheme(themeOption.name)"
        >
          <div class="theme-preview" :style="{ backgroundColor: themeOption.colors.primary }"></div>
          <span class="theme-name">{{ themeOption.displayName }}</span>
          <i v-if="themeOption.name === currentTheme" class="iconfont icon-check check-icon"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useTheme } from '@/utils/theme';
import type { ThemeName } from '@/types/theme';

const { currentTheme, theme, themes, setTheme } = useTheme();
const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function selectTheme(themeName: ThemeName) {
  setTheme(themeName);
  showDropdown.value = false;
}

function handleClickOutside(event: Event) {
  const target = event.target as HTMLElement;
  if (!target.closest('.theme-switcher')) {
    showDropdown.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.theme-switcher {
  position: relative;
  display: inline-block;
}

.theme-switcher-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: var(--transition-colors);
  user-select: none;
}

.theme-switcher-trigger:hover {
  background-color: var(--color-border);
}

.theme-preview {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid var(--color-border);
}

.theme-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
}

.dropdown-icon {
  font-size: 1rem;
  color: var(--color-text-secondary);
  transition: transform 0.2s ease;
}

.dropdown-icon.rotate-180 {
  transform: rotate(180deg);
}

.theme-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.25rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 50;
  overflow: hidden;
}

.theme-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  cursor: pointer;
  transition: var(--transition-colors);
}

.theme-option:hover {
  background-color: var(--color-border);
}

.theme-option.active {
  background-color: var(--color-primary);
  color: white;
}

.theme-option.active .theme-name {
  color: white;
}

.theme-option.active .theme-preview {
  border-color: white;
}

.check-icon {
  font-size: 1rem;
  margin-left: auto;
  color: var(--color-primary);
}

/* 下拉动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
