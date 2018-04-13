<template>
  <div class="wrapper">
    <p>This is test page</p>
    <p>{{message}}</p>
    <children :data="childData"></children>
  </div>
</template>

<script>
import children from './children'
export default {
  name: 'Test',
  data () {
    return {
      message: 'hello world',
      childData: [11, 22, 33, 44, 55]
    }
  },
  components: {
    children
  },
  beforeCreate () { // data里面的数据在created之后就可以获取到
    console.log(this.message)
  },
  created () {
    console.log(this.message)
  },
  beforeMount () {
    console.log(this.message)
  },
  mounted () {
    console.log(this.message)
  },
  beforeUpdate () {
    console.log(this.message)
    this.message = 'again'
  },
  updated () {
    console.log(this.message)
  },
  beforeDestroy () {
    console.log(this.message)
  },
  destroy () {
    console.log(this.message)
  }
}
</script>

<style scoped lang="stylus">
</style>
