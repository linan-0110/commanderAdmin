<template>
    <div class="home">
        <header class="header">
            <img
                v-if="userInfo.sex == '女'"
                class="header_img"
                src="../../assets/head_img_woman.png"
                alt="头像"
                @click="linkMyAccount"
            />
            <img
                v-else
                class="header_img"
                src="../../assets/head_img_man.png"
                alt="头像"
                @click="linkMyAccount"
            />

            <article class="header_article">
                <span class="name">{{ userInfo.RealName }}</span>
                <span class="lable">
                    <img
                        class="icon_home_header_lable"
                        src="../../assets/icon_home_header_lable.png"
                    />小区合伙人
                </span>
            </article>
            <section v-if="isCompanyAdmin" class="header_data">
                <div class="container_money">
                    <div class="my_asset" @click="linkMyEarnings">
                        <h3 class="my_asset_text">我的资产(元)</h3>
                        <p class="money">{{ (myAsset.balance + myAsset.freeze).toFixed(2) }}</p>
                    </div>
                    <div class="carry_cash" @click="linkCarryCash(myAsset.balance)">可提现 {{ myAsset.balance }} ▶</div>
                </div>
                <p class="see_full_data">
                    <span @click="linkFullStatus">查看完整数据 ▶</span>
                </p>
            </section>
        </header>
        <section class="section">
            <article class="my_sales_order">
                <header class="my_sales_order_header">
                    <img class="icon_home_1" src="../../assets/icon_home_1.png" />
                    订单信息
                    <img
                        class="icon_arrow_orange"
                        src="../../assets/icon_arrow_orange.png"
                    />
                </header>
                <section class="grid">
                    <div class="block area_order" @click="linkMyOrder">
                        <img class="icon" src="../../assets/icon_home_2.png" />
                        <h3>我的订单</h3>
                    </div>
                    <div class="block order_express" @click="linkOrderExpress">
                        <img class="icon" src="../../assets/icon_home_3.png" />
                        <h3>订单配送</h3>
                    </div>
                    <div class="block client_get_cargo" @click="linkClientGetCargo">
                        <img class="icon" src="../../assets/icon_home_4.png" />
                        <h3>顾客提货</h3>
                    </div>
                </section>
            </article>
            <article class="user_rights">
                <header class="my_sales_order_header">
                    <img class="icon_home_5" src="../../assets/icon_home_5.png" />
                    用户权益
                    <img
                        class="icon_arrow_orange"
                        src="../../assets/icon_arrow_orange.png"
                    />
                </header>
                <section class="container">
                    <!-- <div class="bar my_buy_order" @click="linkAreaOrder">
                        <span class="text">小区订单</span>
                        <van-icon class="icon_arrow" name="arrow" />
                    </div>
                    <div class="bar discount_coupon" @click="linkDiscountCoupon">
                        <span class="text">优惠劵</span>
                        <van-icon class="icon_arrow" name="arrow" />
                    </div> -->
                    <div class="bar my_agreement" @click="linkMyAgreement">
                        <span class="text">我的协议</span>
                        <van-icon class="icon_arrow" name="arrow" />
                    </div>
                </section>
            </article>
        </section>
    </div>
</template>

