# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-stepper": "@vant/weapp/stepper/index"
}
```

## 代码演示

### 基础用法

通过`value`设置输入值，可以通过`change`事件监听到输入值的变化。

```html
<van-stepper value="{{ 1 }}" bind:change="onChange" />
```

```js
Page({
  onChange(event) {
    console.log(event.detail);
  },
});
```

### 步长设置

通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为`1`。

```html
<van-stepper value="{{ 1 }}" step="2" />
```

### 限制输入范围

通过`min`和`max`属性限制输入值的范围。

```html
<van-stepper value="{{ 5 }}" min="5" max="8" />
```

### 限制输入整数

设置`integer`属性后，输入框将限制只能输入整数。

```html
<van-stepper value="{{ 1 }}" integer />
```

### 禁用状态

通过设置`disabled`属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```html
<van-stepper value="{{ 1 }}" disabled />
```

### 关闭长按

通过设置`long-press`属性决定步进器是否开启长按手势。

```html
<van-stepper value="{{ 1 }}" long-press="{{ false }}" />
```

### 固定小数位数

通过设置`decimal-length`属性可以保留固定的小数位数。

```html
<van-stepper value="{{ 1 }}" step="0.2" decimal-length="{{ 1 }}" />
```

### 异步变更

如果需要异步地修改输入框的值，可以设置`async-change`属性，并在`change`事件中手动修改`value`。

```html
<van-stepper value="{{ value }}" async-change bind:change="onChange" />
```

```js
Page({
  data: {
    value: 1,
  },

  onChange(event) {
    Toast.loading({ forbidClick: true });

    setTimeout(() => {
      Toast.clear();
      this.setData({ value: event.detail });
    }, 500);
  },
});
```

### 自定义大小

通过`input-width`属性设置输入框宽度，通过`button-size`属性设置按钮大小和输入框高度。

```html
<van-stepper value="{{ 1 }}" input-width="40px" button-size="32px" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 在表单内提交时的标识符 | _string_ | - |
| value | 输入值 | _string \| number_ | 最小值 |
| min | 最小值 | _string \| number_ | `1` |
| max | 最大值 | _string \| number_ | - |
| step | 步长 | _string \| number_ | `1` |
| integer | 是否只允许输入整数 | _boolean_ | `false` |
| disabled | 是否禁用 | _boolean_ | `false` |
| disable-input | 是否禁用输入框 | _boolean_ | `false` |
| async-change | 是否开启异步变更，开启后需要手动控制输入值 | _boolean_ | `false` |
| input-width | 输入框宽度，默认单位为 `px` | _string \| number_ | `32px` |
| button-size | 按钮大小，默认单位为 `px`，输入框高度会和按钮大小保持一致 | _string \| number_ | `28px` |
| show-plus | 是否显示增加按钮 | _boolean_ | `true` |
| show-minus | 是否显示减少按钮 | _boolean_ | `true` |
| decimal-length | 固定显示的小数位数 | _number_ | - |
| theme | 样式风格，可选值为 `round` | _string_ | - |
| disable-plus | 是否禁用增加按钮 | _boolean_ | - |
| disable-minus | 是否禁用减少按钮 | _boolean_ | - |
| long-press | 是否开启长按手势 | _boolean_ | `true` |
| always-embed `v1.9.3` | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | _boolean_ | `false` |

### Events

| 事件名         | 说明                     | 回调参数                   |
| -------------- | ------------------------ | -------------------------- |
| bind:change    | 当绑定值变化时触发的事件 | event.detail: 当前输入的值 |
| bind:overlimit | 点击不可用的按钮时触发   | -                          |
| bind:plus      | 点击增加按钮时触发       | -                          |
| bind:minus     | 点击减少按钮时触发       | -                          |
| bind:focus     | 输入框聚焦时触发         | -                          |
| bind:blur      | 输入框失焦时触发         | -                          |

### Slot

| 名称  | 说明     |
| ----- | -------- |
| plus  | 加号按钮 |
| minus | 减号按钮 |

### 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| custom-class | 根节点样式类   |
| input-class  | 输入框样式类   |
| plus-class   | 加号按钮样式类 |
| minus-class  | 减号按钮样式类 |
