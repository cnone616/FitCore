<template>
  <div v-if="modelValue" class="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-2 sm:p-4" @click="emit('update:modelValue', false)">
    <div class="w-[900px] max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-y-auto preview-container" @click.stop ref="previewContent">
      <!-- 预览弹窗头部 -->
      <div class="sticky top-0 bg-white border-b border-gray-200 p-6">
        <div class="text-center">
          <h2 class="text-xl font-bold text-gray-800 mb-2">方案预览</h2>
          <p class="text-sm text-gray-600">预览内容即为保存的图片内容</p>
        </div>
      </div>
      
      <!-- 方案内容区域 -->
      <div class="p-6 space-y-6" ref="contentRoot">
        <!-- 方案标题 -->
        <div class="text-center">
          <div class="text-4xl mb-4">{{ nutritionStore.getPlanIcon(nutritionStore.currentPlan?.id || '') }}</div>
          <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ nutritionStore.currentPlan?.name || '方案名称' }}</h1>
          <p class="text-lg text-gray-600">{{ nutritionStore.currentPlan?.description || '方案描述' }}</p>
        </div>

        <!-- 基本信息与BMI -->
        <div class="bg-blue-50 rounded-lg p-4">
          <div>
            <p class="text-lg font-medium text-gray-800 mb-2">
              {{ nutritionStore.gender === 'male' ? '男' : '女' }} / 
              身高{{ nutritionStore.heightCm || '--' }}cm / 
              体重{{ nutritionStore.weightKg || '--' }}KG / 
              {{ nutritionStore.age || '--' }}岁
            </p>
            <p class="text-base text-gray-700">
              当前 BMI：{{ nutritionStore.calculatedBmi || '--' }}
              <span v-if="nutritionStore.calculatedBmiCategory" class="ml-2 text-sm">
                （{{ nutritionStore.calculatedBmiCategory }} 18.5–24｜超重 24–28｜肥胖 ＞28）
              </span>
            </p>
          </div>
        </div>

        <!-- 热量设计 -->
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span class="text-2xl mr-3">🔥</span>
            热量设计
          </h3>
          <div class="grid grid-cols-3 gap-4">
            <!-- 基础数据（与组件一致的列表展示） -->
            <div class="p-4 rounded-lg bg-gray-50">
              <div class="font-semibold text-gray-800 mb-2">基础数据</div>
              <div class="text-sm text-gray-600">基础代谢BMR：</div>
              <div class="mt-2 text-2xl font-semibold text-gray-900">{{ formatInt(nutritionStore.calculatedBmr || nutritionStore.bmrManual || 0) }}kcal/日</div>
              <div class="text-sm text-gray-600">无运动总消耗：</div>
              <div class="mt-2 text-2xl font-semibold text-gray-900">{{ formatInt(nutritionStore.calculatedMaintain || nutritionStore.maintainManual || 0) }}kcal/日</div>
              <div class="text-sm text-gray-600">力训消耗：</div>
              <div class="mt-2 text-2xl font-semibold text-gray-900">{{ formatInt(nutritionStore.strengthKcal || 0) }}kcal/日</div>
              <div class="text-sm text-gray-600">有氧消耗：</div>
              <div class="mt-2 text-2xl font-semibold text-gray-900">{{ formatInt(nutritionStore.cardioKcal || 0) }}kcal/日</div>
            </div>
            <!-- 平衡热量 -->
            <div class="p-4 rounded-lg bg-gray-50">
              <div class="font-semibold text-gray-800 mb-2">平衡热量</div>
              <div class="text-sm text-gray-600">力训日: </div>
              <div class="mt-2 text-2xl font-semibold text-gray-900">{{ formatInt(nutritionStore.balanceTrainKcal || 0) }} kcal/日</div>
              <div class="text-sm text-gray-600">休息日: </div>
              <div class="mt-2 text-2xl font-semibold text-gray-900">{{ formatInt(nutritionStore.balanceRestKcal || 0) }} kcal/日</div>
              <p class="text-xs mt-2 text-red-500">* 这是理论上的平衡热量，意即理论上这个饮食热量能让体重不变，力训日因为多了力训的热量消耗，所以力训日的平衡热量高一些</p>
            </div>
            <!-- 应吃热量 -->
            <div class="p-4 rounded-lg bg-gray-50">
              <div class="font-semibold text-gray-800 mb-2">应吃热量</div>
              <div class="text-sm text-gray-600">力训日: </div>
              <div class="mt-2 text-2xl font-semibold text-gray-900">{{ formatInt(nutritionStore.eatTrainKcal || 0) }} kcal/日</div>
              <div class="text-sm text-gray-600">休息日: </div>
              <div class="mt-2 text-2xl font-semibold text-gray-900">{{ formatInt(nutritionStore.eatRestKcal || 0) }} kcal/日</div>
            <p class="text-xs mt-2 text-red-500">{{ isMuscleGain ? ' * 干净增肌合适热量盈余取5%，应吃热量本该是平衡热量×1.05，但我们需要留出余地：一是因为研究表明人们在定量饮食里也会不自觉多吃约10-20%热量，二是因为下表有些食物的部分热量没有计入（如主食的蛋白质和脂肪），所以我们把应吃热量设计为理论平衡热量的1×1.05×0.8=0.84，算出的热量看似偏低，实际上你吃的热量是高于此数的，我们只是提前留了余地！' : ' * 减脂的合适热量缺口为20%，应吃热量本该是平衡热量×0.8，但我们需要留出余地：一是因为研究表明人们在定量饮食里也会不自觉多吃约10-20%热量，二是因为下表有些食物的部分热量没有计入（如主食的蛋白质和脂肪），所以我们把应吃热量设计为理论平衡热量的1×0.8×0.8=0.64，算出的热量看似很低，不要被吓到，实际上你吃的热量是高于此数的，我们只是提前留了余地！' }}</p>
            </div>
          </div>
        </div>

        <!-- 饮食总览（与组件一致） -->
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span class="text-2xl mr-3">🍽️</span>
            饮食总览
          </h3>
          <div v-if="!hasValidInputsDiet" class="text-sm text-yellow-700 bg-yellow-50 rounded-md p-3">
            身高/体重/年龄输入不完善，无法计算推荐摄入。
          </div>
          <div v-else-if="!hasRecNonZero" class="text-sm text-gray-600 bg-gray-50 rounded-md p-3">
            建议：当前条件下不建议进行减脂，暂不展示推荐摄入。
          </div>
          <div v-else class="space-y-6">
            <!-- 餐次分配：力训日/休息日 -->
            <div v-if="nutritionStore.currentPlan" class="grid grid-cols-2 gap-6">
              <!-- 力训日餐次分配 -->
              <div class="p-4 rounded-lg bg-gray-50">
                <div class="font-semibold text-gray-800 mb-4">力训日餐次分配</div>
                <div class="text-sm">
                  <div class="mt-2 font-semibold text-gray-900">碳水总额：{{ formatInt(trainCarbGrams) }} g/日</div>
                  <div class="mt-2 font-semibold text-gray-900 mb-2">蛋白质：{{ formatInt(trainProteinGrams) }} g/日</div>
                </div>
                <div class="grid grid-cols-1 gap-3">
                  <div v-for="(meal, key) in mealAllocations" :key="key" class="p-3 rounded border border-gray-200">
                    <div class="font-medium text-gray-900 mb-2">{{ meal.name }}</div>
                    <div class="text-sm space-y-1">
                      <div class="text-gray-600">碳水: <span class="text-gray-900 font-medium">{{ formatInt(meal.carbs) }}g</span></div>
                      <div class="text-gray-600">蛋白质: <span class="text-gray-900 font-medium">{{ formatInt(meal.protein) }}g</span></div>
                    </div>
                    <div v-if="meal.content" class="mt-2 text-xs text-gray-600" v-html="renderMealContent(meal.content)"></div>
                  </div>
                </div>
              </div>
              <!-- 休息日餐次分配 -->
              <div class="p-4 rounded-lg bg-gray-50">
                <div class="font-semibold text-gray-800 mb-4">休息日餐次分配</div>
                <div class="text-sm">
                  <div class="mt-2 font-semibold text-gray-900">碳水总额：{{ formatInt(restCarbGrams) }} g/日</div>
                  <div class="mt-2 font-semibold text-gray-900 mb-2">蛋白质：{{ formatInt(restProteinGrams) }} g/日</div>
                </div>
                <div class="grid grid-cols-1 gap-3">
                  <div v-for="key in ['breakfast','lunch','dinner','snacks']" :key="key" class="p-3 rounded border border-gray-200">
                    <div v-if="restDayMealAllocations[key]" class="font-medium text-gray-900 mb-2">{{ restDayMealAllocations[key].name }}</div>
                    <div v-if="restDayMealAllocations[key]" class="text-sm space-y-1">
                      <div class="text-gray-600">碳水: <span class="text-gray-900 font-medium">{{ formatInt(restDayMealAllocations[key].carbs) }}g</span></div>
                      <div class="text-gray-600">蛋白质: <span class="text-gray-900 font-medium">{{ formatInt(restDayMealAllocations[key].protein) }}g</span></div>
                    </div>
                    <div v-if="restDayMealAllocations[key]?.content" class="mt-2 text-xs text-gray-600" v-html="renderMealContent(restDayMealAllocations[key].content)"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 脂肪与蔬果提示（与组件一致文本） -->
            <div class="p-4 rounded-lg bg-gray-50 text-left">
              <div class="font-semibold text-gray-800 mb-3">脂肪</div>
              <div class="space-y-2 text-sm">
                <div class="text-gray-600">男性60g（120kg体重以上加到70g） 女性50g</div>
                <p>脂肪这样吃↓</p>
                <p>【推荐模式】早饭吃蛋黄牛奶+正餐吃大众带油菜=脂肪摄入基本合适</p>
                <p class="text-red-500">* 所谓吃“大众带油菜”，就是像黄焖鸡、酸菜鱼、鱼香肉丝、小炒牛肉等家常瘦肉菜，不要害怕菜里的油，但必须是瘦肉，高脂肉会导致脂肪超标（下面讲了什么是瘦肉，什么是高脂肉）</p>
                <p>【脂肪缺乏1】早饭不吃蛋黄牛奶，会比推荐模式少吃约10-20g脂肪摄入，请全天补吃20g坚果或3个蛋黄</p>
                <p>【脂肪缺乏2】午饭晚饭吃低油无油菜（卤肉、炖肉、清炒、清炖、轻食、水煮），会比推荐模式少吃约20g脂肪摄入，请全天补吃30g坚果或4个蛋黄</p>
                <p>脂肪这样尽量不吃↓</p>
                <p>【高脂肉】鸡鸭皮、大排、糖醋里脊、锅包肉、鸡翅、猪蹄、牛腩、牛排、排骨、烤肉、炸肉、午餐肉、肥牛、肥羊、肉肠、肉饼、肉馅、肉丸</p>
                <p class="text-red-500">* 瘦肉只有：①没有白色脂肪层的猪牛羊肉  ②去皮的鸡鸭肉 ③鱼虾贝 ④肝肾肚血心</p>
                <p>【糖油混合物】饼干、蛋糕、点心、糕点、甜品、油条、煎饼、花式面包、膨化食品等</p>
                <p class="text-red-500">* 糖油混合物的脂肪率20-40%，吃200克就能耗完全天脂肪配额，只能偶尔吃点解馋</p>
                <p class="text-red-500">* 食堂外卖的宽油炒鸡蛋，每个鸡蛋的蛋白质只有6g，脂肪或高达20g以上，非常占据脂肪配额</p>
              </div>
            </div>

            <div class="p-4 rounded-lg bg-gray-50 text-left">
              <div class="font-semibold text-gray-800 mb-3">蔬菜/水果</div>
              <div class="space-y-2 text-sm">
                <div class="text-gray-600">蔬菜: </div>
                <p>【蔬菜不用定量】蔬菜碳水率很低，为免麻烦不用定量，争取每天都能吃一些</p>
                <p class="text-red-500">* 吃蔬菜的顺序：一般各餐，先吃、多吃蔬菜，后吃碳水，能压制胰岛素，帮助减脂；但力训的练后餐则相反，建议先吃碳水和蛋白质，少吃、后吃蔬菜，避免胰岛素被压制</p>
                <p>【这些不是蔬菜】红薯（20%）、土豆（18%）、玉米（18%）、山药（13%）、芋头（13%）是碳水主食，括号数字是其碳水率</p>
                <div class="text-gray-600">水果: </div>
                <p>水果必须置换主食</p>
                <p>【水果要算碳水】水果实质是糖水，糖量可观，糖是碳水的一种形式，所以要计入碳水量来置换碳水那列的主食</p>
                <p class="text-red-500">*苹果/橙子/香蕉：20-30g碳水/个；梨子/蓝莓/猕猴桃：碳水率14%；柚子/桃子/葡萄/菠萝：碳水率10%；西瓜/蜜瓜/草莓：碳水率7%</p>
                <p>【置换主食的办法】吃水果的10g碳水=主食少吃30g熟米饭</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 动态渲染的章节（3列排布） -->
        <div :class="isMuscleGain ? 'grid grid-cols-2 gap-6' : 'grid grid-cols-3 gap-6'">
          <div v-for="section in (isMuscleGain ? muscleGainSections : nutritionStore.fatLossSections)" :key="section.id" class="bg-gray-50 rounded-lg p-6 text-left h-full">
            <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span class="text-2xl mr-3">{{ section.icon }}</span>
              {{ section.title }}
            </h3>
            <div class="space-y-4">
              <div v-for="item in section.items" :key="item.title">
                <div class="font-semibold text-gray-800 mb-1" :class="{ 'text-red-500': item.isImportant }">{{ item.title }}</div>
                <p class="text-gray-600 whitespace-pre-line" v-html="item.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="sticky bottom-0 bg-white border-t border-gray-200 p-6">
        <div class="text-center space-x-3">
          
          <button 
            @click="captureByHook" 
            class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"
          >
            生成图片
          </button>
          <button 
            @click="emit('update:modelValue', false)" 
            class="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useNutritionStore } from '@/stores/nutrition';
