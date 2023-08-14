## vant

> 文档链接：https://vant-contrib.gitee.io/vant/#/zh-CN

#### vant 版本情况

Vue@2 - Vant@2
Vue@3 - Vant@3 or Vant@4

#### 使用

1. 安装

```sh
npm install vant
```

2. 按需引入，先安装一个 vite 插件

```sh
npm i unplugin-vue-components -D
```

3. 配置 vite 插件， `vite.config.ts`

```ts
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```

4. 组件中，直接使用 vant 组件即可

5. 处理一下，组件类型的问题 `src/vite-env.d.ts`

```ts
/// <reference types="vant/es/index.d.ts" />
```
