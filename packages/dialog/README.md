# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-dialog": "@vant/weapp/dialog/index"
}
```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮。

```html
<van-dialog id="van-dialog" />
```

```javascript
import Dialog from '@vant/weapp/dialog/dialog';

Dialog.alert({
  title: '标题',
  message: '弹窗内容',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容',
}).then(() => {
  // on close
});
```

### 消息确认

用于确认消息，包含取消和确认按钮。

```html
<van-dialog id="van-dialog" />
```

```javascript
import Dialog from '@vant/weapp/dialog/dialog';

Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 圆角按钮风格

将 theme 选项设置为 `round-button` 可以展示圆角按钮风格的弹窗。

```html
<van-dialog id="van-dialog" />
```

```javascript
import Dialog from '@vant/weapp/dialog/dialog';

Dialog.alert({
  title: '标题',
  message: '弹窗内容',
  theme: 'round-button',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容',
  theme: 'round-button',
}).then(() => {
  // on close
});
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```html
<van-dialog id="van-dialog" />
```

```javascript
import Dialog from '@vant/weapp/dialog/dialog';

const beforeClose = (action) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (action === 'confirm') {
        resolve(true);
      } else {
        // 拦截取消操作
        resolve(false);
      }
    }, 1000);
  });

Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
  beforeClose,
});
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```html
<van-dialog
  use-slot
  title="标题"
  show="{{ show }}"
  show-cancel-button
  confirm-button-open-type="getUserInfo"
  bind:close="onClose"
  bind:getuserinfo="getUserInfo"
>
  <image src="https://img.yzcdn.cn/1.jpg" />
</van-dialog>
```

```js
Page({
  data: {
    show: true,
  },

  getUserInfo(event) {
    console.log(event.detail);
  },

  onClose() {
    this.setData({ show: false });
  },
});
```

### 自定义样式

如果需要自定义样式，建议使用 `custom-class` 实现，不在推荐 `className` 属性（在自定义组件中使用并不会生效），使用方法如下

#### 组件调用

```html
<van-dialog
  title="标题"
  message="弹窗内容"
  show="{{ show }}"
  custom-class="my-custom-class"
/>
```

#### API 调用

```html
<van-dialog id="van-dialog" custom-class="my-custom-class" />
```

## API

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
| --- | --- | --- | --- |
| Dialog | `options` | `Promise` | 展示弹窗 |
| Dialog.alert | `options` | `Promise` | 展示消息提示弹窗 |
| Dialog.confirm | `options` | `Promise` | 展示消息确认弹窗 |
| Dialog.setDefaultOptions | `options` | `void` | 修改默认配置，对所有 Dialog 生效 |
| Dialog.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Dialog 生效 |
| Dialog.close | - | `void` | 关闭弹窗 |
| Dialog.stopLoading | - | `void` | 停止按钮的加载状态 |

### Options

通过函数调用 Dialog 时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为`px` | _string \| number_ | `320px` |
| message | 文本内容，支持通过`\n`换行 | _string_ | - |
| messageAlign | 内容对齐方式，可选值为`left` `right` | _string_ | `center` |
| theme | 样式风格，可选值为`round-button` | _string_ | `default` |
| zIndex | z-index 层级 | _number_ | `100` |
| className | 自定义类名，dialog 在自定义组件内时无效，已废弃，请使用 `custom-class` 代替，将在 2.0.0 移除 | _string_ | '' |
| customStyle | 自定义样式 | _string_ | '' |
| selector | 自定义选择器 | _string_ | `van-dialog` |
| showConfirmButton | 是否展示确认按钮 | _boolean_ | `true` |
| showCancelButton | 是否展示取消按钮 | _boolean_ | `false` |
| confirmButtonText | 确认按钮的文案 | _string_ | `确认` |
| cancelButtonText | 取消按钮的文案 | _string_ | `取消` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| closeOnClickOverlay | 点击遮罩层时是否关闭弹窗 | _boolean_ | `false` |
| asyncClose | 已废弃，将在 2.0.0 移除，请使用 `beforeClose` 属性代替 | _boolean_ | `false` |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action) => boolean \| Promise\<boolean\>_ | - |
| context | 选择器的选择范围，可以传入自定义组件的 this 作为上下文 | _object_ | 当前页面 |
| transition | 动画名称，可选值为`fade` `none` | _string_ | `scale` |
| confirmButtonOpenType | 确认按钮的微信开放能力，具体支持可参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | _string_ | - |

### OpenType Options

使用`confirmButtonOpenType`后，支持以下选项：

| 参数 | 说明 | 类型 | 默认值 | open-type |
| --- | --- | --- | --- | --- |
| appParameter | 打开 APP 时，向 APP 传递的参数 | _string_ | - | `launchApp` |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | _string_ | `en` | `getUserInfo` |
| sessionFrom | 会话来源 | _string_ | - | `contact` |
| businessId | 客服消息子商户 id | _number_ | - | `contact` |
| sendMessageTitle | 会话内消息卡片标题 | _string_ | 当前标题 | `contact` |
| sendMessagePath | 会话内消息卡片点击跳转小程序路径 | _string_ | 当前分享路径 | `contact` |
| sendMessageImg | sendMessageImg | _string_ | 截图 | `contact` |
| showMessageCard | 显示会话内消息卡片 | _string_ | `false` | `contact` |

