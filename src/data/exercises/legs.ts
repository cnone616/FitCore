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

// 腿部动作数组（暂时留空）
export const quadricepsExercises: Exercise[] = []
export const hamstringExercises: Exercise[] = []

// 导出腿部数据
export const legsExerciseData = {
  quadriceps: {
    muscleData: quadricepsData,
    exercises: quadricepsExercises
  },
  hamstrings: {
    storage: hamstringsData,
    exercises: hamstringExercises
  }
}
