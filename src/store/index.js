import Vue from 'vue'
import Vuex from  'vuex'
import GoodsList from './modules/goods.list'
import UserInfo from './modules/user.info'

// import * as actions from './actions'
// import * as getters from './getters'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios)

Vue.use(Vuex)


// const store = new Vuex.Store({
//   state: {
//     nickName:'',
//     cartCount:0
//   },
//   mutations: {
//     //更新用户信息
//     updateUserInfo(state, nickName) {
//       state.nickName = nickName;
//     },
//     updateCartCount(state,cartCount){
//       state.cartCount += cartCount;
//     }
//   }
// });

export default new Vuex.Store({
  state: {
    nickName:'',
    cartCount:0
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    }
  }
})