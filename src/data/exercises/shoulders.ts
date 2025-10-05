import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 💪 肩部 - 前三角肌
export const frontDeltsData: MuscleGroupData = {
  region: 'front-delts',
  displayName: 'Front Deltoids',
  chineseName: '前三角肌',
  anatomy: {
    description: '前三角肌位于肩部前方，负责肩关节屈曲和前伸动作',
    origin: '锁骨外侧1/3',
    insertion: '肱骨三角肌粗隆',
    innervation: '腋神经',
    bloodSupply: '胸肩峰动脉分支'
  },
  functions: [
    '肩关节屈曲',
    '肩关节水平内收',
    '肩关节内旋',
    '肩关节稳定'
  ],
  commonExercises: [
    'front-raises',
    'bench-press',
    'push-ups',
    'overhead-press'
  ],
  stretchExercises: [
    'wall-stretch',
    'doorway-stretch',
    'pec-stretch'
  ],
  involvedJoints: ['shoulder'],
  trainingTips: [
    '肩关节屈曲动作优先',
    '控制动作速度',
    '注重肌肉感受',
    '避免过度负重'
  ],
  injuryPrevention: {
    commonInjuries: ['肩袖损伤', '肩峰撞击', '关节不稳'],
    preventionTips: [
      '充分热身',
      '控制动作幅度',
      '强化稳定肌群',
      '避免超负荷训练'
    ],
    contraindications: ['急性肩关节损伤', '肩袖撕裂']
  }
}

// 💪 肩部 - 中三角肌
export const middleDeltsData: MuscleGroupData = {
  region: 'middle-delts',
  displayName: 'Middle Deltoids',
  chineseName: '中三角肌',
  anatomy: {
    description: '中三角肌位于肩部外侧，负责肩关节外展和侧举动作',
    origin: '肩峰外侧',
    insertion: '肱骨三角肌粗隆',
    innervation: '腋神经',
    bloodSupply: '胸肩峰动脉分支'
  },
  functions: [
    '肩关节外展',
    '肩关节稳定',
    '手臂侧举',
    '肩部轮廓塑造'
  ],
  commonExercises: [
    'lateral-raises',
    'upright-rows',
    'wide-grip-pull-ups',
    'handstand'
  ],
  stretchExercises: [
    'cross-body-stretch',
    'shoulder-external-rotation',
    'wall-slides'
  ],
  involvedJoints: ['shoulder'],
  trainingTips: [
    '外展动作优先',
    '控制动作幅度',
    '避免借力',
    '重视离心控制'
  ],
  injuryPrevention: {
    commonInjuries: ['肩袖损伤', '肩峰撞击综合征'],
    preventionTips: [
      '渐进式增加重量',
      '保持动作规范',
      '定期拉伸',
      '强化内收肌群'
    ],
    contraindications: ['肩袖损伤', '肩关节不稳']
  }
}

// 💪 肩部 - 三角肌后束
export const rearDeltsData: MuscleGroupData = {
  region: 'rear-delts',
  displayName: 'Rear Deltoids',
  chineseName: '三角肌后束',
  anatomy: {
    description: '三角肌后束位于肩部后侧，负责肩关节后伸和外旋动作',
    origin: '肩胛冈',
    insertion: '肱骨三角肌粗隆',
    innervation: '腋神经',
    bloodSupply: '旋肱后动脉'
  },
  functions: [
    '肩关节后伸',
    '肩关节外旋',
    '维持肩部稳定',
    '改善圆肩姿态'
  ],
  commonExercises: [
    'face-pulls',
    'rear-delt-flyes',
    'wide-grip-bent-over-rows',
    'band-pull-aparts'
  ],
  stretchExercises: [
    'sleepers-stretch',
    'cross-body-stretch',
    'doorway-stretch'
  ],
  involvedJoints: ['shoulder'],
  trainingTips: [
    '后伸动作优先',
    '专注肩胛骨稳定',
    '控制动作感受',
    '配合呼吸'
  ],
  injuryPrevention: {
    commonInjuries: ['三角肌后束紧张', '肩胛骨不稳定'],
    preventionTips: [
      '加强菱形肌',
      '改善胸椎活动度',
      '强化深层稳定肌',
      '注意日常姿态'
    ],
    contraindications: ['急性肩关节损伤']
  }
}

