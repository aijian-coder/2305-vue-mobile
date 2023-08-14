<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import "swiper/css/bundle";

const container = ref<HTMLElement | null>(null);
onMounted(() => {
  // 不建议使用 css 选择器，原因是别的组件中也有使用 这个类名
  new Swiper(container.value!, {
    slidesPerView: 4,
    spaceBetween: 16,
    centeredSlides: true,
    slideToClickedSlide: true,
  });
});
</script>

<template>
  <div class="cinema-film-banner">
    <!-- swiper 容器 -->
    <div ref="container" class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://pic.maizuo.com/usr/movie/f57040d1983ab2923e53aedb36a00cd4.jpg"
            alt=""
          />
        </div>
      </div>
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
}
</style>
