<template>
    <div class="goodsDetail">
      <scroller>
        <div class="baseInformation">
          <img :src="goodsDetail.image">
          <i class="icon-arrow_lift" @click="back"></i>
          <div class="saleInformation">
            <p>{{goodsDetail.name}}</p>
            <p>月售{{goodsDetail.sellCount}}份  好评率{{goodsDetail.rating}}%</p>
            <div>
              <p class="rmb">¥{{goodsDetail.price}} <span class="originRmb" v-show="goodsDetail.oldPrice">¥{{goodsDetail.oldPrice}}</span></p>
              <span>加入购物车</span>
            </div>
          </div>
        </div>
        <div class="interval" v-show="goodsDetail.info"></div>
        <div class="goodsIntroduction" v-show="goodsDetail.info">
          <p class="title">商品介绍</p>
          <p class="content">
            {{goodsDetail.info}}
          </p>
        </div>
        <div class="interval"></div>
        <div class="goodsMark">
          <rating-type :ratings="goodsDetail.ratings" @select = "select" :onlyText = "onlyText" @toggle = "toggle">
            <p class="title" style="paddingTop:.36rem;font-size: .28rem">商品评价</p>
          </rating-type>
          <div class="line"></div>
          <ul class="remarkContent">
            <li class="remarkItem" v-for =" (item,index) in selectRating" :key="index">
              <div class="above">
                <p>{{item.rateTime}}</p>
                <div class="right">
                  <span>{{item.username}}</span>
                  <img :src="item.avatar">
                </div>
              </div>
              <div class="detailContent">
                <span :class="item.rateType === 0 ?'icon-thumb_up' : 'icon-thumb_down'"></span>
                <p>{{item.text}}</p>
              </div>
            </li>
          </ul>
        </div>
      </scroller>
    </div>
</template>

<script>
import RatingType from '../ratings/ratingType'
export default {
  name: 'goods-detail',
  data () {
    return {
      selectRating: '',
      onlyText: false
    }
  },
  props: {
    goodsDetail: Object
  },
  mounted () {
    this.selectRating = this.goodsDetail.ratings
  },
  components: {RatingType},
  methods: {
    back () {
      this.$emit('closeGoodsDetail', false)
    },
    select (data) {
      this.onlyText = false
      this.selectRating = data
    },
    toggle () {
      this.onlyText = !this.onlyText
      if (this.onlyText) {
        this.selectRating = this.selectRating.filter(item => {
          return item.text !== ''
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/goodsDetail.styl'
</style>
