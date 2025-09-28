export interface MuscleGainData {
  weight: number; // 体重(kg)
  height: number; // 身高(cm)
  trainingDayCarbs: number; // 训练日碳水(g/kg体重)
  restDayCarbs: number; // 休息日碳水(g/kg体重)
  dailyProtein: number; // 每日蛋白质(g/kg体重)
}

export const maleMuscleGainData: MuscleGainData[] = [
  // 50kg 体重数据
  { weight: 50, height: 160, trainingDayCarbs: 3.7, restDayCarbs: 2.7, dailyProtein: 2.0 },
  { weight: 50, height: 165, trainingDayCarbs: 3.9, restDayCarbs: 2.8, dailyProtein: 2.1 },
  { weight: 50, height: 170, trainingDayCarbs: 4.0, restDayCarbs: 2.9, dailyProtein: 2.1 },
  { weight: 50, height: 175, trainingDayCarbs: 4.1, restDayCarbs: 3.0, dailyProtein: 2.2 },
  { weight: 50, height: 180, trainingDayCarbs: 4.2, restDayCarbs: 3.2, dailyProtein: 2.3 },
  { weight: 50, height: 185, trainingDayCarbs: 4.3, restDayCarbs: 3.3, dailyProtein: 2.3 },
  { weight: 50, height: 190, trainingDayCarbs: 4.5, restDayCarbs: 3.4, dailyProtein: 2.4 },

  // 55kg 体重数据
  { weight: 55, height: 160, trainingDayCarbs: 3.6, restDayCarbs: 2.6, dailyProtein: 1.9 },
  { weight: 55, height: 165, trainingDayCarbs: 3.7, restDayCarbs: 2.7, dailyProtein: 2.0 },
  { weight: 55, height: 170, trainingDayCarbs: 3.8, restDayCarbs: 2.8, dailyProtein: 2.0 },
  { weight: 55, height: 175, trainingDayCarbs: 3.9, restDayCarbs: 2.9, dailyProtein: 2.1 },
  { weight: 55, height: 180, trainingDayCarbs: 4.0, restDayCarbs: 3.1, dailyProtein: 2.2 },
  { weight: 55, height: 185, trainingDayCarbs: 4.1, restDayCarbs: 3.2, dailyProtein: 2.2 },
  { weight: 55, height: 190, trainingDayCarbs: 4.2, restDayCarbs: 3.3, dailyProtein: 2.3 },

  // 60kg 体重数据
  { weight: 60, height: 160, trainingDayCarbs: 3.4, restDayCarbs: 2.6, dailyProtein: 1.8 },
  { weight: 60, height: 165, trainingDayCarbs: 3.5, restDayCarbs: 2.7, dailyProtein: 1.9 },
  { weight: 60, height: 170, trainingDayCarbs: 3.6, restDayCarbs: 2.8, dailyProtein: 2.0 },
  { weight: 60, height: 175, trainingDayCarbs: 3.7, restDayCarbs: 2.9, dailyProtein: 2.0 },
  { weight: 60, height: 180, trainingDayCarbs: 3.8, restDayCarbs: 3.0, dailyProtein: 2.1 },
  { weight: 60, height: 185, trainingDayCarbs: 3.9, restDayCarbs: 3.1, dailyProtein: 2.1 },
  { weight: 60, height: 190, trainingDayCarbs: 4.0, restDayCarbs: 3.2, dailyProtein: 2.2 },

  // 65kg 体重数据
  { weight: 65, height: 160, trainingDayCarbs: 3.3, restDayCarbs: 2.5, dailyProtein: 1.8 },
  { weight: 65, height: 165, trainingDayCarbs: 3.4, restDayCarbs: 2.6, dailyProtein: 1.8 },
  { weight: 65, height: 170, trainingDayCarbs: 3.5, restDayCarbs: 2.7, dailyProtein: 1.9 },
  { weight: 65, height: 175, trainingDayCarbs: 3.6, restDayCarbs: 2.8, dailyProtein: 1.9 },
  { weight: 65, height: 180, trainingDayCarbs: 3.7, restDayCarbs: 2.9, dailyProtein: 2.0 },
  { weight: 65, height: 185, trainingDayCarbs: 3.8, restDayCarbs: 3.0, dailyProtein: 2.0 },
  { weight: 65, height: 190, trainingDayCarbs: 3.9, restDayCarbs: 3.1, dailyProtein: 2.1 },

  // 70kg 体重数据
  { weight: 70, height: 160, trainingDayCarbs: 3.2, restDayCarbs: 2.5, dailyProtein: 1.7 },
  { weight: 70, height: 165, trainingDayCarbs: 3.3, restDayCarbs: 2.6, dailyProtein: 1.8 },
  { weight: 70, height: 170, trainingDayCarbs: 3.4, restDayCarbs: 2.6, dailyProtein: 1.8 },
  { weight: 70, height: 175, trainingDayCarbs: 3.5, restDayCarbs: 2.7, dailyProtein: 1.9 },
  { weight: 70, height: 180, trainingDayCarbs: 3.6, restDayCarbs: 2.8, dailyProtein: 1.9 },
  { weight: 70, height: 185, trainingDayCarbs: 3.7, restDayCarbs: 2.9, dailyProtein: 2.0 },
  { weight: 70, height: 190, trainingDayCarbs: 3.7, restDayCarbs: 3.0, dailyProtein: 2.0 },

  // 75kg 体重数据
  { weight: 75, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 75, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 75, height: 170, trainingDayCarbs: 3.3, restDayCarbs: 2.6, dailyProtein: 1.8 },
  { weight: 75, height: 175, trainingDayCarbs: 3.4, restDayCarbs: 2.7, dailyProtein: 1.8 },
  { weight: 75, height: 180, trainingDayCarbs: 3.5, restDayCarbs: 2.8, dailyProtein: 1.9 },
  { weight: 75, height: 185, trainingDayCarbs: 3.5, restDayCarbs: 2.8, dailyProtein: 1.9 },
  { weight: 75, height: 190, trainingDayCarbs: 3.6, restDayCarbs: 2.9, dailyProtein: 2.0 },

  // 80kg 体重数据
  { weight: 80, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 80, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 80, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 80, height: 175, trainingDayCarbs: 3.3, restDayCarbs: 2.6, dailyProtein: 1.8 },
  { weight: 80, height: 180, trainingDayCarbs: 3.4, restDayCarbs: 2.7, dailyProtein: 1.8 },
  { weight: 80, height: 185, trainingDayCarbs: 3.4, restDayCarbs: 2.8, dailyProtein: 1.9 },
  { weight: 80, height: 190, trainingDayCarbs: 3.5, restDayCarbs: 2.9, dailyProtein: 1.9 },

  // 85kg 体重数据
  { weight: 85, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 85, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 85, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 85, height: 175, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 85, height: 180, trainingDayCarbs: 3.3, restDayCarbs: 2.7, dailyProtein: 1.8 },
  { weight: 85, height: 185, trainingDayCarbs: 3.4, restDayCarbs: 2.7, dailyProtein: 1.8 },
  { weight: 85, height: 190, trainingDayCarbs: 3.4, restDayCarbs: 2.8, dailyProtein: 1.8 },

  // 90kg 体重数据
  { weight: 90, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 90, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 90, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 90, height: 175, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 90, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 90, height: 185, trainingDayCarbs: 3.3, restDayCarbs: 2.7, dailyProtein: 1.8 },
  { weight: 90, height: 190, trainingDayCarbs: 3.3, restDayCarbs: 2.8, dailyProtein: 1.8 },

  // 95kg 体重数据
  { weight: 95, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 95, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 95, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 95, height: 175, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 95, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 95, height: 185, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 95, height: 190, trainingDayCarbs: 3.3, restDayCarbs: 2.7, dailyProtein: 1.8 }
];

