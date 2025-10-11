<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-fg mb-2">预测卧推/深蹲的最大力量（1RM）</h1>
    <p class="text-fg-muted mb-4">适用于自由卧推/深蹲。输入你做组的配重和该配重的力竭次数（动作全程接近完全标准），只输数字，不要输入单位，自动出结果。</p>

  <div class="bg-surface rounded-lg shadow p-4 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label class="block text-sm text-fg-muted mb-1">输入你的配重（kg）</label>
      <NumberStepper v-model="weight" :min="0" :step="0.5" :precision="1" />
      </div>
      <div>
        <label class="block text-sm text-fg-muted mb-1">输入你的力竭次数（reps）</label>
      <NumberStepper v-model="reps" :min="1" :step="1" />
      </div>
      <div class="flex items-end">
        <div class="text-sm text-fg-muted">提示：范围内越接近5–10次，预测更稳定。</div>
      </div>
    </div>
    <!-- 桌面端表格显示 -->
  <div class="hidden md:block bg-surface rounded-lg shadow overflow-x-auto">
      <table class="min-w-full table-fixed">
        <thead>
          <tr class="text-left text-sm text-fg-muted">
            <th class="px-4 py-3 whitespace-nowrap w-20">作者</th>
            <th class="px-4 py-3 whitespace-nowrap w-80">预测最大力量的公式（kg）</th>
            <th class="px-4 py-3 whitespace-nowrap w-32">你的最大力量预测值</th>
            <th class="px-4 py-3 whitespace-nowrap w-24">准确性检验</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.author" class="border-t border-gray-200 dark:border-gray-700 text-sm">
            <td class="px-4 py-3 one-rep-max-author">{{ row.author }}</td>
            <td class="px-4 py-3 text-fg-muted">{{ row.formula }}</td>
            <td class="px-4 py-3 font-medium one-rep-max-output">{{ formatNumber(calc1RM(row.author, weight, reps)) }}</td>
            <td class="px-4 py-3 text-fg-muted">{{ row.accuracy || '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 移动端卡片显示 -->
    <div class="md:hidden space-y-4">
    <div v-for="row in rows" :key="row.author" class="bg-surface rounded-lg shadow p-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-semibold one-rep-max-author">{{ row.author }}</h3>
          <div class="text-right">
            <div class="text-xl font-bold one-rep-max-output">{{ formatNumber(calc1RM(row.author, weight, reps)) }}</div>
            <div class="text-xs text-fg-muted">kg</div>
          </div>
        </div>
        <div class="text-sm text-fg-muted mb-2">{{ row.formula }}</div>
      <div v-if="row.accuracy" class="text-xs text-fg-muted bg-subtle px-2 py-1 rounded">
          {{ row.accuracy }}
        </div>
      </div>
    </div>

    <p class="mt-4 text-xs text-fg-muted">资料来源：Accuracy of 1RM Prediction Equations Before and After Resistance Training in Three Different Lifts</p>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NumberStepper from '@/components/NumberStepper.vue';
import { plans } from './data.ts';

const rows = plans;
const weight = ref<number>(60);
const reps = ref<number>(8);

function calc1RM(author: string, w: number, r: number): number | null {
  if (!w || !r || r <= 0) return null;
  const e = Math.E;
  switch (author) {
    case 'Adams':
      return w / (1 - 0.02 * r);
    case 'Brown':
      return (r * 0.0328 + 0.9849) * w;
    case 'Brzycki':
      return w / (1.0278 - 0.0278 * r);
    case 'Lander':
      return w / (1.013 - 0.0267123 * r);
    case 'Lombardi':
      return Math.pow(r, 0.1) * w;
    case 'Mayhew':
      return w / (0.522 + 0.419 * Math.pow(e, -0.055 * r));
    case 'O’Connor':
    case "O'Connor":
      return 0.025 * (w * r) + w;
    case 'Wathen':
      return w / (0.488 + 0.538 * Math.pow(e, -0.075 * r));
    case 'Welday':
      return r * 0.0333 * w + w;
    default:
      return null;
  }
}

function formatNumber(v: number | null): string {
  if (v == null || !isFinite(v)) return '-';
  return Math.round(v * 10) / 10 + '';
}
</script>
<style scoped>
.one-rep-max-output {
  color: var(--one-rep-max-output);
}
.one-rep-max-author {
  color: var(--one-rep-max-author);
}
.one-rep-max-input {
  color: var(--one-rep-max-input);
}
</style>


