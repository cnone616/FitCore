import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 👤 颈部肌群
export const neckData: MuscleGroupData = {
  region: 'neck',
  displayName: 'Neck',
  chineseName: '颈部肌群',
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

// 颈部动作数组（暂时留空）
export const neckExercises: Exercise[] = []

// 导出颈部数据
export const neckExerciseData = {
  neck: {
    muscleData: neckData,
    exercises: neckExercises
  }
}
