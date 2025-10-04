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

// 💪 肩部 - 后三角肌
export const rearDeltsData: MuscleGroupData = {
  region: 'rear-delts',
  displayName: 'Rear Deltoids',
  chineseName: '后三角肌',
  anatomy: {
    description: '后三角肌位于肩部后侧，负责肩关节后伸和外旋动作',
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
  injuryPreventation: {
    commonInjuries: ['后三角肌紧张', '肩胛骨不稳定'],
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

// 各部位动作数组（暂时留空）
export const frontDeltsExercises: Exercise[] = []
export const middleDeltsExercises: Exercise[] = []
export const rearDeltsExercises: Exercise[] = []
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
