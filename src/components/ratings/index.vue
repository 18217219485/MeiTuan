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
      <div class="satisfaction">
        <div>
          <span>全部</span>
        </div>
        <div></div>
      </div>
      <ul class="remark"></ul>
    </div>
  </div>
</template>

<script>
import Star from '../util/star'
export default {
  name: 'ratings',
  methods: {},
  components: {
    Star
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
  .interval
    width :100%
    height: .36rem
    background-color :rgba(7,17,27,.1)
    border-top:2px solid rgba(0,0,0,.1)
    border-bottom:2px solid rgba(0,0,0,.1)
  .content
    .satisfaction
      margin :0 .36rem
</style>