import { useScreenshot } from './useScreenshot';
import { maleFatLossData, femaleFatLossData, type FatLossData } from '@/views/nutrition/fat-loss/nutrition-data';
import { muscleGainSections } from '@/views/nutrition/muscle-gain/sections-data';

interface Props {
  modelValue: boolean;
  fileName?: string;
}
const props = defineProps<Props>();
const emit = defineEmits<{ 
  (e: 'update:modelValue', v: boolean): void;
  (e: 'imageGenerated', url: string, fileName: string): void;
}>();

const previewContent = ref<HTMLElement | null>(null);
const contentRoot = ref<HTMLElement | null>(null);
const nutritionStore = useNutritionStore();
const route = useRoute();
const isMuscleGain = computed(() => route.path.includes('/nutrition/muscle-gain'));
const { capture: captureHook } = useScreenshot();

// 预览只读取当前内存中的最新数据，不再二次初始化以免覆盖

// 辅助：整数格式化
function formatInt(v: number | string | null | undefined): string {
  const n = typeof v === 'string' ? parseFloat(v) : (v ?? 0);
  if (!isFinite(n as number)) return '--';
  return Math.round(n as number).toString();
}

// ===== 饮食总览 与组件保持一致的计算 =====
const hasValidInputsDiet = computed(() => !!(nutritionStore.heightCm && nutritionStore.weightKg && nutritionStore.age));

