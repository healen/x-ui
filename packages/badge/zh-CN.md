## Badge 徽章

### 使用指南
``` javascript
import { Badge, BadgeGroup } from 'healen-x-ui';

Vue.use(Badge);
Vue.use(BadgeGroup);
```

### 代码演示

#### 基础用法

通过在`x-badge-group`上设置`active-key`属性来控制选中的`badge`

```html
<x-badge-group :active-key="activeKey">
  <x-badge title="标签名称" @click="onClick" />
  <x-badge title="标签名称" @click="onClick" info="8" />
  <x-badge title="标签名称" @click="onClick" info="99" />
  <x-badge title="标签名称" @click="onClick" info="199" />
</x-badge-group>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
```

### BadgeGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| active-key | 选中`badge`的索引 | `String | Number` | `0` | - |

### Badge API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 内容 | `String` | `''` | - |
| info | 提示消息 | `String | Number` | `''` | - |
| url | 跳转链接 | `String` | - | - |
