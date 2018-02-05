<template>
  <div class="goods-wrapper">
    <ul class="hotList">
      <li v-for="(item,index) in hotList" :key="index" @click="goDetail(index)" ref="list">
        <p>红烧{{item}}</p>
        <span class="line"></span>
      </li>
    </ul>
    <div class="listDetail">
      <div class="item" v-for="item in detailList" :key="item">
        <div class="name">
          <p>单人特色套餐</p>
        </div>
        <ul class="food">
          <li>
            <img src="" alt="" @click="goodsDetail">
            <div class="description">
              <p class="title">莲子核桃黑米粥</p>
              <p class="rate" style="display: none">咸粥</p>
              <div class="rate">
                <span>月售1132份</span>
                <span>好评率100%</span>
              </div>
              <p class="rmb">¥12 <span class="originRmb">¥28</span></p>
              <span>加入购物车</span>
            </div>
            <quantity @showCount="showCount"></quantity>
          </li>
        </ul>
      </div>
    </div>
    <shopping-car :count="count"></shopping-car>
    <goods-detail v-show="showGoodsDetail"></goods-detail>
  </div>
</template>

<script>
import Quantity from '../util/quantity'
import ShoppingCar from '../shoppingCar/index'
import GoodsDetail from './goodsDetail'
export default {
  name: 'goods',
  data () {
    return {
      count: null,
      hotList: [11, 22, 33, 44, 55, 66, 77, 88, 99],
      detailList: [11, 22, 33, 44, 99, 66],
      showGoodsDetail: false
    }
  },
  components: {Quantity, ShoppingCar, GoodsDetail},
  methods: {
    goDetail (index) { // 直接用点击click事件，让当前的index元素添加类名，vue的短板
      let menuList = this.$refs.list
      menuList.map((v, i) => {
        v.classList.remove('active')
        if (index === i) v.classList.add('active')
      })
    },
    showCount (obj) {
      this.count = obj
    },
    goodsDetail () {
      this.showGoodsDetail = true
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/goods.styl'
</style>
