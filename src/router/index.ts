import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "@/hooks/store";

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
          beforeEnter: (to, from) => {
            // 判断是否选择了城市
            const { cityStore } = useStore();
            if (!cityStore.curCityId) {
              return { name: "city" };
            }
          },
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
    {
      // :xxx? => ?号表示该动态参数是可选的
      path: "/cinema/:cinemaId/film/:filmId?/:show?",
      name: "cinema-info",
      component: () => import("@/views/cinema/cinema-info/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index.vue"),
    },
  ],
});

export default router;
