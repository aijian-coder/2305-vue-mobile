<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { getFilmList } from "@/api/film";

const state = reactive({
  // 电影列表
  list: [] as API.IFilm[],
  // 电影总条数
  total: 1,
});

onMounted(() => {
  getFilmList({
    cityId: 440300,
    pageNum: 1,
    pageSize: 10,
    type: 1,
  }).then((resp) => {
    console.log("resp", resp);
    state.list = resp.films;
    state.total = resp.total;
  });
});
</script>

<template>
  <div class="page-film-list">
    <h2>电影列表</h2>
    <ul>
      <li v-for="item in state.list" :key="item.filmId">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
