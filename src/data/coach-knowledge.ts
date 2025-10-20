import type { CertificateInfo, KnowledgeModule } from '@/types/coach-knowledge';

export const knowledgeModules: KnowledgeModule[] = [
  {
    id: 'training-fundamentals',
    name: '训练理论基础',
    description: '掌握训练原则、负荷管理与周期化设计等核心理论，为制定计划奠定基础。',
    category: 'training',
    topics: [
      {
        id: 'training-principles',
        title: '训练原则与适应',
        summary: '了解渐进超负荷、特异性、可逆性与个体化等训练原则。'
      },
      {
        id: 'periodization-intro',
        title: '周期化训练概念',
        summary: '认识宏周期、中周期、微周期在训练计划中的作用。'
      },
      {
        id: 'load-management',
        title: '负荷与恢复管理',
        summary: '掌握训练量、强度、频率的平衡与恢复策略。'
      }
    ]
  },
  {
    id: 'nutrition-science',
    name: '营养学核心知识',
    description: '理解营养素需求、身体成分目标与膳食周期化策略。',
    category: 'nutrition',
    prerequisites: ['training-fundamentals'],
    topics: [
      {
        id: 'macronutrients',
        title: '三大宏量营养素',
        summary: '学习蛋白质、碳水化合物、脂肪的功能与需求计算。'
      },
      {
        id: 'energy-balance',
        title: '能量平衡与代谢',
        summary: '掌握基础代谢、总能量消耗（TDEE）与非运动产热（NEAT）的估算与应用。'
      },
      {
        id: 'nutrition-periodization',
        title: '营养周期化策略',
        summary: '了解减脂、增肌、比赛期等不同阶段的营养调整。'
      }
    ]
  },
  {
    id: 'emergency-response',
    name: '应急处理与安全',
    description: '具备运动场景下的紧急处理能力，保障客户训练安全。',
    category: 'emergency',
    topics: [
      {
        id: 'first-aid-basics',
        title: '基础急救流程',
        summary: '掌握心肺复苏、止血与常见运动损伤的初步处理。'
      },
      {
        id: 'risk-assessment',
        title: '风险评估与预判',
        summary: '学会识别高风险客户与训练情境，制定预防策略。'
      }
    ]
  },
  {
    id: 'recovery-mobility',
    name: '肌肉松懈与恢复',
    description: '掌握筋膜放松、拉伸与恢复工具，提升运动表现并降低受伤率。',
    category: 'recovery',
    prerequisites: ['training-fundamentals'],
    topics: [
      {
        id: 'myofascial-release',
        title: '筋膜放松技巧',
        summary: '了解泡沫轴、球类工具的使用原理与操作要点。'
      },
      {
        id: 'stretching-protocols',
        title: '拉伸方案设计',
        summary: '区分动态、静态、PNF 等拉伸方式及适用场景。'
      },
      {
        id: 'recovery-monitoring',
        title: '恢复状态评估',
        summary: '使用主观量表与客观指标评估恢复情况。'
      }
    ]
  },
  {
    id: 'program-design',
    name: '训练计划规划',
    description: '运用综合知识，制定个性化训练方案并持续调整优化。',
    category: 'planning',
    prerequisites: ['training-fundamentals', 'nutrition-science'],
    topics: [
      {
        id: 'client-assessment',
        title: '学员评估流程',
        summary: '建立评估档案，包含目标、体测、运动史与限制因素。'
      },
      {
        id: 'program-construction',
        title: '训练计划构建',
        summary: '根据目标制定训练内容、周期与监控指标。'
      },
      {
        id: 'progress-adjustment',
        title: '进度追踪与调整',
        summary: '依据反馈与数据调整训练与营养策略。'
      }
    ]
  }
];

export const certificates: CertificateInfo[] = [
  {
    id: 'nasem-cpt',
    name: 'NASM CPT 认证私人教练',
    organization: '美国国家运动医学学院 (NASM)',
    applicableRoles: ['入门教练', '工作室教练'],
    recommendedModules: ['training-fundamentals', 'nutrition-science'],
    validityPeriod: '2 年',
    level: 'basic',
    description: '专注人体运动科学与矫正训练，强调评估流程与个性化编程。'
  },
  {
    id: 'afpt-nutrition',
    name: 'AFPT 运动营养师认证',
    organization: '亚洲健身专业培训协会 (AFPT)',
    applicableRoles: ['营养顾问', '私人教练'],
    recommendedModules: ['nutrition-science', 'program-design'],
    validityPeriod: '3 年',
    level: 'advanced',
    description: '覆盖运动营养评估、增肌减脂策略与饮食周期化的高级课程。'
  },
  {
    id: 'er-first-aid',
    name: 'AHA 急救与 CPR 认证',
    organization: '美国心脏协会 (AHA)',
    applicableRoles: ['所有教练'],
    recommendedModules: ['emergency-response'],
    validityPeriod: '2 年',
    level: 'basic',
    description: '提供 CPR、AED 使用与常见紧急状况的权威操作规范。'
  },
  {
    id: 'fms-pro',
    name: 'FMS 功能性动作筛查专家',
    organization: 'Functional Movement Systems',
    applicableRoles: ['高级教练', '康复教练'],
    recommendedModules: ['training-fundamentals', 'recovery-mobility'],
    level: 'specialist',
    description: '教授功能性动作评估体系，帮助制定矫正与提升计划。'
  }
];
