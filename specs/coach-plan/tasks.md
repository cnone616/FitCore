---
title: Coach Knowledge Reserve Tasks
description: "Implementation checklist derived from the coach knowledge reserve design."
inclusion: always
---

# Plan: Coach Knowledge Reserve

## Tasks
- [x] 1. 数据与类型准备
  - [x] 1.1 创建 `src/types/coach-knowledge.ts`，定义 `KnowledgeModule`、`KnowledgeTopic`、`CertificateInfo`、`ProgressRecord`
  - [x] 1.2 新增 `src/data/coach-knowledge.ts`，填充模块与证书静态数据
  - [x] 1.3 编写数据校验脚本或单元（如需）确保静态结构一致
- [x] 2. 状态管理
  - [x] 2.1 新建 `src/stores/coachKnowledge.ts`，实现状态、Getters 与 Actions
  - [x] 2.2 集成 `localStorageManager` 或封装本地持久化 helper
  - [x] 2.3 编写 store 测试（如项目新增测试体系）
- [x] 3. 页面与组件
  - [x] 3.1 创建页面 `src/views/training/coach-knowledge/index.vue`
  - [x] 3.2 若需要移动端专属布局，新增 `src/views-mobile/training/coach-knowledge/index.vue`
  - [x] 3.3 实现 `CoachKnowledgeOverview.vue` 组件
  - [x] 3.4 实现 `KnowledgeModuleList.vue` 与子组件 `KnowledgeTopicItem.vue`
  - [x] 3.5 实现 `CertificateList.vue` 与 `CertificateCard.vue`
  - [x] 3.6 实现 `ProgressTracker`（组件或组合函数）
- [x] 4. 路由与导航集成
  - [x] 4.1 在 `router/index.ts` 注册 `/training/coach-knowledge` 路由
  - [x] 4.2 更新桌面端导航（如 `Training` 菜单/首页快捷入口）
  - [x] 4.3 更新移动端 `MobileLayout` 导航项
- [x] 5. UI 与交互细节
  - [x] 5.1 使用 Element Plus/Tailwind 调整页面布局与样式
  - [x] 5.2 添加进度条、状态标签、折叠交互
  - [x] 5.3 实现证书详情查看（Dialog/Drawer）
- [x] 6. 持久化与体验增强
  - [x] 6.1 确保进度状态写入/读取 localStorage
  - [x] 6.2 实现模块完成提示与推荐逻辑
  - [x] 6.3 处理无障碍与键盘操作（aria 标签、焦点管理）
- [x] 7. 文案与校对
  - [x] 7.1 校对中文描述、证书信息
  - [x] 7.2 准备后续国际化扩展的文案整理（如需）
- [x] 8. 验证与交付
  - [x] 8.1 自测桌面端与移动端体验
  - [x] 8.2 复核主题切换、暗色模式
  - [x] 8.3 准备交付记录与演示截图（如需）
