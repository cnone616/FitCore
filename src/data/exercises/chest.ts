import { Exercise, EquipmentCategory, MuscleExercisesByEquipment } from '@/types/fitness-data'

// 🏋️‍♂️ 上胸部 - 杠铃动作
const upperChestBarbellExercises: Exercise[] = [
  {
    id: 'incline-bench-press',
    name: 'Incline Bench Press',
    chineseName: '上斜杠铃卧推',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    description: '经典上胸训练动作',
    instructions: [
      '躺在倾斜30-45度的卧推板上',
      '握住杠铃，略宽于肩膀',
      '缓慢下降杠铃至胸部',
      '用力推起至手臂伸直'
    ]
  }
]

// 🏋️‍♂️ 上胸部 - 哑铃动作
const upperChestDumbbellExercises: Exercise[] = [
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    chineseName: '上斜哑铃推胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'beginner',
    description: '哑铃推胸，更大活动范围',
    instructions: [
      '坐在倾斜板上',
      '一手拿一个哑铃',
      '躺下推起哑铃',
      '下降哑铃至胸部',
      '推起至手臂伸直'
    ]
  },
  {
    id: 'incline-dumbbell-flyes',
    name: 'Incline Dumbbell Flyes',
    chineseName: '上斜哑铃飞鸟',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'beginner',
    description: '孤立训练胸部，强调拉伸',
    instructions: [
      '仰卧在倾斜板上',
      '双手握哑铃在胸前',
      '缓慢张开双臂至两侧',
      '胸部挤压回到胸前'
    ]
  }
]

// 🔗 上胸部 - 绳索动作
const upperChestCableExercises: Exercise[] = [
  {
    id: 'low-cable-crossover',
    name: 'Low Cable Crossover',
    chineseName: '低位绳索交叉',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '绳索夹胸，持续张力',
    instructions: [
      '双手握住低位绳索',
      '向前跨一步',
      '双手在胸前交叉',
      '挤压胸部肌肉',
      '缓慢返回起始位置'
    ]
  }
]

// 🏨 上胸部 - 悍马机动作
const upperChestHammerExercises: Exercise[] = [
  {
    id: 'hammer-strength-incline-press',
    name: 'Hammer Strength Incline Press',
    chineseName: '悍马机上斜推胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械推胸，轨迹固定',
    instructions: [
      '坐在悍马机座椅上',
      '背部紧贴垫子',
      '双手握推举手柄',
      '向前推举至臂展',
      '缓慢控制回放'
    ]
  }
]

// 📊 上胸部 - 史密斯机动作
const upperChestSmithExercises: Exercise[] = [
  {
    id: 'smith-incline-press',
    name: 'Smith Machine Incline Press',
    chineseName: '史密斯机上斜卧推',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['smith-machine', 'bench'],
    difficulty: 'beginner',
    description: '固定轨迹推胸',
    instructions: [
      '调整史密斯机倾斜角度',
      '躺在斜板上',
      '解锁杠铃',
      '缓慢下降至胸部',
      '推举至完全臂展'
    ]
  }
]

