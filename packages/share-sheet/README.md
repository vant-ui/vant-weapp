# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-share-sheet": "@vant/weapp/share-sheet/index"
}
```

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```html
<van-cell title="显示分享面板" bind:click="onClick" />
<van-share-sheet
  show="{{ showShare }}"
  title="立即分享给好友"
  options="{{ options }}"
  bind:select="onSelect"
  bind:close="onClose"
/>
```

```js
Page({
  data: {
    showShare: false,
    options: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],
  },

  onClick(event) {
    this.setData({ showShare: true });
  },

  onClose() {
    this.setData({ showShare: false });
  },

  onSelect(event) {
    Toast(event.detail.name);
    this.onClose();
  },
});
```

### 展示多行选项

当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。

```html
<van-share-sheet
  show="{{ showShare }}"
  title="立即分享给好友"
  options="{{ options }}"
/>
```

```js
Page({
  data: {
    showShare: false,
    options: [
      [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    ],
  },
});
```

### 自定义图标

除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标。

```html
<van-share-sheet show="{{ showShare }}" options="{{ options }}" />
```

```js
Page({
  data: {
    showShare: false,
    options: [
      {
        name: '名称',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
      },
      {
        name: '名称',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
      },
      {
        name: '名称',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
      },
    ],
  },
});
```

### 展示描述信息

通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。

```html
<van-share-sheet
  show="{{ showShare }}"
  options="{{ options }}"
  title="立即分享给好友"
  description="描述信息"
/>
```

```js
Page({
  data: {
    showShare: false,
    options: [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      {
        name: '复制链接',
        icon: 'link',
        description: '描述信息',
      },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],
  },
});
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示分享面板 | _boolean_ | `false` |
| options | 分享选项 | _Option[]_ | `[]` |
| title | 顶部标题 | _string_ | - |
| cancel-text | 取消按钮文字 | _string_ | `'取消'` |
| description | 标题下方的辅助描述文字 | _string_ | - |
| duration | 动画时长，单位毫秒 | _number \| string_ | `300` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safe-area-inset-bottom | 是否开启底部安全区适配 | _boolean_ | `true` |
| root-portal `v1.11.3` | 是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= `2.25.2 `  | _boolean_ | `false` |

### Option 数据结构

`options`属性为一个对象数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| name | 分享渠道名称 | _string_ |
| description | 分享选项描述 | _string_ |
| icon | 图标，可选值为 `qq` `link` `weibo` `wechat` `poster` `qrcode` `weapp-qrcode` `wechat-moments`，支持传入图片 URL | _string_ |
| openType | 按钮 `open-type`，可用于实现分享功能，可选值为 `share` | _string_ |

### Events

| 事件名        | 说明               | 回调参数                        |
| ------------- | ------------------ | ------------------------------- |
| bind:select        | 点击分享选项时触发 | _option: Option, index: number_ |
| bind:close         | 关闭时触发         | -                               |
| bind:cancel        | 点击取消按钮时触发 | -                               |
| bind:click-overlay | 点击遮罩层时触发   | -                               |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| title       | 自定义顶部标题 |
| description | 自定义描述文字 |
