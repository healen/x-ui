## Radio 单选框

### 使用指南
``` javascript
import { RadioGroup, Radio } from 'x-ui';

Vue.use(RadioGroup);
Vue.use(Radio);
```

### 代码演示

#### 基础用法
通过`v-model`绑定值当前选中项的 name

```html
<x-radio-group v-model="radio">
  <x-radio name="1">单选框 1</x-radio>
  <x-radio name="2">单选框 2</x-radio>
</x-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

#### 禁用状态
通过`disabled`属性禁止选项切换，在`x-radio`上设置`disabled`可以禁用单个选项

```html
<x-radio-group v-model="radio" disabled>
  <x-radio name="1">单选框 1</x-radio>
  <x-radio name="2">单选框 2</x-radio>
</x-radio-group>
```

#### 与 Cell 组件一起使用
此时你需要再引入`Cell`和`CellGroup`组件。

```html
<x-radio-group v-model="radio">
  <x-cell-group>
    <x-cell title="单选框 1" clickable @click="radio = '1'">
      <x-radio name="1" />
    </x-cell>
    <x-cell title="单选框 2" clickable @click="radio = '2'">
      <x-radio name="2" />
    </x-cell>
  </x-cell-group>
</x-radio-group>
```

### Radio API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符 | 任意类型 | - | - |
| disabled | 是否为禁用状态 | `Boolean` | `false` | - |
| label-disabled | 是否禁用文本内容点击 | `Boolean` | `false` | 1.1.13 |
| label-position | 文本位置，可选值为 `left` | `String` | `right` | 1.1.13 |

### RadioGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中项的标识符 | 任意类型 | - | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |

### RadioGroup Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前选中项的 name |
