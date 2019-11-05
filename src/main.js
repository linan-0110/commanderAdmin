// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* vant start */
import { Button, Search, NavBar } from 'vant';
Vue.use(Button);
Vue.use(Search);
Vue.use(NavBar);
/* vant end */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
