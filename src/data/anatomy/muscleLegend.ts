export type Gender = 'male' | 'female';

export type LegendCenter =
  | { x: number; y: number }
  | { male: { x: number; y: number }; female: { x: number; y: number } };

export interface LegendItem {
  muscle: string;
  name: string;
  center: LegendCenter;
  legend: { x: number; y: number };
  textSide: 'left' | 'right';
}

export const leftLegendData: LegendItem[] = [
  { muscle: 'neck', name: '颈部肌群', center: { male: { x: 263, y: 184 }, female: { x: 260, y: 190 } }, legend: { x: 60, y: 80 }, textSide: 'left' },
  { muscle: 'traps', name: '斜方肌', center: { male: { x: 210, y: 196 }, female: { x: 210, y: 195 } }, legend: { x: 60, y: 150 }, textSide: 'left' },
  { muscle: 'chest', name: '胸大肌', center: { male: { x: 220, y: 250 }, female: { x: 220, y: 250 } }, legend: { x: 60, y: 220 }, textSide: 'left' },
  { muscle: 'obliques', name: '腹斜肌', center: { male: { x: 210, y: 342 }, female: { x: 210, y: 342 } }, legend: { x: 60, y: 290 }, textSide: 'left' },
  { muscle: 'forearms', name: '前臂肌群', center: { male: { x: 110, y: 400 }, female: { x: 123, y: 400 } }, legend: { x: 60, y: 360 }, textSide: 'left' },
  { muscle: 'abductors', name: '大腿外展肌', center: { male: { x: 176, y: 515 }, female: { x: 176, y: 515 } }, legend: { x: 60, y: 570 }, textSide: 'left' },
  { muscle: 'quads', name: '股四头肌', center: { male: { x: 202, y: 590 }, female: { x: 202, y: 590 } }, legend: { x: 60, y: 710 }, textSide: 'left' },
  { muscle: 'sideDelts', name: '三角肌中束', center: { male: { x: 360, y: 220 }, female: { x: 356, y: 214 } }, legend: { x: 450, y: 80 }, textSide: 'right' },
  { muscle: 'frontDelts', name: '三角肌前束', center: { male: { x: 358, y: 236 }, female: { x: 358, y: 236 } }, legend: { x: 450, y: 150 }, textSide: 'right' },
  { muscle: 'biceps', name: '肱二头肌', center: { male: { x: 375, y: 301 }, female: { x: 362, y: 301 } }, legend: { x: 450, y: 220 }, textSide: 'right' },
  { muscle: 'triceps', name: '肱三头肌', center: { male: { x: 405, y: 310 }, female: { x: 383, y: 310 } }, legend: { x: 450, y: 290 }, textSide: 'right' },
  { muscle: 'lats', name: '背阔肌', center: { male: { x: 348, y: 308 }, female: { x: 330, y: 308 } }, legend: { x: 450, y: 360 }, textSide: 'right' },
  { muscle: 'abs', name: '腹直肌', center: { male: { x: 283, y: 370 }, female: { x: 283, y: 370 } }, legend: { x: 450, y: 430 }, textSide: 'right' },
  { muscle: 'adductors', name: '大腿内收肌', center: { male: { x: 292, y: 520 }, female: { x: 280, y: 520 } }, legend: { x: 450, y: 570 }, textSide: 'right' },
  { muscle: 'calves', name: '小腿肌群', center: { male: { x: 299, y: 772 }, female: { x: 284, y: 772 } }, legend: { x: 450, y: 710 }, textSide: 'right' }
];

export const rightLegendData: LegendItem[] = [
  { muscle: 'rearDelts', name: '三角肌后束', center: { male: { x: 653, y: 216 }, female: { x: 672, y: 216 } }, legend: { x: 580, y: 80 }, textSide: 'left' },
  { muscle: 'rotatorCuffs', name: '旋转肌袖', center: { male: { x: 700, y: 250 }, female: { x: 707, y: 250 } }, legend: { x: 580, y: 150 }, textSide: 'left' },
  { muscle: 'lowerBack', name: '竖脊肌', center: { male: { x: 747, y: 400 }, female: { x: 747, y: 400 } }, legend: { x: 580, y: 290 }, textSide: 'left' },
  { muscle: 'glutes', name: '臀大肌', center: { male: { x: 712, y: 469 }, female: { x: 712, y: 469 } }, legend: { x: 580, y: 390 }, textSide: 'left' },
  { muscle: 'adductors', name: '大腿内收肌', center: { male: { x: 745, y: 575 }, female: { x: 745, y: 560 } }, legend: { x: 580, y: 630 }, textSide: 'left' },
  { muscle: 'hamstrings', name: '腘绳肌', center: { male: { x: 696, y: 598 }, female: { x: 716, y: 598 } }, legend: { x: 580, y: 730 }, textSide: 'left' },
  { muscle: 'traps', name: '斜方肌', center: { male: { x: 795, y: 200 }, female: { x: 795, y: 200 } }, legend: { x: 970, y: 80 }, textSide: 'right' },
  { muscle: 'lats', name: '背阔肌', center: { male: { x: 810, y: 320 }, female: { x: 810, y: 320 } }, legend: { x: 970, y: 150 }, textSide: 'right' },
  { muscle: 'triceps', name: '肱三头肌', center: { male: { x: 880, y: 300 }, female: { x: 867, y: 300 } }, legend: { x: 970, y: 290 }, textSide: 'right' },
  { muscle: 'forearms', name: '前臂肌群', center: { male: { x: 918, y: 400 }, female: { x: 902, y: 400 } }, legend: { x: 970, y: 390 }, textSide: 'right' },
  { muscle: 'abductors', name: '大腿外展肌', center: { male: { x: 849, y: 566 }, female: { x: 839, y: 566 } }, legend: { x: 950, y: 630 }, textSide: 'right' },
  { muscle: 'calves', name: '小腿肌群', center: { male: { x: 820, y: 770 }, female: { x: 807, y: 770 } }, legend: { x: 970, y: 770 }, textSide: 'right' }
];

export const getLegendCenter = (item: LegendItem, gender: Gender) => {
  if ('male' in item.center) {
    return item.center[gender];
  }
  return item.center;
};
