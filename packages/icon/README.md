# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-icon": "@vant/weapp/icon/index"
}
```

## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接。

```html
<van-icon name="close" />
<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标。

```html
<van-icon name="chat" dot />
<van-icon name="chat" info="9" />
<van-icon name="chat" info="99+" />
```

### 图标颜色

设置`color`属性来控制图标颜色。

```html
<van-icon name="chat" color="red" />
```

### 图标大小

设置`size`属性来控制图标大小。

```html
<van-icon name="chat" size="50px" />
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。例如，可以在 `app.wxss` 文件中引入。

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 通过 class-prefix 指定类名为 my-icon -->
<van-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| info | 图标右上角文字提示 | _string \| number_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size `v1.10.20` | 图标大小，如 `20px`，`2em`，默认单位为`px` | _string \| number_ | `inherit` |
| custom-style | 自定义样式 | _string_ | - |
| class-prefix | 类名前缀 | _string_ | `van-icon` |
| use-info-slot | 是否使用 info slot | _boolean_ | `false` |

### Events

| 事件名     | 说明           | 参数 |
| ---------- | -------------- | ---- |
| bind:click | 点击图标时触发 | -    |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| custom-class | 根节点样式类 |
| info-class | 图标右上角文字样式类 |

### Slot

| 类名         | 说明         |
| ------------ | ------------ |
| info-slot `v1.11.2` | 自定义info内容,开启useInfoSlot有效 |

## 常见问题

### 开发者工具上提示 Failed to load font 是什么情况？

这个是开发者工具本身的问题，可以忽略，具体可以查看[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html) - 注意事项第 5 条。
