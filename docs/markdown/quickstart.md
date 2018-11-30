## 快速上手

### 脚手架

推荐使用 Vue 官方提供的脚手架 [Vue Cli 3](https://cli.vuejs.org/zh/) 创建项目

```bash
# 安装 Vue Cli
npm install -g @vue/cli

# 创建一个项目
vue create hello-world
```


### 安装

#### NPM

```shell
npm i healen-x-ui -S
npm i vue-lazyload -S
```

#### YARN

```shell
yarn add healen-x-ui
yarm add vue-lazyload
```


### 引入组件


#### 方法一. 在main.js里全部引入

```js

    import Xui from 'healen-x-ui' // 组件库
    import 'healen-x-ui/packages/x-css/lib/index.css' //样式
    Vue.use(Xui) // 使用

```



#### 方式二. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import {Button} from 'healen-x-ui';
import 'healen-x-ui/packages/x-css/lib/base.css';
import 'healen-x-ui/packages/x-css/lib/button.css';
```


> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件


### Rem 适配

x-ui 中的样式默认使用`px`作为单位，如果需要使用`rem`单位，推荐使用以下两个工具

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

```js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    }
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```

> 注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，这会导致 x-ui 的样式无法被编译
