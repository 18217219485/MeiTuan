<template>
  <div class="shoppingCar-wrapper">
    <div class="shoppingCar">
      <div class="total">
        <div class="car-box">
          <div class="bg-car"></div>
          <div class="car icon-shopping_cart active" @click="toggleList">
            <span class="count">{{count}}</span>
          </div>
        </div>
        <p class="totalMoney">¥0</p>
        <div class="line"></div>
        <p class="distribution">另需配送费<span>4</span>元</p>
      </div>
      <div class="startSend">
        <p><span>¥20</span>起送</p>
      </div>
    </div>
    <div class="carDetail" v-show="isFold">
      <div>
        <p>购物车</p>
        <p class="empty" @click="empty">清空</p>
      </div>
      <ul class="goodsList">
        <li class="goodsItem">
          <p>莲子核桃黑米粥</p>
          <quantity></quantity>
        </li>
        <li class="goodsItem">
          <p>莲子核桃黑米粥</p>
          <quantity></quantity>
        </li>
      </ul>
    </div>
    <div class="mask" v-show="isFold"></div>
  </div>
</template>

<script>
import Quantity from '../util/quantity'
const objBody = document.getElementsByTagName('body')[0]
export default {
  name: 'shopping-car',
  data () {
    return {
      isFold: false
    }
  },
  props: {
    count: {
      type: Number,
      default: null
    }
  },
  components: {Quantity},
  methods: {
    toggleList () {
      this.isFold = !this.isFold
      objBody.style.height = '100%'
      objBody.style.overflow = 'hidden'
    },
    empty () {
      this.isFold = false
      objBody.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/shoppingCar.styl'
</style>
