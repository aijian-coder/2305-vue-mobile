import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "@/style.css";
import App from "@/App.vue";

// 创建 pinia 的实例对象，它是 Vue 的一个插件
const pinia = createPinia();

// 注册 pinia 的插件
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount("#app");
