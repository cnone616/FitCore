// 碳水化合物数据 - 两层结构：大类 -> 食物名称
export interface CarbItem {
  id: string;
  name: string;     // 食物
  carbRate: number; // 碳水率(0-1)
  gi?: string;      // GI值
  notes?: string;   // 讲解
}

export interface CarbCategory {
  category: string; // 大类
  notes?: string; // 分类级别的讲解（可选）
  items: CarbItem[]; // 该大类下的食物数组
}

export const carbData: CarbCategory[] = [
  {
    category: '米类主食',
    items: [
      { 
        id: 'rice_raw', 
        name: '生米', 
        carbRate: 0.75, 
        gi: '高', 
        notes: '大米、糙米、糯米、小米、紫米、黑米等不分品种碳水率近似，除了黑米外均是高GI' 
      },
      { 
        id: 'rice_soft', 
        name: '米饭（很软）', 
        carbRate: 0.25, 
        gi: '高', 
        notes: '只有自己做饭才可能这么软，外食几乎不可能' 
      },
      { 
        id: 'rice_normal', 
        name: '米饭（一般）', 
        carbRate: 0.30, 
        gi: '高', 
        notes: '外食的一般米饭，长方形的标准外卖盒一般100-120g碳水/盒' 
      },
      { 
        id: 'rice_hard', 
        name: '米饭（偏硬）', 
        carbRate: 0.35, 
        gi: '高', 
        notes: '外食的一般米饭，长方形的标准外卖盒一般100-120g碳水/盒' 
      },
      { 
        id: 'rice_porridge_thin', 
        name: '米粥（稀）', 
        carbRate: 0.10, 
        gi: '高', 
        notes: '粘稠度类似小米粥的稀饭' 
      },
      { 
        id: 'rice_porridge_normal', 
        name: '米粥（一般）', 
        carbRate: 0.13, 
        gi: '高', 
        notes: '粘稠度比小米粥要稠的稀饭' 
      },
      { 
        id: 'rice_noodles', 
        name: '米线（熟）', 
        carbRate: 0.33, 
        gi: '高', 
        notes: '米线饱腹感很低，外食一般不低于100g碳水/份' 
      },
      { 
        id: 'rice_roll', 
        name: '肠粉（熟）', 
        carbRate: 0.20, 
        gi: '高', 
        notes: '广东地方主食，一般50-70g碳水/份' 
      },
      { 
        id: 'zongzi', 
        name: '粽子', 
        carbRate: 0.50, 
        gi: '高', 
        notes: '可吃白粽、豆沙粽，不吃肉粽，饱腹感很低，一般40-60g碳水/个' 
      }
    ]
  },
  {
    category: '麦类主食',
    items: [
      { 
        id: 'bread_slice', 
        name: '切片面包', 
        carbRate: 0.50, 
        gi: '高', 
        notes: '普通切片面包的脂肪率低于8%（性质是碳水食物），花式面包脂肪率高于10%甚至15%（性质是轻度糖油混合物）' 
      },
      { 
        id: 'steamed_bread', 
        name: '馒头/花卷/馍/馕', 
        carbRate: 0.50, 
        gi: '高', 
        notes: '' 
      },
      { 
        id: 'dried_noodles', 
        name: '挂面（生）', 
        carbRate: 0.75, 
        gi: '中', 
        notes: '挂面是面条里少有的中等GI碳水，不建议用于练后餐' 
      },
      { 
        id: 'pasta_raw', 
        name: '意面（生）', 
        carbRate: 0.75, 
        gi: '低', 
        notes: '意面是面条里少有的低GI碳水，不能用于练后餐' 
      },
      { 
        id: 'pasta_cooked', 
        name: '意面（熟）', 
        carbRate: 0.30, 
        gi: '低', 
        notes: '粉条是面条里少有的高GI碳水，不能用于练后餐' 
      },
      { 
        id: 'fresh_noodles_raw', 
        name: '鲜面（生）', 
        carbRate: 0.60, 
        gi: '高', 
        notes: '鲜面，指现和现拉的未下锅的面条，含水量高于干面，因此碳水率稍低，外食一般不低于100g碳水/份' 
      },
      { 
        id: 'cold_noodles', 
        name: '凉面（熟）', 
        carbRate: 0.30, 
        gi: '高', 
        notes: '' 
      },
      { 
        id: 'thick_noodles', 
        name: '粗面（熟）', 
        carbRate: 0.30, 
        gi: '高', 
        notes: '粗面，指像凉面粗细的面条，吸水率比细面低一些，因此碳水率稍高一些，外食一般不低于100g碳水/份' 
      },
      { 
        id: 'thin_noodles', 
        name: '细面（熟）', 
        carbRate: 0.23, 
        gi: '高', 
        notes: '细面，指像挂面粗细的面条，吸水率比粗面高一些，因此碳水率稍低一些，外食一般不低于100g碳水/份' 
      },
      { 
        id: 'pancake', 
        name: '卷饼/烙饼/馕（熟）', 
        carbRate: 0.50, 
        gi: '高', 
        notes: '面粉糊烤熟成饼状主食，各地域称呼不同，饱腹感很低，外食一般不低于100g碳水/份' 
      }
    ]
  },
  {
    category: '其他主食',
    items: [
      { 
        id: 'sweet_potato_steamed', 
        name: '红薯（生/蒸煮）', 
        carbRate: 0.18, 
        gi: '高', 
        notes: '' 
      },
      { 
        id: 'sweet_potato_roasted', 
        name: '红薯（烤）', 
        carbRate: 0.23, 
        gi: '高', 
        notes: '' 
      },
      { 
        id: 'potato_steamed', 
        name: '土豆（生/蒸煮）', 
        carbRate: 0.18, 
        gi: '中', 
        notes: '' 
      },
      { 
        id: 'potato_roasted', 
        name: '土豆（烤）', 
        carbRate: 0.23, 
        gi: '高', 
        notes: '' 
      },
      { 
        id: 'noodles_raw', 
        name: '红薯/土豆粉丝（生）', 
        carbRate: 0.84, 
        gi: '低', 
        notes: '晒干制成的粉丝是少有的低GI碳水，例如酸辣粉、红薯粉、土豆粉，但注意米粉米线等新鲜食品不属于此类' 
      },
      { 
        id: 'sweet_corn', 
        name: '甜玉米（生/蒸煮）', 
        carbRate: 0.20, 
        gi: '中', 
        notes: '甜玉米，指传统玉米，碳水率和GI比糯玉米低不少，不建议用于练后餐，电商关键词“笨玉米”、“老式玉米”' 
      },
      { 
        id: 'sticky_corn', 
        name: '糯玉米（生/蒸煮）', 
        carbRate: 0.35, 
        gi: '高', 
        notes: '糯玉米，口味软糯，香味很重，碳水率和GI比甜玉米高得多，电商关键词“糯玉米”' 
      },
      { 
        id: 'kabocha', 
        name: '贝贝南瓜', 
        carbRate: 0.21, 
        gi: '中', 
        notes: '注意贝贝南瓜和传统南瓜的碳水率差别极大' 
      },
      { 
        id: 'traditional_pumpkin', 
        name: '传统南瓜', 
        carbRate: 0.05, 
        gi: '中', 
        notes: '注意贝贝南瓜和传统南瓜的碳水率差别极大' 
      },
      { 
        id: 'yam', 
        name: '山药（生/蒸煮）', 
        carbRate: 0.12, 
        gi: '中', 
        notes: '' 
      },
      { 
        id: 'lotus_root_powder', 
        name: '藕粉（生）', 
        carbRate: 0.90, 
        gi: '低', 
        notes: '少有的低GI碳水，不要用于练后碳水，必须用开水冲调，冷却费时' 
      },
      { 
        id: 'oat_bran', 
        name: '燕麦麸皮（生）', 
        carbRate: 0.45, 
        gi: '低', 
        notes: '少有的低GI碳水，不要用于练后碳水；饱腹感极强；极高膳食纤维' 
      },
      { 
        id: 'instant_oats', 
        name: '速食燕麦片（生）', 
        carbRate: 0.60, 
        gi: '高', 
        notes: '饱腹感极强，一般不用于练后碳水以免太撑；极高膳食纤维' 
      },
      { 
        id: 'instant_rye', 
        name: '速食黑麦片（生）', 
        carbRate: 0.60, 
        gi: '高', 
        notes: '饱腹感极强，一般不用于练后碳水以免太撑；脂肪率比燕麦片低不少，是很纯净的碳水；极高膳食纤维' 
      }
    ]
  },
  {
    category: '方便食品',
    items: [
      { 
        id: 'wugudao_convenient_noodles', 
        name: '五谷道场方便面', 
        carbRate: 0.65, 
        gi: '中', 
        notes: '碳水约50g/袋或盒，虽然料包有油，但面饼非油炸，所以是碳水食物；高钠，建议粉包减半' 
      },
      { 
        id: 'shin_ramyun_normal', 
        name: '辛拉面（普通版）', 
        carbRate: 0.65, 
        gi: '中', 
        notes: '碳水约50g/袋或盒，虽然面饼油炸，但调料包无油，所以接近于碳水食物；高钠，建议粉包减半' 
      },
      { 
        id: 'shin_ramyun_light', 
        name: '辛拉面（空空面版）', 
        carbRate: 0.65, 
        gi: '中', 
        notes: '碳水约50g/袋或盒，调料包无油，面饼非油炸，所以是彻底的碳水食物；高钠，建议粉包减半' 
      },
      { 
        id: 'kangli_pasta', 
        name: '康力快熟意大利面', 
        carbRate: 0.32, 
        gi: '低', 
        notes: '碳水约60g/袋，需另购意大利面酱料，注意意面是少有的低GI碳水，不要用于练后碳水' 
      },
      { 
        id: 'baijia_sour_noodles', 
        name: '白家陈记酸辣粉丝', 
        carbRate: 0.60, 
        gi: '低', 
        notes: '碳水约40g/袋 60g/盒，料包只有几克油，所以是碳水食物；低GI，不用于练后碳水；高钠，建议粉包减半' 
      }
    ]
  },
  {
    category: '便携碳水',
    items: [
      { 
        id: 'sliced_bread', 
        name: '切片面包', 
        carbRate: 0.50, 
        gi: '高', 
        notes: '常规切片面包的脂肪率低于8%（碳水食物），花式面包脂肪率高于15%（轻度的糖油混合物）' 
      },
      { 
        id: 'wangzai_small_buns', 
        name: '旺仔小馒头（46g装）', 
        carbRate: 0.88, 
        gi: '高', 
        notes: '碳水37g/袋，便于配餐，但约有1/4是蔗糖，不宜经常作为练后餐（可能导致果糖摄入超标）' 
      },
      { 
        id: 'wangzai_qq_candy', 
        name: '旺仔QQ糖', 
        carbRate: 0.72, 
        gi: '高', 
        notes: '小包装是20g装，碳水15g/袋；大包装是70g装，碳水50g/袋' 
      },
      { 
        id: 'nanfang_black_sesame_paste', 
        name: '南方黑芝麻糊（无蔗糖版）', 
        carbRate: 0.70, 
        gi: '高', 
        notes: '碳水35g/袋，脂肪很低，实际上是碳水食物；推荐无蔗糖版，甜味剂是葡萄糖，不产生果糖；已熟化，温水冲泡即可' 
      },
      { 
        id: 'nanfang_corn_paste', 
        name: '南方高山玉米糊（无蔗糖版）', 
        carbRate: 0.70, 
        gi: '高', 
        notes: '碳水35g/袋，脂肪很低，实际上是碳水食物；推荐无蔗糖版，甜味剂是葡萄糖，不产生果糖；已熟化，温水冲泡即可' 
      },
      { 
        id: 'nutritional_rice_powder', 
        name: '营养米粉', 
        carbRate: 0.75, 
        gi: '高', 
        notes: '搜索"营养米粉"、"营养米糊"，以区别昂贵的婴儿米粉；已熟化，温水冲泡即可' 
      },  
      { 
        id: 'shiyue_daotian_rice_ball', 
        name: '十月稻田饭团', 
        carbRate: 0.25, 
        gi: '中', 
        notes: '搜索"十月稻田糙米饭团"，碳水25g/袋，开袋即食' 
      },
      { 
        id: 'hongluo_donkey_roll', 
        name: '红螺牌驴打滚', 
        carbRate: 0.86, 
        gi: '高', 
        notes: '搜索“红螺驴打滚”，碳水10g/小袋，此品牌甜味剂是用的麦芽糖而非蔗糖/果葡糖浆，不会产生果糖超标问题' 
      },
      { 
        id: 'shanxi_roasted_bread', 
        name: '山西烤馍', 
        carbRate: 0.70, 
        gi: '高', 
        notes: '搜索“山西纯碱烤馍”，大袋装但保质期很长，口味类似葱香饼干' 
      },
      { 
        id: 'non_fried_crispy_noodles', 
        name: '非油炸干脆面', 
        carbRate: 0.75, 
        gi: '中', 
        notes: '搜索“豫派非油炸干脆面”，碳水27g/袋，口味类似小浣熊等油炸干脆面' 
      },
      { 
        id: 'bhb_cooked_chestnuts', 
        name: 'BHB熟板栗', 
        carbRate: 0.35, 
        gi: '中', 
        notes: '搜索“BHB板栗”，碳水35g/袋' 
      },
      { 
        id: 'shendacheng_bean_paste_qingtuan', 
        name: '沈大成豆沙青团', 
        carbRate: 0.65, 
        gi: '高', 
        notes: '搜索“沈大成豆沙青团”，碳水45g/个，注意只能是豆沙味的，其他口味脂肪太高' 
      },
      { 
        id: 'yunpian_cake', 
        name: '云片糕/桃片', 
        carbRate: 0.80, 
        gi: '高', 
        notes: '一般是小袋装，自己看包装重量，蔗糖率约10%，不致于导致果糖摄入超标' 
      },
      { 
        id: 'rice_crispy_candy', 
        name: '米花糖', 
        carbRate: 0.85, 
        gi: '高', 
        notes: '一般都小袋装，自己看包装重量，蔗糖率约10%，不致于导致果糖摄入超标' 
      },
      { 
        id: 'wahaha_eight_treasure_porridge', 
        name: '娃哈哈八宝粥（木糖醇版）', 
        carbRate: 0.13, 
        gi: '高', 
        notes: '搜索“娃哈哈八宝粥”，碳水47g/罐；推荐木糖醇版，不产生果糖' 
      },
      { 
        id: 'pocari_sweat', 
        name: '宝矿力运动饮料', 
        carbRate: 0.06, 
        gi: '中', 
        notes: '30g蔗糖/瓶，不能作为练后全部碳水，升血糖和胰岛素能力较弱，且可能导致果糖摄入超标' 
      },
      { 
        id: 'mizone_sports_drink', 
        name: '脉动运动饮料', 
        carbRate: 0.05, 
        gi: '中', 
        notes: '30g蔗糖/瓶，不能作为练后全部碳水，升血糖和胰岛素能力较弱，且可能导致果糖摄入超标' 
      }
    ]
  },
  {
    category: '水果',
    notes:'【水果的碳水构成】\n水果的碳水绝大部分是果糖+葡萄糖+蔗糖构成。蔗糖继续分解为一半果糖和一半葡萄糖。因此水果的碳水实质是果糖+葡萄糖的混合物，可以简单记忆成两者各半（不同水果比例有所差别）。\n【碳水率（含糖率）并不直接决定吃糖量】\n网上常见说法是说：放心吃“低糖水果”，不要吃“高糖水果”。这是不可靠的。因为我们吃水果时，不可能各种水果是按等重量来吃的，所以“含糖率”数据的实践意义不大。\n例如：西瓜是低糖水果（7%），但普通人一次很容易吃1kg以上瓜瓤，吃糖量超过70g是很厉害的；反之，香蕉是高糖水果（22%），但普通人吃香蕉一般只吃一根，只有20-30g糖，比吃西瓜要温和得多。因此，爱吃水果的朋友可以自己计算一下你一次到底会吃多少（买水果时标签会有重量，很好计算），切勿觉得“低糖水果”可以放心吃，“高糖水果”就不能吃。\n【水果不能作为主要碳水来源】\na.水果的碳水里大约有一半是果糖，如果把水果替代淀粉类主食作为主要碳水来源，显然很容易超过果糖的日摄入限量30-50g（长期过量摄入果糖会增加脂肪肝、肥胖症、胰岛素抵抗、痛风等代谢疾病的风险）；\nb.水果作为糖水，饱腹感很低，比吃米饭馒头等常规淀粉类主食更容易饥饿，减脂期水果吃得越多越饿；\nc.力训的练后餐也不能用水果作为主要碳水来源，等碳水量的水果和米饭馒头等常规淀粉类主食相比，因为水果大约一半碳水是果糖（果糖不刺激胰岛素分泌），所以尽管花费了大量碳水，但胰岛素水平却较低，不利于合成代谢。\n【水果不是高GI碳水 对血糖胰岛素刺激较弱】\na.食物的GI测试是摄入含有50g碳水的食物，记录在2小时内血糖升高的面积与同种方法下摄入50g葡萄糖导致血糖升高面积的比值。在GI测试里，取用50g碳水的水果，实际能分解葡萄糖的碳水大约只有一半，所以测得的GI值较低。而淀粉类主食，取用50g碳水的主食，会全部分解为葡萄糖，所以测得的GI值较高。水果GI较低的根本原因，是因为水果的碳水不会全部分解为葡萄糖，而不是因为水果的碳水分解为葡萄糖的速度较慢。\nb.水果里只有西瓜、哈密瓜的GI勉强达到高GI（说明其分解为果糖的比例较低），其他水果都是中低GI碳水。因此力训练后餐确实可以吃水果作为一部分碳水来源，但不能作为主要或全部碳水来源，例如练后100g碳水用4根香蕉来提供是错误的，这样虽然花费了巨大的碳水配额，但胰岛素却较低，且果糖摄入会超标。',
    items: [
      { 
        id: 'dried_jujube', 
        name: '干枣', 
        carbRate: 0.50, 
        gi: '中', 
        notes: '' 
      },
    { 
        id: 'fresh_jujube', 
        name: '鲜枣', 
        carbRate: 0.30, 
        gi: '中', 
        notes: '' 
      },
      { 
        id: 'coconut_meat', 
        name: '椰肉', 
        carbRate: 0.30, 
        gi: '中', 
        notes: '' 
      },
      { 
        id: 'durian', 
        name: '榴莲', 
        carbRate: 0.28, 
        gi: '中', 
        notes: '' 
      },
      { 
        id: 'jackfruit', 
        name: '菠萝蜜', 
        carbRate: 0.26, 
        gi: '中', 
        notes: '' 
      },
      { 
        id: 'banana', 
        name: '香蕉', 
        carbRate: 0.22, 
        gi: '中', 
        notes: '' 
      },
      { 
        id: 'grapes', 
        name: '提子', 
        carbRate: 0.17, 
        gi: '中', 
        notes: '' 
      },
      { 
        id: 'lychee', 
        name: '荔枝', 
        carbRate: 0.17, 
        gi: '中', 
        notes: '' 
      },
      { 
        id: 'longan', 
        name: '桂圆', 
        carbRate: 0.17, 
        gi: '中', 
        notes: '' 
      }, 
      { 
        id: 'kiwi', 
        name: '猕猴桃', 
        carbRate: 0.15, 
        gi: '中', 
        notes: '' 
      },  
      { 
        id: 'apple', 
        name: '苹果', 
        carbRate: 0.13, 
        gi: '低', 
        notes: '' 
      },  
      { 
        id: 'pear', 
        name: '梨', 
        carbRate: 0.13, 
        gi: '低', 
        notes: '' 
      },  
      { 
        id: 'cherry', 
        name: '车厘子', 
        carbRate: 0.13, 
        gi: '低', 
        notes: '' 
      },  
      { 
        id: 'dragon_fruit', 
        name: '火龙果', 
        carbRate: 0.13, 
        gi: '中', 
        notes: '' 
      }, 
      { 
        id: 'mango', 
        name: '芒果', 
        carbRate: 0.13, 
        gi: '中', 
        notes: '' 
      },  
      { 
        id: 'mulberry', 
        name: '桑葚', 
        carbRate: 0.13, 
        gi: '低', 
        notes: '' 
      },  
      { 
        id: 'grape', 
        name: '葡萄', 
        carbRate: 0.12, 
        gi: '低', 
        notes: '' 
      },  
      { 
        id: 'tangerine', 
        name: '橘子', 
        carbRate: 0.12, 
        gi: '低', 
        notes: '' 
      },  
      { 
        id: 'orange', 
        name: '橙子', 
        carbRate: 0.11, 
        gi: '低', 
        notes: '' 
      },  
      {
        id: 'peach', 
        name: '桃', 
        carbRate: 0.10, 
        gi: '低', 
        notes: '' 
      },  
      {
        id: 'pomelo', 
        name: '柚子', 
        carbRate: 0.10, 
        gi: '低', 
        notes: '' 
      },  
      {
        id: 'cherries', 
        name: '樱桃', 
        carbRate: 0.10, 
        gi: '低', 
        notes: '' 
      },  
      {
        id: 'prune', 
        name: '西梅', 
        carbRate: 0.10, 
        gi: '低', 
        notes: '' 
      },  
      {
        id: 'loquat', 
        name: '枇杷', 
        carbRate: 0.09, 
        gi: '低', 
        notes: '' 
      },  
      {
        id: 'plum', 
        name: '李子', 
        carbRate: 0.09, 
        gi: '低', 
        notes: '' 
      },  
      {
        id: 'apricot', 
        name: '杏', 
        carbRate: 0.09, 
        gi: '低', 
        notes: '' 
      },  
      {
        id: 'honeydew_melon', 
        name: '哈密瓜', 
        carbRate: 0.08, 
        gi: '高', 
        notes: '' 
      },  
      {
        id: 'watermelon', 
        name: '西瓜', 
        carbRate: 0.07, 
        gi: '高', 
        notes: '' 
      },  
      {
        id: 'papaya', 
        name: '木瓜', 
        carbRate: 0.07, 
        gi: '中', 
        notes: '' 
      },  
      {
        id: 'cherry_tomato', 
        name: '圣女果', 
        carbRate: 0.06, 
        gi: '低', 
        notes: '' 
      },  
      {
        id: 'tomato', 
        name: '西红柿（大番茄）', 
        carbRate: 0.03, 
        gi: '低', 
        notes: '' 
      },  
    ]
  }
];
