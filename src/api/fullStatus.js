import { ajax } from "../units/server/ajax";

/* 累计收入 */
export const reqTotalIncome = (data) => ajax("post", {
    act: "f",
    cmd: "commission",
    ...data,
    logtype: 1,
    pageindex: 1,
    pagesize: 10000
})

/* 订单数据 */
export const reqOrderData = (data) => ajax("post", {
    act: "report",
    cmd: "timesale",
    ...data,
    status: 10
})