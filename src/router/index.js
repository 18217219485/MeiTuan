import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Goods from '../components/goods/index'
import Seller from '../components/seller/index'
import Ratings from '../components/ratings/index'
import GoodsDetail from '../components/goods/goodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: GoodsDetail
    }
  ]
})
