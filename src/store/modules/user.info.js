import Service from '../../api'
import router from '../../router'

const USER_INFO = 'USER_INFO'

const state = {
  nickName: ''
}

const actions = {
  userLogin(store, param){
    console.log(param);
    Service.post('/users/login', { userName: param.userName, userPwd: param.userPwd }).then((response) =>{
      console.log(response);
      // console.log(response.statusText)
      if(response.statusText == 'OK'){
        store.commit(USER_INFO, {userName: response.data.result.userName})
      }
    })
  }
}

const mutations = {
  [USER_INFO](state,action){
    state.nickName = action.userName
  }
}

export default {
  state,
  actions,
  mutations
}