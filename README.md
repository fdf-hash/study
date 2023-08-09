# 项目使用 Vue 3 + TypeScript + Vite + Vue DevUI 开发

##  [Vue 3](https://cn.vuejs.org/guide/introduction.html) + [TypeScript](https://www.typescriptlang.org/zh/docs/handbook/typescript-in-5-minutes.html) + [Vite](https://cn.vitejs.dev/guide/) + [Vue DevUI](https://vue-devui.github.io/quick-start/)

#### Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

#### TypeScript 是 JavaScript 的一个超集，它在 JavaScript 的基础上增加了类型系统和其他一些功能, TypeScript 相对于 JavaScript 的一些优势：

  - 更好的代码提示和自动补全

  - 提高可维护性：通过类型系统和代码提示，TypeScript 使代码更易于维护

  - 更好的项目协作：对于大型项目，特别是多人协作的项目，TypeScript 可以提供更好的结构和明确的接口定义，使团队成员能够更容易地理解和集成彼此的代码

#### Vite是一种新型前端构建工具，能够显著提升前端开发体验,优势

   - 快速的开发和热更新：Vite 使用了 ES 模块的原生支持，通过利用现代浏览器的特性，实现了更快的冷启动和热更新时间。在开发过程中，修改代码后，页面刷新的速度更快，提高了开发效率。

   - 真正的按需导入：Vite 可以在开发过程中实现真正的按需导入。它允许在开发时按需加载模块，而不是像传统的打包工具一样，将所有代码打包成一个大的文件。这在大型项目中可以减少不必要的加载时间

   - 更轻量的构建：Vite 不需要预先将所有代码打包成一个或多个文件。它只在生产构建时进行真正的打包，这可以减少构建时间和输出文件的大小。

   - 灵活的插件系统：添加自定义功能和优化变得更加容易。

   - 更好的开发体验：由于 Vite 的快速热更新和按需导入功能，开发体验更加流畅和舒适。开发者可以更快地看到修改后的效果，并且无需等待整个应用重新构建。

#### Vue DevUI[介绍](https://devui.design/design-cn/start)

   - 华为软件开发云DevUI前端团队

## 项目运行

   - 项目基于[pnpm](https://pnpm.io/zh/next/installation)启动

## node、pnpm、vue/cli、ts 基本配置
```js
   E:\projects\my-vue-app> node -v  
   v16.16.0

   E:\projects\my-vue-app> pnpm -v
   8.6.0

   E:\projects\my-vue-app> vue --version
   @vue/cli 5.0.8 

   E:\projects\my-vue-app> tsc -v
   Version 5.1.6
```
   - 以上配置符合,即可

``` ts
   下载依赖：pnpm i

   运行：pnpm dev || pnpm run dev || vscode自带npm脚本一键启动
```
