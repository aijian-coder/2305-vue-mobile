<!-- 
  当前组件，需要控制 showHeader 的值，要根据滚动条来控制，
  但是滚动条不是全局滚动条，而是局部元素的滚动
  问题：如果监控到局部元素的滚动
    1. document.getElelement('局部元素').addEventListener('scroll')

    2. FilmList 组件内 emit 出 scroll 事件出来
 -->

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/hooks/store";
import FilmList from "@/components/film-list/index.vue";

const { cityStore } = useStore();
const router = useRouter();

const showHeader = ref(false);

function handleScroll(event: Event) {
  const scrollTop = (event.target as HTMLElement).scrollTop;
  showHeader.value = scrollTop >= 50;
}

function jumpCity() {
  router.replace({ name: "city" });
}
</script>

<template>
  <div class="page-film-list">
    <van-nav-bar v-show="showHeader" title="电影" @click-left="jumpCity">
      <template #left>
        <div>
          <span>{{ cityStore.curCity?.name }}</span>
          <van-icon name="arrow-down" />
        </div>
      </template>
    </van-nav-bar>

    <van-tabs>
      <van-tab title="正在热映">
        <FilmList :type="1" @scroll="handleScroll" />
      </van-tab>
      <van-tab title="即将上映">
        <FilmList :type="2" @scroll="handleScroll" />
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
    flex: 1;
    overflow: hidden;
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
