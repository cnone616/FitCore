<template>
  <div class="training-plan-display">
    <!-- 计划概览 -->
    <div class="plan-overview mb-8">
      <h1 class="text-3xl font-bold text-fg mb-4">{{ overview.title }}</h1>
      <p class="text-fg-muted text-lg">{{ overview.description }}</p>
    </div>

    <!-- 训练计划列表 -->
    <div class="plan-list">
      <div 
        v-for="plan in plans" 
        :key="plan.dayId"
        class="plan-card mb-6"
      >
        <!-- 计划头部 -->
        <div class="plan-header">
          <h2 class="text-2xl font-bold text-fg mb-2">{{ plan.dayName }}</h2>
          <p class="text-fg-muted mb-4">{{ plan.description }}</p>
        </div>

        <!-- 主要训练块 -->
        <div class="training-block">
          <div class="block-header">
            <div class="block-title">
              <i class="iconfont icon-muscle mr-2"></i>
              <h3 class="text-xl font-semibold text-fg">{{ plan.trainingBlocks.muscleGroupName }}</h3>
            </div>
            <p v-if="plan.trainingBlocks.description" class="block-description">
              {{ plan.trainingBlocks.description }}
            </p>
          </div>
          
          <div class="exercise-categories">
            <div 
              v-for="category in plan.trainingBlocks.exerciseCategories" 
              :key="category.categoryId"
              class="category-card"
            >
              <div class="category-header">
                <h4 class="text-lg font-medium text-fg">{{ category.categoryName }}</h4>
                <p class="text-fg-muted text-sm">{{ category.instruction }}</p>
              </div>
              
              <div class="exercise-list">
                <div 
                  v-for="exercise in category.exercises" 
                  :key="exercise.exerciseId"
                  class="exercise-item clickable"
                  @click="goToExerciseDetail(exercise)"
                >
                  <div class="exercise-name">
                    <i class="iconfont icon-exercise mr-2"></i>
                    {{ exercise.exerciseName }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 额外训练块 -->
        <div v-if="plan.additionalBlocks" class="training-block mt-6">
          <div class="block-header">
            <div class="block-title">
              <i class="iconfont icon-additional mr-2"></i>
              <h3 class="text-xl font-semibold text-fg">{{ plan.additionalBlocks.muscleGroupName }}</h3>
            </div>
          </div>
          
          <div class="exercise-categories">
            <div 
              v-for="category in plan.additionalBlocks.exerciseCategories" 
              :key="category.categoryId"
              class="category-card"
            >
              <div class="category-header">
                <h4 class="text-lg font-medium text-fg">{{ category.categoryName }}</h4>
                <p class="text-fg-muted text-sm">{{ category.instruction }}</p>
              </div>
              
              <div class="exercise-list">
                <div 
                  v-for="exercise in category.exercises" 
                  :key="exercise.exerciseId"
                  class="exercise-item clickable"
                  @click="goToExerciseDetail(exercise)"
                >
                  <div class="exercise-name">
                    <i class="iconfont icon-exercise mr-2"></i>
                    {{ exercise.exerciseName }}
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
import { useRouter } from 'vue-router';

interface Exercise {
  exerciseId: string;
  exerciseName: string;
  jointMovements: Array<{
    jointId: string;
    jointName: string;
    movementDescription: string;
  }>;
}

interface ExerciseCategory {
  categoryId: string;
  categoryName: string;
  instruction: string;
  exercises: Exercise[];
}

interface TrainingBlock {
  muscleGroupId: string;
  muscleGroupName: string;
  description?: string;
  exerciseCategories: ExerciseCategory[];
}

interface TrainingPlan {
  dayId: string;
  dayName: string;
  description: string;
  trainingBlocks: TrainingBlock;
  additionalBlocks?: TrainingBlock;
}

interface PlanOverview {
  title: string;
  description: string;
}

interface Props {
  overview: PlanOverview;
  plans: TrainingPlan[];
}

defineProps<Props>();
const router = useRouter();

// 跳转到动作详情页面
const goToExerciseDetail = (exercise: Exercise) => {
  router.push({
    path: `/training/exercise/${exercise.exerciseId}`,
    query: {
      name: exercise.exerciseName,
      joints: JSON.stringify(exercise.jointMovements)
    }
  });
};
</script>

<style scoped>
.training-plan-display {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.plan-overview {
  text-align: center;
  margin-bottom: 3rem;
}

.plan-card {
  background-color: var(--color-surface);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.plan-header {
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.training-block {
  margin-bottom: 2rem;
}

.block-header {
  margin-bottom: 1.5rem;
}

.block-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.block-description {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  padding-left: 1.5rem;
}

.exercise-categories {
  display: grid;
  gap: 1.5rem;
}

.category-card {
  background-color: var(--color-background);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
}

.category-header {
  margin-bottom: 1rem;
}

.category-header h4 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.exercise-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.exercise-item {
  background-color: var(--color-surface);
  border-radius: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  width: auto;
  white-space: nowrap;
}

.exercise-item.clickable {
  cursor: pointer;
}

.exercise-item.clickable:hover {
  background-color: var(--color-primary-light);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.exercise-name {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
}

.joint-movements {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.joint-movement {
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

/* 关节类型颜色 */
.movement-shoulder {
  background-color: #e3f2fd;
  color: #1976d2;
}

.movement-elbow {
  background-color: #f3e5f5;
  color: #7b1fa2;
}

.movement-knee {
  background-color: #e8f5e8;
  color: #388e3c;
}

.movement-hip {
  background-color: #fff3e0;
  color: #f57c00;
}

.movement-spine {
  background-color: #fce4ec;
  color: #c2185b;
}


/* 响应式设计 */
@media (max-width: 768px) {
  .training-plan-display {
    padding: 1rem 0.5rem;
  }
  
  .plan-card {
    padding: 1rem;
  }
  
  .category-card {
    padding: 1rem;
  }
  
  .exercise-list {
    gap: 0.5rem;
  }
  
  .exercise-item {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  .exercise-name {
    font-size: 0.85rem;
  }
  
  .block-description {
    padding-left: 1rem;
    font-size: 0.85rem;
  }
  
}
</style>
