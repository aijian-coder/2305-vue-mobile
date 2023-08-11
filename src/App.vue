<script lang="ts" setup>
import axios from "axios";

const test = () => {
  axios
    .get("/api/gateway?k=8433057", {
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    })
    .then((response) => {
      console.log("response", response);
    });
};

function test3000() {
  axios.get("/custom/test").then((response) => {
    console.log("response", response);
  });
}
</script>

<template>
  <div>
    <button @click="test">测试</button>
    <button @click="test3000">测试 3000</button>
  </div>
</template>
