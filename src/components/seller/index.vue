<template>
  <div class="seller-wrapper">
    <scroller>
    <div class="baseInformation">
      <div>
        <div class="sellerName titleName">
          <p>{{sellerData.name}}</p>
          <div>
            <star :size=36 :score= sellerData.score></star>
            <span class="special">(661)</span>
            <span>月售{{sellerData.sellCount}}单</span>
          </div>
        </div>
        <div class="collect">
          <div @click="isCollected = !isCollected" :class="isCollected ? 'icon-favorite collected':'icon-favorite'"></div>
          <span v-show="isCollected">已收藏</span>
        </div>
      </div>
      <ul>
        <li>
          <p>起送价</p>
          <p>{{sellerData.minPrice}}<span>元</span></p>
        </li>
        <li>
          <p>商家配送</p>
          <p>{{sellerData.deliveryPrice}}<span>元</span></p>
        </li>
        <li>
          <p>平均配送时间</p>
          <p>{{sellerData.deliveryTime}}<span>分钟</span></p>
        </li>
      </ul>
    </div>
    <div class="interval"></div>
    <div class="activity">
      <p class="titleName">公告与活动</p>
      <p class="text">{{sellerData.bulletin}}
      </p>
      <ul class="activityList">
        <li class="activityItem" v-for="(item,index) in sellerData.supports" :key="index">
          <span  :class="handleClass(item.type)"></span>
          <p>{{item.description}}</p>
        </li>
      </ul>
    </div>
    <div class="interval"></div>
    <div class="scenes">
      <p class="titleName">商家实景</p>
      <picture-swiper :pictureData="sellerData.pics"></picture-swiper>
    </div>
    <div class="interval"></div>
    <div class="sellerInformation">
      <p class="titleName">商家信息</p>
      <ul class="sellerList">
        <li v-for="(item,index) in sellerData.infos" :key="index" class="sellerItem">
          <p>{{item}}</p>
        </li>
      </ul>
    </div>
    </scroller>
  </div>
</template>

<script>
import Star from '../util/star'
import PictureSwiper from './item'
import { mapState } from 'vuex'
export default {
  name: 'seller',
  data () {
    return {
      isCollected: false,
      pictureData: [11, 2, 3, 4]
    }
  },
  created () {
    this.initData()
  },
  computed: {
    ...mapState({
      sellerData: 'sellerData'
    })
  },
  components: {Star, PictureSwiper},
  methods: {
    initData () {
      this.$store.dispatch('initSeller', this)
    },
    handleClass (type) {
      switch (type) {
        case 0:
          return 'decrease'
        case 1:
          return 'discount'
        case 2:
          return 'invoice'
        case 3:
          return 'guarantee'
        case 4:
          return 'special'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/seller.styl'
</style>
