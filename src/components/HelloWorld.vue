<template>
  <div>
    <h2>Hello World</h2>
    <p>msg: {{ app.msg }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useApp } from "@/stores/app";

const app = useApp();
</script>
