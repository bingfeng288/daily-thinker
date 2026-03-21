#!/bin/bash

echo "设置每日想你小程序..."

# 安装前端依赖
echo "安装前端依赖..."
cd frontend
npm install

# 安装后端依赖
echo "安装后端依赖..."
cd ../backend
npm install

# 创建数据库目录
echo "创建数据库..."
mkdir -p database

echo "安装完成！"
echo ""
echo "启动方式："
echo "1. 启动后端：cd backend && npm run dev"
echo "2. 启动前端：cd frontend && npm run dev"
echo "3. 浏览器访问：http://localhost:3000"