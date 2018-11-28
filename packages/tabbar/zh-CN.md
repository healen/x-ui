## Tabbar 标签栏

### 使用指南
``` javascript
import { Tabbar, TabbarItem } from 'healen-x-ui';

Vue.use(Tabbar).use(TabbarItem);
```

### 代码演示

#### 基础用法


```html
<x-tabbar v-model="active">
  <x-tabbar-item icon="shop">标签</x-tabbar-item>
  <x-tabbar-item icon="chat" dot>标签</x-tabbar-item>
  <x-tabbar-item icon="records" info="5">标签</x-tabbar-item>
  <x-tabbar-item icon="gold-coin" info="20">标签</x-tabbar-item>
</x-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    }
  }
}
```


#### 自定义图标
通过 icon 插槽自定义图标，可以通过 `slot-scope` 判断标签是否选中

```html
<x-tabbar v-model="active">
  <x-tabbar-item info="3">
    <span>自定义</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </x-tabbar-item>
  <x-tabbar-item icon="chat">标签</x-tabbar-item>
  <x-tabbar-item icon="records">标签</x-tabbar-item>
</x-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  }
}
```


### Tabbar API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中标签的索引 | `Number` | - | - |
| fixed | 是否固定在底部 | `Boolean` | `true` | - |
| z-index | 元素 z-index | `Number` | `1` | 1.1.9 |

### Tabbar Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换标签时触发 | active: 当前选中标签 |

### TabbarItem API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| icon | 图标名称 (可选值见 Icon 组件) | `String` | - | - |
| dot | 是否显示小红点 | `Boolean` | - | - |
| info | 图标右上角提示信息 | `String | Number` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前 history | `String` | `false` | - |

### TabbarItem Slot

| 名称 | 说明 | slot-scope |
|------|------|------|
| icon | 自定义图标 | active: 是否为选中标签 |