function rHasNonZero(r: FatLossData): boolean {
  return (r.trainingDayCarbs || 0) > 0 && (r.restDayCarbs || 0) > 0 && (r.dailyProtein || 0) > 0;
}

function findRecommended(g: 'male' | 'female', weight: number | null, height: number | null): FatLossData | null {
  if (!weight || !height) return null;
  const list = g === 'male' ? maleFatLossData : femaleFatLossData;
  const w0 = Math.round(weight);
  const h0 = Math.round(height);
  const exact = list.find(r => r.weight === w0 && r.height === h0);
  if (exact && rHasNonZero(exact)) return exact;
  let best: FatLossData | null = null;
  let bestScore = Number.POSITIVE_INFINITY;
  for (const r of list) {
    if (!rHasNonZero(r)) continue;
    const score = Math.abs(r.weight - w0) * 10 + Math.abs(r.height - h0);
    if (score < bestScore) { bestScore = score; best = r; }
  }
  if (best) return best;
  if (exact) return exact;
  let bestAny: FatLossData | null = null;
  let bestAnyScore = Number.POSITIVE_INFINITY;
  for (const r of list) {
    const score = Math.abs(r.weight - w0) * 10 + Math.abs(r.height - h0);
    if (score < bestAnyScore) { bestAnyScore = score; bestAny = r; }
  }
  return bestAny;
}

