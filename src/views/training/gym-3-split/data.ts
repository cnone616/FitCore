// 健身计划概览信息
export const planOverview = {
  title: '健身房三分化训练计划',
  description: '一个完整的三分化训练周期，涵盖全身主要肌群'
};

export const gym3SplitPlans = [
    {
        dayId: 'day-1',
        dayName: 'Day1：背+肩后束+肱二头',
        description: '练背会有肩伸（肩后束）、肩水平外展（肩后束）、肘屈（肱二头肌），所以练背后接着继续用少量组数补练肩后束、肱二头即可',
        trainingBlocks: {
            muscleGroupId: 'back-training',
            muscleGroupName: '背部训练',
            exerciseCategories: [{
                categoryId: 'pull-down',
                categoryName: '下拉',
                instruction: '选1-2个动作 总共6-8组',
                exercises: [{
                    exerciseId: 'pull-ups',
                    exerciseName: '引体向上',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '[宽握]肩内收'
                    },
                    {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }, {
                    exerciseId: 'lat-pulldown',
                    exerciseName: '高位下拉',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '[中握]肩内收mix肩伸'
                    },
                    {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }, {
                    exerciseId: 'machine-pulldown',
                    exerciseName: '器械下拉',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '[窄握]肩伸'
                    },
                    {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }]
            }, { 
                categoryId: 'rowing',
                categoryName: '划船',
                instruction: '选1-2个动作 总共6-8组',
                exercises: [{
                    exerciseId: 'rowing-exercise',
                    exerciseName: '划船动作',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩胛骨后缩'
                    },
                    {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }]
            }, {
                categoryId: 'rear-deltoid',
                categoryName: '肩后束',
                instruction: '选1-2个动作 总共6-8组',
                exercises: [{
                    exerciseId: 'dumbbell-rear-fly',
                    exerciseName: '哑铃俯身飞鸟',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平外展'
                    }]
                }, {
                    exerciseId: 'reverse-peck-deck',
                    exerciseName: '蝴蝶机反向飞鸟',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平外展'
                    }]
                }, {
                    exerciseId: 'cable-reverse-fly',
                    exerciseName: '龙门架反向飞鸟',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平外展'
                    }]
                }, {
                    exerciseId: 'seated-row-horizontal-elbow',
                    exerciseName: '坐姿器械/绳索划船（水平开肘）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平外展'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }]
            }, {
                categoryId: 'bicep-training',
                categoryName: '肱二头',
                instruction: '选1-2个动作 总共6-8组',
                exercises: [{
                    exerciseId: 'dumbbell-curl',
                    exerciseName: '哑铃弯举',
                    jointMovements: [{
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }, {
                    exerciseId: 'barbell-curl',
                    exerciseName: '杠铃弯举',
                    jointMovements: [{
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }, {
                    exerciseId: 'concentration-curl',
                    exerciseName: '集中弯举',
                    jointMovements: [{
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }, {
                    exerciseId: 'machine-curl',
                    exerciseName: '器械弯举',
                    jointMovements: [{
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }, {
                    exerciseId: 'preacher-curl',
                    exerciseName: '牧师椅弯举',
                    jointMovements: [{
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }]
            }]
        }
    }, {
        dayId: 'day-2',
        dayName: 'Day2：胸+肩前中束+肱三头',
        description: '为什么它们在一天练？因为练胸会有肩屈（肩前束）、肩水平内收（肩前束）、肘伸（肱三头肌），所以练胸后接着继续用少量组数补练肩前束、肱三头即可',
        trainingBlocks: {
            muscleGroupId: 'chest-training',
            muscleGroupName: '胸部训练',
            exerciseCategories: [{
                categoryId: 'middle-chest',
                categoryName: '中胸（占胸大肌大部肌纤维）',
                instruction: '选2-3个动作 总共10组',
                exercises: [{
                    exerciseId: 'horizontal-press',
                    exerciseName: '杠铃/哑铃/史密斯卧推（水平推）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收mix肩屈'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'machine-chest-press',
                    exerciseName: '器械推胸（水平推）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收mix肩屈'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'pec-deck',
                    exerciseName: '蝴蝶机夹胸',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收'
                    }]
                }, {
                    exerciseId: 'cable-chest-fly',
                    exerciseName: '龙门架夹胸（水平夹）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收'
                    }]
                }]
            }, {
                categoryId: 'lower-chest',
                categoryName: '下胸',
                instruction: '新手偶尔加做 选1个动作 总共4组',
                exercises: [{
                    exerciseId: 'cable-lower-fly',
                    exerciseName: '龙门架夹胸（完全下夹）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩内收'
                    }]
                }, {
                    exerciseId: 'cable-decline-fly',
                    exerciseName: '龙门架夹胸（下斜夹）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收mix肩内收'
                    }]
                }, {
                    exerciseId: 'machine-decline-press',
                    exerciseName: '器械推胸（下斜推）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收mix肩内收'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'decline-press',
                    exerciseName: '杠铃/哑铃/史密斯卧推（下斜推）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收mix肩内收'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'dips-chest-focused',
                    exerciseName: '双杠臂屈伸（上身前趴30-60°）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收mix肩内收'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }]
            }, {
                categoryId: 'upper-chest',
                categoryName: '上胸',
                instruction: '新手偶尔加做 选1个动作 总共4组',
                exercises: [{
                    exerciseId: 'incline-press',
                    exerciseName: '杠铃/哑铃/史密斯卧推（上斜推）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收mix肩屈'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'machine-incline-press',
                    exerciseName: '器械推胸（上斜推）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收mix肩屈'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'cable-incline-fly',
                    exerciseName: '龙门架夹胸（上斜夹）',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩水平内收mix肩屈'
                    }]
                }]
            }]
        },
        additionalBlocks: {
            muscleGroupId: 'shoulder-tricep-training',
            muscleGroupName: '肩部+肱三头',
            exerciseCategories: [{
                categoryId: 'anterior-deltoid',
                categoryName: '肩前束',
                instruction: '选1个动作 总共5组',
                exercises: [{
                    exerciseId: 'overhead-press',
                    exerciseName: '器械/哑铃/史密斯推举',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩屈mix肩外展'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'front-raise',
                    exerciseName: '杠铃/哑铃片前平举',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩屈'
                    }]
                }]
            }, {
                categoryId: 'medial-deltoid',
                categoryName: '肩中束',
                instruction: '选1个动作 总共5组',
                exercises: [{
                    exerciseId: 'lateral-raise',
                    exerciseName: '哑铃/龙门架侧平举',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩外展'
                    }]
                }, {
                    exerciseId: 'upright-row',
                    exerciseName: '杠铃提拉',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩外展'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘屈'
                    }]
                }]
            }, {
                categoryId: 'tricep-training',
                categoryName: '肱三头',
                instruction: '选1个动作 总共5组',
                exercises: [{
                    exerciseId: 'cable-pushdown',
                    exerciseName: '龙门架直杆下压',
                    jointMovements: [{
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'rope-overhead-extension',
                    exerciseName: '龙门架绳索臂屈伸',
                    jointMovements: [{
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'dumbbell-overhead-extension',
                    exerciseName: '哑铃颈后臂屈伸',
                    jointMovements: [{
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'barbell-overhead-extension',
                    exerciseName: '杠铃仰卧臂屈伸',
                    jointMovements: [{
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }, {
                    exerciseId: 'close-grip-bench-press',
                    exerciseName: '杠铃/哑铃/史密斯窄距卧推',
                    jointMovements: [{
                        jointId: 'shoulder-joint',
                        jointName: '肩关节',
                        movementDescription: '肩屈'
                    }, {
                        jointId: 'elbow-joint',
                        jointName: '肘关节',
                        movementDescription: '肘伸'
                    }]
                }]
            }]
        }
    }, {
        dayId: 'day-3',
        dayName: 'Day3：腿臀+腹',
        description: '腿臀日是三分化训练的重要组成部分，主要训练股四头肌、腘绳肌和臀大肌，同时可以根据需要训练腹部',
        trainingBlocks: {
            muscleGroupId: 'leg-glute-training',
            muscleGroupName: '腿臀训练',
            description: '股四头肌、腘绳肌、臀大肌是三个大肌群，难以承受一次都练，可以按以下办法来循环：\n男第一次：股四+兼练动作\n男第二次：腘绳肌+兼练动作\n女第一次：臀大肌+兼练动作\n女第二次：腘绳肌+兼练动作',    
            exerciseCategories: [{
                categoryId: 'quadriceps',
                categoryName: '股四头肌',
                instruction: '选1-2个动作 总共6-8组',
                exercises: [{
                    exerciseId: 'barbell-squat',
                    exerciseName: '杠铃深蹲',
                    jointMovements: [{
                        jointId: 'knee-joint',
                        jointName: '膝关节',
                        movementDescription: '膝伸'
                    }, {
                        jointId: 'hip-joint',
                        jointName: '髋关节',
                        movementDescription: '髋伸'
                    }]
                }, {
                    exerciseId: 'leg-extension',
                    exerciseName: '器械腿屈伸',
                    jointMovements: [{
                        jointId: 'knee-joint',
                        jointName: '膝关节',
                        movementDescription: '膝伸'
                    }]
                }]
            }, {
                categoryId: 'hamstrings',
                categoryName: '腘绳肌',
                instruction: '选1-2个动作 总共6-8组',
                exercises: [{
                    exerciseId: 'romanian-deadlift',
                    exerciseName: '罗马尼亚/传统硬拉',
                    jointMovements: [{
                        jointId: 'knee-joint',
                        jointName: '膝关节',
                        movementDescription: '膝伸'
                    }, {
                        jointId: 'hip-joint',
                        jointName: '髋关节',
                        movementDescription: '髋伸'
                    }]
                }, {
                    exerciseId: 'leg-curl',
                    exerciseName: '器械腿弯举',
                    jointMovements: [{
                        jointId: 'knee-joint',
                        jointName: '膝关节',
                        movementDescription: '膝屈'
                    }]
                }]
            }, {
                categoryId: 'glutes',
                categoryName: '臀大肌',
                instruction: '选1-2个动作 总共6-8组',
                exercises: [{
                    exerciseId: 'machine-hip-thrust',
                    exerciseName: '器械臀冲',
                    jointMovements: [{
                        jointId: 'hip-joint',
                        jointName: '髋关节',
                        movementDescription: '髋伸'
                    }]
                }, {
                    exerciseId: 'barbell-hip-thrust',
                    exerciseName: '杠铃臀冲',
                    jointMovements: [{
                        jointId: 'hip-joint',
                        jointName: '髋关节',
                        movementDescription: '髋伸'
                    }]
                }]
            }, {
                categoryId: 'compound-movements',
                categoryName: '兼练动作',
                instruction: '选1-2个动作 总共6-8组',
                exercises: [{
                    exerciseId: 'hack-squat',
                    exerciseName: '哈克机',
                    jointMovements: [{
                        jointId: 'knee-joint',
                        jointName: '膝关节',
                        movementDescription: '膝伸'
                    }, {
                        jointId: 'hip-joint',
                        jointName: '髋关节',
                        movementDescription: '髋伸'
                    }]
                }, {
                    exerciseId: 'leg-press',
                    exerciseName: '倒蹬机',
                    jointMovements: [{
                        jointId: 'knee-joint',
                        jointName: '膝关节',
                        movementDescription: '膝伸'
                    }, {
                        jointId: 'hip-joint',
                        jointName: '髋关节',
                        movementDescription: '髋伸'
                    }]
                }, {
                    exerciseId: 'lunges',
                    exerciseName: '箭步蹲',
                    jointMovements: [{
                        jointId: 'knee-joint',
                        jointName: '膝关节',
                        movementDescription: '膝伸'
                    }, {
                        jointId: 'hip-joint',
                        jointName: '髋关节',
                        movementDescription: '髋伸'
                    }]
                }, {
                    exerciseId: 'smith-squat',
                    exerciseName: '史密斯深蹲',
                    jointMovements: [{
                        jointId: 'knee-joint',
                        jointName: '膝关节',
                        movementDescription: '膝伸'
                    }, {
                        jointId: 'hip-joint',
                        jointName: '髋关节',
                        movementDescription: '髋伸'
                    }]
                }]
            }]
        },
        additionalBlocks: {
            muscleGroupId: 'abdominal-training',
            muscleGroupName: '腹部训练',
            exerciseCategories: [{
                categoryId: 'core-training',
                categoryName: '腹',
                instruction: '男性要练 女性偶尔练下 选1-2个动作 总共6-8组',
                exercises: [{
                    exerciseId: 'crunches',
                    exerciseName: '平板卷腹',
                    jointMovements: [{
                        jointId: 'spine-joint',
                        jointName: '躯干屈曲',
                        movementDescription: '借用膝关节格子'
                    }]
                }, {
                    exerciseId: 'hanging-leg-raise',
                    exerciseName: '悬垂举腿',
                    jointMovements: [{
                        jointId: 'pelvis-joint',
                        jointName: '骨盆后倾',
                        movementDescription: '借用膝关节格子'
                    }, {
                        jointId: 'hip-joint',
                        jointName: '髋关节',
                        movementDescription: '髋屈'
                    }]
                }]
            }]
        }
    }
];