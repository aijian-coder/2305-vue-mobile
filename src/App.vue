<script lang="ts" setup>
import axios from "axios";

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

interface IFilm {
  filmId: number;
  name: string;
  poster: string;
}

interface IRespFilms {
  status: number;
  msg: string;
  data: {
    total: number;
    films: IFilm[];
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
    console.log(response.data.msg);
  });

  axios<IRespFilms>("/api/gateway", {
    params: {
      cityId: 440300,
      pageNum: 1,
      pageSize: 10,
      type: 1,
    },
    headers: {
      "x-host": "mall.film-ticket.film.list",
    },
  }).then((response) => {
    console.log("response", response);
    response.data.data.total;
    response.data.data.films[0].filmId;
  });
}
</script>

<template>
  <div>
    <button @click="test">测试</button>
  </div>
</template>
