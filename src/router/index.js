import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/page/Login/Login'; //登录页
import home from '@/page/home/home'; // 主页
import myAccount from '@/page/myAccount/myAccount'; // 我的账号
import myEarnings from '@/page/myEarnings/myEarnings'; // 我的收益
import carryCash from '@/page/carryCash/carryCash'; // 提现
import carryCashSuccess from '@/page/carryCash/carryCashSuccess/carryCashSuccess'; // 提现提交
import alterBankCard from '@/page/carryCash/alterBankCard/alterBankCard'; // 更改银行卡
import fullStatus from '@/page/fullStatus/fullStatus'; //整体状况
import areaOrder from '@/page/areaOrder/areaOrder'; //小区订单
import orderExpress from '@/page/orderExpress/orderExpress'; //订单配送
import confirmDelivery from '@/page/orderExpress/confirmDelivery/confirmDelivery'; // 订单配送
import clientGetCargo from '@/page/clientGetCargo/clientGetCargo'; // 顾客提货
import myOrder from '@/page/myOrder/myOrder'; // 我的订单
import discountCoupon from '@/page/discountCoupon/discountCoupon'; // 优惠劵
import myAgreement from '@/page/myAgreement/myAgreement'; // 我的协议

Vue.use(Router);

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
      path: '/home/myEarnings',
      name: 'home_myEarnings',
      component: myEarnings
    },
    {
      path: '/home/carryCash',
      name: 'home_carryCash',
      component: carryCash
    },
    {
      path: '/home/carryCash/carryCashSuccess',
      name: 'home_carryCash_carryCashSuccess',
      component: carryCashSuccess
    },
    {
      path: '/home/carryCash/alterBankCard',
      name: 'home_carryCash_alterBankCard',
      component: alterBankCard
    },
    {
      path: '/home/fullStatus',
      name: 'home_fullStatus',
      component: fullStatus
    },
    {
      path: '/home/areaOrder',
      name: 'home_areaOrder',
      component: areaOrder
    },
    {
      path: '/home/orderExpress',
      name: 'home_orderExpress',
      component: orderExpress
    },
    {
      path: '/home/orderExpress/confirmDelivery',
      name: 'home_orderExpress_confirmDelivery',
      component: confirmDelivery
    },
    {
      path: '/home/clientGetCargo',
      name: 'home_clientGetCargo',
      component: clientGetCargo
    },
    {
      path: '/home/myOrder',
      name: 'home_myOrder',
      component: myOrder
    },
    {
      path: '/home/discountCoupon',
      name: 'home_discountCoupon',
      component: discountCoupon
    },
    {
      path: '/home/myAgreement',
      name: 'home_myAgreement',
      component: myAgreement
    },
    {
      path: '*',
      component: Login
    }
  ]
})
