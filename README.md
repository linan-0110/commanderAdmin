# commanderadmin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#### 基础组件库用了vant 采用按需导入方式加载

## src 文件描述
```javascript
/* -----api----- */
接口文件


/* -----components----- */
tpl.vue ==>> 模板文件，
dateTiemPicker ==>> 时间选择器，


/* -----page----- */
Login ==>> 登录页
home ==>> 主页
myAccount ==>> 我的账号
myEarnings ==>> 我的收益
carryCash ==>> 提现
    carryCashSuccess ==>> 提现提交
    alterBankCard ==>> 更改银行卡
fullStatus ==>> 整体状况
myOrder ==>> 我的订单
    sub ==>> 我的订单用到的四个子组件
orderExpress ==>> 订单配送
    confirmDelivery ==>> 以确认送达
clientGetCargo ==>> 顾客提货
areaOrder ==>> 小区订单 (准备删除)
discountCoupon ==>> 优惠劵 (准备删除)
myAgreement ==>> 我的协议


/* -----units----- */
工具文件
server
    ajax.js ==>> ajax请求函数的封装
md5.js ==>> md5签名文件


/* -----units----- */
dev_config.js ==>> 上线配置文件
```

## 目录结构

项目完结 加
自动生成目录结构教程（https://juejin.im/post/5dc1340e6fb9a04abf552b40）
|-- commanderAdmin
    |-- .babelrc
    |-- .editorconfig
    |-- .eslintignore
    |-- .eslintrc.js
    |-- .gitignore
    |-- .postcssrc.js
    |-- directoryList.md
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- .idea
    |   |-- commanderAdmin.iml
    |   |-- misc.xml
    |   |-- modules.xml
    |   |-- vcs.xml
    |   |-- workspace.xml
    |-- build
    |   |-- build.js
    |   |-- check-versions.js
    |   |-- logo.png
    |   |-- utils.js
    |   |-- vue-loader.conf.js
    |   |-- webpack.base.conf.js
    |   |-- webpack.dev.conf.js
    |   |-- webpack.prod.conf.js
    |-- config
    |   |-- dev.env.js
    |   |-- index.js
    |   |-- prod.env.js
    |   |-- test.env.js
    |-- dist
    |   |-- index.html
    |   |-- static
    |       |-- init.css
    |       |-- public.css
    |       |-- css
    |       |   |-- app.b78ee6c9e3a0a38f71b9526465f1e905.css
    |       |   |-- app.b78ee6c9e3a0a38f71b9526465f1e905.css.map
    |       |   |-- app.ddb45152e9766374ad3533047cca58c4.css
    |       |   |-- app.ddb45152e9766374ad3533047cca58c4.css.map
    |       |-- img
    |       |   |-- bg_discountCoupon.3ed04f9.png
    |       |   |-- bg_discountCoupon_disable.308c74a.png
    |       |   |-- header_bg.22b0947.png
    |       |   |-- login_main.39609a9.png
    |       |   |-- login_main1.24aff10.png
    |       |   |-- my_agreement.b2a442a.png
    |       |-- js
    |           |-- app.59418a27f576fa65551e.js
    |           |-- app.59418a27f576fa65551e.js.map
    |           |-- app.cac8704fa928ee623d82.js
    |           |-- app.cac8704fa928ee623d82.js.map
    |           |-- manifest.2ae2e69a05c33dfc65f8.js
    |           |-- manifest.2ae2e69a05c33dfc65f8.js.map
    |           |-- vendor.51e65b772f3fe27dc7a4.js
    |           |-- vendor.51e65b772f3fe27dc7a4.js.map
    |           |-- vendor.e574a344a0d081527106.js
    |           |-- vendor.e574a344a0d081527106.js.map
    |-- src
    |   |-- App.vue
    |   |-- dev_config.js
    |   |-- main.js
    |   |-- api
    |   |   |-- carryCash.js
    |   |   |-- fullStatus.js
    |   |   |-- home.js
    |   |   |-- login.js
    |   |   |-- myEarnings.js
    |   |   |-- myOrder.js
    |   |   |-- orderExpress.js
    |   |-- assets
    |   |   |-- bg_discountCoupon.png
    |   |   |-- bg_discountCoupon_disable.png
    |   |   |-- bg_no_order.png
    |   |   |-- header_bg.png
    |   |   |-- head_img_man.png
    |   |   |-- head_img_woman.png
    |   |   |-- home_user_rights_1.png
    |   |   |-- home_user_rights_2.png
    |   |   |-- home_user_rights_3.png
    |   |   |-- icon_arrow_bottom_black.png
    |   |   |-- icon_arrow_orange.png
    |   |   |-- icon_arrow_right_black.png
    |   |   |-- icon_home_1.png
    |   |   |-- icon_home_2.png
    |   |   |-- icon_home_3.png
    |   |   |-- icon_home_4.png
    |   |   |-- icon_home_5.png
    |   |   |-- icon_home_header_lable.png
    |   |   |-- icon_mini_success.png
    |   |   |-- icon_reat_success.png
    |   |   |-- icon_time.png
    |   |   |-- icon_todo_list.png
    |   |   |-- login_main1.png
    |   |   |-- login_main2.png
    |   |   |-- my_agreement.png
    |   |-- components
    |   |   |-- tpl.vue
    |   |   |-- dateTiemPicker
    |   |       |-- dateTiemPicker.vue
    |   |-- page
    |   |   |-- areaOrder
    |   |   |   |-- areaOrder.vue
    |   |   |-- carryCash
    |   |   |   |-- carryCash.vue
    |   |   |   |-- alterBankCard
    |   |   |   |   |-- alterBankCard.vue
    |   |   |   |-- carryCashSuccess
    |   |   |       |-- carryCashSuccess.vue
    |   |   |-- clientGetCargo
    |   |   |   |-- clientGetCargo.vue
    |   |   |-- discountCoupon
    |   |   |   |-- discountCoupon.vue
    |   |   |-- fullStatus
    |   |   |   |-- fullStatus.vue
    |   |   |-- home
    |   |   |   |-- home.vue
    |   |   |-- Login
    |   |   |   |-- Login.vue
    |   |   |-- myAccount
    |   |   |   |-- myAccount.vue
    |   |   |-- myAgreement
    |   |   |   |-- myAgreement.vue
    |   |   |-- myEarnings
    |   |   |   |-- myEarnings.vue
    |   |   |-- myOrder
    |   |   |   |-- myOrder.vue
    |   |   |   |-- sub
    |   |   |       |-- All.vue
    |   |   |       |-- AwaitInCargo.vue
    |   |   |       |-- AwaitOutCargo.vue
    |   |   |       |-- Fulfill.vue
    |   |   |-- myOrder_老
    |   |   |   |-- myOrder.vue
    |   |   |-- orderExpress
    |   |       |-- orderExpress.vue
    |   |       |-- confirmDelivery
    |   |           |-- confirmDelivery.vue
    |   |-- router
    |   |   |-- index.js
    |   |-- units
    |       |-- md5.js
    |       |-- server
    |           |-- ajax.js
    |-- static
    |   |-- .gitkeep
    |   |-- init.css
    |   |-- public.css
    |-- test
        |-- e2e
        |   |-- nightwatch.conf.js
        |   |-- runner.js
        |   |-- custom-assertions
        |   |   |-- elementCount.js
        |   |-- specs
        |       |-- test.js
        |-- unit
            |-- .eslintrc
            |-- jest.conf.js
            |-- setup.js
            |-- specs
                |-- HelloWorld.spec.js

