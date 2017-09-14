// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import apiConfig from '../config/api.config'

// register globally
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

// import axios
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
Vue.use(VueAxios, Axios)
Vue.use(Vuex)

Axios.defaults.baseURL = apiConfig.baseUrl;

// css
import '@/assets/css/base'
import '@/assets/css/login'
import '@/assets/css/product'
import '@/assets/css/checkout'
Vue.config.productionTip = false

Vue.use(VueLazyLoad,{
  // loading:'/static/loading/loading-spinning-bubbles.svg'
  loading:'/static/img/ok-2.png'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
