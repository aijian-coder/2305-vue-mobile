<script lang="ts" setup>
import FilmList from "@/components/film-list/index.vue";
</script>

<template>
  <div class="page-film-list">
    <h2>电影列表</h2>

    <FilmList />
  </div>
</template>

<style lang="scss" scoped>
.page-film-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
