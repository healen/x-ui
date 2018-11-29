## Lazyload 图片懒加载

### 使用指南

`Lazyload` 是 `Vue` 指令，使用前需要对指令进行注册

```js
import Vue from 'vue';
import { Lazyload } from 'healen-x-ui';

// options 为可选参数，无则不传
Vue.use(Lazyload, options);
```

### 代码演示

#### 基础用法
将`v-lazy`指令的值设置为你需要懒加载的图片

```html
<img v-for="img in imageList" v-lazy="img" >
```

```javascript
export default {
  data() {
    return {
      imageList: [
        'https://raw.githubusercontent.com/healen/xui/gh-pages/a/1.jpeg',
        'https://raw.githubusercontent.com/healen/xui/gh-pages/a/2.jpeg',
        'https://raw.githubusercontent.com/healen/xui/gh-pages/a/3.jpeg',
        'https://raw.githubusercontent.com/healen/xui/gh-pages/a/4.jpeg',
        'https://raw.githubusercontent.com/healen/xui/gh-pages/a/5.jpeg',
      ]
    };
  }
}
```

#### 背景图懒加载

和图片懒加载不同，背景图懒加载需要使用`v-lazy:background-image`，值设置为背景图片的地址，需要注意的是必须声明容器高度。

```html
<div v-for="img in imageList" v-lazy:background-image="img" />
```



### Options

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| loading | 加载时的图片 | `String` | - | - |
| error | 错误时的图片 | `String` | - | - |
| preload | 预加载高度的比例 | `String` | - | - |
| attempt | 尝试次数 | `Number` | `3` | - |
| listenEvents | 监听的事件 | `Array` | `scroll`等 | - |
| adapter | 适配器 | `Object` | - | - |
| filter | 图片 URL 过滤 | `Object` | - | - |
| lazyComponent | 是否能懒加载模块 | `Boolean` | `false` | - |

更多内容请参照：[vue-lazyload 官方文档](https://github.com/hilongjw/vue-lazyload)
