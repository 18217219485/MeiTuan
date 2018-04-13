<template>
  <div class="m-header">
    <div class="topper">
      <div class="logo">
        <img :src="sellerData.avatar" />
      </div>
      <div class="main">
        <div class="brand">
          <div class="brand-image"></div>
          <p>{{sellerData.name}}</p>
        </div>
        <div class="send">
          <p>{{sellerData.description}} / {{sellerData.deliveryTime}}分钟送达</p>
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
    <div class="announcement" @click="showDialog">
      <div class="bulletin"></div>
      <p>{{sellerData.bulletin}}</p>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <transition name="fade">
      <discount-detail v-show="showDetail" @closeDialog="closeDialog" :sellerData="sellerData"></discount-detail>
    </transition>
  </div>
</template>

<script>
import DiscountDetail from './discountDetail'
import {mapState} from 'vuex'
const objBody = document.getElementsByTagName('body')[0]
export default {
  name: 'topper',
  data () {
    return {
      showDetail: false
    }
  },
  computed: {
    ...mapState({
      sellerData: 'sellerData'
    })
  },
  components: {
    DiscountDetail
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$store.dispatch('initSeller', this)
    },
    showDialog () {
      this.showDetail = true
      objBody.style.height = '100%'
      objBody.style.overflow = 'hidden'
    },
    closeDialog (obj) {
      this.showDetail = obj
      objBody.style.overflow = 'auto'
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
