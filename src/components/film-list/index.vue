<script lang="ts" setup>
import { reactive } from "vue";
import { getFilmList } from "@/api/film";
import FilmItem from "../film-item/index.vue";

// 请求接口的参数
const params = reactive({
  cityId: 440300,
  pageNum: 1,
  pageSize: 30,
  type: 1,
});

const state = reactive({
  // 列表数据
  list: [] as API.IFilm[],
  // 数据总条数
  total: 0,
  // 当前是否正在请求中
  loading: false,
  // 是否已加载完成，加载完成后不再触发 load 事件
  finished: false,
});

// 加载数据的函数
const onLoad = () => {
  getFilmList(params)
    .then((resp) => {
      // state.list = resp.films;
      // 追加 resp.films 到 当前 state.list 的后面
      state.list = [...state.list, ...resp.films];
      state.total = resp.total;
      // 修改 params.pageNum
      params.pageNum++;
    })
    .finally(() => {
      // 不管接口成功还是失败，
      //    1. 将 state.loading 设置为 false
      state.loading = false;
      //    2. 计算 state.finished 是否为 true
      state.finished = state.list.length >= state.total;
      // state.finished = true;
    });
};
</script>

<template>
  <div class="film-list">
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      :offset="10"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <FilmItem v-for="item in state.list" :key="item.filmId" :film="item" />
    </van-list>
  </div>
</template>

<style lang="scss" scoped>
.film-list {
  flex: 1;
  padding-left: 10px;
  overflow-y: auto;
}
</style>
