# Daily Thinker - 每日想你小程序

一个记录每天想念次数的小程序，包含三个计数器：亲亲、抱抱、睡觉。

## 功能特性
- 每天统计想念次数
- 实时更新计数器
- 日历可视化统计
- 数据持久化存储
- 响应式设计（手机和电脑都能用）

## 技术栈
- **前端**: React + Vite
- **后端**: Node.js + Express
- **数据库**: SQLite (轻量级)
- **部署**: Vercel/Netlify

## 快速开始

### 本地开发
1. 安装依赖：`npm install`
2. 启动后端：`npm run server`
3. 启动前端：`npm run dev`
4. 访问：http://localhost:3000

### 部署
- 前端部署到 Vercel：`npm run build` → 部署 dist 文件夹
- 后端部署到 Heroku/Node.js 托管服务

## 项目结构
- `/frontend` - React 前端应用
- `/backend` - Node.js 后端服务
- `/database` - SQLite 数据库文件