<template>
    <div class="forgetPassword">
        <!-- <img class="main_img" src="../../../assets/forgetPassword.png" /> -->
        <van-cell-group class="input_container">
            <van-field
                v-model="account"
                required
                clearable
                label="账 号"
                placeholder="请输入账号"
                @click-right-icon="$toast('question')"
            />
            <van-field v-model="password" label="密 码" placeholder="请输入密码" required />
            <van-field v-model="sms" required center clearable label="短信验证码" placeholder="请输入短信验证码">
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
            <button class="login_btn" is="div">保存</button>
        </van-cell-group>
    </div>
</template>

<script>
// import { reqLogin } from "@/api/login";
// import { Toast, Dialog } from "vant";
export default {
    name: "forgetPassword",
    data() {
        return {
            account: "",
            password: "",
            sms: ""
        };
    },
    created() {},
    methods: {}
};
</script>

<style lang='less' scoped>
.forgetPassword {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(../../../assets/forgetPassword.png);
    background-size: 100% 100%;
    .main_img {
        width: 100%;
        height: 100%;
    }
    .input_container {
        height: 260px;
        width: 90%;
        display: flex;
        background-color: #fff;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        padding: 30px 20px;
        box-sizing: border-box;
        transform: translateY(65%);
        box-shadow: 0px -8px 10px rgba(100, 100, 100, 0.15);
        .login_btn {
            color: #fff;
            font-size: 16px;
            height: 40px;
            width: 80%;
            border-radius: 20px;
            background-image: linear-gradient(
                to right,
                rgb(247, 177, 124),
                rgb(247, 212, 172) ;
            );
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

/* 组建样式 */

// border: 1px solid #f0f;
</style>
