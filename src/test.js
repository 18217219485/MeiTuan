// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alia
import Vue from 'vue'
import Test from './Test.vue'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Test },
  template: '<Test/>'
})
