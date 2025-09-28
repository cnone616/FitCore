# FitCore 项目结构说明

## 📁 文件夹组织结构

```
src/
├── views/                    # 页面组件
│   ├── Home.vue             # 首页
│   ├── About.vue            # 关于页面
│   ├── nutrition/           # 饮食管理模块
│   │   ├── index.vue        # 饮食管理主页
│   │   ├── calculator/      # 计算器子模块
│   │   │   └── index.vue
│   │   ├── cardio-calories/ # 有氧热量计算
│   │   │   ├── data.ts
│   │   │   └── index.vue
│   │   ├── fat-loss/        # 减脂方案
│   │   │   ├── detail.vue
│   │   │   ├── index.vue
│   │   │   ├── nutrition-data.ts
│   │   │   ├── plans-data.ts
│   │   │   └── sections-data.ts
│   │   ├── muscle-gain/     # 增肌方案
│   │   │   ├── detail.vue
│   │   │   ├── index.vue
│   │   │   ├── plans-data.ts
│   │   │   └── sections-data.ts
│   │   ├── nutrient-rates/  # 三大营养素比例
│   │   │   ├── carbData.ts
│   │   │   ├── fatData.ts
│   │   │   ├── index.vue
│   │   │   └── proteinData.ts
│   │   ├── faq/             # 问答与说明
│   │   │   ├── data.ts
│   │   │   ├── detail.vue
│   │   │   └── index.vue
│   │   ├── no-training/     # 无训练日
│   │   │   └── data.ts
│   │   └── data.ts          # 饮食模块索引数据
│   ├── stretching/          # 拉伸指导模块
│   │   ├── data.ts
│   │   └── index.vue
│   ├── training/            # 训练计划模块
│   │   ├── data.ts
│   │   ├── gym-3-split/
│   │   │   ├── data.ts
│   │   │   └── index.vue
│   │   ├── gym-4-split-arms/
│   │   │   ├── data.ts
│   │   │   └── index.vue
│   │   ├── gym-4-split-shoulders/
│   │   │   ├── data.ts
│   │   │   └── index.vue
│   │   ├── home-3-split/
│   │   │   ├── data.ts
│   │   │   └── index.vue
│   │   ├── one-rep-max/
│   │   │   ├── data.ts
│   │   │   └── index.vue
│   │   ├── index.vue
│   │   └── workouts.vue
│   └── anatomy/             # 解剖学习模块
│       └── index.vue
├── components/              # 公共组件
│   ├── AppHeader.vue        # 应用头部
│   ├── AppBreadcrumb.vue    # 面包屑
│   ├── FloatingNav.vue      # 浮动导航
│   ├── NumberStepper.vue    # 数值步进器
│   ├── ThemeSwitcher.vue    # 主题切换器
│   └── nutrition/           # 饮食相关组件
│       ├── BasicInfoBMI.vue
│       ├── DietOverview.vue
│       ├── HeatDesign.vue
│       ├── PlanInfoCards.vue
│       ├── SavePreviewModal.vue   # 方案预览与截图（html-to-image）
│       ├── ScreenshotButton.vue   # 打开预览并导出
│       └── useScreenshot.ts       # 截图封装（使用 html-to-image）
├── stores/                  # 全局与模块状态
│   └── nutrition.ts         # 营养模块 Pinia Store（含持久化）
├── router/                  # 路由配置
│   └── index.ts             # 路由定义
├── utils/                   # 工具函数
│   └── theme.ts             # 主题管理（运行时 CSS 变量）
├── types/                   # 类型定义
│   └── theme.ts             # 主题类型
├── styles/                  # 样式文件
│   └── themes/              # 主题样式（base/light/dark 等）
├── assets/                  # 静态资源
├── App.vue                  # 根组件
└── main.ts                  # 入口文件
```

## 🎯 模块化设计优势

### 1. **清晰的模块分离**
- 每个健身板块都有独立的文件夹
- 相关功能集中管理，便于维护
- 模块间相互独立，降低耦合度

### 2. **可扩展的页面结构**
- 每个模块可以包含多个子页面
- 数据文件独立管理，便于复用
- 支持模块级别的功能扩展

### 3. **便于团队协作**
- 不同开发者可以专注不同模块
- 减少代码冲突和合并问题
- 清晰的职责分工

### 4. **数据管理优化**
- 每个模块有独立的数据文件
- 类型定义清晰，便于开发
- 支持模块级别的数据缓存

## 📋 开发建议

### 新增页面
1. 在对应模块文件夹下创建新的 `.vue` 文件
2. 在 `src/router/index.ts` 中添加路由配置
3. 如需要，在模块的 `data.ts` 中添加相关数据定义

### 新增模块
1. 在 `src/views/` 下创建新的模块文件夹
2. 创建 `index.vue` 作为模块主页
3. 创建 `data.ts` 定义模块相关数据类型
4. 在路由中添加模块路由配置

### 数据管理
- 营养模块使用 Pinia：`src/stores/nutrition.ts`，集中管理用户输入与计算结果，并持久化至 `localStorage`
- 每个子模块的 `data.ts` 文件包含该模块的数据定义
- 使用 TypeScript 接口确保类型安全
- 预览窗口直接读取 Store，确保与页面显示一致且刷新不丢失

## 🚀 未来扩展计划

### 饮食管理模块
- [ ] 食谱推荐系统
- [ ] 卡路里追踪器
- [ ] 食物数据库
- [ ] 饮食计划制定
- [ ] 营养知识库

### 训练计划模块
- [ ] 个性化训练方案
- [ ] 训练进度跟踪
- [ ] 训练记录系统
- [ ] 力量训练专区
- [ ] 有氧训练专区

### 拉伸指导模块
- [ ] 动态拉伸指导
- [ ] 静态拉伸指导
- [ ] 瑜伽拉伸课程
- [ ] 部位拉伸指导
- [ ] 柔韧性测试

### 解剖学习模块
- [ ] 肌肉解剖图
- [ ] 骨骼系统详解
- [ ] 关节运动原理
- [ ] 运动机制学习
- [ ] 3D交互模型

这种模块化的文件夹结构让项目更加清晰、可维护，并且为未来的功能扩展提供了良好的基础。
