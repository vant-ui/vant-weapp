# Cascader 级联选择

### 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择。

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)。

```json
"usingComponents": {
  "van-cascader": "@vant/weapp/cascader/index"
}
```

## 代码演示

### 基础用法

级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：

```html
<van-field
  value="{{ fieldValue }}"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  bind:tap="onClick"
/>
<van-popup show="{{ show }}" round position="bottom">
  <van-cascader
    wx:if="{{ show }}"
    value="{{ cascaderValue }}"
    title="请选择所在地区"
    options="{{ options }}"
    bind:close="onClose"
    bind:finish="onFinish"
  />
</van-popup>
```

```js

const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
];

Page({
  data: {
    show: false,
    options,
    fieldValue: '',
    cascaderValue: '',
  },

  onClick() {
    this.setData({
      show: true,
    });
  },

  onClose() {
    this.setData({
      show: false,
    });
  },

  onFinish(e) {
    const { selectedOptions, value } = e.detail;
    const fieldValue = selectedOptions
        .map((option) => option.text || option.name)
        .join('/');
    this.setData({
      fieldValue,
      cascaderValue: value,
    })
  },
});
```

### 自定义颜色

通过 `active-color` 属性来设置选中状态的高亮颜色。

```html
<van-cascader
  value="{{ cascaderValue }}"
  title="请选择所在地区"
  options="{{ options }}"
  active-color="#ee0a24"
  bind:close="onClose"
  bind:finish="onFinish"
/>
```

### 异步加载选项

可以监听 `change` 事件并动态设置 `options`，实现异步加载选项。

```html
<van-field
  value="{{ fieldValue }}"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  bind:tap="onClick"
/>
<van-popup show="{{ show }}" round position="bottom">
  <van-cascader
    wx:if="{{ show }}"
    value="{{ cascaderValue }}"
    title="请选择所在地区"
    options="{{ options }}"
    bind:close="onClose"
    bind:change="onChange"
    bind:finish="onFinish"
  />
</van-popup>
```

```js
Page({
  data: {
    options: [
      {
        text: '浙江省',
        value: '330000',
        children: [],
      }
    ];
  },
  onChange(e) {
    const { value } = e.detail;
    if (value === this.data.options[0].value) {
      setTimeout(() => {
        const children = [
          { text: '杭州市', value: '330100' },
          { text: '宁波市', value: '330200' },
        ];
        this.setData({
          'options[0].children': children,
        })
      }, 500);
    }
  },
});

```

### 自定义字段名

通过 `field-names` 属性可以自定义 `options` 里的字段名称。

```html
<van-cascader
  value="{{ code }}"
  title="请选择所在地区"
  options="{{ options }}"
  field-names="{{ fieldNames }}"
/>
```

```js
Page({
  data: {
    code: '',
    fieldNames: {
      text: 'name',
      value: 'code',
      children: 'items',
    },
    options: [
      {
        name: '浙江省',
        code: '330000',
        items: [{ name: '杭州市', code: '330100' }],
      },
      {
        name: '江苏省',
        code: '320000',
        items: [{ name: '南京市', code: '320100' }],
      },
    ],
  },
});
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 顶部标题 | _string_ | - |
| value | 选中项的值 | _string \| number_ | - |
| options | 可选项数据源 | _CascaderOption[]_ | `[]` |
| placeholder | 未选中时的提示文案 | _string_ | `请选择` |
| active-color | 选中状态的高亮颜色 | _string_ | `#1989fa` |
| swipeable | 是否开启手势左右滑动切换 | _boolean_ | `false` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| ellipsis `v1.11.7` | 是否省略过长的标题文字, 关闭后文字过长会出现横向滚动 | _boolean_ | `true` |
| show-header | 是否展示标题栏 | _boolean_ | `true` |
| close-icon | 关闭图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/icon) | _string_ | `cross` |
| field-names | 自定义 `options` 结构中的字段 | _CascaderFieldNames_ | `{ text: 'text', value: 'value', children: 'children' }` |
| use-title-slot `v1.11.3` | 是否使用自定义标题的插槽 | _boolean_ | `false` |

### CascaderOption 数据结构

`options` 属性是一个由对象构成的数组，数组中的每个对象配置一个可选项，对象可以包含以下值：

| 键名               | 说明                     | 类型                        |
| ------------------ | ------------------------ | --------------------------- |
| text               | 选项文字（必填）         | _string_                    |
| value              | 选项对应的值（必填）     | _string \| number_          |
| color              | 选项文字颜色             | _string_                    |
| children           | 子选项列表               | _CascaderOption[]_          |
| disabled           | 是否禁用选项             | _boolean_                   |
| className          | 为对应列添加额外的 class | _string \| Array \| object_ |

### Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| bind:change | 选中项变化时触发 | event.detail：_{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| bind:finish | 全部选项选择完成后触发 | event.detail：_{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| bind:close | 点击关闭图标时触发 | - |
| bind:click-tab | 点击标签时触发 | event.detail：_{ tabIndex: number, title: string }_ |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| title | 自定义顶部标题 | - |
