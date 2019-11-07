import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/page/Login/Login';
import home from '@/page/home/home';
import myAccount from '@/page/myAccount/myAccount';
import assetDetails from '@/page/assetDetails/assetDetails';
import fullStatus from '@/page/fullStatus/fullStatus';

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
    },
    {
      path: '/home/myAccount',
      name: 'home_myAccount',
      component: myAccount
    },
    {
      path: '/home/assetDetails',
      name: 'home_assetDetails',
      component: assetDetails
    },
    {
      path: '/home/fullStatus',
      name: 'home_fullStatus',
      component: fullStatus
    }
  ]
})
