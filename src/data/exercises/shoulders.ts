import { Exercise, EquipmentCategory, MuscleExercisesByEquipment } from '@/types/fitness-data'

// 🏋️‍♂️ 肩部 - 杠铃动作
const shouldersBarbellExercises: Exercise[] = [
  {
    id: 'barbell-front-raise',
    name: 'Barbell Front Raise',
    chineseName: '杠铃/哑铃片前平举',
    primaryMuscles: ['frontDelts'],
    secondaryMuscles: ['sideDelts'],
    equipment: ['barbell'],
    difficulty: 'beginner',
    description: '肩屈动作,重点训练前三角肌',
    instructions: [
      '双手握住杠铃,握距与肩同宽',
      '双臂伸直,杠铃位于大腿前侧',
      '向前平举至肩高',
      '挤压前三角肌',
      '缓慢下降至起始位置'
    ]
  },
  {
    id: 'barbell-upright-row',
    name: 'Barbell Upright Row',
    chineseName: '杠铃提拉',
    primaryMuscles: ['sideDelts'],
    secondaryMuscles: ['traps', 'biceps'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '肩外展动作,重点训练中三角肌',
    instructions: [
      '双手窄握杠铃',
      '向上提拉至胸部',
      '肘部高于手腕',
      '挤压中三角肌',
      '缓慢下降至起始位置'
    ]
  }
]

// 🏋️‍♂️ 肩部 - 哑铃动作
const shouldersDumbbellExercises: Exercise[] = [
  {
    id: 'dumbbell-overhead-press',
    name: 'Dumbbell Overhead Press',
    chineseName: '哑铃推举',
    primaryMuscles: ['frontDelts'],
    secondaryMuscles: ['sideDelts', 'triceps'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '肩屈混合肩外展,重点训练前三角肌',
    instructions: [
      '双手各持一个哑铃',
      '哑铃位于肩部两侧',
      '向上推举至头顶',
      '挤压前三角肌',
      '缓慢下降至起始位置'
    ]
  },
  {
    id: 'dumbbell-lateral-raise',
    name: 'Dumbbell Lateral Raise',
    chineseName: '哑铃侧平举',
    primaryMuscles: ['sideDelts'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    description: '肩外展动作,重点训练中三角肌',
    instructions: [
      '双手各持一个哑铃',
      '双臂向两侧平举至肩高',
      '挤压中三角肌',
      '缓慢下降至起始位置',
      '保持肘部微弯'
    ]
  },
  {
    id: 'dumbbell-front-raise',
    name: 'Dumbbell Front Raise',
    chineseName: '哑铃前平举',
    primaryMuscles: ['frontDelts'],
    secondaryMuscles: ['sideDelts'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    description: '肩屈动作,孤立训练前三角肌',
    instructions: [
      '双手各持一个哑铃',
      '双臂向前平举至肩高',
      '挤压前三角肌',
      '缓慢下降至起始位置'
    ]
  },
  {
    id: 'dumbbell-rear-delt-fly',
    name: 'Dumbbell Rear Delt Fly',
    chineseName: '哑铃俯身飞鸟',
    primaryMuscles: ['rearDelts'],
    secondaryMuscles: ['lats', 'traps'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    description: '肩水平外展,重点训练三角肌后束',
    instructions: [
      '俯身约90度',
      '双手各持一个哑铃',
      '保持肘部微弯',
      '向两侧抬起哑铃',
      '挤压三角肌后束',
      '缓慢回到起始位置'
    ]
  }
]

// 🔗 肩部 - 绳索动作
const shouldersCableExercises: Exercise[] = [
  {
    id: 'cable-lateral-raise',
    name: 'Cable Lateral Raise',
    chineseName: '龙门架侧平举',
    primaryMuscles: ['sideDelts'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['cable-machine'],
    difficulty: 'beginner',
    description: '肩外展动作,持续张力训练中三角肌',
    instructions: [
      '站在龙门架旁边',
      '单手握住低位绳索',
      '向侧面举起至肩高',
      '挤压中三角肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'cable-reverse-fly',
    name: 'Cable Reverse Fly',
    chineseName: '龙门架反向飞鸟',
    primaryMuscles: ['rearDelts'],
    secondaryMuscles: ['lats', 'traps'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '肩水平外展,训练三角肌后束',
    instructions: [
      '站在龙门架中间',
      '交叉握住对侧手柄',
      '向两侧拉开',
      '保持肘部微弯',
      '挤压三角肌后束',
      '缓慢回到起始位置'
    ]
  }
]

// 📊 肩部 - 史密斯机动作
const shouldersSmithExercises: Exercise[] = [
  {
    id: 'smith-overhead-press',
    name: 'Smith Machine Overhead Press',
    chineseName: '史密斯推举',
    primaryMuscles: ['frontDelts'],
    secondaryMuscles: ['sideDelts', 'triceps'],
    equipment: ['smith-machine'],
    difficulty: 'beginner',
    description: '固定轨迹推举,重点训练前三角肌',
    instructions: [
      '坐在史密斯机下',
      '双手握住杠铃',
      '向上推举至头顶',
      '挤压前三角肌',
      '缓慢下降至起始位置'
    ]
  }
]

// 🏥 肩部 - 器械动作
const shouldersMachineExercises: Exercise[] = [
  {
    id: 'machine-shoulder-press',
    name: 'Machine Shoulder Press',
    chineseName: '器械推肩',
    primaryMuscles: ['frontDelts'],
    secondaryMuscles: ['sideDelts', 'triceps'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械推举,轨迹固定安全',
    instructions: [
      '坐在推肩器械上',
      '调整座椅高度',
      '双手握住把手',
      '向上推举',
      '挤压前三角肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'reverse-peck-deck',
    name: 'Reverse Peck Deck',
    chineseName: '蝴蝶机反向飞鸟',
    primaryMuscles: ['rearDelts'],
    secondaryMuscles: ['lats', 'traps'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '肩水平外展,孤立训练三角肌后束',
    instructions: [
      '坐在蝴蝶机上',
      '胸部贴靠垫子',
      '双手握住手柄',
      '向后拉开',
      '挤压三角肌后束',
      '缓慢回到起始位置'
    ]
  }
]

// 📊 完整的肩部数据（按器械分类）
export const shouldersExerciseData: MuscleExercisesByEquipment = {
  muscleRegion: 'shoulders',
  equipmentCategories: [
    {
      category: 'barbell',
      chineseName: '杠铃',
      exercises: shouldersBarbellExercises
    },
    {
      category: 'dumbbell',
      chineseName: '哑铃',
      exercises: shouldersDumbbellExercises
    },
    {
      category: 'cable',
      chineseName: '绳索',
      exercises: shouldersCableExercises
    },
    {
      category: 'smith',
      chineseName: '史密斯',
      exercises: shouldersSmithExercises
    },
    {
      category: 'machine',
      chineseName: '器械',
      exercises: shouldersMachineExercises
    }
  ]
}
