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

// 臀部动作数组（暂时留空）
export const upperGlutesExercises: Exercise[] = []
export const lowerGlutesExercises: Exercise[] = []

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
