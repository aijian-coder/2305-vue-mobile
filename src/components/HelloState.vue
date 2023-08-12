<template>
  <div>
    <h2>HelloState</h2>
    <p>msg: {{ app.msg }}</p>
    <p>msg: {{ msg }}</p>
    <p>token: {{ token }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRef, toRefs } from "vue";
import { storeToRefs } from "pinia";
import { useApp } from "@/stores/app";

// 调用 useApp() 获取该 store 的实例对象 (Proxy)
const app = useApp();
// 能不能对 store 中的数据做解构使用了？不可以的，会失去响应式
// const { msg, token } = app;

// 获取 store 中 state 的四种方式
// 1. 直接通过 store 实例 .xxx 的方式
// 2. 通过 computed 获取某个 state 的方式
// const msg = computed(() => app.msg);
// 3. 通过 toRef 的方式
// const msg = toRef(app, "msg");
// const token = toRef(app, "token");
// 4. 通过 storeToRefs 的方式
const { msg, token } = storeToRefs(app);

// 可以使用 toRefs 对 store 做处理，但是不推荐, 会将不需要转成 ref 的属性也转换了。应该使用 pinia 提供的 storeToRefs
// const { msg, token } = toRefs(app);
console.log(toRefs(app), "=== toRefs");
console.log(storeToRefs(app), "=== storeToRefs");
</script>