const recommended = computed(() => findRecommended(nutritionStore.gender, nutritionStore.weightKg, nutritionStore.heightCm));
const hasRecNonZero = computed(() => !!(recommended.value && rHasNonZero(recommended.value)));

const bodyWeight = computed(() => nutritionStore.weightKg || 0);
const trainCarbGrams = computed(() => bodyWeight.value * (recommended.value?.trainingDayCarbs ?? 0));
const restCarbGrams = computed(() => bodyWeight.value * (recommended.value?.restDayCarbs ?? 0));
const trainProteinGrams = computed(() => bodyWeight.value * (recommended.value?.dailyProtein ?? 0));
const restProteinGrams = trainProteinGrams;

// 力训日餐次分配
const mealAllocations = computed(() => {
  const plan = nutritionStore.currentPlan;
  if (!plan || !hasRecNonZero.value) return {} as Record<string, { name: string; carbs: number; protein: number; content: string }>;
  const meals = ['firstcan', 'secondcan', 'thirdcan', 'fourthcan', 'fifthcan'] as const;
  const allocations: Record<string, { name: string; carbs: number; protein: number; content: string }> = {};
  meals.forEach(mealKey => {
    const meal = (plan as any)[mealKey];
    if (meal) {
      allocations[mealKey] = {
        name: meal.name,
        carbs: trainCarbGrams.value * parseFloat(meal.tanshu),
        protein: trainProteinGrams.value * parseFloat(meal.danbaizhi),
        content: meal.content
      };
    }
  });
  return allocations;
});

