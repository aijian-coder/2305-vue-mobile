// type App 是 createApp() 返回值类型
import { type App } from "vue";
import visible from "./modules/visible";

// 导出一个插件给到 Vue 使用
export default {
  install(app: App) {
    // 全局注册指令
    app.directive("visible", visible);
  },
};
