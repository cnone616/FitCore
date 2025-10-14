<template>
  <div class="exercise-library-page">
    <!-- 顶部搜索栏 -->
    <div class="header-section">
      <div class="search-bar">
        <div class="search-input">
          <span class="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="输入动作名字搜索"
            v-model="searchQuery"
            class="search-field"
          />
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 左侧分类导航 -->
      <div class="sidebar">
        <div class="category-list">
          <div 
            v-for="category in exerciseCategories" 
            :key="category.id"
            class="category-item"
            :class="{ 
              active: selectedCategory === category.id && category.subcategories.length === 0,
              'has-subcategories': category.subcategories.length > 0
            }"
            @click="selectCategory(category.id)"
          >
            <div class="category-main">
              <span class="category-name">{{ category.name }}</span>
              <!-- 展开/折叠图标 -->
              <span 
                v-if="category.subcategories.length > 0" 
                class="expand-icon"
                :class="{ expanded: selectedCategory === category.id }"
              >
                ▶
              </span>
            </div>
            <!-- 子分类（只有选中时才展开） -->
            <div 
              v-if="selectedCategory === category.id && category.subcategories.length > 0"
              class="subcategory-list"
            >
              <div 
                v-for="subcategory in category.subcategories" 
                :key="subcategory.id"
                class="subcategory-item"
                :class="{ 
                  active: selectedSubcategory === subcategory.id 
                }"
                @click.stop="selectSubcategory(subcategory.id)"
              >
                {{ subcategory.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧内容区域 -->
      <div class="content-area" ref="contentAreaRef">
        <!-- 器械过滤标签 -->
        <div class="equipment-filters">
          <div class="filter-tabs">
            <button
              v-for="equipment in equipmentTypes"
              :key="equipment.id"
              class="filter-tab"
              :class="{ active: selectedEquipment === equipment.id }"
              @click="scrollToEquipment(equipment.id)"
            >
              {{ equipment.name }}
            </button>
          </div>
        </div>

        <!-- 动作展示区域 -->
        <div class="exercises-display">
          <!-- 按器械分组显示 -->
          <div
            v-for="equipmentGroup in currentExercises"
            :key="equipmentGroup.category"
            :id="`equipment-${equipmentGroup.category}`"
            class="equipment-section"
          >
            <h3 class="equipment-title">{{ equipmentGroup.chineseName }}</h3>
            <div class="exercises-grid">
              <div 
                v-for="exercise in equipmentGroup.exercises" 
                :key="exercise.id"
                class="exercise-card"
                @click="goToExerciseDetail(exercise)"
              >
                <!-- 动作图片/视频区域 -->
                <div class="exercise-media">
                  <div class="media-placeholder">
                    <span class="media-icon">🏋️‍♂️</span>
                    <span class="media-text">动作图示</span>
                  </div>
                  <!-- 标签 -->
                  <div class="exercise-tags">
                    <span class="tag explanation" v-if="exercise.description">讲解</span>
                    <!-- <span class="tag count" v-if="exercise.count">{{ exercise.count }}次</span> -->
                  </div>
                </div>
                <!-- 动作名称 -->
                <div class="exercise-info">
                  <h4 class="exercise-name">{{ exercise.chineseName }}</h4>
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import type { EquipmentCategory } from '@/types/fitness-data';
import { chestExerciseData, chestExerciseDataDetailed } from '@/data/exercises/chest';
import { backExerciseData } from '@/data/exercises/back';
import { shouldersExerciseData } from '@/data/exercises/shoulders';
import { bicepsExerciseData } from '@/data/exercises/biceps';
import { tricepsExerciseData } from '@/data/exercises/triceps';
import { legsExerciseData } from '@/data/exercises/legs';
import { absExerciseData } from '@/data/exercises/abs';

const router = useRouter();

// 响应式数据
const searchQuery = ref('');
const selectedCategory = ref('chest');
const selectedSubcategory = ref('upper-chest');
const contentAreaRef = ref<HTMLElement | null>(null);

// 动作分类数据
const exerciseCategories = ref([
  {
    id: 'chest',
    name: '胸',
    subcategories: [
      { id: 'upper-chest', name: '上胸' },
      { id: 'middle-lower-chest', name: '中下胸' }
    ]
  },
  {
    id: 'back',
    name: '背',
    subcategories: [
      { id: 'upper-back', name: '上背' },
      { id: 'lower-back', name: '下背' }
    ]
  },
  {
    id: 'legs',
    name: '腿',
    subcategories: [
      { id: 'quadriceps', name: '股四头肌' },
      { id: 'hamstrings', name: '腘绳肌' }
    ]
  },
  {
    id: 'shoulders',
    name: '肩',
    subcategories: [
      { id: 'front-delts', name: '前束' },
      { id: 'middle-delts', name: '中束' },
      { id: 'rear-delts', name: '后束: ' }
    ]
  },
  {
    id: 'traps',
    name: '斜方肌',
    subcategories: []
  },
  {
    id: 'biceps',
    name: '二头',
    subcategories: []
  },
  {
    id: 'triceps',
    name: '三头',
    subcategories: []
  },
  {
    id: 'calves',
    name: '小腿',
    subcategories: []
  },
  {
    id: 'forearms',
    name: '前臂',
    subcategories: []
  },
  {
    id: 'neck',
    name: '颈部',
    subcategories: []
  },
  {
    id: 'glutes',
    name: '臀部',
    subcategories: []
  },
  {
    id: 'functional',
    name: '功能性',
    subcategories: [
      { id: 'hip-mobility', name: '髋关节' },
      { id: 'knee-mobility', name: '膝关节' },
      { id: 'shoulder-mobility', name: '肩关节' }
    ]
  },
  {
    id: 'core',
    name: '核心稳定',
    subcategories: []
  },
  {
    id: 'abs',
    name: '腹部',
    subcategories: [
      { id: 'upper-abs', name: '上腹' },
      { id: 'lower-abs', name: '下腹' }
    ]
  },
  {
    id: 'warmup',
    name: '热身动作',
    subcategories: []
  }
]);

// 器械类型
const equipmentTypes = ref([
  { id: 'pinned', name: '置顶' },
  { id: 'barbell', name: '杠铃' },
  { id: 'dumbbell', name: '哑铃' },
  { id: 'kettlebell', name: '壶铃' },
  { id: 'cable', name: '绳索' },
  { id: 'hammer', name: '悍马机' },
  { id: 'smith', name: '史密斯' },
  { id: 'machine', name: '器械' },
  { id: 'bodyweight', name: '自重' },
  { id: 'other', name: '其他' }
]);

const selectedEquipment = ref('barbell');

const chestSubcategoryMap = chestExerciseDataDetailed.reduce<Record<string, EquipmentCategory[]>>((acc, item) => {
  if (item.muscleRegion) {
    acc[item.muscleRegion] = item.equipmentCategories;
  }
  return acc;
}, {});

const categoryExerciseData: Record<string, { default: EquipmentCategory[]; subcategories?: Record<string, EquipmentCategory[]> }> = {
  chest: {
    default: chestExerciseData.equipmentCategories,
    subcategories: chestSubcategoryMap
  },
  back: {
    default: backExerciseData.equipmentCategories
  },
  shoulders: {
    default: shouldersExerciseData.equipmentCategories
  },
  biceps: {
    default: bicepsExerciseData.equipmentCategories
  },
  triceps: {
    default: tricepsExerciseData.equipmentCategories
  },
  legs: {
    default: legsExerciseData.equipmentCategories
  },
  abs: {
    default: absExerciseData.equipmentCategories
  }
};

const getCategoryName = (categoryId: string): string => {
  const categoryMap: Record<string, string> = {
    'chest': '胸部',
    'back': '背部',
    'legs': '腿部',
    'shoulders': '肩部',
    'traps': '斜方肌',
    'biceps': '二头肌',
    'triceps': '三头肌',
    'calves': '小腿',
    'forearms': '前臂',
    'neck': '颈部',
    'glutes': '臀部',
    'functional': '功能性',
    'core': '核心',
    'abs': '腹部',
    'warmup': '热身'
  };
  return categoryMap[categoryId] || categoryId;
};

const buildPlaceholder = (categoryId: string): EquipmentCategory[] => [
  {
    category: 'placeholder',
    chineseName: `${getCategoryName(categoryId)}动作`,
    exercises: [
      {
        id: `${categoryId}-placeholder`,
        name: `${categoryId} Placeholder`,
        chineseName: `${getCategoryName(categoryId)}动作数据开发中`,
        primaryMuscles: [],
        equipment: ['none'],
        difficulty: 'intermediate',
        description: `${getCategoryName(categoryId)}动作数据暂未添加`,
        instructions: ['数据开发中'],
        count: '0'
      }
    ]
  }
];

// 当前显示的动作数据
const currentExercises = computed(() => {
  const categoryId = selectedCategory.value;
  const config = categoryExerciseData[categoryId];

  if (config) {
    const subcategoryId = selectedSubcategory.value;
    const subcategoryData = config.subcategories?.[subcategoryId];
    if (subcategoryData && subcategoryData.length > 0) {
      return subcategoryData;
    }

    if (config.default.length > 0) {
      return config.default;
    }
  }

  return buildPlaceholder(categoryId);
});

// 方法
const selectCategory = (categoryId: string) => {
  const category = exerciseCategories.value.find(c => c.id === categoryId);
  
  // 如果没有子分类，直接选中该分类
  if (!category || category.subcategories.length === 0) {
    selectedCategory.value = categoryId;
    selectedSubcategory.value = categoryId;
    return;
  }
  
  // 如果有子分类
  selectedCategory.value = categoryId;
  // 默认选择第一个子分类
  if (category.subcategories.length > 0) {
    selectedSubcategory.value = category.subcategories[0].id;
  }
};

const selectSubcategory = (subcategoryId: string) => {
  selectedSubcategory.value = subcategoryId;
};

// 滚动到指定器械分类（锚点效果）
const scrollToEquipment = (equipmentId: string) => {
  selectedEquipment.value = equipmentId;

  const targetElement = document.getElementById(`equipment-${equipmentId}`);
  if (targetElement && contentAreaRef.value) {
    const container = contentAreaRef.value;
    const targetOffset = targetElement.offsetTop - container.offsetTop;

    // 滚动到目标位置，减去sticky header的高度(约80px)
    container.scrollTo({
      top: targetOffset - 80,
      behavior: 'smooth'
    });
  }
};

// 滚动监听 - 自动高亮当前可见的器械分类
const handleScroll = () => {
  if (!contentAreaRef.value) return;

  const container = contentAreaRef.value;
  const scrollTop = container.scrollTop;
  const sections = document.querySelectorAll('.equipment-section');

  // 找到当前滚动位置对应的section
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = (section as HTMLElement).offsetTop - container.offsetTop - 100;
    if (scrollTop >= sectionTop) {
      const id = section.getAttribute('id');
      if (id) {
        currentSection = id.replace('equipment-', '');
      }
    }
  });

  if (currentSection && currentSection !== selectedEquipment.value) {
    selectedEquipment.value = currentSection;
  }
};