// 休息日餐次分配
const restDayMealAllocations = computed(() => {
  const plan = nutritionStore.currentPlan;
  if (!plan || !hasRecNonZero.value) return {} as Record<string, { name: string; carbs: number; protein: number; content: string }>;
  const allocations: Record<string, { name: string; carbs: number; protein: number; content: string }> = {};
  const breakfast = (plan as any).firstcan;
  const snacks = (plan as any).fifthcan;
  if (breakfast) {
    allocations.breakfast = {
      name: '早餐',
      carbs: restCarbGrams.value * parseFloat(breakfast.tanshu),
      protein: restProteinGrams.value * parseFloat(breakfast.danbaizhi),
      content: breakfast.content
    };
  }
  if (snacks) {
    allocations.snacks = {
      name: '零食/夜宵',
      carbs: restCarbGrams.value * parseFloat(snacks.tanshu),
      protein: restProteinGrams.value * parseFloat(snacks.danbaizhi),
      content: snacks.content
    };
  }
  const breakfastCarbs = allocations.breakfast?.carbs || 0;
  const breakfastProtein = allocations.breakfast?.protein || 0;
  const snacksCarbs = allocations.snacks?.carbs || 0;
  const snacksProtein = allocations.snacks?.protein || 0;
  const remainingCarbs = restCarbGrams.value - breakfastCarbs - snacksCarbs;
  const remainingProtein = restProteinGrams.value - breakfastProtein - snacksProtein;
  allocations.lunch = { name: '中餐', carbs: remainingCarbs / 2, protein: remainingProtein / 2, content: '* 中餐和晚餐平分剩余配额' };
  allocations.dinner = { name: '晚餐', carbs: remainingCarbs / 2, protein: remainingProtein / 2, content: '* 中餐和晚餐平分剩余配额' };
  return allocations;
});

