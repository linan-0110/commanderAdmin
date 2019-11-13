import { ajax } from "../units/server/ajax";

/* 备货列表 */
export const reqMyStock = (data) => ajax("post", {
    act: "order",
    cmd: "mystock",
    ...data,
    status: 0,
    issub: 1
})


/* 以确认送达 备货信息 */
export const reqStockInfo = (id) => ajax("post", {
    act: "order",
    cmd: "stockinfo",
    id
})


/* 以确认送达  收货 */
export const reqReceipt = (data) => ajax("post", {
    act: "order",
    cmd: "receipt",
    ...data
})