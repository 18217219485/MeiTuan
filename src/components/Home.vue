<template>
  <div class="wrapper">
    <div> this is wrapper</div>
    <goods></goods>
    <ratings></ratings>
    <seller></seller>
  </div>
</template>

<script>
import Goods from './goods/index'
import Ratings from './ratings/index'
import Seller from './seller/index'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Goods,
    Ratings,
    Seller
  }
}
</script>

<style scoped lang="stylus">
</style>