<script>
import { reqMyAsset } from "@/api/home";
import { reqBankInfo } from "@/api/carryCash";
export default {
    name: "home",
    data() {
        return {
            myAsset: { //我的资产
                balance: 0,
                freeze: 0,
                total: 0,
                salortotal: 0
            }, 
            userInfo: {}, //用户信息
            isCompanyAdmin: false // 是否是企业用户管理端
        };
    },
    created() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        /* 请求 我的资产 */
        this.getMyAsset();
        /* 获取当前账户信息 用于判断企业用户管理端和非管理端 */
        this.getBankInfo();
    },
    methods: {
        /* 请求 我的资产 */
        getMyAsset() {
            reqMyAsset().then(res => {
                if (res.data.status === 0) {
                    this.myAsset = res.data.data;
                    
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },

         /* 获取当前账户信息 用于判断企业用户管理端和非管理端 */
        getBankInfo() {
            reqBankInfo().then(res => {
                if (res.data.status === 0) {
                    let ID = JSON.parse(localStorage.getItem("userInfo")).ID;
                    this.isCompanyAdmin = (res.data.data.CompanyID == 0) || (ID === res.data.data.adminid);
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },

        /* 跳转 我的账号 */
        linkMyAccount() {
            this.$router.push({
                name: "home_myAccount"
            });
        },
        /* 跳转 我的收益 */
        linkMyEarnings() {
            this.$router.push({
                name: "home_myEarnings"
            });
        },
        /* 跳转 提现 */
        linkCarryCash(balance) {
            this.$router.push({
                name: "home_carryCash",
                query: {
                    balance
                }
            });
        },
        /* 跳转 整体状况 */
        linkFullStatus() {
            this.$router.push({
                name: "home_fullStatus"
            });
        },
        /* 跳转 我的订单 (全部) */
        linkMyOrder() {
            this.$router.push({
                name: "home_myOrder"
            });
        },
        /* 跳转 订单配送 */
        linkOrderExpress() {
            this.$router.push({
                name: "home_orderExpress"
            });
        },
        /* 跳转 顾客提货 (待提货) */
        linkClientGetCargo() {
            this.$router.push({
                name: "home_clientGetCargo"
            });
        },
        /* 跳转 我的协议 */
        linkMyAgreement() {
            this.$router.push({
                name: "home_myAgreement"
            });
        },

        /* 跳转 小区订单 */
        // linkAreaOrder() {
        //     this.$router.push({
        //         name: "home_areaOrder"
        //     });
        // },
        /* 跳转 优惠劵 */
        // linkDiscountCoupon() {
        //     this.$router.push({
        //         name: "home_discountCoupon"
        //     });
        // }
    }
};
</script>

<style lang="less" scoped>
.home {
    .header {
        width: 100%;
        height: 250px;
        background-size: 100%;
        background-image: url("../../assets/header_bg.png");
        background-repeat: no-repeat;
        position: relative;
        .header_img {
            width: 60px;
            height: 60px;
            border: 4px solid rgb(228, 195, 92);
            border-radius: 50%;
            position: absolute;
            top: 55px;
            left: 30px;
        }
        .header_article {
            position: absolute;
            top: 60px;
            left: 110px;
            .name {
                color: rgb(205, 187, 137);
                font-size: 17px;
            }
            .lable {
                background-color: rgb(229, 186, 82);
                color: rgb(252, 252, 254);
                font-size: 10px;
                padding: 4px 7px;
                border-radius: 10px;
                display: block;
                margin-top: 10px;
                display: flex;
                justify-content: center;
                .icon_home_header_lable {
                    margin-right: 3px;
                }
            }
        }
        .header_data {
            background-color: #fff;
            width: 80%;
            height: 90px;
            margin: 0 10%;
            position: absolute;
            top: 140px;
            border-radius: 8px 8px 0 0;
            box-shadow: 2px -3px 4px #bdbcbc;
            .container_money {
                display: flex;
                justify-content: space-between;
                .my_asset {
                    margin: 12px 0 0 25px;
                    .my_asset_text {
                        font-weight: normal;
                        font-size: 16px;
                    }
                    .money {
                        font-size: 30px;
                        margin-bottom: 10px;
                    }
                }
                .carry_cash {
                    margin-top: 42px;
                    margin-right: 10px;
                    font-size: 12px;
                }
            }
            .see_full_data {
                text-align: center;
                font-size: 14px;
            }
        }
    }
    /* ---我的销售订单 和 用户权益--- */
    .section {
        margin: 12px 15px;
        display: flex;
        flex-direction: column;
        /* 我的销售订单 */
        .my_sales_order {
            .my_sales_order_header {
                display: flex;
                align-items: center;
                font-size: 17px;
                .icon_home_1 {
                    width: 15px;
                    height: 20px;
                    margin-right: 5px;
                }
                .icon_arrow_orange {
                    width: 6px;
                    height: 6px;
                    margin-left: 5px;
                }
            }
            /* 三块 （ 小区订单、订单配送、 顾客提货）*/
            .grid {
                display: flex;
                justify-content: space-around;
                margin: 15px 0;
                /* 三块的公共样式 */
                .block {
                    width: 70px;
                    height: 65px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    .icon {
                        width: 30px;
                        height: 32px;
                    }
                    h3 {
                        color: rgb(48, 50, 62);
                        font-weight: normal;
                        font-size: 14px;
                        margin-top: 10px;
                    }
                    span {
                        color: rgb(103, 106, 112);
                        font-size: 8px;
                    }
                }
            }
        }
        /* 用户权益 */
        .user_rights {
            .my_sales_order_header {
                display: flex;
                align-items: center;
                font-size: 17px;
                margin-bottom: 15px;
                .icon_home_5 {
                    width: 17px;
                    height: 17px;
                    margin-right: 5px;
                }
                .icon_arrow_orange {
                    width: 6px;
                    height: 6px;
                    margin-left: 5px;
                }
            }
            .container {
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                /* 公共样式（ 我的购买订单、 优惠劵、 我的协议 ） */
                .bar {
                    // width: 332px;
                    width: 95%;
                    height: 62px;
                    display: flex;
                    align-items: center;
                    .text {
                        flex: 8;
                        font-size: 16px;
                        color: rgba(164, 130, 56, 0.6);
                        padding-left: 100px;
                        line-height: 100%;
                    }
                    .icon_arrow {
                        flex: 2;
                        font-size: 25px;
                        color: rgba(164, 130, 56, 0.6);
                    }
                }
                .my_buy_order {
                    background-image: url("../../assets/home_user_rights_1.png");
                    
                }
                .discount_coupon {
                    background-image: url("../../assets/home_user_rights_2.png");
                }
                .my_agreement {
                    background-image: url("../../assets/home_user_rights_3.png");
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                }
            }
        }
    }
}
// border: 1px solid #0ff;
</style>