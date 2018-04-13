<template>
    <div class="swiper-wrapper">
      <swiper :option="swiperOption">
        <div class="swiper-container">
          <swiper-slide v-for="(item,index) in pictureData" :key="index" >
            <img :src="item" alt="" class="swiper-item">
          </swiper-slide>
        </div>
      </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'item',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        mousewheelControl: true
      }
    }
  },
  props: {
    pictureData: Array
  },
  components: {swiper, swiperSlide}
}
</script>

<style scoped lang="stylus">
.swiper-wrapper
  margin-top:.12rem
  .swiper-container
    display :flex
    overflow :hidden
    .swiper-item
      width :2.4rem
      height :1.8rem
      display :block
      border:1px solid #ccc
      margin-right:.12rem
</style>
