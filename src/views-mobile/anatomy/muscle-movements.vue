<template>
  <div class="muscle-movements">
    <header class="page-header">
      <button class="back-btn" @click="goBack">⟵ 返回</button>
      <div class="title-wrap">
        <h1>肌肉驱动的关节动作</h1>
        <p>学习不同关节的发力模式</p>
      </div>
    </header>

    <section class="movement-list">
      <article
        v-for="(item, index) in muscleMovements"
        :key="item.image"
        class="movement-card"
        @click="openViewer(index)"
      >
        <img :src="item.image" alt="关节动作图" loading="lazy" />
      </article>
    </section>

    <teleport to="body">
      <div v-if="showViewer" class="viewer" @click.self="closeViewer">
        <button class="close" @click="closeViewer">×</button>
        <button class="nav prev" v-if="currentIndex > 0" @click.stop="previous">‹</button>
        <img :src="muscleMovements[currentIndex].image" alt="动作大图" />
        <button class="nav next" v-if="currentIndex < muscleMovements.length - 1" @click.stop="next">›</button>
        <div class="counter">{{ currentIndex + 1 }} / {{ muscleMovements.length }}</div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import muscleMovementImages from '@/data/anatomy/muscleMovements';

const router = useRouter();

const goBack = () => {
  if (history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};

const muscleMovements = muscleMovementImages.map(image => ({ image }));

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
  if (currentIndex.value < muscleMovements.length - 1) currentIndex.value++;
};
</script>

<style scoped>
.muscle-movements {
  min-height: 100vh;
  background: linear-gradient(180deg, #fef3c7 0%, #ffffff 55%);
  padding: 1.25rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.page-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.back-btn {
  align-self: flex-start;
  background: white;
  border: 1px solid rgba(250, 204, 21, 0.35);
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  color: #92400e;
  font-size: 0.9rem;
  box-shadow: 0 10px 24px rgba(217, 119, 6, 0.12);
}

.title-wrap h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #7c2d12;
}

.title-wrap p {
  color: #b45309;
  font-size: 0.95rem;
}

.movement-list {
  display: grid;
  gap: 1rem;
}

.movement-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 16px 28px rgba(251, 191, 36, 0.15);
  border: 1px solid rgba(250, 204, 21, 0.2);
}

.movement-card img {
  width: 100%;
  display: block;
}

.viewer {
  position: fixed;
  inset: 0;
  background: rgba(120, 53, 15, 0.87);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.viewer img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 0.75rem;
  box-shadow: 0 25px 60px rgba(120, 53, 15, 0.45);
}

.close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.25);
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
  background: rgba(255, 255, 255, 0.25);
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
  background: rgba(255, 255, 255, 0.25);
  padding: 0.35rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
}

@media (min-width: 768px) {
  .movement-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .movement-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
