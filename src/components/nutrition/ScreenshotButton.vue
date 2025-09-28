<template>
  <div class="text-center mt-8">
    <button
      @click="onClick"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
      data-stable="true"
    >
      保存方案（生成图片）
    </button>
    <div class="mt-2 text-xs text-fg-muted">点击后预览方案内容，确认无误后生成图片保存。</div>
    <SavePreviewModal v-model="showPreview" :file-name="previewFileName" @image-generated="onImageGenerated" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SavePreviewModal from './SavePreviewModal.vue';

const props = defineProps<{ fileName?: string }>();

const showPreview = ref(false);
const previewFileName = ref(props.fileName || 'plan.png');

function onClick() {
  showPreview.value = true;
}

function onImageGenerated(url: string, fileName: string) {
  console.log('Image generated:', { url, fileName });
  // 可以在这里添加额外的处理逻辑
}
</script>

<style scoped>
</style>


