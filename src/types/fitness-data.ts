/**
 * 健身动作数据类型定义
 * Exercise Data Type Definitions for Fitness App
 */

// 肌肉部位和细分类型 - 完整分类体系
export type MuscleRegion = 
  // 🧸 胸部 
  | 'chest'                 // 胸部 - 对应HumanMuscleAnatomy组件的chest
  | 'back'                  // 背部整体
  | 'shoulders'             // 肩部整体
  | 'legs'                  // 腿部整体
  | 'upper-chest'           // 上胸 - 胸大肌锁骨部(细分)
  | 'middle-lower-chest'    // 中下胸 - 胸大肌胸骨部和肋骨部(细分)
  | 'abs'                   // 腹部笼统分类
  | 'glutes'                // 臀部整体
  | 'quads'                 // 股四头肌通用写法
  | 'lats'                  // 背阔肌通用写法
  | 'obliques'              // 腹外斜肌
  
  // 🫁 背部细分 (2种) 
  | 'upper-back'            // 上背 - 斜方肌上部、菱形肌、三角肌后束
  | 'lower-back'            // 下背 - 竖脊肌、下斜方肌、阔背肌
  
  // 🦵 腿部细分 (2种)
  | 'quadriceps'            // 股四头肌 - 大腿前侧
  | 'hamstrings'           // 腘绳肌 - 大腿后侧
  
  // 💪 肩部细分 (4种)
  | 'frontDelts'            // 三角肌前束 - 对应组件frontDelts
  | 'sideDelts'             // 三角肌中束 - 对应组件sideDelts  
  | 'rearDelts'             // 三角肌后束 - 对应组件rearDelts
  | 'traps'                 // 斜方肌 - 对应组件traps
  | 'front-delts'           // 三角肌前束(细分)
  | 'middle-delts'          // 三角肌中束(细分)
  | 'rear-delts'            // 三角肌后束(细分)
  
  // 🦾 二头肌
  | 'biceps'                // 二头肌 - 对应组件biceps
  | 'biceps-inner'          // 二头肌内侧头(细分)
  | 'biceps-outer'          // 二头肌外侧头(细分)
  
  // 🦿 三头肌
  | 'triceps'               // 三头肌 - 对应组件triceps
  | 'triceps-long-head'     // 三头肌长头(细分)
  | 'triceps-short-head'    // 三头肌短头 + 外侧头(细分)
  
  // 👤 小腿、小臂、颈部 (3种)
  | 'calves'                // 小腿肌群 - 腓肠肌 + 比目鱼肌
  | 'forearms'              // 前臂肌群 - 手部和腕部精细肌肉
  | 'neck'                  // 颈部肌群
  
  // 🍑 臀部细分 (2种)
  | 'upper-glutes'          // 上臀 - 臀大肌上部、臀中肌
  | 'lower-glutes'          // 下臀 - 臀大肌下部、臀小肌
  
  // 🔧 功能性/关节稳定性 (4种)
  | 'hip-mobility'          // 髋部功能性 - 髋屈曲、伸展、外展、内收
  | 'knee-joint'            // 膝关节功能性 - 屈曲、伸展稳定性
  | 'shoulder-joint'        // 肩关节功能性 - 稳定性、协调性
  | 'core'                  // 核心稳定 - 腹部深层稳定肌群
  
  // 🫃 腹部分区 (2种)
  | 'upper-abs'             // 上腹 - 腹直肌上部
  | 'lower-abs'             // 下腹 - 腹直肌下部 + 深层腹肌
  
  // 🔍 其他常用肌肉 (用于辅助肌肉)
  | 'middle-chest'          // 中胸部 (辅助分类)
  | 'lower-chest'           // 下胸部 (辅助分类)
  | 'triceps'               // 肱三头肌 (简化标识)

// 动作分类
export type ExerciseCategory = 
  | 'strength'
  | 'cardio'
  | 'flexibility'
  | 'functional'
  | 'stability'
  | 'plyometric'

// 训练强度
export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

// 器械类型
export type Equipment = 
  | 'bodyweight'
  | 'barbell'
  | 'dumbbell'
  | 'kettlebell'
  | 'resistance-band'
  | 'cable-machine'
  | 'smith-machine'
  | 'machine'
  | 'yoga-mat'
  | 'bench'
  | 'pull-up-bar'
  | 'ab-wheel'
  | 'preacher-bench'
  | 't-bar'
  | 'none'

// 关节动作类型
export type JointMovement = 
  | 'flexion'
  | 'extension'
  | 'abduction'
  | 'adduction'
  | 'rotation'
  | 'circumduction'

// 已移除训练相关的复杂类型定义

