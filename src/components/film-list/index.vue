<script lang="ts" setup>
import { reactive } from "vue";
import { getFilmList } from "@/api/film";
import { useStore } from "@/hooks/store";
import FilmItem from "../film-item/index.vue";

const { cityStore } = useStore();

const props = defineProps<{
  type: 1 | 2;
}>();

const emit = defineEmits(["scroll"]);

// 请求接口的参数
const params = reactive({
  cityId: cityStore.curCityId,
  pageNum: 1,
  pageSize: 10,
  type: props.type,
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

// 滚动事件处理
const handleScroll = (event: Event) => {
  // 触发一个 scroll 的自定义事件，通知父组件
  emit("scroll", event);
};
</script>

<template>
  <div class="film-list" @scroll.passive="handleScroll">
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
