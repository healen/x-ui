## GoodsAction 商品页行动点

### 使用指南
``` javascript
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'healen-x-ui';

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);
```

### 代码演示
#### 基础用法

```html
<x-goods-action>
  <x-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
  <x-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
  <x-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
  <x-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
</x-goods-action>
```

```javascript
export default {
  methods: {
    onClickMiniBtn() {
      Toast('点击图标');
    },
    onClickBigBtn() {
      Toast('点击按钮');
    }
  }
}
```

#### 图标提示
通过`info`属性在图标右上角增加相应的提示

```html
<x-goods-action>
  <x-goods-action-mini-btn icon="chat" text="客服" />
  <x-goods-action-mini-btn icon="cart" text="购物车" info="5" />
  <x-goods-action-mini-btn icon="shop" text="店铺" />
  <x-goods-action-big-btn text="加入购物车" />
  <x-goods-action-big-btn text="立即购买" primary />
</x-goods-action>
```

### API

#### GoodsActionMiniBtn

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 按钮文字 | `String` | - | - |
| icon | 图标 | `String` | - | - |
| icon-class | 图标额外类名 | `String` | - | - |
| info | 图标右上角提示信息 | `String | Number` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前 history | `String` | `false` | - |

#### GoodsActionBigBtn

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 按钮文字 | `String` | - | - |
| primary | 是否为红色按钮 | `Boolean` | `false` | - |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - | 1.3.10 |
| loading | 是否显示为加载状态 | `Boolean` | `false` | - | 1.3.10 |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前 history | `String` | `false` | - |
