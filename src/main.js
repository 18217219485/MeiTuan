// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/common/icon.css'
import './assets/common/common.styl'
import Vue from 'vue'
import Home from './components/Home'
import router from './router'
import store from './store/index'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Home },
  template: '<Home/>'
})
