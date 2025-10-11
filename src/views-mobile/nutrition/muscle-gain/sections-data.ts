export interface SectionItem {
  title: string;
  content: string;
  isImportant?: boolean;
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  items: SectionItem[];
}

export const muscleGainSections: Section[] = [
  {
    id: 'training_plan',
    title: '力训方案',
    icon: '💪',
    items: [
      {
        title: '频率',
        content: '增肌必须有稳定的力训，保持练3-5次/周，力训长期低于此频率就几乎不会有进步。',
        isImportant: true
      },
      {
        title: '分化',
        content: '完全新手：用二分化或三分化；有基础者：用三分化或四分化。',
        isImportant: false
      },
      {
        title: '居家健身',
        content: '新手尽量从健身房起步健身，非必要不要居家力训，居家力训对新手反而更难上手，如果必须居家健身，可以参考<a href="/training/home-3-split">《训练计划-居家健身》</a>进行训练。',
        isImportant: false
      },
      {
        title: '训练计划',
        content: '健身房三分化/健身房四分化/居家三分化训练计划，参考<a href="/training">《训练计划》</a>进行安排。',
        isImportant: true
      }
    ]
  },
  {
    id: 'faq',
    title: '常见问答',
    icon: '❓',
    items: [
      {
        title: '增肌速度',
        content: '每月体重增加，男性一般不超过1kg，女性一般不超过0.5g，肌肉合成速度十分缓慢，即便这种控制着的体重增加，也有相当部分是脂肪',
        isImportant: true
      },
      {
        title: '何时转减脂',
        content: '如果介意发胖，男性BMI23-24转减脂，女性BMI21-22转减脂；如果不介意发胖，男性BMI24-25转减脂，女性BMI22-23转减脂；但一般不建议增到更高体重了，除非是个人有强烈意愿',
        isImportant: true
      },
      {
        title: '调整配额',
        content: '体重增加10kg，基础代谢才会增加约150大卡，每轮增肌一般增重也就几公斤，对基础代谢的影响很小，所以增肌饮食配额一般就不用随体重增加而调整，但体重一个月完全不长则按<a href="/nutrition/faq/muscle">《增肌-问答汇总》</a>的第1问指导加饮食热量',
        isImportant: true
      }
    ]
  }
];
