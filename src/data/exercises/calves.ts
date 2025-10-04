import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 👤 小腿肌群
export const calvesData: MuscleGroupData = {
  region: 'calves',
  displayName: 'Calves',
  chineseName: '小腿肌群',
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

// 小腿动作数组（暂时留空）
export const calvesExercises: Exercise[] = []

// 导出小腿数据
export const calvesExerciseData = {
  calves: {
    muscleData: calvesData,
    exercises: calvesExercises
  }
}
