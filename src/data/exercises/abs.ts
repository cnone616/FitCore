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
 训练Tips: [],
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

// 腹部动作数组（暂时留空）
export const upperAbsExercises: Exercise[] = []
export const lowerAbsExercises: Exercise[] = []

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
