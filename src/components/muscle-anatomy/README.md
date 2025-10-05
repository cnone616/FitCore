# 肌肉解剖组件

一个简化的肌肉解剖图组件，支持性别区分和图例显示控制。

## 功能特性

- ✅ 支持男性和女性肌肉解剖图
- ✅ 图例显示通过props控制
- ✅ 可自定义图例线条颜色和字体颜色
- ✅ 支持主要和次要肌肉高亮
- ✅ 性别区分的肌肉中心点坐标

## 使用方法

```vue
<template>
  <HumanMuscleAnatomy
    :gender="gender"
    :selected-primary-muscle-groups="selectedMuscles"
    :show-legend="showLegend"
    :legend-line-color="'#333333'"
    :legend-text-color="'#333333'"
    :primary-highlight-color="'#007bff'"
    :secondary-highlight-color="'#28a745'"
  />
</template>

<script setup>
import { ref } from 'vue'
import HumanMuscleAnatomy from './src/components/HumanMuscleAnatomy.vue'

const gender = ref('male')
const selectedMuscles = ref(['chest', 'biceps', 'triceps'])
const showLegend = ref(true)
</script>
```

## Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `gender` | `'male' \| 'female'` | `'male'` | 性别选择 |
| `selectedPrimaryMuscleGroups` | `MuscleGroup[]` | `[]` | 主要肌肉组 |
| `selectedSecondaryMuscleGroups` | `MuscleGroup[]` | `[]` | 次要肌肉组 |
| `legendLineColor` | `string` | `'#333333'` | 图例线条颜色 |
| `legendTextColor` | `string` | `'#333333'` | 图例文字颜色 |
| `showLegend` | `boolean` | `true` | 是否显示图例 |
| `primaryHighlightColor` | `string` | `'#007bff'` | 主要肌肉高亮颜色 |
| `secondaryHighlightColor` | `string` | `'#28a745'` | 次要肌肉高亮颜色 |
| `defaultMuscleColor` | `string` | `'#e0e0e0'` | 默认肌肉颜色 |
| `backgroundColor` | `string` | `'#f8f9fa'` | 背景颜色 |
| `primaryOpacity` | `number` | `0.8` | 主要肌肉透明度 |
| `secondaryOpacity` | `number` | `0.6` | 次要肌肉透明度 |

## 支持的肌肉组

- `chest` - 胸大肌
- `lats` - 背阔肌
- `traps` - 斜方肌
- `rotatorCuffs` - 旋转肌袖
- `lowerBack` - 竖脊肌
- `frontDelts` - 三角肌前束
- `sideDelts` - 三角肌中束
- `rearDelts` - 三角肌后束
- `triceps` - 肱三头肌
- `biceps` - 肱二头肌
- `forearms` - 前臂肌群
- `abs` - 腹直肌
- `obliques` - 腹斜肌
- `glutes` - 臀大肌
- `quads` - 股四头肌
- `hamstrings` - 腘绳肌
- `adductors` - 大腿内收肌
- `abductors` - 大腿外展肌
- `calves` - 小腿肌群
- `neck` - 颈部肌群

## 组件特性

- 图例显示控制：通过 `showLegend` prop 控制图例的显示/隐藏
- 性别区分：男性和女性使用不同的肌肉解剖图和中心点坐标
- 颜色自定义：可以自定义图例线条和文字的颜色
- 响应式：支持Vue 3 Composition API
