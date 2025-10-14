const muscleOverviewData = {
  chest: {
    name: '胸大肌',
    type: 'primary',
    description: '最大的胸部肌肉，负责推举动作和胸部轮廓塑造'
  },
  lats: {
    name: '背阔肌',
    type: 'primary',
    description: '最大的背部肌肉，负责下拉和拉引动作'
  },
  traps: {
    name: '斜方肌',
    type: 'secondary',
    description: '负责肩胛骨抬升和收缩运动'
  },
  lowerBack: {
    name: '竖脊肌',
    type: 'primary',
    description: '负责脊柱伸展和姿势保持'
  },
  frontDelts: {
    name: '三角肌前束',
    type: 'primary',
    description: '负责肩部前平举和前伸动作'
  },
  sideDelts: {
    name: '三角肌中束',
    type: 'primary',
    description: '负责肩部侧平举和外展动作'
  },
  rearDelts: {
    name: '三角肌后束',
    type: 'primary',
    description: '负责肩部后伸和外旋动作'
  },
  rotatorCuffs: {
    name: '旋转肌袖',
    type: 'secondary',
    description: '肩关节稳定肌群，负责肩关节内外旋'
  },
  biceps: {
    name: '肱二头肌',
    type: 'primary',
    description: '负责肘关节屈曲和肩部稳定'
  },
  triceps: {
    name: '肱三头肌',
    type: 'primary',
    description: '负责肘关节伸展和肩部稳定'
  },
  forearms: {
    name: '前臂肌群',
    type: 'secondary',
    description: '负责手部和腕部的精细运动'
  },
  abs: {
    name: '腹直肌',
    type: 'primary',
    description: '六块腹肌，负责脊柱屈曲和核心稳定'
  },
  obliques: {
    name: '腹斜肌',
    type: 'secondary',
    description: '负责脊柱侧弯和旋转动作'
  },
  neck: {
    name: '颈部肌群',
    type: 'secondary',
    description: '负责头部运动和颈椎稳定'
  },
  glutes: {
    name: '臀大肌',
    type: 'primary',
    description: '负责髋关节伸展和稳定'
  },
  quads: {
    name: '股四头肌',
    type: 'primary',
    description: '负责膝关节伸展和髋关节屈曲'
  },
  hamstrings: {
    name: '腘绳肌',
    type: 'primary',
    description: '负责膝关节屈曲和髋关节伸展'
  },
  adductors: {
    name: '大腿内收肌',
    type: 'secondary',
    description: '负责大腿内收和稳定'
  },
  abductors: {
    name: '大腿外展肌',
    type: 'secondary',
    description: '负责大腿外展和骨盆稳定'
  },
  calves: {
    name: '小腿肌群',
    type: 'secondary',
    description: '负责踝关节跖屈和腿部线条'
  }
} as const;

export type MuscleOverviewKey = keyof typeof muscleOverviewData;

export default muscleOverviewData;
