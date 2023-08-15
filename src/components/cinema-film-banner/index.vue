<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import Swiper from "swiper";
import "swiper/css/bundle";

const props = defineProps<{
  films: API.IFilm[];
}>();

// swiper 容器
const container = ref<HTMLElement | null>(null);
// 当前激活的轮播图的下标
const curIndex = ref(0);
// 当前激活的电影
const curFilm = computed(() => props.films[curIndex.value]);

onMounted(() => {
  // 不建议使用 css 选择器，原因是别的组件中也有使用 这个类名
  const mySwiper = new Swiper(container.value!, {
    slidesPerView: 4,
    spaceBetween: 16,
    centeredSlides: true,
    slideToClickedSlide: true,
  });

  mySwiper.on("slideChange", function () {
    // 修改 curIndex
    curIndex.value = mySwiper.activeIndex;

    // console.log("切换了", mySwiper.activeIndex);
    // console.log(props.films[mySwiper.activeIndex]);
  });
});
</script>

<template>
  <div class="cinema-film-banner">
    <!-- swiper 容器 -->
    <div ref="container" class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in films" :key="item.filmId">
          <img :src="item.poster" alt="" />
        </div>
      </div>
    </div>

    <!-- 电影描述 -->
    <div class="info">
      <p>{{ curFilm.name }}</p>
      <p>
        {{ curFilm.category }} | {{ curFilm.runtime }}分钟 |
        {{ curFilm.director }} |
        {{ curFilm.actors.map((item) => item.name).join(" ") }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cinema-film-banner {
  .swiper {
    box-sizing: border-box;
    height: 160px;
    padding: 15px 0;
    position: relative;
    background-color: aqua;
  }

  .swiper-slide {
    box-sizing: border-box;
    padding-top: 26px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 72px;
      height: 100%;
      transition: all 0.5s ease;
    }
  }

  .swiper-slide-active {
    padding-top: 0;

    img {
      width: 90px;
      height: 100%;
    }
  }

  .info {
    position: relative;
    z-index: 1;
    padding: 10px;
    background-color: #ccc;
    &::before {
      position: absolute;
      left: 50%;
      top: -20px;
      transform: translateX(-50%);
      content: "";
      display: block;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
    }
    p {
      margin: 0;
      padding: 0;
      text-align: center;
    }
  }
}
</style>
