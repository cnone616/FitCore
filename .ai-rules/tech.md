---
title: Technology Stack
description: "Summarizes FitCore's technologies, build tools, and operational conventions."
inclusion: always
---

## 核心技术

- **语言与框架**：Vue 3 + TypeScript
- **构建工具**：Vite 5.x
- **状态管理**：Pinia（含模块化 store；用户数据、营养模块）
- **路由**：Vue Router 4.x
- **UI 体系**：Tailwind CSS（原子类）、Element Plus（桌面端组件）、@headlessui/vue（无样式交互）
- **数据持久化**：IndexedDB 与 localStorage（通过 `storageManager` 封装），支持用户档案、营养目标、饮食/训练记录、设置等数据同步
- **可视化/工具**：html-to-image（方案截图导出）、@lucawahlen/vue-human-muscle-anatomy（解剖交互组件）、@vueuse/core（组合式工具）

## 项目配置

- `package.json` 定义 npm 脚本：`dev`、`build`、`preview`、`type-check`
- `tsconfig.json` + `tsconfig.node.json` 配置 TypeScript；启用路径别名 `@/`
- `tailwind.config.js` 配置自定义主题变量与原子类扩展
- `vite.config.ts` 集成 Vue 支持与别名映射

## 数据与状态约定

- `storageManager` 统一封装 IndexedDB 与 localStorage，提供用户、新陈代谢、训练数据的增删查改及导入导出能力
- `stores/user.ts` 负责用户全局状态、数据同步与导入导出流程
- `views/nutrition` 模块结合 Pinia 与本地缓存管理营养方案、用户输入及计算结果
- 所有日期字段以 `Date` 对象存储；注意导入时需恢复为 `Date` 类型

## 主题与布局

- `src/styles/themes` 中定义基础与多主题样式，`useTheme` 负责运行时切换
- 桌面端采用 `AppHeader + AppBreadcrumb + router-view` 布局；移动端使用 `MobileLayout` 自适应导航与底部栏
- `useDevice` 基于窗口宽度区分移动/桌面视图，并在 `App.vue` 中控制布局选择

## 开发命令

- **启动开发环境**：`npm run dev`
- **类型检查**：`npm run type-check`
- **构建生产包**：`npm run build`
- **预览构建结果**：`npm run preview`

## 测试现状

- 代码库暂无单元/端到端测试脚本，需要自行补充
