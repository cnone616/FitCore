import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 🔧 核心稳定
export const coreData: MuscleGroupData = {
  region: 'abs',
  displayName: 'Core Stability',
  chineseName: '核心稳定',
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

// 核心动作数组（暂时留空）
export const coreExercises: Exercise[] = []

// 导出核心数据
export const coreExerciseData = {
  core: {
    muscleData: coreData,
    exercises: coreExercises
  }
}
