# 快速开始

## 1. 安装依赖
运行安装脚本：
```bash
chmod +x setup.sh
./setup.sh
```

## 2. 启动应用
```bash
# 启动后端服务器
cd backend && npm run dev

# 启动前端应用
cd frontend && npm run dev
```

## 3. 访问应用
打开浏览器访问：http://localhost:3000

## 4. 使用功能
- 点击三个按钮增加想念次数
- 查看日历中的历史记录
- 数据自动保存到 SQLite 数据库

## 5. 部署上线

### 前端部署（Vercel）
```bash
cd frontend
npm run build
vercel --prod
```

### 后端部署（Heroku）
```bash
cd backend
heroku create daily-thinker-api
git push heroku main
```

## 注意事项
- 确保后端 API 地址正确配置
- 如果需要多人使用，可以考虑云端数据库
- 日历功能需要后端支持，如果使用纯前端版本，可以简化