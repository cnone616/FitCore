import { Exercise, EquipmentCategory, MuscleExercisesByEquipment } from '@/types/fitness-data'

// 🫴 三头肌 - 自重动作
const tricepsBodyweightExercises: Exercise[] = [
  {
    id: 'close-grip-push-up',
    name: 'Close Grip Push-up',
    chineseName: '窄距俯卧撑',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['chest', 'frontDelts'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '窄距俯卧撑，重点肱三头肌',
    instructions: [
      '俯卧撑姿势，双手窄握',
      '双手距离小于肩宽',
      '身体保持一条直线',
      '下降胸部至手部',
      '推起身体还原'
    ]
  }
]

// 🏋️‍♂️ 三头肌 - 杠铃动作
const tricepsBarbellExercises: Exercise[] = [
  {
    id: 'barbell-overhead-extension',
    name: 'Barbell Overhead Extension',
    chineseName: '杠铃仰卧臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '杠铃仰卧臂屈伸，重点肱三头肌',
    instructions: [
      '仰卧在凳子上',
      '双手握住杠铃',
      '手臂举过头顶',
      '向下弯曲至前臂平行地面',
      '向上推至手臂完全伸展',
      '挤压肱三头肌'
    ]
  },
  {
    id: 'close-grip-bench-press',
    name: 'Close Grip Bench Press',
    chineseName: '杠铃窄距卧推',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['chest', 'frontDelts'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    description: '窄距卧推，重点肱三头肌',
    instructions: [
      '仰卧在凳子上',
      '双手窄握杠铃',
      '下降杠铃至胸部',
      '向上推至手臂完全伸展',
      '挤压肱三头肌',
      '缓慢下降杠铃'
    ]
  }
]

// 🏋️‍♂️ 三头肌 - 哑铃动作
const tricepsDumbbellExercises: Exercise[] = [
  {
    id: 'dumbbell-overhead-extension',
    name: 'Dumbbell Overhead Extension',
    chineseName: '哑铃仰卧臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'intermediate',
    description: '哑铃仰卧臂屈伸，重点肱三头肌',
    instructions: [
      '仰卧在凳子上',
      '双手持哑铃举过头顶',
      '肘部固定，向下屈伸',
      '挤压肱三头肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'dumbbell-close-grip-bench-press',
    name: 'Dumbbell Close Grip Bench Press',
    chineseName: '哑铃窄距卧推',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['chest', 'frontDelts'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'intermediate',
    description: '哑铃窄距卧推，重点肱三头肌',
    instructions: [
      '仰卧在凳子上',
      '双手各持一个哑铃',
      '手臂窄距推举',
      '下降哑铃至胸部',
      '向上推至手臂完全伸展',
      '挤压肱三头肌'
    ]
  }
]

// 🔗 三头肌 - 绳索动作
const tricepsCableExercises: Exercise[] = [
  {
    id: 'cable-pushdown',
    name: 'Cable Pushdown',
    chineseName: '龙门架直杆下压',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['cable-machine'],
    difficulty: 'beginner',
    description: '龙门架下压，重点肱三头肌',
    instructions: [
      '站在龙门架前',
      '双手握住直杆',
      '肘部贴近身体',
      '向下推至手臂完全伸展',
      '挤压肱三头肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'cable-overhead-extension',
    name: 'Cable Overhead Extension',
    chineseName: '龙门架绳索臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '绳索臂屈伸，重点肱三头肌',
    instructions: [
      '站在龙门架前',
      '双手握住绳索',
      '手臂举过头顶',
      '向下伸展至手臂完全伸直',
      '挤压肱三头肌',
      '缓慢回到起始位置'
    ]
  }
]

// 📊 三头肌 - 史密斯机动作
const tricepsSmithExercises: Exercise[] = [
  {
    id: 'smith-close-grip-bench-press',
    name: 'Smith Machine Close Grip Bench Press',
    chineseName: '史密斯窄距卧推',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['chest', 'frontDelts'],
    equipment: ['smith-machine'],
    difficulty: 'intermediate',
    description: '史密斯窄距卧推，轨迹固定，重点肱三头肌',
    instructions: [
      '仰卧在史密斯机下',
      '双手窄握杠铃',
      '下降杠铃至胸部',
      '向上推至手臂完全伸展',
      '挤压肱三头肌',
      '缓慢下降杠铃'
    ]
  }
]

// 📊 三头肌 - 其他器械(弹力带)
const tricepsOtherExercises: Exercise[] = [
  {
    id: 'resistance-band-overhead-extension',
    name: 'Resistance Band Overhead Extension',
    chineseName: '弹力带颈后臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带颈后臂屈伸，重点肱三头肌长头',
    instructions: [
      '弹力带固定在低位',
      '双手握住弹力带举过头顶',
      '肘部固定，向下屈伸',
      '挤压肱三头肌',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'home-resistance-band-overhead-extension',
    name: 'Home Resistance Band Overhead Extension',
    chineseName: '居家弹力带臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带颈后臂屈伸，重点肱三头肌',
    instructions: [
      '弹力带固定在脚下',
      '双手握住弹力带',
      '手臂举过头顶',
      '向下伸展至手臂完全伸直',
      '挤压肱三头肌'
    ]
  }
]

// 📊 完整的三头肌数据（按器械分类）
export const tricepsExerciseData: MuscleExercisesByEquipment = {
  muscleRegion: 'triceps',
  equipmentCategories: [
    {
      category: 'bodyweight',
      chineseName: '自重',
      exercises: tricepsBodyweightExercises
    },
    {
      category: 'barbell',
      chineseName: '杠铃',
      exercises: tricepsBarbellExercises
    },
    {
      category: 'dumbbell',
      chineseName: '哑铃',
      exercises: tricepsDumbbellExercises
    },
    {
      category: 'cable',
      chineseName: '绳索',
      exercises: tricepsCableExercises
    },
    {
      category: 'smith',
      chineseName: '史密斯',
      exercises: tricepsSmithExercises
    },
    {
      category: 'other',
      chineseName: '弹力带',
      exercises: tricepsOtherExercises
    }
  ]
}
