import { ajax } from "../units/server/ajax";

/* 我的收益 */
export const reqMyEarnings = (data) => ajax("post", {
    act: "f",
    cmd: "commission",
    ...data
})
