# Mynah - 智慧英语学习平台

<div align="center">
  <img src="https://github.com/user-attachments/assets/4b407f11-36ca-401c-848d-22ccea8ed9a3" alt="Mynah 平台首页" style="width: 100%; max-width: 900px; height: auto; border-radius: 8px; margin: 10px 0;">
</div>

欢迎来到 Mynah，一个基于讯飞平台的智慧英语学习项目！本项目由重庆大学团队开发，作为 2024 年 “软件杯” 讯飞平台赛题作品，致力于通过智能语音与 AI 技术提升英语学习效率。

Mynah 意为 “八哥、鹩哥”，寓意智能助手陪伴用户轻松学习英语。

## 项目背景
Mynah 是一套前后端分离的智慧英语学习系统，集成智能单词记忆、AI 语音对话、智能书籍阅读三大核心功能，依托科大讯飞 ASR、TTS、NLP 技术，为用户提供沉浸式、智能化的英语学习体验。

## 核心功能

### 1. 智慧单词记忆
- 智能记忆算法与记忆曲线
- 单词卡片学习
- 单词测试与评估
- 学习进度记录

<div align="center">
  <img src="https://github.com/user-attachments/assets/8f899a91-fd50-4c0a-97af-711dcc58c082" alt="智慧单词记忆功能展示1" style="width: 100%; max-width: 900px; height: auto; border-radius: 8px; margin: 8px 0;">
  <img src="https://github.com/user-attachments/assets/67656c34-f59f-46e3-9796-fc4739062743" alt="智慧单词记忆功能展示2" style="width: 100%; max-width: 900px; height: auto; border-radius: 8px; margin: 8px 0;">
</div>

### 2. 智慧语音对话
- 基于讯飞 ASR 语音识别
- 讯飞 TTS 语音合成
- 多轮智能口语对话
- 实时发音评测与纠正

<div align="center">
  <img src="https://github.com/user-attachments/assets/f65f11fa-11f0-404a-bf77-fb531c90f7dc" alt="智慧语音对话功能展示" style="width: 100%; max-width: 900px; height: auto; border-radius: 8px; margin: 8px 0;">
</div>

### 3. 智慧书籍阅读
- 电子课本在线阅读
- 生词自动标注
- 句子 / 单词实时翻译
- 阅读进度自动保存

<div align="center">
  <img src="https://github.com/user-attachments/assets/919312eb-d93e-4e8c-98fa-5f237ccf6a38" alt="智慧书籍阅读功能展示" style="width: 100%; max-width: 900px; height: auto; border-radius: 8px; margin: 8px 0;">
</div>

## 项目结构
- 前端：master 分支 —— Vue3 + Vite 构建的用户界面
- 后端：back 分支 —— SpringBoot 微服务集群

## 快速启动指南
### 一、前端启动（Vue + Vite）
1. 进入前端项目目录
2. 安装依赖
```bash
运行
npm install
```
3. 启动开发服务
```bash
运行
npm run dev
```

### 二、后端启动（SpringBoot）
1. 使用 IDEA 打开后端项目
2. 等待 Maven 依赖下载完成
3. 依次启动每个微服务的启动类
4. 全部启动成功后，前端即可正常访问所有功能。
