<template>
  <div>
    <h2>Hello API</h2>
    <p>msg: {{ app.msg }}</p>
    <p>token: {{ app.token }}</p>
    <p>count: {{ counter.count }}</p>
    <button @click="app.msg = '里斯'">change msg</button> <br />
    <button @click="app.$reset()">$reset 1</button><br />
    <button @click="counter.$reset()">$reset 2</button><br />
  </div>
</template>

<script lang="ts" setup>
import { useApp } from "@/stores/app";
import { useCounter } from "@/stores/counter";

const app = useApp();
const counter = useCounter();

// 订阅store数据的变化
app.$subscribe((mutation, state) => {
  console.log("app store 修改了", mutation);
  console.log("state", state);
});
</script>
