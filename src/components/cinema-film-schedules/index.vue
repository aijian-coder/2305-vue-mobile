<script lang="ts" setup>
import { ref, computed } from "vue";
import dayjs from "dayjs";

const props = defineProps<{
  schedules: API.ISchedule[];
  showDate: number[];
}>();

const emit = defineEmits(["change-date"]);

/**
 * 判断是否为今天
 * @param time 秒数
 * @returns boolean
 */
function isToday(time: number) {
  return (
    dayjs(time * 1000).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD")
  );
}

/**
 * 判断是否为明天
 * @param time 秒数
 * @returns boolean
 */
function isTomorrow(time: number) {
  return (
    dayjs(time * 1000).format("YYYY-MM-DD") ===
    dayjs().add(1, "day").format("YYYY-MM-DD")
  );
}

function format(time: number) {
  let prev = "";
  if (isToday(time)) {
    prev = "今天";
  } else if (isTomorrow(time)) {
    prev = "明天";
  } else {
    prev = "";
  }

  return prev + dayjs(time * 1000).format("MM月DD日");
}

const showDateFormat = computed(() => {
  return props.showDate.map((item) => format(item));
});

function formatShowAt(time: number) {
  return dayjs(time * 1000).format("HH:mm");
}

function fen2yuan(fen: number) {
  return fen / 100;
}

function handleChange(index: number, title: string) {
  console.log("handleChange", index, title);
  // 触发 change-date
  emit("change-date", props.showDate[index]);
}

const active = ref(0);
</script>

<template>
  <div class="cinema-film-schedules" v-if="showDate.length">
    <van-tabs v-model:active="active" sticky shrink @change="handleChange">
      <van-tab
        v-for="(item, index) in showDateFormat"
        :key="index"
        :title="'' + item"
      >
        <van-cell
          v-for="item in schedules"
          :key="item.scheduleId"
          center
          :title="item.filmLanguage"
          :value="fen2yuan(item.salePrice)"
          :label="formatShowAt(item.showAt)"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>
