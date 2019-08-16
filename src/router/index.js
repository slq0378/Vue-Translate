import Vue from 'vue'
import Router from 'vue-router'
import baseContent from '@/views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: baseContent
    }
  ]
})
