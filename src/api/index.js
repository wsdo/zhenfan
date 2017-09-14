import Vue from 'vue'
import axios from 'axios'
import apiConfig from '../../config/api.config'
// import { getCookie,signOut,isLogin } from '../utils/authService'
const service = axios.create({
  baseURL: apiConfig.baseUrl
})

// 拦截器
// service.interceptors.request.use(config => {
//     if (isLogin()) {
//       let token = getCookie('token').replace(/(^\")|(\"$)/g, '');
//       config.headers.Authorization = `Bearer ${token}`;
//       return config;
//     }
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// service.interceptors.response.use(response => {
//   return response
// }, error => {
//   return Promise.reject(error)
// })

Vue.prototype.$http = axios
export default service
