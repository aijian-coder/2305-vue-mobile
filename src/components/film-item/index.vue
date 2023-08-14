<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  film: API.IFilm;
}>();

// 基于 props.film.actors => ['张三', '里斯', '王五'].join(' ')
const actorsText = computed(() =>
  props.film.actors.map((item) => item.name).join(" ")
);
</script>

<template>
  <div class="film-item">
    <div class="film-item__left">
      <img class="film-poster" :src="film.poster" />
    </div>
    <div class="film-item__right">
      <div class="info name">{{ film.name }}</div>
      <div class="info" v-visible="film.grade">
        观众评分 <span>{{ film.grade }}</span>
      </div>
      <div class="info">主演: {{ actorsText }}</div>
      <div class="info">{{ film.nation }} | {{ film.runtime }}分钟</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.film-item {
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid #000;

  &__left {
    width: 66px;
    height: 94px;
  }

  &__right {
    padding: 0 10px;
    flex: 1;
    overflow: hidden;
  }

  .film-poster {
    display: block;
    width: 66px;
    height: 94px;
  }

  .info {
    font-size: 14px;
    color: #797d82;
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &.name {
      font-size: 16px;
      color: #000;
    }

    span {
      color: orange;
    }
  }
}
</style>
