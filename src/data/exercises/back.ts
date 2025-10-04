import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 🫁 背部 - 上背部
export const upperBackData: MuscleGroupData = {
  region: 'upper-back',
  displayName: 'Upper Back',
  chineseName: '上背部',
  anatomy: {
    description: '上背部由斜方肌上部、菱形肌、后三角肌等组成，负责肩胛骨稳定和上背部姿态',
    origin: '斜方肌：枕外隆突、颈椎、胸椎棘突',
    insertion: '锁骨外侧、肩胛冈',
    innervation: '副神经、颈神经',
    bloodSupply: '颈横动脉、肩胛上动脉'
  },
  functions: [
    '肩胛骨上提和内收',
    '维持正确姿态',
    '支撑头部重量',
    '肩胛骨稳定'
  ],
  commonExercises: [
    'face-pulls',
    'pull-ups',
    'rows',
    'rear-delt-flyes'
  ],
  stretchExercises: [
    'chest-wall-stretch',
    'upper-trap-stretch',
    'neck-stretches'
  ],
  involvedJoints: ['shoulder-blade', 'cervical-spine'],
  trainingTips: [
    '强化后三角肌和中下斜方肌',
    '改善圆肩和低头姿态',
    '注重肩胛骨稳定和控制',
    '结合下拉和划船类动作'
  ],
  injuryPrevention: {
    commonInjuries: ['颈部紧张', '斜方肌过度紧张', '颈椎问题'],
    preventionTips: [
      '避免过度低头',
      '适当的上背部拉伸',
      '强化深层稳定肌',
      '保持正确坐姿'
    ],
    contraindications: [
      '严重颈椎问题',
      '上背部急性损伤',
      '肩胛骨功能障碍'
    ]
  }
}

// 🫁 背部 - 下背部
export const lowerBackData: MuscleGroupData = {
  region: 'lower-back',
  displayName: 'Lower Back',
  chineseName: '下背部',
  anatomy: {
    description: '下背部主要由竖脊肌、下斜方肌、阔背肌等组成，支撑脊柱和维持核心稳定',
    origin: '竖脊肌：骶骨、腰椎',
    insertion: '肋骨、脊椎棘突',
    innervation: '脊神经后支',
    bloodSupply: '腰动脉、骶动脉'
  },
  functions: [
    '脊柱伸展',
    '躯干稳定',
    '负重支撑',
    '躯干旋转'
  ],
  commonExercises: [
    'deadlifts',
    'back-extensions',
    'hyperextensions',
    'rows'
  ],
  stretchExercises: [
    'childs-pose',
    'cat-cow-stretch',
    'lower-back-rotation'
  ],
  involvedJoints: ['lumbar-spine', 'sacrum'],
  trainingTips: [
    '先强化核心肌群基础',
    '循序渐进增加训练强度',
    '重视动作规范',
    '结合功能性训练'
  ],
  injuryPrevention: {
    commonInjuries: ['腰椎间盘突出', '肌肉拉伤', '坐骨神经痛'],
    preventionTips: [
      '充分热身',
      '保持核心稳定',
      '避免过度弯曲',
      '强化髋部屈肌'
    ],
    contraindications: [
      '急性腰椎间盘突出',
      '严重腰椎疾病',
      '脊柱侧弯禁忌'
    ]
  }
}

// 上背部动作数据数组（暂时留空，待后续填充）
export const upperBackExercises: Exercise[] = []

// 下背部动作数据数组（暂时留空，待后续填充）
export const lowerBackExercises: Exercise[] = []

// 导出所有背部相关数据
export const backExerciseData = {
  upperBack: {
    muscleData: upperBackData,
    exercises: upperBackExercises
  },
  lowerBack: {
    muscleData: lowerBackData,
    exercises: lowerBackExercises
  }
}
