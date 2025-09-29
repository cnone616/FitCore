<template>
  <div class="nutrition-page">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-fg mb-4">❓ 问答汇总</h1>
        <p class="text-lg text-fg-muted">高频问题与简要解答（本页亦作目录）</p>
        <div class="mt-3 flex justify-center gap-2">
          <button class="px-3 py-1 rounded border" :class="tab==='fat' ? 'bg-blue-600 text-white border-blue-600' : 'dark:border-gray-600'" @click="tab='fat'">减脂问答</button>
          <button class="px-3 py-1 rounded border" :class="tab==='muscle' ? 'bg-blue-600 text-white border-blue-600' : 'dark:border-gray-600'" @click="tab='muscle'">增肌问答</button>
        </div>
        <div class="mt-4">
          <SearchInput
            v-model="keyword"
            placeholder="搜索问题或答案关键词..."
          />
        </div>
      </div>

      <div class="space-y-4">
    <details v-for="item in filteredFaqs" :key="`${tab}-${item.id}`" class="bg-surface rounded-lg shadow-lg p-6">
          <summary class="cursor-pointer text-lg font-semibold">
            <router-link :to="`/nutrition/faq/${item.id}?t=${tab}`" class="hover:underline text-blue-600">{{ item.q }}</router-link>
          </summary>
          <div v-if="item.summary" class="mt-2 text-fg-muted" v-html="renderSummary(item.summary)"></div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { fatLossFaqs, muscleGainFaqs } from './data';
import SearchInput from '@/components/SearchInput.vue';

const tab = ref<'fat' | 'muscle'>('fat');
const keyword = ref<string>('');

const dataset = computed(() => (tab.value === 'fat' ? fatLossFaqs : muscleGainFaqs));

const filteredFaqs = computed(() => {
  const k = keyword.value.trim().toLowerCase();
  if (!k) return dataset.value;
  return dataset.value.filter(item =>
    item.q.toLowerCase().includes(k) || item.a.toLowerCase().includes(k) || item.summary.toLowerCase().includes(k)
  );
});

function renderSummary(text: string): string {
  if (!text) return '';
  return text
    .split('\n')
    .map(line => {
      const trimmed = line.replace(/^\s+/, '');
      if (/^[＊*]/.test(trimmed)) {
        return `<span class=\"text-red-500\">${escapeHtml(line)}</span>`;
      }
      return escapeHtml(line);
    })
    .join('<br>');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
</script>

<style scoped>
.nutrition-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}

.nutrition-input {
  color: var(--nutrition-input);
}
</style>


