import axios from 'axios'
// import store from '@/store/index.js'
import qs from 'qs'
import http from 'http'
import https from 'https'

const axInstance = axios.create({
  // baseURL: Config.IP + ':' + Config.Port,
  timeout: 12000,
  responseType: 'json',
  withCredentials: false, // 表示跨域请求时是否需要使用凭证
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'token': store.state.axios.token,
    'Accept-Language': (localStorage.lang !== undefined) ? localStorage.lang : (navigator.language === 'zh-HK' || navigator.language === 'zh-TW' || navigator.language === 'zh-hant' || navigator.language === 'zh-Hant') ? 'zh-Hant' : 'zh-Hans', // 初始未选择默认 cn 中文
  },
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true })
})

// 添加请求拦截器
axInstance.interceptors.request.use((config) => {
  // config.headers.token = store.state.axios.token
  // alert('request-token:'+ store.state.axios.token)
  if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
    // 序列化
    if (config.processData !== false) {
      config.data = qs.stringify(config.data)
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
axInstance.interceptors.response.use((response) => {
  // alert('response-token:'+ store.state.axios.token)
  return response
}, (error) => {
  return Promise.reject(error)
})

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', { value: axInstance })
  }
}

export const network = axInstance
