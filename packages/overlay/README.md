# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-overlay": "@vant/weapp/overlay/index"
}
```

## 代码演示

### 基础用法

```html
<van-button type="primary" bind:click="onClickShow">显示遮罩层</van-button>
<van-overlay show="{{ show }}" bind:click="onClickHide" />
```

```js
Page({
  data: {
    show: false,
  },

  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  },
});
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```html
<van-button type="primary" bind:click="onClickShow">嵌入内容</van-button>
<van-overlay show="{{ show }}" bind:click="onClickHide">
  <view class="wrapper">
    <view class="block" catch:tap="noop" />
  </view>
</van-overlay>
```

```js
Page({
  data: {
    show: false,
  },

  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  },

  noop() {},
});
```

```css
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| z-index | z-index 层级 | _string \| number_ | `1` |
| duration | 动画时长，单位秒 | _string \| number_ | `0.3` |
| class-name | 自定义类名 | _string_ | - |
| custom-style | 自定义样式 | _string_ | - |
| lock-scroll `v1.7.3` | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | `true` |
| root-portal `v1.10.14` | 是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= `2.25.2 ` | _boolean_ | `false` |

### Events

| 事件名     | 说明       | 回调参数 |
| ---------- | ---------- | -------- |
| bind:click | 点击时触发 | -        |

### Slots

| 名称 | 说明                               |
| ---- | ---------------------------------- |
| -    | 默认插槽，用于在遮罩层上方嵌入内容 |


### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| custom-class | 根节点样式类 |
