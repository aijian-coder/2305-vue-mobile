<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useStore } from "@/hooks/store";

const { city } = useStore();

onMounted(() => {
  city.getCities();
});

function onClickLeft() {
  console.log("onClickLeft");
  city.getCities();
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
      <van-index-bar :index-list="city.indexList">
        <template v-for="group in city.cityGroup" :key="group.groupName">
          <van-index-anchor :index="group.groupName" />
          <van-cell
            v-for="item in group.groupList"
            :key="item.cityId"
            :title="item.name"
            @click="city.changeCity(item)"
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
