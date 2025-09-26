export interface SectionItem {
  title: string;
  content: string;
  isImportant?: boolean; // 是否重要（红色显示）
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  items: SectionItem[];
}

export const fatLossSections: Section[] = [
  {
    id: 'training',
    title: '力训方案',
    icon: '💪',
    items: [
      {
        title: '频率',
        content: '力训和减脂没有直接关系，减脂需要的热量缺口可以用饮食来提供，而不是必须力训来提供；但力训的好处是能减少减脂期的肌肉损失，想保持肌肉需要练3-5次/周'
      },
      {
        title: '分化',
        content: '完全新手：用二分化或三分化；有基础者：用三分化或四分化'
      },
      {
        title: '场所',
        content: '新手尽量从健身房起步健身，非必要不要居家力训，居家力训对新手反而更难上手，如果必须居家健身，参照<a href="/training/home-3-split" class="text-blue-600 hover:text-blue-800 underline">《训练计划-居家健身》</a>的指导'
      },
      {
        title: '训练计划',
        content: '健身房三分化/健身房四分化/居家三分化训练计划，详见<a href="/training" class="text-blue-600 hover:text-blue-800 underline">《训练计划》</a>系列'
      }
    ]
  },
  {
    id: 'cardio',
    title: '有氧方案',
    icon: '🏃',
    items: [
      {
        title: '概况',
        content: '一般建议：增肌不做有氧；减脂体重80kg以上不做有氧；减脂体重70-80kg先不做有氧，如果饿再加有氧；减脂体重70kg以下每周2小时有氧'
      },
      {
        title: '形式',
        content: '快走、跑步、骑行、游泳、爬楼、跳操、打球等均可，可以自测15秒脉搏算下心率，建议120-150次/分钟，但无需严格要求，有的有氧运动心率是高低波动不稳定的'
      },
      {
        title: '时间点',
        content: '①力训前，不要做有氧，会影响力训；②力训后，如果要做有氧，一般不要超过30分钟；③超过30分钟的有氧，要和力训隔开几小时，或者在休息日做'
      },
        {
          title: '* 有氧可以置换饮食（重要）',
          content: '如果试吃后感觉很饿，就可以增加有氧来让自己多吃一点，每增加有氧消耗100大卡，饮食热量就能多吃100大卡，具体查看<a href="/nutrition/cardio-calories" class="text-blue-600 hover:text-blue-800 underline">《做有氧加饮食热量》</a>',
          isImportant: true
        }
    ]
  },
  {
    id: 'faq',
    title: '常见问答',
    icon: '❓',
    items: [
      {
        title: '减重速度',
        content: '理论上2周减重2%，注意1-2周的体重比较才有意义，每天脂肪分解量只有30-50g，会被体内的食糜重量和含水量变化轻易覆盖，所以两三天的体重变化基本和脂肪量变化无关，没有参考意义'
      },
      {
        title: '减到何时',
        content: '肌肉量一般的普通人，切勿追求低体脂（腹肌、马甲线、肚子无赘肉），建议男性BMI22-23 女性BMI20-21就转增肌；但如果有向心肥胖趋势（空腹腰围 男>85cm 女>80cm）、脂肪肝、二糖，可以多减一些直至症状消除'
      },
      {
        title: '调整配额',
        content: '体重下降10kg，基础代谢会下降约150大卡，减重10kg以内不用调整，减重达到10kg还要继续减，要么比本食谱每天少吃150大卡（100g米饭+1个全蛋），要么参考<a href="/nutrition/cardio-calories" class="text-blue-600 hover:text-blue-800 underline">《做有氧加饮食热量》</a>表每周多做1000大卡有氧（但不要加饮食）'
      }
    ]
  }
];
