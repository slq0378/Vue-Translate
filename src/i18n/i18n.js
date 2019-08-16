import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './langs'
Vue.use(VueI18n)
console.log((localStorage.lang !== undefined) ? localStorage.lang : (navigator.language === 'zh-HK' || navigator.language === 'zh-TW' || navigator.language === 'zh-hant' || navigator.language === 'zh-Hant') ? 'zh-Hant' : 'zh-Hans')
const i18n = new VueI18n({
  locale: (localStorage.lang !== undefined) ? localStorage.lang : (navigator.language === 'zh-HK' || navigator.language === 'zh-TW' || navigator.language === 'zh-hant' || navigator.language === 'zh-Hant') ? 'zh-Hant' : 'zh-Hans', // 初始未选择默认 cn 中文
  fallbackLocale: 'zh-Hans', // 如果在其他语言中找不到，就回到fallbackLocale中找
  messages
})
export default i18n
