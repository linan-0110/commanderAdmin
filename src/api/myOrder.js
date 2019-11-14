import { ajax } from "../units/server/ajax";

/* 订单数据 */
export const reqOrderData = (data) => ajax("post", {
    act: "order",
    cmd: "mylist",
    ...data,
    issub: 1
})

/* 确认收货 */
export const reqGetCargo = (oid) => ajax("post", {
    act: "order",
    cmd: "confirm",
    oid,
    subid: 0
})