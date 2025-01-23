# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`。

```html
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<van-button plain type="primary">朴素按钮</van-button>
<van-button plain type="info">朴素按钮</van-button>
```

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现。

```html
<van-button plain hairline type="primary">细边框按钮</van-button>
<van-button plain hairline type="info">细边框按钮</van-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮的`bind:click`事件不会触发。

```html
<van-button disabled type="primary">禁用状态</van-button>
<van-button disabled type="info">禁用状态</van-button>
```

### 加载状态

```html
<van-button loading type="primary" />
<van-button loading type="primary" loading-type="spinner" />
<van-button loading type="info" loading-text="加载中..." />
```

### 按钮形状

```html
<van-button square type="primary">方形按钮</van-button>
<van-button round type="info">圆形按钮</van-button>
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```html
<van-button icon="star-o" type="primary" />
<van-button icon="star-o" type="primary">按钮</van-button>
<van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">
  按钮
</van-button>
```

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`。

```html
<van-button type="primary" size="large">大号按钮</van-button>
<van-button type="primary" size="normal">普通按钮</van-button>
<van-button type="primary" size="small">小型按钮</van-button>
<van-button type="primary" size="mini">迷你按钮</van-button>
```

### 块级元素

通过`block`属性可以将按钮的元素类型设置为块级元素。

```html
<van-button type="primary" block>块级元素</van-button>
```

### 自定义颜色

通过`color`属性可以自定义按钮的颜色。

```html
<van-button color="#7232dd">单色按钮</van-button>
<van-button color="#7232dd" plain>单色按钮</van-button>
<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">
  渐变色按钮
</van-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| id | 标识符 | _string_ | - |
| button-id `v1.10.25` | 标识符，作为原生 button 组件的 id 值 | _string_ | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | _string_ | `normal` |
| color `v1.0.0` | 按钮颜色，支持传入`linear-gradient`渐变色 | _string_ | - |
| icon | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/icon) | _string_ | - |
| class-prefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/icon) | _string_ | `van-icon` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| block | 是否为块级元素 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| hairline | 是否使用 0.5px 边框 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loading-text | 加载状态提示文字 | _string_ | - |
| loading-type | 加载状态图标类型，可选值为 `spinner` | _string_ | `circular` |
| loading-size | 加载图标大小 | _string_ | `20px` |
| custom-style | 自定义样式 | _string_ | - |
| open-type | 微信开放能力，具体支持可参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | _string_ | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | _string_ | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | _string_ | `en` |
| session-from | 会话来源 | _string_ | - |
| business-id | 客服消息子商户 id | _number_ | - |
| send-message-title | 会话内消息卡片标题 | _string_ | 当前标题 |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | _string_ | 当前分享路径 |
| send-message-img | sendMessageImg | _string_ | 截图 |
| show-message-card | 显示会话内消息卡片 | _string_ | `false` |
| dataset | 按钮 dataset，open-type 为 `share` 时，可在 onShareAppMessage 事件的 `event.target.dataset.detail` 中看到传入的值 | _any_ | - |
| form-type | 用于 form 组件，可选值为`submit` `reset`，点击分别会触发 form 组件的 submit/reset 事件 | _string_ | - |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| bind:click | 点击按钮，且按钮状态不为加载或禁用时触发 | - |
| bind:getuserinfo | 用户点击该按钮时，会返回获取到的用户信息，<br>从返回参数的 detail 中获取到的值同 wx.getUserInfo | - |
| bind:contact | 客服消息回调 | - |
| bind:getphonenumber | 获取用户手机号回调 | - |
| bind:getrealtimephonenumber `v1.10.21` | 获取手机号实时验证回调，open-type=getRealtimePhoneNumber 时有效 | - |
| bind:agreeprivacyauthorization `v1.10.24` | 同意隐私协议回调，openType="agreePrivacyAuthorization"时有效 | - |
| bind:error | 当使用开放能力时，发生错误的回调 | - |
| bind:opensetting | 在打开授权设置页后回调 | - |
| bind:chooseavatar | 当 open-type 的值为 chooseAvatar 时，选择头像之后的回调 |

> Button 提供的是 click 事件而不是原生 tap 事件，按钮禁用时，click 事件不会触发，tap 事件依然会触发。

### 外部样式类

| 类名          | 说明                   |
| ------------- | ---------------------- |
| custom-class  | 根节点样式类           |
| hover-class   | 指定按钮按下去的样式类 |
| loading-class | 加载图标样式类         |
