<template>
  <div>
    <HelloAPI />

    <HelloChange />

    <HelloState />

    <h1>App</h1>
    <p>msg: {{ app.msg }}</p>
    <p>token: {{ app.token }}</p>
    <p>reverseMsg: {{ app.reverseMsg }}</p>
    <button @click="app.changeMsg(18)">修改 msg</button>
    <button @click="app.changeToken()">修改 token</button>
    <p>count: {{ counter.count }}</p>
    <p>countPlus: {{ counter.countPlus }}</p>
    <button @click="counter.increment()">++</button>
    <button @click="counter.decrement()">--</button>
    <hr />

    <HelloWorld />
  </div>
</template>

<script lang="ts" setup>
// 要使用 store ,就引入相关 store 的组合式函数调用接口，调用返回值就是该store的实例对象
// import { useApp } from "@/stores/app";
// import { useCounter } from "@/stores/counter";

// import { useApp, useCounter } from "@/stores";

import { useStore } from "@/hooks/store";

import HelloWorld from "./components/HelloWorld.vue";
import HelloState from "./components/HelloState.vue";
import HelloChange from "./components/HelloChange.vue";
import HelloAPI from "./components/HelloAPI.vue";

// const app = useApp();
// const counter = useCounter();

const { app, counter } = useStore();
console.log("app", app);
</script>
