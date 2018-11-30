## Checkbox 复选框

### 使用指南
``` javascript
import { Checkbox, CheckboxGroup } from 'healen-x-ui';

Vue.use(Checkbox).use(CheckboxGroup);
```

### 代码演示

#### 基础用法
通过`v-model`绑定 checkbox 的勾选状态

```html
<x-checkbox v-model="checked">复选框</x-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

#### 禁用状态

```html
<x-checkbox v-model="checked" disabled>复选框</x-checkbox>
```

#### 自定义图标
通过 icon 插槽自定义图标，可以通过 `slot-scope` 判断是否为选中状态

```html
<x-checkbox v-model="checked">
  自定义图标
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? icon.active : icon.normal"
  >
</x-checkbox>
```

```js
export default {
  data() {
    checked: true,
    icon: {
        normal: require('./img/icon-normal.png'),
        active: require('./img/icon-active.png')
    }
  }
}
```

#### Checkbox 组

需要与`x-checkbox-group`一起使用，选中值是一个数组，通过`v-model`绑定在`x-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值

```html
<x-checkbox-group v-model="result">
  <x-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </x-checkbox>
</x-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

#### 设置最大可选数

```html
<x-checkbox-group v-model="result" :max="2">
  <x-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </x-checkbox>
</x-checkbox-group>
```

#### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件，并通过 checkbox 的 toggle 方法手动触发切换

```html
<x-checkbox-group v-model="result">
  <x-cell-group>
    <x-cell
      v-for="item in list"
      clickable
      :key="item"
      :title="`复选框 ${item}`"
      @click="toggle(index)"
    >
      <x-checkbox :name="item" ref="checkboxes" />
    </x-cell>
  </x-cell-group>
</x-checkbox-group>
```

```js
export default {
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```

### Checkbox API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符 | `any` | - | - |
| shape | 形状，可选值为 `square` | `String` | `round` | - |
| v-model | 是否为选中状态 | `Boolean` | `false` | - |
| disabled | 是否禁用单选框 | `Boolean` | `false` | - |
| label-disabled | 是否禁用单选框文本点击 | `Boolean` | `false` | - |
| label-position | 文本位置，可选值为 `left` | `String` | `right` | 1.1.11 |

### CheckboxGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 所有选中项的标识符 | `Array` | - | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |
| max | 设置最大可选数，0 为无限制 | `Number` | `0` | - |

### Checkbox Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### CheckboxGroup Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox Slot

| 名称 | 说明 | slot-scope |
|------|------|------|
| - | 自定义文本 | - |
| icon | 自定义图标 | checked: 是否为选中状态 |

### Checkbox 方法

通过 ref 可以获取到 checkbox 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| toggle | - | - | 切换选中状态 |
