# GoodsAction 商品导航

### 介绍

用于为商品相关操作提供便捷交互。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-goods-action": "@vant/weapp/goods-action/index",
  "van-goods-action-icon": "@vant/weapp/goods-action-icon/index",
  "van-goods-action-button": "@vant/weapp/goods-action-button/index"
}
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)。

## 代码演示

### 基础用法

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" bind:click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" bind:click="onClickIcon" />
  <van-goods-action-button
    text="加入购物车"
    type="warning"
    bind:click="onClickButton"
  />
  <van-goods-action-button text="立即购买" bind:click="onClickButton" />
</van-goods-action>
```

```javascript
Page({
  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
  },
});
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标。

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button text="加入购物车" type="warning" />
  <van-goods-action-button text="立即购买" />
</van-goods-action>
```

### 自定义按钮颜色

通过`color`属性可以自定义按钮的颜色，支持传入`linear-gradient`渐变色。

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#be99ff" text="加入购物车" type="warning" />
  <van-goods-action-button color="#7232dd" text="立即购买" />
</van-goods-action>
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#7232dd" text="加入购物" type="warning" />
  <van-goods-action-button plain color="#7232dd" text="立即购买" />
</van-goods-action>
```

## API

### GoodsAction Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| safe-area-inset-bottom | 是否为 iPhoneX 留出底部安全距离 | _boolean_ | `true` |

### GoodsActionIcon Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文字 | _string_ | - |
| icon | 图标类型，可选值见`icon`组件 | _string_ | - |
| info | 图标右上角提示信息 | _string \| number_ | - |
| color `v1.10.15`  | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 20px，2em，默认单位为px | _string \| number_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| link-type | 链接跳转类型，可选值为 `redirectTo` `switchTab` `reLaunch` | _string_ | `navigateTo` |
| id | 标识符 | _string_ | - |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| open-type | 微信开放能力，具体支持可参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | _string_ | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | _string_ | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | _string_ | `en` |
| session-from | 会话来源 | _string_ | - |
| send-message-title | 会话内消息卡片标题 | _string_ | 当前标题 |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | _string_ | 当前分享路径 |
| send-message-img | sendMessageImg | _string_ | 截图 |
| show-message-card | 显示会话内消息卡片 | _string_ | `false` |
| class-prefix `v1.10.1` | 类名前缀 | _string_ | `van-icon` |

### GoodsActionButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文字 | _string_ | - |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| link-type | 链接跳转类型，可选值为 `redirectTo` `switchTab` `reLaunch` | _string_ | `navigateTo` |
| id | 标识符 | _string_ | - |
| button-id `v1.10.25`| 标识符，作为原生button组件的id值 | _string_ | - |
| type | 按钮类型，可选值为 `primary` `warning` `danger` | _string_ | `danger` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | _string_ | `normal` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| open-type | 微信开放能力，具体支持可参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | _string_ | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | _string_ | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | _string_ | `en` |
| session-from | 会话来源 | _string_ | - |
| send-message-title | 会话内消息卡片标题 | _string_ | 当前标题 |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | _string_ | 当前分享路径 |
| send-message-img | sendMessageImg | _string_ | 截图 |
| show-message-card | 显示会话内消息卡片 | _string_ | `false` |
| custom-style `v1.11.3` | 自定义样式 | _string_ | '' |

### Events

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| bind:click  | 按钮点击事件回调 | -    |

### GoodsActionIcon Slot

| 名称 | 说明       |
| ---- | ---------- |
| icon | 自定义图标 |

### GoodsActionButton Slot

| 名称 | 说明         |
| ---- | ------------ |
| -    | 按钮显示内容 |

### GoodsActionIcon 外部样式类

| 类名       | 说明       |
| ---------- | ---------- |
| icon-class | 图标样式类 |
| text-class | 文字样式类 |
| info-class `v1.10.20`  | 图标右上角文字样式类 |

### GoodsActionButton 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| custom-class | 根节点样式类 |
