export default {
  name: 'vant-weapp',
  build: {
    srcDir: 'packages',
    site: {
      publicPath: '/vant-weapp/',
    },
  },
  site: {
    versions: [{ label: '0.x', link: '/vant-weapp/0.x' }],
    title: 'Vant Weapp',
    description: '轻量、可靠的小程序 UI 组件库',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    simulator: {
      url: '/vant/v2/mobile.html?weapp=1',
      routeMapper: (path) => {
        const map = {
          '/common': '/style',
          '/transition': '/style',
        };
        return `/zh-CN${map[path] || path}`;
      },
      syncPathFromSimulator: false,
    },
    icpLicense: {
      text: '浙ICP备2021036118号',
      link: 'https://beian.miit.gov.cn/',
    },
    headHtml: `<script>
if (location.host === 'youzan.github.io') {
location.href = location.href.replace('youzan.github.io', 'vant-ui.github.io');
}
</script>
`,
    links: [
      {
        logo: 'https://img.yzcdn.cn/vant/vant-o.svg',
        url: '/vant/',
      },
      {
        logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/youzan/vant-weapp',
      },
    ],
    baiduAnalytics: {
      seed: 'af5d41bc4e446e76665dbe3ec18d55c3',
    },
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
          {
            path: 'changelog',
            title: '更新日志',
          },
          {
            path: 'custom-style',
            title: '样式覆盖',
          },
          {
            path: 'theme',
            title: '定制主题',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'cell',
            title: 'Cell 单元格',
          },
          {
            path: 'config-provider',
            title: 'ConfigProvider 全局配置',
          },
          {
            path: 'icon',
            title: 'Icon 图标',
          },
          {
            path: 'image',
            title: 'Image 图片',
          },
          {
            path: 'col',
            title: 'Layout 布局',
          },
          {
            path: 'popup',
            title: 'Popup 弹出层',
          },
          {
            path: 'common',
            title: 'Style 内置样式',
          },
          {
            path: 'toast',
            title: 'Toast 轻提示',
          },
          {
            path: 'transition',
            title: 'transition 动画',
          },
        ],
      },
      {
        title: '表单组件',
        items: [
          {
            path: 'calendar',
            title: 'Calendar 日历',
          },
          {
            path: 'cascader',
            title: 'Cascader 级联选择',
          },
          {
            path: 'checkbox',
            title: 'Checkbox 复选框',
          },
          {
            path: 'datetime-picker',
            title: 'DatetimePicker 时间选择',
          },
          {
            path: 'field',
            title: 'Field 输入框',
          },
          {
            path: 'picker',
            title: 'Picker 选择器',
          },
          {
            path: 'radio',
            title: 'Radio 单选框',
          },
          {
            path: 'rate',
            title: 'Rate 评分',
          },
          {
            path: 'search',
            title: 'Search 搜索',
          },
          {
            path: 'slider',
            title: 'Slider 滑块',
          },
          {
            path: 'stepper',
            title: 'Stepper 步进器',
          },
          {
            path: 'switch',
            title: 'Switch 开关',
          },
          {
            path: 'uploader',
            title: 'Uploader 文件上传',
          },
        ],
      },
      {
        title: '反馈组件',
        items: [
          {
            path: 'action-sheet',
            title: 'ActionSheet 动作面板',
          },
          {
            path: 'dialog',
            title: 'Dialog 弹出框',
          },
          {
            path: 'dropdown-menu',
            title: 'DropdownMenu 下拉菜单',
          },
          {
            path: 'loading',
            title: 'Loading 加载',
          },
          {
            path: 'notify',
            title: 'Notify 消息通知',
          },
          {
            path: 'overlay',
            title: 'Overlay 遮罩层',
          },
          {
            path: 'share-sheet',
            title: 'ShareSheet 分享面板',
          },
          {
            path: 'swipe-cell',
            title: 'SwipeCell 滑动单元格',
          },
        ],
      },
      {
        title: '展示组件',
        items: [
          {
            path: 'circle',
            title: 'Circle 环形进度条',
          },
          {
            path: 'collapse',
            title: 'Collapse 折叠面板',
          },
          {
            path: 'count-down',
            title: 'CountDown 倒计时',
          },
          {
            path: 'divider',
            title: 'Divider 分割线',
          },
          {
            path: 'empty',
            title: 'Empty 空状态',
          },
          {
            path: 'notice-bar',
            title: 'NoticeBar 通知栏',
          },
          {
            path: 'progress',
            title: 'Progress 进度条',
          },
          {
            path: 'skeleton',
            title: 'Skeleton 骨架屏',
          },
          {
            path: 'steps',
            title: 'Steps 步骤条',
          },
          {
            path: 'sticky',
            title: 'Sticky 粘性布局',
          },
          {
            path: 'tag',
            title: 'Tag 标签',
          },
        ],
      },
      {
        title: '导航组件',
        items: [
          {
            path: 'grid',
            title: 'Grid 宫格',
          },
          {
            path: 'index-bar',
            title: 'IndexBar 索引栏',
          },
          {
            path: 'nav-bar',
            title: 'NavBar 导航栏',
          },
          {
            path: 'sidebar',
            title: 'Sidebar 侧边导航',
          },
          {
            path: 'tab',
            title: 'Tab 标签页',
          },
          {
            path: 'tabbar',
            title: 'Tabbar 标签栏',
          },
          {
            path: 'tree-select',
            title: 'TreeSelect 分类选择',
          },
        ],
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'area',
            title: 'Area 省市区选择',
          },
          {
            path: 'card',
            title: 'Card 商品卡片',
          },
          {
            path: 'submit-bar',
            title: 'SubmitBar 提交订单栏',
          },
          {
            path: 'goods-action',
            title: 'GoodsAction 商品导航',
          },
        ],
      },
      {
        title: '废弃',
        items: [
          {
            path: 'panel',
            title: 'Panel 面板',
          },
        ],
      },
    ],
  },
};
