import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/index.vue"),
      // 重定向
      redirect: "/films",
      children: [
        {
          path: "films",
          name: "films",
          component: () => import("@/views/film/film-list/index.vue"),
        },
        {
          path: "cinemas",
          name: "cinemas",
          component: () => import("@/views/cinema/cinema-list/index.vue"),
        },
        {
          path: "posts",
          name: "posts",
          component: () => import("@/views/posts/index.vue"),
        },
        {
          path: "center",
          name: "center",
          component: () => import("@/views/center/index.vue"),
        },
      ],
    },
    {
      path: "/city",
      name: "city",
      component: () => import("@/views/city/index.vue"),
    },
  ],
});

export default router;
