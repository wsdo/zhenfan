import Service from '../../api'
import router from '../../router'

const GET_GOODS_LIST = 'GET_GOODS_LIST'

const state = {
  goodsList: null
}

const actions = {
  goodsList(store, param){
    // console.log(param);
    Service.get('/goods/list', { param }).then((response) =>{
      // console.log(response.statusText)
      if(response.statusText == 'OK'){
        store.commit(GET_GOODS_LIST, {goodList: response.data.result})
      }
    })
  }
}

const mutations = {
  [GET_GOODS_LIST](state,action){
    state.goodsList = action.goodList
  }
}

export default {
  state,
  actions,
  mutations
}