// 💪 肩部 - 斜方肌
export const trapsData: MuscleGroupData = {
  region: 'traps',
  displayName: 'Trapezius',
  chineseName: '斜方肌',
  anatomy: {
    description: '斜方肌是三角形状的大肌肉，分为上、中、下三部，负责肩胛骨运动',
    origin: '枕外隆突、颈椎、胸椎棘突',
    insertion: '锁骨外侧、肩峰、肩胛冈',
    innervation: '副神经、颈神经',
    bloodSupply: '颈横动脉、肩胛上动脉'
  },
  functions: [
    '肩胛骨上提',
    '肩胛骨内收',
    '肩胛骨下沉',
    '头部稳定'
  ],
  commonExercises: [
    'shrugs',
    'upright-rows',
    'face-pulls',
    'push-presses'
  ],
  stretchExercises: [
    'upper-trap-stretch',
    'neck-rom',
    'shoulder-blade-rolls'
  ],
  involvedJoints: ['shoulder-blade', 'cervical-spine'],
  trainingTips: [
    '分不同区域训练',
    '适度强化避免过度',
    '注重拉伸',
    '维持平衡发展'
  ],
  injuryPrevention: {
    commonInjuries: ['肌肉紧张', '颈椎问题', '头痛'],
    preventionTips: [
      '避免过度强化',
      '定期拉伸',
      '注意日常姿态',
      '配合放松训练'
    ],
    contraindications: ['颈椎严重问题']
  }
}

