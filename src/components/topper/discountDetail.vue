<template>
  <div class="discount-wrapper" :style={height:h}>
    <div class="title">
      <p class="name">{{sellerData.name}}</p>
      <star :size = 48 :score= sellerData.foodScore></star>
    </div>
    <div class="discountInformation">
      <div class="header">
        <span class="line"></span>
        <p>优惠信息</p>
        <span class="line"></span>
      </div>
      <ul class="content" v-for="(item,index) in sellerData.supports" :key="index">
        <li>
          <span class="decrease"></span>
          <p>{{item.description}}</p>
        </li>
      </ul>
    </div>
    <div class="announcement">
      <div class="header">
        <span class="line"></span>
        <p>商家公告</p>
        <span class="line"></span>
      </div>
      <p class="content">
        {{sellerData.bulletin}}
      </p>
    </div>
    <div class="close" @click="close">
      <span>x</span>
    </div>
  </div>
</template>

<script>
import Star from '../util/star'
export default {
  name: 'discount-detail',
  props: ['sellerData'],
  components: {
    Star
  },
  computed: {
    h () {
      let h = document.documentElement.clientHeight
      return h + 'px'
    }
  },
  methods: {
    close () {
      this.$emit('closeDialog', false)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/discountDetail.styl'
</style>
