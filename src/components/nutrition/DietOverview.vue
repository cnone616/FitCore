<template>
  <div class="bg-surface rounded-lg shadow-lg p-6 mb-8">
    <h3 class="text-xl font-semibold text-fg mb-6 flex items-center">
      <span class="text-2xl mr-3">📋</span>
      饮食总览
    </h3>
    <div v-if="!hasValidInputs" class="text-sm text-yellow-700 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-900/30 rounded-md p-3">
      身高/体重/年龄输入不完善，无法计算推荐摄入。
    </div>
    <div v-else-if="!hasRecNonZero" class="text-sm text-fg-muted bg-subtle rounded-md p-3">
      建议：当前条件下不建议进行{{ mode === 'muscle-gain' ? '增肌' : '减脂' }}，暂不展示推荐摄入。
    </div>
    <div v-else class="space-y-6">

      <!-- 餐次分配 -->
      <div v-if="plan" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- 力训日餐次分配 -->
        <div class="p-4 rounded-lg bg-subtle">
          <div class="font-semibold text-fg mb-4">力训日餐次分配</div>
          <div class="text-sm">
            <div class="mt-2 font-semibold text-fg">碳水总额：{{ formatInt(trainCarbGrams) }} g/日</div>
            <div class="mt-2 font-semibold text-fg mb-2">蛋白质：{{ formatInt(trainProteinGrams) }} g/日</div>
          </div>
          <div class="grid grid-cols-1 gap-3">
            <div v-for="(meal, key) in mealAllocations" :key="key" class="p-3 rounded border border-gray-200 dark:border-gray-600">
              <div class="font-medium text-fg mb-2">{{ meal.name }}</div>
              <div class="text-sm space-y-1">
                <div class="text-fg-muted">碳水: <span class="text-fg font-medium">{{ formatInt(meal.carbs) }}g</span></div>
                <div class="text-fg-muted">蛋白质: <span class="text-fg font-medium">{{ formatInt(meal.protein) }}g</span></div>
              </div>
              <div v-if="meal.content" class="mt-2 text-xs text-fg-muted" v-html="renderMealContent(meal.content)"></div>
            </div>
          </div>
        </div>

        <!-- 休息日餐次分配 -->
        <div class="p-4 rounded-lg bg-subtle">
          <div class="font-semibold text-fg mb-4">休息日餐次分配</div>
          <div class="text-sm">
            <div class="mt-2 font-semibold text-fg">碳水总额：{{ formatInt(restCarbGrams) }} g/日</div>
            <div class="mt-2 font-semibold text-fg mb-2">蛋白质：{{ formatInt(restProteinGrams) }} g/日</div>
          </div>
          <div class="grid grid-cols-1 gap-3">
            <div v-for="key in ['breakfast', 'lunch', 'dinner', 'snacks']" :key="key" class="p-3 rounded border border-gray-200 dark:border-gray-600">
              <div v-if="restDayMealAllocations[key]" class="font-medium text-fg mb-2">{{ restDayMealAllocations[key].name }}</div>
              <div v-if="restDayMealAllocations[key]" class="text-sm space-y-1">
                <div class="text-fg-muted">碳水: <span class="text-fg font-medium">{{ formatInt(restDayMealAllocations[key].carbs) }}g</span></div>
                <div class="text-fg-muted">蛋白质: <span class="text-fg font-medium">{{ formatInt(restDayMealAllocations[key].protein) }}g</span></div>
              </div>
              <div v-if="restDayMealAllocations[key]?.content" class="mt-2 text-xs text-fg-muted" v-html="renderMealContent(restDayMealAllocations[key].content)"></div>
            </div>
          </div>
        </div>
      </div>


      
      <div class="p-4 rounded-lg bg-subtle">
        <div class="font-semibold text-fg mb-3">脂肪</div>
        <div class="space-y-2 text-sm">
          <div class="text-sm text-fg-muted">男性60g（120kg体重以上加到70g） 女性50g</div>
          <p>脂肪这样吃↓</p>
          <p>【推荐模式】早饭吃蛋黄牛奶+正餐吃大众带油菜=脂肪摄入基本合适</p>
          <p class="text-red-500">* 所谓吃“大众带油菜”，就是像黄焖鸡、酸菜鱼、鱼香肉丝、小炒牛肉等家常瘦肉菜，不要害怕菜里的油，但必须是瘦肉，高脂肉会导致脂肪超标（下面讲了什么是瘦肉，什么是高脂肉）</p>
          <p>【脂肪缺乏1】早饭不吃蛋黄牛奶，会比推荐模式少吃约10-20g脂肪摄入，请全天补吃20g坚果或3个蛋黄</p>
          <p>【脂肪缺乏2】午饭晚饭吃低油无油菜（卤肉、炖肉、清炒、清炖、轻食、水煮），会比推荐模式少吃约20g脂肪摄入，请全天补吃30g坚果或4个蛋黄</p>
          <p>脂肪基本不吃↓</p>
          <p>【高脂肉】鸡鸭皮、大排、糖醋里脊、锅包肉、鸡翅、猪蹄、牛腩、牛排、排骨、烤肉、炸肉、午餐肉、肥牛、肥羊、肉肠、肉饼、肉馅、肉丸</p>
          <p class="text-red-500">* 瘦肉只有：①没有白色脂肪层的猪牛羊肉  ②去皮的鸡鸭肉 ③鱼虾贝 ④肝肾肚血心</p>
          <p>【糖油混合物】饼干、蛋糕、点心、糕点、甜品、油条、煎饼、花式面包、膨化食品等</p>
          <p class="text-red-500">* 糖油混合物的脂肪率20-40%，吃200克就能耗完全天脂肪配额，只能偶尔吃点解馋</p>
          <p class="text-red-500">* 食堂外卖的宽油炒鸡蛋，每个鸡蛋的蛋白质只有6g，脂肪或高达20g以上，非常占据脂肪配额</p>
        </div>
      </div>
      <div class="p-4 rounded-lg bg-subtle">
        <div class="font-semibold text-fg mb-3">蔬菜/水果</div>
        <div class="space-y-2 text-sm">
          <div class="text-sm text-fg-muted">蔬菜: </div>
          <p>【蔬菜不用定量】蔬菜碳水率很低，为免麻烦不用定量，争取每天都能吃一些</p>
          <p class="text-red-500">* 吃蔬菜的顺序：一般各餐，先吃、多吃蔬菜，后吃碳水，能压制胰岛素，帮助减脂；但力训的练后餐则相反，建议先吃碳水和蛋白质，少吃、后吃蔬菜，避免胰岛素被压制</p>
          <p>【这些不是蔬菜】红薯（20%）、土豆（18%）、玉米（18%）、山药（13%）、芋头（13%）是碳水主食，括号数字是其碳水率</p>
          <div class="text-sm text-fg-muted">水果: </div>
          <p>水果必须置换主食</p>
          <p>【水果要算碳水】水果实质是糖水，糖量可观，糖是碳水的一种形式，所以要计入碳水量来置换碳水那列的主食</p>
          <p class="text-red-500">*苹果/橙子/香蕉：20-30g碳水/个；梨子/蓝莓/猕猴桃：碳水率14%；柚子/桃子/葡萄/菠萝：碳水率10%；西瓜/蜜瓜/草莓：碳水率7%</p>
          <p>【置换主食的办法】吃水果的10g碳水=主食少吃30g熟米饭</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { maleFatLossData, femaleFatLossData, type FatLossData } from '@/views/nutrition/fat-loss/nutrition-data';
