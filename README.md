# Three.js 金币收集挑战 test

这是一个边开发、边学习 Git、JavaScript 和 API 的练习项目。
当前骨架包含一个 3D 场地、玩家方块，以及检查后端连接的接口。

## 目录

- `client/`：Three.js 前端。
- `server/`：Fastify 后端 API。
- `AGENTS.md`：Codex 在本项目中的教学与记录约定。
- `docs/learning-plan.md`：从项目骨架到完整 DEMO、TypeScript 与 CI/CD 的学习计划。
- `docs/learning-log.md`：每次练习的任务与记录。

## 本地运行

使用 Node.js 24。在项目根目录安装依赖：

```sh
npm install
```

打开两个终端，均进入项目根目录。第一个启动后端：

```sh
npm run dev:server
```

第二个启动前端：

```sh
npm run dev:client
```

访问 http://localhost:5173。页面应显示场地、黄色方块和“API 已连接”。
后端地址为 http://127.0.0.1:3001/api/health。

`npm run build` 构建前端，产物位于 `client/dist/`。
Vite 的 API 转发仅用于开发；上线时需要单独配置 API 地址或反向代理。

## Git 与远程仓库

第一课必须创建并连接 GitHub 远程仓库，再推送首次提交。
骨架尚未初始化 Git，以便亲手练习初始化、暂存、提交和推送。
安装后生成的 `package-lock.json` 需要提交；`node_modules/` 已被忽略。

## 功能路线

1. 连接 GitHub，提交项目骨架。
2. 键盘控制玩家移动。
3. 收集金币与倒计时。
4. 创建游戏记录与提交成绩 API。
5. 保存成绩并显示排行榜。
6. 通过功能分支、Pull Request、冲突处理和版本标签完成第一版。

学习过程最终整理到笔记库的 `04-Programming/01-ProjectManagement/`。
