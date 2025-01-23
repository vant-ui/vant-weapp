# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-calendar": "@vant/weapp/calendar/index"
}
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发`confirm`事件。

```html
<van-cell title="选择单个日期" value="{{ date }}" bind:click="onDisplay" />
<van-calendar show="{{ show }}" bind:close="onClose" bind:confirm="onConfirm" />
```

```js
Page({
  data: {
    date: '',
    show: false,
  },

  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
});
```

### 选择多个日期

设置`type`为`multiple`后可以选择多个日期，此时`confirm`事件返回的 date 为数组结构，数组包含若干个选中的日期。

```html
<van-cell title="选择多个日期" value="{{ text }}" bind:click="onDisplay" />
<van-calendar
  show="{{ show }}"
  type="multiple"
  bind:close="onClose"
  bind:confirm="onConfirm"
/>
```

```js
Page({
  data: {
    text: '',
    show: false,
  },

  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  onConfirm(event) {
    this.setData({
      show: false,
      text: `选择了 ${event.detail.length} 个日期`,
    });
  },
});
```

### 选择日期区间

设置`type`为`range`后可以选择日期区间，此时`confirm`事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```html
<van-cell title="选择日期区间" value="{{ date }}" bind:click="onDisplay" />
<van-calendar
  show="{{ show }}"
  type="range"
  bind:close="onClose"
  bind:confirm="onConfirm"
/>
```

```js
Page({
  data: {
    date: '',
    show: false,
  },

  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    const [start, end] = event.detail;
    this.setData({
      show: false,
      date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
    });
  },
});
```

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allow-same-day 属性来允许选择同一天。

### 快捷选择

将`show-confirm`设置为`false`可以隐藏确认按钮，这种情况下选择完成后会立即触发`confirm`事件。

```html
<van-calendar show="{{ show }}" show-confirm="{{ false }}" />
```

### 自定义颜色

通过`color`属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```html
<van-calendar show="{{ show }}" color="#07c160" />
```

### 自定义日期范围

通过`min-date`和`max-date`定义日历的范围，需要注意的是`min-date`和`max-date`的区间不宜过大，否则会造成严重的性能问题。

```html
<van-calendar
  show="{{ show }}"
  min-date="{{ minDate }}"
  max-date="{{ maxDate }}"
/>
```

```js
Page({
  data: {
    show: false,
    minDate: new Date(2010, 0, 1).getTime(),
    maxDate: new Date(2010, 0, 31).getTime(),
  },
});
```

### 自定义按钮文字

通过`confirm-text`设置按钮文字，通过`confirm-disabled-text`设置按钮禁用时的文字。

```html
<van-calendar
  show="{{ show }}"
  type="range"
  confirm-text="完成"
  confirm-disabled-text="请选择结束时间"
/>
```

### 自定义日期文案

通过传入`formatter`函数来对日历上每一格的内容进行格式化

```html
<van-calendar show="{{ show }}" type="range" formatter="{{ formatter }}" />
```

```js
Page({
  data: {
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = '劳动节';
        } else if (date === 4) {
          day.topInfo = '五四青年节';
        } else if (date === 11) {
          day.text = '今天';
        }
      }

      if (day.type === 'start') {
        day.bottomInfo = '入住';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
      }

      return day;
    },
  },
});
```

### 自定义弹出位置

通过`position`属性自定义弹出层的弹出位置，可选值为`top`、`left`、`right`。

```html
<van-calendar show="{{ show }}" round="false" position="right" />
```

### 日期区间最大范围

选择日期区间时，可以通过`max-range`属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

```html
<van-calendar type="range" max-range="{{ 3 }}" />
```

### 自定义周起始日

通过 `first-day-of-week` 属性设置一周从哪天开始。

```html
<van-calendar first-day-of-week="{{ 1 }}" />
```

### 平铺展示

将`poppable`设置为`false`，日历会直接展示在页面内，而不是以弹层的形式出现。

```html
<van-calendar
  title="日历"
  poppable="{{ false }}"
  show-confirm="{{ false }}"
  class="calendar"
/>
```

```css
.calendar {
  --calendar-height: 618px;
}
```

> Tips: 注意，在自定义calendar的高度时，需要确保，滚动到当前月份时，所有的日期要展现在.van-calendar__body内，否则可能会出现滚动时头部月份与当前月份不同步的情况。目前平铺型预设高度618px,弹窗型高度90%。

## API

### Props

