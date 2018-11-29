## Icon 图标

### 使用指南
``` javascript
import { Icon } from 'healen-x-ui';

Vue.use(Icon);
```

### 代码演示

#### 基础用法

设置`name`属性为对应的图标名称即可，所有可用的图标名称见右侧列表

```html
<x-icon name="success" />
```


#### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入你需要的 iconfont 对应的 ttf 文件和样式，之后就可以在 Icon 组件中直接使用

```css
@font-face {
  font-family: 'custom-iconfont';
  src: url('./iconfont.ttf') format('truetype');
}

.x-icon {
  font-family: 'vant-icon', 'custom-iconfont' !important;
}

.x-icon-extra:before {
  content: '\e626';
}
```

```html
<x-icon name="extra" />
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 图标名称 | `String` | - | - |
| info | 图标右上角文字提示 | `String | Number` | - | - |
| color | 图标颜色 | `String` | `inherit` | 1.1.3 |
| size | 图标大小，如 `20px` `2em` | `String` | `inherit` | 1.1.15 |
| class-prefix | 类名前缀 | `String` | `x-icon` | 1.2.1 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击图标时触发 | - |

