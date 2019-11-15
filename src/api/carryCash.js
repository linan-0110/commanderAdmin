import { ajax } from "../units/server/ajax";

/* 订单数据 */
export const reqCarryCash = (amount) => ajax("post", {
    act: "f",
    cmd: "cash",
    amount
})