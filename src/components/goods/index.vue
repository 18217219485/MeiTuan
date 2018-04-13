<template>
  <div>
    <div class="goods-wrapper">
      <ul class="hotList">
        <scroller ref="hotswiper">
        <li v-for="(item,index) in goodsData" :key="index" @click="goDetail(index)" ref="list">
          <p>{{item.name}}</p>
          <span class="line"></span>
        </li>
        </scroller>
      </ul>
      <div class="listDetail">
        <scroller ref="detailScroller">
        <div class="item" v-for="(item,index) in goodsData" :key="index">
          <div class="name">
            <p>{{item.name}}</p>
          </div>
          <ul class="food">
            <li v-for="(food,index) in item.foods" :key="index">
              <img :src="food.icon" @click="selectFood(food)">
              <div class="description">
                <p class="title">{{food.name}}</p>
                <p class="rate">{{food.description}}</p>
                <div class="rate">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <p class="rmb">¥{{food.price}}<span class="originRmb" v-show="food.oldPrice">¥{{food.oldPrice}}</span></p>
              </div>
              <quantity @showCount="showCount"></quantity>
            </li>
          </ul>
        </div>
        </scroller>
      </div>
      <shopping-car :count="count"></shopping-car>
    </div>
    <goods-detail  @closeGoodsDetail="closeGoodsDetail" :goodsDetail="goodsDetail" v-if="showFood"></goods-detail>
  </div>
</template>

<script>
import Quantity from '../util/quantity'
import ShoppingCar from '../shoppingCar/index'
import GoodsDetail from './goodsDetail'
import {mapState} from 'vuex'
export default {
  name: 'goods',
  data () {
    return {
      count: null,
      goods: [],
      showFood: false,
      goodsDetail: {}
    }
  },
  components: {Quantity, ShoppingCar, GoodsDetail},
  mounted () {
    this.initData()
  },
  computed: {
    ...mapState({
      goodsData: 'goodsData'
    })
  },
  methods: {
    initData () {
      this.$store.dispatch('initGoods', this)
    },
    goDetail (index) { // 直接用点击click事件，让当前的index元素添加类名，vue的短板
      let menuList = this.$refs.list
      menuList.map((v, i) => {
        v.classList.remove('active')
        if (index === i) v.classList.add('active') // 点击的对应元素点亮
      })
    },
    showCount (obj) {
      this.count = obj
    },
    selectFood (food) {
      this.goodsDetail = food
      this.showFood = true
    },
    closeGoodsDetail (obj) {
      this.showFood = obj
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/goods.styl'
</style>
