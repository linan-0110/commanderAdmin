// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '@/publicStyle/init.css';
import '@/publicStyle/public.css';


/* vant start */
import { Button, Search, NavBar, Icon, DatetimePicker, Popup, Card, Checkbox, CellGroup, 
    Tab, Tabs, Stepper,Field, Cell, CheckboxGroup, List, Tag } from 'vant';
Vue.use(Button).use(Search).use(NavBar).use(Icon).use(DatetimePicker).use(Popup).use(Card)
    .use(Checkbox).use(CheckboxGroup).use(Tab).use(Tabs).use(Stepper).use(Field).use(List)
    .use(Cell).use(CellGroup).use(Tag);
/* vant end */

Vue.config.productionTip = false;

/* 根据路由设置标题 */ 
document.title = '集集团长';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
