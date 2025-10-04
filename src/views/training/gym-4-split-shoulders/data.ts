// 健身计划概览信息
export const planOverview = {
  title: '健身房四分化训练计划',
  description: '完整的四分化训练周期：Day1背+肱二头，Day2胸+肱三头，Day3腿臀+腹，Day4肩部专练'
};

export const gym4SplitShouldersPlans = [
  {
    dayId: 'day-1',
    dayName: 'Day1：背+肱二头',
    description: '为什么它们在一天练？因为练背会有肩伸（肩后束）、肩水平外展（肩后束）、肘屈（肱二头肌），所以练背后接着继续用少量组数补练肩后束、肱二头即可',
    trainingBlocks: {
      muscleGroupId: 'back-training',
      muscleGroupName: '背部训练',
      exerciseCategories: [
        {
          categoryId: 'pull-down',
          categoryName: '下拉',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'pull-up',
              exerciseName: '引体向上',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '[宽握]肩内收'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'lat-pulldown',
              exerciseName: '高位下拉',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '[中握]肩内收mix肩伸'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'machine-pulldown',
              exerciseName: '器械下拉',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '[窄握]肩伸'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'rowing',
          categoryName: '划船',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'barbell-row',
              exerciseName: '杠铃俯身划船',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '[宽握]肩水平外展'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 't-bar-row',
              exerciseName: 'T杆俯身划船',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '[中握]肩伸mix肩水平外展'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'seated-cable-row',
              exerciseName: '坐姿器械划船',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '[窄握]肩伸'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'dumbbell-row',
              exerciseName: '单边哑铃划船',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩伸'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'straight-arm-pulldown',
              exerciseName: '龙门架直臂下压',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩伸'
                }
              ]
            }
          ]
        }
      ]
    },
    additionalBlocks: {
      muscleGroupId: 'bicep-training',
      muscleGroupName: '肱二头肌训练',
      instruction: '选1-2个动作 总共6-8组',
      exerciseCategories: [
        {
          categoryId: 'bicep-exercises',
          categoryName: '肱二头肌动作',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'dumbbell-curl',
              exerciseName: '哑铃弯举',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'barbell-curl',
              exerciseName: '杠铃弯举',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'concentration-curl',
              exerciseName: '集中弯举',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'machine-curl',
              exerciseName: '器械弯举',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            },
            {
              exerciseId: 'preacher-curl',
              exerciseName: '牧师椅弯举',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    dayId: 'day-2',
    dayName: 'Day2：胸+肱三头',
    description: '为什么它们在一天练？因为练胸会有肘伸（肱三头肌），所以练胸后接着继续用少量组数补练肱三头即可',
    trainingBlocks: {
      muscleGroupId: 'chest-training',
      muscleGroupName: '胸部训练',
      exerciseCategories: [
        {
          categoryId: 'middle-chest',
          categoryName: '中胸（占胸大肌大部肌纤维）',
          instruction: '选2-3个动作 总共12组',
          exercises: [
            {
              exerciseId: 'bench-press',
              exerciseName: '杠铃/哑铃/史密斯卧推（水平推）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩屈'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'machine-chest-press',
              exerciseName: '器械推胸（水平推）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩屈'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'pec-fly',
              exerciseName: '蝴蝶机夹胸',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收'
                }
              ]
            },
            {
              exerciseId: 'cable-fly',
              exerciseName: '龙门架夹胸（水平夹）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'lower-chest',
          categoryName: '下胸',
          instruction: '新手偶尔加做 选1个动作 总共4组',
          exercises: [
            {
              exerciseId: 'cable-low-fly',
              exerciseName: '龙门架夹胸（完全下夹）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩内收'
                }
              ]
            },
            {
              exerciseId: 'cable-decline-fly',
              exerciseName: '龙门架夹胸（下斜夹）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩内收'
                }
              ]
            },
            {
              exerciseId: 'machine-decline-press',
              exerciseName: '器械推胸（下斜推）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩内收'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'decline-bench-press',
              exerciseName: '杠铃/哑铃/史密斯卧推（下斜推）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩内收'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'dips',
              exerciseName: '双杠臂屈伸（上身前趴30-60°）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩内收'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'upper-chest',
          categoryName: '上胸',
          instruction: '新手偶尔加做 选1个动作 总共4组',
          exercises: [
            {
              exerciseId: 'incline-bench-press',
              exerciseName: '杠铃/哑铃/史密斯卧推（上斜推）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩屈'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'machine-incline-press',
              exerciseName: '器械推胸（上斜推）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平内收mix肩屈'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            }
          ]
        }
      ]
    },
    additionalBlocks: {
      muscleGroupId: 'tricep-training',
      muscleGroupName: '肱三头肌训练',
      exerciseCategories: [
        {
          categoryId: 'tricep-exercises',
          categoryName: '肱三头肌动作',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'cable-pushdown',
              exerciseName: '龙门架直杆下压',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'cable-overhead-extension',
              exerciseName: '龙门架绳索臂屈伸',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'dumbbell-overhead-extension',
              exerciseName: '哑铃颈后臂屈伸',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'barbell-overhead-extension',
              exerciseName: '杠铃仰卧臂屈伸',
              jointMovements: [
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'close-grip-bench-press',
              exerciseName: '杠铃/哑铃/史密斯窄距卧推',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩屈'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    dayId: 'day-3',
    dayName: 'Day3：腿臀+腹',
    description: '股四头肌、腘绳肌、臀大肌是三个大肌群，难以承受一次都练，可以按以下办法来循环：男第一次：股四+兼练动作；男第二次：腘绳肌+兼练动作；女第一次：臀大肌+兼练动作；女第二次：腘绳肌+兼练动作',
    trainingBlocks: {
      muscleGroupId: 'leg-training',
      muscleGroupName: '腿部训练',
      exerciseCategories: [
        {
          categoryId: 'quadriceps',
          categoryName: '股四头肌',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'barbell-squat',
              exerciseName: '杠铃深蹲',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            },
            {
              exerciseId: 'leg-extension',
              exerciseName: '器械腿屈伸',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'hamstrings',
          categoryName: '腘绳肌',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'romanian-deadlift',
              exerciseName: '罗马尼亚/传统硬拉',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            },
            {
              exerciseId: 'leg-curl',
              exerciseName: '器械腿弯举',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝屈'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'glutes',
          categoryName: '臀大肌',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'hip-thrust',
              exerciseName: '器械臀冲',
              jointMovements: [
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            },
            {
              exerciseId: 'barbell-hip-thrust',
              exerciseName: '杠铃臀冲',
              jointMovements: [
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'combined-exercises',
          categoryName: '兼练动作',
          instruction: '选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'hack-squat',
              exerciseName: '哈克机',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            },
            {
              exerciseId: 'leg-press',
              exerciseName: '倒蹬机',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            },
            {
              exerciseId: 'lunge',
              exerciseName: '箭步蹲',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            },
            {
              exerciseId: 'smith-squat',
              exerciseName: '史密斯深蹲',
              jointMovements: [
                {
                  jointId: 'knee-joint',
                  jointName: '膝关节',
                  movementDescription: '膝伸'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋伸'
                }
              ]
            }
          ]
        }
      ]
    },
    additionalBlocks: {
      muscleGroupId: 'abs-training',
      muscleGroupName: '腹部训练',
      exerciseCategories: [
        {
          categoryId: 'abs-exercises',
          categoryName: '腹',
          instruction: '男性要练 女性偶尔练下 选1-2个动作 总共6-8组',
          exercises: [
            {
              exerciseId: 'crunches',
              exerciseName: '平板卷腹',
              jointMovements: [
                {
                  jointId: 'spine-joint',
                  jointName: '脊柱',
                  movementDescription: '躯干屈曲（借用膝关节格子）'
                }
              ]
            },
            {
              exerciseId: 'hanging-leg-raise',
              exerciseName: '悬垂举腿',
              jointMovements: [
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '骨盆后倾（借用膝关节格子）'
                },
                {
                  jointId: 'hip-joint',
                  jointName: '髋关节',
                  movementDescription: '髋屈'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    dayId: 'day-4',
    dayName: 'Day4：肩',
    description: '四分化训练中的肩部专门训练日',
    trainingBlocks: {
      muscleGroupId: 'shoulder-training',
      muscleGroupName: '肩部训练',
      exerciseCategories: [
        {
          categoryId: 'front-deltoid',
          categoryName: '肩前束',
          instruction: '选2个动作 总共8-10组',
          exercises: [
            {
              exerciseId: 'overhead-press',
              exerciseName: '器械/哑铃/史密斯推举',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩屈mix肩外展'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘伸'
                }
              ]
            },
            {
              exerciseId: 'front-raise',
              exerciseName: '杠铃/哑铃片前平举',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩屈'
                }
              ]
            }
          ]
        },
        {
          categoryId: 'middle-deltoid',
          categoryName: '肩中束',
          instruction: '选1-2个动作 总共8-10组',
          exercises: [
            {
              exerciseId: 'lateral-raise',
              exerciseName: '哑铃/龙门架侧平举',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩外展'
                }
              ]
            },
            {
              exerciseId: 'upright-row',
              exerciseName: '杠铃提拉',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩外展'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            }
          ]
        }
      ]
    },
    additionalBlocks: {
      muscleGroupId: 'rear-deltoid-training',
      muscleGroupName: '肩后束训练',
      exerciseCategories: [
        {
          categoryId: 'rear-deltoid-exercises',
          categoryName: '肩后束',
          instruction: '选1-2个动作 总共8-10组',
          exercises: [
            {
              exerciseId: 'rear-delt-fly',
              exerciseName: '哑铃俯身飞鸟',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平外展'
                }
              ]
            },
            {
              exerciseId: 'reverse-fly-machine',
              exerciseName: '蝴蝶机反向飞鸟',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平外展'
                }
              ]
            },
            {
              exerciseId: 'cable-reverse-fly',
              exerciseName: '龙门架反向飞鸟',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平外展'
                }
              ]
            },
            {
              exerciseId: 'cable-row-wide',
              exerciseName: '坐姿器械/绳索划船（水平开肘）',
              jointMovements: [
                {
                  jointId: 'shoulder-joint',
                  jointName: '肩关节',
                  movementDescription: '肩水平外展'
                },
                {
                  jointId: 'elbow-joint',
                  jointName: '肘关节',
                  movementDescription: '肘屈'
                }
              ]
            }
          ]
        }
      ]
    }
  }
];