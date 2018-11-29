## NoticeBar 通告栏

### 使用指南
``` javascript
import { NoticeBar } from 'healen-x-ui';

Vue.use(NoticeBar);
```

### 代码演示

#### 基础用法

```html
<x-notice-bar
  text="通知条，通知条，通知条，通知条，通知条，通知条，通知条，通知条，通知条，"
  left-icon="huo"
/>
```

#### 禁用滚动
文字内容多于一行时，可通过`scrollable`参数控制是否开启滚动

```html
<x-notice-bar :scrollable="false">
  通知条，通知条，通知条，通知条，通知条，通知条，通知条，通知条，通知条，
</x-notice-bar>
```

#### 通告栏模式
默认模式为空，支持`closeable`和`link`。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<x-notice-bar mode="closeable">
通知条，通知条，通知条，通知条，通知条，通知条，通知条，通知条，通知条，
</x-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<x-notice-bar mode="link">
通知条，通知条，通知条，通知条，通知条，通知条，通知条，通知条，通知条，
</x-notice-bar>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| mode | 通告栏模式，可选值为 `closeable` `link` | `String` | `''` | - |
| delay | 动画延迟时间 (s) | `Number` | `1` | - |
| speed | 滚动速率 (px/s) | `Number` | `50` | - |
| scrollable | 是否在长度溢出时滚动播放 | `Boolean` | `true` | - |
| left-icon | icon名称[现有图标](https://healen.github.io/xui/#/demo/icon) | `String` | - | - |
| color | 文本颜色 | `String` | `#f60` | - |
| background | 滚动条背景 | `String` | `#fff7cc` | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击事件回调 | - |
