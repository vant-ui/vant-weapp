# Circle 环形进度条

### 介绍

圆环形的进度条组件，支持进度渐变动画。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-circle": "@vant/weapp/circle/index"
}
```

## 代码演示

### 基础用法

`value`属性表示进度条的目标进度。

```html
<van-circle value="{{ 30 }}" text="text" />
```

### 宽度定制

通过`stroke-width`属性来控制进度条宽度。

```html
<van-circle value="{{ value }}" stroke-width="6" text="宽度定制" />
```

### 颜色定制

通过`color`属性来控制进度条颜色，`layer-color`属性来控制轨道颜色。

```html
<van-circle
  value="{{ value }}"
  layer-color="#eeeeee"
  color="#ee0a24"
  text="颜色定制"
/>
```

### 渐变色

`color`属性支持传入对象格式来定义渐变色。

```html
<van-circle value="{{ value }}" color="{{ gradientColor }}" text="渐变色" />
```

```javascript
Page({
  data: {
    value: 25,
    gradientColor: {
      '0%': '#ffd01e',
      '100%': '#ee0a24',
    },
  },
});
```

### 逆时针方向

将`clockwise`设置为`false`，进度会从逆时针方向开始。

```html
<van-circle
  value="{{ value }}"
  color="#07c160"
  clockwise="{{ false }}"
  text="逆时针"
/>
```

### 大小定制

通过`size`属性设置圆环直径。

```html
<van-circle value="{{ value }}" size="120" text="大小定制" />
```

### Canvas 转为 Image 方式呈现
通过`render-to-image`属性设置生成图片。

```html
<van-circle value="{{ value }}" render-to-image size="120" text="这是张图片" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 目标进度 | _number_ | `0` |
| type | 指定 canvas 类型，可选值为 `2d` | _string_ | - |
| size | 圆环直径，默认单位为 `px` | _number_ | `100` |
| color | 进度条颜色，传入对象格式可以定义渐变色 | _string \| object_ | `#1989fa` |
| layer-color | 轨道颜色 | _string_ | `#fff` |
| fill | 填充颜色 | _string_ | - |
| speed | 动画速度（单位为 value/s） | _number_ | `50` |
| text | 文字 | _string_ | - |
| stroke-width | 进度条宽度 | _number_ | `4` |
| clockwise | 是否顺时针增加 | _boolean_ | `true` |
| reander-to-image | 渲染成图片 | _boolean_ | `false` |


### Slots

| 名称 | 说明                                                       |
| ---- | ---------------------------------------------------------- |
| -    | 自定义文字内容，如果设置了`fill`，插槽内容会被原生组件覆盖 |