// 生命周期钩子
onMounted(() => {
  if (contentAreaRef.value) {
    contentAreaRef.value.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (contentAreaRef.value) {
    contentAreaRef.value.removeEventListener('scroll', handleScroll);
  }
});

// 点击动作卡片跳转到详情页
const goToExerciseDetail = (exercise: any) => {
  router.push(`/training/exercises/detail?id=${encodeURIComponent(exercise.id)}`);
};
</script>

<style scoped>
.exercise-library-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f8f9fa;
}

/* 顶部搜索栏 */
.header-section {
  background: white;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-input {
  flex: 1;
  display: flex;
  align-items: center;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 8px 12px;
}

.search-icon {
  margin-right: 8px;
  color: #6b7280;
}

.search-field {
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  color: #374151;
}

.search-field::placeholder {
  color: #9ca3af;
}

.add-button .add-btn {
  background: #10b981;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: background-color 0.2s;
}

.add-btn:hover {
  background: #059669;
}

.add-icon {
  font-size: 18px;
  font-weight: bold;
}

/* 主要内容区域 */
.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* 左侧分类导航 */
.sidebar {
  width: 160px;
  background: white;
  border-right: 1px solid #e5e7eb;
  overflow-y: auto;
}

.category-list {
  padding: 0.5rem 0;
}

.category-item {
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-item:hover {
  background: #f3f4f6;
}

.category-item {
  border-left: 3px solid white;
}

.category-item.active {
  background: white;
  color: #374151;
  border-left: 3px solid #10b981;
}

.category-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  font-weight: 600;
}

.category-name {
  flex: 1;
}

.expand-icon {
  font-size: 0.8rem;
  transition: transform 0.2s ease;
  color: #6b7280;
}

.expand-icon.expanded {
  transform: rotate(90deg);
}

.subcategory-list {
  background: white;
  padding: 0.25rem 0;
}

.subcategory-item {
  padding: 0.25rem 0 0.25rem 2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
}

.subcategory-item:hover {
  background: white;
}

.subcategory-item {
  border-left: 2px solid white;
}

.subcategory-item.active {
  background: white;
  color: #374151;
  border-left: 2px solid #10b981;
}

/* 右侧内容区域 */
.content-area {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

/* 器械过滤标签 */
.equipment-filters {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #f8f9fa;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  /* 隐藏滚动条但保持滚动功能 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.filter-tabs::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.filter-tab {
  background: #f3f4f6;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  color: #374151;
}

.filter-tab:hover {
  background: #e5e7eb;
}

.filter-tab.active {
  background: #10b981;
  color: white;
}

/* 动作展示区域 */

.equipment-section {
  margin-bottom: 2rem;
}

.equipment-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #374151;
}

.exercises-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.exercise-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.exercise-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.exercise-media {
  position: relative;
  aspect-ratio: 1;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
}

.media-icon {
  font-size: 2rem;
}

.media-text {
  font-size: 0.875rem;
}

.exercise-tags {
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  gap: 0.25rem;
}

.tag {
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.tag.explanation {
  background: #10b981;
  color: white;
}

.tag.count {
  background: #6b7280;
  color: white;
}

.exercise-info {
  padding: 0.75rem;
}

.exercise-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin: 0;
  line-height: 1.4;
}

/* 响应式设计 */

/* 平板端适配 */
@media (max-width: 1024px) {
  .sidebar {
    width: 180px;
  }
  
  .exercises-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

/* 移动端适配 */
@media (max-width: 768px) {
  .main-content {
    flex-direction: row; /* 保持左右布局 */
  }
  
  .sidebar {
    width: 80px; /* 移动端缩小侧边栏 */
  }
  
  .content-area {
    padding: 0.5rem; /* 缩小内容区域padding */
  }
  
  .exercises-grid {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 0.5rem; /* 缩小间距 */
  }
  
  .category-main {
    padding: 0.3rem 0.4rem; /* 缩小分类项padding */
    font-size: 12px; /* 设置12px字体 */
  }
  
  .subcategory-item {
    padding: 0.25rem 0 0.25rem 1rem;
    font-size: 0.7rem; /* 次要分类字体更小 */
  }
  
  .header-section {
    padding: 0.5rem;
  }
  
  .search-field {
    font-size: 0.8rem;
  }
  
  .equipment-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .filter-tab {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}

/* 小屏手机适配 */
@media (max-width: 480px) {
  .sidebar {
    width: 80px; /* 侧边栏更窄 */
  }
  
  .exercises-grid {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 0.4rem;
  }
  
  .exercise-card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .exercise-card:hover {
    transform: none; /* 移动端禁用hover效果 */
  }
  
  .category-main {
    padding: 0.25rem 0.3rem;
    font-size: 12px;
  }
  
  .subcategory-item {
    padding: 0.2rem 0 0.2rem 0.8rem;
    font-size: 0.65rem;
  }
  
  .exercise-name {
    font-size: 0.75rem;
  }
  
  .media-icon {
    font-size: 1.2rem;
  }
  
  .media-text {
    font-size: 0.7rem;
  }
  
  .filter-tabs {
    gap: 0.25rem;
    padding-bottom: 0.25rem;
  }
  
  .filter-tab {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }
}
</style>
