import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "@/style.css";
import App from "@/App.vue";

// 创建 pinia 的实例对象，它是 Vue 的一个插件
const pinia = createPinia();

// 创建一个 pinia 插件
function plugin1(context: any) {
  // context 是一个上下文对象，里面有很多属性
  console.log("context", context);
  // 返回一个对象，该对象的 key 会添加到 store 中
  return {
    key1: "value1",
  };
}

function persistenceStatePlugin(context: any) {
  // 获取本地存储的数据，写入到 store 中
  const storage = localStorage.getItem("hello")
    ? JSON.parse(localStorage.getItem("hello") as string)
    : {};

  // 判断当前的 context.store.$id 在 storage 中是否存在数据
  if (storage[context.store.$id]) {
    // 存在，则要修改 context.store 的数据
    context.store.$patch(storage[context.store.$id]);
  }

  // 1. 考虑当数据发生变化时，操作写入 localStorage
  context.store.$subscribe((mutation: any, state: any) => {
    // 将数据写入 localStorage
    // {
    //   'app': {
    //     msg: '',
    //     token: ''
    //   },
    //   'counter': {
    //     count: 11
    //   }
    // }

    // 1. 先获取当前本地储存的数据
    const storage = localStorage.getItem("hello")
      ? JSON.parse(localStorage.getItem("hello") as string)
      : {};
    // 2. 修改它
    storage[mutation.storeId] = JSON.parse(JSON.stringify(state));
    // 3. 存入到 本地储存
    localStorage.setItem("hello", JSON.stringify(storage));
  });
}

// 注册 pinia 的插件
pinia.use(plugin1 as any);
pinia.use(persistenceStatePlugin);
// pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount("#app");
