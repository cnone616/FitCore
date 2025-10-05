import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 🍑 臀部 - 上臀
export const upperGlutesData: MuscleGroupData = {
  region: 'upper-glutes',
  displayName: 'Upper Glutes',
  chineseName: '上臀',
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

// 🍑 臀部 - 下臀
export const lowerGlutesData: MuscleGroupData = {
  region: 'lower-glutes',
  displayName: 'Lower Glutes',
  chineseName: '下臀',
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

// 臀部动作数组
export const upperGlutesExercises: Exercise[] = [
  {
    id: 'resistance-band-glute-bridge',
    name: 'Resistance Band Glute Bridge',
    chineseName: '弹力带臀桥',
    primaryMuscles: ['upper-glutes'],
    secondaryMuscles: ['hamstrings', 'lower-back'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带臀桥，重点臀大肌',
    instructions: [
      '弹力带固定在膝盖上方',
      '仰卧，膝盖弯曲',
      '臀部向上推起',
      '挤压臀大肌',
      '缓慢下降'
    ]
  }
]

export const lowerGlutesExercises: Exercise[] = [
  {
    id: 'resistance-band-hip-abduction',
    name: 'Resistance Band Hip Abduction',
    chineseName: '弹力带髋外展',
    primaryMuscles: ['upper-glutes'],
    secondaryMuscles: ['upper-glutes'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带髋外展，重点臀大肌',
    instructions: [
      '弹力带固定在脚踝',
      '侧卧或站立',
      '腿部向外侧展开',
      '挤压臀大肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'hip-thrust',
    name: 'Machine Hip Thrust',
    chineseName: '器械臀冲',
    primaryMuscles: ['upper-glutes'],
    secondaryMuscles: ['hamstrings'],
    equipment: ['machine'],
    difficulty: 'intermediate',
    description: '器械臀冲，重点臀大肌',
    instructions: [
      '坐在臀冲器械上',
      '背部贴靠垫子',
      '双脚踩稳踏板',
      '臀部向上推起',
      '挤压臀大肌',
      '缓慢下降'
    ]
  },
  {
    id: 'barbell-hip-thrust',
    name: 'Barbell Hip Thrust',
    chineseName: '杠铃臀冲',
    primaryMuscles: ['upper-glutes'],
    secondaryMuscles: ['hamstrings'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '杠铃臀冲，重点臀大肌',
    instructions: [
      '坐在垫子上，杠铃放在髋部',
      '背部贴靠垫子',
      '双脚踩稳地面',
      '臀部向上推起',
      '挤压臀大肌',
      '缓慢下降'
    ]
  }
]

// 导出臀部数据
export const glutesExerciseData = {
  upperGlutes: {
    muscleData: upperGlutesData,
    exercises: upperGlutesExercises
  },
  lowerGlutes: {
    muscleData: lowerGlutesData,
    exercises: lowerGlutesExercises
  }
}

// 弹力绳臀部动作
export const resistanceBandGlutesExercises: Exercise[] = [
  {
    id: 'home-resistance-band-glute-bridge',
    name: 'Resistance Band Glute Bridge',
    chineseName: '弹力带臀桥',
    primaryMuscles: ['upper-glutes'],
    secondaryMuscles: ['hamstrings'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带臀桥，重点臀大肌',
    instructions: [
      '弹力带固定在膝盖上方',
      '仰卧，膝盖弯曲',
      '臀部向上推起',
      '挤压臀大肌',
      '缓慢下降'
    ]
  },
  {
    id: 'home-resistance-band-hip-abduction',
    name: 'Resistance Band Hip Abduction',
    chineseName: '弹力带髋外展',
    primaryMuscles: ['upper-glutes'],
    secondaryMuscles: ['upper-glutes'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带髋外展，重点臀大肌',
    instructions: [
      '弹力带固定在脚踝',
      '侧卧或站立',
      '腿部向外侧展开',
      '挤压臀大肌',
      '缓慢回到起始位置'
    ]
  }
]
