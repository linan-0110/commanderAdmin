import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
import { md5 } from "../md5";

// const configURL = "https://allapi.jjsqzg.com/Salors"; //正式版
const configURL = "https://allinone.jjsqwg.com/Salors"; //测试版


/* 常用ajax封装 */
export const ajax = function (type = "post", params) {
    params.token = JSON.parse(localStorage.getItem("userInfo")).Token;
    params.sign = md5(params);

    return new Promise((resole, reject) => {
        axios({
            method: type,
            url: configURL,
            params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8;"
            }
        }).then((res) => {
            resole(res);
        }).catch((err) => {
            reject(err);
        });
    });
}



/* 登录ajax封装 */
export const ajax_login = function (type = "post", params) {
    params.sign = md5(params);
    return new Promise((resole, reject) => {
        axios({
            method: type,
            url: configURL,
            params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8;"
            }
        }).then((res) => {
            resole(res);
        }).catch((err) => {
            reject(err);
        });
    });
}


