import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 👤 前臂肌群
export const forearmsData: MuscleGroupData = {
  region: 'forearms',
  displayName: 'Forearms',
  chineseName: '前臂肌群',
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

// 前臂动作数组（暂时留空）
export const forearmsExercises: Exercise[] = []

// 导出前臂数据
export const forearmsExerciseData = {
  forearms: {
    muscleData: forearmsData,
    exercises: forearmsExercises
  }
}
