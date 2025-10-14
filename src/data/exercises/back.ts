import { Exercise, MuscleExercisesByEquipment } from '@/types/fitness-data'

// 🫴 背部 - 自重动作
const backBodyweightExercises: Exercise[] = [
  {
    id: 'pull-up',
    name: 'Pull Up',
    chineseName: '引体向上',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps', 'rearDelts'],
    equipment: ['bodyweight', 'pull-up-bar'],
    difficulty: 'intermediate',
    description: '宽握肩内收，经典背部训练动作',
    instructions: [
      '双手握住单杠，握距略宽于肩',
      '身体悬垂，核心收紧',
      '肩胛骨下沉，启动背部肌肉',
      '向上拉至下巴过杠',
      '挤压背阔肌',
      '缓慢下降至完全伸展'
    ]
  },
  {
    id: 'assisted-pull-up',
    name: 'Assisted Pull Up',
    chineseName: '引体向上(可用弹力带减重)',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps', 'rearDelts'],
    equipment: ['bodyweight', 'resistance-band'],
    difficulty: 'beginner',
    description: '弹力带辅助的引体向上，适合初学者',
    instructions: [
      '双手握住单杠，略宽于肩',
      '弹力带挂在单杠上',
      '膝盖或脚踩在弹力带上',
      '向上拉至下巴过杠',
      '缓慢下降至完全伸展'
    ]
  },
  {
    id: 'wide-grip-pull-ups',
    name: 'Wide Grip Pull Up',
    chineseName: '宽握引体向上',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps', 'rearDelts'],
    equipment: ['bodyweight', 'pull-up-bar'],
    difficulty: 'advanced',
    description: '宽握距强化背阔肌外侧',
    instructions: [
      '双手握住单杠，握距明显宽于肩',
      '身体悬垂，核心收紧',
      '向上拉至胸部接近单杠',
      '挤压背阔肌外侧',
      '缓慢下降'
    ]
  }
]

