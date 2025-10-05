import { Exercise } from '@/types/fitness-data'
import { chestExerciseData, missingChestExercises, resistanceBandChestExercises } from '@/data/exercises/chest'
import { upperBackExercises, lowerBackExercises, resistanceBandBackExercises } from '@/data/exercises/back'
import { frontDeltsExercises, middleDeltsExercises, rearDeltsExercises, trappedExercises, resistanceBandShoulderExercises } from '@/data/exercises/shoulders'
import { bicepsInnerExercises, bicepsOuterExercises, resistanceBandBicepsExercises } from '@/data/exercises/biceps'
import { tricepsLongHeadExercises, tricepsShortHeadExercises, resistanceBandTricepsExercises } from '@/data/exercises/triceps'
import { quadricepsExercises, hamstringExercises, resistanceBandLegExercises } from '@/data/exercises/legs'
import { upperGlutesExercises, lowerGlutesExercises, resistanceBandGlutesExercises } from '@/data/exercises/glutes'
import { upperAbsExercises, lowerAbsExercises } from '@/data/exercises/abs'

// 所有动作库的集合
const allExerciseLibraries = [
  // 胸部动作
  ...chestExerciseData.equipmentCategories.flatMap(category => category.exercises),
  ...missingChestExercises,
  ...resistanceBandChestExercises,
  
  // 背部动作
  ...upperBackExercises,
  ...lowerBackExercises,
  ...resistanceBandBackExercises,
  
  // 肩部动作
  ...frontDeltsExercises,
  ...middleDeltsExercises,
  ...rearDeltsExercises,
  ...trappedExercises,
  ...resistanceBandShoulderExercises,
  
  // 手臂动作
  ...bicepsInnerExercises,
  ...bicepsOuterExercises,
  ...resistanceBandBicepsExercises,
  ...tricepsLongHeadExercises,
  ...tricepsShortHeadExercises,
  ...resistanceBandTricepsExercises,
  
  // 腿部动作
  ...quadricepsExercises,
  ...hamstringExercises,
  ...resistanceBandLegExercises,
  
  // 臀大肌动作
  ...upperGlutesExercises,
  ...lowerGlutesExercises,
  ...resistanceBandGlutesExercises,
  
  // 腹部动作
  ...upperAbsExercises,
  ...lowerAbsExercises
]

// 创建动作ID到动作对象的映射
const exerciseMap = new Map<string, Exercise>()
allExerciseLibraries.forEach(exercise => {
  exerciseMap.set(exercise.id, exercise)
})

/**
 * 根据动作ID查找动作
 * @param exerciseId 动作ID
 * @returns 动作对象或null
 */
export function findExerciseById(exerciseId: string): Exercise | null {
  return exerciseMap.get(exerciseId) || null
}

/**
 * 获取所有动作
 * @returns 所有动作的数组
 */
export function getAllExercises(): Exercise[] {
  return allExerciseLibraries
}

/**
 * 根据肌肉群查找动作
 * @param muscleGroup 肌肉群
 * @returns 该肌肉群的动作数组
 */
export function getExercisesByMuscleGroup(muscleGroup: string): Exercise[] {
  return allExerciseLibraries.filter(exercise => 
    exercise.primaryMuscles.includes(muscleGroup as any) || 
    (exercise.secondaryMuscles && exercise.secondaryMuscles.includes(muscleGroup as any))
  )
}

/**
 * 根据器械类型查找动作
 * @param equipment 器械类型
 * @returns 该器械的动作数组
 */
export function getExercisesByEquipment(equipment: string): Exercise[] {
  return allExerciseLibraries.filter(exercise => 
    exercise.equipment.includes(equipment as any)
  )
}

/**
 * 搜索动作
 * @param query 搜索关键词
 * @returns 匹配的动作数组
 */
export function searchExercises(query: string): Exercise[] {
  const lowerQuery = query.toLowerCase()
  return allExerciseLibraries.filter(exercise => 
    exercise.name.toLowerCase().includes(lowerQuery) ||
    exercise.chineseName.toLowerCase().includes(lowerQuery) ||
    exercise.description.toLowerCase().includes(lowerQuery)
  )
}

// 导出动作映射表，方便调试
export { exerciseMap }
