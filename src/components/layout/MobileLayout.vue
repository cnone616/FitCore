<template>
  <div class="mobile-layout">
    <!-- 移动端头部 -->
    <header class="mobile-header">
      <div class="header-content">
        <h1 class="app-title">FitCore</h1>
        <button 
          class="menu-toggle"
          @click="toggleMenu"
          :class="{ active: menuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- 移动端导航菜单 -->
    <nav class="mobile-nav" :class="{ open: menuOpen }">
      <div class="nav-content">
        <router-link
          to="/"
          class="nav-item"
          @click="closeMenu"
        >
          <div class="nav-item-icon">🏠</div>
          <span>首页</span>
        </router-link>
        <router-link
          to="/nutrition"
          class="nav-item"
          @click="closeMenu"
        >
          <div class="nav-item-icon">🍎</div>
          <span>饮食管理</span>
        </router-link>
        <router-link
          to="/training"
          class="nav-item"
          @click="closeMenu"
        >
          <div class="nav-item-icon">💪</div>
          <span>训练计划</span>
        </router-link>
        <router-link
          to="/stretching"
          class="nav-item"
          @click="closeMenu"
        >
          <div class="nav-item-icon">🧘</div>
          <span>拉伸指导</span>
        </router-link>
        <router-link
          to="/anatomy"
          class="nav-item sub-item"
          @click="closeMenu"
        >
          <div class="nav-item-icon">🫀</div>
          <span>解剖学习</span>
        </router-link>
        <router-link
          to="/user/data"
          class="nav-item"
          @click="closeMenu"
        >
          <div class="nav-item-icon">👤</div>
          <span>我的</span>
        </router-link>
        <router-link
          to="/user/settings"
          class="nav-item"
          @click="closeMenu"
        >
          <div class="nav-item-icon">⚙️</div>
          <span>设置</span>
        </router-link>
      </div>
    </nav>

    <!-- 移动端主内容区域 -->
    <main class="mobile-main" :class="{ 'menu-open': menuOpen }">
      <router-view />
    </main>

    <!-- 移动端底部导航 -->
    <div class="mobile-bottom-nav">
      <router-link
        to="/nutrition"
        class="bottom-nav-item"
        :class="{ active: $route.path.startsWith('/nutrition') }"
      >
        <div class="nav-icon">🍎</div>
        <span>饮食管理</span>
      </router-link>
      <router-link
        to="/training"
        class="bottom-nav-item"
        :class="{ active: $route.path.startsWith('/training') }"
      >
        <div class="nav-icon">💪</div>
        <span>训练计划</span>
      </router-link>
      <router-link
        to="/stretching"
        class="bottom-nav-item"
        :class="{ active: $route.path.startsWith('/stretching') || $route.path.startsWith('/anatomy') }"
      >
        <div class="nav-icon">🧘</div>
        <span>拉伸指导</span>
      </router-link>
      <router-link
        to="/user/data"
        class="bottom-nav-item"
        :class="{ active: $route.path.startsWith('/user') }"
      >
        <div class="nav-icon">👤</div>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
.mobile-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  color: var(--color-text);
}

.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.app-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
}

.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  transition: all 0.3s ease;
  transform-origin: center;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-nav {
  position: fixed;
  top: 60px;
  left: -100%;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: var(--color-surface);
  border-right: 1px solid var(--color-border);
  z-index: 999;
  transition: left 0.3s ease;
  overflow-y: auto;
}

.mobile-nav.open {
  left: 0;
}

.nav-content {
  padding: 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
  transition: color 0.2s ease;
  gap: 12px;
}

.nav-item:hover {
  color: var(--color-primary);
}

.nav-item.sub-item {
  padding-left: 1.5rem;
  font-size: 0.9rem;
  opacity: 0.85;
}

.nav-item-icon {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
}

.nav-item i {
  margin-right: 0.75rem;
  font-size: 1.25rem;
}

.mobile-main {
  flex: 1;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.mobile-main.menu-open {
  transform: translateX(0);
}

.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  display: flex;
  z-index: 1000;
}

.bottom-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.7rem;
  gap: 4px;
}

.bottom-nav-item.active {
  color: var(--color-primary);
}

.bottom-nav-item.active .nav-icon {
  transform: scale(1.1);
}

.nav-icon {
  font-size: 1.5rem;
  transition: transform 0.2s ease;
}
</style>
