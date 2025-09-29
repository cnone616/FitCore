<template>
  <div class="search-input-container">
    <div class="max-w-xl mx-auto mb-6">
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        type="text"
        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-surface text-fg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
  placeholder?: string;
}

interface Emits {
  (e: 'update:modelValue', value: string): void;
}

withDefaults(defineProps<Props>(), {
  placeholder: '搜索...'
});

defineEmits<Emits>();
</script>

<style scoped>
.search-input-container {
  /* 组件样式 */
}
</style>
