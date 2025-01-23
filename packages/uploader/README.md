# Uploader 文件上传

### 介绍

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。

### 引入

在`app.json`或`index.json`中引入组件，默认为`ES6`版本，`ES5`引入方式参见[快速上手](#/quickstart)。

```json
"usingComponents": {
  "van-uploader": "@vant/weapp/uploader/index"
}
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

文件上传完毕后会触发`after-read`回调函数，获取到对应的文件的临时地址，然后再使用`wx.uploadFile`将图片上传到远程服务器上。

```html
<van-uploader file-list="{{ fileList }}" bind:after-read="afterRead" />
```

```js
Page({
  data: {
    fileList: [],
  },

  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
  },
});
```

### 图片预览

通过向组件传入`file-list`属性，可以绑定已经上传的图片列表，并展示图片列表的预览图。file-list 的详细结构可见下方。

```html
<van-uploader file-list="{{ fileList }}" />
```

```js
Page({
  data: {
    fileList: [
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        name: '图片1',
      },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      {
        url: 'http://iph.href.lu/60x60?text=default',
        name: '图片2',
        isImage: true,
        deletable: true,
      },
    ],
  },
});
```

### 图片可删除状态

通过`deletable`属性可控制是否开启所有图片的可删除状态，`deletable`默认为`true`，即所有图片都可删除。

若希望控制单张图片的可删除状态，可将`deletable`属性设置为`true`，并在`fileList`中为每一项设置`deletable`属性。

```html
<van-uploader file-list="{{ fileList }}" deletable="{{ true }}" />
```

```js
Page({
  data: {
    fileList: [
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        deletable: false,
      },
    ],
  },
});
```

### 上传状态

通过`status`属性可以标识上传状态，`uploading`表示上传中，`failed`表示上传失败，`done`表示上传完成。

```html
<van-uploader file-list="{{ fileList }}" />
```

```js
Page({
  data: {
    fileList: [
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        status: 'uploading',
        message: '上传中',
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        status: 'failed',
        message: '上传失败',
      },
    ],
  },
});
```

### 限制上传数量

通过`max-count`属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。

```html
<van-uploader
  file-list="{{ fileList }}"
  max-count="2"
  bind:after-read="afterRead"
/>
```

### 自定义上传样式

通过插槽可以自定义上传区域的样式。

```html
<van-uploader>
  <van-button icon="photo" type="primary">上传图片</van-button>
</van-uploader>
```

### 上传前校验

将`use-before-read`属性设置为`true`，然后绑定 `before-read` 事件可以在上传前进行校验，调用 `callback` 方法传入 `true` 表示校验通过，传入 `false` 表示校验失败。

```html
<van-uploader
  file-list="{{ fileList }}"
  accept="media"
  use-before-read
  bind:before-read="beforeRead"
  bind:after-read="afterRead"
/>
```

```js
Page({
  data: {
    fileList: [],
  },

  beforeRead(event) {
    const { file, callback } = event.detail;
    callback(file.type === 'image');
  },
});
```

## 云开发示例

### 上传图片至云存储

在开发中，可以利用[小程序云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的云存储能力，将图片上传至云存储内。然后根据返回的`fileiId`来下载图片、删除图片和替换临时链接。

```js
// 上传图片
uploadToCloud() {
  wx.cloud.init();
  const { fileList } = this.data;
  if (!fileList.length) {
    wx.showToast({ title: '请选择图片', icon: 'none' });
  } else {
    const uploadTasks = fileList.map((file, index) => this.uploadFilePromise(`my-photo${index}.png`, file));
    Promise.all(uploadTasks)
      .then(data => {
        wx.showToast({ title: '上传成功', icon: 'none' });
        const newFileList = data.map(item => ({ url: item.fileID }));
        this.setData({ cloudPath: data, fileList: newFileList });
      })
      .catch(e => {
        wx.showToast({ title: '上传失败', icon: 'none' });
        console.log(e);
      });
  }
}

