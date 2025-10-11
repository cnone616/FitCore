export interface OneRMPlan {
  author: string;
  formula: string;
  accuracy?: string;
}

export const plans: OneRMPlan[] = [
  { author: 'Adams', formula: '最大力量=配重/(1-0.02×力竭次数)', accuracy: '' },
  { author: 'Brown', formula: '最大力量=(力竭次数×0.0328+0.9849)×配重', accuracy: '对女性较准确' },
  { author: 'Brzycki', formula: '最大力量=配重/(1.0278-0.0278×力竭次数)', accuracy: '对女性较准确' },
  { author: 'Lander', formula: '最大力量=配重/(1.013-0.0267123×力竭次数)', accuracy: '对女性较准确' },
  { author: 'Lombardi', formula: '最大力量=力竭次数^0.1×配重', accuracy: '对男性较准确' },
  { author: 'Mayhew', formula: '最大力量=配重/(0.522+0.419×e^(-0.055×力竭次数))', accuracy: '' },
  { author: 'O’Connor', formula: '最大力量=0.025×(配重×力竭次数)+配重', accuracy: '' },
  { author: 'Wathen', formula: '最大力量=配重/(0.488+0.538×e^(-0.075×力竭次数))', accuracy: '' },
  { author: 'Welday', formula: '最大力量=(力竭次数×0.0333)×配重+配重', accuracy: '' },
];

/*
使用说明：适用于自由卧推/深蹲，输入你做组的配重，和该配重的力竭次数（动作全程接近完全标准），只输数字，不要输入单位，自动出结果。
资料来源：Accuracy of 1RM Prediction Equations Before and After Resistance Training in Three Different Lifts
*/
