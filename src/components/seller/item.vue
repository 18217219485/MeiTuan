<template>
    <div class="swiper-wrapper">
      <swiper>
        <swiper-slide>1111</swiper-slide>
      </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'item',
  data () {
    return {
      swiperOption: {}
    }
  },
  components: {swiper, swiperSlide}
}
</script>

<style scoped lang="stylus">

</style>
