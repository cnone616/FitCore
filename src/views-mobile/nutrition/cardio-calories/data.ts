// 数据结构：运动 → 子项（单位热量：kcal/kg）
export interface ActivityItem { id: string; name: string; kcal_per_kg: number }
export interface Activity { id: string; name: string; items: ActivityItem[] }

export const cardioActivities: Activity[] = [
      {
        "id": "walking_flat",
        "name": "平地走",
        "items": [
          { "id": "per_10000_steps", "name": "每走一万步", "kcal_per_kg": 3.800 },
          { "id": "per_hour", "name": "每走一小时", "kcal_per_kg": 3.800 }
        ]
      },
      {
        "id": "incline_walking",
        "name": "爬坡走",
        "items": [
          { "id": "slope_5_deg", "name": "坡度5°（一般选择）", "kcal_per_kg": 5.500 },
          { "id": "slope_10_deg", "name": "坡度10°（很累）", "kcal_per_kg": 8.000 }
        ]
      },
      {
        "id": "running",
        "name": "跑步",
        "items": [
          { "id": "speed_6_kmh", "name": "速度6km/h", "kcal_per_kg": 5.500 },
          { "id": "speed_7_kmh", "name": "速度7km/h", "kcal_per_kg": 7.200 },
          { "id": "speed_8_kmh", "name": "速度8km/h", "kcal_per_kg": 9.500 },
          { "id": "speed_9_kmh", "name": "速度9km/h", "kcal_per_kg": 9.600 },
          { "id": "speed_10_kmh", "name": "速度10km/h", "kcal_per_kg": 9.800 },
          { "id": "speed_12_kmh", "name": "速度12km/h", "kcal_per_kg": 10.100 },
          { "id": "speed_13_kmh", "name": "速度13km/h", "kcal_per_kg": 10.100 },
          { "id": "speed_14_kmh", "name": "速度14km/h", "kcal_per_kg": 10.400 },
          { "id": "speed_15_kmh", "name": "速度15km/h", "kcal_per_kg": 10.900 },
          { "id": "speed_16_kmh", "name": "速度16km/h", "kcal_per_kg": 12.700 }
        ]
      },
      {
        "id": "cycling_outdoor",
        "name": "户外骑行",
        "items": [
          { "id": "speed_10_kmh", "name": "速度10km/h", "kcal_per_kg": 3.600 },
          { "id": "speed_12_kmh", "name": "速度12km/h", "kcal_per_kg": 3.900 },
          { "id": "speed_13_kmh", "name": "速度13km/h", "kcal_per_kg": 4.400 },
          { "id": "speed_15_kmh", "name": "速度15km/h", "kcal_per_kg": 5.500 },
          { "id": "speed_18_kmh", "name": "速度18km/h", "kcal_per_kg": 6.500 },
          { "id": "speed_27_kmh", "name": "速度27km/h", "kcal_per_kg": 7.500 },
          { "id": "speed_31_kmh", "name": "速度31km/h", "kcal_per_kg": 10.000 },
          { "id": "speed_34_kmh", "name": "速度34km/h", "kcal_per_kg": 12.000 }
        ]
      },
      {
        "id": "cycling_indoor",
        "name": "室内单车",
        "items": [
          { "id": "power_50_90_w", "name": "功率50-90W", "kcal_per_kg": 4.800 },
          { "id": "power_90_100_w", "name": "功率90-100W", "kcal_per_kg": 6.800 },
          { "id": "power_100_160_w", "name": "功率100-160W", "kcal_per_kg": 8.800 },
          { "id": "power_160_200_w", "name": "功率160-200W", "kcal_per_kg": 11.000 },
          { "id": "power_200_270_w", "name": "功率200-270W", "kcal_per_kg": 14.000 }
        ]
      },
      {
        "id": "swimming",
        "name": "游泳/休息时间不计入",
        "items": [
          { "id": "speed_1_kmh", "name": "速度1km/h", "kcal_per_kg": 4.200 },
          { "id": "speed_2_kmh", "name": "速度2km/h", "kcal_per_kg": 7.700 },
          { "id": "speed_3_kmh", "name": "速度3km/h", "kcal_per_kg": 9.200 }
        ]
      },
      {
        "id": "ball_games",
        "name": "球类/休息时间不计入",
        "items": [
          { "id": "basketball", "name": "篮球", "kcal_per_kg": 6.100 },
          { "id": "football", "name": "足球", "kcal_per_kg": 7.000 },
          { "id": "volleyball", "name": "排球", "kcal_per_kg": 4.100 },
          { "id": "tennis", "name": "网球", "kcal_per_kg": 8.900 },
          { "id": "table_tennis", "name": "乒乓球", "kcal_per_kg": 6.600 },
          { "id": "badminton", "name": "羽毛球", "kcal_per_kg": 7.400 }
        ]
      },
      {
        "id": "aerobics",
        "name": "跳操跟练/休息时间不计入",
        "items": [
          { "id": "low_intensity", "name": "轻松强度", "kcal_per_kg": 2.300 },
          { "id": "medium_intensity", "name": "中等强度", "kcal_per_kg": 4.000 },
          { "id": "high_intensity", "name": "剧烈强度", "kcal_per_kg": 6.000 }
        ]
      },
      {
        "id": "indoor_others",
        "name": "室内其他项目",
        "items": [
          { "id": "yoga", "name": "瑜伽", "kcal_per_kg": 3.100 },
          { "id": "dance", "name": "舞蹈", "kcal_per_kg": 5.000 },
          { "id": "hula_hoop", "name": "健身环", "kcal_per_kg": 5.000 },
          { "id": "pilates", "name": "普拉提", "kcal_per_kg": 3.000 },
          { "id": "stepper", "name": "椭圆仪", "kcal_per_kg": 5.000 }
        ]
      },
      {
        "id": "stairs",
        "name": "爬楼/速度90步/分钟",
        "items": [
          { "id": "upstairs", "name": "上楼", "kcal_per_kg": 8.000 },
          { "id": "downstairs", "name": "下楼", "kcal_per_kg": 3.100 }
        ]
      },
      {
        "id": "rowing_machine",
        "name": "划船机",
        "items": [
          { "id": "power_100w", "name": "功率100W", "kcal_per_kg": 7.000 },
          { "id": "power_150w", "name": "功率150W", "kcal_per_kg": 8.500 },
          { "id": "power_200w", "name": "功率200W", "kcal_per_kg": 12.000 }
        ]
      },
      {
        "id": "boxing",
        "name": "拳击",
        "items": [
          { "id": "sandbag", "name": "打沙袋", "kcal_per_kg": 5.500 },
          { "id": "sparring", "name": "真人格斗", "kcal_per_kg": 7.800 }
        ]
      },
      {
        "id": "rope_skipping",
        "name": "跳绳",
        "items": [
          { "id": "below_100_per_min", "name": "<100次/分钟", "kcal_per_kg": 8.800 },
          { "id": "100_120_per_min", "name": "100-120次/分钟", "kcal_per_kg": 11.800 },
          { "id": "120_160_per_min", "name": "120-160次/分钟", "kcal_per_kg": 12.300 }
        ]
      }
];

