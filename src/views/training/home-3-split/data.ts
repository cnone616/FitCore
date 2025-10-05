// 健身计划概览信息
export const planOverview = {
  title: '居家三分化训练计划',
  description: '适合在家进行的全身力量训练，主要依靠自重和简单器械。请注意：非必要请勿居家健身，居家健身对新手来说比健身房更难'
};

export const home3SplitPlans = [
  {
    dayId: 'home-day-1',
    dayName: 'Day1：背+肩后束+肱二头',
    description: '为什么它们在一天练？因为练背会有肩伸（肩后束）、肩水平外展（肩后束）、肘屈（肱二头肌），所以练背后接着继续用少量组数补练肩后束、肱二头即可',
    trainingBlocks: {
      muscleGroupId: 'home-back-training',
      muscleGroupName: '背部训练',
      exerciseCategories: [
        {
          categoryId: 'home-pull-exercises',
          categoryName: '背部动作',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'pull-up',
              exerciseName: '引体向上（可用弹力带减重）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '[宽握]肩内收'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-high-pull',
              exerciseName: '弹力带高位下拉',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '[中握]肩内收mix肩伸'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-low-pull',
              exerciseName: '弹力带俯身划船',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '[宽握]肩水平外展'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'home-dumbbell-row',
              exerciseName: '单边哑铃划船',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩伸'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            }
          ]
        }
      ]
    },
    additionalBlocks: {
      muscleGroupId: 'home-rear-delt-bicep',
      muscleGroupName: '肩后束+肱二头',
      exerciseCategories: [
        {
          categoryId: 'home-rear-deltoid',
          categoryName: '肩后束',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'home-dumbbell-rear-fly',
              exerciseName: '哑铃俯身飞鸟',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平外展'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-reverse-fly',
              exerciseName: '弹力带反向飞鸟',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平外展'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-wide-row',
              exerciseName: '弹力带划船（水平开肘）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平外展'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'home-bicep',
          categoryName: '肱二头',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'home-dumbbell-curl',
              exerciseName: '哑铃弯举',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-curl',
              exerciseName: '弹力带弯举',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'home-concentration-curl',
              exerciseName: '集中弯举',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    dayId: 'home-day-2',
    dayName: 'Day2：胸+肩前中束+肱三头',
    description: '为什么它们在一天练？因为练胸会有肩屈（肩前束）、肩水平内收（肩前束）、肘伸（肱三头肌），所以练胸后接着继续用少量组数补练肩前束、肱三头即可',
    trainingBlocks: {
      muscleGroupId: 'home-chest-training',
      muscleGroupName: '胸部训练',
      exerciseCategories: [
        {
          categoryId: 'home-middle-chest',
          categoryName: '中胸（占胸大肌大部肌纤维）',
          instruction: '选2个动作 总共10组',
          exercises: [
            {
              exerciseId: 'home-push-up',
              exerciseName: '俯卧撑',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩屈'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'home-dumbbell-press',
              exerciseName: '哑铃卧推',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩屈'


                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-fly',
              exerciseName: '弹力带夹胸（水平夹）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'home-lower-chest',
          categoryName: '下胸',
          instruction: '新手偶尔加做 选1个动作 总共4组',
          exercises: [
            {
              exerciseId: 'home-resistance-band-low-fly',
              exerciseName: '弹力带夹胸（完全下夹）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩内收'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-decline-fly',
              exerciseName: '弹力带夹胸（下斜夹）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩内收'
                }
              ]
            },
            {
              exerciseId: 'home-dumbbell-decline-press',
              exerciseName: '哑铃卧推（下斜推）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩内收'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'home-incline-push-up',
              exerciseName: '俯卧撑（手垫高10cm）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩内收'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'home-dips',
              exerciseName: '双杠臂屈伸（上身前趴30-60°）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩内收'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'home-upper-chest',
          categoryName: '上胸',
          instruction: '新手偶尔加做 选1个动作 总共4组',
          exercises: [
            {
              exerciseId: 'home-barbell-incline-press',
              exerciseName: '杠铃卧推（上斜推）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩屈'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'home-decline-push-up',
              exerciseName: '俯卧撑（脚垫高20cm）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩屈'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-incline-fly',
              exerciseName: '弹力带夹胸（上斜夹）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩屈'
                }
              ]
            }
          ]
        }
      ]
    },
    additionalBlocks: {
      muscleGroupId: 'home-front-deltoid-tricep',
      muscleGroupName: '肩前中束+肱三头',
      exerciseCategories: [
        {
          categoryId: 'home-front-deltoid',
          categoryName: '肩前束',
          instruction: '选1个动作 总共5组',
          exercises: [
            {
              exerciseId: 'home-resistance-band-press',
              exerciseName: '哑铃/弹力带推举',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩屈mix肩外展'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-front-raise',
              exerciseName: '哑铃/弹力带前平举',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩屈'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'home-middle-deltoid',
          categoryName: '肩中束',
          instruction: '选1个动作 总共5组',
          exercises: [
            {
              exerciseId: 'home-resistance-band-lateral-raise',
              exerciseName: '哑铃/弹力带侧平举',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩外展'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-upright-row',
              exerciseName: '哑铃/弹力带提拉',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩外展'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'home-tricep',
          categoryName: '肱三头',
          instruction: '选1个动作 总共5组',
          exercises: [
            {
              exerciseId: 'home-resistance-band-overhead-extension',
              exerciseName: '哑铃/弹力带颈后臂屈伸',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'home-dumbbell-overhead-extension',
              exerciseName: '哑铃仰卧臂屈伸',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'home-close-grip-push-up',
              exerciseName: '窄距俯卧撑',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩屈'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    dayId: 'home-day-3',
    dayName: 'Day3：腿臀+腹',
    description: '男性主要练股四头肌+腘绳肌，女性主要练臀大肌',
    trainingBlocks: {
      muscleGroupId: 'home-leg-training',
      muscleGroupName: '腿部训练',
      exerciseCategories: [
        {
          categoryId: 'home-quadriceps',
          categoryName: '股四头肌',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'home-dumbbell-lunge',
              exerciseName: '哑铃箭步蹲（单腿动作 无需大哑铃）',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            },
            {
              exerciseId: 'home-dumbbell-squat',
              exerciseName: '哑铃深蹲（又叫高脚杯深蹲）',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'home-hamstrings',
          categoryName: '腘绳肌',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'home-dumbbell-deadlift',
              exerciseName: '哑铃硬拉',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-deadlift',
              exerciseName: '弹力带硬拉',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'home-glutes',
          categoryName: '臀大肌',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'home-resistance-band-glute-bridge',
              exerciseName: '弹力带臀桥',
              jointMovements: [
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            },
            {
              exerciseId: 'home-resistance-band-hip-abduction',
              exerciseName: '弹力带髋外展',
              jointMovements: [
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋外展'
                }
              ]
            }
          ]
        }
      ]
    },
    additionalBlocks: {
      muscleGroupId: 'home-abs-training',
      muscleGroupName: '腹部训练',
      exerciseCategories: [
        {
          categoryId: 'home-abs-exercises',
          categoryName: '腹',
          instruction: '男性要练 女性偶尔练下 选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'home-crunches',
              exerciseName: '平板卷腹',
              jointMovements: [
                {
                  jointId: 'spine-joint',
                  jointName: '脊柱',
                  movementDescription: '躯干屈曲（借用膝关节格子）'
                }
              ]
            },
            {
              exerciseId: 'home-hanging-leg-raise',
              exerciseName: '悬垂举腿',
              jointMovements: [
                {
                  jointId: 'spine-joint',
                  jointName: '脊柱',
                  movementDescription: '骨盆后倾（借用膝关节格子）'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋屈'
                }
              ]
            }
          ]
        }
      ]
    }
  }
];

// 居家健身的特殊指导信息
export const homeFitnessGuidance = {
  warnings: [
    {
      title: '重要提醒',
      content: '非必要请勿居家健身！居家健身只适合有经验者'
    },
    {
      title: '新手不适合的原因',
      contents: [
        '①居家健身只有自由重量（哑铃/弹力带）动作，没有固定器械引导轨迹，对新手更难',
        '②居家健身设备投入不低，需要多组配重，不比健身房便宜',
        '③居家健身只能节约路上时间，大部分人不至于拿不出这点时间',
        '④建议先去健身房体验一周，体会各种器械后再考虑居家'
      ]
    }
  ],
  equipmentOptions: [
   {
      title: '【便宜版】',
      contents: [
        '卧推凳1个',
        '弹力带3-4根（男性20-60磅，女性10-30磅）',
        '弹力带把手2个（减少勒手不适）',
        '弹力带门扣1个（提供不同高度的固定位）',
        '★弹力带缺点：阻力会随行程猛增，不是理想选择'
      ]
    },
    {
      title: '【稍贵版】',
      contents: [
        '卧推凳1个',
        '哑铃3-4对（男性单个重量5-20kg，女性单个重量2.5-10kg）',
        '或可调节哑铃',
        '★闲鱼有便宜二手货可以看看'
      ]
    },
    {
      title: '【昂贵版】',
      contents: [
        '除上述哑铃外，额外购买杠铃和力量架',
        '价格远高于健身房办卡，相当于家庭小型健身房',
        '建议改用健身房力训计划'
      ]
    }
  ],
  trainingGuidelines: [
    {
      title: '分化选择',
      content: '居家设备有限，单个部位动作少，建议三分化，不建议四分化、五分化'
    },
    {
      title: '训练频率',
      content: '平均每周3-5次，如果长期低于每周3次则建议放弃力训'
    },
    {
      title: '训练组数',
      content: '组数范围较大（20组上下），可根据疲劳度调整，一次训练1-1.5小时'
    },
    {
      title: '配重选择',
      content: '大部分时候选择能做8-12次的中等配重，适应新动作可做12-15次'
    },
    {
      title: '力竭与否',
      content: '有砸伤危险的动作（深蹲/卧推/推举）不要力竭，其余可做到力竭'
    },
    {
      title: '组间休息',
      content: '胸/背/臀腿2-3分钟，肩膀/手臂2分钟，最少不低于1.5分钟'
    },
    {
      title: '女性注意',
      contents: [
        '①女性不太需要练胸大肌，可跳过一个训练日',
        '②配重选择稍轻（10-15次重复）',
        '③组间休息稍短（大肌群2分钟，小肌群1.5分钟）'
      ]
    }
  ]
};

// 专门为 TrainingGuide 组件准备的居家健身指导数据
export const homeTrainingGuide = [
  {
    id: 'home_warning',
    title: '❗️ 重要警告',
    content: '非必要请勿居家健身！居家健身只适合有经验者',
    order: 1
  },
  {
    id: 'home_hard_for_beginners',
    title: '新手为什么不适合',
    content: [
      '①居家健身只有自由重量（哑铃/弹力带）动作，没有固定器械引导轨迹，对新手更难',
      '②居家健身设备投入不低，需要多组配重，不比健身房便宜',
      '③居家健身只能节约路上时间，大部分人不至于拿不出这点时间',
      '④建议先去健身房体验一周，体会各种器械后再考虑居家'
    ],
    order: 2
  },
  {
    id: 'home_equipment_simple',
    title: '设备要求（便宜版）',
    content: [
      '卧推凳1个',
      '弹力带3-4根（男性20-60磅，女性10-30磅）',
      '弹力带把手2个（减少勒手不适）',
      '弹力带门扣1个（提供不同高度的固定位）',
      '★弹力带缺点：阻力会随行程猛增，不是理想选择'
    ],
    order: 3
  },
  {
    id: 'home_equipment_advanced',
    title: '设备要求（稍贵版）',
    content: [
      '卧推凳1个',
      '哑铃3-4对（男性单个重量5-20kg，女性单个重量2.5-10kg）',
      '或可调节哑铃',
      '★闲鱼有便宜二手货可以看看'
    ],
    order: 4
  },
  {
    id: 'home_split_choice',
    title: '分化选择',
    content: '居家设备有限，单个部位动作少，建议三分化，不建议四分化、五分化',
    order: 5
  },
  {
    id: 'home_frequency',
    title: '训练频率',
    content: '平均每周3-5次，如果长期低于每周3次则建议放弃力训',
    order: 6
  },
  {
    id: 'home_volume',
    title: '训练组数',
    content: '组数范围较大（20组上下），可根据疲劳度调整，一次训练1-1.5小时',
    order: 7
  },
  {
    id: 'home_weight_selection',
    title: '配重选择',
    content: '大部分时候选择能做8-12次的中等配重，适应新动作可做12-15次',
    order: 8
  },
  {
    id: 'home_failure',
    title: '力竭与否',
    content: '有砸伤危险的动作（深蹲/卧推/推举）不要力竭，其余可做到力竭',
    order: 9
  },
  {
    id: 'home_rest',
    title: '组间休息',
    content: '胸/背/臀腿2-3分钟，肩膀/手臂2分钟，最少不低于1.5分钟',
    order: 10
  },
  {
    id: 'home_female_notes',
    title: '女性注意',
    content: [
      '①女性不太需要练胸大肌，可跳过一个训练日',
      '②配重选择稍轻（10-15次重复）',
      '③组间休息稍短（大肌群2分钟，小肌群1.5分钟）'
    ],
    order: 11
  }
];