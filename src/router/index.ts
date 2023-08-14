import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/city",
      name: "city",
      component: () => import("@/views/city/index.vue"),
    },
  ],
});

export default router;
