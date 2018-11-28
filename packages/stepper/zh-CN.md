## Stepper 步进器

### 使用指南
``` javascript
import { Stepper } from 'healen-x-ui';

Vue.use(Stepper);
```

### 代码演示

#### 基础用法

```html
<x-stepper v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  }
}
```

#### 禁用状态
通过设置`disabled`属性来禁用 stepper

```html
<x-stepper v-model="value" disabled />
```

#### 高级用法

可以对组件设置`step`、`min`、`max`属性

```html
<x-stepper
  v-model="value"
  integer
  :min="5"
  :max="40"
  :step="2"
/>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前输入值 | `String | Number` | 最小值 | - |
| min | 最小值 | `String | Number` | `1` | - |
| max | 最大值 | `String | Number` | - | - |
| step | 步数 | `String | Number` | `1` | - |
| integer | 是否只允许输入整数 | `Boolean` | `false` | 1.1.1 |
| disabled | 是否禁用步进器 | `Boolean` | `false` | - |
| disable-input | 是否禁用输入框 | `Boolean` | `false` | - |

### Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
| blur | 输入框失焦时触发 | - |
