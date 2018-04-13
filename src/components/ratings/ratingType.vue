<template>
  <div class="rating-wrapper">
    <div class="satisfy-type">
      <slot></slot>
      <ul>
        <li :class="isClick && type === 2 ?'active':''" @click="selects(2,ratings)">
          <p>全部<span>{{ratings && ratings.length}}</span></p>
        </li>
        <li :class="isClick && type === 0? 'active':''" @click ="selects(0,good)">
          <p>满意<span>{{good && good.length}}</span></p>
        </li>
        <li :class="isClick && type === 1? 'noSatisfy':''" @click = "selects(1,bad)">
          <p>不满意<span>{{bad && bad.length}}</span></p>
        </li>
      </ul>
    </div>
    <div class="content-evaluation">
      <span :class="onlyText? 'icon-check_circle select':'icon-check_circle'" @click="toggleText"></span>
      <span>只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rating-type',
  data () {
    return {
      isClick: false,
      type: 0
    }
  },
  props: {
    ratings: Array,
    onlyText: Boolean
  },
  computed: {
    good () {
      return this.ratings && this.ratings.filter(item => {
        return item.rateType === 0
      })
    },
    bad () {
      return this.ratings && this.ratings.filter(item => {
        return item.rateType === 1
      })
    }
  },
  methods: {
    selects (type) {
      this.isClick = true
      this.type = type
      this.$emit('select', type)
    },
    toggleText () {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/ratingType.styl'
</style>