| 参数                      | 说明                                                                   | 类型                  | 默认值           |
|-------------------------|----------------------------------------------------------------------|---------------------|---------------|
| type                    | 选择类型:<br>`single`表示选择单个日期，<br>`multiple`表示选择多个日期，<br>`range`表示选择日期区间 | _string_            | `single`      |
| title                   | 日历标题                                                                 | _string_            | `日期选择`        |
| color                   | 主题色，对底部按钮和选中日期生效                                                     | _string_            | `#ee0a24`     |
| min-date                | 可选择的最小日期                                                             | _timestamp_         | 当前日期          |
| max-date                | 可选择的最大日期                                                             | _timestamp_         | 当前日期的六个月后     |
| default-date `v1.10.21` | 默认选中的日期，`type`为`multiple`或`range`时为数组，传入 `null` 表示默认不选择              | _timestamp \        | timestamp[] \ | null_ | 今天 |
| row-height              | 日期行高                                                                 | _number \           | string_       | `64` |
| formatter               | 日期格式化函数                                                              | _(day: Day) => Day_ | -             |
| poppable                | 是否以弹层的形式展示日历                                                         | _boolean_           | `true`        |
| show-mark               | 是否显示月份背景水印                                                           | _boolean_           | `true`        |
| show-title              | 是否展示日历标题                                                             | _boolean_           | `true`        |
| show-subtitle           | 是否展示日历副标题（年月）                                                        | _boolean_           | `true`        |
| show-confirm            | 是否展示确认按钮                                                             | _boolean_           | `true`        |
| confirm-text            | 确认按钮的文字                                                              | _string_            | `确定`          |
| confirm-disabled-text   | 确认按钮处于禁用状态时的文字                                                       | _string_            | `确定`          |
| first-day-of-week       | 设置周起始日                                                               | _0~6_               | `0`           |
| readonly `v1.9.1`       | 是否为只读状态，只读状态下不能选择日期                                                  | _boolean_           | `false`       |
| maxSimDays      | 最大同时显示天数。超出限制外只会同时显示当前滚动条所在月份前后三个月的日期数据                              | _number_            | `300`         |
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 选择类型:<br>`single`表示选择单个日期，<br>`multiple`表示选择多个日期，<br>`range`表示选择日期区间 | _string_ | `single` |
| title | 日历标题 | _string_ | `日期选择` |
| color | 主题色，对底部按钮和选中日期生效 | _string_ | `#ee0a24` |
| min-date | 可选择的最小日期 | _timestamp_ | 当前日期 |
| max-date | 可选择的最大日期 | _timestamp_ | 当前日期的六个月后 |
| default-date `v1.10.21` | 默认选中的日期，`type`为`multiple`或`range`时为数组，传入 `null` 表示默认不选择| _timestamp \| timestamp[] \| null_ | 今天 |
| row-height | 日期行高 | _number \| string_ | `64` |
| formatter | 日期格式化函数 | _(day: Day) => Day_ | - |
| poppable | 是否以弹层的形式展示日历 | _boolean_ | `true` |
| show-mark | 是否显示月份背景水印 | _boolean_ | `true` |
| show-title | 是否展示日历标题 | _boolean_ | `true` |
| show-subtitle | 是否展示日历副标题（年月） | _boolean_ | `true` |
| show-confirm | 是否展示确认按钮 | _boolean_ | `true` |
| confirm-text | 确认按钮的文字 | _string_ | `确定` |
| confirm-disabled-text | 确认按钮处于禁用状态时的文字 | _string_ | `确定` |
| first-day-of-week | 设置周起始日 | _0~6_ | `0` |
| readonly `v1.9.1` | 是否为只读状态，只读状态下不能选择日期 | _boolean_ | `false` |
| root-portal `v1.11.3` | 是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= `2.25.2 `  | _boolean_ | `false` |

### Poppable Props

当 Calendar 的 `poppable` 为 `true` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示日历弹窗 | _boolean_ | `false` |
| position | 弹出位置，可选值为 `top` `right` `left` | _string_ | `bottom` |
| round | 是否显示圆角弹窗 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safe-area-inset-bottom | 是否开启底部安全区适配 | _boolean_ | `true` |

### Range Props

当 Calendar 的 `type` 为 `range` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max-range | 日期区间最多可选天数，默认无限制 | _number \| string_ | - |
| range-prompt | 范围选择超过最多可选天数时的提示文案 | _string \| null_ | `选择天数不能超过 xx 天` |
| show-range-prompt | 范围选择超过最多可选天数时，是否展示提示文案 | _boolean_ | `true` |
| allow-same-day | 是否允许日期范围的起止时间为同一天 | _boolean_ | `false` |

### Multiple Props

当 Calendar 的 `type` 为 `multiple` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min-range | 日期最少可选天数 | _number \| string_ | `1` |

### Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容。

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| date | 日期对应的 Date 对象 | _Date_ |
| type | 日期类型，可选值为`selected`、`start`、`middle`、`end`、`disabled` | _string_ |
| text | 中间显示的文字 | _string_ |
| topInfo | 上方的提示信息 | _string_ |
| bottomInfo | 下方的提示信息 | _string_ |
| className | 自定义 className | _string_ |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bind:select | 点击任意日期时触发 | _value: Date \| Date[]_ |
| bind:unselect | 当 Calendar 的 `type` 为 `multiple` 时,点击已选中的日期时触发 | _value: Date_ |
| bind:confirm | 日期选择完成后触发，若`show-confirm`为`true`，则点击确认按钮后触发 | _value: Date \| Date[]_ |
| bind:open | 打开弹出层时触发 | - |
| bind:close | 关闭弹出层时触发 | - |
| bind:opened | 打开弹出层且动画结束后触发 | - |
| bind:closed | 关闭弹出层且动画结束后触发 | - |
| bind:over-range | 范围选择超过最多可选天数时触发 | - |
| bind:click-subtitle `v1.8.1` | 点击日历副标题时触发 | _WechatMiniprogram.TouchEvent_ |

### Slots

| 名称   | 说明               |
| ------ | ------------------ |
| title  | 自定义标题         |
| footer | 自定义底部区域内容 |

### 方法

通过 selectComponent 可以获取到 Calendar 实例并调用实例方法。

| 方法名 | 说明                   | 参数 | 返回值 |
| ------ | ---------------------- | ---- | ------ |
| reset  | 重置选中的日期到默认值 | -    | -      |
