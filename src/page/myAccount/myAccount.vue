<template>
    <div class="myAccount">
        <van-nav-bar title="我的账号" left-text="返回" left-arrow @click-left="onClickLeft" />
        <ul class="list">
            <li class="head_portrait">
                <article class="lable">个人头像</article>
                <article class="container">
                    <span class="content"></span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="name">
                <article class="lable">昵称</article>
                <article class="container">
                    <span class="content">小包子</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="acount_name">
                <article class="lable">账号名</article>
                <article class="container">
                    <span class="content">zhangxan121</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="bank_card">
                <article class="lable">银行卡</article>
                <article class="container">
                    <span class="content">321255568451256455</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="phome_number">
                <article class="lable">我的联系信息</article>
                <article class="container">
                    <span class="content">15999999999</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="shipping_address">
                <article class="lable">收货地址</article>
                <article class="container">
                    <span class="content"></span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    name: "myAccount",
    data() {
        return {};
    },
    methods: {
        /* 返回 */
        onClickLeft() {
            this.$router.back()
        }
    }
};
</script>

<style lang="less" scoped>
.myAccount {
    background-color: rgb(240,239,245);
    height: 100%;
    .list{
        li{
            height: 43px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 13px;
            font-size: 18px;
            background-color: #fff;
            margin-bottom: 1px;
        }
        .head_portrait{

        }
        .name{

        }
        .acount_name{

        }
        .bank_card{

        }
        .phome_number{

        }
        .shipping_address{

        }
    }
}
</style>