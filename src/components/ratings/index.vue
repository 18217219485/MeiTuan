<template>
  <div class="ratings-wrapper">
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
.ratings-wrapper
  .scores
    display :flex
    padding :.36rem .48rem
    .orange
      color:rgb(255,153,0)
    .gray
      color:rgb(147,153,159)
    .compare
      text-align :center
      position:relative
      padding-right: .48rem
      border-right:1px solid rgba(7,17,27,.1)
      p:first-child
        font-size:.48rem
        color:rgb(255,153,0)
      p:nth-child(2)
        font-size:.24rem
        color:rgb(7,17,27)
        line-height :1
        margin :.12rem 0 .16rem
      p:last-child
        font-size:.2rem
        color:rgb(147,153,159)
    .scoreDetail
      padding-left:.48rem
      >li
        display :flex
        font-size:.24rem
        line-height :1.5
        &:nth-child(2)
          margin :.16rem 0
        >p
         margin-right :.12rem
  .content
    .addLine
      border-bottom :1px solid rgba(7,17,27,.1)
    .customer-remark
      margin :0 .36rem
      .remarkItem
        padding :.36rem 0 .36rem .8rem
        border-1px(rgba(7,17,27,.1))
        position :relative
        .avtor
          position :absolute
          left :0
          width :.56rem
          height :.56rem
          border-radius :50%
          border: 1px solid red
        .right
          .baseInfor
            display :flex
            justify-content :space-between
            font-size:.2rem
            color :rgb(147,153,159)
            .leftBase
              div
                 display :flex
                 justify-content :center
                 margin :.06rem 0 .12rem
          .text
            font-size:.24rem
            color:rgb(7,17,27)
          .review
            display :flex
            align-items :center
            margin-top:.16rem
            span
              font-size:.24rem
              margin-right:.16rem
              &.icon-thumb_up
                color:rgb(0,160,220)
              &.icon-thumb_down
               color:rgb(183,187,191)
            .reviewItem
               padding :.06rem .12rem
               margin-right:.16rem
               border: 1px solid rgba(7,17,27,.1)
               border-radius :4px
</style>
