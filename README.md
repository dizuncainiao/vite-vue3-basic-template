# [vite-vue3-basic-template](https://github.com/dizuncainiao/vite-vue3-basic-template)

基于 `Vite5` 的工程化模板，可以帮助你快速的开始 `Vue3` 项目，使用以下工具来整合实现。

## 特性

- [pnpm](https://github.com/pnpm/pnpm) - ⚡ 快速的，节省磁盘空间的包管理工具。
- [stylelint](https://github.com/stylelint/stylelint) - 🔧 一个强大的现代 linter，可帮助您避免错误并在您的样式中强制执行约定。
- [eslint](https://github.com/eslint/eslint) - 🔧 查找并修复 JavaScript 代码中的问题。
- [prettier](https://github.com/prettier/prettier) - 🎨 _Prettier_ 是一个固执己见的代码格式化程序。
- [vitest](https://github.com/vitest-dev/vitest) - ⚡ Vite 原生测试框架。它很快！
- [lint-staged](https://github.com/okonet/lint-staged) - 🚫💩 对暂存的 git 文件运行 linter，不要让 💩 溜进你的代码库！
- [commitlint](https://github.com/conventional-changelog/commitlint) - 📓Lint Git 提交消息。
- [husky](https://github.com/typicode/husky) - 🐶 让 Git hooks 变得更简单，规范你的提交！
- [typescript](https://github.com/microsoft/TypeScript) - 💪 现代 web 应用开发的必备语言了，当然必须要有。
- [pinia](https://github.com/vuejs/pinia) - 🍍 直观、类型安全、轻量且灵活的 Vue Store 使用组合 API 和 DevTools 支持。
- [unocss](https://github.com/unocss/unocss) - 🍍 即时按需原子 CSS 引擎。
- [dz-storage](https://github.com/dizuncainiao/dz-storage) - 🍍 更好用的 localStorage 封装，支持几乎所有 Javascript 数据类型的存取。

## 使用

1. 安装 **pnpm**，享受闪电般的安装速度 （注：请仔细查阅这份[文档](https://pnpm.io/zh/installation#%E5%85%BC%E5%AE%B9%E6%80%A7)，避免引起不必要的与 Node.js 之间的兼容性问题）

   ```sh
   $ npm install -g pnpm
   ```

2. 安装 **commitizen** 和 **git-cz**，实现更规范、优雅的 Git 提交

   ```sh
   $ pnpm add commitizen git-cz -g
   ```

3. 拉代码，安装依赖

   ```sh
   $ git clone https://github.com/dizuncainiao/vite-vue3-basic-template.git

   $ cd vite-vue3-basic-template

   $ pnpm install
   ```

4. 初始化 **husky**

   ```sh
   $ pnpm run prepare
   ```

5. 代码 Lint、格式化

   ```sh
   # Lint 和 修复所有代码
   $ pnpm run lint

   # 美化所有代码
   $ pnpm run format

   # 美化及修复所有样式
   $ pnpm run style:lint
   ```

6. 规范你的 commit message 并组织提交 💩 代码？

   ```sh
   $ pnpm run git-commit
   ```

   对于提交的文件进行 eslint、stylelint 校验，以及 prettier 格式化。警告不会影响提交，但是报错会中断。绝大多数的时候，Lint 工具会自动修复错误，但是部分报错需要手动修复后才能再次进行提交。

## 完结

至此，准备工作已经完毕，接下来开始愉快地开发吧 😁😁
