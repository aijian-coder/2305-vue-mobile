<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/hooks/store";

const { cityStore } = useStore();
const router = useRouter(); // useRouter() 返回的就是 路由器实例对象

/**
 * 根据输入框，计算搜索的城市
 */
const searchCompute = computed(() => {
  return cityStore.cities.filter((city) => {
    if (!keyword.value) return;
    return (
      //根据拼音和文字，做模糊检索
      city.pinyin.includes(keyword.value) || city.name.includes(keyword.value)
    );
  });
});

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

    <div class="body" v-show="searchCompute.length">
      <van-index-bar :index-list="[]">
        <van-cell
          v-for="item in searchCompute"
          :key="item.cityId"
          :title="item.name"
          @click="handleClick(item)"
        />
      </van-index-bar>
    </div>
    <div class="body" v-show="!searchCompute.length">
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
