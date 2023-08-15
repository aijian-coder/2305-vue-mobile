<script lang="ts" setup>
defineProps<{
  info: API.ICinema;
}>();
</script>

<template>
  <div class="cinema-info">
    <div class="cinema-title">{{ info.name }}</div>
    <div class="cinema-tags">
      <van-tag v-for="(tag, index) in info.services" :key="index">
        {{ tag.name }}
      </van-tag>
    </div>
    <div class="cinema-address">
      <div class="address">
        <span>{{ info.address }}</span>
      </div>
      <a class="tell" :href="`tel:${info.phone}`">
        <van-icon name="phone-o" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cinema-info {
  padding: 10px;
  .cinema-title {
    text-align: center;
  }
  .cinema-tags {
    padding: 10px 0;
    text-align: center;
  }
  .van-tag ~ .van-tag {
    margin-left: 5px;
  }
  .cinema-address {
    display: flex;
  }
  .address {
    display: flex;
    align-items: center;
    height: 32px;
    overflow: hidden;
    &::before {
      content: "";
      flex-shrink: 0;
      width: 20px;
      height: 32px;
      background: url("./assets/location.png") no-repeat;
      background-size: 100%;
      margin-right: 5px;
    }
    span {
      line-height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .tell {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    background-color: red;
  }
}
</style>
