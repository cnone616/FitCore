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
        <!-- 用户状态 -->
        <div v-if="userStore.isLoggedIn" class="user-info" ref="userInfoRef">
          <div class="user-avatar" @click="toggleUserMenu">
            <img 
              :src="userStore.currentUser?.avatar || defaultAvatar" 
              :alt="userStore.currentUser?.name || '用户头像'"
              class="avatar-image"
            />
          </div>
          <div class="user-details">
            <div class="user-name" @click="toggleUserMenu">{{ userStore.currentUser?.name }}</div>
            <div v-if="showUserMenu" class="user-menu">
              <router-link to="/user/data" class="menu-item" @click="closeUserMenu">📊 数据概览</router-link>
              <router-link to="/user/settings" class="menu-item" @click="closeUserMenu">⚙️ 设置</router-link>
              <button @click="logout" class="menu-item logout-btn">🚪 退出</button>
            </div>
          </div>
        </div>
        
        <!-- 未登录状态 -->
        <div v-else class="login-section">
          <router-link to="/auth/login" class="login-btn">
            👤 登录
          </router-link>
        </div>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import defaultAvatar from '@/assets/user/default-avatar.jpg';

interface Props {
  title?: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'FitCore',
  subtitle: '专业健身工具平台'
});

const router = useRouter();
const userStore = useUserStore();

// 用户菜单状态
const showUserMenu = ref(false);
const userInfoRef = ref<HTMLElement>();

// 切换用户菜单
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

// 关闭用户菜单
const closeUserMenu = () => {
  showUserMenu.value = false;
};

// 点击外部关闭菜单
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement;
  if (userInfoRef.value && !userInfoRef.value.contains(target)) {
    showUserMenu.value = false;
  }
};

// 初始化用户状态
onMounted(async () => {
  await userStore.init();
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// 退出登录
const logout = async () => {
  if (confirm('确定要退出登录吗？')) {
    await userStore.deleteUser();
    showUserMenu.value = false;
    router.push('/');
  }
};
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

/* 用户信息样式 */
.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.user-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.user-name {
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s ease;
}

.user-name:hover {
  color: var(--color-primary);
}

.user-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  min-width: 150px;
  z-index: 50;
}

.menu-item {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  font-size: 0.875rem;
  transition: background-color 0.2s ease;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
}

.menu-item:hover {
  background-color: var(--color-background);
}

.logout-btn {
  color: var(--color-danger, #ef4444);
}

/* 登录按钮样式 */
.login-section {
  display: flex;
  align-items: center;
}

.login-btn {
  background: var(--color-primary);
  color: var(--color-on-primary);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
}

.login-btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
  color: var(--color-on-primary);
}

.register-btn {
  background: var(--color-success, #10b981);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
}

.register-btn:hover {
  background: var(--color-success-dark, #059669);
  transform: translateY(-1px);
  color: white;
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
