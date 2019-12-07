import { ajax_login, ajax } from "../units/server/ajax";

/* 登录 */
export const reqLogin = (data) => ajax_login("post", {
    act: "login",
    cmd: "login",
    ...data
})


/* 获取短信验证码 */
export const reqNoteCode = (data) => ajax("post", {
    ...data
}, "/Home")



/* 重置密码 */
export const reqResetPassword = (data) => ajax("post", {
    ...data
}, "/Home/restpassword")