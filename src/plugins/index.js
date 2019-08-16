// import { isIOS, isAndroid } from './utils.js'

window.createWindow = (url) => {}

export default {
  install(Vue, options) {
    Vue.prototype.$etch = function(url) {
      window.jsInterface.createWindow(url)
    }
    Vue.prototype.$closeWindow = () => {
      window.jsInterface.closeWindow()
    }
    Vue.prototype.$getToken = () => {
      let res = window.jsInterface.getToken()
      return res
    }
  }
}
