# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-image": "@vant/weapp/image/index"
}
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)。

## 代码演示

### 基础用法

基础用法与原生 [image](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) 标签一致，可以设置`src`、`width`、`height`等原生属性。

```html
<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### 填充模式

通过`fit`属性可以设置图片填充模式，可选值见下方表格。

```html
<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 圆形图片

通过`round`属性可以设置图片变圆，注意当图片宽高不相等且`fit`为`contain`或`scale-down`时，将无法填充一个完整的圆形。

```html
<van-image
  round
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 图片懒加载

图片懒加载，在即将进入一定范围（上下三屏）时才开始加载。

```html
<van-image
  width="100"
  height="100"
  lazy-load
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 加载中提示

`Image`组件提供了默认的加载中提示，支持通过`loading`插槽自定义内容。

```html
<van-image use-loading-slot>
  <van-loading slot="loading" type="spinner" size="20" vertical />
</van-image>
```

### 加载失败提示

`Image`组件提供了默认的加载失败提示，支持通过`error`插槽自定义内容。

```html
<van-image use-error-slot>
  <text slot="error">加载失败</text>
</van-image>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| fit | 图片填充模式 | _string_ | _fill_ |
| alt | 替代文本 | _string_ | - |
| width | 宽度，默认单位为`px` | _string \| number_ | - |
| height | 高度，默认单位为`px` | _string \| number_ | - |
| radius | 圆角大小，默认单位为`px` | _string \| number_ | `0` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| lazy-load | 是否懒加载 | _boolean_ | `false` |
| webp `v1.10.11` | 是否解析 webp 格式 | _boolean_ | `false` |
| show-error | 是否展示图片加载失败提示 | _boolean_ | `true` |
| show-loading | 是否展示图片加载中提示 | _boolean_ | `true` |
| use-error-slot | 是否使用 error 插槽 | _boolean_ | `false` |
| use-loading-slot | 是否使用 loading 插槽 | _boolean_ | `false` |
| show-menu-by-longpress | 是否开启长按图片显示识别小程序码菜单 | _boolean_ | `false` |

### 图片填充模式 

| 名称      | 含义                                                   |
| --------- | ------------------------------------------------------ |
| contain   | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover     | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill      | 拉伸图片，使图片填满元素                               |
| widthFix  | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变   |
| heightFix | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变   |
| none      | 保持图片原有尺寸                                       |

### Events

| 事件名 | 说明               | 回调参数     |
| ------ | ------------------ | ------------ |
| bind:click  | 点击图片时触发     | event: Event |
| bind:load   | 图片加载完毕时触发 | event: Event |
| bind:error  | 图片加载失败时触发 | event: Event |

### Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| loading | 自定义加载中的提示内容     |
| error   | 自定义加载失败时的提示内容 |

### 外部样式类

| 类名          | 说明           |
| ------------- | -------------- |
| custom-class  | 根节点样式类   |
| image-class   | 图片样式类     |
| loading-class | loading 样式类 |
| error-class   | error 样式类   |
