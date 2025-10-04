import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: () => import('@/views/nutrition/index.vue'),
    meta: {
      title: '饮食管理'
    }
  },
  {
    path: '/nutrition/calculator',
    name: 'NutritionCalculator',
    component: () => import('@/views/nutrition/calculator/index.vue'),
    meta: {
      title: '营养计算器'
    }
  },
  {
    path: '/nutrition/fat-loss',
    name: 'NutritionFatLoss',
    component: () => import('@/views/nutrition/fat-loss/index.vue'),
    meta: {
      title: '减脂饮食方案'
    }
  },
  {
    path: '/nutrition/fat-loss/:id',
    name: 'NutritionFatLossDetail',
    component: () => import('@/views/nutrition/fat-loss/detail.vue'),
    meta: {
      title: '减脂方案详情'
    }
  },
  {
    path: '/nutrition/muscle-gain',
    name: 'NutritionMuscleGain',
    component: () => import('@/views/nutrition/muscle-gain/index.vue'),
    meta: {
      title: '增肌饮食方案'
    }
  },
  {
    path: '/nutrition/muscle-gain/:id',
    name: 'NutritionMuscleGainDetail',
    component: () => import('@/views/nutrition/muscle-gain/detail.vue'),
    meta: {
      title: '增肌方案详情'
    }
  },
  {
    path: '/nutrition/cardio-calories',
    name: 'NutritionCardioCalories',
    component: () => import('@/views/nutrition/cardio-calories/index.vue'),
    meta: {
      title: '有氧增加饮食热量'
    }
  },
  {
    path: '/nutrition/nutrient-rates',
    name: 'NutritionNutrientRates',
    component: () => import('@/views/nutrition/nutrient-rates/index.vue'),
    meta: {
      title: '日常食物营养率'
    }
  },
  {
    path: '/nutrition/food-nutrient-rate',
    name: 'NutritionFoodNutrientRate',
    component: () => import('@/views/nutrition/food-nutrient-rate/index.vue'),
    meta: {
      title: '分类食物营养率'
    }
  },
  {
    path: '/nutrition/faq',
    name: 'NutritionFaq',
    component: () => import('@/views/nutrition/faq/index.vue'),
    meta: {
      title: '问答汇总'
    }
  },
  {
    path: '/nutrition/faq/:id',
    name: 'NutritionFaqDetail',
    component: () => import('@/views/nutrition/faq/detail.vue'),
    meta: {
      title: '问答详情'
    }
  },
  {
    path: '/training',
    name: 'Training',
    component: () => import('@/views/training/index.vue'),
    meta: {
      title: '训练计划'
    }
  },
  {
    path: '/training/exercise-library',
    name: 'ExerciseLibrary',
    component: () => import('@/views/training/exercises/exercise-library.vue'),
    meta: {
      title: '动作库'
    }
  },
  {
    path: '/training/exercises/detail',
    name: 'ExerciseDetail',
    component: () => import('@/views/training/exercises/exercise-detail.vue'),
    meta: {
      title: '动作详情'
    }
  },
  {
    path: '/training/gym-3-split',
    name: 'GymThreeSplit',
    component: () => import('@/views/training/gym-3-split/index.vue'),
    meta: {
      title: '健身房三分化'
    }
  },
  {
    path: '/training/gym-4-split-shoulders',
    name: 'GymFourSplitShoulders',
    component: () => import('@/views/training/gym-4-split-shoulders/index.vue'),
    meta: {
      title: '健身房四分化(单练肩)'
    }
  },
  {
    path: '/training/gym-4-split-arms',
    name: 'GymFourSplitArms',
    component: () => import('@/views/training/gym-4-split-arms/index.vue'),
    meta: {
      title: '健身房四分化(单练手臂)'
    }
  },
  {
    path: '/training/home-3-split',
    name: 'HomeThreeSplit',
    component: () => import('@/views/training/home-3-split/index.vue'),
    meta: {
      title: '居家三分话'
    }
  },
  {
    path: '/training/one-rep-max',
    name: 'OneRepMaxFormula',
    component: () => import('@/views/training/one-rep-max/index.vue'),
    meta: {
      title: '最大力量预测公式'
    }
  },
  {
    path: '/training/workouts',
    name: 'TrainingWorkouts',
    component: () => import('@/views/training/workouts.vue'),
    meta: {
      title: '训练动作库'
    }
  },
  {
    path: '/training/exercise/:id',
    name: 'ExerciseDetailById',
    component: () => import('@/views/training/exercises/exercise-detail.vue'),
    meta: {
      title: '动作详情'
    }
  },
  {
    path: '/stretching',
    name: 'Stretching',
    component: () => import('@/views/stretching/index.vue'),
    meta: {
      title: '拉伸指导'
    }
  },
  {
    path: '/anatomy',
    name: 'Anatomy',
    component: () => import('@/views/anatomy/index.vue'),
    meta: {
      title: '解剖学习'
    }
  },
  {
    path: '/anatomy/joint-muscles',
    name: 'JointMuscles',
    component: () => import('@/views/anatomy/joint-muscles.vue'),
    meta: {
      title: '关节活动的肌肉'
    }
  },
  {
    path: '/anatomy/muscle-movements',
    name: 'MuscleMovements',
    component: () => import('@/views/anatomy/muscle-movements.vue'),
    meta: {
      title: '肌肉的关节活动'
    }
  },
  {
    path: '/anatomy/muscle-overview',
    name: 'MuscleOverview',
    component: () => import('@/views/anatomy/muscle-overview.vue'),
    meta: {
      title: '健身解剖总结'
    }
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/auth/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/user/settings',
    name: 'UserSettings',
    component: () => import('@/views/user/settings.vue'),
    meta: {
      title: '用户设置'
    }
  },
  {
    path: '/user/data',
    name: 'UserData',
    component: () => import('@/views/user/data.vue'),
    meta: {
      title: '数据概览'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash } as any;
    }
    return { left: 0, top: 0 };
  }
});

// 路由守卫 - 设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - FitCore`;
  }
  next();
});

export default router;
