<script lang="ts" setup>
import axios from "axios";
import { httpGet } from "@/utils/request.ts";
import { getCityList } from "@/api/city";

interface ICity {
  cityId: number;
  isHot: number;
  name: string;
  pinyin: string;
}

interface IResp {
  status: number;
  msg: string;
  data: {
    cities: ICity[];
  };
}

function test() {
  // axios<string>({}).then((response) => {
  //   response.data;
  // });

  axios<IResp>("/api/gateway", {
    headers: {
      "x-host": "mall.film-ticket.city.list",
    },
  }).then((response) => {
    console.log("msg", response.data.msg); // 'ok'
    console.log("status", response.data.status); // 0
    console.log("data", response.data.data); // { cities: [] }
  });
}

function test1() {
  // httpGet<{
  //   cities: ICity[];
  // }>("mall.film-ticket.city.list").then((response) => {
  //   console.log(response); // { cities: [] }
  //   response.cities;
  // });

  getCityList().then((resp) => {
    console.log(resp.cities);
  });
}
</script>

<template>
  <div>
    <button @click="test">测试</button>
    <button @click="test1">测试 request</button>
  </div>
</template>
