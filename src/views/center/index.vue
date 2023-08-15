<script lang="ts" setup>
import { useCountDown } from "@/hooks/countDown";

function onChange(value: number) {
  console.log("onChange", value);
}

function onFinish() {
  console.log("onFinish");
}

const { current, start, pause, reset } = useCountDown({
  time: 5,
  onChange,
  onFinish,
});

const {
  current: a,
  start: aStart,
  pause: aPause,
  reset: aRest,
} = useCountDown({ time: 60 });
</script>

<template>
  <div class="page-center">
    <h2>我的</h2>
    <p>{{ current }}</p>
    <van-button @click="start">start</van-button>
    <van-button @click="pause">pause</van-button>
    <van-button @click="reset">reset</van-button>

    <p>{{ a }}</p>
    <van-button @click="aStart">start</van-button>
    <van-button @click="aPause">pause</van-button>
    <van-button @click="aRest">reset</van-button>
  </div>
</template>
