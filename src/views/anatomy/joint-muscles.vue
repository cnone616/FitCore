<template>
  <div class="joint-muscles-page">
    <div class="container mx-auto px-4 py-8">
      <!-- 页面头部 -->
      <div class="text-center mb-8">
        <button @click="router.back()" class="back-button mb-4">
          <i class="iconfont icon-arrow-left"></i> 返回
        </button>
        <h1 class="text-4xl font-bold text-fg mb-4">
          🦴 关节活动的肌肉
        </h1>
        <p class="text-lg text-fg-muted">
          详细展示各关节周围的主要肌肉图解
        </p>
      </div>

      <!-- 图片网格展示 -->
      <div class="muscle-diagrams-grid">
        <div 
          v-for="(diagram, index) in muscleDiagrams" 
          :key="index"
          class="diagram-card"
        >
          <div class="diagram-image">
            <img 
              :src="diagram.image" 
              @click="openImageViewer(index)"
              class="clickable-image"
            >
          </div>
        </div>
      </div>

      <!-- 图片查看器模态框 -->
      <div v-if="showImageViewer" class="image-viewer-modal" @click="closeImageViewer">
        <div class="modal-content" @click.stop>
          <button class="close-button" @click="closeImageViewer">×</button>
          <div class="prev-button" @click="previousImage" v-if="currentImageIndex > 0">
            <i class="iconfont icon-arrow-left"></i>
          </div>
          <div class="next-button" @click="nextImage" v-if="currentImageIndex < muscleDiagrams.length - 1">
            <i class="iconfont icon-arrow-right"></i>
          </div>
          <img 
            :src="muscleDiagrams[currentImageIndex].image" 
            class="modal-image"
          >
          <div class="image-counter">
            {{ currentImageIndex + 1 }} / {{ muscleDiagrams.length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import jointMuscleImages from '@/data/anatomy/jointMuscles';

const router = useRouter();

// 图片查看器状态
const showImageViewer = ref(false);
const currentImageIndex = ref(0);

// 肌肉图解数据 - 使用重命名后的友好文件名
const muscleDiagrams = ref(jointMuscleImages.map(image => ({ image })));

// 打开图片查看器
const openImageViewer = (index: number) => {
  currentImageIndex.value = index;
  showImageViewer.value = true;
};

// 关闭图片查看器
const closeImageViewer = () => {
  showImageViewer.value = false;
};

// 上一张图片
const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

// 下一张图片
const nextImage = () => {
  if (currentImageIndex.value < muscleDiagrams.value.length - 1) {
    currentImageIndex.value++;
  }
};
</script>

<style scoped>
.joint-muscles-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}

.back-button {
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-fg);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.back-button:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-primary);
}

.muscle-diagrams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.diagram-card {
  background: var(--color-surface);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.diagram-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px -3px rgba(0, 0, 0, 0.15);
}

.diagram-image {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.clickable-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.clickable-image:hover {
  transform: scale(1.05);
}

.diagram-info {
  padding: 1rem;
}

.diagram-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-fg);
  margin-bottom: 0.5rem;
}

.diagram-description {
  color: var(--color-fg-muted);
  font-size: 0.875rem;
  line-height: 1.4;
}

/* 图片查看器样式 */
.image-viewer-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
}

.close-button {
  position: absolute;
  top: -3rem;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.prev-button, .next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.prev-button:hover, .next-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.prev-button {
  left: -4rem;
}

.next-button {
  right: -4rem;
}

.image-counter {
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .muscle-diagrams-grid {
    grid-template-columns: 1fr;
  }
  
  .prev-button, .next-button {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
  }
  
  .prev-button {
    left: -3rem;
  }
  
  .next-button {
    right: -3rem;
  }
  
  .close-button {
    top: -2.5rem;
    right: -0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }
}
</style>