// 🏋️‍♂️ 背部 - 杠铃动作
const backBarbellExercises: Exercise[] = [
  {
    id: 'barbell-row',
    name: 'Barbell Row',
    chineseName: '杠铃俯身划船',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['rearDelts', 'biceps', 'lower-back'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    description: '宽握肩水平外展，训练背阔肌和中背部',
    instructions: [
      '双脚与肩同宽站立',
      '俯身约45度，保持背部挺直',
      '宽握杠铃，略宽于肩',
      '将杠铃拉向腹部',
      '挤压肩胛骨',
      '缓慢下放至起始位置'
    ]
  }
]

// 🏋️‍♂️ 背部 - 哑铃动作
const backDumbbellExercises: Exercise[] = [
  {
    id: 'dumbbell-row',
    name: 'Dumbbell Row',
    chineseName: '单边哑铃划船',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['rearDelts', 'biceps'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'beginner',
    description: '单侧划船，肩伸动作，重点训练背阔肌',
    instructions: [
      '一只手和膝盖支撑在凳子上',
      '另一只手握哑铃自然下垂',
      '保持背部平直',
      '将哑铃拉向腰部',
      '肘部贴近身体',
      '缓慢下放'
    ]
  },
  {
    id: 'dumbbell-rear-fly',
    name: 'Dumbbell Rear Fly',
    chineseName: '哑铃俯身飞鸟',
    primaryMuscles: ['rearDelts'],
    secondaryMuscles: ['lats', 'traps'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    description: '肩水平外展，重点训练肩后束',
    instructions: [
      '俯身约90度，背部保持平直',
      '双手各持一个哑铃',
      '保持肘部微弯',
      '向两侧抬起哑铃',
      '挤压肩胛骨',
      '缓慢回到起始位置'
    ]
  }
]

// 🔗 背部 - 绳索动作
const backCableExercises: Exercise[] = [
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    chineseName: '坐姿器械划船',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['rearDelts', 'biceps'],
    equipment: ['cable-machine'],
    difficulty: 'beginner',
    description: '窄握肩伸，重点训练背阔肌',
    instructions: [
      '坐在划船器械上',
      '双脚踩在踏板上',
      '窄握手柄',
      '拉向腹部',
      '挤压肩胛骨',
      '缓慢回放'
    ]
  },
  {
    id: 'straight-arm-pulldown',
    name: 'Straight Arm Pulldown',
    chineseName: '龙门架直臂下压',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['chest', 'abs'],
    equipment: ['cable-machine'],
    difficulty: 'intermediate',
    description: '肩伸动作，孤立训练背阔肌',
    instructions: [
      '站在龙门架前',
      '双手握住高位手柄',
      '保持手臂伸直',
      '向下压至大腿前侧',
      '挤压背阔肌',
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
    description: '肩水平外展，训练肩后束',
    instructions: [
      '站在龙门架中间',
      '交叉握住对侧手柄',
      '向两侧拉开',
      '保持肘部微弯',
      '挤压肩后束',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'seated-row-horizontal-elbow',
    name: 'Seated Row (Horizontal Elbow)',
    chineseName: '坐姿器械/绳索划船(水平开肘)',
    primaryMuscles: ['rearDelts', 'lats'],
    secondaryMuscles: ['biceps', 'traps'],
    equipment: ['cable-machine'],
    difficulty: 'beginner',
    description: '肩水平外展，重点训练肩后束和中背部',
    instructions: [
      '坐在划船器械上',
      '双脚踩稳',
      '宽握手柄',
      '向后拉，肘部水平展开',
      '挤压肩胛骨',
      '缓慢回放'
    ]
  }
]

// 📊 背部 - 其他器械(T杆)
const backOtherExercises: Exercise[] = [
  {
    id: 't-bar-row',
    name: 'T-Bar Row',
    chineseName: 'T杆俯身划船',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['rearDelts', 'biceps', 'lower-back'],
    equipment: ['t-bar'],
    difficulty: 'intermediate',
    description: '中握肩伸混合肩水平外展',
    instructions: [
      '跨站在T杆上',
      '俯身握住手柄',
      '保持背部挺直',
      '将T杆拉向胸部',
      '挤压肩胛骨',
      '缓慢下放'
    ]
  }
]

// 🏥 背部 - 器械动作
const backMachineExercises: Exercise[] = [
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    chineseName: '高位下拉',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps', 'rearDelts'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '中握肩内收混合肩伸',
    instructions: [
      '坐在下拉器械上',
      '调整膝盖垫',
      '中握距握住横杆',
      '向下拉至胸部',
      '挤压背阔肌',
      '缓慢回放'
    ]
  },
  {
    id: 'machine-pulldown',
    name: 'Machine Pulldown',
    chineseName: '器械下拉',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '窄握肩伸',
    instructions: [
      '坐在器械上',
      '调整座椅高度',
      '窄握手柄',
      '向下拉至胸部',
      '挤压背阔肌',
      '缓慢回放'
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
    description: '肩水平外展，孤立训练肩后束',
    instructions: [
      '坐在蝴蝶机上',
      '胸部贴靠垫子',
      '双手握住手柄',
      '向后拉开',
      '挤压肩后束',
      '缓慢回到起始位置'
    ]
  },
  {
    id: 'rowing-exercise',
    name: 'Rowing Exercise',
    chineseName: '划船动作',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps', 'rearDelts'],
    equipment: ['machine'],
    difficulty: 'beginner',
    description: '肩胛骨后缩，训练中背部',
    instructions: [
      '坐在划船器械上',
      '双脚踩稳踏板',
      '双手握住拉杆',
      '向后拉至胸部',
      '挤压肩胛骨后缩',
      '缓慢回到起始位置'
    ]
  }
]

// 📊 完整的背部数据（按器械分类）
export const backExerciseData: MuscleExercisesByEquipment = {
  muscleRegion: 'back',
  equipmentCategories: [
    {
      category: 'bodyweight',
      chineseName: '自重',
      exercises: backBodyweightExercises
    },
    {
      category: 'barbell',
      chineseName: '杠铃',
      exercises: backBarbellExercises
    },
    {
      category: 'dumbbell',
      chineseName: '哑铃',
      exercises: backDumbbellExercises
    },
    {
      category: 'cable',
      chineseName: '绳索',
      exercises: backCableExercises
    },
    {
      category: 'other',
      chineseName: 'T杆',
      exercises: backOtherExercises
    },
    {
      category: 'machine',
      chineseName: '器械',
      exercises: backMachineExercises
    }
  ]
}
