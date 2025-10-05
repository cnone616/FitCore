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

// 三头肌动作数组
export const tricepsLongHeadExercises: Exercise[] = [
  {
    id: 'resistance-band-overhead-extension',
    name: 'Resistance Band Overhead Extension',
    chineseName: '哑铃/弹力带颈后臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['front-delts'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带颈后臂屈伸，重点肱三头肌长头',
    instructions: [
      '弹力带固定在低位',
      '双手握住弹力带举过头顶',
      '肘部固定，向下屈伸',
      '挤压肱三头肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'dumbbell-overhead-extension',
    name: 'Dumbbell Overhead Extension',
    chineseName: '哑铃仰卧臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['front-delts'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'intermediate',
    description: '哑铃仰卧臂屈伸，重点肱三头肌',
    instructions: [
      '仰卧在凳子上',
      '双手持哑铃举过头顶',
      '肘部固定，向下屈伸',
      '挤压肱三头肌',
      '缓慢回到起始位置'
    ]
  }
]

export const tricepsShortHeadExercises: Exercise[] = [
  {
    id: 'close-grip-push-up',
    name: 'Close Grip Push-up',
    chineseName: '窄距俯卧撑',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['chest', 'front-delts'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '窄距俯卧撑，重点肱三头肌',
    instructions: [
      '俯卧撑姿势，双手窄握',
      '双手距离小于肩宽',
      '身体保持一条直线',
      '下降胸部至手部',
      '推起身体还原'
    ]
  },
  {
    id: 'cable-pushdown',
    name: 'Cable Pushdown',
    chineseName: '龙门架直杆下压',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['cable-machine'],
    difficulty: 'beginner',
    description: '龙门架下压，重点肱三头肌',
    instructions: [
      '站在龙门架前',
      '双手握住直杆',
      '肘部贴近身体',
      '向下推至手臂完全伸展',
      '挤压肱三头肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'barbell-overhead-extension',
    name: 'Barbell Overhead Extension',
    chineseName: '杠铃仰卧臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '杠铃仰卧臂屈伸，重点肱三头肌',
    instructions: [
      '仰卧在凳子上',
      '双手握住杠铃',
      '手臂举过头顶',
      '向下弯曲至前臂平行地面',
      '向上推至手臂完全伸展',
      '挤压肱三头肌'
    ]
  },
  {
    id: 'close-grip-bench-press',
    name: 'Close Grip Bench Press',
    chineseName: '杠铃/哑铃/史密斯窄距卧推',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['chest', 'front-delts'],
    equipment: ['barbell', 'dumbbell', 'smith-machine'],
    difficulty: 'intermediate',
    description: '窄距卧推，重点肱三头肌',
    instructions: [
      '仰卧在凳子上',
      '双手窄握杠铃',
      '下降杠铃至胸部',
      '向上推至手臂完全伸展',
      '挤压肱三头肌',
      '缓慢下降杠铃'
    ]
  }
]

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

// 弹力绳三头肌动作
export const resistanceBandTricepsExercises: Exercise[] = [
  {
    id: 'home-resistance-band-overhead-extension',
    name: 'Resistance Band Overhead Extension',
    chineseName: '哑铃/弹力带颈后臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带颈后臂屈伸，重点肱三头肌',
    instructions: [
      '弹力带固定在脚下',
      '双手握住弹力带',
      '手臂举过头顶',
      '向下伸展至手臂完全伸直',
      '挤压肱三头肌'
    ]
  },
  {
    id: 'cable-overhead-extension',
    name: 'Cable Overhead Extension',
    chineseName: '龙门架绳索臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '绳索臂屈伸，重点肱三头肌',
    instructions: [
      '站在龙门架前',
      '双手握住绳索',
      '手臂举过头顶',
      '向下伸展至手臂完全伸直',
      '挤压肱三头肌',
      '缓慢回到起始位置'
    ]
  }
]
