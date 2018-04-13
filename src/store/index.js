import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './mutation-type'
import {goods, seller, ratings} from '../net/index'
Vue.use(Vuex)

const state = {
  goodsData: [],
  sellerData: {},
  ratings: []
}

const mutations = {
  [type.GOODS_DATA] (state, goodsData) {
    state.goodsData = goodsData
  },
  [type.SELLER_DATA] (state, sellerData) {
    state.sellerData = sellerData
  },
  [type.RATINGS_DATA] (state, ratings) {
    state.ratings = ratings
  }
}

const actions = {
  initGoods ({commit}, context) {
    context.$axios.post(goods).then(response => {
      if (response.data.code === '0') {
        commit(type.GOODS_DATA, response.data.body)
      }
    }, error => {
      console.log(error)
    })
  },
  initSeller ({commit}, context) {
    context.$axios.post(seller).then(response => {
      if (response.data.code === '0') {
        commit(type.SELLER_DATA, response.data.body)
      }
    }, error => {
      console.log(error)
    })
  },
  initRatings ({commit}, context) {
    context.$axios.post(ratings).then(response => {
      if (response.data.code === '0') {
        commit(type.RATINGS_DATA, response.data.body)
      }
    }, error => {
      console.log(error)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
