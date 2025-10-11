export interface MealPlan {
  name: string;
  content: string;
  danbaizhi: string; // 蛋白质比例
  tanshu: string;    // 碳水比例
}

export interface FatLossPlan {
  id: string;
  name: string;
  description: string;
  trainingTime: string;
  mealSchedule: {
    breakfast: string;
    lunch: string;
    dinner: string;
    snacks?: string[];
  };
  nutritionDistribution: {
    carbs: string;
    protein: string;
    fat: string;
  };
  notes?: string[];
  suitableFor: string[];
  firstcan: MealPlan;
  secondcan: MealPlan;
  thirdcan: MealPlan;
  fourthcan: MealPlan;
  fifthcan: MealPlan;
}

export const fatLossPlans: FatLossPlan[] = [
  {
    id: 'morning_early',
    name: '早饭后练（早起版）',
    description: '适合早起人群，早餐后进行训练',
    trainingTime: '早餐后1-2小时',
    mealSchedule: {
      breakfast: '训练前1-2小时',
      lunch: '训练后1小时内',
      dinner: '晚餐时间',
      snacks: ['训练前30分钟小食', '训练后补充']
    },
    nutritionDistribution: {
      carbs: '训练前后重点补充',
      protein: '全天均匀分配',
      fat: '避免训练前大量摄入'
    },
    notes: [
      '早起训练有助于提高一天的新陈代谢',
      '早餐要充足，避免空腹训练',
      '训练后及时补充营养'
    ],
    suitableFor: ['早起人群', '上班族', '学生'],
    firstcan:{
      name:'早饭=练前餐',
      content:'* 吃了早饭就准备开练，不需要专门等待休息\n* 吃了练你感觉太饱的话，就吃低饱腹感碳水（馒头/面包/面条）或不吃蛋白质（挪给别的时候吃））',
      danbaizhi:'0.15',
      tanshu:'0.20',
    },
    secondcan:{
      name:'练后餐',
      content:'* 最好能练完后半小时内开始吃上\n* 本餐如要吃蔬菜，少吃后吃以免压制胰岛素\n* 有时没正餐可吃，可用便携快碳+蛋白粉解决',
      danbaizhi:'0.35',
      tanshu:'0.20',
    },
    thirdcan:{
      name:'午饭=其他餐',
      content:'* 练后餐刚吃了没多久，这顿可以晚些吃或少吃点',
      danbaizhi:'0.20',
      tanshu:'0.20',
    },
    fourthcan:{
      name:'晚饭=其他餐',
      content:'',
      danbaizhi:'0.20',
      tanshu:'0.20',
    },
    fifthcan:{
      name:'零食/夜宵',
      content:'* 零食/夜宵的设计热量就并不多，如果不吃的话，就在其他各餐多吃几口瘦肉或主食即可',
      danbaizhi:'0.10',
      tanshu:'0.20',
    },
  },
  {
    id: 'morning_late',
    name: '早饭后练（晚起版）',
    description: '适合晚起人群，早餐后进行训练',
    trainingTime: '早餐后1-2小时',
    mealSchedule: {
      breakfast: '训练前1-2小时',
      lunch: '训练后1小时内',
      dinner: '晚餐时间',
      snacks: ['训练前30分钟小食', '训练后补充']
    },
    nutritionDistribution: {
      carbs: '训练前后重点补充',
      protein: '全天均匀分配',
      fat: '避免训练前大量摄入'
    },
    notes: [
      '适合周末或休息日训练',
      '早餐可以更丰盛一些',
      '注意训练后的营养补充'
    ],
    suitableFor: ['晚起人群', '周末训练者'],
    firstcan: {
      name: '早饭=练前餐',
      content: '* 吃了早饭就准备开练，不需要专门等待休息\n* 怕太饱的话，可吃低饱腹感碳水（馒头/面包/面条）',
      danbaizhi: '0.20',
      tanshu: '0.20',
    },
    secondcan: {
      name: '午饭=练后餐',
      content: '* 最好能练完后半小时内开始吃上\n* 本餐如要吃蔬菜，少吃后吃以免压制胰岛素\n* 有时没正餐可吃，可用便携快碳+蛋白粉解决',
      danbaizhi: '0.40',
      tanshu: '0.30',
    },
    thirdcan: {
      name: '',
      content: '',
      danbaizhi: '',
      tanshu: '',
    },
    fourthcan: {
      name: '晚饭=其他餐',
      content: '',
      danbaizhi: '0.30',
      tanshu: '0.30',
    },
    fifthcan: {
      name: '零食/夜宵',
      content: '* 零食/夜宵的设计热量就并不多，如果不吃的话，就在其他各餐多吃几口瘦肉或主食即可',
      danbaizhi: '0.10',
      tanshu: '0.20',
    },
  },
  {
    id: 'before_lunch',
    name: '午饭前练',
    description: '午餐前进行训练',
    trainingTime: '午餐前1-2小时',
    mealSchedule: {
      breakfast: '早餐时间',
      lunch: '训练后1小时内',
      dinner: '晚餐时间',
      snacks: ['训练前30分钟小食', '训练后补充']
    },
    nutritionDistribution: {
      carbs: '训练前后重点补充',
      protein: '全天均匀分配',
      fat: '避免训练前大量摄入'
    },
    notes: [
      '适合上午有时间的人群',
      '训练后午餐要丰盛',
      '注意早餐的营养密度'
    ],
    suitableFor: ['上午有空闲时间者', '自由职业者'],
    firstcan: {
      name: '早饭',
      content: '',
      danbaizhi: '0.20',
      tanshu: '0.20',
    },
    secondcan: {
      name: '练前餐',
      content: '* 就是垫点碳水，不是正式"一餐"\n* 只能吃到五六分饱，全饱无法锻炼\n* 吃了就准备开练，不需要专门等待休息',
      danbaizhi: '0',
      tanshu: '0.15',
    },
    thirdcan: { 
      name: '午饭=练后餐',
      content: '* 最好能练完后半小时内开始吃上\n* 本餐如要吃蔬菜，少吃后吃以免压制胰岛素\n* 有时没正餐可吃，可用便携快碳+蛋白粉解决',
      danbaizhi: '0.30',
      tanshu: '0.30',
    },
    fourthcan: {
      name: '晚饭=其他餐',
      content: '',
      danbaizhi: '0.30',
      tanshu: '0.30',
    },
    fifthcan: {
      name: '零食/夜宵',
      content: '* 零食/夜宵的设计热量就并不多，如果不吃的话，就在其他各餐多吃几口瘦肉或主食即可',
      danbaizhi: '0.20',
      tanshu: '0.10',
    },
  },
  {
    id: 'after_lunch',
    name: '午饭后练',
    description: '午餐后进行训练',
    trainingTime: '午餐后1-2小时',
    mealSchedule: {
      breakfast: '早餐时间',
      lunch: '训练前1-2小时',
      dinner: '晚餐时间',
      snacks: ['训练前30分钟小食', '训练后补充']
    },
    nutritionDistribution: {
      carbs: '训练前后重点补充',
      protein: '全天均匀分配',
      fat: '避免训练前大量摄入'
    },
    notes: [
      '适合午休时间较长的人群',
      '午餐要适量，避免过饱',
      '训练后及时补充营养'
    ],
    suitableFor: ['午休时间充足者', '上班族'],
    firstcan: {
      name: '早饭',
      content: '',
      danbaizhi: '0.20',
      tanshu: '0.20',
    },
    secondcan: {
      name: '午饭=练前餐',
      content: '* 就是垫点碳水，不是正式"一餐"\n* 只能吃到五六分饱，全饱无法锻炼\n* 吃了就准备开练，不需要专门等待休息',
      danbaizhi: '0',
      tanshu: '0.15',
    },
    thirdcan: {
      name: '练后餐',
      content: '* 最好能练完后半小时内开始吃上\n* 本餐如要吃蔬菜，少吃后吃以免压制胰岛素\n* 有时没正餐可吃，可用便携快碳+蛋白粉解决',
      danbaizhi: '0.30',
      tanshu: '0.35',
    },
    fourthcan: {
      name: '晚饭=其他餐',
      content: '',
      danbaizhi: '0.20',
      tanshu: '0.30',
    },
    fifthcan: {
      name: '零食/夜宵',
      content: '* 零食/夜宵的设计热量就并不多，如果不吃的话，就在其他各餐多吃几口瘦肉或主食即可',
      danbaizhi: '0.10',
      tanshu: '0.20',
    },
  },
  {
    id: 'before_dinner',
    name: '晚饭前练',
    description: '晚餐前进行训练',
    trainingTime: '晚餐前1-2小时',
    mealSchedule: {
      breakfast: '早餐时间',
      lunch: '午餐时间',
      dinner: '训练后1小时内',
      snacks: ['训练前30分钟小食', '训练后补充']
    },
    nutritionDistribution: {
      carbs: '训练前后重点补充',
      protein: '全天均匀分配',
      fat: '避免训练前大量摄入'
    },
    notes: [
      '适合下班后训练的人群',
      '晚餐要丰盛，补充训练消耗',
      '注意训练前的能量补充'
    ],
    suitableFor: ['下班后训练者', '上班族'],
    firstcan: {
      name: '早饭',
      content: '',
      danbaizhi: '0.20',
      tanshu: '0.20',
    },
    secondcan: {
      name: '午饭=其他餐',
      content: '',
      danbaizhi: '0.30',
      tanshu: '0.20',
    },
    thirdcan: {
      name: '练前餐',
      content: '* 就是垫点碳水，不是正式"一餐"\n* 只能吃到五六分饱，全饱无法锻炼\n* 吃了就准备开练，不需要专门等待休息',
      danbaizhi: '0',  
      tanshu: '0.15',
    },
    fourthcan: {
      name: '晚饭=练后餐',
      content: '* 最好能练完后半小时内开始吃上\n* 本餐如要吃蔬菜，少吃后吃以免压制胰岛素\n* 有时没正餐可吃，可用便携快碳+蛋白粉解决',
      danbaizhi: '0.30',
      tanshu: '0.35',
    },
    fifthcan: {
      name: '零食/夜宵',
      content: '* 零食/夜宵的设计热量就并不多，如果不吃的话，就在其他各餐多吃几口瘦肉或主食即可',
      danbaizhi: '0.20',
      tanshu: '0.10',
    },
  },
  {
    id: 'after_dinner',
    name: '晚饭后练',
    description: '晚餐后进行训练',
    trainingTime: '晚餐后1-2小时',
    mealSchedule: {
      breakfast: '早餐时间',
      lunch: '午餐时间',
      dinner: '训练前1-2小时',
      snacks: ['训练前30分钟小食', '训练后补充']
    },
    nutritionDistribution: {
      carbs: '训练前后重点补充',
      protein: '全天均匀分配',
      fat: '避免训练前大量摄入'
    },
    notes: [
      '适合晚餐时间较早的人群',
      '晚餐要适量，避免过饱',
      '训练后可以适当补充'
    ],
    suitableFor: ['晚餐时间较早者', '家庭主妇'],
    firstcan: {
      name: '早饭',
      content: '',
      danbaizhi: '0.20',
      tanshu: '0.20',
    },
    secondcan: {
      name: '午饭=其他餐',
      content: '',
      danbaizhi: '0.30',
      tanshu: '0.20',
    },
    thirdcan: {
      name: '晚饭=练前餐',
      content: '* 就是垫点碳水，不是正式"一餐"\n* 只能吃到五六分饱，全饱无法锻炼\n* 吃了就准备开练，不需要专门等待休息',
      danbaizhi: '0',
      tanshu: '0.15',
    },
    fourthcan: {
      name: '练后餐',
      content: '* 最好能练完后半小时内开始吃上\n* 本餐如要吃蔬菜，少吃后吃以免压制胰岛素\n* 有时没正餐可吃，可用便携快碳+蛋白粉解决',
      danbaizhi: '0.30',
      tanshu: '0.35',
    },
    fifthcan: {
      name: '零食/夜宵',
      content: '* 零食/夜宵的设计热量就并不多，如果不吃的话，就在其他各餐多吃几口瘦肉或主食即可',
      danbaizhi: '0.20',
      tanshu: '0.10',
    },
  },
  {
    id: 'night_training',
    name: '夜里练',
    description: '晚上较晚时间进行训练',
    trainingTime: '晚上8-10点',
    mealSchedule: {
      breakfast: '早餐时间',
      lunch: '午餐时间',
      dinner: '训练前1-2小时',
      snacks: ['训练前30分钟小食', '训练后补充']
    },
    nutritionDistribution: {
      carbs: '训练前后重点补充',
      protein: '全天均匀分配',
      fat: '避免训练前大量摄入'
    },
    notes: [
      '适合夜猫子人群',
      '注意训练后不要影响睡眠',
      '晚餐要适量，训练后适当补充'
    ],
    suitableFor: ['夜猫子', '夜班工作者'],
    firstcan: {
      name: '早饭',
      content: '',
      danbaizhi: '0.20',
      tanshu: '0.20',
    },
    secondcan: {
      name: '午饭=其他餐',
      content: '',
      danbaizhi: '0.20',
      tanshu: '0.20',
    },
    thirdcan: {
      name: '晚饭=其他餐',
      content: '',
      danbaizhi: '0.20',
      tanshu: '0.20',
    },
    fourthcan: {
      name: '练后餐',
      content: '* 最好能练完后半小时内开始吃上\n* 本餐如要吃蔬菜，少吃后吃以免压制胰岛素\n* 此时已经不是普通饭点，怎么备餐？ a.提前从食堂打包  b.叫外卖 c.吃餐馆 d.便携快碳（吐司面包、馒头花卷、烤馍、营养米粉、旺仔小馒头等）+蛋白粉',
      danbaizhi: '0.20',
      tanshu: '0.30',
    },
    fifthcan: {
      name: '零食/夜宵',
      content: '* 零食/夜宵的设计热量就并不多，如果不吃的话，就在其他各餐多吃几口瘦肉或主食即可',
      danbaizhi: '0.20',
      tanshu: '0.10',
    },
  },
  {
    id: 'no_training',
    name: '无力训者',
    description: '不进行力量训练，仅通过饮食控制减脂',
    trainingTime: '无训练',
    mealSchedule: {
      breakfast: '早餐时间',
      lunch: '午餐时间',
      dinner: '晚餐时间',
      snacks: ['健康零食']
    },
    nutritionDistribution: {
      carbs: '全天均匀分配',
      protein: '全天均匀分配',
      fat: '适量摄入'
    },
    notes: [
      '适合无法进行力量训练的人群',
      '主要通过饮食控制达到减脂目标',
      '可以配合有氧运动'
    ],
    suitableFor: ['无法进行力量训练者', '初学者', '身体条件限制者'],
    firstcan: {
      name: '早饭',
      content: '',
      danbaizhi: '0.20',
      tanshu: '0.20',
    },
    secondcan: {
      name: '午饭',
      content: '',
      danbaizhi: '0.30',
      tanshu: '0.35',
    },
    thirdcan: {
      name: '晚饭',
      content: '',
      danbaizhi: '0.30',
      tanshu: '0.35',
    },
    fourthcan: {
      name: '零食/夜宵',
      content: '* 零食/夜宵的设计热量就并不多，如果不吃的话，就在其他各餐多吃几口瘦肉或主食即可',
      danbaizhi: '0.20',
      tanshu: '0.10',
    },
    fifthcan: {
      name: '',
      content: '',
      danbaizhi: '',
      tanshu: '',
    },
  }
];

