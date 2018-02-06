<template>
  <div class="rating-wrapper">
    <div class="satisfy-type">
      <slot></slot>
      <ul>
        <li class="active">
          <p>全部<span>57</span></p>
        </li>
        <li>
          <p>满意<span>47</span></p>
        </li>
        <li class="noSatisfy">
          <p>不满意<span>10</span></p>
        </li>
      </ul>
    </div>
    <div class="content-evaluation">
      <span class="icon-check_circle select"></span>
      <span>只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rating-type'
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/ratingType.styl'
</style>
