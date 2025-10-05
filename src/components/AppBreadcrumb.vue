<template>
<nav class="app-breadcrumb" ref="breadcrumbRef">
    <div class="breadcrumb-container">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item">
          <router-link to="/" class="breadcrumb-link">
            <span class="breadcrumb-icon">🏠</span>
            <span class="breadcrumb-text">首页</span>
          </router-link>
        </li>
        <li v-for="(item, index) in breadcrumbItems" :key="index" class="breadcrumb-item">
          <span class="breadcrumb-separator">></span>
          <router-link 
            v-if="item.path && index < breadcrumbItems.length - 1" 
            :to="item.path" 
            class="breadcrumb-link"
          >
            <span class="breadcrumb-icon">{{ item.icon }}</span>
            <span class="breadcrumb-text">{{ item.name }}</span>
          </router-link>
          <span v-else class="breadcrumb-current">
            <span class="breadcrumb-icon">{{ item.icon }}</span>
            <span class="breadcrumb-text">{{ item.name }}</span>
          </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const headerHeight = ref(80); // 默认高度
const breadcrumbRef = ref<HTMLElement | null>(null);

// 面包屑配置（保留层级关系）
const breadcrumbConfig: Record<string, { name: string; icon: string; path?: string }> = {
  '/nutrition': { name: '饮食管理', icon: '🍎', path: '/nutrition' },
  '/nutrition/calculator': { name: '营养计算器', icon: '🧮' },
  '/nutrition/fat-loss': { name: '减脂饮食方案', icon: '🥗', path: '/nutrition/fat-loss' },
  '/nutrition/fat-loss/:id': { name: '减脂方案详情', icon: '📋' },
  '/nutrition/muscle-gain': { name: '增肌饮食方案', icon: '🍖', path: '/nutrition/muscle-gain' },
  '/nutrition/muscle-gain/:id': { name: '增肌方案详情', icon: '📋' },
  '/nutrition/cardio-calories': { name: '有氧增加饮食热量', icon: '🔥' },
  '/nutrition/nutrient-rates': { name: '日常食物营养率', icon: '📊' },
  '/nutrition/food-nutrient-rate': { name: '分类食物营养率', icon: '📘' },
  '/nutrition/faq': { name: '问答汇总', icon: '❓' },
  '/nutrition/faq/:id': { name: '问答详情', icon: '📝' },
  '/nutrition/recipes': { name: '食谱推荐', icon: '🍽️' },
  '/nutrition/tracker': { name: '卡路里追踪', icon: '📊' },
  '/nutrition/database': { name: '食物数据库', icon: '🥗' },
  '/nutrition/planner': { name: '饮食计划', icon: '📅' },
  '/nutrition/knowledge': { name: '营养知识', icon: '📚' },
  
  '/training': { name: '训练计划', icon: '💪', path: '/training' },
  '/training/exercise-library': { name: '训练动作库', icon: '🏋️', path: '/training/exercise-library' },
  '/training/exercises/detail': { name: '动作详情', icon: '📋' },
  '/training/exercise/:id': { name: '动作详情', icon: '📋' },
  '/training/gym-3-split': { name: '健身房三分化', icon: '🏋️' },
  '/training/gym-4-split-shoulders': { name: '健身房四分化(单练肩)', icon: '💪' },
  '/training/gym-4-split-arms': { name: '健身房四分化(单练手臂)', icon: '💪' },
  '/training/home-3-split': { name: '居家三分化', icon: '🏠' },
  '/training/one-rep-max': { name: '最大力量预测公式', icon: '📈' },
  '/training/workouts': { name: '训练动作库', icon: '🏋️' },
  
  '/stretching': { name: '拉伸指导', icon: '🧘', path: '/stretching' },
  '/stretching/dynamic': { name: '动态拉伸', icon: '🔄' },
  '/stretching/static': { name: '静态拉伸', icon: '🧘‍♀️' },
  '/stretching/yoga': { name: '瑜伽拉伸', icon: '🧘‍♂️' },
  '/stretching/targeted': { name: '部位拉伸', icon: '🎯' },
  '/stretching/plans': { name: '拉伸计划', icon: '📅' },
  '/stretching/test': { name: '柔韧性测试', icon: '📏' },
  
  '/anatomy': { name: '解剖学习', icon: '🫀', path: '/anatomy' },
  '/anatomy/joint-muscles': { name: '关节活动的肌肉', icon: '🦴' },
  '/anatomy/muscle-movements': { name: '肌肉的关节活动', icon: '🔄' },
  '/anatomy/muscle-overview': { name: '健身解剖总结', icon: '💪' },
  '/anatomy/muscles': { name: '肌肉解剖图', icon: '💪' },
  '/anatomy/skeleton': { name: '骨骼系统', icon: '🦴' },
  '/anatomy/joints': { name: '关节运动', icon: '🔄' },
  '/anatomy/principles': { name: '运动原理', icon: '⚡' },
  '/anatomy/knowledge': { name: '解剖知识库', icon: '📚' },
  '/anatomy/models': { name: '3D模型', icon: '🎯' },
  
  '/auth/login': { name: '登录', icon: '👤' },
  '/auth/register': { name: '注册', icon: '📝' },
  '/user/settings': { name: '用户设置', icon: '👤' },
  '/user/data': { name: '数据概览', icon: '📊' },
  '/about': { name: '关于', icon: 'ℹ️' }
};

