<template>
  <div class="auth-page">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-md mx-auto">
        <!-- 标题 -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-fg mb-2">注册 FitCore</h1>
          <p class="text-fg-muted">创建账户，开始你的健身之旅</p>
        </div>

        <!-- 注册表单 -->
        <div class="bg-surface rounded-lg shadow-lg p-6">
          <form @submit.prevent="handleRegister" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">用户名 *</label>
              <input 
                v-model="registerForm.name" 
                type="text" 
                required
                @input="validateUsername"
                class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                :class="usernameError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'"
                placeholder="请输入用户名（不能有空格和特殊字符）"
              />
              <p v-if="usernameError" class="text-red-500 text-xs mt-1">{{ usernameError }}</p>
              <p v-if="usernameExists" class="text-red-500 text-xs mt-1">用户名已存在，请选择其他用户名</p>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">密码 *</label>
              <input 
                v-model="registerForm.password" 
                type="password" 
                required
                @input="validatePassword"
                class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                :class="passwordError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'"
                placeholder="请输入密码（不能有空格和特殊字符）"
              />
              <p v-if="passwordError" class="text-red-500 text-xs mt-1">{{ passwordError }}</p>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-fg-muted mb-2">确认密码 *</label>
              <input 
                v-model="registerForm.confirmPassword" 
                type="password" 
                required
                @input="validateConfirmPassword"
                class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-fg"
                :class="confirmPasswordError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'"
                placeholder="请再次输入密码"
              />
              <p v-if="confirmPasswordError" class="text-red-500 text-xs mt-1">{{ confirmPasswordError }}</p>
            </div>
            
            
            <button 
              type="submit" 
              :disabled="loading"
              class="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-2 rounded-lg transition-colors"
            >
              {{ loading ? '注册中...' : '注册' }}
            </button>
          </form>

          <!-- 错误提示 -->
          <div v-if="error" class="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p class="text-red-600 dark:text-red-400 text-sm">{{ error }}</p>
          </div>

          <!-- 登录链接 -->
          <div class="text-center mt-6">
            <p class="text-fg-muted text-sm">
              已有账户？
              <router-link to="/auth/login" class="text-primary hover:text-primary-dark font-medium">
                立即登录
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
const usernameError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');
const usernameExists = ref(false);

const registerForm = ref({
  name: '',
  password: '',
  confirmPassword: ''
});

// 验证用户名
const validateUsername = async () => {
  const name = registerForm.value.name.trim();
  usernameError.value = '';
  usernameExists.value = false;
  
  if (!name) {
    usernameError.value = '用户名不能为空';
    return;
  }
  
  // 检查是否包含空格或特殊字符
  if (/\s/.test(name) || /[^a-zA-Z0-9\u4e00-\u9fa5]/.test(name)) {
    usernameError.value = '用户名不能包含空格和特殊字符';
    return;
  }
  
  // 检查用户名长度
  if (name.length < 2 || name.length > 20) {
    usernameError.value = '用户名长度应在2-20个字符之间';
    return;
  }
  
  // 检查用户名是否已存在
  const result = await userStore.findUserByName(name);
  if (result.success && result.data) {
    usernameExists.value = true;
  }
};

// 验证密码
const validatePassword = () => {
  const password = registerForm.value.password;
  passwordError.value = '';
  
  if (!password) {
    passwordError.value = '密码不能为空';
    return;
  }
  
  // 检查是否包含空格或特殊字符
  if (/\s/.test(password) || /[^a-zA-Z0-9]/.test(password)) {
    passwordError.value = '密码不能包含空格和特殊字符';
    return;
  }
  
  // 检查密码长度
  if (password.length < 6 || password.length > 20) {
    passwordError.value = '密码长度应在6-20个字符之间';
    return;
  }
};

// 验证确认密码
const validateConfirmPassword = () => {
  const password = registerForm.value.password;
  const confirmPassword = registerForm.value.confirmPassword;
  confirmPasswordError.value = '';
  
  if (!confirmPassword) {
    confirmPasswordError.value = '请确认密码';
    return;
  }
  
  if (password !== confirmPassword) {
    confirmPasswordError.value = '两次输入的密码不一致';
    return;
  }
};

const handleRegister = async () => {
  // 验证所有字段
  await validateUsername();
  validatePassword();
  validateConfirmPassword();
  
  if (usernameError.value || passwordError.value || confirmPasswordError.value || usernameExists.value) {
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    await userStore.createUser({
      name: registerForm.value.name.trim(),
      password: registerForm.value.password
    });
    
    if (userStore.isLoggedIn) {
      // 注册成功后跳转到用户数据页面
      router.push('/user/data');
    }
  } catch (err) {
    error.value = '注册失败，请重试';
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
