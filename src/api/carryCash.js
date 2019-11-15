import { ajax } from "../units/server/ajax";

/* 提现 */
export const reqCarryCash = (amount) => ajax("post", {
    act: "f",
    cmd: "cash",
    amount
})


/* 获取当前账户绑定银行卡信息 */
export const reqBankInfo = () => ajax("post", {
    act: "base",
    cmd: "getbank"
})


/* 修改绑定银行卡 */
export const reqAlterBank = (data) => ajax("post", {
    act: "base",
    cmd: "savebank",
    ...data
})