<script lang="ts" setup>
import { ref } from "vue";

defineProps<{
  schedules: API.ISchedule[];
  showDate: number[];
}>();

const active = ref(0);
</script>

<template>
  <div class="cinema-film-schedules">
    <van-tabs v-model:active="active" sticky shrink>
      <van-tab
        v-for="(item, index) in showDate"
        :key="index"
        :title="'' + item"
      >
        <van-cell
          v-for="item in schedules"
          :key="item.scheduleId"
          center
          :title="item.filmLanguage"
          :value="item.salePrice"
          :label="item.showAt"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>
