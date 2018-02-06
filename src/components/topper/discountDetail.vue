<template>
  <div class="discount-wrapper" :style={height:h}>
    <div class="title">
      <p class="name">粥品香坊（大运村）</p>
      <star :size = 48 :score= 4.8></star>
    </div>
    <div class="discountInformation">
      <div class="header">
        <span class="line"></span>
        <p>优惠信息</p>
        <span class="line"></span>
      </div>
      <ul class="content">
        <li>
          <span class="decrease"></span>
          <p>在线支付满28减5，满50减10</p>
        </li>
        <li>
          <span class="discount"></span>
          <p>在线支付满28减5，满50减10</p>
        </li>
        <li>
          <span class="invoice"></span>
          <p>在线支付满28减5，满50减10</p>
        </li>
        <li>
          <span class="guarantee"></span>
          <p>在线支付满28减5，满50减10</p>
        </li>
        <li>
          <span class="special"></span>
          <p>在线支付满28减5，满50减10</p>
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
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代制作工艺，由世界烹饪大师屈浩先生领先制发。坚守纯天然，无添加腐化剂，深得消费者青睐
        发展至今已经成为粥类引领品牌，是2008年奥运会和2013年园博会的指定餐饮服务商
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
