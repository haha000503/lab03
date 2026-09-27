# 邓荣熙 · 个人作品集网站

一个面向企业招聘的**软件测试工程师个人展示网站**。纯静态单页应用,零依赖、零构建,双击 `index.html` 即可运行。

## 项目用途

向企业 HR 与面试官集中展示个人信息与能力,内容包括:

- **个人简介**:软件工程专业,广州软件学院在读
- **专业技能**:功能测试、接口测试、自动化测试,以及持续学习中的性能测试与质量体系建设
- **项目实践**:轻记账(微信小程序)、拾光集市(全栈)、城市脉搏(数据可视化)、课语通(AI 应用)
- **联系方式**:邮箱、微信、GitHub、个人主页

## 功能特性

| 功能 | 说明 |
| --- | --- |
| 深浅色主题切换 | 导航栏一键切换,localStorage 记忆用户选择 |
| 打字机效果 | 首页职业标语循环打字/删除动画 |
| 滚动显现动画 | 基于 IntersectionObserver 的区块渐入效果 |
| 技能进度条 | 滚动到可视区域时自动播放进度动画 |
| 导航联动 | 滚动时自动高亮当前区块对应的导航项 |
| 联系表单 | 前端校验(必填、邮箱格式)并给出即时反馈 |
| 响应式布局 | 适配桌面 / 平板 / 手机(992px、640px 断点) |
| 无障碍支持 | 遵循 `prefers-reduced-motion`,尊重系统减少动效设置 |

## 技术栈

- **HTML5**:语义化标签(`header` / `nav` / `section` / `article` / `footer`)
- **CSS3**:CSS 变量管理双主题配色、Flexbox / Grid 布局、毛玻璃与渐变、媒体查询
- **原生 JavaScript**:无任何框架与第三方库,ES6+ 语法
- **SVG 插画**:全部图片为手工绘制的本地 SVG,离线可用、加载零延迟

## 项目结构

```text
├── index.html          # 单页入口(全部页面结构)
├── css/
│   └── style.css       # 全部样式(CSS 变量双主题 + 响应式)
├── js/
│   └── main.js         # 全部交互逻辑(带中文注释)
├── assets/img/         # 6 张本地 SVG 插画
├── profile.md          # 个人资料源文件
└── .gitignore
```

## 快速开始

无需安装任何依赖:

```bash
# 方式一:直接用浏览器打开
start index.html

# 方式二:本地服务器(可选)
npx serve .
```

## 在线访问

仓库地址:<https://github.com/haha000503/lab03>

可通过 GitHub Pages 部署:仓库 **Settings → Pages → Source** 选择 `master` 分支根目录,保存后访问 `https://haha000503.github.io/lab03`。

## 内容维护

- 修改个人信息:编辑 [profile.md](profile.md) 后同步更新 `index.html` 中对应文本
- 修改配色:编辑 `css/style.css` 顶部的 `:root` 与 `html[data-theme]` CSS 变量
- 新增项目:在 `index.html` 的「项目实践」区块复制一个 `project-card` 卡片并替换内容
