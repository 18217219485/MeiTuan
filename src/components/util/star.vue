<template>
   <div class="star-wrapper" :class="starType">
     <span v-for="(itemClass,index) in itemClassList" :class="itemClass" :key="index" class="star-item"></span>
   </div>
</template>

<script>
const maxLength = 5
const ON = 'on'
const HALF = 'half'
const OFF = 'off'
export default {
  name: 'star',
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType () {
      return 'star-' + this.size
    },
    itemClassList () {
      let result = []
      let resultScore = Math.floor(this.score / 1) // 向下取整
      if (resultScore % 2 === 0) { // 偶数
        for (let i = 0; i < resultScore / 2; i++) {
          result.push(ON)
        }
      } else if (resultScore % 2 === 1) { // 奇数
        for (let i = 0; i < (resultScore - 1) / 2; i++) {
          result.push(ON)
        }
        result.push(HALF)
      }
      let Length = maxLength - result.length
      if (result.length < maxLength) { // 剩下
        for (let j = 0; j < Length; j++) {
          result.push(OFF)
        }
      }
      return result
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
.star-wrapper
  display: flex
  justify-content :center
  align-content :center
  background-repeat: no-repeat
  &.star-24
    .star-item
      width: 10px
      height: 10px
      margin-right: 3px
      background-size: 10px 10px
      &.on
        bg-img("../../assets/image/star24_on")
      &.off
        bg-img("../../assets/image/star24_off")
      &.half
        bg-img("../../assets/image/star24_half")

  &.star-36
    .star-item
      width: 15px
      height: 15px
      margin-right: 6px
      background-size: 15px 15px
      &.on
        bg-img("../../assets/image/star36_on")
      &.off
        bg-img("../../assets/image/star36_off")
      &.half
        bg-img("../../assets/image/star36_half")

  &.star-48
    .star-item
      width: 20px
      height: 20px
      margin-right: 22px
      background-size: 20px 20px
      &.on
        bg-img("../../assets/image/star48_on")
      &.off
        bg-img("../../assets/image/star48_off")
      &.half
        bg-img("../../assets/image/star48_half")
</style>
