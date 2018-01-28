<template>
  <div class="wrapper" @click="random">
    this is ratings page
  </div>
</template>

<script>
import { str, arr } from '../../net'
export default {
  name: 'ratings',
  methods: {
    random () {
      console.log(str + arr)
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
