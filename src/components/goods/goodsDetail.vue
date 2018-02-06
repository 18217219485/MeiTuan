<template>
    <div class="goodsDetail">
      <scroller>
        <div class="baseInformation">
          <img src="" alt="">
          <i class="icon-arrow_lift" @click="back"></i>
          <div class="saleInformation">
            <p>皮蛋瘦肉粥</p>
            <p>月售1132份  好评率100%</p>
            <div>
              <p class="rmb">¥12 <span class="originRmb">¥28</span></p>
              <span>加入购物车</span>
            </div>
          </div>
        </div>
        <div class="interval"></div>
        <div class="goodsIntroduction">
          <p class="title">商品介绍</p>
          <p class="content">
            一碗皮蛋瘦肉粥，总是我到店里的不二之选，香浓软骨，饱腹暖心，让人觉得喝这一碗粥也觉得心满意足,
            一碗皮蛋瘦肉粥，总是我到店里的不二之选，香浓软骨，饱腹暖心，让人觉得喝这一碗粥也觉得心满意足,
            一碗皮蛋瘦肉粥，总是我到店里的不二之选，香浓软骨，饱腹暖心，让人觉得喝这一碗粥也觉得心满意足
          </p>
        </div>
        <div class="interval"></div>
        <div class="goodsMark">
          <rating-type>
            <p class="title" style="paddingTop:.36rem;font-size: .28rem">商品评价</p>
          </rating-type>
          <div class="line"></div>
          <ul class="remarkContent">
            <li class="remarkItem" v-for =" item in remarkList" :key="item">
              <div class="above">
                <p>2016-07-07</p>
                <div class="right">
                  <span>2*****6</span>
                  <img src="" alt="">
                </div>
              </div>
              <div class="detailContent">
                <span class="icon-thumb_up"></span>
                <p>太少了，不够一个人吃,希望下次可以菜量大一点</p>
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
      remarkList: [11, 22, 33, 44, 55]
    }
  },
  components: {RatingType},
  methods: {
    back () {
      this.$emit('closeGoodsDetail', false)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/goodsDetail.styl'
</style>
