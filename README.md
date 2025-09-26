# FitCore

一个基于 Vue 3 + TypeScript + Vite 构建的专业健身工具平台，涵盖饮食、训练、拉伸、解剖四大核心板块，支持浅色/深色主题切换和响应式设计。内置 Pinia 状态持久化与高保真截图预览（html-to-image）。

## 功能特性

- 🍎 **饮食管理** - 营养计算、计划方案、卡路里分配与总览
- 💪 **训练计划** - 个性化训练方案、动作库、进度跟踪
- 🧘 **拉伸指导** - 专业拉伸动作、柔韧性训练、恢复指导
- 🫀 **解剖学习** - 肌肉解剖图、运动原理、知识库
- 🎨 **主题支持** - 内置 2 种主题（浅色、深色）
- 📱 **响应式设计** - 完美适配移动端和桌面端
- ⚡ **快速构建** - 基于 Vite 的快速开发体验
- 🔧 **TypeScript** - 完整的类型安全支持
- 🎯 **现代化 UI** - 基于 Tailwind CSS 的美观界面
 - 🗂️ **数据持久化** - 使用 Pinia + localStorage 保存用户输入与计算结果
 - 🖼️ **高保真截图** - 采用 html-to-image，还原浏览器所见风格与布局

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速的前端构建工具
- **Vue Router** - Vue.js 官方路由管理器
- **Pinia** - Vue 的状态管理库
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Element Plus** - Vue 3 组件库
- **@headlessui/vue** - 无样式的 UI 组件

## 项目结构

```
FitCore/
├── src/
│   ├── components/          # 组件目录
│   │   ├── AppHeader.vue   # 应用头部组件
│   │   └── ThemeSwitcher.vue # 主题切换组件
│   ├── views/              # 页面目录
│   │   ├── Home.vue        # 首页
│   │   └── About.vue       # 关于页面
│   ├── utils/              # 工具函数
│   │   └── theme.ts        # 主题管理（运行时主题切换与变量应用）
│   ├── types/              # 类型定义
│   │   └── theme.ts        # 主题类型
│   ├── styles/             # 样式文件
│   │   └── themes/         # 主题样式（base.css / light.css / dark.css ...）
│   ├── router/             # 路由配置
│   │   └── index.ts        # 路由定义
│   ├── App.vue             # 根组件
│   └── main.ts             # 入口文件
├── public/                 # 静态资源
├── package.json            # 项目配置
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind 配置
└── README.md               # 项目说明
```

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 预览生产版本

```bash
npm run preview
# 或
yarn preview
# 或
pnpm preview
```

## 主题系统

项目内置了基础主题系统，当前支持：

- **浅色主题** - 经典的白色背景主题
- **深色主题** - 护眼的深色背景主题

主题切换会自动保存到本地存储，下次访问时会自动应用上次选择的主题。

实现方式：
- 运行时主题管理位于 `src/utils/theme.ts`，通过设置 `document.documentElement` 的 CSS 变量与主题类实现。
- 基础主题样式在 `src/styles/themes/`（`base.css`、`light.css`、`dark.css`）。
- 主题切换入口组件：`src/components/ThemeSwitcher.vue`。

## 自定义主题

可以通过修改 `src/utils/theme.ts` 文件来添加新的主题或修改现有主题：

```typescript
const themes: Record<ThemeName, ThemeConfig> = {
  // 添加新主题
  custom: {
    name: 'custom',
    displayName: '自定义主题',
    colors: {
      primary: '#your-color',
      // ... 其他颜色配置
    },
    cssVars: {
      // ... CSS 变量配置
    }
  }
};
```

## 截图预览与导出

项目使用 `html-to-image` 提供高保真截图导出，尽可能还原浏览器中的实际样式：

- 入口组件：`src/components/nutrition/ScreenshotButton.vue`
- 预览与内容渲染：`src/components/nutrition/SavePreviewModal.vue`
- 截图封装 Hook：`src/components/nutrition/useScreenshot.ts`

实现要点：
- 预览窗口使用固定 PC 风格布局（宽度约 900px），避免在移动端变形。
- 通过 Pinia 全量渲染饮食方案详情、BMI、热量设计、饮食总览等，确保与页面一致。
- 截图目标使用“方案内容区域”的根节点，保证导出完整内容而非仅可视区域。
- 使用 `html-to-image` 的基础 `toPng`，开启 `cacheBust`、`pixelRatio` 等；为避免跨域字体样式报错，使用 `skipFonts: true`。
- 修复了字体/颜色在截图中丢失的问题（等待 `document.fonts.ready`，在克隆节点上固化 `fontFamily`、`fontWeight`、`-webkit-text-fill-color` 等）。
- 边框样式在预览中加深加粗（如 `p-3 rounded border` 区块），以便导出图片观感清晰。

已移除 `html2canvas` 及其类型声明，避免重复实现与体积开销。

## 数据管理（Pinia）

营养模块的用户输入与计算结果集中在 Pinia Store，并持久化到 `localStorage`：

- Store 文件：`src/stores/nutrition.ts`
- 持久化字段：性别、身高、体重、年龄、力量水平、训练/有氧消耗、手动 BMR/维持热量、BMI 值与分类、蛋白/碳水/脂肪目标、BMR/维持热量、平衡热量（训练/休息）、应吃热量（训练/休息）
- 页面组件通过事件与 `watch` 同步计算结果到 Store，预览窗口直接从 Store 读取，保证一致性与刷新不丢失。

## 开发指南

### 添加新页面

1. 在 `src/views/` 目录下创建新的 Vue 组件
2. 在 `src/router/index.ts` 中添加路由配置
3. 更新导航菜单（如需要）

### 添加新组件

1. 在 `src/components/` 目录下创建新的 Vue 组件
2. 在需要的地方导入并使用

### 样式规范

- 使用 Tailwind CSS 类名进行样式设置
- 使用 CSS 变量进行主题相关的颜色设置（见 `src/utils/theme.ts` 与 `src/styles/themes/`）
- 遵循响应式设计原则

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 许可证

MIT License
