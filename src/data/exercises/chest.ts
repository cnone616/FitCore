import { Exercise, EquipmentCategory, MuscleExercisesByEquipment } from '@/types/fitness-data'

// 🏋️‍♂️ 上胸部 - 杠铃动作
const upperChestBarbellExercises: Exercise[] = [
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
    secondaryMuscles: [],
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
    secondaryMuscles: ['frontDelts'],
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
    secondaryMuscles: ['frontDelts'],
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
    secondaryMuscles: ['frontDelts'],
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
    secondaryMuscles: ['triceps'],
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
  },
  {
    id: 'machine-decline-press',
    name: 'Machine Decline Press',
    chineseName: '器械下斜推胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械下斜推胸，重点下胸',
    instructions: [
      '坐在下斜推胸机上',
      '背部贴靠垫子',
      '双手握住推柄',
      '向前推举至臂展',
      '控制重量回放'
    ]
  },
  {
    id: 'decline-press',
    name: 'Decline Press',
    chineseName: '下斜推胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    description: '下斜推胸，重点下胸部',
    instructions: [
      '仰卧在下斜板上',
      '脚踝固定在垫子上',
      '握住杠铃',
      '缓慢下降至胸部',
      '推举杠铃向上'
    ]
  },
  {
    id: 'incline-press',
    name: 'Incline Press',
    chineseName: '上斜推胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    description: '上斜推胸，重点上胸部',
    instructions: [
      '仰卧在上斜板上',
      '调整角度30-45度',
      '握住杠铃',
      '下降杠铃至胸部',
      '推举杠铃向上'
    ]
  },
  {
    id: 'machine-incline-press',
    name: 'Machine Incline Press',
    chineseName: '器械上斜推胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械上斜推胸，重点上胸',
    instructions: [
      '坐在上斜推胸机上',
      '背部贴靠垫子',
      '双手握住推柄',
      '向前推举至臂展',
      '控制重量回放'
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
    secondaryMuscles: ['frontDelts'],
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
  },
  {
    id: 'decline-dumbbell-press',
    name: 'Decline Dumbbell Press',
    chineseName: '哑铃卧推（下斜推）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'intermediate',
    description: '下斜哑铃推胸，重点下胸',
    instructions: [
      '仰卧在下斜板上',
      '脚踝固定在垫子上',
      '双手各持一个哑铃',
      '下降哑铃至胸部',
      '推举哑铃向上'
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
    secondaryMuscles: [],
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
    secondaryMuscles: [],
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
  },
  {
    id: 'resistance-band-flyes-horizontal',
    name: 'Resistance Band Flyes (Horizontal)',
    chineseName: '弹力带夹胸（水平夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带水平夹胸',
    instructions: [
      '双手握住弹力带两端',
      '双臂水平展开',
      '胸部挤压双臂合拢',
      '缓慢回到起始位置',
      '保持肘部微弯'
    ]
  },
  {
    id: 'resistance-band-flyes-low',
    name: 'Resistance Band Flyes (Low)',
    chineseName: '弹力带夹胸（完全下夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带低位夹胸，重点下胸',
    instructions: [
      '弹力带固定在低位',
      '双手握住弹力带',
      '从下向上夹压',
      '挤压下胸肌肉',
      '控制回到起始位置'
    ]
  },
  {
    id: 'resistance-band-flyes-decline',
    name: 'Resistance Band Flyes (Decline)',
    chineseName: '弹力带夹胸（下斜夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带下斜夹胸',
    instructions: [
      '弹力带固定在胸部高度',
      '身体前倾30度',
      '双手握住弹力带',
      '向下向内夹压',
      '挤压下胸肌肉'
    ]
  },
  {
    id: 'resistance-band-flyes-incline',
    name: 'Resistance Band Flyes (Incline)',
    chineseName: '弹力带夹胸（上斜夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带上斜夹胸，重点上胸',
    instructions: [
      '弹力带固定在低位',
      '身体后仰30度',
      '双手握住弹力带',
      '向上向内夹压',
      '挤压上胸肌肉'
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
    secondaryMuscles: [],
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
    secondaryMuscles: [],
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
    secondaryMuscles: [],
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
    secondaryMuscles: ['frontDelts'],
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
  },
  {
    id: 'incline-push-ups-feet-elevated',
    name: 'Incline Push-ups (Feet Elevated)',
    chineseName: '俯卧撑（脚垫高20cm）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['bodyweight', 'bench'],
    difficulty: 'intermediate',
    description: '脚部垫高重点刺激上胸',
    instructions: [
      '双脚放在20cm高的平台上',
      '双手撑地，标准俯卧撑姿势',
      '身体保持一条直线',
      '下降胸部至手部',
      '推起身体还原'
    ]
  },
  {
    id: 'incline-push-ups-hands-elevated',
    name: 'Incline Push-ups (Hands Elevated)',
    chineseName: '俯卧撑（手垫高10cm）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['bodyweight', 'bench'],
    difficulty: 'beginner',
    description: '手部垫高降低难度，重点下胸',
    instructions: [
      '双手放在10cm高的平台上',
      '双脚着地，标准俯卧撑姿势',
      '身体保持一条直线',
      '下降胸部至平台',
      '推起身体还原'
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

// 📊 完整的胸部数据（按器械分类）- 合并上胸和中下胸的相同器械
export const chestExerciseData: MuscleExercisesByEquipment = {
  muscleRegion: 'chest',
  equipmentCategories: [
    {
      category: 'barbell',
      chineseName: '杠铃',
      exercises: [...upperChestBarbellExercises, ...middleLowerChestBarbellExercises]
    },
    {
      category: 'dumbbell',
      chineseName: '哑铃',
      exercises: [...upperChestDumbbellExercises, ...middleLowerChestDumbbellExercises]
    },
    {
      category: 'cable',
      chineseName: '绳索',
      exercises: [...upperChestCableExercises, ...middleLowerChestCableExercises]
    },
    {
      category: 'hammer',
      chineseName: '悍马机',
      exercises: [...upperChestHammerExercises, ...middleLowerChestHammerExercises]
    },
    {
      category: 'smith',
      chineseName: '史密斯机',
      exercises: [...upperChestSmithExercises, ...middleLowerChestSmithExercises]
    },
    {
      category: 'machine',
      chineseName: '器械',
      exercises: [...upperChestMachineExercises, ...middleLowerChestMachineExercises]
    },
    {
      category: 'bodyweight',
      chineseName: '自重',
      exercises: [...upperChestBodyweightExercises, ...middleLowerChestBodyweightExercises]
    }
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

// 训练计划中缺失的动作
export const missingChestExercises: Exercise[] = [
  {
    id: 'machine-chest-press',
    name: 'Machine Chest Press',
    chineseName: '器械推胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '器械推胸，重点胸部肌肉',
    instructions: [
      '坐在推胸器械上',
      '背部贴靠垫子',
      '双手握住把手',
      '向前推至手臂完全伸展',
      '挤压胸部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'cable-lower-fly',
    name: 'Cable Lower Fly',
    chineseName: '龙门架下夹胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '龙门架下夹胸，重点下胸部',
    instructions: [
      '站在龙门架中间',
      '双手握住低位绳索',
      '双臂向两侧展开',
      '向上夹至胸部',
      '挤压下胸部',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'cable-decline-fly',
    name: 'Cable Decline Fly',
    chineseName: '龙门架下斜夹胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '龙门架下斜夹胸，重点下胸部',
    instructions: [
      '站在龙门架中间',
      '双手握住中位绳索',
      '双臂向两侧展开',
      '向上夹至胸部',
      '挤压下胸部',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'cable-incline-fly',
    name: 'Cable Incline Fly',
    chineseName: '龙门架上斜夹胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '龙门架上斜夹胸，重点上胸部',
    instructions: [
      '站在龙门架中间',
      '双手握住高位绳索',
      '双臂向两侧展开',
      '向下夹至胸部',
      '挤压上胸部',
      '缓慢回到起始位置'
    ]
  }
]

// 弹力绳胸部动作
export const resistanceBandChestExercises: Exercise[] = [
  {
    id: 'home-resistance-band-fly',
    name: 'Resistance Band Fly',
    chineseName: '弹力带夹胸（水平夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['resistance-band'],
    difficulty: 'beginner',
    description: '弹力带夹胸，重点胸部肌肉',
    instructions: [
      '弹力带固定在身后',
      '双手握住弹力带',
      '双臂向两侧展开',
      '向前夹至胸部',
      '挤压胸部肌肉'
    ]
  },
  {
    id: 'home-resistance-band-low-fly',
    name: 'Resistance Band Low Fly',
    chineseName: '弹力带夹胸（完全下夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带低位夹胸，重点下胸部',
    instructions: [
      '弹力带固定在低位',
      '双手握住弹力带',
      '双臂向两侧展开',
      '向上夹至胸部',
      '挤压下胸部'
    ]
  },
  {
    id: 'home-resistance-band-decline-fly',
    name: 'Resistance Band Decline Fly',
    chineseName: '弹力带夹胸（下斜夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带下斜夹胸，重点下胸部',
    instructions: [
      '弹力带固定在胸部高度',
      '双手握住弹力带',
      '双臂向两侧展开',
      '向上夹至胸部',
      '挤压下胸部'
    ]
  },
  {
    id: 'home-resistance-band-incline-fly',
    name: 'Resistance Band Incline Fly',
    chineseName: '弹力带夹胸（上斜夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['resistance-band'],
    difficulty: 'intermediate',
    description: '弹力带上斜夹胸，重点上胸部',
    instructions: [
      '弹力带固定在低位',
      '双手握住弹力带',
      '双臂向两侧展开',
      '向下夹至胸部',
      '挤压上胸部'
    ]
  },
  {
    id: 'bench-press',
    name: 'Bench Press',
    chineseName: '杠铃/哑铃/史密斯卧推（水平推）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['barbell', 'dumbbell', 'smith-machine'],
    difficulty: 'intermediate',
    description: '卧推，重点胸部肌肉',
    instructions: [
      '仰卧在凳子上',
      '双手握住杠铃',
      '下降杠铃至胸部',
      '向上推至手臂完全伸展',
      '挤压胸部肌肉'
    ]
  },
  {
    id: 'pec-fly',
    name: 'Pec Fly',
    chineseName: '蝴蝶机夹胸',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '蝴蝶机夹胸，重点胸部肌肉',
    instructions: [
      '坐在蝴蝶机上',
      '双臂向两侧展开',
      '向前夹至胸部',
      '挤压胸部肌肉',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'cable-fly',
    name: 'Cable Fly',
    chineseName: '龙门架夹胸（水平夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '龙门架夹胸，重点胸部肌肉',
    instructions: [
      '站在龙门架中间',
      '双手握住高位绳索',
      '双臂向两侧展开',
      '向前夹至胸部',
      '挤压胸部肌肉'
    ]
  },
  {
    id: 'cable-low-fly',
    name: 'Cable Low Fly',
    chineseName: '龙门架夹胸（完全下夹）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '龙门架低位夹胸，重点下胸部',
    instructions: [
      '站在龙门架中间',
      '双手握住低位绳索',
      '双臂向两侧展开',
      '向上夹至胸部',
      '挤压下胸部'
    ]
  },
  {
    id: 'decline-bench-press',
    name: 'Decline Bench Press',
    chineseName: '杠铃/哑铃/史密斯卧推（下斜推）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['barbell', 'dumbbell', 'smith-machine'],
    difficulty: 'intermediate',
    description: '下斜卧推，重点下胸部',
    instructions: [
      '仰卧在下斜凳子上',
      '双手握住杠铃',
      '下降杠铃至胸部',
      '向上推至手臂完全伸展',
      '挤压下胸部'
    ]
  },
  {
    id: 'dips',
    name: 'Dips',
    chineseName: '双杠臂屈伸（上身前趴30-60°）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['triceps', 'frontDelts'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '双杠臂屈伸，重点胸部肌肉',
    instructions: [
      '双手握住双杠',
      '身体悬垂',
      '下降至胸部接近双杠',
      '向上推起身体',
      '挤压胸部肌肉'
    ]
  },
  {
    id: 'incline-bench-press',
    name: 'Incline Bench Press',
    chineseName: '杠铃/哑铃/史密斯卧推（上斜推）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['barbell', 'dumbbell', 'smith-machine'],
    difficulty: 'intermediate',
    description: '上斜卧推，重点上胸部',
    instructions: [
      '仰卧在上斜凳子上',
      '双手握住杠铃',
      '下降杠铃至胸部',
      '向上推至手臂完全伸展',
      '挤压上胸部'
    ]
  },
  {
    id: 'home-push-up',
    name: 'Home Push Up',
    chineseName: '俯卧撑',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['triceps', 'frontDelts'],
    equipment: ['bodyweight'],
    difficulty: 'beginner',
    description: '居家俯卧撑，重点胸部肌肉',
    instructions: [
      '俯卧撑姿势',
      '双手与肩同宽',
      '下降胸部至手部',
      '推起身体还原',
      '挤压胸部肌肉'
    ]
  },
  {
    id: 'home-dumbbell-press',
    name: 'Home Dumbbell Press',
    chineseName: '哑铃卧推',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '居家哑铃卧推，重点胸部肌肉',
    instructions: [
      '仰卧在凳子上',
      '双手各持一个哑铃',
      '下降哑铃至胸部',
      '向上推至手臂完全伸展',
      '挤压胸部肌肉'
    ]
  },
  {
    id: 'home-dumbbell-decline-press',
    name: 'Home Dumbbell Decline Press',
    chineseName: '哑铃卧推（下斜推）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '居家哑铃下斜卧推，重点下胸部',
    instructions: [
      '仰卧在下斜凳子上',
      '双手各持一个哑铃',
      '下降哑铃至胸部',
      '向上推至手臂完全伸展',
      '挤压下胸部'
    ]
  },
  {
    id: 'home-incline-push-up',
    name: 'Home Incline Push Up',
    chineseName: '俯卧撑（手垫高10cm）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['triceps', 'frontDelts'],
    equipment: ['bodyweight'],
    difficulty: 'beginner',
    description: '居家上斜俯卧撑，重点上胸部',
    instructions: [
      '俯卧撑姿势，手垫高',
      '双手与肩同宽',
      '下降胸部至手部',
      '推起身体还原',
      '挤压上胸部'
    ]
  },
  {
    id: 'home-dips',
    name: 'Home Dips',
    chineseName: '双杠臂屈伸（上身前趴30-60°）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['triceps', 'frontDelts'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '居家双杠臂屈伸，重点胸部肌肉',
    instructions: [
      '双手握住双杠',
      '身体悬垂',
      '下降至胸部接近双杠',
      '向上推起身体',
      '挤压胸部肌肉'
    ]
  },
  {
    id: 'home-barbell-incline-press',
    name: 'Home Barbell Incline Press',
    chineseName: '杠铃卧推（上斜推）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['frontDelts', 'triceps'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '居家杠铃上斜卧推，重点上胸部',
    instructions: [
      '仰卧在上斜凳子上',
      '双手握住杠铃',
      '下降杠铃至胸部',
      '向上推至手臂完全伸展',
      '挤压上胸部'
    ]
  },
  {
    id: 'home-decline-push-up',
    name: 'Home Decline Push Up',
    chineseName: '俯卧撑（脚垫高20cm）',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['triceps', 'frontDelts'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '居家下斜俯卧撑，重点上胸部',
    instructions: [
      '俯卧撑姿势，脚垫高',
      '双手与肩同宽',
      '下降胸部至手部',
      '推起身体还原',
      '挤压上胸部'
    ]
  },
  {
    id: 'home-dumbbell-overhead-extension',
    name: 'Home Dumbbell Overhead Extension',
    chineseName: '哑铃仰卧臂屈伸',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['forearms'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    description: '居家哑铃仰卧臂屈伸，重点肱三头肌',
    instructions: [
      '仰卧在凳子上',
      '双手握住哑铃',
      '手臂举过头顶',
      '向下弯曲至前臂平行地面',
      '向上推至手臂完全伸展',
      '挤压肱三头肌'
    ]
  },
  {
    id: 'home-close-grip-push-up',
    name: 'Home Close Grip Push Up',
    chineseName: '窄距俯卧撑',
    primaryMuscles: ['triceps'],
    secondaryMuscles: ['chest', 'frontDelts'],
    equipment: ['bodyweight'],
    difficulty: 'intermediate',
    description: '居家窄距俯卧撑，重点肱三头肌',
    instructions: [
      '俯卧撑姿势，双手窄握',
      '双手距离小于肩宽',
      '身体保持一条直线',
      '下降胸部至手部',
      '推起身体还原'
    ]
  }
]