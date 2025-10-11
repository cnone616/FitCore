<template>
  <div class="about-page">
    <div class="container">
      <div class="about-content">
        <h1 class="page-title">关于数据查看器</h1>
        
        <div class="about-section">
          <h2 class="section-title">项目介绍</h2>
          <p class="section-text">
            这是一个基于 Vue 3 + TypeScript + Vite 构建的静态数据查看器。
            项目采用现代化的前端技术栈，支持多主题切换和响应式设计。
          </p>
        </div>

        <div class="about-section">
          <h2 class="section-title">技术栈</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <div class="tech-icon">⚡</div>
              <h3>Vue 3</h3>
              <p>渐进式 JavaScript 框架</p>
            </div>
            <div class="tech-item">
              <div class="tech-icon">🔷</div>
              <h3>TypeScript</h3>
              <p>类型安全的 JavaScript</p>
            </div>
            <div class="tech-item">
              <div class="tech-icon">⚡</div>
              <h3>Vite</h3>
              <p>快速的前端构建工具</p>
            </div>
            <div class="tech-item">
              <div class="tech-icon">🎨</div>
              <h3>Tailwind CSS</h3>
              <p>实用优先的 CSS 框架</p>
            </div>
            <div class="tech-item">
              <div class="tech-icon">🎯</div>
              <h3>Vue Router</h3>
              <p>Vue.js 官方路由管理器</p>
            </div>
            <div class="tech-item">
              <div class="tech-icon">🍍</div>
              <h3>Pinia</h3>
              <p>Vue 的状态管理库</p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2 class="section-title">功能特性</h2>
          <ul class="feature-list">
            <li>🎨 多主题支持（浅色、深色、蓝色、绿色、紫色）</li>
            <li>📱 响应式设计，支持移动端和桌面端</li>
            <li>⚡ 快速加载和构建</li>
            <li>🔧 TypeScript 类型安全</li>
            <li>🎯 现代化 UI 组件</li>
            <li>📊 数据展示和统计</li>
          </ul>
        </div>

        <div class="about-section">
          <h2 class="section-title">项目结构</h2>
          <div class="structure-tree">
            <div class="tree-item">
              <span class="tree-folder">📁 src/</span>
              <div class="tree-children">
                <div class="tree-item">
                  <span class="tree-folder">📁 components/</span>
                  <div class="tree-children">
                    <div class="tree-item"><span class="tree-file">📄 AppHeader.vue</span></div>
                    <div class="tree-item"><span class="tree-file">📄 ThemeSwitcher.vue</span></div>
                  </div>
                </div>
                <div class="tree-item">
                  <span class="tree-folder">📁 views/</span>
                  <div class="tree-children">
                    <div class="tree-item"><span class="tree-file">📄 Home.vue</span></div>
                    <div class="tree-item"><span class="tree-file">📄 About.vue</span></div>
                  </div>
                </div>
                <div class="tree-item">
                  <span class="tree-folder">📁 utils/</span>
                  <div class="tree-children">
                    <div class="tree-item"><span class="tree-file">📄 theme.ts</span></div>
                  </div>
                </div>
                <div class="tree-item">
                  <span class="tree-folder">📁 types/</span>
                  <div class="tree-children">
                    <div class="tree-item"><span class="tree-file">📄 theme.ts</span></div>
                  </div>
                </div>
                <div class="tree-item">
                  <span class="tree-folder">📁 styles/</span>
                  <div class="tree-children">
                    <div class="tree-item"><span class="tree-file">📄 theme.css</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 关于页面逻辑
</script>

<style scoped>
.about-page {
  min-height: calc(100vh - 80px);
  background-color: var(--color-background);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin: 0 0 3rem 0;
}

.about-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 1rem 0;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.section-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tech-item {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  transition: var(--transition-colors);
}

.tech-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tech-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.tech-item h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
}

.tech-item p {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin: 0;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
}

.feature-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 1rem;
  color: var(--color-text);
}

.feature-list li:last-child {
  border-bottom: none;
}

.structure-tree {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-top: 1.5rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
}

.tree-item {
  margin: 0.25rem 0;
}

.tree-children {
  margin-left: 1.5rem;
}

.tree-folder,
.tree-file {
  color: var(--color-text);
  display: inline-block;
  padding: 0.125rem 0;
}

.tree-folder {
  font-weight: 600;
}

.tree-file {
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .container {
    padding: 1rem 0.75rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .tech-item {
    padding: 1rem;
  }
  
  .structure-tree {
    padding: 1rem;
    font-size: 0.75rem;
  }
  
  .tree-children {
    margin-left: 1rem;
  }
}
</style>
