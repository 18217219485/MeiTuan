<template>
  <div class="rating-wrapper">
    <div class="satisfy-type">
      <slot></slot>
      <ul>
        <li class="active">
          <p>全部<span>57</span></p>
        </li>
        <li>
          <p>满意<span>47</span></p>
        </li>
        <li class="noSatisfy">
          <p>不满意<span>10</span></p>
        </li>
      </ul>
    </div>
    <div class="content-evaluation">
      <span class="icon-check_circle select"></span>
      <span>只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rating-type'
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
.rating-wrapper
  margin :0 .36rem
  .satisfy-type
    ul
      padding :.36rem 0
      font-size:.24rem
      display :flex
      border-1px(rgba(7,17,27,.1))
      li
        padding :.16rem .24rem
        background-color :rgba(0,160,220,.2)
        &.active
          background-color :rgb(0,160,220)
          color:rgb(255,255,255)
        &:nth-child(2)
          margin :0 .16rem
        &:last-child
          background-color :rgba(77,85,93,.2)
          &.noSatisfy
            background-color :rgb(77,85,93)
            color:rgb(255,255,255)
  .content-evaluation
    padding :.24rem 0
    font-size:.24rem
    color:rgb(147,153,159)
    display :flex
    align-items :center
    .icon-check_circle
      font-size:.48rem
      margin-right:.08rem
      &.select
        color :rgb(0,160,220)
</style>
