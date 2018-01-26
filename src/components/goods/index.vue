<template>
  <div class="good-wrapper" @click="test">
    this is goods page
  </div>
</template>

<script>
import {seller} from '../../net/index'
import Vue from 'vue'
import AlertPlugin from 'vux/src/plugins/alert/index.js'
Vue.use(AlertPlugin)
export default {
  name: 'goods',
  created () {
    // 发送请求
    this.$axios.post(seller).then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  },
  methods: {
    test () {
      this.$vux.alert.show({
        content: '测试一下拉'
      })
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
