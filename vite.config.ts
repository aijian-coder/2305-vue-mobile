import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "https://m.maizuo.com",
        // 修改目标服务请求头中 host 字段值为 target，避免 500
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", ""),
      },

      "/custom": {
        target: "http://127.0.0.1:3000",
        // 修改目标服务请求头中 host 字段值为 target
        changeOrigin: true,
        rewrite: (path) => path.replace("/custom", ""),
      },
    },
  },
});
