<template>
    <div class="alterBankCard">
        <van-nav-bar fixed title="更改银行卡" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="header">绑定银行卡</header>
        <section class="section">
            <van-cell-group>
                <van-field
                    v-model="formData.username"
                    clearable
                    label="持卡人"
                    placeholder="请输入持卡人姓名"
                />

                <van-field
                    v-model="formData.cardNum"
                    clearable
                    label="卡号"
                    placeholder="请输入卡号"
                />
                <van-field
                    v-model="formData.phoneNum"
                    clearable
                    label="预留号码"
                    placeholder="请输入预留号码"
                />
                <van-field
                    clearable
                    label="卡类型"
                    right-icon="arrow"
                    @click-right-icon="$toast('卡类型')"
                />
            </van-cell-group>
        </section>
        <footer class="footer">
            <van-button class="carryCashBtn" @click="confirmAlter">确认更改</van-button>
        </footer>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    name: "alterBankCard",
    data() {
        return {
            formData: {
                username: '',
                cardNum: '',
                phoneNum: ''
            }
        };
    },
    methods: {
        get(params) {
            req(params).then(res => {
                if (res.data.status === 0) {
                    console.log(">>>", res.data.data);
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },

        /* 确认更改按钮 */
        confirmAlter() {
            Toast("确认更改按钮");
            console.log("确认更改按钮");
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.alterBankCard {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    height: 100%;
    .header {
        padding: 18px;
        color: rgb(105, 104, 109);
        font-size: 16px;
    }
    .footer{
        text-align: center;
        margin-top: 40px;
        .carryCashBtn{
            width: 70%;
            border-radius: 22px;
            color: #fff;
            background-image: linear-gradient(
                to right,
                rgb(247, 177, 124),
                rgb(247, 212, 172);
            );
        }
    }
}
// border: 1px solid #0ff;
</style>