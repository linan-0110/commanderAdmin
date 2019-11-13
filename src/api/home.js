import { ajax } from "../units/server/ajax";

/* 我的资产 */
export const reqMyAsset = () => ajax("post", {
    act: "f", 
    cmd: "myinfo"
})