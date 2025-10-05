import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 🦾 二头肌 - 内侧头
export const bicepsInnerData: MuscleGroupData = {
  region: 'biceps-inner',
  displayName: 'Biceps Inner Head',
  chineseName: '二头肌内侧头',
  anatomy: {
    description: '二头肌内侧头（长头）位于手臂内侧，负责肘关节屈曲和肩关节屈曲',
    origin: '肩胛骨盂上结节',
    insertion: '桡骨粗隆',
    innervation: '肌皮神经',
    bloodSupply: '肱动脉分支'
  },
  functions: [
    '肘关节屈曲',
    '前臂旋后',
    '肩关节屈曲',
    '手部灵活运动'
  ],
  commonExercises: [
    'cable-curls',
    'dumbbell-curls',
    'hammer-curls',
    'chin-ups'
  ],
  stretchExercises: [
    'bicep-wall-stretch',
    'overhead-bicep-stretch',
    'supinated-stretch'
  ],
  involvedJoints: ['elbow', 'shoulder', 'wrist'],
  trainingTips: [
    '肘部贴近身体',
    '控制动作幅度',
    '避免借力',
    '注重离心控制'
  ],
  injuryPrevention: {
    commonInjuries: ['肌腱炎', '肌肉拉伤', '肘关节伤'],
    preventionTips: [
      '充分热身',
      '训练前拉伸',
      '保持正确姿态',
      '避免过度负重'
    ],
    contraindications: ['肘关节急性损伤', '二头肌腱断裂']
  }
}

// 🦾 二头肌 - 外侧头
export const bicepsOuterData: MuscleGroupData = {
  region: 'biceps-outer',
  displayName: 'Biceps Outer Head',
  chineseName: '二头肌外侧头',
  anatomy: {
    description: '二头肌外侧头（短头）位于手臂外侧，主要负责肘关节屈曲',
    origin: '肩胛骨喙突',
    insertion: '桡骨粗隆',
    innervation: '肌皮神经',
    bloodSupply: '肱动脉分支'
  },
  functions: [
    '肘关节屈曲',
    '前臂旋后',
    '肩关节辅助屈曲',
    '手臂轮廓塑造'
  ],
  commonExercises: [
    'dumbbell-curls',
    'barbell-curls',
    'preacher-curls',
    'spider-curls'
  ],
  stretchExercises: [
    'bicep-wall-stretch',
    'overhead-bicep-stretch',
    'doorframe-stretch'
  ],
  involvedJoints: ['elbow', 'shoulder'],
  trainingTips: [
    '全范围动作',
    '控制负重',
    '避免超伸',
    '注重顶峰收缩'
  ],
  injuryPrevention: {
    commonInjuries: ['二头肌拉伤', '肌腱炎'],
    preventionTips: [
      '循序渐进',
      '充分休息',
      '正确技术',
      '拉伸放松'
    ],
    contraindications: ['二头肌急性损伤']
  }
}

// 二头肌动作数组
export const bicepsInnerExercises: Exercise[] = [
  {
    id: 'dumbbell-curl',
    name: 'Dumbbell Curl',
    chineseName: '哑铃弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['biceps', 'forearms'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    description: '经典哑铃弯举，重点肱二头肌',
    instructions: [
      '双手各持一个哑铃',
      '肘部贴近身体',
      '向上弯举至肩高',
      '挤压肱二头肌',
      '缓慢下降哑铃'
    ]
  },
  {
    id: 'resistance-band-curl',
    name: 'Resistance Band Curl',
    chineseName: '弹力带弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['biceps', 'forearms'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带弯举，重点肱二头肌',
    instructions: [
      '弹力带固定在低位',
      '双手握住弹力带',
      '向上弯举至肩高',
      '挤压肱二头肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'barbell-curl',
    name: 'Barbell Curl',
    chineseName: '杠铃弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['biceps', 'forearms'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '杠铃弯举，重点肱二头肌',
    instructions: [
      '双手握杠铃，与肩同宽',
      '肘部贴近身体',
      '向上弯举至肩高',
      '挤压肱二头肌',
      '缓慢下降杠铃'
    ]
  },
  {
    id: 'machine-curl',
    name: 'Machine Curl',
    chineseName: '器械弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['biceps'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械弯举，轨迹固定',
    instructions: [
      '坐在器械座椅上',
      '双臂放在垫子上',
      '向上弯举至肩高',
      '挤压肱二头肌',
      '缓慢下降'
    ]
  },
  {
    id: 'preacher-curl',
    name: 'Preacher Curl',
    chineseName: '牧师椅弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['biceps'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    description: '牧师椅弯举，孤立肱二头肌',
    instructions: [
      '坐在牧师椅上',
      '双臂放在斜板上',
      '向上弯举杠铃',
      '挤压肱二头肌',
      '缓慢下降'
    ]
  },
  {
    id: 'concentration-curl',
    name: 'Concentration Curl',
    chineseName: '集中弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '集中弯举，重点肱二头肌',
    instructions: [
      '坐在凳子上',
      '单手持哑铃',
      '肘部支撑在大腿内侧',
      '向上弯举至肩高',
      '挤压肱二头肌',
      '缓慢下降哑铃'
    ]
  }
]

export const bicepsOuterExercises: Exercise[] = []

// 导出所有二头肌数据
export const bicepsExerciseData = {
  bicepsInner: {
    muscleData: bicepsInnerData,
    exercises: bicepsInnerExercises
  },
  bicepsOuter: {
    muscleData: bicepsOuterData,
    exercises: bicepsOuterExercises
  }
}

// 弹力绳二头肌动作
export const resistanceBandBicepsExercises: Exercise[] = [
  {
    id: 'home-resistance-band-curl',
    name: 'Resistance Band Curl',
    chineseName: '弹力带弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带弯举，重点肱二头肌',
    instructions: [
      '弹力带固定在脚下',
      '双手握住弹力带',
      '向上弯举至肩高',
      '挤压肱二头肌',
      '缓慢下降'
    ]
  },
  {
    id: 'home-dumbbell-curl',
    name: 'Home Dumbbell Curl',
    chineseName: '哑铃弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    description: '居家哑铃弯举，重点肱二头肌',
    instructions: [
      '双手各持一个哑铃',
      '向上弯举至肩高',
      '挤压肱二头肌',
      '缓慢下降'
    ]
  },
  {
    id: 'home-concentration-curl',
    name: 'Home Concentration Curl',
    chineseName: '集中弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '居家集中弯举，重点肱二头肌',
    instructions: [
      '坐在凳子上',
      '单手持哑铃',
      '肘部支撑在大腿内侧',
      '向上弯举至肩高',
      '挤压肱二头肌',
      '缓慢下降哑铃'
    ]
  }
]