import { type FatLossPlan } from '@/views/nutrition/fat-loss/plans-data';
import { type MuscleGainPlan } from '@/views/nutrition/muscle-gain/plans-data';
import { maleMuscleGainData, femaleMuscleGainData, type MuscleGainData } from '@/views/nutrition/muscle-gain/data';

interface Props {
  gender: 'male' | 'female';
  heightCm: number | null;
  weightKg: number | null;
  hasValidInputs: boolean;
  plan?: FatLossPlan | MuscleGainPlan | null;
  mode?: 'fat-loss' | 'muscle-gain'; // 新增模式参数
}
const props = defineProps<Props>();

const hasValidInputs = computed(() => props.hasValidInputs);

function rHasNonZero(r: FatLossData | MuscleGainData): boolean {
  return (r.trainingDayCarbs || 0) > 0 && (r.restDayCarbs || 0) > 0 && (r.dailyProtein || 0) > 0;
}

function findRecommended(g: 'male' | 'female', weight: number | null, height: number | null, mode: 'fat-loss' | 'muscle-gain' = 'fat-loss'): FatLossData | MuscleGainData | null {
  if (!weight || !height) return null;
  
  const list = mode === 'fat-loss' 
    ? (g === 'male' ? maleFatLossData : femaleFatLossData)
    : (g === 'male' ? maleMuscleGainData : femaleMuscleGainData);
    
  const w0 = Math.round(weight);
  const h0 = Math.round(height);
  const exact = list.find(r => r.weight === w0 && r.height === h0);
  if (exact && rHasNonZero(exact)) return exact;
  let best: FatLossData | MuscleGainData | null = null;
  let bestScore = Number.POSITIVE_INFINITY;
  for (const r of list) {
    if (!rHasNonZero(r)) continue;
    const score = Math.abs(r.weight - w0) * 10 + Math.abs(r.height - h0);
    if (score < bestScore) { bestScore = score; best = r; }
  }
  if (best) return best;
  if (exact) return exact;
  let bestAny: FatLossData | MuscleGainData | null = null;
  let bestAnyScore = Number.POSITIVE_INFINITY;
  for (const r of list) {
    const score = Math.abs(r.weight - w0) * 10 + Math.abs(r.height - h0);
    if (score < bestAnyScore) { bestAnyScore = score; bestAny = r; }
  }
  return bestAny;
}