// 女性增肌数据
export const femaleMuscleGainData: MuscleGainData[] = [
  // 40kg 体重数据
  { weight: 40, height: 150, trainingDayCarbs: 3.1, restDayCarbs: 2.3, dailyProtein: 1.3 },
  { weight: 40, height: 155, trainingDayCarbs: 3.2, restDayCarbs: 2.5, dailyProtein: 1.4 },
  { weight: 40, height: 160, trainingDayCarbs: 3.4, restDayCarbs: 2.6, dailyProtein: 1.5 },
  { weight: 40, height: 165, trainingDayCarbs: 3.5, restDayCarbs: 2.8, dailyProtein: 1.5 },
  { weight: 40, height: 170, trainingDayCarbs: 3.7, restDayCarbs: 2.9, dailyProtein: 1.6 },
  { weight: 40, height: 175, trainingDayCarbs: 3.8, restDayCarbs: 3.1, dailyProtein: 1.6 },
  { weight: 40, height: 180, trainingDayCarbs: 4.0, restDayCarbs: 3.2, dailyProtein: 1.7 },

  // 45kg 体重数据
  { weight: 45, height: 150, trainingDayCarbs: 3.0, restDayCarbs: 2.3, dailyProtein: 1.3 },
  { weight: 45, height: 155, trainingDayCarbs: 3.1, restDayCarbs: 2.4, dailyProtein: 1.3 },
  { weight: 45, height: 160, trainingDayCarbs: 3.2, restDayCarbs: 2.5, dailyProtein: 1.4 },
  { weight: 45, height: 165, trainingDayCarbs: 3.4, restDayCarbs: 2.7, dailyProtein: 1.4 },
  { weight: 45, height: 170, trainingDayCarbs: 3.5, restDayCarbs: 2.8, dailyProtein: 1.5 },
  { weight: 45, height: 175, trainingDayCarbs: 3.6, restDayCarbs: 2.9, dailyProtein: 1.6 },
  { weight: 45, height: 180, trainingDayCarbs: 3.8, restDayCarbs: 3.1, dailyProtein: 1.6 },

  // 50kg 体重数据
  { weight: 50, height: 150, trainingDayCarbs: 2.9, restDayCarbs: 2.2, dailyProtein: 1.2 },
  { weight: 50, height: 155, trainingDayCarbs: 3.0, restDayCarbs: 2.4, dailyProtein: 1.3 },
  { weight: 50, height: 160, trainingDayCarbs: 3.1, restDayCarbs: 2.5, dailyProtein: 1.3 },
  { weight: 50, height: 165, trainingDayCarbs: 3.2, restDayCarbs: 2.6, dailyProtein: 1.4 },
  { weight: 50, height: 170, trainingDayCarbs: 3.3, restDayCarbs: 2.7, dailyProtein: 1.4 },
  { weight: 50, height: 175, trainingDayCarbs: 3.5, restDayCarbs: 2.8, dailyProtein: 1.5 },
  { weight: 50, height: 180, trainingDayCarbs: 3.6, restDayCarbs: 3.0, dailyProtein: 1.5 },

  // 55kg 体重数据
  { weight: 55, height: 150, trainingDayCarbs: 2.8, restDayCarbs: 2.2, dailyProtein: 1.2 },
  { weight: 55, height: 155, trainingDayCarbs: 2.9, restDayCarbs: 2.3, dailyProtein: 1.2 },
  { weight: 55, height: 160, trainingDayCarbs: 3.0, restDayCarbs: 2.4, dailyProtein: 1.3 },
  { weight: 55, height: 165, trainingDayCarbs: 3.1, restDayCarbs: 2.5, dailyProtein: 1.3 },
  { weight: 55, height: 170, trainingDayCarbs: 3.2, restDayCarbs: 2.6, dailyProtein: 1.4 },
  { weight: 55, height: 175, trainingDayCarbs: 3.3, restDayCarbs: 2.8, dailyProtein: 1.4 },
  { weight: 55, height: 180, trainingDayCarbs: 3.4, restDayCarbs: 2.9, dailyProtein: 1.5 },

  // 60kg 体重数据
  { weight: 60, height: 150, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 60, height: 155, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 60, height: 160, trainingDayCarbs: 2.9, restDayCarbs: 2.4, dailyProtein: 1.2 },
  { weight: 60, height: 165, trainingDayCarbs: 3.0, restDayCarbs: 2.5, dailyProtein: 1.3 },
  { weight: 60, height: 170, trainingDayCarbs: 3.1, restDayCarbs: 2.6, dailyProtein: 1.3 },
  { weight: 60, height: 175, trainingDayCarbs: 3.2, restDayCarbs: 2.7, dailyProtein: 1.4 },
  { weight: 60, height: 180, trainingDayCarbs: 3.3, restDayCarbs: 2.8, dailyProtein: 1.4 },

  // 65kg 体重数据
  { weight: 65, height: 150, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 65, height: 155, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 65, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 65, height: 165, trainingDayCarbs: 2.9, restDayCarbs: 2.4, dailyProtein: 1.2 },
  { weight: 65, height: 170, trainingDayCarbs: 3.0, restDayCarbs: 2.5, dailyProtein: 1.3 },
  { weight: 65, height: 175, trainingDayCarbs: 3.1, restDayCarbs: 2.6, dailyProtein: 1.3 },
  { weight: 65, height: 180, trainingDayCarbs: 3.2, restDayCarbs: 2.7, dailyProtein: 1.4 },

  // 70kg 体重数据
  { weight: 70, height: 150, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 70, height: 155, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 70, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 70, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 70, height: 170, trainingDayCarbs: 2.9, restDayCarbs: 2.5, dailyProtein: 1.2 },
  { weight: 70, height: 175, trainingDayCarbs: 3.0, restDayCarbs: 2.6, dailyProtein: 1.3 },
  { weight: 70, height: 180, trainingDayCarbs: 3.1, restDayCarbs: 2.7, dailyProtein: 1.3 },

  // 75kg 体重数据
  { weight: 75, height: 150, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 75, height: 155, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 75, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 75, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 75, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 75, height: 175, trainingDayCarbs: 3.0, restDayCarbs: 2.5, dailyProtein: 1.2 },
  { weight: 75, height: 180, trainingDayCarbs: 3.0, restDayCarbs: 2.6, dailyProtein: 1.3 }
];