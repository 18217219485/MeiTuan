<template>
    <div class="shoppingCar">
      <div class="total">
        <div class="car-box">
          <div class="bg-car"></div>
          <div class="car icon-shopping_cart"></div>
        </div>
        <p class="totalMoney">¥0</p>
        <div class="line"></div>
        <p class="distribution">另需配送费<span>4</span>元</p>
      </div>
      <div class="startSend">
        <p><span>¥20</span>起送</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'shopping-car'
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/shoppingCar.styl'
</style>
