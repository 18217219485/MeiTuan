<template>
  <div class="m-header">
    <div class="topper">
      <div class="logo">
        <img />
      </div>
      <div class="main">
        <div class="brand">
          <div class="brand-image"></div>
          <p>粥品香坊（大运村）</p>
        </div>
        <div class="send">
          <p>蜂鸟专送/38分钟送达</p>
        </div>
        <div class="reduction">
          <div class="icon decrease"></div>
          <p>在线支付满25减8，满50减10</p>
        </div>
      </div>
      <div class="num">
        <p>5个 ></p>
      </div>
    </div>
    <div class="announcement" @click="showDetail = !showDetail">
      <div class="bulletin"></div>
      <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，再融合现代的烹饪技术</p>
      <i></i>
    </div>
    <transition name="fade">
      <discount-detail v-show="showDetail" @closeDialog="closeDialog"></discount-detail>
    </transition>
  </div>
</template>

<script>
import LossDialog from 'vux/src/components/x-dialog/index'
import DiscountDetail from './discountDetail'
export default {
  name: 'topper',
  data () {
    return {
      showDetail: false
    }
  },
  components: {
    LossDialog, DiscountDetail
  },
  methods: {
    closeDialog (obj) {
      this.showDetail = obj
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/common/common.styl'
  @import '../../assets/stylus/topper.styl'
  .brand-image
    width :30px
    height :18px
    bg-img("../../assets/image/brand")
    background-size:30px 18px
    background-repeat :no-repeat
    margin-right :.12rem
  .reduction div
    width :12px
    height :12px
    background-size:12px 12px
    background-repeat :no-repeat
    margin-right : 0.08rem
    &.decrease
      bg-img("../../assets/image/decrease_1")
  .bulletin
    width :22px
    height :12px
    bg-img("../../assets/image/bulletin")
    background-size:22px 12px
    background-repeat :no-repeat
    margin-right:0.08rem
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity :0
</style>
