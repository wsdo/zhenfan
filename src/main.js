// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

// register globally
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

// css
import '@/assets/css/base'
import '@/assets/css/login'
import '@/assets/css/product'
Vue.config.productionTip = false

Vue.use(VueLazyLoad,{
  // loading:'/static/loading/loading-spinning-bubbles.svg'
  loading:'/static/img/ok-2.png'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
