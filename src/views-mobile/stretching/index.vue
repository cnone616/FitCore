<template>
  <div class="stretching-page">
    <div class="container mx-auto px-4 py-8">
      <!-- 导航卡片 -->
      <div class="nav-cards mb-6">
        <div class="nav-card active">
          <div class="nav-icon">🧘</div>
          <div class="nav-text">拉伸指导</div>
        </div>
        <router-link to="/anatomy" class="nav-card">
          <div class="nav-icon">🫀</div>
          <div class="nav-text">解剖学习</div>
        </router-link>
      </div>

      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">
          🧘 拉伸指导
        </h1>
        <p class="text-lg text-fg-muted">
          专业拉伸动作，提升柔韧性和恢复能力
        </p>
        <div class="mt-4 max-w-2xl mx-auto">
          <input
            v-model.trim="keyword"
            type="text"
            placeholder="搜索动作/肌群名称..."
          class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-surface text-fg"
          />
        </div>
      </div>

      <!-- 上身/下身拉伸网格 -->
      <div class="space-y-10">
        <!-- 上身拉伸 -->
        <section>
          <h2 class="text-2xl font-bold text-fg mb-4">上身拉伸</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="img in filteredUpper" :key="img.id" class="bg-surface rounded-lg shadow overflow-hidden">
              <img :src="img.src" :alt="img.name" class="w-full h-52 object-contain bg-subtle" />
              <div class="p-3 text-center text-sm text-fg">{{ img.name }}</div>
            </div>
          </div>
        </section>

        <!-- 下身拉伸 -->
        <section>
          <h2 class="text-2xl font-bold text-fg mb-4">下身拉伸</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="img in filteredLower" :key="img.id" class="bg-surface rounded-lg shadow overflow-hidden">
              <img :src="img.src" :alt="img.name" class="w-full h-52 object-contain bg-subtle" />
              <div class="p-3 text-center text-sm text-fg">{{ img.name }}</div>
            </div>
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { upperBodyStretches as upper, lowerBodyStretches as lower } from './data';

const keyword = ref<string>('');

const filteredUpper = computed(() => {
  const k = keyword.value.trim().toLowerCase();
  if (!k) return upper.images;
  return upper.images.filter(img =>
    img.name.toLowerCase().includes(k) || img.id.toLowerCase().includes(k)
  );
});

const filteredLower = computed(() => {
  const k = keyword.value.trim().toLowerCase();
  if (!k) return lower.images;
  return lower.images.filter(img =>
    img.name.toLowerCase().includes(k) || img.id.toLowerCase().includes(k)
  );
});
</script>

<style scoped>
.stretching-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}

.stretching-input {
  color: var(--stretching-input);
}

/* 导航卡片样式 */
.nav-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.nav-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  background: var(--color-surface);
  border: 2px solid transparent;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-card.active {
  background: linear-gradient(135deg, #4ecdc4, #44a8a0);
  color: white;
  border-color: #4ecdc4;
}

.nav-icon {
  font-size: 24px;
}

.nav-text {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
}

.nav-card.active .nav-text {
  color: white;
}
</style>
