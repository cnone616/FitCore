<template>
  <div class="anatomy-home">
    <div class="container">
      <header class="page-header">
        <button class="back-btn" @click="goBack">← 返回</button>
        <h1>解剖学习中心</h1>
        <p>打牢基础，掌握关键肌群与动作机制</p>
      </header>

      <section class="summary-card">
        <h2>学习建议</h2>
        <ul>
          <li>优先理解大肌群的功能与常见动作</li>
          <li>结合解剖图观察不同角度下的关节运动</li>
          <li>搭配训练与拉伸页面，形成完整训练体系</li>
        </ul>
      </section>

      <section class="section-grid">
        <article class="feature-card" @click="toJointMuscles">
          <h3>关节与肌群关系</h3>
          <p>了解每个关节参与的主要肌肉，为动作选择提供依据。</p>
          <span class="cta">查看详情 →</span>
        </article>

        <article class="feature-card" @click="toMuscleMovements">
          <h3>肌肉带动的动作</h3>
          <p>掌握肌肉的起止点及其负责的运动方向，优化发力手感。</p>
          <span class="cta">查看详情 →</span>
        </article>

        <article class="feature-card" @click="toMuscleOverview">
          <h3>全身肌肉总览</h3>
          <p>通过交互式 3D 解剖图快速定位肌群，并做高亮标记。</p>
          <span class="cta">查看详情 →</span>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  if (history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};

const toJointMuscles = () => router.push('/anatomy/joint-muscles');
const toMuscleMovements = () => router.push('/anatomy/muscle-movements');
const toMuscleOverview = () => router.push('/anatomy/muscle-overview');
</script>

<style scoped>
.anatomy-home {
  min-height: 100vh;
  background: linear-gradient(180deg, #f4f7fb 0%, #ffffff 40%);
}

.container {
  padding: 1.1rem 0.9rem 2.5rem;
  max-width: 960px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.back-btn {
  align-self: flex-start;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.08);
  background: white;
  color: #334155;
  font-size: 0.85rem;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
}

.page-header h1 {
  font-size: 1.95rem;
  font-weight: 700;
  color: #1f2937;
}

.page-header p {
  color: #64748b;
  font-size: 0.9rem;
}

.summary-card {
  background: white;
  border-radius: 1rem;
  padding: 1.1rem;
  box-shadow: 0 10px 26px rgba(30, 64, 175, 0.07);
  margin-bottom: 1.5rem;
}

.summary-card h2 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.summary-card ul {
  list-style: disc;
  margin-left: 1.1rem;
  color: #475569;
  line-height: 1.5;
}

.section-grid {
  display: grid;
  gap: 1rem;
}

.feature-card {
  background: white;
  border-radius: 1rem;
  padding: 1.1rem;
  box-shadow: 0 14px 32px rgba(99, 102, 241, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feature-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
}

.feature-card p {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
}

.feature-card .cta {
  font-size: 0.85rem;
  font-weight: 600;
  color: #2563eb;
}

.feature-card:active {
  transform: translateY(2px);
  box-shadow: 0 12px 24px rgba(59, 130, 246, 0.15);
}

@media (min-width: 768px) {
  .section-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .section-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
