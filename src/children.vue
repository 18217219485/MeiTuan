<template>
    <div class="box">
      <p>my is children</p>
      <p v-for="(item,index) in childData" :key="index">{{item}}</p>
    </div>
</template>

<script>
export default {
  name: 'children',
  props: ['childData'],
  beforeCreate () {
    console.log(this.childData)
  },
  created () {
    console.log(this.childData)
  },
  beforeMount () {
    console.log(this.childData)
  },
  mounted () {
    console.log(this.childData)
  }
}
</script>

<style scoped>

</style>
