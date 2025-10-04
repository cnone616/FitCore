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

// 二头肌动作数组（暂时留空）
export const bicepsInnerExercises: Exercise[] = []
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
