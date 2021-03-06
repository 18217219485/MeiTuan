import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Goods from '../components/goods/index'
import Seller from '../components/seller/index'
import Ratings from '../components/ratings/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
})