### Props

通过组件调用 Dialog 时，支持以下 Props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示弹窗 | _boolean_ | - |
| confirm-button-id `v1.10.25`| 确认按钮的标识符，作为底层原生button组件的id值 | _string_ | - |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为`px` | _string \| number_ | `320px` |
| message | 文本内容，支持通过`\n`换行 | _string_ | - |
| theme | 样式风格，可选值为`round-button` | _string_ | `default` |
| message-align | 内容对齐方式，可选值为`left` `right` | _string_ | `center` |
| z-index | z-index 层级 | _number_ | `100` |
| class-name | 自定义类名，dialog 在自定义组件内时无效，已废弃，请使用 `custom-class` 代替，将在 2.0.0 移除 | _string_ | '' |
| custom-style | 自定义样式 | _string_ | '' |
| show-confirm-button | 是否展示确认按钮 | _boolean_ | `true` |
| show-cancel-button | 是否展示取消按钮 | _boolean_ | `false` |
| confirm-button-text | 确认按钮的文案 | _string_ | `确认` |
| cancel-button-text | 取消按钮的文案 | _string_ | `取消` |
| confirm-button-color | 确认按钮的字体颜色 | _string_ | `#ee0a24` |
| cancel-button-color | 取消按钮的字体颜色 | _string_ | `#333` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlay-style `v1.0.0` | 自定义遮罩层样式 | _object_ | - |
| close-on-click-overlay | 点击遮罩层时是否关闭弹窗 | _boolean_ | `false` |
| use-slot | 是否使用自定义内容的插槽 | _boolean_ | `false` |
| use-title-slot | 是否使用自定义标题的插槽 | _boolean_ | `false` |
| use-confirm-button-slot `1.10.23` | 是否使用自定义确认按钮的插槽 | _boolean_ | `false` |
| use-cancel-button-slot `1.10.23` | 是否使用自定义取消按钮的插槽 | _boolean_ | `false` |
| async-close | 已废弃，将在 2.0.0 移除，请使用 `beforeClose` 属性代替 | _boolean_ | `false` |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action) => boolean \| Promise\<boolean\>_ | - |
| transition | 动画名称，可选值为`fade` | _string_ | `scale` |
| confirm-button-open-type | 确认按钮的微信开放能力，具体支持可参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | _string_ | - |
| root-portal `v1.11.3` | 是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= `2.25.2 `  | _boolean_ | `false` |

### OpenType Props

使用`confirm-button-open-type`后，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 | open-type |
| --- | --- | --- | --- | --- |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | _string_ | - | `launchApp` |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | _string_ | `en` | `getUserInfo` |
| session-from | 会话来源 | _string_ | - | `contact` |
| business-id | 客服消息子商户 id | _number_ | - | `contact` |
| send-message-title | 会话内消息卡片标题 | _string_ | 当前标题 | `contact` |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | _string_ | 当前分享路径 | `contact` |
| send-message-img | sendMessageImg | _string_ | 截图 | `contact` |
| show-message-card | 显示会话内消息卡片 | _string_ | `false` | `contact` |

### Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| bind:close | 弹窗关闭时触发 | event.detail: 触发关闭事件的来源，<br>枚举为`confirm`,`cancel`,`overlay` |
| bind:confirm | 点击确认按钮时触发 | - |
| bind:cancel | 点击取消按钮时触发 | - |
| bind:getuserinfo | 点击确认按钮时，会返回获取到的用户信息，<br>从返回参数的 detail 中获取到的值同 wx.getUserInfo | - |
| bind:contact | 客服消息回调 | - |
| bind:getphonenumber | 获取用户手机号回调 | - |
| bind:getrealtimephonenumber `v1.10.21` | 获取手机号实时验证回调，open-type=getRealtimePhoneNumber 时有效 | - |
| bind:agreeprivacyauthorization `v1.10.25` | 同意隐私协议回调，openType="agreePrivacyAuthorization"时有效 | - |
| bind:error | 当使用开放能力时，发生错误的回调 | - |
| bind:opensetting | 在打开授权设置页后回调 | - |

### Slot

| 名称 | 说明 |
| --- | --- |
| title | 自定义`title`显示内容，如果设置了`title`属性则不生效 |
| confirm-button `1.10.23` | 自定义`confirm-button`显示内容，需要 `use-confirm-button-slot` 为 `true` |
| cancel-button `1.10.23` | 自定义`cancel-button`显示内容，需要 `use-cancel-button-slot` 为 `true` |

### 外部样式类

| 类名                            | 说明           |
| ------------------------------- | -------------- |
| custom-class `v1.10.8`          | 根节点样式类   |
| cancle-button-class `v1.10.21`  | 取消按钮样式类 |
| confirm-button-class `v1.10.21` | 确认按钮样式类 |
