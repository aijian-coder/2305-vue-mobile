<script lang="ts" setup>
import FilmList from "@/components/film-list/index.vue";
</script>

<template>
  <div class="page-film-list">
    <van-tabs>
      <van-tab title="正在热映">
        <FilmList :type="1" />
      </van-tab>
      <van-tab title="即将上映">
        <FilmList :type="2" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped>
.page-film-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .van-tabs {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .van-tab__panel {
    display: flex;
    height: 100%;
    overflow: hidden;
  }

  ::v-deep(.van-tabs__content) {
    flex: 1;
    overflow: hidden;
  }
}
</style>
