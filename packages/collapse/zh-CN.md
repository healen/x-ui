## Collapse 折叠面板

### 使用指南
``` javascript
import { Collapse, CollapseItem } from 'healen-x-ui';

Vue.use(Collapse).use(CollapseItem);
```

### 代码演示

#### 基础用法
通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<x-collapse v-model="activeNames">
  <x-collapse-item title="小UI好呀" name="1">
    提供多种组件，快速搭建H5应用
  </x-collapse-item>
  <x-collapse-item title="小UI扩展" name="2">
    扩展自如，随心搭建
  </x-collapse-item>
  <x-collapse-item title="小UI组件" name="3" disabled>
    很牛的框架 
  </x-collapse-item>
</x-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

#### 手风琴
通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<x-collapse v-model="activeName" accordion>
  <x-collapse-item title="小UI好呀" name="1">
    提供多种组件，快速搭建H5应用
  </x-collapse-item>
  <x-collapse-item title="小UI扩展" name="2">
    扩展自如，随心搭建
  </x-collapse-item>
  <x-collapse-item title="小UI组件" name="3">
    很牛的框架 
  </x-collapse-item>
</x-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

#### 自定义标题内容

```html
<x-collapse v-model="activeNames">
  <x-collapse-item name="1">
    <div slot="title">小UI好呀<x-icon name="question" /></div>
    提供多种组件，快速搭建H5应用
  </x-collapse-item>
  <x-collapse-item title="小UI扩展" name="2">
    扩展自如，随心搭建
  </x-collapse-item>
</x-collapse>
```



### Collapse API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前展开面板的 name | `Array | String | Number` | - |
| accordion | 是否开启手风琴模式 | `Boolean` | `false` |

### Collapse Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换面板时触发 | activeNames: `string | array` |

### CollapseItem API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|------|
| name | 唯一标识符，默认为索引值 | `String | Number` | `index` | - |
| title | 标题栏左侧内容 | `String | Number` | - | - |
| icon | 标题栏左侧图标，可选值见 Icon 组件 | `String` | - | 1.2.1 |
| value | 标题栏右侧内容 | `String | Number` | - | 1.2.1 |
| label | 标题栏描述信息 | `String` | - | 1.2.1 |
| border | 是否显示内边框 | `Boolean` | `true` | 1.2.1 |
| is-link | 是否展示标题栏右侧箭头并开启点击反馈 | `Boolean` | `true` | 1.2.1 |
| disabled | 是否禁用面板 | `Boolean` | `false` | 1.3.6 |

### CollapseItem Slot

| 名称 | 说明 |
|------|------|
| - | 面板内容 |
| value | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |

