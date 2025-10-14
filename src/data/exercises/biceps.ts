import { Exercise, MuscleExercisesByEquipment } from '@/types/fitness-data'

// 🏋️‍♂️ 二头肌 - 杠铃动作
const bicepsBarbellExercises: Exercise[] = [
  {
    id: 'barbell-curl',
    name: 'Barbell Curl',
    chineseName: '杠铃弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['barbell'],
    difficulty: 'beginner',
    description: '肘屈动作,经典二头肌训练',
    instructions: [
      '双手握住杠铃,握距与肩同宽',
      '双臂自然下垂',
      '向上弯举至肩部',
      '挤压二头肌',
      '缓慢下降至起始位置'
    ]
  }
]

// 🏋️‍♂️ 二头肌 - 哑铃动作
const bicepsDumbbellExercises: Exercise[] = [
  {
    id: 'dumbbell-curl',
    name: 'Dumbbell Curl',
    chineseName: '哑铃弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    description: '肘屈动作,经典二头肌训练',
    instructions: [
      '双手各持一个哑铃',
      '双臂自然下垂',
      '交替或同时向上弯举',
      '挤压二头肌',
      '缓慢下降'
    ]
  },
  {
    id: 'concentration-curl',
    name: 'Concentration Curl',
    chineseName: '集中弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'beginner',
    description: '孤立训练二头肌',
    instructions: [
      '坐在凳子上,单手持哑铃',
      '肘部抵在大腿内侧',
      '向上弯举',
      '挤压二头肌',
      '缓慢下降'
    ]
  }
]

// 🏥 二头肌 - 器械动作
const bicepsMachineExercises: Exercise[] = [
  {
    id: 'machine-curl',
    name: 'Machine Curl',
    chineseName: '器械弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械弯举,轨迹固定',
    instructions: [
      '坐在器械上',
      '调整座椅高度',
      '双手握住把手',
      '向上弯举',
      '挤压二头肌',
      '缓慢下降'
    ]
  },
  {
    id: 'preacher-curl',
    name: 'Preacher Curl',
    chineseName: '牧师椅弯举',
    primaryMuscles: ['biceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['preacher-bench', 'barbell'],
    difficulty: 'intermediate',
    description: '牧师椅弯举,孤立二头肌',
    instructions: [
      '坐在牧师椅上',
      '手臂靠在斜板上',
      '握住杠铃或哑铃',
      '向上弯举',
      '挤压二头肌',
      '缓慢下降'
    ]
  }
]

// 📊 完整的二头肌数据（按器械分类）
export const bicepsExerciseData: MuscleExercisesByEquipment = {
  muscleRegion: 'biceps',
  equipmentCategories: [
    {
      category: 'barbell',
      chineseName: '杠铃',
      exercises: bicepsBarbellExercises
    },
    {
      category: 'dumbbell',
      chineseName: '哑铃',
      exercises: bicepsDumbbellExercises
    },
    {
      category: 'machine',
      chineseName: '器械',
      exercises: bicepsMachineExercises
    }
  ]
}
