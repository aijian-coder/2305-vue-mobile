<script lang="ts" setup>
import CinemaInfo from "@/components/cinema-info/index.vue";
import CinemaFilmBanner from "@/components/cinema-film-banner/index.vue";
</script>

<template>
  <div class="page-cinema-info">
    <van-nav-bar left-arrow />

    <CinemaInfo />

    <CinemaFilmBanner />
  </div>
</template>
