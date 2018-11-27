## Icon

### Install
``` javascript
import { Icon } from 'x-ui';

Vue.use(Icon);
```

### Usage

#### Basic Usage
View all usable icons on the right.

```html
<x-icon name="success" />
```

#### Use local font file
Icon uses font file in `yzcdn.cn` by default，if you want to use the local font file，please import the following css file.

```js
import 'vant/lib/vant-css/icon-local.css';
```

#### Add custom iconfont

```css
@font-face {
  font-family: 'custom-iconfont';
  src: url('./iconfont.ttf') format('truetype');
}

.x-icon {
  font-family: 'vant-icon', 'custom-iconfont' !important;
}

.x-icon-extra:before {
  content: '\e626';
}
```

```html
<x-icon name="extra" />
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Icon name | `String` | `''` |
| info | Info message | `String | Number` | `''` |
| color | Icon color | `String` | `inherit` |
| size | Icon size | `String` | `inherit` |
| class-prefix | ClassName prefix | `String` | `x-icon` |


### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click icon | - |
