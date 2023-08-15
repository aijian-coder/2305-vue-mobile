<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CinemaInfo from "@/components/cinema-info/index.vue";
import CinemaFilmBanner from "@/components/cinema-film-banner/index.vue";
import { getCinemaFilms, getCinemaInfo } from "@/api/cinema";

// 当前路由信息对象
const route = useRoute();
const { cinemaId, filmId, show } = route.params;

const cinema = ref<API.ICinema | null>(null);
const films = ref<API.IFilm[]>([]);

/**
 * 初始化
 *  1. 获取影院详情
 *  2. 获取影院下电影列表
 *  PS: 考虑多个接口请求时，串行与并行的选择。
 */
async function init() {
  Promise.all([
    getCinemaInfo(cinemaId as string),
    getCinemaFilms(cinemaId as string),
  ]).then(([cinemaInfoResp, cinemaFilmsResp]) => {
    cinema.value = cinemaInfoResp.cinema;
    films.value = cinemaFilmsResp.films;
  });
}

onMounted(() => {
  init();
});
</script>

<template>
  <div class="page-cinema-info">
    <van-nav-bar left-arrow />

    <template v-if="cinema">
      <CinemaInfo :info="cinema" />
      <CinemaFilmBanner :films="films" />
    </template>
  </div>
</template>
