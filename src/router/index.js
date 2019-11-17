import Vue from 'vue';
import Router from 'vue-router';

const Login = () => import('@/page/Login/Login');  // 登录页
const home = () => import('@/page/home/home'); // 主页
const myAccount = () => import('@/page/myAccount/myAccount'); // 我的账号
const myEarnings = () => import('@/page/myEarnings/myEarnings'); // 我的收益
const carryCash = () => import('@/page/carryCash/carryCash'); // 提现
const carryCashSuccess = () => import('@/page/carryCash/carryCashSuccess/carryCashSuccess');  // 提现提交
const alterBankCard = () => import('@/page/carryCash/alterBankCard/alterBankCard'); // 更改银行卡
const fullStatus = () => import('@/page/fullStatus/fullStatus'); // 整体状况
const areaOrder = () => import('@/page/areaOrder/areaOrder'); // 小区订单
const orderExpress = () => import('@/page/orderExpress/orderExpress'); // 订单配送
const confirmDelivery = () => import('@/page/orderExpress/confirmDelivery/confirmDelivery'); // 确认提货
const clientGetCargo = () => import('@/page/clientGetCargo/clientGetCargo');  // 顾客提货
const myOrder = () => import('@/page/myOrder/myOrder'); // 我的订单
const discountCoupon = () => import('@/page/discountCoupon/discountCoupon');  // 优惠劵
const myAgreement = () => import('@/page/myAgreement/myAgreement'); // 我的协议

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
