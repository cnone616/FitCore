// 训练数据接口定义
export interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  duration: number; // 分钟
  difficulty: '初级' | '中级' | '高级';
  category: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight?: number; // kg
  duration?: number; // 秒
  rest: number; // 秒
  instructions: string[];
}

export interface WorkoutSession {
  id: string;
  planId: string;
  date: Date;
  duration: number;
  exercises: ExerciseSession[];
  notes?: string;
}

export interface ExerciseSession {
  exerciseId: string;
  sets: SetResult[];
}

export interface SetResult {
  reps: number;
  weight?: number;
  duration?: number;
  completed: boolean;
}

// 训练计划数据
export const workoutPlans: WorkoutPlan[] = [
  {
    id: '1',
    name: '新手全身训练',
    description: '适合健身新手的全身力量训练计划',
    duration: 45,
    difficulty: '初级',
    category: '全身训练',
    exercises: [
      {
        id: '1',
        name: '俯卧撑',
        sets: 3,
        reps: 10,
        rest: 60,
        instructions: ['保持身体挺直', '下降时胸部接近地面', '推起时完全伸展手臂']
      },
      {
        id: '2',
        name: '深蹲',
        sets: 3,
        reps: 15,
        rest: 60,
        instructions: ['双脚与肩同宽', '下蹲时膝盖不超过脚尖', '保持背部挺直']
      },
      {
        id: '3',
        name: '平板支撑',
        sets: 3,
        duration: 30,
        rest: 60,
        instructions: ['保持身体成一条直线', '收紧核心', '正常呼吸']
      }
    ]
  },
  {
    id: '2',
    name: 'HIIT燃脂训练',
    description: '高强度间歇训练，快速燃脂',
    duration: 30,
    difficulty: '中级',
    category: '有氧训练',
    exercises: [
      {
        id: '4',
        name: '波比跳',
        sets: 4,
        reps: 8,
        rest: 30,
        instructions: ['快速完成动作', '保持高强度', '注意落地缓冲']
      },
      {
        id: '5',
        name: '高抬腿',
        sets: 4,
        duration: 30,
        rest: 30,
        instructions: ['快速抬腿', '保持核心稳定', '手臂自然摆动']
      }
    ]
  }
];

// 训练进度数据
export const workoutSessions: WorkoutSession[] = [
  {
    id: '1',
    planId: '1',
    date: new Date('2024-01-15'),
    duration: 42,
    exercises: [
      {
        exerciseId: '1',
        sets: [
          { reps: 10, completed: true },
          { reps: 8, completed: true },
          { reps: 6, completed: true }
        ]
      }
    ],
    notes: '感觉不错，下次可以增加重量'
  }
];

// 训练工具函数
export function calculateWorkoutVolume(exercises: Exercise[]): number {
  return exercises.reduce((total, exercise) => {
    const volume = exercise.sets * exercise.reps * (exercise.weight || 1);
    return total + volume;
  }, 0);
}

export function getWorkoutProgress(planId: string, sessions: WorkoutSession[]): number {
  const planSessions = sessions.filter(session => session.planId === planId);
  return planSessions.length;
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}小时${mins}分钟`;
  }
  return `${mins}分钟`;
}