export function getFatLossPlan(planId: string): FatLossPlan | undefined {
  return fatLossPlans.find(plan => plan.id === planId);
}

export function getAllFatLossPlans(): FatLossPlan[] {
  return fatLossPlans;
}

/*
=== 训练计划餐次比例总结 ===

1. 早饭后练（早起版）:
   - 早饭=练前餐: 碳水20%, 蛋白质15%
   - 练后餐: 碳水20%, 蛋白质35%
   - 午饭=其他餐: 碳水20%, 蛋白质20%
   - 晚饭=其他餐: 碳水20%, 蛋白质20%
   - 零食/夜宵: 碳水20%, 蛋白质10%
   - 总计: 碳水100%, 蛋白质100%

2. 早饭后练（晚起版）:
   - 早饭=练前餐: 碳水20%, 蛋白质20%
   - 午饭=练后餐: 碳水30%, 蛋白质40%
   - 晚饭=其他餐: 碳水30%, 蛋白质30%
   - 零食/夜宵: 碳水20%, 蛋白质10%
   - 总计: 碳水100%, 蛋白质100%

3. 午饭前练:
   - 早饭: 碳水20%, 蛋白质20%
   - 练前餐: 碳水15%, 蛋白质0%
   - 午饭=练后餐: 碳水30%, 蛋白质30%
   - 晚饭=其他餐: 碳水30%, 蛋白质30%
   - 零食/夜宵: 碳水10%, 蛋白质20%
   - 总计: 碳水100%, 蛋白质100%

4. 午饭后练:
   - 早饭: 碳水20%, 蛋白质20%
   - 午饭=练前餐: 碳水15%, 蛋白质0%
   - 练后餐: 碳水35%, 蛋白质30%
   - 晚饭=其他餐: 碳水30%, 蛋白质20%
   - 零食/夜宵: 碳水20%, 蛋白质10%
   - 总计: 碳水100%, 蛋白质100%

5. 晚饭前练:
   - 早饭: 碳水20%, 蛋白质20%
   - 午饭=其他餐: 碳水20%, 蛋白质30%
   - 练前餐: 碳水15%, 蛋白质0%
   - 晚饭=练后餐: 碳水35%, 蛋白质30%
   - 零食/夜宵: 碳水10%, 蛋白质20%
   - 总计: 碳水100%, 蛋白质100%

6. 晚饭后练:
   - 早饭: 碳水20%, 蛋白质20%
   - 午饭=其他餐: 碳水20%, 蛋白质30%
   - 晚饭=练前餐: 碳水15%, 蛋白质0%
   - 练后餐: 碳水35%, 蛋白质30%
   - 零食/夜宵: 碳水10%, 蛋白质20%
   - 总计: 碳水100%, 蛋白质100%

7. 夜里练:
   - 早饭: 碳水20%, 蛋白质20%
   - 午饭=其他餐: 碳水20%, 蛋白质20%
   - 晚饭=其他餐: 碳水20%, 蛋白质20%
   - 练后餐: 碳水30%, 蛋白质20%
   - 零食/夜宵: 碳水10%, 蛋白质20%
   - 总计: 碳水100%, 蛋白质100%

8. 无力训者:
   - 早饭: 碳水20%, 蛋白质20%
   - 午饭: 碳水35%, 蛋白质30%
   - 晚饭: 碳水35%, 蛋白质30%
   - 零食/夜宵: 碳水10%, 蛋白质20%
   - 总计: 碳水100%, 蛋白质100%

=== 修正后总结 ===
✅ 所有训练计划的碳水、蛋白质比例总计均为100%

修正内容:
- 午饭前练: 练后餐蛋白质35%→30%，晚饭蛋白质20%→30%，零食蛋白质10%→20%，零食碳水20%→10%
- 午饭后练: 练后餐蛋白质35%→30%，碳水30%→35%
- 晚饭前练: 午饭蛋白质20%→30%，练后餐蛋白质35%→30%，零食蛋白质10%→20%，零食碳水20%→10%
- 晚饭后练: 午饭蛋白质20%→30%，练后餐蛋白质35%→30%，零食蛋白质10%→20%，零食碳水20%→10%
- 夜里练: 练后餐蛋白质30%→20%，碳水20%→30%，零食蛋白质10%→20%，零食碳水20%→10%
- 无力训者: 午饭蛋白质35%→30%，碳水20%→35%，晚饭蛋白质30%→30%，碳水20%→35%，零食蛋白质10%→20%，碳水20%→10%

✅ 数据修正完成，所有计划比例平衡
*/
