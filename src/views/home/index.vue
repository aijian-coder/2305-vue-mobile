<script lang="ts" setup>
// Vue 3.3+ 才可以使用 defineOptions
defineOptions({
  name: "home",
});
</script>

<template>
  <div class="page-home">
    <div class="page-home__body">
      <RouterView />
    </div>
    <div class="page-home__footer">
      <van-tabbar route inactive-color="#797d82" :fixed="false">
        <van-tabbar-item to="/films" icon="home-o">电影</van-tabbar-item>
        <van-tabbar-item to="/cinemas" icon="search">影院</van-tabbar-item>
        <van-tabbar-item to="/posts" icon="friends-o">资讯</van-tabbar-item>
        <van-tabbar-item to="/center" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__body {
    flex: 1;
    overflow: hidden;
  }

  &__footer {
    height: 50px;
  }
}
</style>
