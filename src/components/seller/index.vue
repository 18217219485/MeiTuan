<template>
  <div class="seller-wrapper">
    <div class="baseInformation">
      <div>
        <div class="sellerName titleName">
          <p>粥品香坊（大运村）</p>
          <div>
            <star :size=36 :score=6></star>
            <span class="special">(661)</span>
            <span>月售690单</span>
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
          <p>20<span>元</span></p>
        </li>
        <li>
          <p>商家配送</p>
          <p>4<span>元</span></p>
        </li>
        <li>
          <p>平均配送时间</p>
          <p>39<span>分钟</span></p>
        </li>
      </ul>
    </div>
    <div class="interval"></div>
    <div class="activity">
      <p class="titleName">公告与活动</p>
      <p class="text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代制作工艺，由世界烹饪大师屈浩先生领先制发。坚守纯天然，无添加腐化剂，深得消费者青睐
        发展至今已经成为粥类引领品牌，是2008年奥运会和2013年园博会的指定餐饮服务商
      </p>
      <ul class="activityList">
        <li class="activityItem">
          <span class="decrease"></span>
          <p>在线支付满28减5，满50减10</p>
        </li>
        <li class="activityItem">
          <span class="discount"></span>
          <p>单人精彩赛</p>
        </li>
        <li class="activityItem">
          <span class="invoice"></span>
          <p>特价饮品8折优惠抢购</p>
        </li>
        <li class="activityItem">
          <span class="guarantee"></span>
          <p>单人特色套餐</p>
        </li>
        <li class="activityItem">
          <span class="special"></span>
          <p>该商家支持开发票，请在下单时填写好发票抬头</p>
        </li>
      </ul>
    </div>
    <div class="interval"></div>
    <div class="scenes">
      <p class="titleName">商家实景</p>
      <picture-swiper></picture-swiper>
    </div>
    <div class="interval"></div>
    <div class="sellerInformation">
      <p class="titleName">商家信息</p>
      <ul class="sellerList">
        <li v-for="item in sellerData" :key="item" class="sellerItem">
          <p>该商家支持发票，请在下单时填写好发票抬头</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Star from '../util/star'
import PictureSwiper from './item'
export default {
  name: 'seller',
  data () {
    return {
      isCollected: false,
      pictureData: [11, 2, 3, 4],
      sellerData: [11, 22, 33, 44]
    }
  },
  components: {Star, PictureSwiper},
  methods: {
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/seller.styl'
</style>
