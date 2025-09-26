// 脂肪数据 - 一层结构：名称 -> 解释
export interface FatItem {
  id: string;
  name: string;     // 名称
  description: string; // 解释
}

export const fatData: FatItem[] = [
  { 
    id: 'fat_no_calculation', 
    name: '脂肪不计算', 
    description: '鸡蛋牛奶+菜肴带油，同时排除高脂肉和糖油混合物，脂肪摄入就合适，不用搜集食物的脂肪率数据来计算脂肪量' 
  },
  { 
    id: 'explain_oily_dishes', 
    name: '解释"菜肴带油"', 
    description: '菜肴必须是瘦肉菜的前提下，还应注意：\na.排除煎炒鸡蛋（例如番茄鸡蛋、韭菜鸡蛋）\nb.排除油烧茄子（例如鱼香茄子）\nc.减少干煸菜肴（例如干煸豆角菜花、干煸鸡肉）\nd.重油菜（例如水煮牛肉、口水鸡等），可以在盘边刮一刮或简单过水，让附着的油量减少，但肉必须是瘦肉' 
  },
  { 
    id: 'explain_exclude_fatty_meat', 
    name: '解释"排除高脂肉"', 
    description: '瘦肉只有：a.去皮的鸡鸭肉  b.没有白色脂肪层的猪牛羊肉  c.鱼虾贝等水产  d.内脏的肝肾肚血心\n不是瘦肉：鸡鸭皮、大排、糖醋里脊、锅包肉、鸡翅、猪蹄、牛腩、牛排、排骨、烤肉、炸肉、午餐肉、肥牛、肥羊、肉肠、肉饼、肉馅、肉丸' 
  },
  { 
    id: 'explain_exclude_sugar_fat_mixture', 
    name: '解释"排除糖油混合物"', 
    description: '饼干、蛋糕、点心、糕点、甜品、油条、煎饼、花式面包、膨化食品等，在营养率上表现为碳水和脂肪的比例低于3比1，以此作为碳水来源会让脂肪摄入超标，减脂期只能作为极偶尔的食物，增肌期可以稍宽松点' 
  },
  { 
    id: 'olive_oil', 
    name: '橄榄油', 
    description: '单不饱和脂肪酸丰富，抗炎抗氧化，适合低温烹饪和凉拌' 
  },
  { 
    id: 'coconut_oil', 
    name: '椰子油', 
    description: '中链脂肪酸，快速供能，适合高温烹饪，但饱和脂肪含量高' 
  },
  { 
    id: 'avocado_oil', 
    name: '牛油果油', 
    description: '单不饱和脂肪酸，烟点高，适合各种烹饪方式' 
  },
  { 
    id: 'walnut_oil', 
    name: '核桃油', 
    description: 'Omega-3丰富，适合凉拌，不宜高温烹饪' 
  },
  { 
    id: 'flaxseed_oil', 
    name: '亚麻籽油', 
    description: 'Omega-3含量最高，必须冷藏保存，仅适合凉拌' 
  },
  { 
    id: 'ghee', 
    name: '酥油', 
    description: '澄清黄油，烟点高，适合高温烹饪，乳糖不耐受者可食用' 
  },
  { 
    id: 'butter', 
    name: '黄油', 
    description: '饱和脂肪，维生素A丰富，适合烘焙和低温烹饪' 
  },
  { 
    id: 'lard', 
    name: '猪油', 
    description: '饱和脂肪，烟点高，适合高温烹饪，但应适量食用' 
  },
  { 
    id: 'tallow', 
    name: '牛油', 
    description: '饱和脂肪，烟点极高，适合油炸，传统烹饪用油' 
  },
  { 
    id: 'sesame_oil', 
    name: '芝麻油', 
    description: '单不饱和脂肪酸，香味浓郁，适合调味和凉拌' 
  },
  { 
    id: 'peanut_oil', 
    name: '花生油', 
    description: '单不饱和脂肪酸，烟点中等，适合炒菜' 
  },
  { 
    id: 'sunflower_oil', 
    name: '葵花籽油', 
    description: '多不饱和脂肪酸，维生素E丰富，适合低温烹饪' 
  },
  { 
    id: 'canola_oil', 
    name: '菜籽油', 
    description: '单不饱和脂肪酸，Omega-3含量适中，适合各种烹饪' 
  },
  { 
    id: 'avocado_fruit', 
    name: '牛油果', 
    description: '单不饱和脂肪酸，钾含量高，纤维丰富，营养密度高' 
  },
  { 
    id: 'nuts_mixed', 
    name: '混合坚果', 
    description: '健康脂肪、蛋白质、维生素E的综合来源，但热量密度高' 
  },
  { 
    id: 'seeds_mixed', 
    name: '混合种子', 
    description: 'Omega-3、蛋白质、矿物质丰富，建议适量食用' 
  },
  { 
    id: 'dark_chocolate', 
    name: '黑巧克力', 
    description: '可可脂富含抗氧化物质，建议选择70%以上可可含量' 
  },
  { 
    id: 'fatty_fish', 
    name: '深海鱼类', 
    description: 'Omega-3 EPA和DHA，有益心血管和大脑健康' 
  },
  { 
    id: 'egg_yolk', 
    name: '蛋黄', 
    description: '胆固醇和卵磷脂，维生素A、D、E丰富，适量食用有益' 
  },
  { 
    id: 'cheese_full_fat', 
    name: '全脂奶酪', 
    description: '饱和脂肪和蛋白质，钙质丰富，但热量较高' 
  },
];