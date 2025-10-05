import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 🦵 腿部 - 股四头肌
export const quadricepsData: MuscleGroupData = {
  region: 'quadriceps',
  displayName: 'Quadriceps',
  chineseName: '股四头肌',
  anatomy: {
    description: '',
    origin: '',
    insertion: '',
    innervation: '',
    bloodSupply: ''
  },
  functions: [],
  commonExercises: [],
  stretchExercises: [],
  involvedJoints: [],
  trainingTips: [],
  injuryPrevention: {
    commonInjuries: [],
    preventionTips: [],
    contraindications: []
  }
}

// 🦵 腿部 - 腘绳肌
export const hamstringsData: MuscleGroupData = {
  region: 'hamstrings',
  displayName: 'Hamstrings',
  chineseName: '腘绳肌',
  anatomy: {
    description: '',
    origin: '',
    insertion: '',
    innervation: '',
    bloodSupply: ''
  },
  functions: [],
  commonExercises: [],
  stretchExercises: [],
  involvedJoints: [],
  trainingTips: [],
  injuryPrevention: {
    commonInjuries: [],
    preventionTips: [],
    contraindications: []
  }
}

// 腿部动作数组
export const quadricepsExercises: Exercise[] = [
  {
    id: 'dumbbell-lunge',
    name: 'Dumbbell Lunge',
    chineseName: '哑铃箭步蹲（单腿动作 无需大哑铃）',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['upper-glutes', 'hamstrings'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '哑铃箭步蹲，重点股四头肌',
    instructions: [
      '双手各持一个哑铃',
      '向前迈一大步',
      '下降至前腿膝盖90度',
      '后腿膝盖接近地面',
      '推起回到起始位置'
    ]
  },
  {
    id: 'dumbbell-squat',
    name: 'Dumbbell Squat',
    chineseName: '哑铃深蹲（又叫高脚杯深蹲）',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['upper-glutes', 'hamstrings'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    description: '哑铃深蹲，重点股四头肌和臀大肌',
    instructions: [
      '双手持哑铃于胸前',
      '双脚与肩同宽',
      '下降至大腿平行地面',
      '膝盖不超过脚尖',
      '推起回到起始位置'
    ]
  }
]

export const hamstringExercises: Exercise[] = [
  {
    id: 'dumbbell-deadlift',
    name: 'Dumbbell Deadlift',
    chineseName: '哑铃硬拉',
    primaryMuscles: ['hamstrings'],
    secondaryMuscles: ['upper-glutes', 'lower-back'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '哑铃硬拉，重点腘绳肌和臀大肌',
    instructions: [
      '双手各持一个哑铃',
      '双脚与肩同宽',
      '俯身保持背部挺直',
      '哑铃沿大腿下降',
      '臀部后推，推起哑铃'
    ]
  },
  {
    id: 'resistance-band-deadlift',
    name: 'Resistance Band Deadlift',
    chineseName: '弹力带硬拉',
    primaryMuscles: ['hamstrings'],
    secondaryMuscles: ['upper-glutes', 'lower-back'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带硬拉，重点腘绳肌',
    instructions: [
      '弹力带固定在低位',
      '双脚踩住弹力带',
      '双手握住弹力带',
      '俯身保持背部挺直',
      '臀部后推，推起弹力带'
    ]
  },
  {
    id: 'barbell-squat',
    name: 'Barbell Squat',
    chineseName: '杠铃深蹲',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['upper-glutes', 'hamstrings'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '杠铃深蹲，重点股四头肌',
    instructions: [
      '杠铃放在肩膀上',
      '双脚与肩同宽',
      '下降至大腿平行地面',
      '膝盖不超过脚尖',
      '推起回到起始位置'
    ]
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension',
    chineseName: '器械腿屈伸',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: [],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械腿屈伸，重点股四头肌',
    instructions: [
      '坐在腿屈伸器械上',
      '双脚放在垫子下',
      '向上伸展至腿部完全伸直',
      '挤压股四头肌',
      '缓慢下降至起始位置'
    ]
  },
  {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift',
    chineseName: '罗马尼亚/传统硬拉',
    primaryMuscles: ['hamstrings'],
    secondaryMuscles: ['upper-glutes', 'lower-back'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '罗马尼亚硬拉，重点腘绳肌',
    instructions: [
      '双手握住杠铃',
      '双脚与肩同宽',
      '俯身保持背部挺直',
      '杠铃沿大腿下降',
      '臀部后推，推起杠铃'
    ]
  },
  {
    id: 'leg-curl',
    name: 'Leg Curl',
    chineseName: '器械腿弯举',
    primaryMuscles: ['hamstrings'],
    secondaryMuscles: [],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械腿弯举，重点腘绳肌',
    instructions: [
      '俯卧在腿弯举器械上',
      '双脚放在垫子下',
      '向上弯曲至脚跟接近臀部',
      '挤压腘绳肌',
      '缓慢下降至起始位置'
    ]
  },
  {
    id: 'hack-squat',
    name: 'Hack Squat',
    chineseName: '哈克机',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['upper-glutes', 'hamstrings'],
    equipment: ['machine'],
    difficulty: 'intermediate',
    description: '哈克机深蹲，重点股四头肌',
    instructions: [
      '站在哈克机上',
      '肩膀贴靠垫子',
      '双脚与肩同宽',
      '下降至大腿平行地面',
      '推起回到起始位置'
    ]
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    chineseName: '倒蹬机',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['upper-glutes', 'hamstrings'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '倒蹬机，重点股四头肌',
    instructions: [
      '坐在倒蹬机上',
      '双脚放在踏板上',
      '下降至膝盖90度',
      '推起至腿部完全伸展',
      '挤压股四头肌'
    ]
  },
  {
    id: 'smith-squat',
    name: 'Smith Squat',
    chineseName: '史密斯深蹲',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['upper-glutes', 'hamstrings'],
    equipment: ['smith-machine'],
    difficulty: 'intermediate',
    description: '史密斯深蹲，重点股四头肌',
    instructions: [
      '杠铃放在史密斯机上',
      '双脚与肩同宽',
      '下降至大腿平行地面',
      '膝盖不超过脚尖',
      '推起回到起始位置'
    ]
  }
]

// 导出腿部数据
export const legsExerciseData = {
  quadriceps: {
    muscleData: quadricepsData,
    exercises: quadricepsExercises
  },
  hamstrings: {
    muscleData: hamstringsData,
    exercises: hamstringExercises
  }
}

// 弹力绳腿部动作
export const resistanceBandLegExercises: Exercise[] = [
  {
    id: 'home-resistance-band-deadlift',
    name: 'Resistance Band Deadlift',
    chineseName: '弹力带硬拉',
    primaryMuscles: ['hamstrings'],
    secondaryMuscles: ['upper-glutes', 'lower-back'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带硬拉，重点腘绳肌',
    instructions: [
      '弹力带固定在脚下',
      '双手握住弹力带',
      '俯身保持背部挺直',
      '臀部后推，推起弹力带',
      '挤压腘绳肌'
    ]
  },
  {
    id: 'lunge',
    name: 'Lunge',
    chineseName: '箭步蹲',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['upper-glutes', 'hamstrings'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '箭步蹲，重点股四头肌',
    instructions: [
      '站立，双脚与肩同宽',
      '向前迈一大步',
      '下降至前腿膝盖90度',
      '后腿膝盖接近地面',
      '推起回到起始位置'
    ]
  },
  {
    id: 'home-dumbbell-lunge',
    name: 'Home Dumbbell Lunge',
    chineseName: '哑铃箭步蹲（单腿动作 无需大哑铃）',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['upper-glutes', 'hamstrings'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '居家哑铃箭步蹲，重点股四头肌',
    instructions: [
      '双手各持一个哑铃',
      '向前迈一大步',
      '下降至前腿膝盖90度',
      '后腿膝盖接近地面',
      '推起回到起始位置'
    ]
  },
  {
    id: 'home-dumbbell-squat',
    name: 'Home Dumbbell Squat',
    chineseName: '哑铃深蹲（又叫高脚杯深蹲）',
    primaryMuscles: ['quadriceps'],
    secondaryMuscles: ['upper-glutes', 'hamstrings'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    description: '居家哑铃深蹲，重点股四头肌',
    instructions: [
      '双手持哑铃在胸前',
      '双脚与肩同宽',
      '下降至大腿平行地面',
      '膝盖不超过脚尖',
      '推起回到起始位置'
    ]
  },
  {
    id: 'home-dumbbell-deadlift',
    name: 'Home Dumbbell Deadlift',
    chineseName: '哑铃硬拉',
    primaryMuscles: ['hamstrings'],
    secondaryMuscles: ['upper-glutes', 'lower-back'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '居家哑铃硬拉，重点腘绳肌',
    instructions: [
      '双手各持一个哑铃',
      '双脚与肩同宽',
      '俯身保持背部挺直',
      '哑铃沿大腿下降',
      '臀部后推，推起哑铃'
    ]
  }
]
