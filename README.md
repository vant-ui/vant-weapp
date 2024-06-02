<p align="center">
  <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center">轻量、可靠的小程序 UI 组件库</h3>

<p align="center">
  <img src="https://img.shields.io/npm/v/@vant/weapp.svg?style=for-the-badge" alt="npm version" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&color=#4fc08d" />
  <img src="https://img.shields.io/npm/dt/@vant/weapp.svg?style=for-the-badge&color=#4fc08d" alt="downloads" />
  <img src="https://img.shields.io/npm/dm/@vant/weapp.svg?style=for-the-badge&color=#4fc08d" alt="downloads" />
</p>

<p align="center">
  🔥 <a href="https://vant.pro/vant-weapp/">文档网站（国内）</a>
  &nbsp;
  🔥 <a href="https://vant-ui.github.io/vant-weapp/">文档网站（GitHub）</a>
  &nbsp;
  🚀 <a href="https://github.com/vant-ui/vant" target="_blank">Vue 版</a>
</p>

---

### 介绍

Vant 是一个**轻量、可靠的移动端组件库**，于 2017 年开源。

目前 Vant 官方提供了 [Vue 2 版本](https://vant-ui.github.io/vant/v2/)、[Vue 3 版本](https://vant-ui.github.io/vant/)和[微信小程序版本](http://vant-ui.github.io/vant-weapp/)，并由社区团队维护 [React 版本](https://github.com/3lang3/react-vant)和[支付宝小程序版本](https://github.com/ant-move/Vant-Aliapp)。

## 预览

扫描下方小程序二维码，体验组件库示例。注意：因微信审核机制限制，目前示例小程序不是最新版本，可以 clone 代码到本地开发工具预览

<img src="https://img.yzcdn.cn/vant-weapp/qrcode-201808101114.jpg" width="200" height="200" style="margin-top: 10px;" >

## 使用之前

使用 Vant Weapp 前，请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

### 方式一. 通过 npm 安装 (推荐)

小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
# 通过 npm 安装
npm i @vant/weapp -S --production

# 通过 yarn 安装
yarn add @vant/weapp --production

# 安装 0.x 版本
npm i vant-weapp -S --production
```

### 方式二. 下载代码

直接通过 git 下载 Vant Weapp 源代码，并将 `dist` 目录拷贝到自己的项目中。

```bash
git clone https://github.com/youzan/vant-weapp.git
```

## 使用组件

以按钮组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "van-button": "/path/to/vant-weapp/dist/button/index"
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<van-button type="primary">按钮</van-button>
```

## 在开发者工具中预览

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，把`vant-weapp/example`目录添加进去就可以预览示例了。

PS：关于 `van-area` Area 省市区选择组件，地区数据初始化可以直接在云开发环境中导入`vant-weapp/example/database_area.JSON` 文件使用。

## 基础库版本

Vant Weapp 最低支持到小程序基础库 2.6.5 版本。

## 链接

- [文档网站（GitHub）](https://vant-ui.github.io/vant-weapp/)
- [文档网站（国内）](https://vant.pro/vant-weapp/)
- [意见反馈](https://github.com/youzan/vant-weapp/issues)
- [设计资源](https://vant-ui.github.io/vant/#/zh-CN/design)
- [更新日志](https://vant-ui.github.io/vant-weapp/#/changelog)
- [官方示例](https://github.com/vant-ui/vant-demo)

## 核心团队

以下是 Vant 和 Vant Weapp 的核心贡献者们：

| [![chenjiahan](https://avatars.githubusercontent.com/u/7237365?s=80&v=4)](https://github.com/chenjiahan/) | [![cookfront](https://avatars.githubusercontent.com/u/4829465?s=80&v=4)](https://github.com/cookfront/) | [![w91](https://avatars.githubusercontent.com/u/2599455?s=80&v=4)](https://github.com/w91/) | [![pangxie1991](https://avatars.githubusercontent.com/u/5961240?s=80&v=4)](https://github.com/pangxie1991/) | [![rex-zsd](https://avatars.githubusercontent.com/u/8767877?s=80&v=4)](https://github.com/rex-zsd/) | [![nemo-shen](https://avatars.githubusercontent.com/u/13480805?s=80&v=4)](https://github.com/nemo-shen/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [chenjiahan](https://github.com/chenjiahan/) | [cookfront](https://github.com/cookfront/) | [wangnaiyi](https://github.com/w91/) | [pangxie](https://github.com/pangxie1991/) | [rex-zsd](https://github.com/rex-zsd/) | [nemo-shen](https://github.com/nemo-shen/) |

| [![Lindysen](https://avatars.githubusercontent.com/u/33708359?s=80&v=4)](https://github.com/Lindysen/) | [![JakeLaoyu](https://avatars.githubusercontent.com/u/16181940?s=80&v=4)](https://github.com/JakeLaoyu/) | [![landluck](https://avatars.githubusercontent.com/u/27060081?s=80&v=4)](https://github.com/landluck/) | [![wjw-gavin](https://avatars.githubusercontent.com/u/19986739?s=80&v=4)](https://github.com/wjw-gavin/) | [![inottn](https://avatars.githubusercontent.com/u/18509404?s=80&v=4)](https://github.com/inottn/) | [![zhousg](https://avatars.githubusercontent.com/u/15833290?s=80&v=4)](https://github.com/zhousg/) |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [Lindysen](https://github.com/Lindysen/) | [JakeLaoyu](https://github.com/JakeLaoyu/) | [landluck](https://github.com/landluck/) | [wjw-gavin](https://github.com/wjw-gavin/) | [inottn](https://github.com/inottn/) | [zhousg](https://github.com/zhousg/) |

## 贡献者们

感谢以下小伙伴们为 Vant Weapp 发展做出的贡献：

<a href="https://github.com/youzan/vant-weapp/graphs/contributors">
  <img src="https://opencollective.com/vant-weapp/contributors.svg?width=890&button=false" alt="contributors">
</a>

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)协议，请自由地享受和参与开源。
