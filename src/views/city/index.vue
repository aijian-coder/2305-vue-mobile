<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/hooks/store";

const { cityStore } = useStore();
const router = useRouter(); // useRouter() 返回的就是 路由器实例对象

onMounted(() => {
  cityStore.getCities();
});

function onClickLeft() {
  console.log("onClickLeft");
  cityStore.getCities();
}

/**
 * 城市点击
 */
function handleClick(city: API.ICity) {
  // 1. 将当前点击的写入store
  cityStore.changeCity(city);
  // 2. 跳转页面
  router.replace({ name: "films" });
}

const keyword = ref("");
</script>

<template>
  <div class="page-city">
    <van-nav-bar title="当前城市-深圳" @click-left="onClickLeft">
      <template #left>
        <van-icon name="cross" color="#191a1b" size="19" />
      </template>
    </van-nav-bar>

    <van-search v-model="keyword" placeholder="请输入搜索关键词" />

    <div class="body">
      <van-index-bar :index-list="cityStore.indexList">
        <template v-for="group in cityStore.cityGroup" :key="group.groupName">
          <van-index-anchor :index="group.groupName" />
          <van-cell
            v-for="item in group.groupList"
            :key="item.cityId"
            :title="item.name"
            @click="handleClick(item)"
          />
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-city {
  height: 100%;
  display: flex;
  flex-direction: column;
  .body {
    flex: 1;
    background-color: #ccc;
    overflow-y: auto;
  }
}
</style>
