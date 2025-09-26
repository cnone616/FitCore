export interface FatLossData {
  weight: number; // 体重(kg)
  height: number; // 身高(cm)
  trainingDayCarbs: number; // 训练日碳水(g/kg体重)
  restDayCarbs: number; // 休息日碳水(g/kg体重)
  dailyProtein: number; // 每日蛋白质(g/kg体重)
}

// 男性减脂数据
export const maleFatLossData: FatLossData[] = [
  // 60kg 体重数据
  { weight: 60, height: 160, trainingDayCarbs: 2.6, restDayCarbs: 2.0, dailyProtein: 1.4 },
  { weight: 60, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 60, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 60, height: 175, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 60, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 60, height: 185, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 60, height: 190, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 65kg 体重数据
  { weight: 65, height: 160, trainingDayCarbs: 2.6, restDayCarbs: 1.9, dailyProtein: 1.4 },
  { weight: 65, height: 165, trainingDayCarbs: 2.6, restDayCarbs: 2.0, dailyProtein: 1.4 },
  { weight: 65, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 65, height: 175, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 65, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 65, height: 185, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 65, height: 190, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 70kg 体重数据
  { weight: 70, height: 160, trainingDayCarbs: 2.5, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 70, height: 165, trainingDayCarbs: 2.5, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 70, height: 170, trainingDayCarbs: 2.6, restDayCarbs: 2.0, dailyProtein: 1.4 },
  { weight: 70, height: 175, trainingDayCarbs: 2.7, restDayCarbs: 2.1, dailyProtein: 1.4 },
  { weight: 70, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 70, height: 185, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 70, height: 190, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 75kg 体重数据
  { weight: 75, height: 160, trainingDayCarbs: 2.0, restDayCarbs: 1.3, dailyProtein: 2.0 },
  { weight: 75, height: 165, trainingDayCarbs: 2.1, restDayCarbs: 1.3, dailyProtein: 2.0 },
  { weight: 75, height: 170, trainingDayCarbs: 2.3, restDayCarbs: 1.4, dailyProtein: 2.0 },
  { weight: 75, height: 175, trainingDayCarbs: 2.4, restDayCarbs: 1.5, dailyProtein: 2.0 },
  { weight: 75, height: 180, trainingDayCarbs: 2.5, restDayCarbs: 1.5, dailyProtein: 2.0 },
  { weight: 75, height: 185, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 75, height: 190, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 80kg 体重数据
  { weight: 80, height: 160, trainingDayCarbs: 2.4, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 80, height: 165, trainingDayCarbs: 2.4, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 80, height: 170, trainingDayCarbs: 2.5, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 80, height: 175, trainingDayCarbs: 2.5, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 80, height: 180, trainingDayCarbs: 2.6, restDayCarbs: 2.1, dailyProtein: 1.4 },
  { weight: 80, height: 185, trainingDayCarbs: 2.6, restDayCarbs: 2.2, dailyProtein: 1.4 },
  { weight: 80, height: 190, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 85kg 体重数据
  { weight: 85, height: 160, trainingDayCarbs: 2.3, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 85, height: 165, trainingDayCarbs: 2.4, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 85, height: 170, trainingDayCarbs: 2.4, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 85, height: 175, trainingDayCarbs: 2.5, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 85, height: 180, trainingDayCarbs: 2.5, restDayCarbs: 2.0, dailyProtein: 1.4 },
  { weight: 85, height: 185, trainingDayCarbs: 2.6, restDayCarbs: 2.1, dailyProtein: 1.4 },
  { weight: 85, height: 190, trainingDayCarbs: 2.6, restDayCarbs: 2.1, dailyProtein: 1.4 },

  // 90kg 体重数据
  { weight: 90, height: 160, trainingDayCarbs: 2.3, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 90, height: 165, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 90, height: 170, trainingDayCarbs: 2.4, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 90, height: 175, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 90, height: 180, trainingDayCarbs: 2.5, restDayCarbs: 2.0, dailyProtein: 1.4 },
  { weight: 90, height: 185, trainingDayCarbs: 2.5, restDayCarbs: 2.1, dailyProtein: 1.4 },
  { weight: 90, height: 190, trainingDayCarbs: 2.6, restDayCarbs: 2.1, dailyProtein: 1.4 },

  // 95kg 体重数据
  { weight: 95, height: 160, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 95, height: 165, trainingDayCarbs: 2.3, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 95, height: 170, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 95, height: 175, trainingDayCarbs: 2.4, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 95, height: 180, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 95, height: 185, trainingDayCarbs: 2.5, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 95, height: 190, trainingDayCarbs: 2.5, restDayCarbs: 2.1, dailyProtein: 1.3 },

  // 100kg 体重数据
  { weight: 100, height: 160, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 100, height: 165, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 100, height: 170, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 100, height: 175, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 100, height: 180, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 100, height: 185, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 100, height: 190, trainingDayCarbs: 2.5, restDayCarbs: 2.1, dailyProtein: 1.3 },

  // 105kg 体重数据
  { weight: 105, height: 160, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 105, height: 165, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 105, height: 170, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 105, height: 175, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 105, height: 180, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 105, height: 185, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 105, height: 190, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },

  // 110kg 体重数据
  { weight: 110, height: 160, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 110, height: 165, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 110, height: 170, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 110, height: 175, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 110, height: 180, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 110, height: 185, trainingDayCarbs: 2.3, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 110, height: 190, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },

  // 115kg 体重数据
  { weight: 115, height: 160, trainingDayCarbs: 2.1, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 115, height: 165, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 115, height: 170, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 115, height: 175, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 115, height: 180, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 115, height: 185, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 115, height: 190, trainingDayCarbs: 2.3, restDayCarbs: 2.0, dailyProtein: 1.3 },

  // 120kg 体重数据
  { weight: 120, height: 160, trainingDayCarbs: 1.9, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 120, height: 165, trainingDayCarbs: 2.0, restDayCarbs: 1.6, dailyProtein: 1.1 },
  { weight: 120, height: 170, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 120, height: 175, trainingDayCarbs: 2.1, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 120, height: 180, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 120, height: 185, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 120, height: 190, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },

  // 125kg 体重数据
  { weight: 125, height: 160, trainingDayCarbs: 1.9, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 125, height: 165, trainingDayCarbs: 2.0, restDayCarbs: 1.6, dailyProtein: 1.1 },
  { weight: 125, height: 170, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 125, height: 175, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 125, height: 180, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 125, height: 185, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 125, height: 190, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.2 },

  // 130kg 体重数据
  { weight: 130, height: 160, trainingDayCarbs: 1.9, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 130, height: 165, trainingDayCarbs: 1.9, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 130, height: 170, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 130, height: 175, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 130, height: 180, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 130, height: 185, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 130, height: 190, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 }
];

// 女性减脂数据
export const femaleFatLossData: FatLossData[] = [
  // 40kg 体重数据
  { weight: 40, height: 150, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 40, height: 155, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 40, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 40, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 40, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 40, height: 175, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 40, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 45kg 体重数据
  { weight: 45, height: 150, trainingDayCarbs: 2.4, restDayCarbs: 1.8, dailyProtein: 1.3 },
  { weight: 45, height: 155, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 45, height: 160, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 45, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 45, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 45, height: 175, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 45, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 50kg 体重数据
  { weight: 50, height: 150, trainingDayCarbs: 2.3, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 50, height: 155, trainingDayCarbs: 2.4, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 50, height: 160, trainingDayCarbs: 2.5, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 50, height: 165, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 50, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 50, height: 175, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 50, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 55kg 体重数据
  { weight: 55, height: 150, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 55, height: 155, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 55, height: 160, trainingDayCarbs: 2.4, restDayCarbs: 1.9, dailyProtein: 1.3 },
  { weight: 55, height: 165, trainingDayCarbs: 2.5, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 55, height: 170, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 55, height: 175, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },
  { weight: 55, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 60kg 体重数据
  { weight: 60, height: 150, trainingDayCarbs: 2.1, restDayCarbs: 1.7, dailyProtein: 1.2 },
  { weight: 60, height: 155, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 60, height: 160, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 60, height: 165, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 60, height: 170, trainingDayCarbs: 2.5, restDayCarbs: 2.1, dailyProtein: 1.3 },
  { weight: 60, height: 175, trainingDayCarbs: 2.5, restDayCarbs: 2.1, dailyProtein: 1.4 },
  { weight: 60, height: 180, trainingDayCarbs: 0, restDayCarbs: 0, dailyProtein: 0 },

  // 65kg 体重数据
  { weight: 65, height: 150, trainingDayCarbs: 2.1, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 65, height: 155, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 65, height: 160, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 65, height: 165, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 65, height: 170, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 65, height: 175, trainingDayCarbs: 2.5, restDayCarbs: 2.1, dailyProtein: 1.3 },
  { weight: 65, height: 180, trainingDayCarbs: 2.5, restDayCarbs: 2.2, dailyProtein: 1.4 },

  // 70kg 体重数据
  { weight: 70, height: 150, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 70, height: 155, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 70, height: 160, trainingDayCarbs: 2.2, restDayCarbs: 1.8, dailyProtein: 1.2 },
  { weight: 70, height: 165, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 70, height: 170, trainingDayCarbs: 2.3, restDayCarbs: 2.0, dailyProtein: 1.2 },
  { weight: 70, height: 175, trainingDayCarbs: 2.4, restDayCarbs: 2.0, dailyProtein: 1.3 },
  { weight: 70, height: 180, trainingDayCarbs: 2.4, restDayCarbs: 2.1, dailyProtein: 1.3 },

  // 75kg 体重数据
  { weight: 75, height: 150, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 75, height: 155, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 75, height: 160, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 75, height: 165, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 75, height: 170, trainingDayCarbs: 2.3, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 75, height: 175, trainingDayCarbs: 2.3, restDayCarbs: 2.0, dailyProtein: 1.2 },
  { weight: 75, height: 180, trainingDayCarbs: 2.4, restDayCarbs: 2.1, dailyProtein: 1.3 },

  // 80kg 体重数据
  { weight: 80, height: 150, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 80, height: 155, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 80, height: 160, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 80, height: 165, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 80, height: 170, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 80, height: 175, trainingDayCarbs: 2.3, restDayCarbs: 2.0, dailyProtein: 1.2 },
  { weight: 80, height: 180, trainingDayCarbs: 2.3, restDayCarbs: 2.0, dailyProtein: 1.3 },

  // 85kg 体重数据
  { weight: 85, height: 150, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 85, height: 155, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 85, height: 160, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 85, height: 165, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 85, height: 170, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 85, height: 175, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 85, height: 180, trainingDayCarbs: 2.3, restDayCarbs: 2.0, dailyProtein: 1.2 },

  // 90kg 体重数据
  { weight: 90, height: 150, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 90, height: 155, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 90, height: 160, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 90, height: 165, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 90, height: 170, trainingDayCarbs: 2.1, restDayCarbs: 1.9, dailyProtein: 1.1 },
  { weight: 90, height: 175, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 90, height: 180, trainingDayCarbs: 2.2, restDayCarbs: 2.0, dailyProtein: 1.2 },

  // 95kg 体重数据
  { weight: 95, height: 150, trainingDayCarbs: 1.9, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 95, height: 155, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 95, height: 160, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 95, height: 165, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 95, height: 170, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 95, height: 175, trainingDayCarbs: 2.1, restDayCarbs: 1.9, dailyProtein: 1.2 },
  { weight: 95, height: 180, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },

  // 100kg 体重数据
  { weight: 100, height: 150, trainingDayCarbs: 1.9, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 100, height: 155, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 100, height: 160, trainingDayCarbs: 2.0, restDayCarbs: 1.7, dailyProtein: 1.1 },
  { weight: 100, height: 165, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 100, height: 170, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 100, height: 175, trainingDayCarbs: 2.1, restDayCarbs: 1.9, dailyProtein: 1.1 },
  { weight: 100, height: 180, trainingDayCarbs: 2.2, restDayCarbs: 1.9, dailyProtein: 1.2 },

  // 105kg 体重数据
  { weight: 105, height: 150, trainingDayCarbs: 1.9, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 105, height: 155, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 105, height: 160, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 105, height: 165, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 105, height: 170, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 105, height: 175, trainingDayCarbs: 2.1, restDayCarbs: 1.9, dailyProtein: 1.1 },
  { weight: 105, height: 180, trainingDayCarbs: 2.1, restDayCarbs: 1.9, dailyProtein: 1.1 },

  // 110kg 体重数据
  { weight: 110, height: 150, trainingDayCarbs: 1.8, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 110, height: 155, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 110, height: 160, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 110, height: 165, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 110, height: 170, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 110, height: 175, trainingDayCarbs: 2.1, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 110, height: 180, trainingDayCarbs: 2.1, restDayCarbs: 1.9, dailyProtein: 1.1 },

  // 115kg 体重数据
  { weight: 115, height: 150, trainingDayCarbs: 1.8, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 115, height: 155, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 115, height: 160, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 115, height: 165, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 115, height: 170, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 115, height: 175, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 115, height: 180, trainingDayCarbs: 2.1, restDayCarbs: 1.9, dailyProtein: 1.1 },

  // 120kg 体重数据
  { weight: 120, height: 150, trainingDayCarbs: 1.8, restDayCarbs: 1.6, dailyProtein: 1.0 },
  { weight: 120, height: 155, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 120, height: 160, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 120, height: 165, trainingDayCarbs: 1.9, restDayCarbs: 1.7, dailyProtein: 1.0 },
  { weight: 120, height: 170, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 120, height: 175, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 },
  { weight: 120, height: 180, trainingDayCarbs: 2.0, restDayCarbs: 1.8, dailyProtein: 1.1 }
];
