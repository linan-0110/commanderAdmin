import { ajax_login } from "../units/server/ajax";

/* 登录 */
export const reqLogin = (data) => ajax_login("post", {
    act: "login",
    cmd: "login",
    ...data
})