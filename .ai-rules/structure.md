---
title: Project Structure & Conventions
description: "Describes FitCore's directory layout, naming rules, and file placement conventions."
inclusion: always
---

## 顶层结构

- `src/`：业务代码与资源（组件、视图、状态、样式、工具等）
- `public/`：静态公开资源
- `dist/`：构建产物（Vite）
- `subAgent/`：自定义子代理说明文档
- `.ai-rules/`：AI 代理指导文件（当前文档集）
- 配置文件：`vite.config.ts`、`tsconfig*.json`、`tailwind.config.js`、`postcss.config.js`

## src 下的核心分布

- `App.vue`：根组件，按设备渲染桌面或移动布局
- `main.ts`：应用入口，初始化 Pinia、Vue Router、Element Plus 与存储系统
- `router/`：单一入口 `index.ts`，集中定义全部路由路径及页面标题
- `components/`
  - `layout/`：布局类组件（如 `MobileLayout.vue`）
  - `detail-wrappers/`：用于路由懒加载的详情包裹组件，避免直接引用大型视图
  - 主题、导航、输入等通用组件（含 `nutrition/` 子目录）
- `views/`
  - 按业务模块划分的页面目录（`nutrition/`、`training/`、`stretching/`、`anatomy/`、`auth/`、`user/` 等）
  - 模块内部常包含 `index.vue` 主页 + 数据/子页面文件
- `views-mobile/`：移动端特化视图（命名与桌面版保持一致，按模块划分）
- `stores/`：Pinia Store（当前包括 `nutrition.ts` 与 `user.ts`）
- `utils/`
  - `theme.ts`：主题切换逻辑
  - `device.ts`：设备检测
  - `storage/`：IndexDB/localStorage 封装 (`manager.ts`、`indexeddb.ts`、`localstorage.ts`)
- `styles/`
  - `themes/`：基础与多主题 CSS 文件
  - `iconfont.css` 等全局样式资源
- `types/`：类型定义（如 `user-data.ts`、主题等）
- `data/`：静态数据源，供视图/组件引用
- `assets/`：静态图片、图标等（通过 Vite 处理）

## 命名与组织约定

- 视图文件使用 PascalCase，对应路由或模块名称；子目录中的 `index.vue` 作为模块入口
- 数据文件通常以 `data.ts`、`*-data.ts` 命名，与视图同目录维护
- Pinia store 统一放置在 `src/stores/`，命名为业务名 + `.ts`
- 详情视图通过 `components/detail-wrappers` 提供壳组件，路由中引用 wrapper 而非直接引用目标视图组件
- 移动端专用视图放在 `views-mobile/`，名称与桌面版本一致，便于按设备切换
- 工具函数按功能归档在 `src/utils/`，支持二级目录（如 `storage/`）

## 资源与主题

- 全局样式入口位于 `App.vue`（引入 Tailwind 基础与主题 CSS）
- 主题相关的样式文件集中在 `styles/themes/`，新增主题需同步更新 `useTheme`

## 数据持久化流程

- 所有用户相关持久化交互通过 `storageManager` 统一协调
- IndexedDB 表结构与键值在 `types/user-data.ts` 的 `StorageKeys` 枚举中定义

## 开发协作建议

- 新增业务模块时，在 `views/` 下创建目录并补充 `router/index.ts`
- 补充相应的 store 或数据文件时遵循现有命名格式
- 移动端适配优先考虑在 `MobileLayout` 或 `views-mobile` 中扩展，保持桌面端视图独立
