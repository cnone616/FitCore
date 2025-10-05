import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 🫁 背部 - 上背部
export const upperBackData: MuscleGroupData = {
  region: 'upper-back',
  displayName: 'Upper Back',
  chineseName: '上背部',
  anatomy: {
    description: '上背部由斜方肌上部、菱形肌、三角肌后束等组成，负责肩胛骨稳定和上背部姿态',
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
    '强化三角肌后束和中下斜方肌',
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

// 上背部动作数据数组
export const upperBackExercises: Exercise[] = [
  {
    id: 'pull-up',
    name: 'Pull-ups',
    chineseName: '引体向上',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '经典的上肢拉力训练动作，主要锻炼背阔肌和肱二头肌',
    instructions: [
      '双手握住单杠，握距略宽于肩',
      '身体悬垂，核心收紧，保持身体稳定',
      '肩胛骨下沉，启动背部肌肉',
      '向上拉至下巴过杠，挤压背部肌肉',
      '缓慢下降至完全伸展，控制下降速度',
      '保持呼吸节奏，上拉时呼气，下降时吸气'
    ]
  },
  {
    id: 'assisted-pull-up',
    name: 'Pull-ups (Assisted)',
    chineseName: '引体向上（可用弹力带减重）',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['bodyweight', 'resistance-band'],
    difficulty: 'beginner',
    description: '引体向上背部训练，可用弹力带辅助',
    instructions: [
      '双手握住单杠，略宽于肩',
      '身体悬垂，核心收紧',
      '向上拉至下巴过杠',
      '缓慢下降至完全伸展',
      '可用弹力带辅助减重'
    ]
  },
  {
    id: 'wide-grip-pull-ups',
    name: 'Wide Grip Pull-ups',
    chineseName: '宽握引体向上',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['rear-delts', 'biceps'],
    equipment: ['bodyweight'],
    difficulty: 'advanced',
    description: '宽握距的引体向上，更加强调背阔肌和上背部的发展',
    instructions: [
      '双手握住单杠，握距明显宽于肩',
      '身体悬垂，核心收紧',
      '肩胛骨下沉，启动背部肌肉',
      '向上拉至胸部接近单杠',
      '挤压背部肌肉，特别是背阔肌',
      '缓慢下降至完全伸展'
    ]
  },
  {
    id: 'resistance-band-high-pull',
    name: 'Resistance Band High Pull',
    chineseName: '弹力带高位下拉',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带高位下拉，模拟引体向上',
    instructions: [
      '弹力带固定在头顶高度',
      '双手握住弹力带',
      '向下拉至胸部',
      '挤压背部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'resistance-band-low-pull',
    name: 'Resistance Band Low Pull',
    chineseName: '弹力带俯身划船',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['upper-back', 'rear-delts', 'biceps'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带俯身划船，重点中背部',
    instructions: [
      '弹力带固定在低位',
      '俯身45度，核心收紧',
      '双手握住弹力带',
      '向后拉至腹部',
      '挤压肩胛骨'
    ]
  },
  {
    id: 'single-dumbbell-row',
    name: 'Single Dumbbell Row',
    chineseName: '单边哑铃划船',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['upper-back', 'rear-delts', 'biceps'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'intermediate',
    description: '单边哑铃划船，重点背部',
    instructions: [
      '一手撑在凳子上，一手持哑铃',
      '俯身，背部挺直',
      '哑铃拉至腹部',
      '挤压背部肌肉',
      '缓慢下降哑铃'
    ]
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    chineseName: '高位下拉',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['cable-machine'],
    difficulty: 'beginner',
    description: '器械高位下拉，重点背阔肌',
    instructions: [
      '坐在下拉器械上',
      '双手宽握拉杆',
      '向下拉至胸部',
      '挤压背部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'machine-pulldown',
    name: 'Machine Pulldown',
    chineseName: '器械下拉',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械下拉，轨迹固定',
    instructions: [
      '坐在器械座椅上',
      '双手握住下拉手柄',
      '向下拉至胸部',
      '挤压背部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'barbell-row',
    name: 'Barbell Row',
    chineseName: '杠铃划船',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['upper-back', 'rear-delts', 'biceps'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '杠铃划船，重点背部',
    instructions: [
      '俯身45度，双手握杠铃',
      '背部挺直，核心收紧',
      '杠铃拉至腹部',
      '挤压背部肌肉',
      '缓慢下降杠铃'
    ]
  },
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    chineseName: '坐姿绳索划船',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['upper-back', 'rear-delts', 'biceps'],
    equipment: ['cable-machine'],
    difficulty: 'beginner',
    description: '坐姿绳索划船，重点中背部',
    instructions: [
      '坐在绳索器械上',
      '双脚踩踏板，膝盖微弯',
      '双手握住手柄',
      '向后拉至腹部',
      '挤压肩胛骨'
    ]
  },
  {
    id: 'straight-arm-pulldown',
    name: 'Straight Arm Pulldown',
    chineseName: '直臂下拉',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['rear-delts'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '直臂下拉，孤立背阔肌',
    instructions: [
      '站在绳索器械前',
      '双手握住绳索',
      '直臂向下拉至大腿',
      '挤压背阔肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'rowing-exercise',
    name: 'Rowing Exercise',
    chineseName: '划船动作',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['cable-machine'],
    difficulty: 'beginner',
    description: '划船动作，重点背部肌肉',
    instructions: [
      '坐在划船器械上',
      '双脚踩稳踏板',
      '双手握住拉杆',
      '向后拉至胸部',
      '挤压背部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 't-bar-row',
    name: 'T-Bar Row',
    chineseName: 'T杆俯身划船',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: 'T杆俯身划船，重点中背部',
    instructions: [
      '跨坐在T杆上',
      '俯身握住把手',
      '向后拉至腹部',
      '挤压背部肌肉',
      '缓慢回到起始位置'
    ]
  }
]

// 下背部动作数据数组（暂时留空，待后续填充）
export const lowerBackExercises: Exercise[] = []

// 弹力绳背部动作
export const resistanceBandBackExercises: Exercise[] = [
  {
    id: 'home-resistance-band-high-pull',
    name: 'Resistance Band High Pull',
    chineseName: '弹力带高位下拉',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带高位下拉，重点背阔肌',
    instructions: [
      '弹力带固定在门框上方',
      '双手握住弹力带',
      '向下拉至胸部',
      '挤压背部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'home-resistance-band-low-pull',
    name: 'Resistance Band Low Pull',
    chineseName: '弹力带俯身划船',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带俯身划船，重点中背部',
    instructions: [
      '弹力带固定在低位',
      '俯身握住弹力带',
      '向后拉至腹部',
      '挤压背部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'home-resistance-band-wide-row',
    name: 'Resistance Band Wide Row',
    chineseName: '弹力带划船（水平开肘）',
    primaryMuscles: ['rear-delts'],
    secondaryMuscles: ['upper-back', 'biceps'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带划船，重点三角肌后束',
    instructions: [
      '弹力带固定在胸部高度',
      '双手握住弹力带',
      '肘部向两侧打开',
      '向后拉至胸部',
      '挤压三角肌后束'
    ]
  },
  {
    id: 'home-dumbbell-row',
    name: 'Home Dumbbell Row',
    chineseName: '单边哑铃划船',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '居家单边哑铃划船，重点中背部',
    instructions: [
      '单手持哑铃',
      '另一手支撑在凳子上',
      '向后拉至腹部',
      '挤压背部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'dumbbell-row',
    name: 'Dumbbell Row',
    chineseName: '单边哑铃划船',
    primaryMuscles: ['upper-back'],
    secondaryMuscles: ['biceps', 'rear-delts'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '单边哑铃划船，重点中背部',
    instructions: [
      '单手持哑铃',
      '另一手支撑在凳子上',
      '向后拉至腹部',
      '挤压背部肌肉',
      '缓慢回到起始位置'
    ]
  }
]

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
