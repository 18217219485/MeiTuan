<template>
  <div class="quantity-wrapper">
    <transition name="fade">
      <div class="decrease icon-remove_circle_outline" v-show="count>0" @click="reduceQuantity"></div>
    </transition>
    <div class="count" v-show="count>0">{{count}}</div>
    <div class="add icon-add_circle" @click="addQuantity"></div>
  </div>
</template>

<script>
export default {
  name: 'quantity',
  data () {
    return {
      count: null // 初始数量
    }
  },
  methods: {
    addQuantity () {
      this.count++
      this.$emit('showCount', this.count)
    },
    reduceQuantity () {
      this.count--
    }
  }
}
</script>

<style scoped lang="stylus">
.quantity-wrapper
  display :flex
  align-items :center
  .decrease
    font-size: .48rem
    padding :.06rem
    color:rgb(0,160,220)
  .count
    color:rgb(147,153,159)
    font-size :.2rem
    margin :0 .12rem
  .icon-add_circle
    font-size:.48rem
    color:rgb(0, 160, 220)
    padding :.06rem
</style>
