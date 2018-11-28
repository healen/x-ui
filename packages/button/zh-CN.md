## Button 按钮

### 使用指南
``` javascript
import { Button } from 'healen-x-ui';

Vue.use(Button);
```

### 代码演示

#### 按钮类型
支持`default`、`primary`、`warning`、`danger`四种类型，默认为`default`

```html
<x-button type="default">默认按钮</x-button>
<x-button type="primary">主要按钮</x-button>
<x-button type="warning">警告按钮</x-button>
<x-button type="danger">危险按钮</x-button>
```

#### 朴素按钮

```html
<x-button plain type="primary">朴素按钮</x-button>
<x-button plain type="danger">朴素按钮</x-button>
```

#### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<x-button disabled type="primary">禁用状态</x-button>
<x-button disabled type="danger">禁用状态</x-button>
```

#### 加载状态

```html 
<x-button loading type="primary" />
<x-button loading type="danger" />
```

#### 按钮形状

```html 
<x-button square type="primary">方形按钮</x-button>
<x-button round type="danger">圆形按钮</x-button>
```

#### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<x-button size="large">大号按钮</x-button>
<x-button size="normal">普通按钮</x-button>
<x-button size="small">小型按钮</x-button>
<x-button size="mini">迷你按钮</x-button>
```


### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为 `primary` `warning` `danger` | `String` | `default` | - |
| size | 尺寸，可选值为 `large` `small` `mini` | `String` | `normal` | - |
| text | 文字 | `String` | - | - |
| tag | HTML 标签 | `String` | `button` | - |
| native-type | 原生 type 属性 | `String` | - | - |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - |
| loading | 是否显示为加载状态 | `Boolean` | `false` | - |
| block | 是否为块级元素 | `Boolean` | `false` | - |
| plain | 是否为朴素按钮 | `Boolean` | `false` | 1.1.13 |
| square | 是否为方形按钮 | `Boolean` | `false` | 1.2.0 |
| round | 是否为圆形按钮 | `Boolean` | `false` | 1.3.4 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | - |
