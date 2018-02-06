<template>
  <div class="ratings-wrapper">
    <scroller>
      <div class="scores">
        <div class="compare">
          <p>3.9</p>
          <p>综合评分</p>
          <p>高于周边商家70%</p>
        </div>
        <ul class="scoreDetail">
          <li>
            <p>服务态度</p>
            <star :size = 36 :score= 4.8></star>
            <span class="orange">4.8</span>
          </li>
          <li>
            <p>服务态度</p>
            <star :size = 36 :score= 9></star>
            <span class="orange">9</span>
          </li>
          <li>
            <p>送达时间</p>
            <span class="gray">44分钟</span>
          </li>
        </ul>
      </div>
      <div class="interval"></div>
      <div class="content">
        <div class="addLine">
          <rating-type></rating-type>
        </div>
        <ul class="customer-remark">
          <li class="remarkItem" v-for="item in remarkData" :key="item">
            <img src="" alt="" class="avtor">
            <div class="right">
              <div class="baseInfor">
                <div class="leftBase">
                  <p>吴大红***</p>
                  <div>
                    <star :size=36 :score=6></star>
                    <span>80分钟送达</span>
                  </div>
                </div>
                <span>2017-09-23 08:30</span>
              </div>
              <p class="text">干活土豆儿片挺好吃，味道很不错，今天海特意点了鱼香肉丝，味道也是杠杠滴，没有那么甜</p>
              <ul class="review">
                <span class="icon-thumb_up icon-thumb_down"></span>
                <li class="reviewItem">干锅土豆片</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </scroller>
  </div>
</template>

<script>
import Star from '../util/star'
import RatingType from './ratingType'
export default {
  name: 'ratings',
  data () {
    return {
      remarkData: [11, 22, 33, 44, 55]
    }
  },
  methods: {},
  components: {
    Star, RatingType
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/rating.styl'
</style>
