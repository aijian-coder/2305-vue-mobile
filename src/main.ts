import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router";
import directives from "@/directives";
import App from "@/App.vue";

const pinia = createPinia();

createApp(App).use(directives).use(router).use(pinia).mount("#app");
