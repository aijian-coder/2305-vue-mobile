<script lang="ts" setup>
import { onMounted, ref, watchEffect, computed } from "vue";
import { useRoute } from "vue-router";
import CinemaInfo from "@/components/cinema-info/index.vue";
import CinemaFilmBanner from "@/components/cinema-film-banner/index.vue";
import CinemaFilmSchedules from "@/components/cinema-film-schedules/index.vue";
import { getCinemaFilms, getCinemaInfo, getScheduleList } from "@/api/cinema";

// 当前路由信息对象
const route = useRoute();
const { cinemaId } = route.params;

// 定义当前的 filmId， 初始值由 URL 地址动态参数提供
const filmId = ref<string>(route.params.filmId as string);
// 定义当前的 date, 初始化由 URL 地址动态参数提供
const date = ref<string>(route.params.show as string);

const cinema = ref<API.ICinema | null>(null);
const films = ref<API.IFilm[]>([]);
const schedules = ref<API.ISchedule[]>([]);

// showDate ，当前电影的showDate
const showDate = computed(
  () =>
    films.value.find((item) => "" + item.filmId === filmId.value)?.showDate ||
    []
);

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

/**
 * 处理 filmId 切换
 */
function hanldeChangeFilmId(id: string) {
  filmId.value = id;
}

/**
 * 处理 date 切换
 */
function hanldeChangeDate(time: string) {
  date.value = time;
}

watchEffect(async () => {
  // 默认触发一次，这时 filmId 与 date 还没有值。
  if (!filmId.value || !date.value) {
    return;
  }

  const resp = await getScheduleList(
    cinemaId as string,
    filmId.value,
    date.value
  );
  schedules.value = resp.schedules;
});

onMounted(() => {
  init();
});
</script>

<template>
  <div class="page-cinema-info">
    <van-nav-bar left-arrow />

    <template v-if="cinema">
      <CinemaInfo :info="cinema" />

      <CinemaFilmBanner
        :films="films"
        :filmId="(filmId as string)"
        @change-film-id="hanldeChangeFilmId"
        @change-date="hanldeChangeDate"
      />

      <CinemaFilmSchedules :schedules="schedules" :show-date="showDate" />
    </template>
  </div>
</template>
