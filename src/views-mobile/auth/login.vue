<template>
  <div class="auth-page">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-md mx-auto">
        <!-- 标题 -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-fg mb-2">登录 FitCore</h1>
          <p class="text-fg-muted">欢迎回来，继续你的健身之旅</p>
        </div>

        <!-- 登录表单 -->
        <div class="bg-surface rounded-lg shadow-lg p-6">
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">用户名</label>
              <input 
                v-model="loginForm.name" 
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                placeholder="请输入用户名"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">密码</label>
              <input 
                v-model="loginForm.password" 
                type="password" 
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                placeholder="请输入密码"
              />
            </div>
            
            <button 
              type="submit" 
              :disabled="loading"
              class="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-on-primary py-2 rounded-lg transition-colors"
            >
              {{ loading ? '登录中...' : '登录' }}
            </button>
          </form>

          <!-- 错误提示 -->
          <div v-if="error" class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p class="text-red-600 dark:text-red-400 text-sm">{{ error }}</p>
          </div>

          <!-- 注册链接 -->
          <div class="text-center mt-6">
            <p class="text-fg-muted text-sm">
              还没有账户？
              <router-link to="/auth/register" class="text-primary hover:text-primary-dark font-medium">
                立即注册
              </router-link>
            </p>
          </div>
        </div>

        <!-- 返回首页 -->
        <div class="text-center mt-6">
          <router-link to="/" class="text-fg-muted hover:text-fg text-sm">
            ← 返回首页
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const userStore = useUserStore();

const loading = ref(false);
const error = ref('');

const loginForm = ref({
  name: '',
  password: ''
});

const handleLogin = async () => {
  if (!loginForm.value.name.trim()) {
    error.value = '请输入用户名';
    return;
  }
  
  if (!loginForm.value.password.trim()) {
    error.value = '请输入密码';
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    // 查找现有用户
    const result = await userStore.findUserByName(loginForm.value.name.trim());
    if (result.success && result.data) {
      // 验证密码
      if (result.data.password === loginForm.value.password) {
        await userStore.setCurrentUser(result.data);
        loginForm.value.name = '';
        loginForm.value.password = '';
        // 登录成功后跳转到用户数据页面
        router.push('/user/data');
      } else {
        error.value = '密码错误';
      }
    } else {
      error.value = '用户不存在，请先注册';
    }
  } catch (err) {
    error.value = '登录失败，请重试';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.auth-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
}
</style>
