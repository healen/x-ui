## Panel 面板

### 使用指南
``` javascript
import { Panel } from 'healen-x-ui';

Vue.use(Panel);
```

### 代码演示

#### 基础用法
面板只是一个容器，里面可以放入自定义的内容

```html
<x-panel title="标题" desc="描述信息" status="状态">
  <div>内容</div>
</x-panel>
```

#### 高级用法
使用`slot`自定义内容

```html
<x-panel title="标题" desc="描述信息" status="状态">
  <div>内容</div>
  <div slot="footer">
    <x-button size="small">按钮</x-button>
    <x-button size="small" type="danger">按钮</x-button>
  </div>
</x-panel>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 标题 | `String` | - | - |
| desc | 描述 | `String` | - | - |
| status | 状态 | `String` | - | - |
| icon | 标题左侧图标，可选值见 Icon 组件 | `String` | - | 1.3.8 |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义内容 |
| header | 自定义 header |
| footer | 自定义 footer |
