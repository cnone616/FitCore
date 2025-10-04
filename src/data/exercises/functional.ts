import { Exercise, MuscleGroupData } from '@/types/fitness-data'

// 🔧 功能性 - 髋部活动性
export const hipMobilityData: MuscleGroupData = {
  region: 'hip-mobility',
  displayName: 'Hip Mobility',
  chineseName: '髋部功能性',
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

// 🔧 功能性 - 膝关节
export const kneeJointData: MuscleGroupData = {
  region: 'knee-joint',
  displayName: 'Knee Joint',
  chineseName: '膝关节功能性',
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

// 🔧 功能性 - 肩关节
export const shoulderJointData: MuscleGroupData = {
  region: 'shoulder-joint',
  displayName: 'Shoulder Joint',
  chineseName: '肩关节功能性',
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

// 功能性动作数组（暂时留空）
export const hipMobilityExercises: Exercise[] = []
export const kneeJointExercises: Exercise[] = []
export const shoulderJointExercises: Exercise[] = []

// 导出功能性数据
export const functionalExerciseData = {
  hipMobility: {
    muscleData: hipMobilityData,
    exercises: hipMobilityExercises
  },
  kneeJoint: {
    muscleData: kneeJointData,
    exercises: kneeJointExercises
  },
  shoulderJoint: {
    muscleData: shoulderJointData,
    exercises: shoulderJointExercises
  }
}
