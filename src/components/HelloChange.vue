<template>
  <div>
    <h2>HelloChange</h2>
    <!-- 1. 直接修改 -->
    <button @click="app.msg = '张三'">修改 msg</button> <br />
    <!-- 2. 通过调用 store 实例的 $patch 函数传递对象的方式 -->
    <button @click="fn1">$patch - object</button> <br />
    <!-- 3. 通过调用 store 实例的 $patch 函数传递函数的方式 -->
    <button @click="fn2">$patch - function</button> <br />
    <!-- 4. 通过修改 store 实例的 $state 属性的方式 -->
    <button @click="fn3">$state</button> <br />
    <!-- 5. 通过调用 定义 store 时配置的 aciton 来修改 -->
    <button @click="fn4">action</button> <br />
  </div>
</template>

<script lang="ts" setup>
import { useApp } from "@/stores/app";

const app = useApp();

function fn1() {
  // 传递的对象内部是与源 state 数据做合并的操作，而不是替换
  app.$patch({
    msg: "里斯",
  });
}
function fn2() {
  app.$patch((state) => {
    console.log("state", state); // app store
    state.msg = "王五" + state.token;
  });
}
function fn3() {
  app.$state = {
    msg: "王五",
    token: "111",
  };
}
function fn4() {
  app.changeMsg(18);
}
</script>