uploadFilePromise(fileName, chooseResult) {
  return wx.cloud.uploadFile({
    cloudPath: fileName,
    filePath: chooseResult.url
  });
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，可以在回调函数的第二项参数中获取 | _string \| number_ | - |
| accept | 接受的文件类型, 可选值为`all` `media` `image` `file` `video` | _string_ | `image` |
| sizeType | 所选的图片的尺寸, 当`accept`为`image` \| `media` 类型时设置所选图片的尺寸可选值为`original` `compressed` | _string[]_ | `['original','compressed']` |
| preview-size | 预览图和上传区域的尺寸，默认单位为`px` | _string \| number_ | `80px` |
| preview-image | 是否在上传完成后展示预览图 | _boolean_ | `true` |
| preview-full-image | 是否在点击预览图后展示全屏图片预览 | _boolean_ | `true` |
| preview-file `v1.11.7` | 是否在点击文件预览图后预览文件 | _boolean_ | `true` |
| multiple | 是否开启图片多选，部分安卓机型不支持 | _boolean_ | `false` |
| disabled | 是否禁用文件上传 | _boolean_ | `false` |
| show-upload | 是否展示文件上传按钮 | _boolean_ | `true` |
| deletable | 是否展示删除按钮 | _boolean_ | `true` |
| capture | 图片或者视频选取模式，当`accept`为`image` \| `media` 类型时设置`capture`可选值为`camera`可以直接调起摄像头 | _string[]_ | `['album', 'camera']` |
| max-size | 文件大小限制，单位为`byte` | _number_ | - |
| max-count | 文件上传数量限制 | _number_ | - |
| upload-text | 上传区域文字提示 | _string_ | - |
| video-fit `1.10.21` | video 封面的预览图模式，可选值参考小程序`video`组件的`object-fit`属性 | _string_ | `contain` |
| image-fit | 预览图裁剪模式，可选值参考小程序`image`组件的`mode`属性 | _string_ | `scaleToFill` |
| use-before-read | 是否开启文件读取前事件 | _boolean_ | - |
| camera | 当 accept 为 `video` \| `media` 时生效，可选值为 `back` `front` | _string_ | - |
| compressed | 当 accept 为 `video` 时生效，是否压缩视频，默认为`true` | _boolean_ | - |
| max-duration | 当 accept 为 `video` \| `media` 时生效，拍摄视频最长拍摄时间，单位秒 | _number_ | `60` |
| media-type `v1.10.8` | 当 accept 为 `media` 时生效，选择的文件的文件类型，可选值为 `image` `video` `mix` | _string[]_ | `['image', 'video', 'mix']` |
| extension `v1.10.11` | 当 accept 为 `file` 时生效，根据文件拓展名过滤可选择文件。每一项都不能是空字符串。默认不过滤 | _string[] \| undefined_ | - |
| showmenu `v1.10.13` | 预览图片时，是否显示长按菜单 | _boolean_ | `true` |
| upload-icon | 上传区域图标，可选值见 [Icon 组件](#/icon) | _string_ | `plus` |
| referrer-policy `v1.11.6` | 当 accept 为 video 时生效，具体用法参考 [微信官方 - 媒体组件 / video](https://developers.weixin.qq.com/miniprogram/dev/component/video.html) | string | `no-referrer` |

#### accept 的合法值

| 参数    | 说明                                 |
| ------- | ------------------------------------ |
| `media` | 图片和视频                           |
| `image` | 图片                                 |
| `video` | 视频                                 |
| `file`  | 从客户端会话选择图片和视频以外的文件 |
| `all`   | 从客户端会话选择所有文件             |

### FileList

`file-list` 为一个对象数组，数组中的每一个对象包含以下 `key`。

| 参数 | 说明 |
| --- | --- |
| `url` | 图片和视频的网络资源地址 |
| `name` | 文件名称，视频将在全屏预览时作为标题显示 |
| `thumb` | 图片缩略图或视频封面的网络资源地址，仅对图片和视频有效，`accept` 为 `video`时，真机不会返回该属性，建议使用 `media` 和 `media-type` 配合完成视频上传 |
| `type` | 文件类型，可选值`image` `video` `file` |
| `isImage` | 手动标记图片资源 |
| `isVideo` | 手动标记视频资源 |

### Slot

| 名称 | 说明           |
| ---- | -------------- |
| -    | 自定义上传区域 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bind:before-read | 文件读取前，在回调函数中返回 `false` 可终止文件读取，绑定事件的同时需要将`use-before-read`属性设置为`true` | `event.detail.file`: 当前读取的文件，`event.detail.callback`: 回调函数，调用`callback(false)`终止文件读取 |
| bind:after-read | 文件读取完成后 | `event.detail.file`: 当前读取的文件 |
| bind:oversize | 文件超出大小限制 | - |
| bind:click-preview | 点击预览图片 | `event.detail.index`: 点击图片的序号值 |
| bind:delete | 删除图片 | `event.detail.index`: 删除图片的序号值 |
