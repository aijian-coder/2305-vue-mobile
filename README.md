## study-pinia

#### 基础概况

与 Vuex 一样, 也有 store, 且可以有多个。
在 Vuex 中只有一个 store 要拆分 store 是通过 modules 配置。
pinia 中可以有多个 store 。就没有 modules 配置了。

在 Vuex 中有一个核心配置叫做 mutations , Pinia 中直接没有 mutations 了。

Vue3 需要使用 Vuex4
Pinia 可以看成是 Vuex5

#### 与 Vuex 的区别

1. mutation 已被弃用。它们经常被认为是极其冗余的。它们初衷是带来 devtools 的集成方案，但这已不再是一个问题了。
2. 对 TypeScript 支持更好。
3. 无过多的魔法字符串注入，只需要导入函数并调用它们，然后享受自动补全的乐趣就好。
4. 无需要动态添加 Store，它们默认都是动态的，甚至你可能都不会注意到这点。注意，你仍然可以在任何时候手动使用一个 Store 来注册它，但因为它是自动的，所以你不需要担心它。
5. 不再有嵌套结构的模块。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间。虽然 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。你甚至可以让 Stores 有循环依赖关系。
6. 不再有可命名的模块。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。

#### Vuex 与 Pinia 有什么区别：

1. 两者都是 Vue 的插件，来实现全局状态共享的。
2. Pinia 只能用于 Vue3 项目， Vuex@4 可以用于 Vue3. Vue2 项目中只能使用 Vuex@4 以下。
3. Vuex 中有 mutations ，Pinia 直接去掉了该配置
4. Vuex 只能有一个 Store，Pinia 可以有多个， Pinia 是移除了 modules 配置
5. Pinia 对 TS 支持更友好，能够提供大量的语法提示。避免魔法字符串的使用。

#### Pinia 的起步

1. 安装 pinia

```sh
npm install pinia
```

2. 创建 pinia 的 store ，新建一个 `src/stores/app.ts`

```ts
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  // 配置
});
```

3. 入口 js 中，需要注册 pinia

```js
import { createPinia } from "pinia";

const pinia = createPinia();

createApp().use(pinia);
```

4. 组件中使用对应的 store
   1. 引入对应 store 的 组合式函数即可

#### 创建 store 的两种方式

1. composition 方式

2. options 方式

#### pinia 插件 pinia-plugin-persistedstate 持久化插件

1. 安装它

```sh
npm install pinia-plugin-persistedstate
```

2. 注册它

```ts
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// pinia 实例
const pinia = createPinia();

// 调用 pinia 实例的 use 方法来注册
pinia.use(piniaPluginPersistedstate);
```

3. 配置它
   那个 store 需要对 state 数据做持久化，则在定义这个 store 的时候，配置 persist: true
