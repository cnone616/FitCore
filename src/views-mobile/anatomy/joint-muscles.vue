<template>
  <div class="joint-muscles">
    <header class="page-header">
      <button class="back-btn" @click="goBack">⟵ 返回</button>
      <div class="title-wrap">
        <h1>关节周围的肌肉</h1>
        <p>点击图片可放大查看细节</p>
      </div>
    </header>

    <div class="diagram-list">
      <article
        v-for="(diagram, index) in muscleDiagrams"
        :key="diagram.image"
        class="diagram-card"
        @click="openViewer(index)"
      >
        <img :src="diagram.image" alt="关节肌肉图" loading="lazy" />
      </article>
    </div>

    <teleport to="body">
      <div v-if="showViewer" class="viewer" @click.self="closeViewer">
        <button class="close" @click="closeViewer">×</button>
        <button class="nav prev" v-if="currentIndex > 0" @click.stop="previous">‹</button>
        <img :src="muscleDiagrams[currentIndex].image" alt="肌肉大图" />
        <button class="nav next" v-if="currentIndex < muscleDiagrams.length - 1" @click.stop="next">›</button>
        <div class="counter">{{ currentIndex + 1 }} / {{ muscleDiagrams.length }}</div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import jointMuscleImages from '@/data/anatomy/jointMuscles';

const router = useRouter();

const goBack = () => {
  if (history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};

const muscleDiagrams = jointMuscleImages.map(image => ({ image }));

const showViewer = ref(false);
const currentIndex = ref(0);

const openViewer = (index: number) => {
  currentIndex.value = index;
  showViewer.value = true;
};

const closeViewer = () => {
  showViewer.value = false;
};

const previous = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};

const next = () => {
  if (currentIndex.value < muscleDiagrams.length - 1) currentIndex.value++;
};
</script>

<style scoped>
.joint-muscles {
  min-height: 100vh;
  background: linear-gradient(180deg, #eef2ff 0%, #ffffff 60%);
  padding: 1rem 0.85rem 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.page-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.back-btn {
  align-self: flex-start;
  background: white;
  border: 1px solid rgba(148, 163, 184, 0.4);
  border-radius: 999px;
  padding: 0.38rem 0.8rem;
  color: #1e293b;
  font-size: 0.85rem;
  box-shadow: 0 8px 20px rgba(30, 58, 138, 0.1);
}

.title-wrap h1 {
  font-size: 1.65rem;
  font-weight: 700;
  color: #0f172a;
}

.title-wrap p {
  color: #475569;
  font-size: 0.88rem;
}

.diagram-list {
  display: grid;
  gap: 0.85rem;
}

.diagram-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(99, 102, 241, 0.07);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.diagram-card img {
  width: 100%;
  height: auto;
  display: block;
}

.viewer {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.viewer img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 0.75rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
}

.close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  font-size: 1.5rem;
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

.counter {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.35rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
}

@media (min-width: 768px) {
  .diagram-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .diagram-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