function renderMealContent(text: string): string {
  if (!text) return '';
  return text
    .split('\n')
    .map(line => {
      const trimmed = line.replace(/^\s+/, '');
      if (/^[＊*]/.test(trimmed)) {
        // 直接输出内联颜色，避免依赖类名在截图时丢失
        return `<span style="color:#ef4444">${escapeHtml(line)}</span>`;
      }
      return escapeHtml(line);
    })
    .join('<br>');
}
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function captureByHook() {
  const target = contentRoot.value || previewContent.value;
  if (!target) return;
  const result = await captureHook(target, props.fileName || 'plan');
  if (result && result.url) {
    // 向外通知
    emit('imageGenerated', result.url, result.fileName);
    // 直接下载
    const a = document.createElement('a');
    a.href = result.url;
    a.download = result.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // 关闭弹窗
    emit('update:modelValue', false);
  }
}
</script>

<style scoped>
/* 确保预览窗口始终保持PC端样式，不受响应式影响 */
.preview-container {
  /* 固定宽度，不响应屏幕大小 */
  width: 900px !important;
  min-width: 900px;
  max-width: 900px;
  
  /* 确保内容不会因为屏幕大小而改变布局 */
  font-size: 14px;
  line-height: 1.5;
}

/* 强制所有子元素使用固定样式 */
.preview-container * {
  /* 禁用响应式字体大小 */
  font-size: inherit !important;
}

/* 确保表格和卡片保持固定布局 */
.preview-container .bg-gray-50,
.preview-container .bg-blue-50,
.preview-container .bg-surface {
  /* 固定内边距 */
  padding: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

/* 确保标题大小固定 */
.preview-container h1 {
  font-size: 1.875rem !important; /* text-3xl */
  font-weight: 700 !important;
}

.preview-container h3 {
  font-size: 1.25rem !important; /* text-xl */
  font-weight: 600 !important;
}

/* 确保按钮大小固定 */
.preview-container button {
  padding: 0.5rem 1.5rem !important;
  font-size: 0.875rem !important;
}

/* 确保输入框和表单元素保持固定大小 */
.preview-container input,
.preview-container select,
.preview-container textarea {
  font-size: 0.875rem !important;
  padding: 0.5rem !important;
}

/* 确保间距固定 */
.preview-container .space-y-6 > * + * {
  margin-top: 1.5rem !important;
}

.preview-container .space-y-4 > * + * {
  margin-top: 1rem !important;
}

/* 确保flex布局保持固定 */
.preview-container .flex {
  display: flex !important;
}

.preview-container .flex-col {
  flex-direction: column !important;
}

.preview-container .items-center {
  align-items: center !important;
}

.preview-container .justify-center {
  justify-content: center !important;
}

/* 确保文本对齐固定 */
.preview-container .text-center {
  text-align: center !important;
}

/* 确保圆角和阴影固定 */
.preview-container .rounded-lg {
  border-radius: 0.5rem !important;
}

.preview-container .shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
}

/* 小屏幕适配 - 确保预览窗口在小屏幕上也能正确显示 */
@media (max-width: 1024px) {
  .preview-container {
    /* 在小屏幕上稍微缩小，但仍然保持PC端样式 */
    width: 95vw !important;
    max-width: 900px !important;
    min-width: 800px !important;
  }
}

@media (max-width: 768px) {
  .preview-container {
    /* 在手机上强制保持固定宽度，允许横向滚动 */
    width: 900px !important;
    max-width: 900px !important;
    min-width: 900px !important;
  }
  
  /* 确保外层容器可以横向滚动 */
  .fixed.inset-0 {
    overflow-x: auto !important;
  }
}

/* 确保预览窗口内容不会被压缩 */
.preview-container .space-y-6 {
  min-height: auto !important;
}

/* 强制保持所有元素的固定尺寸 */
.preview-container .text-4xl {
  font-size: 2.25rem !important; /* 36px */
}

.preview-container .text-3xl {
  font-size: 1.875rem !important; /* 30px */
}

.preview-container .text-xl {
  font-size: 1.25rem !important; /* 20px */
}

.preview-container .text-lg {
  font-size: 1.125rem !important; /* 18px */
}

