<template>
  <div class="ratings-wrapper">
    <scroller>
      <div class="scores">
        <div class="compare">
          <p>3.9</p>
          <p>综合评分</p>
          <p>高于周边商家70%</p>
        </div>
        <ul class="scoreDetail">
          <li>
            <p>服务态度</p>
            <star :size = 36 :score= 4.8></star>
            <span class="orange">4.8</span>
          </li>
          <li>
            <p>服务态度</p>
            <star :size = 36 :score= 9></star>
            <span class="orange">9</span>
          </li>
          <li>
            <p>送达时间</p>
            <span class="gray">44分钟</span>
          </li>
        </ul>
      </div>
      <div class="interval"></div>
      <div class="content">
        <div class="addLine">
          <rating-type :ratings="ratings" @select="select" :onlyText="onlyText" @toggle = "toggle"></rating-type>
        </div>
        <ul class="customer-remark">
          <li class="remarkItem" v-for="(items,index) in selectRating" :key="index">
            <img :src="items.avatar" alt="" class="avtor">
            <div class="right">
              <div class="baseInfor">
                <div class="leftBase">
                  <p>{{items.username}}</p>
                  <div>
                    <star :size=36 :score=items.score></star>
                    <span v-show="items.deliveryTime">{{items.deliveryTime}}分钟送达</span>
                  </div>
                </div>
                <span>{{dateData(items.rateTime)}}</span>
              </div>
              <p class="text">{{items.text}}</p>
              <ul class="review">
                <span :class="items.rateType === 0 ? 'icon-thumb_up':'icon-thumb_down'"></span>
                <li class="reviewItem" v-for="(item,index) in items.recommend" :key="index">{{item}}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </scroller>
  </div>
</template>

<script>
import Star from '../util/star'
import RatingType from './ratingType'
import {mapState} from 'vuex'
import {handleData} from '../util/common'
export default {
  name: 'ratings',
  data () {
    return {
      selectRating: '',
      onlyText: false
    }
  },
  computed: {
    ...mapState({
      ratings: 'ratings'
    })
  },
  mounted () {
    this.initData()
    this.selectRating = this.ratings
  },
  methods: {
    initData () {
      this.$store.dispatch('initRatings', this)
    },
    dateData (value) {
      return handleData.switchDate(value)
    },
    select (data) {
      this.onlyText = false
      this.selectRating = data
    },
    toggle () {
      this.onlyText = !this.onlyText
      if (this.onlyText) {
        this.selectRating = this.selectRating.filter(item => {
          return item.text !== ''
        })
      }
    }
  },
  components: {Star, RatingType}
}
</script>

<style scoped lang="stylus">
@import '../../assets/common/common.styl'
@import '../../assets/stylus/rating.styl'
</style>