// 🏥 上胸部 - 器械动作
const upperChestMachineExercises: Exercise[] = [
  {
    id: 'pec-deck-machine',
    name: 'Pec Deck Machine',
    chineseName: '蝴蝶机夹胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['chest'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械夹胸，简单易学',
    instructions: [
      '坐在器械座椅上',
      '调整座椅高度',
      '双臂向胸前合拢',
      '用力挤压胸部',
      '缓慢张开双臂'
    ]
  },
  {
    id: 'chest-press-machine',
    name: 'Chest Press Machine',
    chineseName: '坐姿推胸机',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['middle-chest', 'front-delts'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械推胸，安全高效',
    instructions: [
      '坐在推胸机座椅上',
      '胸部贴上背垫',
      '双手握住推柄',
      '向前推举重量',
      '控制重量回放'
    ]
  }
]

// 🫴 上胸部 - 自重动作
const upperChestBodyweightExercises: Exercise[] = [
  {
    id: 'incline-push-ups',
    name: 'Incline Push-ups',
    chineseName: '上斜俯卧撑',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['middle-chest', 'front-delts'],
    equipment: ['bodyweight', 'bench'],
    difficulty: 'beginner',
    description: '俯卧撑变式，重点上胸',
    instructions: [
      '双手撑在比脚高的平台',
      '身体保持一条直线',
      '下降胸部至平台',
      '推起身体还原'
    ]
  }
]

// 🏋️‍♂️ 中下胸部 - 杠铃动作
const middleLowerChestBarbellExercises: Exercise[] = [
  {
    id: 'flat-bench-press',
    name: 'Flat Bench Press',
    chineseName: '平板杠铃卧推',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['chest', 'frontDelts'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    description: '胸部训练金牌动作',
    instructions: [
      '平躺在卧推板上',
      '双脚稳稳踩地',
      '握杠铃略宽于肩',
      '下降杠铃至胸部',
      '推起至手臂完全伸展'
    ]
  },
  {
    id: 'decline-bench-press',
    name: 'Decline Bench Press',
    chineseName: '下斜杠铃卧推',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['middle-chest', 'triceps'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    description: '重点刺激下胸部',
    instructions: [
      '仰卧在下斜板上',
      '脚踝固定在垫子上',
      '握住杠铃',
      '缓慢下降至胸部',
      '推举杠铃向上'
    ]
  }
]

// 🏋️‍♂️ 中下胸部 - 哑铃动作
const middleLowerChestDumbbellExercises: Exercise[] = [
  {
    id: 'flat-dumbbell-press',
    name: 'Flat Dumbbell Press',
    chineseName: '平板哑铃推胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['chest', 'frontDelts'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'beginner',
    description: '哑铃平板推胸',
    instructions: [
      '躺在平板凳上',
      '双手各持一个哑铃',
      '下降哑铃至胸部两侧',
      '推起哑铃至胸前',
      '双臂在胸前挤压'
    ]
  },
  {
    id: 'flat-dumbbell-flyes',
    name: 'Flat Dumbbell Flyes',
    chineseName: '平板哑铃飞鸟',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'beginner',
    description: '孤立胸部训练',
    instructions: [
      '仰卧在平板上',
      '双臂横展，肘部微弯',
      '缓慢合拢哑铃',
      '挤压胸部肌肉',
      '控制哑铃分开'
    ]
  }
]

// 🔗 中下胸部 - 绳索动作
const middleLowerChestCableExercises: Exercise[] = [
  {
    id: 'cable-flyes',
    name: 'Cable Flyes',
    chineseName: '绳索夹胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['chest'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '绳索夹胸，持续张力',
    instructions: [
      '双手握住绳索手柄',
      '向前跨一小步',
      '肘部微弯',
      '胸部挤压双臂交叉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'high-cable-crossover',
    name: 'High Cable Crossover',
    chineseName: '高位绳索下夹',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['chest'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '高位下拉重点下胸',
    instructions: [
      '设置高位滑轮',
      '双手高位握绳',
      '向前跨一步',
      '向下向内夹压',
      '挤压下胸肌肉'
    ]
  }
]

// 🏨 中下胸部 - 悍马机动作
const middleLowerChestHammerExercises: Exercise[] = [
  {
    id: 'hammer-strength-chest-press',
    name: 'Hammer Strength Chest Press',
    chineseName: '悍马机推胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['chest'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械推胸，轨迹稳定',
    instructions: [
      '坐在悍马机座椅上',
      '胸部贴靠垫子',
      '手握推举手柄',
      '向前完全推举',
      '缓慢回拉'
    ]
  }
]

// 📊 中下胸部 - 史密斯机动作
const middleLowerChestSmithExercises: Exercise[] = [
  {
    id: 'smith-flat-bench-press',
    name: 'Smith Flat Bench Press',
    chineseName: '史密斯平板卧推',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['chest'],
    equipment: ['smith-machine', 'bench'],
    difficulty: 'beginner',
    description: '史密斯机平板推胸',
    instructions: [
      '躺在史密斯机平板下',
      '解锁固定杠铃',
      '缓慢推举',
      '下降至胸部',
      '重新推起',
      '重新锁定'
    ]
  }
]

// 🏥 中下胸部 - 器械动作
const middleLowerChestMachineExercises: Exercise[] = [
  {
    id: 'machine-bench-press',
    name: 'Machine Bench Press',
    chineseName: '器械胸推',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['chest'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械推胸，简单易用',
    instructions: [
      '坐在器械座椅上',
      '胸部贴靠背垫',
      '握推举手柄',
      '向前推至臂展',
      '回拉至胸前'
    ]
  }
]

// 🫴 中下胸部 - 自重动作
const middleLowerChestBodyweightExercises: Exercise[] = [
  {
    id: 'standard-push-ups',
    name: 'Standard Push-ups',
    chineseName: '标准俯卧撑',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['chest', 'frontDelts'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '经典自重胸部训练',
    instructions: [
      '俯卧撑姿势，双手肩宽',
      '身体保持一条直线',
      '下降胸部至地面',
      '推起身体还原'
    ]
  },
  {
    id: 'decline-push-ups',
    name: 'Decline Push-ups',
    chineseName: '下斜俯卧撑',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['bodyweight', 'bench'],
    difficulty: 'advanced',
    description: '高位脚部增加难度',
    instructions: [
      '双脚抬到高平台上',
      '标准俯卧撑姿势',
      '双臂撑地',
      '下降胸部至手部',
      '推起身体上升'
    ]
  },
  {
    id: 'wide-grip-push-ups',
    name: 'Wide Grip Push-ups',
    chineseName: '宽距俯卧撑',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '宽手距强化胸部内侧',
    instructions: [
      '双手放得比肩更宽',
      '标准俯卧撑姿势',
      '脚尖着地支撑',
      '保持身体直线',
      '下降胸部触地'
    ]
  }
]

// 📋 按器械分类的上胸部数据
export const upperChestEquipmentCategories: EquipmentCategory[] = [
  {
    category: 'barbell',
    chineseName: '杠铃',
    exercises: upperChestBarbellExercises
  },
  {
    category: 'dumbbell',
    chineseName: '哑铃',
    exercises: upperChestDumbbellExercises
  },
  {
    category: 'cable',
    chineseName: '绳索',
    exercises: upperChestCableExercises
  },
  {
    category: 'hammer',
    chineseName: '悍马机',
    exercises: upperChestHammerExercises
  },
  {
    category: 'smith',
    chineseName: '史密斯机',
    exercises: upperChestSmithExercises
  },
  {
    category: 'machine',
    chineseName: '器械',
    exercises: upperChestMachineExercises
  },
  {
    category: 'bodyweight',
    chineseName: '自重',
    exercises: upperChestBodyweightExercises
  }
]

// 📋 按器械分类的中下胸部数据
export const middleLowerChestEquipmentCategories: EquipmentCategory[] = [
  {
    category: 'barbell',
    chineseName: '杠铃',
    exercises: middleLowerChestBarbellExercises
  },
  {
    category: 'dumbbell',
    chineseName: '哑铃',
    exercises: middleLowerChestDumbbellExercises
  },
  {
    category: 'cable',
    chineseName: '绳索',
    exercises: middleLowerChestCableExercises
  },
  {
    category: 'hammer',
    chineseName: '悍马机',
    exercises: middleLowerChestHammerExercises
  },
  {
    category: 'smith',
    chineseName: '史密斯机',
    exercises: middleLowerChestSmithExercises
  },
  {
    category: 'machine',
    chineseName: '器械',
    exercises: middleLowerChestMachineExercises
  },
  {
    category: 'bodyweight',
    chineseName: '自重',
    exercises: middleLowerChestBodyweightExercises
  }
]

// 📊 完整的胸部数据（按器械分类）
export const chestExerciseData: MuscleExercisesByEquipment = {
  muscleRegion: 'chest',
  equipmentCategories: [
    ...upperChestEquipmentCategories,
    ...middleLowerChestEquipmentCategories
  ]
}

// 📊 按部位分开的数据
export const chestExerciseDataDetailed: MuscleExercisesByEquipment[] = [
  {
    muscleRegion: 'chest',
    equipmentCategories: upperChestEquipmentCategories
  },
  {
    muscleRegion: 'chest', 
    equipmentCategories: middleLowerChestEquipmentCategories
  }
]