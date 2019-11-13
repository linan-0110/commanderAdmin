import { ajax } from "../units/server/ajax";

/* 订单数据 */
export const reqOrderData = (data) => ajax("post", {
    act: "order",
    cmd: "mylist",
    ...data,
    issub: 1,
})