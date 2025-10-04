<template>
  <div class="training-guide">
    <div class="guide-header">
      <h2 class="guide-main-title">训练指南</h2>
      <p class="guide-description">适用于所有训练计划的基础指导原则</p>
    </div>
    
    <div class="guide-content">
      <div 
        v-for="item in sortedItems" 
        :key="item.id"
        class="guide-item"
      >
        <h3 class="guide-title">
          <span class="item-number">{{ item.order }}</span>
          {{ item.title }}
        </h3>
        <div class="guide-text">
          <template v-if="Array.isArray(item.content)">
            <p v-for="(line, index) in item.content" :key="index">
              {{ line }}
            </p>
          </template>
          <p v-else>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  customGuide?: Array<{
    id: string;
    title: string;
    content: string | string[];
    order: number;
  }>;
}

const props = defineProps<Props>();

// 默认训练指南数据
const defaultTrainingGuide = [
  {
    id: 'knowledge_preparation',
    title: '知识准备',
    content: '新手要先有力训的认识框架，切勿没有框架而直接去学具体动作',
    order: 1
  },
  {
    id: 'training_frequency',
    title: '训练频率',
    content: '平均每周练要3-5次，如果长期无法达到每周3次则建议放弃力训（减脂和力训无关，但增肌必须力训），休息日是你根据疲劳度、个人事务等因素自由安排的，不要误解为必须一轮练完才允许休息',
    order: 2
  },
  {
    id: 'training_sets',
    title: '训练组数',
    content: '本计划的组数范围比较大（20组上下），可根据自己疲劳度来酌情增减，一次训练总时长一般1-1.5小时',
    order: 3
  },
  {
    id: 'weight_selection',
    title: '配重选择',
    content: '大部分时候选择能做6-12次重复的中等配重，适应新动作可以做12-15次重复的小配重',
    order: 4
  },
  {
    id: 'failure_training',
    title: '是否力竭',
    content: '可能砸伤的动作（自由深蹲/卧推/推举）不要做到力竭，提前1-2个停止以确保安全；其余无危险动作可以做到力竭，做不动了就放下',
    order: 5
  },
  {
    id: 'rest_between_sets',
    title: '组间休息',
    content: '胸/背/臀腿的组间休息2-3分钟（臀腿可以更长一点），肩膀/手臂的组间休息1.5-2分钟，可自行酌调，但最少也不应低于1.5分钟',
    order: 6
  },
  {
    id: 'female_notes',
    title: '女性注意',
    content: '①不太需要练胸大肌，每两轮三分化时，拿一轮来跳过练胸日，相当于练胸频率减半；②臀腿日的股四应该少练一些',
    order: 7
  }
];

// 根据props决定使用哪个指南
const trainingGuide = computed(() => {
  return props.customGuide || defaultTrainingGuide;
});

// 按顺序排序指南项目
const sortedItems = computed(() => {
  return [...trainingGuide.value].sort((a, b) => a.order - b.order);
});
</script>

<style scoped>
.training-guide {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.guide-header {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.guide-main-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.25rem 0;
}

.guide-description {
  color: var(--color-text-muted);
  margin: 0;
  font-size: 0.9rem;
}

.guide-content {
  display: flex;
  flex-direction: column;
}

.guide-item {
  padding: 0.5rem 0;
  margin: 0;
}

.guide-title {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.25rem 0;
}

.item-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
  margin-right: 0.5rem;
  flex-shrink: 0;
}

.guide-text {
  color: var(--color-text-muted);
  line-height: 1.4;
  margin: 0;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .training-guide {
    padding: 0.5rem;
  }
  
  .guide-main-title {
    font-size: 1.25rem;
  }
  
  .guide-title {
    font-size: 0.9rem;
  }
  
  .guide-text {
    font-size: 0.85rem;
  }
  
  .item-number {
    width: 1rem;
    height: 1rem;
    font-size: 0.7rem;
    margin-right: 0.4rem;
  }
}
</style>
