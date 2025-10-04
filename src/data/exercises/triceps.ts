import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 🦿 三头肌 - 长头
export const tricepsLongHeadData: MuscleGroupData = {
  region: 'triceps-long-head',
  displayName: 'Triceps Long Head',
  chineseName: '三头肌长头',
  anatomy: {
    description: '三头肌长头位于手臂内侧，起于肩胛骨，是最大的三头肌头',
    origin: '肩胛骨盂下结节',
    insertion: '尺骨鹰嘴',
    innervation: '桡神经',
    bloodSupply: '肱动脉、肱深动脉'
  },
  functions: [
    '肘关节伸展',
    '肩关节内收',
    '长头专门功能',
    '肩伸辅助'
  ],
  commonExercises: [
    'overhead-extensions',
    'close-grip-bench-press',
    'dips',
    'lying-overhead-extensions'
  ],
  stretchExercises: [
    'overhead-tricep-stretch',
    'doorframe-tricep-stretch',
    'arm-behind-back-stretch'
  ],
  involvedJoints: ['elbow', 'shoulder'],
  trainingTips: [
    '肩部辅助的动作优先',
    '全范围动作',
    '控制拉伸感受',
    '注重肌肉控制'
  ],
  injuryPrevention: {
    commonInjuries: ['肌腱下端伤', '肘关节过伸伤'],
    preventionTips: [
      '逐渐增加强度',
      '避免突然负荷',
      '正确热身',
      '训练后拉伸'
    ],
    contraindications: ['三头肌腱急性损伤']
  }
}

// 🦿 三头肌 - 短头
export const tricepsShortHeadData: MuscleGroupData = {
  region: 'triceps-short-head',
  displayName: 'Triceps Short Head & Lateral Head',
  chineseName: '三头肌短头和外侧头',
  anatomy: {
    description: '三头肌短头和外侧头主要负责肘关节伸展，较不涉及肩关节运动',
    origin: '肱骨后面（短头和外侧头）',
    insertion: '尺骨鹰嘴',
    innervation: '桡神经',
    bloodSupply: '肱动脉分支'
  },
  functions: [
    '肘关节伸展',
    '手臂稳定',
    '推力动作',
    '支撑稳定'
  ],
  commonExercises: [
    'close-grip-push-ups',
    'tricep-dips',
    'skull-crushers',
    'rope-pushdowns'
  ],
  stretchExercises: [
    'arm-behind-head-stretch',
    'tricep-wall-stretch',
    'doorframe-stretch'
  ],
  involvedJoints: ['elbow'],
  trainingTips: [
    '直线推压动作',
    '肘部固定稳定',
    '全程控制',
    '避肩部参与'
  ],
  injuryPrevention: {
    commonInjuries: ['肌腱损伤', '肘关节劳损'],
    preventionTips: [
      '控制动作范围',
      '避免快速动作',
      '充分恢复',
      '技术优先'
    ],
    contraindications: ['肘关节急性问题']
  }
}

// 三头肌动作数组（暂时留空）
export const tricepsLongHeadExercises: Exercise[] = []
export const tricepsShortHeadExercises: Exercise[] = []

// 导出所有三头肌数据
export const tricepsExerciseData = {
  tricepsLongHead: {
    muscleData: tricepsLongHeadData,
    exercises: tricepsLongHeadExercises
  },
  tricepsShortHead: {
    muscleData: tricepsShortHeadData,
    exercises: tricepsShortHeadExercises
  }
}
