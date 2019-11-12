import { ajax } from "../units/server/ajax";

/* 累计收入 */
export const reqTotalIncome = (data) => ajax("post", {
    ...data
})