.preview-container .text-base {
  font-size: 1rem !important; /* 16px */
}

.preview-container .text-sm {
  font-size: 0.875rem !important; /* 14px */
}

/* 截图模式特殊样式 - 确保截图时样式正确 */
.preview-container.screenshot-mode {
  /* 强制应用所有样式 */
  width: 900px !important;
  min-width: 900px !important;
  max-width: 900px !important;
  
  /* 确保截图时显示完整内容 - 只在截图时应用 */
  max-height: none !important;
  height: auto !important;
  min-height: fit-content !important;
  overflow: visible !important;
  
  /* 确保背景色正确 */
  background-color: #ffffff !important;
  
  /* 确保所有文本颜色正确 */
  color: #1f2937 !important; /* text-gray-800 */
}

/* 截图期间全局禁用响应式与居中影响，保证PC宽度排版 */
:global(html.screenshot-capture) body {
  width: 900px !important;
  margin: 0 auto !important;
}
:global(html.screenshot-capture) .container,
:global(html.screenshot-capture) .mx-auto,
:global(html.screenshot-capture) .text-center {
  margin-left: 0 !important;
  margin-right: 0 !important;
  text-align: left !important;
}
:global(html.screenshot-capture) .justify-center {
  justify-content: flex-start !important;
}
:global(html.screenshot-capture) .items-center {
  align-items: flex-start !important;
}

/* 正常模式 - 确保平时可以正常滚动 */
.preview-container:not(.screenshot-mode) {
  overflow-y: auto !important;
  max-height: 90vh !important;
}

.preview-container.screenshot-mode * {
  /* 强制所有元素使用正确的颜色 */
  color: inherit !important;
  background-color: inherit !important;
}

/* 确保截图时卡片背景色正确 */
.preview-container.screenshot-mode .bg-blue-50 {
  background-color: #eff6ff !important;
}

.preview-container.screenshot-mode .bg-gray-50 {
  background-color: #f9fafb !important;
}

.preview-container.screenshot-mode .bg-surface {
  background-color: #ffffff !important;
}

/* 确保截图时文本颜色正确 */
.preview-container.screenshot-mode .text-gray-800 {
  color: #1f2937 !important;
}

.preview-container.screenshot-mode .text-gray-700 {
  color: #374151 !important;
}

.preview-container.screenshot-mode .text-gray-600 {
  color: #4b5563 !important;
}

/* 确保截图时边框颜色正确 */
.preview-container.screenshot-mode .border-gray-200 {
  border-color: #e5e7eb !important;
}

/* 预览中加深边框以便截图更清晰 */
.preview-container .border { 
  border-width: 2px !important; 
}
.preview-container .border-gray-200 {
  border-color: #6b7280 !important; /* 灰-500，更深更清晰 */
}
.dark .preview-container .border-gray-600 {
  border-color: #374151 !important; /* 灰-700，深色模式更清晰 */
}

/* 确保截图时按钮样式正确 */
.preview-container.screenshot-mode button {
  background-color: #2563eb !important;
  color: #ffffff !important;
  border: none !important;
}

/* 确保截图时 sticky 元素不影响布局 */
.preview-container.screenshot-mode .sticky {
  position: static !important;
}

/* 本页显式文本颜色（不依赖 Tailwind，避免截图时颜色丢失） */
.text-gray-900 { color: #111827 !important; }
.text-gray-800 { color: #1f2937 !important; }
.text-gray-700 { color: #374151 !important; }
.text-gray-600 { color: #4b5563 !important; }
.text-gray-500 { color: #6b7280 !important; }
.text-red-500  { color: #ef4444 !important; }
.text-blue-600 { color: #2563eb !important; }
</style>

<style>
/* 非 scoped：用于 v-html 注入内容的颜色类，确保截图前后都能生效 */
.text-red-500  { color: #ef4444 !important; }
.text-gray-900 { color: #111827 !important; }
.text-gray-800 { color: #1f2937 !important; }
.text-gray-700 { color: #374151 !important; }
.text-gray-600 { color: #4b5563 !important; }
.text-gray-500 { color: #6b7280 !important; }
</style>


