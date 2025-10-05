import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 🫃 腹部 - 上腹
export const upperAbsData: MuscleGroupData = {
  region: 'upper-abs',
  displayName: 'Upper Abs',
  chineseName: '上腹',
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

// 🫃 腹部 - 下腹
export const lowerAbsData: MuscleGroupData = {
  region: 'lower-abs',
  displayName: 'Lower Abs',
  chineseName: '下腹',
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

// 腹部动作数组
export const upperAbsExercises: Exercise[] = [
  {
    id: 'crunches',
    name: 'Crunches',
    chineseName: '平板卷腹',
    primaryMuscles: ['upper-abs'],
    secondaryMuscles: ['upper-abs'],
    equipment: ['bodyweight'],
    difficulty: 'beginner',
    description: '平板卷腹，重点上腹部',
    instructions: [
      '仰卧，膝盖弯曲',
      '双手放在头后或胸前',
      '向上卷起至肩胛骨离地',
      '挤压腹部肌肉',
      '缓慢下降'
    ]
  }
]

export const lowerAbsExercises: Exercise[] = [
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    chineseName: '悬垂举腿',
    primaryMuscles: ['lower-abs'],
    secondaryMuscles: ['lower-abs'],
    equipment: ['bodyweight'],
    difficulty: 'advanced',
    description: '悬垂举腿，重点下腹部',
    instructions: [
      '悬垂在单杠上',
      '双腿并拢',
      '向上举起双腿至90度',
      '挤压下腹部',
      '缓慢下降'
    ]
  },
  {
    id: 'home-crunches',
    name: 'Home Crunches',
    chineseName: '平板卷腹',
    primaryMuscles: ['upper-abs'],
    secondaryMuscles: ['upper-abs'],
    equipment: ['bodyweight'],
    difficulty: 'beginner',
    description: '居家平板卷腹，重点上腹部',
    instructions: [
      '仰卧在垫子上',
      '膝盖弯曲，双脚平放',
      '双手放在头后',
      '向上卷起至肩胛骨离地',
      '挤压上腹部',
      '缓慢下降'
    ]
  },
  {
    id: 'home-hanging-leg-raise',
    name: 'Home Hanging Leg Raise',
    chineseName: '悬垂举腿',
    primaryMuscles: ['lower-abs'],
    secondaryMuscles: ['lower-abs'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '居家悬垂举腿，重点下腹部',
    instructions: [
      '悬挂在单杠上',
      '双腿并拢',
      '向上举腿至90度',
      '挤压下腹部',
      '缓慢下降'
    ]
  }
]

// 导出腹部数据
export const absExerciseData = {
  upperAbs: {
    muscleData: upperAbsData,
    exercises: upperAbsExercises
  },
  lowerAbs: {
    muscleData: lowerAbsData,
    exercises: lowerAbsExercises
  }
}