// 简化的动作接口
export interface Exercise {
  id: string                 // 唯一标识符
  name: string              // 动作名称
  chineseName: string       // 中文名称
  primaryMuscles: MuscleRegion[]     /// 主要目标肌肉
  secondaryMuscles?: MuscleRegion[]  // 辅助肌肉
  equipment: Equipment[]            // 需要的器械
  difficulty: Difficulty            // 难度等级
  description: string              // 动作描述
  instructions: string[]           // 动作步骤
  equipmentType?: string            // 器械类型标识 (用于动作库过滤)
  count?: string                   // 次数记录 (如 "1次", "10次")
}

// 器械分类的数据结构
export interface EquipmentCategory {
  category: string          // 器械类型：barbell, dumbbell, cable, hammer, smith, machine, bodyweight
  chineseName: string      // 中文名称
  exercises: Exercise[]     // 该类型下的所有动作
}

// 器械类型中文映射
export const EQUIPMENT_CHINESE_NAMES: Record<string, string> = {
  'barbell': '杠铃',
  'dumbbell': '哑铃', 
  'cable': '绳索',
  'hammer': '悍马机',
  'smith': '史密斯机',
  'machine': '器械',
  'bodyweight': '自重'
}

// 肌肉部位的动作数据（按器械分类）
export interface MuscleExercisesByEquipment {
  muscleRegion: MuscleRegion
  equipmentCategories: EquipmentCategory[]
}

// 肌肉部位数据接口
export interface MuscleGroupData {
  region: MuscleRegion
  displayName: string
  chineseName: string
  anatomy: {
    description: string
    origin: string      // 起点
    insertion: string   // 止点
    innervation: string // 神经支配
    bloodSupply: string // 血液供应
  }
  functions: string[]   // 主要功能
  commonExercises: string[] // 常见动作ID列表
  stretchExercises: string[] // 拉伸动作ID列表
  
  // 相关关节
  involvedJoints: string[]
  
  // 训练建议
  trainingTips: string[]
  
  // 损伤预防
  injuryPrevention: {
    commonInjuries: string[]
    preventionTips: string[]
    contraindications: string[]
  }
}

// 训练计划接口已移除，专注于动作展示

// 📊 完整肌肉分类统计
export const MUSCLE_REGIONS_TOTAL = 25 // 总共25个肌肉部位细分

export const MUSCLE_CATEGORIES = {
  // 🧸 胸部 (2种)
  CHEST: ['upper-chest', 'middle-lower-chest'],
  
  // 🫁 背部 (2种)
  BACK: ['upper-back', 'lower-back'],
  
  // 🦵 腿部 (2种)
  LEGS: ['quadriceps', 'hamstrings'],
  
  // 💪 肩部 (4种)
  SHOULDERS: ['front-delts', 'middle-delts', 'rear-delts', 'traps'],
  
  // 🦾 二头肌 (2种)
  BICEPS: ['biceps-inner', 'biceps-outer'],
  
  // 🦿 三头肌 (2种)
  TRICEPS: ['triceps-long-head', 'triceps-short-head'],
  
  // 👤 小腿和细枝末节 (3种)
  LOWER_ARMS_LEGS: ['calves', 'forearms', 'neck'],
  
  // 🍑 臀部 (2种)
  GLUTES: ['upper-glutes', 'lower-glutes'],
  
  // 🔧 功能性/关节稳定 (4种)
  FUNCTIONAL: ['hip-mobility', 'knee-joint', 'shoulder-joint', 'core'],
  
  // 🫃 腹部 (2种)
  ABS: ['upper-abs', 'lower-abs']
} as const

  // 🗂️ 建议的数据文件结构
  export const FILE_STRUCTURE_SUGGESTION = {
    chest: ['chest.ts'],                      // chest.ts - 包含 upper-chest, middle-lower-chest
    back: ['back.ts'],                        // back.ts - 包含 upper-back, lower-back
    shoulders: ['shoulders.ts'],              // shoulders.ts - 包含 4种肩部细分
    arms: ['biceps.ts', 'triceps.ts'],        // biceps.ts, triceps.ts - 各2种细分
    legs: ['legs.ts', 'glutes.ts'],           // legs.ts, glutes.ts - 腿部和臀部
    core: ['core.ts', 'abs.ts'],              // core.ts, abs.ts - 核心和腹部
    functional: ['functional.ts'],            // functional.ts - 功能性和关节稳定
    separate: ['calves.ts', 'forearms.ts', 'neck.ts']  // calves.ts, forearms.ts, neck.ts - 分开的文件
  } as const

// 导出类型工具
export type ExerciseData = Exercise
export type ExerciseId = Exercise['id']
export type MuscleRegionId = MuscleRegion
