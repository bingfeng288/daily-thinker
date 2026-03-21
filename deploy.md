# 部署指南

## 方案 1: Vercel 部署（推荐）

### 前端部署
1. 注册 Vercel (免费)
2. 安装 Vercel CLI: `npm i -g vercel`
3. 在 `daily-thinker-project` 目录运行:
   ```
   cd frontend
   npm run build
   vercel --prod
   ```

### 后端部署
后端需要单独的 Node.js 托管服务，可以选择:

1. **Heroku** (免费)
   ```bash
   cd backend
   heroku create daily-thinker-api
   git push heroku main
   ```

2. **Railway** (免费)
   - 上传 `backend` 文件夹
   - Railway 会自动部署

3. **使用自己的服务器**
   ```bash
   cd backend
   npm install
   node server.js
   ```

## 方案 2: Netlify 部署（前端免费）

1. 注册 Netlify
2. 将 `frontend` 目录上传
3. Netlify 会自动构建

## 方案 3: GitHub Pages

1. 将代码上传到 GitHub
2. 设置 GitHub Pages 指向 `frontend/dist` 目录

## 配置说明

1. **前后端分离**：前端和后端需要分开部署
2. **API 地址**：部署后需要在前端代码中修改 API 地址
3. **数据库**：SQLite 文件会保存数据，确保部署时有持久化存储

## 简化方案（快速上线）

如果你想要快速上线，可以使用:
1. **本地运行**：只在本地使用
2. **静态文件**：放弃后端，使用 localStorage 保存数据（可以保存7天）

```javascript
// 修改前端代码使用 localStorage
localStorage.setItem('daily-thinker', JSON.stringify(data));
```

这样就可以直接部署静态网页到任何托管服务了。