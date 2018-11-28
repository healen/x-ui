## TreeSelect 分类选择

### 使用指南
``` javascript
import { TreeSelect } from 'healen-x-ui';

Vue.use(TreeSelect);
```

### 代码演示

#### 基础用法


```html
<x-tree-select
  :items="items"
  :main-active-index="mainActiveIndex"
  :active-id="activeId"
  @navclick="onNavClick"
  @itemclick="onItemClick"
/>
```

```javascript
export default {
  data() {
    return {
      items: items,
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1001
    };
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    }
  }
}
```

### API

#### 传入参数

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| items | 分类显示所需的数据，结构参见下方 | `Array` | `[]` | - |
| height | 高度，单位为 px | `Number` | `300` | 1.3.6 |
| main-active-index | 左侧导航高亮的索引 | `Number` | `0` | - |
| active-id | 右侧选择项，高亮的数据id | `String | Number` | `0` | - |

#### 事件

| 事件名 | 说明 | 参数 |
|------|------|------|
| navclick | 左侧导航点击时，触发的事件 |  index：被点击的导航的索引 |
| itemclick | 右侧选择项被点击时，会触发的事件 | data: 该点击项的数据 |

### 数据格式
#### items 分类显示所需数据的数据结构
`items` 整体为一个数组，数组内包含一系列描述分类的 object。

每个分类里，text表示当前分类的名称。children 表示分类里的可选项，为数组结构，id被用来唯一标识每个选项
```javascript
[
  {
    // 导航名称
    text: '所有城市',
    // 该导航下所有的可选项
    children: [
      {
        // 可选项的名称
        text: '温州',
        // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
        id: 1002
      },
      {
        // 可选项的名称
        text: '杭州',
        // 可选项的id，高亮的时候是根据id是否和选中的id是否相同进行判断的
        id: 1001
      }
    ]
  }
]
```
