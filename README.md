# 搭建一个脚手架工

前端脚手架 CLI，是一个命令行工具，它的出现主要解决这几个问题：

- 减少重复性工作
- 规范项目开发目录结构
- 统一团队统一开发风格，便于跨团队合作，以及后期维护，降低新人上手成本
- 提供一键前端项目的创建、配置、本地开发、插件扩展等功能，让开发者更多时间专注于业务

随着前端工程化的发展，越来越多企业选择脚手架来从零到一搭建自己的项目。

## 脚手架思路

### CLI 搭建项目

- 根据用户输入生成配置文件
- 下载指定项目模板
- 在目标目录生成新项目

### 依赖分析

- commander：命令行工具，有了它我们就可以读取命令行命令，知道用户想要做什么了
- inquirer： 交互式命令行工具，给用户提供一个漂亮的界面和提出问题流的方式
- download-git-repo：下载远程模板工具，负责下载远程仓库的模板项目
- chalk：颜色插件，用来修改命令行输出样式，通过颜色区分 info、error 日志，清晰直观
- ora：用于显示加载中的效果，类似于前端页面的 loading 效果，像下载模板这种耗时的操作，有了 loading 效果可以提示用户正在进行中，请耐心等待

## 本地运行项目

```bash
# install dependencies
git clone && npm install

# create command line and run the command
npm link

# build for production with minification
pdk create <projectName>
```

## 安装
```bash
# install grobally
npm install -g pdk-cli

# or yarn
yarn global add pdk-cli
```

## 快速运行
```bash
pdk create <projectName>
```