const breadcrumbItems = computed(() => {
  const path = route.path;
  
  // 如果是首页，不显示面包屑
  if (path === '/') {
    return [] as Array<{ name: string; icon: string; path?: string }>;
  }
  
  // 构建面包屑路径（分段匹配）
  const items: Array<{ name: string; icon: string; path?: string }> = [];
  const pathSegments = path.split('/').filter(segment => segment);
  
  let currentPath = '';
  for (const segment of pathSegments) {
    currentPath += `/${segment}`;
    const config = breadcrumbConfig[currentPath];
    if (config) {
      items.push({
        ...config,
        path: currentPath
      });
    }
  }
  
  return items;
});

// 获取 AppHeader 高度
function updateHeaderHeight() {
  const header = document.querySelector('.app-header') as HTMLElement | null;
  if (header) {
    headerHeight.value = header.offsetHeight;
  }
}

// 监听窗口大小变化
function handleResize() {
  updateHeaderHeight();
}

function updateVars() {
  const breadcrumbEl = breadcrumbRef.value;
  const breadcrumbH = breadcrumbEl ? breadcrumbEl.offsetHeight : 48; // 估算高度回退
  document.documentElement.style.setProperty('--breadcrumb-top', headerHeight.value + 'px');
  document.documentElement.style.setProperty('--main-padding-top', (headerHeight.value + breadcrumbH) + 'px');
}

onMounted(async () => {
  // 初始获取高度
  updateHeaderHeight();
  await nextTick();
  updateVars();
  
  // 监听窗口大小变化
  window.addEventListener('resize', handleResize);
  
  // 使用 MutationObserver 监听 DOM 变化
  const observer = new MutationObserver(() => {
    updateHeaderHeight();
    updateVars();
  });
  
  const header = document.querySelector('.app-header');
  if (header) {
    observer.observe(header, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  
  // 清理函数
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    observer.disconnect();
  });
});

// 计算面包屑高度（用于主内容区域的 padding-top）
// 面包屑高度通过 updateVars 中直接读取 DOM，不再额外暴露计算属性
</script>

<style scoped>
.app-breadcrumb {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 0.75rem 0;
  position: fixed;
  top: var(--breadcrumb-top, 80px);
  left: 0;
  right: 0;
  z-index: 30;
  backdrop-filter: blur(8px);
}

.breadcrumb-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.breadcrumb-separator {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  margin: 0 0.5rem;
}

.breadcrumb-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: var(--color-text-secondary);
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.breadcrumb-link:hover {
  color: var(--color-primary);
  background-color: var(--color-background);
}

.breadcrumb-current {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.875rem;
}

.breadcrumb-icon {
  font-size: 1rem;
  line-height: 1;
}

.breadcrumb-text {
  white-space: nowrap;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .breadcrumb-container {
    padding: 0 0.75rem;
  }
  
  .breadcrumb-link,
  .breadcrumb-current {
    padding: 0.375rem 0.5rem;
    font-size: 0.75rem;
  }
  
  .breadcrumb-icon {
    font-size: 0.875rem;
  }
  
  .breadcrumb-separator {
    margin: 0 0.25rem;
    font-size: 0.75rem;
  }
}

/* 超小屏幕保持文字显示 */
@media (max-width: 480px) {
  .breadcrumb-link,
  .breadcrumb-current {
    padding: 0.375rem 0.5rem;
    font-size: 0.75rem;
  }
  
  .breadcrumb-text {
    font-size: 0.75rem;
  }
}
</style>
