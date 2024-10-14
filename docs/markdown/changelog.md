# 更新日志

### [v1.11.7](https://github.com/youzan/vant-weapp/compare/v1.11.6...v1.11.7)

`2024-10-14`

**Bug Fixes**  

- notice-bar: 修复滚动速度不一致的问题 [#5910](https://github.com/youzan/vant-weapp/pull/5910)  
- uploader: 修复 `referrer-policy` 属性无效的问题 [#5909](https://github.com/youzan/vant-weapp/pull/5909)  
- stepper: 修复 `stepper` 组件无法输入小数的问题 [#5908](https://github.com/youzan/vant-weapp/pull/5908)  
- dialog: 防止嵌套对话框意外关闭 [#5907](https://github.com/youzan/vant-weapp/pull/5907)  
- steps: 解决最后一个节点描述为空时的对齐问题 [#5906](https://github.com/youzan/vant-weapp/pull/5906)  
- collapse: 确保 `border` 属性正确关闭底部边框 [#5905](https://github.com/youzan/vant-weapp/pull/5905)  
- image: 修复图片底部额外空白的问题 [#5904](https://github.com/youzan/vant-weapp/pull/5904)  

**Feature**  

- cascader: 增加 `ellipsis` 属性支持 [#5806](https://github.com/youzan/vant-weapp/pull/5806)  
- uploader: 增加 `preview-file` 属性支持 [#5828](https://github.com/youzan/vant-weapp/pull/5828)  

**Document**  

- 添加新的文档站点 URL [#5810](https://github.com/youzan/vant-weapp/pull/5810)  
- 设置旧域名的重定向 [#5811](https://github.com/youzan/vant-weapp/pull/5811)  

**Build**  

- 使用 GitHub 生成 changelog [#5800](https://github.com/youzan/vant-weapp/pull/5800)  
- 更新 @vant/cli 到 v7 [#5801](https://github.com/youzan/vant-weapp/pull/5801)  
- 将 `ws` 从 7.5.6 升级到 7.5.10 [#5823](https://github.com/youzan/vant-weapp/pull/5823)  
- 将 `rollup` 从 4.18.0 升级到 4.22.4 [#5897](https://github.com/youzan/vant-weapp/pull/5897) 

### [v1.11.6](https://github.com/youzan/vant-weapp/compare/v1.11.5...v1.11.6)

`2024-05-14`

**Bug Fixes**

- Cascader: 修复显示错误在 value 值清空的情况下 [#5760](https://github.com/youzan/vant-weapp/issues/5760)
- Field: 修复清除按钮显示错误在 value 默认有值的情况下 [#5792](https://github.com/youzan/vant-weapp/issues/5792)

**Document**

- Button: 补全 hover-class 属性 [ebba3b](https://github.com/youzan/vant-weapp/commit/ebba3b14a133769e7b04b7a48667cbc777c280c4)
- Stepper: 修复 onChange 事件示例代码错误 [#5778](https://github.com/youzan/vant-weapp/issues/5778)

**Feature**

- Uploader: 新增 referrer-policy 属性支持 [#5770](https://github.com/youzan/vant-weapp/issues/5770)

### [v1.11.5](https://github.com/youzan/vant-weapp/compare/v1.11.4...v1.11.5)

`2024-04-15`

**Bug Fixes**

- Transition: 修复 observeDuration 方法未实现导致的报错 [#5743](https://github.com/youzan/vant-weapp/issues/5743)
- van-stepper: 修复在设置 max 属性后 onChange 结果不受限制 [#5741](https://github.com/youzan/vant-weapp/issues/5741)

**Feature**

- input: 新增 nicknamereview 事件支持 [#5758](https://github.com/youzan/vant-weapp/issues/5758)

**Document**

- docs(quickstart): 删除不需要的引导步骤 [#5744](https://github.com/youzan/vant-weapp/pull/5744)

### [v1.11.4](https://github.com/youzan/vant-weapp/compare/v1.11.3...v1.11.4)

`2024-01-22`

**Bug Fixes**

- Transition: 修复 popup 在特定情况下无法关闭 [#5707](https://github.com/youzan/vant-weapp/issues/5707)

### [v1.11.3](https://github.com/youzan/vant-weapp/compare/v1.11.2...v1.11.3)

`2024-01-16`

**Bug Fixes**

- Cascader: 修复 title slot 不生效 [#5676](https://github.com/youzan/vant-weapp/issues/5676)
- Transition: 修复 transition 多次触发 enter 时异常 [#5699](https://github.com/youzan/vant-weapp/issues/5699)

**Feature**

- Calendar、ActionSheet、Dialog、ShareSheet: 增加 root-portal 属性支持 [#5680](https://github.com/youzan/vant-weapp/issues/5680)
- goods-action-button: 增加 custom-style 属性支持 [#5659](https://github.com/youzan/vant-weapp/issues/5659)
- Upload: 增加 mix mediaType 支持 [#5690](https://github.com/youzan/vant-weapp/issues/5690)

### [v1.11.2](https://github.com/youzan/vant-weapp/compare/v1.11.1...v1.11.2)

`2023-12-05`

**Bug Fixes**

- dialog/goods-action-button: 修复 dialog、goods-action-button 组件缺少 getRealTimePhoneNumber 事件 [#5633](https://github.com/youzan/vant-weapp/issues/5633)
- upload: 修复企业微信下图片无法上传 [#5581](https://github.com/youzan/vant-weapp/issues/5581)
- calendar/input/textarea/popup: 修复 skyline 模式下组件报错问题 [#5650](https://github.com/youzan/vant-weapp/issues/5650)

**Document**

- area: 订正 columns-num 只支持 number 类型. [#5631](https://github.com/youzan/vant-weapp/issues/5631)

### [v1.11.1](https://github.com/youzan/vant-weapp/compare/v1.11.0...v1.11.1)

`2023-10-10`

**Feature**

- icon: update @vant/icon to v3.0.1 [#5583](https://github.com/youzan/vant-weapp/issues/5583)

### [v1.11.0](https://github.com/youzan/vant-weapp/compare/v1.10.25...v1.11.0)

`2023-09-18`

**Bug Fixes**

- calendar: 修复 calendar 调用 reset 方法时丢失默认值 [#5546](https://github.com/youzan/vant-weapp/issues/5546)
- van-notice-bar: 修复 delay 属性不生效问题 [#5547](https://github.com/youzan/vant-weapp/issues/5547)

**Document**

- skeleton: 修复 custom class 文档缺失 [#5548](https://github.com/youzan/vant-weapp/issues/5548)

**Feature**

- icon: 升级 @vant/icon 到 [3.0.0](https://github.com/youzan/vant/blob/main/packages/vant-icons/CHANGELOG.md) [#5561](https://github.com/youzan/vant-weapp/issues/5561)

### [v1.10.25](https://github.com/youzan/vant-weapp/compare/v1.10.24...v1.10.25)

`2023-08-30`

**Document**

- slider: 修复 use-button-slot 文档错误 [#5534](https://github.com/youzan/vant-weapp/issues/5534)

**Feature**

- button: 增加 button-id 属性 和 agreePrivacyAuthorization 事件支持 [#5533](https://github.com/youzan/vant-weapp/issues/5533)

### [v1.10.24](https://github.com/youzan/vant-weapp/compare/v1.10.23...v1.10.24)

`2023-08-25`

**Bug Fixes**

- calendar: 增加 limit date 监听 [#5520](https://github.com/youzan/vant-weapp/issues/5520)

**Feature**

- button: 增加 agreePrivacyAuthorization open-type 支持 [#5527](https://github.com/youzan/vant-weapp/issues/5527)

### [v1.10.23](https://github.com/youzan/vant-weapp/compare/v1.10.22...v1.10.23)

`2023-07-28`

**Feature**

- dialog: 增加 confirm/cancel button slot 支持 [#5502](https://github.com/youzan/vant-weapp/issues/5502)
- Search: 增加 cursor-spacing 属性支持 [#5498](https://github.com/youzan/vant-weapp/issues/5498)

### [v1.10.22](https://github.com/youzan/vant-weapp/compare/v1.10.21...v1.10.22)

`2023-07-24`

**Bug Fixes**

- field: 修复 error message 居中错误 [#5482](https://github.com/youzan/vant-weapp/issues/5482)
- GoodsAction: 修复自定义 icon 时样式错误 [#5496](https://github.com/youzan/vant-weapp/issues/5496)
- sticky: 修复渲染位置错误再 transition 中 [#5483](https://github.com/youzan/vant-weapp/issues/5483)

### [v1.10.21](https://github.com/youzan/vant-weapp/compare/v1.10.20...v1.10.21)

`2023-07-10`

**Bug Fixes**

- uploader: 修复无法唤起选择图片框在 PC 下 [#5477](https://github.com/youzan/vant-weapp/issues/5477)

**Feature**

- button: 增加 getRealtimePhoneNumber 支持 [#5471](https://github.com/youzan/vant-weapp/issues/5471)
- calendar: 增加 default-date 为 null 支持 [#5395](https://github.com/youzan/vant-weapp/issues/5395)
- dialog: 增加确认/取消按钮外部样式类支持 [#5478](https://github.com/youzan/vant-weapp/issues/5478)
- field: 增加自定义样式类支持 [#5476](https://github.com/youzan/vant-weapp/issues/5476)
- field: 扩大 input 点击区域支持 [#5479](https://github.com/youzan/vant-weapp/issues/5479)
- Upload: 增加 videoFit 属性支持 [#5475](https://github.com/youzan/vant-weapp/issues/5475)

### [v1.10.20](https://github.com/youzan/vant-weapp/compare/v1.10.19...v1.10.20)

`2023-07-03`

**Bug Fixes**

- calendar: 修复无法选择同一天在 range 模式下 [#5451](https://github.com/youzan/vant-weapp/issues/5451)
- slider: 修复小数精度丢失问题 [#5444](https://github.com/youzan/vant-weapp/issues/5444)

**Document**

- add @inottn and @zhousg to core team [#5453](https://github.com/youzan/vant-weapp/issues/5453)
- popup: 修复文档缺失 close-icon-position 属性 [#5389](https://github.com/youzan/vant-weapp/pull/5389)
- dialog: 修复示例代码错误问题 [#5389](https://github.com/youzan/vant-weapp/pull/5389)

**Feature**

- goods-action-icon: 增加 size 属性 [#5457](https://github.com/youzan/vant-weapp/issues/5457)
- goods-action-icon: 增加 info-class 自定义样式类 [#5457](https://github.com/youzan/vant-weapp/issues/5457)
- icon: 增加 info-class 自定义样式类 [#5458](https://github.com/youzan/vant-weapp/issues/5458)

### [v1.10.19](https://github.com/youzan/vant-weapp/compare/v1.10.18...v1.10.19)

`2023-05-19`

**Bug Fixes**

- calendar: 修复日历月份标题不同步问题 [#5381](https://github.com/youzan/vant-weapp/pull/5381)
- cascader: 修复选中项目缺失和 fieldNames 不生效问题 [#5182](https://github.com/youzan/vant-weapp/pull/5185)
- cascader: 修复异步数据视图不更新问题 [#5380](https://github.com/youzan/vant-weapp/pull/5380)
- tab: 修复异步数据情况选中线向右偏移问题 [#5135](https://github.com/youzan/vant-weapp/issues/5135)

### [v1.10.18](https://github.com/youzan/vant-weapp/compare/v1.10.17...v1.10.18)

`2023-05-08`

**Bug Fixes**

- steps: 修复在竖向模式下 icon 被覆盖的问题 [#5329](https://github.com/youzan/vant-weapp/issues/5329)
- tabs: 修复 tab 较多时，slot 无法正常显示问题 [#4700](https://github.com/youzan/vant-weapp/issues/4700)

**Feature**

- field: input/change 事件增加 callback 参数 [#5345](https://github.com/youzan/vant-weapp/issues/5345)
- goods-action: goods-action-button 增加 size 属性 [#5347](https://github.com/youzan/vant-weapp/issues/5347)

### [v1.10.17](https://github.com/youzan/vant-weapp/compare/v1.10.16...v1.10.17)

`2023-05-04`

**Bug Fixes**

- icon: 修复定位样式错误在外部传入 custom-class 的情况下 [#5335](https://github.com/youzan/vant-weapp/issues/5335)
- tab: 修复 tab 被嵌套时，内部 tab 样式错误问题 [#5200](https://github.com/youzan/vant-weapp/issues/5200)
- Uploader: 替换 wx.chooseImage 为 wx.chooseMedia 解决选择图片页面刷新问题 [#5343](https://github.com/youzan/vant-weapp/issues/5343)
- van-field: 修复安卓设备下 textarea maxlength 限制不生效问题 [#5308](https://github.com/youzan/vant-weapp/issues/5308)

### [v1.10.16](https://github.com/youzan/vant-weapp/compare/v1.10.15...v1.10.16)

`2023-04-18`

**Bug Fixes**

- icon: 修复显示异常在自定义图标的模式下 [#5320](https://github.com/youzan/vant-weapp/issues/5320)
- stepper: 修复最大值在设置字符串下功能错误问题 [#5295](https://github.com/youzan/vant-weapp/issues/5295)
- tabs: 修复在部分设备下 info 样式错误问题 [#5318](https://github.com/youzan/vant-weapp/issues/5318)

### [v1.10.15](https://github.com/youzan/vant-weapp/compare/v1.10.14...v1.10.15)

`2023-04-03`

**Bug Fixes**

- calendar: 修复在 allow-same-day 和 不显示 confirm 按钮时 confirm 丢失问题 [db8981](https://github.com/youzan/vant-weapp/commit/db89819f9e3537435ac5fcc52f680affd9255c6b)

**Feature**

- van-goods-action-icon: 增加 color 属性支持 [4fd22f](https://github.com/youzan/vant-weapp/commit/4fd22f0a6b6b5ebcc37807ed3c85c3b40bd60e0c)

**hotfix**

- rate: 修复在覆盖半个星时覆盖高度不够问题 [#5294](https://github.com/youzan/vant-weapp/issues/5294)

### [v1.10.14](https://github.com/youzan/vant-weapp/compare/v1.10.13...v1.10.14)

`2023-02-27`

**Bug Fixes**

- icon: 修复在自定义 icon 时丢失 dot 组件 [#5253](https://github.com/youzan/vant-weapp/issues/5253)

**Document**

- 增加 @landluck and @wjw-gavin 到核心团队 [#5252](https://github.com/youzan/vant-weapp/issues/5252)

**Feature**

- dropdown-item: 增加 root-portal 属性支持 [#5256](https://github.com/youzan/vant-weapp/issues/5256)
- dropdown-menu: 增加 safe-area-tab-bar 属性支持 [#5257](https://github.com/youzan/vant-weapp/issues/5257)
- overlay: 增加 root-portal 属性支持 [#5255](https://github.com/youzan/vant-weapp/issues/5255)
- popup: 增加 root-portal 属性支持 [#5254](https://github.com/youzan/vant-weapp/issues/5254)

### [v1.10.13](https://github.com/youzan/vant-weapp/compare/v1.10.12...v1.10.13)

`2023-02-13`

**Bug Fixes**

- calendar: 修复 calendar 组件安全区域传参未传递给 popup 组件的问题 [db7957](https://github.com/youzan/vant-weapp/commit/db79570d98537db669730aa66d3fb3932ded4737)
- cascader: 修复 cascader 组件 onClickTab 事件没有同步 activeTab 的值导致选择异常的问题 [92ae4a](https://github.com/youzan/vant-weapp/commit/92ae4a29c0b99aa65be6a71004b795ae2650f37c)
- stepper: 修复 always-embed 申明两次警告问题 [#5231](https://github.com/youzan/vant-weapp/issues/5231)
- stepper: 修复 onblur 时在值变更的情况下 change 事件没有触发 [#5227](https://github.com/youzan/vant-weapp/issues/5227)

**Feature**

- calendar: 增加 min-range 属性支持在 multiple 模式下 [#5230](https://github.com/youzan/vant-weapp/issues/5230)
- popup: 增加 safe-area-tab-bar 属性支持 [#5194](https://github.com/youzan/vant-weapp/issues/5194)
- tabbar-item: 增加 url link-type 属性支持 [#5232](https://github.com/youzan/vant-weapp/issues/5232)
- uploader: 增加 showmenu 属性支持 [#5229](https://github.com/youzan/vant-weapp/issues/5229)

### [v1.10.12](https://github.com/youzan/vant-weapp/compare/v1.10.11...v1.10.12)

`2023-01-16`

**Bug Fixes**

- calendar: 修复在 allow-same-day 情况下初始不能选择同一天 [#5193](https://github.com/youzan/vant-weapp/issues/5193)
- stepper: 修复在 async change 情况下外部无法更新 input 值 [#5191](https://github.com/youzan/vant-weapp/issues/5191)

**Document**

- docs(action-sheet): 修复 close-on-click-overlay 初始值书写错误 [b2fabe](https://github.com/youzan/vant-weapp/commit/b2fabe6b2b72ce1734b9123b00e78a854111d240)

**Feature**

- dropdown-menu: 增加 use-before-toggle 属性支持 [#5190](https://github.com/youzan/vant-weapp/issues/5190)
- field: 增加 extra-event-params 属性支持 [#5184](https://github.com/youzan/vant-weapp/issues/5184)

### [v1.10.11](https://github.com/youzan/vant-weapp/compare/v1.10.10...v1.10.11)

`2023-01-03`

**Bug Fixes**

- stepper: 修复显示错误的值在 blur 的情况下 [#5158](https://github.com/youzan/vant-weapp/issues/5158)
- steps: 修复额外的间距在垂直方向的情况下 [#5166](https://github.com/youzan/vant-weapp/issues/5166)
- transition: 修复 enter 时间触发多次的问题 [#5157](https://github.com/youzan/vant-weapp/issues/5157)

**Feature**

- image: 增加 webp 属性支持 [#5163](https://github.com/youzan/vant-weapp/issues/5163)
- uploader: 增加 extension 属性支持 [a80767](https://github.com/youzan/vant-weapp/commit/a80767e9c1699a9b15fb9d4bb1b552ef3fc5c8dc)

### [v1.10.10](https://github.com/youzan/vant-weapp/compare/v1.10.9...v1.10.10)

`2022-12-16`

**Bug Fixes**

- dialog: 修复在没有底部按钮时存在额外的白线 [#5141](https://github.com/youzan/vant-weapp/issues/5141)
- dropdown: 修复文案超出限制后箭头样式问题 [#5145](https://github.com/youzan/vant-weapp/issues/5145)
- button: 修复 demo 示例缺失 button 组件引入 [8ec17c](https://github.com/youzan/vant-weapp/commit/8ec17cc87da28b9f3caa5293c3710ee927eaa210)
- search: 优化取消按钮的点击区域 [#5148](https://github.com/youzan/vant-weapp/issues/5148)
- uploader: 修复无法预览视频问题 [#5142](https://github.com/youzan/vant-weapp/issues/5142)

**Document**

- cascader: 增加 cascader 文档链接 [4bb9e6](https://github.com/youzan/vant-weapp/commit/4bb9e625381dee97fbe2e6d3c1602365ab2c41c5)
- uploader: 优化 thumb 字段文案描述 [af7493](https://github.com/youzan/vant-weapp/commit/af74936bdc9a665dfdd024a2e85be66fabf3133d)

**Feature**

- tab: 新增 before-change 属性支持 [#5139](https://github.com/youzan/vant-weapp/issues/5139)

### [v1.10.9](https://github.com/youzan/vant-weapp/compare/v1.10.8...v1.10.9)

`2022-12-12`

**Bug Fixes**

- slider: 修复文档示例值错误 [#5128](https://github.com/youzan/vant-weapp/issues/5128)
- tab: 修复在开启微信工具热更新时出现堆栈溢出问题 [#5125](https://github.com/youzan/vant-weapp/issues/5125)
- transition: 修复页面切后台后无法触发 transition 相关组件更新 [#5131](https://github.com/youzan/vant-weapp/issues/5131)

**Feature**

- cascader: 新增 cascader 组件 [#4992](https://github.com/youzan/vant-weapp/issues/4992)

### [v1.10.8](https://github.com/youzan/vant-weapp/compare/v1.10.7...v1.10.8)

`2022-11-29`

**Bug Fixes**

- slider: 修复快速滑动时 value 可能错误问题 [#5112](https://github.com/youzan/vant-weapp/issues/5112)
- tabs: 修复初始化加载时选中状态动画问题 [#5115](https://github.com/youzan/vant-weapp/issues/5115)

**Document**

- Calendar: 修复示例代码错误问题 [c55c78](https://github.com/youzan/vant-weapp/commit/c55c785a9ed67e0801c693d61b1e7e691bd19cf1)
- fix(stepper): 修复 stepper blur 事件失焦时会触发 change 事件 [8b441d](https://github.com/youzan/vant-weapp/commit/8b441de1a6a0d439913d6a582d954331ff17e1fa)

**Feature**

- dialog: 增加 custom-class 属性支持 [#5102](https://github.com/youzan/vant-weapp/issues/5102)
- uploader: 增加 media-type 属性支持 [#5113](https://github.com/youzan/vant-weapp/issues/5113)

### [v1.10.7](https://github.com/youzan/vant-weapp/compare/v1.10.6...v1.10.7)

`2022-11-18`

**Bug Fixes**

- search: 增加 value 默认 props 定义 [697746](https://github.com/youzan/vant-weapp/commit/697746fb470e9e16476f3fe95c15e4448ca9d686)

**Document**

- collapse: 增加 right-icon 额外使用说明 [d39b35](https://github.com/youzan/vant-weapp/commit/d39b35fc3a1d4b913d7b94bb45b3e861e3cee79e)

**Feature**

- action-sheet: 增加自定义样式能力支持 [#5097](https://github.com/youzan/vant-weapp/issues/5097)
- dropdown-menu: 增加多个自定义样式能力支持 [#5099](https://github.com/youzan/vant-weapp/issues/5099)

### [v1.10.6](https://github.com/youzan/vant-weapp/compare/v1.10.5...v1.10.6)

`2022-11-06`

**Bug Fixes**

- van-tabs: 修复插件内使用 van-tabs 切换 tab 报错的问题 [#5073](https://github.com/youzan/vant-weapp/issues/5073)
- button: 修复 button 在 disabeld 或 loading 时能触发 active 状态问题 [#5084](https://github.com/youzan/vant-weapp/issues/5084)
- mixin: 修复 page-scroll mixin 函数监听没有收回问题 [#5086](https://github.com/youzan/vant-weapp/issues/5086)
- overlay: 修复 custom-class 不生效问题 [#5083](https://github.com/youzan/vant-weapp/issues/5083)
- slider: 修复 slider 在 value 小于 step 无法滑动问题 [#5079](https://github.com/youzan/vant-weapp/issues/5079)

**Feature**

- Dialog: option context 支持传入函数 [#5043](https://github.com/youzan/vant-weapp/issues/5043)

### [v1.10.5](https://github.com/youzan/vant-weapp/compare/v1.10.4...v1.10.5)

`2022-09-07`

**Feature**

- Dialog: messageAlign 属性支持传 justify [#5034](https://github.com/youzan/vant-weapp/issues/5034)
- Notify: 支持 setDefaultOptions 和 resetDefaultOptions 方法 [#5028](https://github.com/youzan/vant-weapp/issues/5028)
- toast: context 选项支持传入函数 [#5022](https://github.com/youzan/vant-weapp/issues/5022)

**Bug Fixes**

- Calendar: 修复 getDay 和 getUTCDay 有时间差，导致星期错位的问题 [#4883](https://github.com/youzan/vant-weapp/issues/4883)

### [v1.10.4](https://github.com/youzan/vant-weapp/compare/v1.10.3...v1.10.4)

`2022-07-23`

**Feature**

- Button: 新增 chooseavatar 事件 [#4976](https://github.com/youzan/vant-weapp/issues/4976)

**Bug Fixes**

- NavBar: 修复因 `box-sizing: border-box` 导致导航栏高度不正确问题 [#4969](https://github.com/youzan/vant-weapp/issues/4969)

### [v1.10.3](https://github.com/youzan/vant-weapp/compare/v1.10.2...v1.10.3)

`2022-05-02`

**Feature**

- Area: 新增 show-toolbar 属性 [#4752](https://github.com/youzan/vant-weapp/issues/4752)
- CollapseItem: 新增 size 属性 [#4829](https://github.com/youzan/vant-weapp/issues/4829)
- uploader: preview-size 属性类型支持 Array 自定义宽高 [#4798](https://github.com/youzan/vant-weapp/issues/4798)

**Bug Fixes**

- Calendar: 修复设置 maxDate 和 minDate 后，周几显示不正确的问题 [#4742](https://github.com/youzan/vant-weapp/issues/4742)
- NoticeBar: 修复无法从初始最左侧位置开始滚动的问题 [#4746](https://github.com/youzan/vant-weapp/issues/4746)

### [v1.10.2](https://github.com/youzan/vant-weapp/compare/v1.10.1...v1.10.2)

`2022-01-11`

**Bug Fixes**

- build: 修复编译时 dts 文件丢失 [#4741](https://github.com/youzan/vant-weapp/issues/4741)
- Calendar: 修复 row-height 样式问题 [#4733](https://github.com/youzan/vant-weapp/issues/4733)
- ShareSheet: 修复 点击文字 时 未触发小程序开放能力 [#4739](https://github.com/youzan/vant-weapp/pull/4739)

### [v1.10.1](https://github.com/youzan/vant-weapp/compare/v1.10.0...v1.10.1)

`2022-01-04`

**Bug Fixes**

- NoticeBar: 移除 默认 icon 尺寸 [#4692](https://github.com/youzan/vant-weapp/issues/4692)
- Tab: 修复 滑动失效问题 [#4715](https://github.com/youzan/vant-weapp/issues/4715)

**Document**

- quickstart: 增加 用户隐私保护 说明 [#4711](https://github.com/youzan/vant-weapp/issues/4711)

**Feature**

- GoodsAction: 增加 GoodsActionIcon 组件的 class-prefix 属性 [#4712](https://github.com/youzan/vant-weapp/issues/4712)

### [v1.10.0](https://github.com/youzan/vant-weapp/compare/v1.9.2...v1.10.0)

`2021-12-21`

**Bug Fixes**

- page-scroll: 修复当 vanPageScroller 为 undefined 时报错 [#4640](https://github.com/youzan/vant-weapp/issues/4640)
- Switch: 修复当使用 active-value 时 自定义颜色失效 [#4645](https://github.com/youzan/vant-weapp/issues/4645)
- Toast: 修复当 type 为 success/error 时 toast 样式不正确 [#4587](https://github.com/youzan/vant-weapp/issues/4587)

**Document**

- NoticeBar: 修复文档中 单位标识 错误 [#4641](https://github.com/youzan/vant-weapp/issues/4641)

**Feature**

- Stepper: 新增 always-embed 属性 [#4678](https://github.com/youzan/vant-weapp/issues/4678)

### [v1.9.2](https://github.com/youzan/vant-weapp/compare/v1.9.1...v1.9.2)

`2021-10-28`

**Bug Fixes**

- Calendar: 选择最小可选日期范围 [#4569](https://github.com/youzan/vant-weapp/issues/4569)
- Collapse: 修复多次点击失效问题 [#4567](https://github.com/youzan/vant-weapp/issues/4567)
- Tab: 修复卡片模式标签页样式问题 [#4582](https://github.com/youzan/vant-weapp/issues/4582)
- Tab: 修复多指滑动多个标签问题 [#4539](https://github.com/youzan/vant-weapp/issues/4539)

**Feature**

- DropdownMenu: 新增 --dropdown-menu-box-shadow CssVariable [#4565](https://github.com/youzan/vant-weapp/issues/4565)
- DropdownMenu: 新增 custom-class [#4583](https://github.com/youzan/vant-weapp/issues/4583)
- Field: 新增 always-embed 属性 [#4571](https://github.com/youzan/vant-weapp/issues/4571)
- Toast: 支持 html type [#4581](https://github.com/youzan/vant-weapp/issues/4581)

### [v1.9.1](https://github.com/youzan/vant-weapp/compare/v1.9.0...v1.9.1)

`2021-09-29`

**Bug Fixes**

- CheckBox: 移除无用方法 [#4527](https://github.com/youzan/vant-weapp/issues/4527)
- Slider: 修复 vertical 属性导致点击无效问题 [#4532](https://github.com/youzan/vant-weapp/issues/4532)

**Document**

- Calendar: Day 数据结构增加 className 属性说明 [#4524](https://github.com/youzan/vant-weapp/issues/4524)

**Feature**

- Calendar: 增加 readonly 属性 [#4529](https://github.com/youzan/vant-weapp/issues/4529)

### [v1.9.0](https://github.com/youzan/vant-weapp/compare/v1.8.7...v1.9.0)

`2021-09-27`

**Bug Fixes**

- Slider: 移除 theme mixin [#4520](https://github.com/youzan/vant-weapp/issues/4520)
- Tab: 修复初始位置不正确问题 [#4521](https://github.com/youzan/vant-weapp/issues/4521)

**Document**

- ActionSheet: 添加 show 属性说明 [#4518](https://github.com/youzan/vant-weapp/issues/4518)

**Feature**

- Slider: 添加 vertical 属性 [#4486](https://github.com/youzan/vant-weapp/issues/4486)

**Performance**

- 移除 CSS variables 兼容代码 [#4487](https://github.com/youzan/vant-weapp/issues/4487)

### [v1.8.7](https://github.com/youzan/vant-weapp/compare/v1.8.6...v1.8.7)

`2021-09-22`

**Features**

- Icons: 新增 guide-o 图标 [#4507](https://github.com/youzan/vant-weapp/issues/4507)

### [1.8.6](https://github.com/youzan/vant-weapp/compare/v1.8.5...v1.8.6)

`2021-09-20`

**Features**

- Calendar: 新增 confirmDisabledText 默认文案 [#4490](https://github.com/youzan/vant-weapp/issues/4490)) ([8629da1](https://github.com/youzan/vant-weapp/commit/8629da1b75bb50e2f0a99905de90fd85015fb785)

**Bug Fixes**

- 移除 optionalTypes [#4501](https://github.com/youzan/vant-weapp/issues/4501)) ([3afe10c](https://github.com/youzan/vant-weapp/commit/3afe10c0f929e5c6b0f32ca34de9dc8d05c8c016)
- Docs: 修复文档错误 [#4489](https://github.com/youzan/vant-weapp/issues/4489)

### [1.8.5](https://github.com/youzan/vant-weapp/compare/v1.8.4...v1.8.5)

`2021-09-15`

**Bug Fixes**

- Calendar: 修复超出选择范围 toast 提示一直存在问题 [#4474](https://github.com/youzan/vant-weapp/issues/4474)
- page-scroll: 修复 isDef 取反问题 [#4488](https://github.com/youzan/vant-weapp/issues/4488)

### [1.8.4](https://github.com/youzan/vant-weapp/compare/v1.8.3...v1.8.4)

`2021-09-07`

**Bug Fixes**

- page-scroll: 修复 getCurrentPage 为空时报错 [#4458](https://github.com/youzan/vant-weapp/issues/4458)

**Features**

- Field: 新增 clear-trigger 属性 [#4461](https://github.com/youzan/vant-weapp/issues/4461)
- Search: 新增 clear-icon 属性 [#4463](https://github.com/youzan/vant-weapp/issues/4463)
- Search: 新增 clear-trigger 属性 [9e17b13](https://github.com/youzan/vant-weapp/commit/9e17b13164e57ff09140d755870853f702a89a39)
- Slider: 新增 range 属性 [#4442](https://github.com/youzan/vant-weapp/issues/4442)

### [v1.8.3](https://github.com/youzan/vant-weapp/compare/v1.8.2...v1.8.3)

`2021-08-30`

**Bug Fixes**

- Calendar: 修复 default-date 属性失效问题 [#4430](https://github.com/youzan/vant-weapp/issues/4430)
- ShareSheet: 调整 overlayStyle 属性类型为 string [8c408e2](https://github.com/youzan/vant-weapp/commit/8c408e23030e65a0baf62f0b21fb8ed3f2c9df67)
- Stepper: 调整 minus/plus slots 位置 [#4427](https://github.com/youzan/vant-weapp/issues/4427)
- Sticky: 修复 root 为 null 时，读取 root.top 报错问题 [#4433](https://github.com/youzan/vant-weapp/issues/4433)
- Calendar: 调整 minDate 和 maxDate 传值类型为 Number [37d8e69](https://github.com/youzan/vant-weapp/commit/37d8e697c9e3d985b926f68553b8afbb5c0a0569)

**Features**

- Popup: 新增 lock-scroll 属性 [#4384](https://github.com/youzan/vant-weapp/issues/4384)

**Performance Improvements**

- Radio: label 的 margin-left 改为 padding-left，增大可点击区域，增强用户体验 [#4165](https://github.com/youzan/vant-weapp/issues/4165)

### [v1.8.2](https://github.com/youzan/vant-weapp/compare/v1.8.1...v1.8.2)

`2021-08-18`

**Bug Fixes**

- Calendar: 修复 template 引用路径不是相对路径的问题 [7f7cf6](https://github.com/youzan/vant-weapp/commit/7f7cf62ee0f675ad6b86d41f70b23336e7ddc7a1)
- Field: 修复 template 引用路径不是相对路径的问题 [6dd42a](https://github.com/youzan/vant-weapp/commit/6dd42a0473578e26e5f5f96158959e56689f68b6)

### [v1.8.1](https://github.com/youzan/vant-weapp/compare/v1.8.0...v1.8.1)

`2021-08-18`

**Feature**

- Calendar: 新增 click-subtitle 事件 [#4385](https://github.com/youzan/vant-weapp/issues/4385)
- Circle: 使用 setTimeout 代替 setInterval [#4401](https://github.com/youzan/vant-weapp/issues/4401)

**Bug Fixes**

- Picker: 修复 template 引用路径不是相对路径的问题 [#4408](https://github.com/youzan/vant-weapp/issues/4408)

### [v1.8.0](https://github.com/youzan/vant-weapp/compare/v1.7.2...v1.8.0)

`2021-08-11`

**Feature**

- Overlay: 新增 lock-scroll 属性 [#4383](https://github.com/youzan/vant-weapp/issues/4383)
- search: 新增 click-input 事件 [#4357](https://github.com/youzan/vant-weapp/issues/4357)

**Performance**

- 移除了 iOS8 相关的 polyfill，减少包体积 [#4395](https://github.com/youzan/vant-weapp/issues/4395)

### [v1.7.2](https://github.com/youzan/vant-weapp/compare/v1.7.1...v1.7.2)

`2021-07-19`

**Bug Fixes**

- Calendar: 初始日期设置为当前日期 [#4339](https://github.com/youzan/vant-weapp/issues/4339)

**Features**

- Cell: CellGroup 新增 inset 属性 [#4341](https://github.com/youzan/vant-weapp/issues/4341)
- Search: 新增 click-input 事件 [#4337](https://github.com/youzan/vant-weapp/issues/4337)

### [1.7.1](https://github.com/youzan/vant-weapp/tree/v1.7.1)

`2021-07-06`

**Bug Fixes**

- Col: 修复样式问题 [#4322](https://github.com/youzan/vant-weapp/issues/4322)
- Grid: 增加 icon-prefix 属性默认值 [#4318](https://github.com/youzan/vant-weapp/issues/4318)
- IndexBar: 修复当索引列表为空时报错 [#4310](https://github.com/youzan/vant-weapp/issues/4310)

### [1.7.0](https://github.com/youzan/vant-weapp/tree/v1.7.0)

`2021-07-04`

**Bug Fixes**

- Button: 修复 type 为 getUserInfo & wx.getUserProfile 可用时 lang 参数失效 [#4250](https://github.com/youzan/vant-weapp/issues/4250)
- ShareSheet: 新增内置 icon `weapp-qrcode` `wechat-moments` [#4256](https://github.com/youzan/vant-weapp/issues/4256)

**Features**

- Checkbox: 增加 direction 属性，设置排列方向 [#4265](https://github.com/youzan/vant-weapp/issues/4265)
- ConfigProvider: 增加全局配置组件 [#4279](https://github.com/youzan/vant-weapp/issues/4279)
- Grid: 增加 reverse 属性，支持文本&图片位置互换 [#4280](https://github.com/youzan/vant-weapp/issues/4280)
- GridItem: 增加 icon-prefix 属性，支持第三方字体 [#4276](https://github.com/youzan/vant-weapp/issues/4276)
- Rate: 增加更多 css 变量 [#4297](https://github.com/youzan/vant-weapp/issues/4297)
- Slider: 增加更多 css 变量 [#4305](https://github.com/youzan/vant-weapp/issues/4305)

**Improvements**

- wxs style 方法支持驼峰变量命名，以便能更好的在 wxml 中使用 [#4281](https://github.com/youzan/vant-weapp/issues/4281)

### [1.6.9](https://github.com/youzan/vant-weapp/tree/v1.6.9)

`2021-06-06`

**Bug Fixes**

- DatetimePicker: 修复 动态设置 min-hour min-date 显示不正确 [#4245](https://github.com/youzan/vant-weapp/issues/4245)
- Tabs: 修复 tab 数量较多时滚动距离不正确 [#4202](https://github.com/youzan/vant-weapp/issues/4202)
- Uploader: 修复 demo 中 beforeRead 报错 [#4235](https://github.com/youzan/vant-weapp/issues/4235)

### [1.6.9-beta.2](https://github.com/youzan/vant-weapp/tree/v1.6.9-beta.2)

`2021-05-22`

**Bug Fixes**

- Button: 修复 open-type 不生效 [#4222](https://github.com/youzan/vant-weapp/issues/4222)
- Calendar: 修复 allow-same-day 开启时 custom-color 属性无效 [#4200](https://github.com/youzan/vant-weapp/issues/4200)
- Circle: 修复 value 是小数时抖动的情况 [#4152](https://github.com/youzan/vant-weapp/issues/4152)
- NoticeBar: 调整滚动行为 [#4201](https://github.com/youzan/vant-weapp/issues/4201)
- NoticeBar: 修复不正确的滚动速度 [cde3876](https://github.com/youzan/vant-weapp/commit/cde3876fb0742cacf3e481a8eb2b487dabc8709e)
- Radio: 支持动态设置 disabled [#4191](https://github.com/youzan/vant-weapp/issues/4191)
- Rate: 支持滑动选择半星 [#4195](https://github.com/youzan/vant-weapp/issues/4195)

**Features**

- Calendar: 增加 first-day-of-week 属性，设置周起始日 [#4211](https://github.com/youzan/vant-weapp/issues/4211)
- Calendar: 增加 show-range-prompt 属性和 over-range 事件，设置是否展示提示文案 [#4212](https://github.com/youzan/vant-weapp/issues/4212)
- Icons: 图标库迁移至 iconfont.cn [#4219](https://github.com/youzan/vant-weapp/issues/4219)
- OpenType: 支持 getUserProfile [#4203](https://github.com/youzan/vant-weapp/issues/4203)
- Panel: 移除 useFooterSlot [#4205](https://github.com/youzan/vant-weapp/issues/4205)

### [1.6.8](https://github.com/youzan/vant-weapp/tree/v1.6.8)

`2021-02-26`

**Features**

- NoticeBar: 新增默认插槽 ([#4048](https://github.com/youzan/vant-weapp/pull/4048))
- Stepper: 新增 theme 属性，支持圆形风格 ([#4049](https://github.com/youzan/vant-weapp/pull/4049))
- Stepper: 新增 plus & minus 插槽 ([#4049](https://github.com/youzan/vant-weapp/pull/4049))

**Bug Fixes**

- Checkbox: 修复 label-position 属性无效 ([#4036](https://github.com/youzan/vant-weapp/pull/4036))
- Dialog: 修复 beforeClose 方法类型定义 ([#4019](https://github.com/youzan/vant-weapp/pull/4019))

**Improvements**

- Circle: 当内置 canvas 不支持同层渲染时降级至默认 type ([#4050](https://github.com/youzan/vant-weapp/pull/4050))

### [1.6.7](https://github.com/youzan/vant-weapp/tree/v1.6.7)

`2021-01-27`

**Features**

- Radio: 新增 `direction` 属性 ([#4007](https://github.com/youzan/vant-weapp/issues/4007))

**Bug Fixes**

- Icons: 修复部分地区图标不显示 ([#4012](https://github.com/youzan/vant-weapp/issues/4012))
- Transition: 修复默认设置 `show` 属性为 `true` 时不生效 ([#4005](https://github.com/youzan/vant-weapp/issues/4005))

### [1.6.6](https://github.com/youzan/vant-weapp/tree/v1.6.6)

`2021-01-21`

**Features**

- Uploader: 支持文件预览 ([#3975](https://github.com/youzan/vant-weapp/pull/3975))

**Bug Fixes**

- Picker: 修复标题栏无法显示 ([#3973](https://github.com/youzan/vant-weapp/pull/3973))

**Improvements**

- Calendar: 优化模板代码 ([#3972](https://github.com/youzan/vant-weapp/pull/3972))

### [1.6.5](https://github.com/youzan/vant-weapp/tree/v1.6.5)

`2021-01-19`

**Features**

- Field: 新增 input 插槽 ([#3932](https://github.com/youzan/vant-weapp/pull/3932))
- Field: 新增 click-input 事件 ([#3932](https://github.com/youzan/vant-weapp/pull/3932))
- Icon: 新增 delete-o、sort、font、font-o、revoke 图标 ([#3881](https://github.com/youzan/vant-weapp/pull/3881))

**Bug Fixes**

- Button: 修复 custom-style 属性不生效 ([#3903](https://github.com/youzan/vant-weapp/pull/3903))
- Dialog: 修复 close-on-click-overlay 属性不生效 ([#3913](https://github.com/youzan/vant-weapp/pull/3913))

**Improvements**

- Cell: 优化性能 ([#3888](https://github.com/youzan/vant-weapp/issues/3888))
- Col: 优化性能 ([#3886](https://github.com/youzan/vant-weapp/issues/3886))
- Divider: 优化性能 ([#3887](https://github.com/youzan/vant-weapp/issues/3887))
- Empty: 优化性能 ([#3933](https://github.com/youzan/vant-weapp/issues/3933))
- Loading: 优化性能 ([#3892](https://github.com/youzan/vant-weapp/issues/3892))
- Notice-bar: 优化性能 ([#3891](https://github.com/youzan/vant-weapp/issues/3891))
- Notify: 优化性能 ([#3893](https://github.com/youzan/vant-weapp/issues/3893))
- Picker: 优化性能 ([#3949](https://github.com/youzan/vant-weapp/issues/3949))
- Stepper: 优化性能 ([#3890](https://github.com/youzan/vant-weapp/issues/3890))
- Sticky: 优化性能 ([#3879](https://github.com/youzan/vant-weapp/issues/3879))
- SwipeCell: 优化性能 ([#3928](https://github.com/youzan/vant-weapp/issues/3928))
- Switch: 优化性能 ([#3889](https://github.com/youzan/vant-weapp/issues/3889))
- Tag: 优化性能 ([#3894](https://github.com/youzan/vant-weapp/issues/3894))
- Transition: 优化性能 ([#3895](https://github.com/youzan/vant-weapp/issues/3895))
- Uploader: 优化性能 ([#3897](https://github.com/youzan/vant-weapp/issues/3897))

### [1.6.4](https://github.com/youzan/vant-weapp/tree/v1.6.4)

`2020-12-18`

**Improvements**

- Tab: 优化粘性布局时的渲染性能 ([#3875](https://github.com/youzan/vant-weapp/pull/3875))
- Grid: 使用 wxs 优化性能 ([#3839](https://github.com/youzan/vant-weapp/pull/3868))
- Image: 使用 wxs 优化性能 ([#3839](https://github.com/youzan/vant-weapp/pull/3868))
- Button: 使用 wxs 优化性能 ([#3839](https://github.com/youzan/vant-weapp/pull/3839))
- Icon: 减少代码体积 ([#3839](https://github.com/youzan/vant-weapp/pull/3868))
- Checkbox: 减少代码体积 ([#3839](https://github.com/youzan/vant-weapp/pull/3868))
- Slider: 减少代码体积 ([#3839](https://github.com/youzan/vant-weapp/pull/3868))

**Bug Fixes**

- Calendar: 修复在 phone 设备上选择日期后显示错误 ([#3833](https://github.com/youzan/vant-weapp/pull/3833))
- GoodsAction: 修复部分设备上高度异常 ([#3865](https://github.com/youzan/vant-weapp/pull/3865))
- Slider: 修复设置 `max` `min` 时滑动不均匀 ([#3876](https://github.com/youzan/vant-weapp/pull/3876))
- Tab: 修复切换时内容区闪烁的问题 ([#3866](https://github.com/youzan/vant-weapp/pull/3866))

### [1.6.3](https://github.com/youzan/vant-weapp/tree/v1.6.3)

`2020-12-09`

**Features**

- Dialog: 新增 `beforeClose` 属性 ([#3815](https://github.com/youzan/vant-weapp/pull/3815))
- uploader: 新增若干 CSS 变量 ([#3797](https://github.com/youzan/vant-weapp/pull/3797))
- Aarea: 支持不传入 `county_list` 数据 ([#3824](https://github.com/youzan/vant-weapp/pull/3824))
- Tab: 新增 `resize` 方法 ([#3827](https://github.com/youzan/vant-weapp/pull/3827))

**Improvements**

- Collapse: 使用 animate 提升动画性能 ([#3826](https://github.com/youzan/vant-weapp/pull/3826))
- Tab: 优化样式拼装性能 ([#3827](https://github.com/youzan/vant-weapp/pull/3827))

**Bug Fixes**

- Field: 修复输入中文时显示字数暂时超出 maxlength ([#3802](https://github.com/youzan/vant-weapp/pull/3802))
- Info: 修复样式错误 ([#3823](https://github.com/youzan/vant-weapp/pull/3823))
- NavBar: 修复动态渲染时组件报错 ([#3822](https://github.com/youzan/vant-weapp/pull/3822))
- Progress: 修复 `percentage` 为 0 时样式异常 ([#3808](https://github.com/youzan/vant-weapp/pull/3808))

### [1.6.2](https://github.com/youzan/vant-weapp/tree/v1.6.2)

`2020-11-29`

**Features**

- Tabbar: 新增 `placeholder` `icon-prefix` 属性 ([#3792](https://github.com/youzan/vant-weapp/pull/3792))

**Bug Fixes**

- DatetimePicker: 修复 `type=year-month` 时选择出现报错 ([#3783](https://github.com/youzan/vant-weapp/pull/3783))
- Info: 修复部分安卓设备中文案不完全居中 ([#3778](https://github.com/youzan/vant-weapp/pull/3778))
- Tab: 修复 `ellipsis` 为 `false` 时下划线位置不正确 ([#3777](https://github.com/youzan/vant-weapp/pull/3777))
- Notify: 修复组件未全局居中 ([#3751](https://github.com/youzan/vant-weapp/pull/3751))

**Improvements**

- Icon: 使用 wxs 优化性能 ([#3791](https://github.com/youzan/vant-weapp/pull/3791))

### [1.6.1](https://github.com/youzan/vant-weapp/tree/v1.6.1)

`2020-11-12`

**Bug Fixes**

- Field: 修复未传入 `label` 属性时仍渲染 label [#3756](https://github.com/youzan/vant-weapp/pull/3756)
- Picker: 修复 confirm、cancel 事件报错 [#3755](https://github.com/youzan/vant-weapp/pull/3755)

### [1.6.0](https://github.com/youzan/vant-weapp/tree/v1.6.0)

`2020-11-11`

**Features**

- SwipeCell: 新增外部样式类 `custom-class` [#3678](https://github.com/youzan/vant-weapp/pull/3678)
- ActionSheet: 调整取消文字颜色至 @gray-7 [#3719](https://github.com/youzan/vant-weapp/pull/3719)
- ActionSheet: 调整顶部栏样式 [#3720](https://github.com/youzan/vant-weapp/pull/3720)
- ActionSheet: 调整加载图标大小至 22px [#3718](https://github.com/youzan/vant-weapp/pull/3718)
- ActionSheet: 调整描述文字样式 [#3726](https://github.com/youzan/vant-weapp/pull/3726)
- Cell: 调整图标外边距至 4px [#3721](https://github.com/youzan/vant-weapp/pull/3721)
- DropdownMenu: 增加默认阴影 [#3723](https://github.com/youzan/vant-weapp/pull/3723)
- DropdownMenu: 调整选中态默认颜色至 #ee0a24 [#3725](https://github.com/youzan/vant-weapp/pull/3725)
- Image: 调整图标大小至 36px [#3724](https://github.com/youzan/vant-weapp/pull/3724)
- Popup: 调整圆角至 16px [#3713](https://github.com/youzan/vant-weapp/pull/3713)
- Search: 调整左侧内边距至 12px [#3716](https://github.com/youzan/vant-weapp/pull/3716)
- Sidebar: 调整宽度至 85px [#3722](https://github.com/youzan/vant-weapp/pull/3722)
- TabbarItem: 调整图标大小至 22px [#3717](https://github.com/youzan/vant-weapp/pull/3717)

**Bug Fixes**

- Field: 修复使用 `label` 属性时 `label-class` 样式类不生效 [#3729](https://github.com/youzan/vant-weapp/pull/3729)
- NoticeBar: 修复内容较短时开启 `scrollable` 不生效 [#3727](https://github.com/youzan/vant-weapp/pull/3727)
- SidebarItem: 修复长数字不换行的问题 [#3714](https://github.com/youzan/vant-weapp/pull/3714)
- Tag: 默认字体加入 miui [#3715](https://github.com/youzan/vant-weapp/pull/3715)

### [1.5.2](https://github.com/youzan/vant-weapp/tree/v1.5.2)

`2020-10-15`

**Features**

- Uploader: 标准化 file-list 与事件参数 [#3673](https://github.com/youzan/vant-weapp/pull/3673)
- Uploader: 新增 thumb，支持缩略图展示 [#3673](https://github.com/youzan/vant-weapp/pull/3673)
- GoodsAction: 新增若干 CSS 变量 [#3654](https://github.com/youzan/vant-weapp/pull/3654)
- 移动 @types/wechat-miniprogram 至 dependencies [#3654](https://github.com/youzan/vant-weapp/pull/3674)

**Bug Fixes**

- Button: 修复细边框样式问题 [#3653](https://github.com/youzan/vant-weapp/pull/3653)
- Tab: 重构动画实现，不再使用 `transform` [#3668](https://github.com/youzan/vant-weapp/pull/3668)

### [1.5.1](https://github.com/youzan/vant-weapp/tree/v1.5.1)

`2020-09-29`

**Features**

- Card: 新增 `origin-price` `tag` 插槽 [#3645](https://github.com/youzan/vant-weapp/pull/3645)
- ShareSheet: 调整默认 z-index 至 100 [#3575](https://github.com/youzan/vant-weapp/pull/3575)
- ShareSheet: 新增 item 属性 openType [#3575](https://github.com/youzan/vant-weapp/pull/3575)
- Uploader: 扩大删除按钮点击区域 [#3631](https://github.com/youzan/vant-weapp/pull/3631)

**Bug Fixes**

- Uploader: 支持预览视频 [#3594](https://github.com/youzan/vant-weapp/pull/3594)
- Dialog: 调整类型定义 [#3630](https://github.com/youzan/vant-weapp/pull/3630)
- NavBar: 修复 CSS 变量 --nav-bar-icon-color 不生效 [#3643](https://github.com/youzan/vant-weapp/pull/3643)
- NavBar: 修复未设置 title 时样式异常 [#3643](https://github.com/youzan/vant-weapp/pull/3643)
- Tab: 修复 line-width 属性不支持 string [#3628](https://github.com/youzan/vant-weapp/pull/3628)

### [1.5.0](https://github.com/youzan/vant-weapp/tree/v1.5.0)

`2020-08-27`

**Features**

- ShareSheet: 新增组件 [#3559](https://github.com/youzan/vant-weapp/pull/3559)
- Icons: 升级 @vant/icons 至 v1.2.5 [#3539](https://github.com/youzan/vant-weapp/pull/3539)
- sidebar: 新增 badge 属性 [#3564](https://github.com/youzan/vant-weapp/pull/3564)
- Tabs: 调整默认 line-width 至 40px [#3518](https://github.com/youzan/vant-weapp/pull/3518)
- Tabs: 去除默认边框 [#3519](https://github.com/youzan/vant-weapp/pull/3519)
- TreeSelect: 新增 selected-icon 属性 [#3565](https://github.com/youzan/vant-weapp/pull/3565)
- TreeSelect: 支持 badge、dot 显示 [#3565](https://github.com/youzan/vant-weapp/pull/3565)

**Bug Fixes**

- collapse: 修复嵌套在 popup 等组件中时默认展开无效 [#3562](https://github.com/youzan/vant-weapp/pull/3562)
- empty: 修复 image、description 插槽不生效 [#3563](https://github.com/youzan/vant-weapp/pull/3563)

### [1.4.4](https://github.com/youzan/vant-weapp/tree/v1.4.4)

`2020-08-12`

**Bug Fixes**

- Transition: 重构组件以修复卡顿问题 [#3498](https://github.com/youzan/vant-weapp/pull/3498)
- Icon: 修复数字未对齐 [#3501](https://github.com/youzan/vant-weapp/pull/3501)
- Tab: 修复可滚动时下划线位置错误 [#3511](https://github.com/youzan/vant-weapp/pull/3511)

### [v1.4.3](https://github.com/youzan/vant-weapp/tree/v1.4.3)

`2020-08-07`

**Features**

- Dialog: 增加圆角按钮样式 [#3476](https://github.com/youzan/vant-weapp/pull/3476)
- Cell: 调整下划线位置 [#3487](https://github.com/youzan/vant-weapp/pull/3487)
- Tab: 调整默认滚动阈值至 5 个、优化样式 [#3459](https://github.com/youzan/vant-weapp/pull/3459)

### [v1.4.2](https://github.com/youzan/vant-weapp/tree/v1.4.2)

`2020-08-03`

**Features**

- Toast: 优化样式 [#3451](https://github.com/youzan/vant-weapp/pull/3451)
- Tag: 优化样式 [#3465](https://github.com/youzan/vant-weapp/pull/3465)

**Bug Fixes**

- Calendar: 修复超出 max-range 时未显示 Toast [#3466](https://github.com/youzan/vant-weapp/pull/3466)
- Tab: 修复手势滚动可切换至禁用项 [#3467](https://github.com/youzan/vant-weapp/pull/3467)

### [v1.4.1](https://github.com/youzan/vant-weapp/tree/v1.4.1)

`2020-07-28`

**Features**

- Picker: 调整默认可见的选项个数为 6 个 [#3418](https://github.com/youzan/vant-weapp/pull/3418)
- Toast: 调整圆角为 8px [#3419](https://github.com/youzan/vant-weapp/pull/3419)

**Bug Fixes**

- Slider: 修复点击会触发 drag 事件 [#3415](https://github.com/youzan/vant-weapp/pull/3415)
- Area: 修复中间列无法滚动 [#3443](https://github.com/youzan/vant-weapp/pull/3443)

### [v1.4.0](https://github.com/youzan/vant-weapp/tree/v1.4.0)

`2020-07-17`

**Features**

- Empty: 新增 Empty 组件 [\#3327](https://github.com/youzan/vant-weapp/pull/3327)
- NoticeBar: 新增 background 属性 [\#3388](https://github.com/youzan/vant-weapp/pull/3388)
- NoticeBar: 新增 close 事件 [\#3388](https://github.com/youzan/vant-weapp/pull/3388)
- GridItem: 新增 icon-color 属性 [\#3386](https://github.com/youzan/vant-weapp/pull/3386)
- NavBar: 现在 custom-style 将影响根节点[\#3371](https://github.com/youzan/vant-weapp/pull/3371)
- Cell: 新增 title-style 属性, fix Field label width [\#3370](https://github.com/youzan/vant-weapp/pull/3370)
- Uploader: 更新 failed 图标 [\#3359](https://github.com/youzan/vant-weapp/pull/3359)
- Uploader: 更新删除图标样式 [\#3385](https://github.com/youzan/vant-weapp/pull/3385)
- Uploader: 移除圆角样式 [\#3384](https://github.com/youzan/vant-weapp/pull/3384)
- Field: 更新禁用态样式 [\#3358](https://github.com/youzan/vant-weapp/pull/3358)
- Field: 更新 label 样式 [\#3357](https://github.com/youzan/vant-weapp/pull/3357)
- Picker: 调整 action button 样式 [\#3316](https://github.com/youzan/vant-weapp/pull/3316)

**Bug Fixes**

- Collapse: 使用 animation 重构动画部分逻辑以修复动画卡顿 [\#3401](https://github.com/youzan/vant-weapp/pull/3401)
- Uploader: 修复 loading 样式错误、调整 previewSize 属性默认值 [\#3317](https://github.com/youzan/vant-weapp/pull/3317)
- Area: 修复低版本基础库下 columns-num 设置为 1 或 2 时真机环境报错 [\#3318](https://github.com/youzan/vant-weapp/pull/3318)
- DatetimePicker: 修复使用 formatter 时，事件返回值可能不正确 [\#3352](https://github.com/youzan/vant-weapp/pull/3352)
- Field: 修复 textarea 模式下 label 与 value 不在同一水平线上 [\#3383](https://github.com/youzan/vant-weapp/pull/3383)
- Dialog: show dialog after class ready [\#3374](https://github.com/youzan/vant-weapp/pull/3374)
- Calendar: confirm-disabled-text 属性增加默认值 [\#3394](https://github.com/youzan/vant-weapp/pull/3394)

### [v1.3.3](https://github.com/youzan/vant-weapp/tree/v1.3.3)

`2020-06-24`

**Features**

- steps: 为每一项增加 inactiveIcon、activeIcon 属性 [\#3315](https://github.com/youzan/vant-weapp/pull/3315)
- field: 增加外部样式类 label-class [\#3311](https://github.com/youzan/vant-weapp/pull/3311)
- field: 现在总会从内部 set value 值 [\#3313](https://github.com/youzan/vant-weapp/pull/3313)
- uploader: 为每一项增加 deletable 属性 [\#3270](https://github.com/youzan/vant-weapp/pull/3270)
- uploader: 扩大删除图标的可点击区域 [\#3265](https://github.com/youzan/vant-weapp/pull/3265)

**Bug Fixes**

- tabbar: 修复 iphone-se 上高度异常 [\#3314](https://github.com/youzan/vant-weapp/pull/3314)
- grid: 修复 text 与 icon 同时设置时样式异常 [\#3310](https://github.com/youzan/vant-weapp/pull/3310)
- calendar: 修复多选模式下 default-date 属性不生效 [\#3284](https://github.com/youzan/vant-weapp/pull/3284)
- circle: 修复 type="2d" 时无法动态变更 value [\#3264](https://github.com/youzan/vant-weapp/pull/3264)
- nav-bar: 修复未设置 left-text 时左侧图标样式异常 [\#3263](https://github.com/youzan/vant-weapp/pull/3263)

### [v1.3.2](https://github.com/youzan/vant-weapp/tree/v1.3.2)

`2020-06-04`

**Features**

- button: 新增 form-type 属性 [\#3208](https://github.com/youzan/vant-weapp/pull/3208)
- grid: 新增 icon-size、badge 属性 [\#3236](https://github.com/youzan/vant-weapp/pull/3236)
- grid: 新增 direction 属性 [\#3192](https://github.com/youzan/vant-weapp/pull/3192)

**Bug Fixes**

- Grid: 修复开启 `square` 时横、纵向间距不同 [\#3231](https://github.com/youzan/vant-weapp/pull/3231)
- uploader: 修复点击删除图标时触发 click-preview 事件 [\#3230](https://github.com/youzan/vant-weapp/pull/3230)
- circle: 修复 `type="2d"` 不生效 [\#3228](https://github.com/youzan/vant-weapp/pull/3228)
- calendar: 修复在选择区间时，点击确定报错 [\#3195](https://github.com/youzan/vant-weapp/pull/3195)
- tag: 修复 css 变量名拼写错误 [\#3191](https://github.com/youzan/vant-weapp/pull/3191)

### [v1.3.1](https://github.com/youzan/vant-weapp/tree/v1.3.1)

`2020-05-24`

**Features**

- Button: 新增 class-prefix 属性 [\#3159](https://github.com/youzan/vant-weapp/pull/3159)
- Collapse: 新增 open、close 事件 [\#3176](https://github.com/youzan/vant-weapp/pull/3176)

**Bug Fixes**

- 修复控制台提示选择器错误的问题 [\#3137](https://github.com/youzan/vant-weapp/pull/3137)
- 修复 GoodsActionButton 在某些情况下报错的问题 [\#3145](https://github.com/youzan/vant-weapp/pull/3145)

### [v1.3.0](https://github.com/youzan/vant-weapp/tree/v1.3.0)

`2020-05-08`

#### 支持简易双向绑定

1.3.0 中，我们为数个表单组件支持了简易双向绑定，涉及组件有

Slider [\#3107](https://github.com/youzan/vant-weapp/pull/3107)

Search [\#3106](https://github.com/youzan/vant-weapp/pull/3106)

Rate [\#3105](https://github.com/youzan/vant-weapp/pull/3105)

**Features**

- sticky: 新增 scroll-top 属性 [\#3115](https://github.com/youzan/vant-weapp/pull/3115)
- button: 新增 dataset 属性 [\#3075](https://github.com/youzan/vant-weapp/pull/3075)
- uploader: 所有类型都会触发 click-preview 事件 [\#3071](https://github.com/youzan/vant-weapp/pull/3071)
- Uploader: 属性 accept 新增值 media [\#3047](https://github.com/youzan/vant-weapp/pull/3047)
- feat: 新增基础 font-family [\#3061](https://github.com/youzan/vant-weapp/pull/3061)
- submit-bar: 使用另一个 view 实现 safe-area-inset-bottom 以避免样式冲突 [\#3104](https://github.com/youzan/vant-weapp/pull/3104)

**Bug Fixes**

- dialog: 修复 title 多余空格的问题 [\#3069](https://github.com/youzan/vant-weapp/pull/3069)
- tab: 修复 tab 个数多时显示滚动条 [\#3072](https://github.com/youzan/vant-weapp/pull/3072)
- Sticky: 修复使用组件时页面 onPageScroll 失效 [\#3092](https://github.com/youzan/vant-weapp/pull/3092)
- button: 修复 disabled 属性对 open-type 类型的按钮无效 [\#3076](https://github.com/youzan/vant-weapp/pull/3076)

### [v1.2.2](https://github.com/youzan/vant-weapp/tree/v1.2.2)

`2020-04-21`

**Features**

- GoodsActionButton: 新增 CSS 变量 goods-action-line-height [\#3037](https://github.com/youzan/vant-weapp/pull/3037)
- Calendar: 选择区间大于 range 时自动选中最大范围 [\#3026](https://github.com/youzan/vant-weapp/pull/3026)
- Notify: 新增 top 属性 [\#3018](https://github.com/youzan/vant-weapp/pull/3018)

**Bug Fixes**

- Field: 修复未设置 autosize 时 wxs 报错 [\#3038](https://github.com/youzan/vant-weapp/pull/3038)
- Field: 避免设置 showClear 为 undefined [\#3012](https://github.com/youzan/vant-weapp/pull/3012)

### [v1.2.1](https://github.com/youzan/vant-weapp/tree/v1.2.1)

`2020-04-12`

**Features**

- Field: 支持小程序双向绑定 [\#2986](https://github.com/youzan/vant-weapp/pull/2986)
- Calendar: 多选模式下新增 unselect 事件 [\#2990](https://github.com/youzan/vant-weapp/pull/2990)

**Bug Fixes**

- IndexBar: 移除 scroll-top 属性 [\#2999](https://github.com/youzan/vant-weapp/pull/2999)
- Uploader: 修复图片后缀名为大写时未正常识别 [\#2987](https://github.com/youzan/vant-weapp/pull/2987)
- Field: 修复 autosize 属性 设置 max-height 不生效 [\#3007](https://github.com/youzan/vant-weapp/pull/3007)

### [v1.2.0](https://github.com/youzan/vant-weapp/tree/v1.2.0)

`2020-04-04`

**Features**

- TreeSelect: 更新 nav 背景色 [\#2952](https://github.com/youzan/vant-weapp/pull/2952)
- Sticky: 使用 page scroll 重构组件 [\#2950](https://github.com/youzan/vant-weapp/pull/2950)
- Field: 新增 auto-focus、disable-default-padding、cursor 属性 [\#2936](https://github.com/youzan/vant-weapp/pull/2936)
- Field: 新增 linechange、keyboardheightchange 事件 [\#2936](https://github.com/youzan/vant-weapp/pull/2936)
- Uploader: 支持显示上传状态 [\#2929](https://github.com/youzan/vant-weapp/pull/2929)
- Image: mode 属性新增 widthFix、heightFix [\#2908](https://github.com/youzan/vant-weapp/pull/2908)
- Canvas: 新增 type 属性 [\#2906](https://github.com/youzan/vant-weapp/pull/2906)
- NavBar: 新增 placeholder 属性 [\#2896](https://github.com/youzan/vant-weapp/pull/2896)

**Bug Fixes**

- Field: 修复输入过快时输入框内容不断回退 [\#2936](https://github.com/youzan/vant-weapp/pull/2936)
- Calendar: 修复 show-confirm 为 true 时组件初始化报错 [\#2951](https://github.com/youzan/vant-weapp/pull/2951)
- Tab: 修复 type 为 card 时 color 对边框无效 [\#2941](https://github.com/youzan/vant-weapp/pull/2941)

### [v1.1.0](https://github.com/youzan/vant-weapp/tree/v1.1.0)

`2020-03-21`

**Features**

- 新增 Calendar 日历组件 [\#2894](https://github.com/youzan/vant-weapp/pull/2894)
- Grid: 新增外部样式类 custom-class、content-class、icon-class、text-class [\#2882](https://github.com/youzan/vant-weapp/pull/2882)
- Steps: 新增 click 事件 [\#2874](https://github.com/youzan/vant-weapp/pull/2874)
- SideBar: 新增 title 插槽 [\#2873](https://github.com/youzan/vant-weapp/pull/2873)
- Uploader: 新增 upload-icon 属性 [\#2869](https://github.com/youzan/vant-weapp/pull/2869)
- Uploader: 新增 show-upload 属性 [\#2868](https://github.com/youzan/vant-weapp/pull/2868)
- Uploader: 更新样式、调整事件触发顺序与 vant 一致 [\#2886](https://github.com/youzan/vant-weapp/pull/2886)
- Field: 新增 show-word-limit 属性 [\#2856](https://github.com/youzan/vant-weapp/pull/2856)
- Field: autosize 属性支持传入对象，指定 maxHeight 与 minHeight [\#2856](https://github.com/youzan/vant-weapp/pull/2856)
- Field: 新增若干 CSS 变量 [\#2856](https://github.com/youzan/vant-weapp/pull/2856)

**Bug Fixes**

- Button: 移除 lang 属性默认值 [\#2883](https://github.com/youzan/vant-weapp/pull/2883)
- Button: 修复 disabled 属性对原生事件无效 [\#2878](https://github.com/youzan/vant-weapp/pull/2878)

### [v1.0.7](https://github.com/youzan/vant-weapp/tree/v1.0.7)

`2020-03-04`

**Features**

- DropdownItem: 新增 `popupStyle` 属性 [\#2804](https://github.com/youzan/vant-weapp/pull/2804)
- DropdownItem: 新增 `open` `close` `opened` `closed` 事件 [\#2804](https://github.com/youzan/vant-weapp/pull/2804)
- Card: 新增 `price` `num` 插槽 [\#2787](https://github.com/youzan/vant-weapp/pull/2787)
- Card: 新增 `origin-price-class` 外部样式类 [\#2787](https://github.com/youzan/vant-weapp/pull/2787)

**Bug Fixes**

- Tab: 修复内容项高度不同时粘性布局异常 [\#2817](https://github.com/youzan/vant-weapp/pull/2817)
- Picker: 修复未选中项样式未置灰 [\#2816](https://github.com/youzan/vant-weapp/pull/2816)
- GoodsActionButton: 修复仅使用一个 button 时样式异常 [\#2808](https://github.com/youzan/vant-weapp/pull/2808)
- Radio: `name`类型与`value`统一 [\#2801](https://github.com/youzan/vant-weapp/pull/2801)
- Uploader: 修复文档错误 [\#2777](https://github.com/youzan/vant-weapp/pull/2777)

### [v1.0.6](https://github.com/youzan/vant-weapp/tree/v1.0.6)

`2020-02-24`

**Features**

- GoodsActionButton: 新增默认 slot [\#2779](https://github.com/youzan/vant-weapp/pull/2779)
- SubmitBar: 更新圆角样式 [\#2755](https://github.com/youzan/vant-weapp/pull/2755)
- Card: 更新样式 [\#2754](https://github.com/youzan/vant-weapp/pull/2754)
- 优化 relation 部分代码 [\#2760](https://github.com/youzan/vant-weapp/pull/2760)

**Bug Fixes**

- DropdownItem: 修复点击选项时不触发`close`事件 [\#2766](https://github.com/youzan/vant-weapp/pull/2766)
- GoodsActionButton: 修复低版本基础库下的样式问题 [\#2762](https://github.com/youzan/vant-weapp/pull/2762)
- Tabs: 修复点击禁用项时事件参数错误 [\#2758](https://github.com/youzan/vant-weapp/pull/2758)
- Checkbox: 修复动态设置`disabled`属性无效 [\#2748](https://github.com/youzan/vant-weapp/pull/2748)
- Button: add loading color when plain is true [\#2746](https://github.com/youzan/vant-weapp/pull/2746)
- Radio: 修复`label-disabled`文档错误 [\#2763](https://github.com/youzan/vant-weapp/pull/2763)

### [v1.0.5](https://github.com/youzan/vant-weapp/tree/v1.0.5)

`2020-02-07`

**Features**

- ActionSheet: actions 支持更多 openType [\#2715](https://github.com/youzan/vant-weapp/pull/2715)
- Uploader: 新增开始`disabled`时的组件样式 [\#2720](https://github.com/youzan/vant-weapp/pull/2720)
- Icon: 调整示例小程序页面与 vant 对齐 [\#2728](https://github.com/youzan/vant-weapp/pull/2728)
- 示例小程序首页与 vant 对齐 [\#2729](https://github.com/youzan/vant-weapp/pull/2729)
- 完善快速上手文档，增加 npm 构建说明 [\#2726](https://github.com/youzan/vant-weapp/pull/2726)

**Bug Fixes**

- Radio: 修复`disabled`属性不生效 [\#2711](https://github.com/youzan/vant-weapp/pull/2711)
- Tab: 修复`animated`属性无法动态切换 [\#2712](https://github.com/youzan/vant-weapp/pull/2712)
- Circle: 修正文档错误，`size`属性不支持`string`类型 [\#2694](https://github.com/youzan/vant-weapp/pull/2694)
- 修正文档默认 slot 名称为 default 的错误 [\#2726](https://github.com/youzan/vant-weapp/pull/2726)
- TreeSelect: 修正文档示例代码标签闭合错误 [\#2710](https://github.com/youzan/vant-weapp/pull/2710)

### [v1.0.4](https://github.com/youzan/vant-weapp/tree/v1.0.4)

`2020-01-21`

**Features**

- Stepper: 新增 disable-long-press 属性 [\#2691](https://github.com/youzan/vant-weapp/pull/2691)
- quickstart: 快速上手新增关闭 style v2 说明 [\#2704](https://github.com/youzan/vant-weapp/pull/2704)
- Search: 新增 background、disabled、input-align 文档示例 [\#2698](https://github.com/youzan/vant-weapp/pull/2698)
- Icon: 文档新增图标文字加载失败说明 [\#2681](https://github.com/youzan/vant-weapp/pull/2681)

**Bug Fixes**

- Sticky: 修复真机上页面滚动缓慢时无法吸顶/取消吸顶 [\#2703](https://github.com/youzan/vant-weapp/pull/2703)
- DropdownItem: 修复 wx:key 警告 [\#2670](https://github.com/youzan/vant-weapp/pull/2670)
- IndexBar: 文档修复组件引入路径错误 [\#2689](https://github.com/youzan/vant-weapp/pull/2689)
- 升级依赖版本以避免安全警告 [\#2680](https://github.com/youzan/vant-weapp/pull/2680)

### [v1.0.3](https://github.com/youzan/vant-weapp/tree/v1.0.3)

`2020-01-09`

**Features**

- npm 包默认输出 es5 版本代码 [\#2639](https://github.com/youzan/vant-weapp/pull/2639)
- Steps: 新增外部样式类 desc-class [\#2630](https://github.com/youzan/vant-weapp/pull/2630)

**Bug Fixes**

- Tab: 解决动态添加选项时，顺序错乱和下划线长度不变的问题 [\#2663](https://github.com/youzan/vant-weapp/pull/2663)
- NavBar: 修复返回图标未居中的问题 [\#2633](https://github.com/youzan/vant-weapp/pull/2633)

### [v1.0.2](https://github.com/youzan/vant-weapp/tree/v1.0.2)

`2019-12-31`

**Features**

- Skeleton: 新增外部样式类` row-class``avatar-class``title-class ` [\#2612](https://github.com/youzan/vant-weapp/pull/2612)
- SwipeCell: 支持动态修改`width`属性 [\#2607](https://github.com/youzan/vant-weapp/pull/2607)
- Uploader: 新增` camera``compressed``maxDuration `属性 [\#2584](https://github.com/youzan/vant-weapp/pull/2584)

**Improvements**

- Tab: 优化弹性滚动效果 [\#2606](https://github.com/youzan/vant-weapp/pull/2606)

**Bug Fixes**

- IndexBar: 修复字母未全部定义时 click 事件报错 [\#2605](https://github.com/youzan/vant-weapp/pull/2605)
- Field: 修复点击清除图标后下一次点击无效 [\#2602](https://github.com/youzan/vant-weapp/pull/2602)

### [v1.0.1](https://github.com/youzan/vant-weapp/tree/v1.0.1)

`2019-12-23`

**Features**

- Uploader: 新增 sizeType 属性 [\#2563](https://github.com/youzan/vant-weapp/pull/2563)
- GoodsActionButton: 新增 plain 属性 [\#2559](https://github.com/youzan/vant-weapp/pull/2559)
- Uploader: 去除 use-slot 属性 [\#2551](https://github.com/youzan/vant-weapp/pull/2551)
- 新增样式覆盖说明文档 [\#2566](https://github.com/youzan/vant-weapp/pull/2566)

**Improvements**

- 使用 nextTick 优化部分异步逻辑 [\#2561](https://github.com/youzan/vant-weapp/pull/2561)
- wxs 新增 addUnit 方法以减少 setData 调用次数 [\#2550](https://github.com/youzan/vant-weapp/pull/2550)

**Bug Fixes**

- Tag: 修复未依赖 van-icon 组件 [\#2579](https://github.com/youzan/vant-weapp/pull/2579)
- Notify: 修复 safeAreaInsetTop 不生效 [\#2558](https://github.com/youzan/vant-weapp/pull/2558)
- Uploader: 修复 capture 属性不生效 [\#2551](https://github.com/youzan/vant-weapp/pull/2551)

### [v1.0.0](https://github.com/youzan/vant-weapp/tree/v1.0.0)

`2019-12-11`

#### 主要变动

- npm 包名由 vant-weapp 重命名为 @vant/weapp
- 增加十一个新组件
- 增加数十个 API
- 所有组件支持通过`CSS自定义属性`自定义样式
- 使用`env()`重构 iOS 安全区域适配
- 调整部分 API 命名，废除少量 API

#### 新组件

在 Vant Weapp 1.0 版本中，我们新增了 11 个实用的基础组件：

- <b>Grid 宫格</b>，用于展示内容或进行页面导航
- <b>Image 图片</b>，增强版的 Image 标签，支持图片懒加载与加载失败提示
- <b>Circle 环形进度条</b>，告知用户当前的状态和进度
- <b>Overaly 遮罩层</b>，用于强调特定的页面元素，并阻止用户进行其他操作
- <b>Divider 分割线</b>，区隔内容的分割线
- <b>Sticky 粘性布局</b>，与 CSS 中`position: sticky`属性实现的效果类似
- <b>Skeleton 骨架屏</b>，在待加载区域展示的占位区块，提供界面加载过程中的过渡效果
- <b>IndexBar 索引栏</b>，通讯录中的字母索引栏，用于长列表快速索引
- <b>Uploader 文件上传</b>，上传一个或多个文件
- <b>CountDown 倒计时</b>，用于显示活动倒计时、短信验证码等
- <b>DropdownMenu 下拉菜单</b>，用于列表的分类选择、筛选及排序

![](https://img.yzcdn.cn/public_files/2019/12/06/748d9b70feb76eeaf44f9d6080b6e108.png)

#### 样式定制

在 1.0 迭代计划确定之初，我们就不断思考这样一个问题 -- 该如何给用户提供动态切换主题样式的功能呢？

微信小程序的环境是非常特殊的。不具有动态加载代码的机制，同时微信又限制了代码的主包大小和总大小。传统的基于预设的样式定制过于臃肿，不再适合微信小程序的环境。

微信小程序自定义组件的组件模型相当于一个简化版的 [Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-CN)，幸运的是，小程序也支持了 [CSS 自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 的特性。最终，我们基于 CSS 自定义属性设计了样式定制的方案，开发者使用灵活、方便，组件维护也更简单。

从 1.0 版本开始，Vant Weapp 中的所有组件都支持通过 [CSS 组定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 进行样式定制，具体使用姿势可查看[相关文档](/vant-weapp/#/theme)

![定制主题](https://img.yzcdn.cn/public_files/2019/06/11/9a066c1a212264c7ae56065e1f13d317.png)

#### 不兼容更新

1.0 版本中包含少量不兼容更新，主要是命名调整和移除个别属性。对于正在使用 0.x 版本的项目，请按照下方的列表依次检查，大部分项目可以<b>无痛升级</b>。

##### Badge

- `BadgeGroup`重命名为`Sidebar`
- `Badge`重命名为`SlidebarItem`
- `active`属性重命名为`activeKey`

##### Notify

- `text`选项重命名为`message`
- `backgroundColor`选项重命名为`background`

##### Popup

- 去除`transitionend`事件，新增 6 个事件

##### SwitchCell

- 移除了`SwitchCell`组件，可以使用`Cell`和`Switch`组件代替

##### Transition

- 去除`transitionend`事件，新增 6 个事件

---

#### 新特性

##### ActionSheet

- 新增`click-overlay`事件
- 新增`close-on-click-action`属性
- 新增`color`属性
- 新增`description`属性
- 新增`round`属性

##### Area

- 新增`columns-placeholder`属性
- `reset`方法支持传入`code`参数

##### Button

- 新增`loading-type`属性
- `color`属性支持渐变色
- 切换`disabled`时增加过渡效果

##### Checkbox

- 新增`icon-size`属性

##### Color

- 基础红色更新为`#ee0a24`

##### DatetimePicker

- 新增`filter`属性

##### Dialog

- 优化文字换行
- 新增`title`插槽
- 新增`confirm-button-color`属性
- 新增`cancel-button-color`属性
- 新增`width`属性
- 新增`overlay-style`属性

##### Field

- 新增`clickable`属性
- 新增`arrow-direction`属性
- 新增`hold-keyboard`属性

##### GoodsActionButton

- 新增`color`属性
- 样式升级为圆角风格

##### GoodsActionIcon

- 新增`icon`插槽
- 新增`dot`属性

##### GridItem

- 新增`info`属性
- 新增`dot`属性

##### Icon

- 新增`dot`属性
- 新增`down`图标
- 新增`wap-hone`实底风格图标
- 支持`number`类型的`size`属性

##### Loading

- 支持`number`类型的`size`属性

##### NoticeBar

- 阻止关闭图标点击事件冒泡

##### Notify

- 新增`clear`方法

##### Popup

- 新增`round`属性
- 新增`closeable`属性
- 新增`close-icon`属性
- 新增`close-icon-position`属性

##### Progress

- 新增`stroke-width`属性

##### Radio

- 新增`icon-size`属性

##### Rate

- 优化手势判断
- 新增`gutter`属性
- 新增`touchable`属性
- 支持`string`类型的`size`属性

##### Search

- 新增`action-text`属性
- 新增`left-icon`插槽
- 新增`right-icon`插槽

##### SlidebarItem

- 新增`dot`属性

##### Slider

- 新增`drag-start`事件
- 新增`drag-end`事件
- 支持传入任意范围的`max`和`min`属性
- 支持`number`类型的`bar-height`属性
- 增加滑动动画
- 增大点击区域

##### SwipeCell

- 新增`name`属性
- 新增`open`事件
- 支持打开状态互斥

##### Switch

- 加载图标的颜色会跟随开关状态变化

##### Stepper

- 支持长按手势
- 新增`input-width`属性
- 新增`button-size`属性
- 新增`decimalLength`属性
- 新增 disablePlus、disableMinus 属性

##### Steps

- 新增`active-icon`属性
- 新增`inactive-icon`属性

##### Tabs

- 使用 Sticky 组件重构吸顶实现
- 新增`name`属性
- 新增`line-height`属性
- 新增`ellipsis`属性
- 新增`lazy-render`属性
- `line-width`属性支持`String`类型
- 增加云开发结合示例

##### TreeSelect

- 新增`max`属性
- 新增`content`插槽