// 各部位动作数组
export const frontDeltsExercises: Exercise[] = [
  {
    id: 'resistance-band-press',
    name: 'Resistance Band Press',
    chineseName: '哑铃/弹力带推举',
    primaryMuscles: ['front-delts'],
    secondaryMuscles: ['middle-delts', 'triceps'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带推举，重点前三角肌',
    instructions: [
      '弹力带固定在胸部高度',
      '双手握住弹力带',
      '向上推举至头顶',
      '挤压肩部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'resistance-band-front-raise',
    name: 'Resistance Band Front Raise',
    chineseName: '哑铃/弹力带前平举',
    primaryMuscles: ['front-delts'],
    secondaryMuscles: ['middle-delts'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带前平举，孤立前三角肌',
    instructions: [
      '弹力带固定在低位',
      '双手握住弹力带',
      '向前举起至肩高',
      '挤压前三角肌',
      '缓慢下降'
    ]
  }
]

export const middleDeltsExercises: Exercise[] = [
  {
    id: 'resistance-band-lateral-raise',
    name: 'Resistance Band Lateral Raise',
    chineseName: '哑铃/弹力带侧平举',
    primaryMuscles: ['middle-delts'],
    secondaryMuscles: ['front-delts'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带侧平举，重点中三角肌',
    instructions: [
      '弹力带固定在低位',
      '双手握住弹力带',
      '向两侧举起至肩高',
      '挤压中三角肌',
      '缓慢下降'
    ]
  },
  {
    id: 'resistance-band-upright-row',
    name: 'Resistance Band Upright Row',
    chineseName: '哑铃/弹力带提拉',
    primaryMuscles: ['middle-delts'],
    secondaryMuscles: ['traps', 'biceps'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带提拉，重点中三角肌和斜方肌',
    instructions: [
      '弹力带固定在低位',
      '双手握住弹力带',
      '向上提拉至胸部',
      '肘部高于手腕',
      '挤压肩部肌肉'
    ]
  }
]

export const rearDeltsExercises: Exercise[] = [
  {
    id: 'dumbbell-rear-fly',
    name: 'Dumbbell Rear Fly',
    chineseName: '哑铃俯身飞鸟',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back', 'upper-back'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '哑铃俯身飞鸟，重点三角肌后束',
    instructions: [
      '俯身45度，双手持哑铃',
      '双臂向两侧展开',
      '挤压三角肌后束',
      '缓慢回到起始位置',
      '保持背部挺直'
    ]
  },
  {
    id: 'reverse-peck-deck',
    name: 'Reverse Peck Deck',
    chineseName: '反向蝴蝶机',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back', 'upper-back'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '反向蝴蝶机，重点三角肌后束',
    instructions: [
      '坐在反向蝴蝶机上',
      '胸部贴靠垫子',
      '双臂向两侧展开',
      '挤压三角肌后束',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'cable-reverse-fly',
    name: 'Cable Reverse Fly',
    chineseName: '绳索反向飞鸟',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back', 'upper-back'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '绳索反向飞鸟，重点三角肌后束',
    instructions: [
      '站在绳索器械中间',
      '双手握住绳索',
      '双臂向两侧展开',
      '挤压三角肌后束',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'seated-row-horizontal-elbow',
    name: 'Seated Row Horizontal Elbow',
    chineseName: '坐姿器械/绳索划船（水平开肘）',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back', 'biceps'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '坐姿器械划船，重点三角肌后束',
    instructions: [
      '坐在划船器械上',
      '双脚踩稳踏板',
      '双手握住把手',
      '肘部向两侧打开',
      '向后拉至胸部',
      '挤压三角肌后束'
    ]
  },
  {
    id: 'overhead-press',
    name: 'Overhead Press',
    chineseName: '器械/哑铃/史密斯推举',
    primaryMuscles: ['front-delts'],
    secondaryMuscles: ['middle-delts', 'triceps'],
    equipment: ['machine', 'dumbbell', 'smith-machine'],
    difficulty: 'intermediate',
    description: '推举动作，重点前三角肌',
    instructions: [
      '坐在器械上或站立',
      '双手握住把手',
      '向上推举至头顶',
      '挤压前三角肌',
      '缓慢下降至起始位置'
    ]
  },
  {
    id: 'front-raise',
    name: 'Front Raise',
    chineseName: '杠铃/哑铃片前平举',
    primaryMuscles: ['front-delts'],
    secondaryMuscles: ['middle-delts'],
    equipment: ['barbell', 'dumbbell'],
    difficulty: 'beginner',
    description: '前平举，重点前三角肌',
    instructions: [
      '双手握住杠铃或哑铃',
      '双臂向前平举至肩高',
      '挤压前三角肌',
      '缓慢下降至起始位置'
    ]
  },
  {
    id: 'lateral-raise',
    name: 'Lateral Raise',
    chineseName: '哑铃/龙门架侧平举',
    primaryMuscles: ['middle-delts'],
    secondaryMuscles: ['front-delts'],
    equipment: ['dumbbell', 'cable-machine'],
    difficulty: 'beginner',
    description: '侧平举，重点中三角肌',
    instructions: [
      '双手各持一个哑铃',
      '双臂向两侧平举至肩高',
      '挤压中三角肌',
      '缓慢下降至起始位置'
    ]
  },
  {
    id: 'upright-row',
    name: 'Upright Row',
    chineseName: '杠铃提拉',
    primaryMuscles: ['middle-delts'],
    secondaryMuscles: ['front-delts', 'biceps'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '杠铃提拉，重点中三角肌',
    instructions: [
      '双手握住杠铃',
      '向上提拉至胸部',
      '肘部高于手腕',
      '挤压中三角肌',
      '缓慢下降至起始位置'
    ]
  }
]

export const trappedExercises: Exercise[] = []

// 导出所有肩部数据
export const shouldersExerciseData = {
  frontDelts: {
    muscleData: frontDeltsData,
    exercises: frontDeltsExercises
  },
  middleDelts: {
    muscleData: middleDeltsData,
    exercises: middleDeltsExercises
  },
  rearDelts: {
    muscleData: rearDeltsData,
    exercises: rearDeltsExercises
  },
  traps: {
    muscleData: trapsData,
    exercises: trappedExercises
  }
}

// 弹力绳肩部动作
export const resistanceBandShoulderExercises: Exercise[] = [
  {
    id: 'home-resistance-band-press',
    name: 'Resistance Band Press',
    chineseName: '哑铃/弹力带推举',
    primaryMuscles: ['front-delts'],
    secondaryMuscles: ['middle-delts', 'triceps'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带推举，重点前三角肌',
    instructions: [
      '弹力带固定在脚下',
      '双手握住弹力带',
      '向上推举至头顶',
      '挤压前三角肌',
      '缓慢下降'
    ]
  },
  {
    id: 'home-resistance-band-front-raise',
    name: 'Resistance Band Front Raise',
    chineseName: '哑铃/弹力带前平举',
    primaryMuscles: ['front-delts'],
    secondaryMuscles: ['middle-delts'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带前平举，重点前三角肌',
    instructions: [
      '弹力带固定在脚下',
      '双手握住弹力带',
      '双臂向前平举至肩高',
      '挤压前三角肌',
      '缓慢下降'
    ]
  },
  {
    id: 'home-resistance-band-lateral-raise',
    name: 'Resistance Band Lateral Raise',
    chineseName: '哑铃/弹力带侧平举',
    primaryMuscles: ['middle-delts'],
    secondaryMuscles: ['front-delts'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带侧平举，重点中三角肌',
    instructions: [
      '弹力带固定在脚下',
      '双手握住弹力带',
      '双臂向两侧平举至肩高',
      '挤压中三角肌',
      '缓慢下降'
    ]
  },
  {
    id: 'home-resistance-band-upright-row',
    name: 'Resistance Band Upright Row',
    chineseName: '哑铃/弹力带提拉',
    primaryMuscles: ['middle-delts'],
    secondaryMuscles: ['front-delts', 'biceps'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带提拉，重点中三角肌',
    instructions: [
      '弹力带固定在脚下',
      '双手握住弹力带',
      '向上提拉至胸部',
      '肘部高于手腕',
      '挤压中三角肌'
    ]
  },
  {
    id: 'home-resistance-band-reverse-fly',
    name: 'Resistance Band Reverse Fly',
    chineseName: '弹力带反向飞鸟',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带反向飞鸟，重点三角肌后束',
    instructions: [
      '弹力带固定在胸部高度',
      '双手握住弹力带',
      '双臂向两侧展开',
      '挤压三角肌后束',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'rear-delt-fly',
    name: 'Rear Delt Fly',
    chineseName: '哑铃俯身飞鸟',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '哑铃俯身飞鸟，重点三角肌后束',
    instructions: [
      '俯身握住哑铃',
      '双臂向两侧展开',
      '挤压三角肌后束',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'reverse-fly-machine',
    name: 'Reverse Fly Machine',
    chineseName: '蝴蝶机反向飞鸟',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '蝴蝶机反向飞鸟，重点三角肌后束',
    instructions: [
      '坐在反向飞鸟器械上',
      '双臂向两侧展开',
      '挤压三角肌后束',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'cable-row-wide',
    name: 'Cable Row Wide',
    chineseName: '坐姿器械/绳索划船（水平开肘）',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back', 'biceps'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '坐姿器械划船，重点三角肌后束',
    instructions: [
      '坐在划船器械上',
      '双脚踩稳踏板',
      '双手握住把手',
      '肘部向两侧打开',
      '向后拉至胸部',
      '挤压三角肌后束'
    ]
  },
  {
    id: 'home-dumbbell-rear-fly',
    name: 'Home Dumbbell Rear Fly',
    chineseName: '哑铃俯身飞鸟',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '居家哑铃俯身飞鸟，重点三角肌后束',
    instructions: [
      '俯身握住哑铃',
      '双臂向两侧展开',
      '挤压三角肌后束',
      '缓慢回到起始位置'
    ]
  }
]
