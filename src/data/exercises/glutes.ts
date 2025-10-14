import { Exercise, MuscleExercisesByEquipment } from '@/types/fitness-data'

// 🍑 臀部 - 杠铃动作
const glutesBarbellExercises: Exercise[] = [
  {
    id: 'barbell-hip-thrust',
    name: 'Barbell Hip Thrust',
    chineseName: '杠铃臀冲',
    primaryMuscles: ['glutes'],
    secondaryMuscles: ['hamstrings'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '杠铃臀冲，重点臀大肌',
    instructions: [
      '坐在垫子上，杠铃放在髋部',
      '背部贴靠垫子',
      '双脚踩稳地面',
      '臀部向上推起',
      '挤压臀大肌',
      '缓慢下降'
    ]
  }
]

// 🏥 臀部 - 器械动作
const glutesMachineExercises: Exercise[] = [
  {
    id: 'hip-thrust',
    name: 'Machine Hip Thrust',
    chineseName: '器械臀冲',
    primaryMuscles: ['glutes'],
    secondaryMuscles: ['hamstrings'],
    equipment: ['machine'],
    difficulty: 'intermediate',
    description: '器械臀冲，重点臀大肌',
    instructions: [
      '坐在臀冲器械上',
      '背部贴靠垫子',
      '双脚踩稳踏板',
      '臀部向上推起',
      '挤压臀大肌',
      '缓慢下降'
    ]
  }
]

// 📊 臀部 - 其他器械(弹力带)
const glutesOtherExercises: Exercise[] = [
  {
    id: 'resistance-band-glute-bridge',
    name: 'Resistance Band Glute Bridge',
    chineseName: '弹力带臀桥',
    primaryMuscles: ['glutes'],
    secondaryMuscles: ['hamstrings', 'lower-back'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带臀桥，重点臀大肌',
    instructions: [
      '弹力带固定在膝盖上方',
      '仰卧，膝盖弯曲',
      '臀部向上推起',
      '挤压臀大肌',
      '缓慢下降'
    ]
  },
  {
    id: 'resistance-band-hip-abduction',
    name: 'Resistance Band Hip Abduction',
    chineseName: '弹力带髋外展',
    primaryMuscles: ['glutes'],
    secondaryMuscles: ['upper-glutes'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带髋外展，重点臀大肌',
    instructions: [
      '弹力带固定在脚踝',
      '侧卧或站立',
      '腿部向外侧展开',
      '挤压臀大肌',
      '缓慢回到起始位置'
    ]
  }
]

// 📊 完整的臀部数据（按器械分类）
export const glutesExerciseData: MuscleExercisesByEquipment = {
  muscleRegion: 'glutes',
  equipmentCategories: [
    {
      category: 'barbell',
      chineseName: '杠铃',
      exercises: glutesBarbellExercises
    },
    {
      category: 'machine',
      chineseName: '器械',
      exercises: glutesMachineExercises
    },
    {
      category: 'other',
      chineseName: '弹力带',
      exercises: glutesOtherExercises
    }
  ]
}
