## ImagePreview 图片预览

### 使用指南

`ImagePreview`和其他组件不同，不是通过HTML结构的方式来使用，而是通过函数调用的方式。使用前需要先引入它。

```js
import { ImagePreview } from 'healen-x-ui';
```

### 代码演示

#### 基础用法

直接传入图片数组，即可展示图片预览

```javascript
ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
]);
```

#### 传入配置项

通过传入配置对象，可以指定初始图片的位置、监听关闭事件

```javascript
ImagePreview({
  images: [
    'https://img.yzcdn.cn/1.jpg',
    'https://img.yzcdn.cn/2.jpg'
  ],
  startPosition: 1,
  onClose() {
    // do something
  }
});
```

#### 手动关闭

通过实例上的 close 方法可以手动关闭图片预览

```javascript
const instance = ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
]);

setTimeout(() => {
  instance.close();
}, 1000);
```

### 配置项

| 参数名 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| images | 需要预览的图片 URL 数组 | `Array` | `[]` | 1.1.16 |
| startPosition | 图片预览起始位置索引 | `Number` | `0` | 1.1.16 |
| showIndex | 是否显示页码 | `Boolean` | `true` | 1.3.4 |
| showIndicators | 是否显示轮播指示器 | `Boolean` | `false` | 1.3.10 |
| onClose | 关闭时的回调函数 | `Function` | - | 1.1.16 |
