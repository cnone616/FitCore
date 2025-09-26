<template>
  <div v-show="visible" class="fixed bottom-6 right-6 z-40 flex flex-col gap-3" data-floating="true">
    <button 
      v-if="showBack"
      @click="goBack"
      class="rounded-full shadow-lg px-4 py-2 bg-surface border border-gray-200 dark:border-gray-700 text-fg hover:shadow-xl transition"
      aria-label="返回上一级"
    >
      ← 上一级
    </button>
    <button 
      @click="scrollTop"
      class="rounded-full shadow-lg px-4 py-2 bg-surface border border-gray-200 dark:border-gray-700 text-fg hover:shadow-xl transition"
      aria-label="返回顶部"
    >
      ↑ 顶部
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const visible = ref(false);
const threshold = 240; // 像素

function onScroll() {
  visible.value = window.scrollY > threshold;
}

const showBack = computed(() => {
  // 在首页不显示返回上一级；其余页面显示。
  if (route.path === '/') return false;
  // 如果 history 有上一个记录，或者路由层级>1，都认为可返回
  const canHistoryBack = window.history.length > 1;
  const isNested = (route.matched?.length || 0) > 1;
  return canHistoryBack || isNested;
});

function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    // 无历史时退回首页
    router.push('/');
  }
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
</style>


