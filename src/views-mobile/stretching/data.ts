export interface StretchImage {
  id: string;
  name: string; // 动作/肌群名称
  src: string;  // 相对路径（建议放入 src/assets/stretching/...）
}

export interface StretchGroup {
  title: string;        // 分组标题：上身拉伸/下身拉伸
  images: StretchImage[];
}

// 约定：请将上身图片放入 src/assets/stretching/upper/
// 例如：latissimus_dorsi.jpg、pec_anterior_deltoid.jpg、triceps_overhead.jpg ...
export const upperBodyStretches: StretchGroup = {
  title: '上身拉伸',
  images: [
    { id: 'latissimus_dorsi', name: '背阔肌', src: '/src/assets/stretching/upper/latissimus_dorsi.png' },
    { id: 'pec_anterior_deltoid', name: '胸大肌·肩前束', src: '/src/assets/stretching/upper/pec_anterior_deltoid.png' },
    { id: 'triceps_overhead', name: '肱三头肌·头顶拉伸', src: '/src/assets/stretching/upper/triceps_overhead.png' },
    { id: 'biceps_wall', name: '肱二头肌·侧身扶墙', src: '/src/assets/stretching/upper/biceps_wall.png' },
    { id: 'mid_low_traps', name: '中下斜方肌', src: '/src/assets/stretching/upper/mid_low_traps.png' },
    { id: 'middle_deltoid', name: '肩中束', src: '/src/assets/stretching/upper/middle_deltoid.png' },
    { id: 'rectus_abdominis', name: '腹直肌', src: '/src/assets/stretching/upper/rectus_abdominis.png' },
    { id: 'posterior_deltoid', name: '肩后束', src: '/src/assets/stretching/upper/posterior_deltoid.png' },
    { id: 'erector_spinae', name: '竖脊肌', src: '/src/assets/stretching/upper/erector_spinae.png' },
    { id: 'upper_traps', name: '上斜方肌', src: '/src/assets/stretching/upper/upper_traps.png' },
  ],
};

// 约定：请将下身图片放入 src/assets/stretching/lower/
// 这里先留空占位，后续可补齐对应图片文件与清单
export const lowerBodyStretches: StretchGroup = {
  title: '下身拉伸',
  images: [
    { id: 'hamstrings', name: '腘绳肌', src: '/src/assets/stretching/lower/hamstrings.png' },
    { id: 'quadriceps', name: '股四头肌', src: '/src/assets/stretching/lower/quadriceps.png' },
    { id: 'glute_stretch', name: '臀部肌群', src: '/src/assets/stretching/lower/glute_stretch.png' },
    { id: 'calves', name: '腓肠肌/小腿', src: '/src/assets/stretching/lower/calves.png' },
  ],
};


