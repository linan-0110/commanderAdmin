import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login/Login'
import home from '@/page/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
