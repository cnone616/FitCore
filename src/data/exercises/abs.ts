import { Exercise, EquipmentCategory, MuscleExercisesByEquipment } from '@/types/fitness-data'

// 🫃 腹部 - 自重动作
const absBodyweightExercises: Exercise[] = [
  {
    id: 'crunches',
    name: 'Crunches',
    chineseName: '平板卷腹',
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    equipment: ['bodyweight'],
    difficulty: 'beginner',
    description: '平板卷腹，重点上腹部',
    instructions: [
      '仰卧，膝盖弯曲',
      '双手放在头后或胸前',
      '向上卷起至肩胛骨离地',
      '挤压腹部肌肉',
      '缓慢下降'
    ]
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    chineseName: '悬垂举腿',
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    equipment: ['bodyweight', 'pull-up-bar'],
    difficulty: 'advanced',
    description: '悬垂举腿，重点下腹部',
    instructions: [
      '悬垂在单杠上',
      '双腿并拢',
      '向上举起双腿至90度',
      '挤压下腹部',
      '缓慢下降'
    ]
  },
  {
    id: 'plank',
    name: 'Plank',
    chineseName: '平板支撑',
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    equipment: ['bodyweight'],
    difficulty: 'beginner',
    description: '平板支撑，全面锻炼核心',
    instructions: [
      '俯卧撑姿势，前臂支撑地面',
      '身体保持一条直线',
      '收紧核心',
      '保持该姿势',
      '正常呼吸'
    ]
  },
  {
    id: 'bicycle-crunches',
    name: 'Bicycle Crunches',
    chineseName: '自行车卷腹',
    primaryMuscles: ['abs', 'obliques'],
    secondaryMuscles: [],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '自行车卷腹，锻炼腹部和腹斜肌',
    instructions: [
      '仰卧，手放在头后',
      '抬起肩膀和双腿',
      '交替扭转上身，对侧肘碰膝',
      '保持流畅动作',
      '持续交替'
    ]
  },
  {
    id: 'reverse-crunches',
    name: 'Reverse Crunches',
    chineseName: '反向卷腹',
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '反向卷腹，重点下腹部',
    instructions: [
      '仰卧，双腿抬起',
      '膝盖弯曲90度',
      '向上卷起臀部',
      '膝盖靠近胸部',
      '缓慢回到起始位置'
    ]
  }
]

// 🏥 腹部 - 器械动作
const absMachineExercises: Exercise[] = [
  {
    id: 'cable-crunches',
    name: 'Cable Crunches',
    chineseName: '绳索卷腹',
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '绳索卷腹，持续张力训练上腹部',
    instructions: [
      '跪在绳索机前',
      '双手握住绳索手柄',
      '手柄置于头部两侧',
      '向下弯曲躯干',
      '挤压腹部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'ab-wheel-rollout',
    name: 'Ab Wheel Rollout',
    chineseName: '腹轮滚动',
    primaryMuscles: ['abs'],
    secondaryMuscles: [],
    equipment: ['ab-wheel'],
    difficulty: 'advanced',
    description: '腹轮滚动，全面锻炼核心力量',
    instructions: [
      '跪姿，双手握住腹轮',
      '向前滚动腹轮',
      '身体尽量伸展',
      '收紧核心',
      '用腹部力量拉回'
    ]
  }
]

// 📊 完整的腹部数据（按器械分类）
export const absExerciseData: MuscleExercisesByEquipment = {
  muscleRegion: 'abs',
  equipmentCategories: [
    {
      category: 'bodyweight',
      chineseName: '自重',
      exercises: absBodyweightExercises
    },
    {
      category: 'machine',
      chineseName: '器械',
      exercises: absMachineExercises
    }
  ]
}
