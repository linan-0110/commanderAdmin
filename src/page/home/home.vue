<template>
    <div class="home">
        <header class="header">
            <img
                class="header_img"
                src="http://b-ssl.duitang.com/uploads/item/201806/07/20180607185957_fjrFt.thumb.700_0.jpeg"
                alt="头像"
            />
            <article class="header_article">
                <span class="name">张三</span>
                <span class="lable">
                    <img
                        class="icon_home_header_lable"
                        src="../../assets/icon_home_header_lable.png"
                    />小区合伙人
                </span>
            </article>
            <section class="header_data">
                <div class="container_money">
                    <div class="my_asset">
                        <h3 class="my_asset_text">我的资产(元)</h3>
                        <p class="money">185.8</p>
                    </div>
                    <div class="carry_cash">可提现185.8 ▶</div>
                </div>
                <p class="see_full_data">
                    <span>查看完整数据 ▶</span>
                </p>
            </section>
        </header>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    name: "home",
    data() {
        return {};
    },
    methods: {
        onClickLeft() {
            Toast("返回");
        }
    }
};
</script>

<style lang="less" scoped>
.home {
    .header {
        border: 1px solid #0ff;
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
                        font-size: 35px;
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
}
</style>