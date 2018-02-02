<template>
  <div class="wrapper">
    <topper></topper>
    <ul>
      <li>
        <router-link to="/goods">商品</router-link>
      </li>
      <li>
        <router-link to="/ratings">评价</router-link>
      </li>
      <li>
        <router-link to="/seller">商家</router-link>
      </li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Topper from './goods/topper'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Topper
  }
}
</script>

<style scoped lang="stylus">
 @import '../assets/common/common.styl'
  .wrapper
    ul
      display :flex
      align-items :center
      justify-content :center
      border-1px(rgba(7,17,27,.1))
      li
        flex :1
        text-align :center
        font-size:.28rem
        line-height :.8rem
        height :.8rem
        a
          color:rgb(77,85,93)
        .router-link-active
          color:rgb(240,20,20)
</style>
