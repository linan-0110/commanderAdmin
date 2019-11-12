// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '../static/init.css';
import '../static/public.css';


/* vant start */
import { Button, Search, NavBar, Icon, DatetimePicker, Popup, Card, Checkbox, CheckboxGroup, 
    Tab, Tabs, Stepper } from 'vant';
Vue.use(Button).use(Search).use(NavBar).use(Icon).use(DatetimePicker).use(Popup).use(Card)
    .use(Checkbox).use(CheckboxGroup).use(Tab).use(Tabs).use(Stepper);
/* vant end */

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
