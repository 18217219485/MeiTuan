<template>
    <div class="goodsDetail">
      <div class="baseInformation">
        <img src="" alt="">
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
      <div class="goodsMark"></div>
    </div>
</template>

<script>
export default {
  name: 'goods-detail'
}
</script>

<style scoped lang="stylus">
.goodsDetail
  position :fixed
  top:0
  left :0
  background-color :white
  .baseInformation
    img
      display :block
      width :100%
      height :7.5rem
    .saleInformation
      padding :.36rem
      >p:first-child
        font-size :.28rem
        font-weight :bold
        color:rgb(7,17,27)
      >p:nth-child(2)
        font-size:.2rem
        color:rgb(147,153,159)
        margin :.16rem 0 .36rem
      >div
        display :flex
        justify-content :space-between
        font-size:.24rem
        .rmb
          color:rgb(240,20,20)
          font-weight :bold
          font-size :.28rem
          .originRmb
            font-size:.2rem
            color:rgb(147,153,159)
            text-decoration :line-through
        >span
          display :block
          width :1.48rem
          height :.48rem
          background-color :rgb(0,160,220)
          text-align :center
          line-height :.48rem
          border-radius :.24rem
          color:white
  .goodsIntroduction
    padding :.36rem
</style>
