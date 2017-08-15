import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GoodsList from '@/view/GoodsList'
import Cart from '@/view/Cart'

Vue.use(Router)

export default new Router({
  // mode:'hash',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
