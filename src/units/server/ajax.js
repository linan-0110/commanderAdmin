import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'; 

import DEV from "@/dev_config"; // 导入上线配置
const { ONLINE_BASE_HREF, SERVER_HREF } = DEV;

Vue.use(VueAxios, axios)
import { md5 } from "../md5";


/* 常用ajax封装 */
export const ajax = function (type = "post", params) {
    params.token = JSON.parse(localStorage.getItem("userInfo")).Token;
    params.v = "webv09";
    params.time = Date.parse(new Date()) / 1000;
    params.app_type = "web";
    params.sign = md5(params);

    return new Promise((resole, reject) => {
        axios({
            method: type,
            url: SERVER_HREF,
            params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8;"
            }
        }).then((res) => {
            resole(res);
            if(res.data.status === -2) {
                // res.data.status === -2 代表未登录 跳转登录页
                window.location.href = ONLINE_BASE_HREF;
            }
        }).catch((err) => {
            reject(err);
        });
    });
}



/* 登录 ajax封装 */
export const ajax_login = function (type = "post", params) {
    params.v = "webv09";
    params.time = Date.parse(new Date()) / 1000;
    params.app_type = "web";
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


