// 蛋白质数据 - 两层结构：大类 -> 食物名称
export interface ProteinItem {
  id: string;
  name: string;     // 食物
  proteinRate: string; // 蛋白质率（字符串格式）
  position: string; // 定位
  notes?: string;   // 讲解
}

export interface ProteinCategory {
  category: string; // 大类
  items: ProteinItem[]; // 该大类下的食物数组
  notes?: string; // 分类级别的讲解（可选）
}

export const proteinData: ProteinCategory[] = [
  {
    category: '干净蛋白质',
    notes:'【瘦肉只有】a.去皮的鸡鸭肉  b.没有白色脂肪层的猪牛羊肉  c.鱼虾贝等水产  d.内脏的肝肾肚血心 \n【不是瘦肉】鸡鸭皮、大排、糖醋里脊、锅包肉、鸡翅、猪蹄、牛腩、牛排、排骨、烤肉、炸肉、午餐肉、肥牛、肥羊、肉肠、肉饼、肉馅、肉丸',
    items: [
      { 
        id: 'seafood_raw', 
        name: '瘦肉（鱼虾生肉）', 
        proteinRate: '15%', 
        position: '主要来源', 
        notes: '一般鱼虾的含水率高于家禽家畜，因此蛋白质率稍低' 
      },
      { 
        id: 'salmon_tuna_raw', 
        name: '瘦肉（三文鱼/金枪鱼）', 
        proteinRate: '20%', 
        position: '主要来源', 
        notes: '三文鱼/金枪鱼本身脂肪率较高，并非瘦肉；但如果是吃中腩或赤身，且是无油生食，姑且也可视为瘦肉' 
      },
      { 
        id: 'poultry_beef_raw', 
        name: '瘦肉（家禽家畜生肉）', 
        proteinRate: '20%', 
        position: '主要来源', 
        notes: '鸡鸭肉要去皮，猪牛羊肉要没有白色脂肪层，才是瘦肉性质' 
      },
      { 
        id: 'lean_meat_cooked', 
        name: '瘦肉（一般的熟肉）', 
        proteinRate: '25%', 
        position: '主要来源', 
        notes: '鱼虾和家禽家畜瘦肉均属之，不用区分品种（鱼虾因为含水率更高，熟后脱水率更高，蛋白质率会显著上升）' 
      },
      { 
        id: 'dry_lean_meat', 
        name: '瘦肉（柴感的熟肉）', 
        proteinRate: '30%', 
        position: '主要来源', 
        notes: '酱牛肉、干柴的卤肉等，因为脱水率更高，蛋白质率会更高一些' 
      },
      { 
        id: 'jerky', 
        name: '瘦肉干', 
        proteinRate: '40%', 
        position: '主要来源', 
        notes: '牛肉干、鸡肉干，因为脱水率很高，蛋白质率就很高，注意碳水率（糖率）最好低于10%，否则就成了"糖肉干"' 
      },
      { 
        id: 'protein_powder', 
        name: '蛋白粉', 
        proteinRate: '75%', 
        position: '主要来源', 
        notes: '乳清蛋白粉的一般70-80%，分离乳清蛋白粉一般80-90%，素食者可用大豆分离蛋白粉（氨基酸比例良好）' 
      },
    ]
  },
  {
    category: '含有蛋白质的混合物',
    items: [
      { 
        id: 'egg', 
        name: '鸡蛋', 
        proteinRate: '6g/个', 
        position: '早饭来源', 
        notes: '蛋清（蛋白质3g 脂肪0g）+蛋黄（蛋白质3g 脂肪5g）=全蛋（蛋白质6g 脂肪5g）' 
      },
      { 
        id: 'milk', 
        name: '牛奶', 
        proteinRate: '10g/250ml盒', 
        position: '早饭来源', 
        notes: '250ml盒装纯牛奶（碳水12g 蛋白质10g 脂肪9g），可以简单记忆为碳蛋脂都是10g' 
      },
      { 
        id: 'yogurt', 
        name: '酸奶', 
        proteinRate: '10g/200ml盒', 
        position: '早饭来源', 
        notes: '代糖酸奶可简单等同于纯牛奶，特殊酸奶（含糖酸奶会多10g+糖，希腊酸奶近乎零脂）可参照营养表来计算' 
      },
      { 
        id: 'soybeans', 
        name: '干黄豆', 
        proteinRate: '35%', 
        position: '碰到了可吃', 
        notes: '碳水34% 蛋白质35% 脂肪16%，碰到了可以吃一些，但不能替代瘦肉，因为氨基酸比例较差，且附带过多脂肪' 
      },
      { 
        id: 'fresh_soybeans', 
        name: '鲜黄豆/毛豆/青豆', 
        proteinRate: '13%', 
        position: '碰到了可吃', 
        notes: '碳水11% 蛋白质13% 脂肪5%，碰到了可以吃一些，但不能替代瘦肉，因为氨基酸比例较差，且附带过多脂肪' 
      },
      { 
        id: 'tofu_skin', 
        name: '豆皮/千张', 
        proteinRate: '35%', 
        position: '碰到了可吃', 
        notes: '碳水20% 蛋白质35% 脂肪20%，碰到了可以吃一些，但不能替代瘦肉，因为氨基酸比例较差，且附带过多脂肪' 
      },
      { 
        id: 'tofu', 
        name: '豆腐', 
        proteinRate: '7%', 
        position: '碰到了可吃', 
        notes: '碳水3% 蛋白质7% 脂肪5%，碰到了可以吃一些，但不能替代瘦肉，因为氨基酸比例较差，且附带过多脂肪' 
      },
      { 
        id: 'soybean_milk', 
        name: '豆浆', 
        proteinRate: '3%', 
        position: '可忽略不计', 
        notes: '碳水1% 蛋白质3% 脂肪2%，主要是水，热量很低可忽略不计，但肯麦的高甜豆浆约放了20g糖，其实是一杯糖水' 
      },
    ]
  }
];