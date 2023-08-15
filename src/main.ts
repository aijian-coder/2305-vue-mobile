import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import router from "@/router";
import directives from "@/directives";
import App from "@/App.vue";

import "vant/es/toast/style";

const pinia = createPinia();

// 持久化插件
pinia.use(piniaPluginPersistedstate);

createApp(App).use(directives).use(router).use(pinia).mount("#app");