const recommended = computed(() => findRecommended(props.gender, props.weightKg, props.heightCm, props.mode || 'fat-loss'));
const hasRecNonZero = computed(() => {
  const r = recommended.value;
  if (!r) return false;
  return rHasNonZero(r);
});

const bodyWeight = computed(() => props.weightKg || 0);
const trainCarbGrams = computed(() => bodyWeight.value * (recommended.value?.trainingDayCarbs ?? 0));
const restCarbGrams = computed(() => bodyWeight.value * (recommended.value?.restDayCarbs ?? 0));
const trainProteinGrams = computed(() => bodyWeight.value * (recommended.value?.dailyProtein ?? 0));
const restProteinGrams = trainProteinGrams;

// 计算力训日餐次分配
const mealAllocations = computed(() => {
  if (!props.plan || !hasRecNonZero.value) return {};
  
  const meals = ['firstcan', 'secondcan', 'thirdcan', 'fourthcan', 'fifthcan'] as const;
  const allocations: Record<string, { name: string; carbs: number; protein: number; content: string }> = {};
  
  meals.forEach(mealKey => {
    const meal = props.plan![mealKey];
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

// 计算休息日餐次分配
const restDayMealAllocations = computed(() => {
  if (!props.plan || !hasRecNonZero.value) return {};
  
  const allocations: Record<string, { name: string; carbs: number; protein: number; content: string }> = {};
  
  // 早餐和零食夜宵与力训日相同
  const breakfast = props.plan.firstcan;
  const snacks = props.plan.fifthcan;
  
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
  
  // 计算中餐晚餐平分剩余配额
  const breakfastCarbs = allocations.breakfast?.carbs || 0;
  const breakfastProtein = allocations.breakfast?.protein || 0;
  const snacksCarbs = allocations.snacks?.carbs || 0;
  const snacksProtein = allocations.snacks?.protein || 0;
  
  const remainingCarbs = restCarbGrams.value - breakfastCarbs - snacksCarbs;
  const remainingProtein = restProteinGrams.value - breakfastProtein - snacksProtein;
  
  allocations.lunch = {
    name: '中餐',
    carbs: remainingCarbs / 2,
    protein: remainingProtein / 2,
    content: '* 中餐和晚餐平分剩余配额'
  };
  
  allocations.dinner = {
    name: '晚餐',
    carbs: remainingCarbs / 2,
    protein: remainingProtein / 2,
    content: '* 中餐和晚餐平分剩余配额'
  };
  
  return allocations;
});

function renderMealContent(text: string): string {
  if (!text) return '';
  return text
    .split('\n')
    .map(line => {
      const trimmed = line.replace(/^\s+/, '');
      if (/^[＊*]/.test(trimmed)) {
        return `<span class="text-red-500">${escapeHtml(line)}</span>`;
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

function formatInt(v: number): string { return Math.round(v).toString(); }
</script>

<style scoped>
</style>


