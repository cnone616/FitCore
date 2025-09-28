<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div class="bg-surface rounded-lg shadow-lg p-6">
      <h3 class="text-xl font-semibold text-fg-muted mb-4 flex items-center">
        <span class="text-2xl mr-3">⏰</span>
        训练时间
      </h3>
      <div class="space-y-2">
        <p class="text-fg-muted">力训时间：<span class="text-fg-muted">{{ plan?.trainingTime }}</span></p>
        <p class="text-fg-muted">
          力训日全天餐序：
          <span class="text-fg-muted">
            <template v-for="(n, i) in sequenceNames" :key="i">
              <span>{{ circled(i + 1) }}{{ n }}</span>
              <span v-if="i < sequenceNames.length - 1"> </span>
            </template>
          </span>
        </p>
      </div>
    </div>
    <div class="bg-surface rounded-lg shadow-lg p-6">
      <h3 class="text-xl font-semibold text-fg-muted mb-4 flex items-center">
        <span class="text-2xl mr-3">👥</span>
        适用人群
      </h3>
      <div class="flex flex-wrap gap-2">
        <span v-for="person in plan?.suitableFor || []" :key="person" class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">{{ person }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{ plan: any }>();
const sequenceNames = computed<string[]>(() => {
  const p = props.plan;
  if (!p) return [];
  const names = [p.firstcan?.name, p.secondcan?.name, p.thirdcan?.name, p.fourthcan?.name, p.fifthcan?.name].filter(Boolean);
  return names as string[];
});
function circled(n: number): string {
  const base = 9311;
  if (n >= 1 && n <= 20) return String.fromCharCode(base + n);
  return `${n}.`;
}
</script>

<style scoped>
</style>


