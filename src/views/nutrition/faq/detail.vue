<template>
  <div class="nutrition-page">
    <div class="container mx-auto px-4 py-8 max-w-3xl">
      <div class="mb-6">
        <router-link to="/nutrition/faq" class="text-blue-600 hover:underline">← 返回问答目录</router-link>
      </div>
      <h1 class="text-3xl font-bold text-fg mb-2">{{ faq?.q || '-' }}</h1>
      <div v-if="faq?.summary" class="text-fg-muted mb-4" v-html="renderSummary(faq.summary)"></div>
      <div class="text-fg-muted leading-7" v-html="renderAnswer(faq?.a || '未找到此问答。')"></div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { fatLossFaqs, muscleGainFaqs } from './data';

const route = useRoute();
const idParam = computed(() => Number(route.params.id));
const type = computed(() => (route.query.t === 'muscle' ? 'muscle' : 'fat'));
const pool = computed(() => (type.value === 'muscle' ? muscleGainFaqs : fatLossFaqs));
const faq = computed(() => pool.value.find(f => f.id === idParam.value));

function renderAnswer(text: string): string {
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
</style>


