<template>
    <div class="Login">
        <img class="main_img" src="../../assets/login_main1.png" />
        <van-cell-group class="input_container">
            <van-field
                v-model="account"
                required
                clearable
                label="账 号"
                placeholder="请输入账号"
                @click-right-icon="$toast('question')"
            />
            <van-field v-model="password" type="password" label="密 码" placeholder="请输入密码" required />
            <button class="login_btn" @click="login" is="div">登录</button>
            <footer>
                <span class="forgetPassword" @click="linkForgetPassword">忘记密码</span>
            </footer>
        </van-cell-group>
    </div>
</template>

<script>
import { reqLogin } from "@/api/login";
import { Toast, Dialog } from "vant";
export default {
    name: "Login",
    data() {
        return {
            account: "",
            password: ""
        };
    },
    created() {
        // 如果本地保存了密码就自动填入
        this.accountpwdJSON = localStorage.getItem("accountpwd");
        if (this.accountpwdJSON) {
            let { account, password } = JSON.parse(this.accountpwdJSON);
            this.account = account;
            this.password = password;
        }
        let act = localStorage.getItem("act"),
            pwd = localStorage.getItem("pwd");
        if (act) {
            this.account = act;
        }
        if (pwd) {
            this.password = pwd;
        }
    },
    methods: {
        /* 登录 */
        login() {
            Toast.loading({
                message: "登录中...",
                forbidClick: true,
                duration: 0
            });
            reqLogin({
                account: this.account,
                password: this.password
            }).then(res => {
                if (res.data.status === 0) {
                    localStorage.setItem(
                        "userInfo",
                        JSON.stringify(res.data.data)
                    );
                    localStorage.setItem("Token", res.data.data.Token);

                    // 如果本地没有保存过密码 提示是否保存密码
                    localStorage.setItem("act", this.account);
                    if (!localStorage.getItem("pwd")) {
                        Dialog.confirm({
                            title: "保存密码",
                            message: "是否保存密码？"
                        })
                            .then(() => {
                                // 点击确认 时 保存密码
                                localStorage.setItem("pwd", this.password);
                            })
                            .catch(() => {});
                    }

                    Toast.success("登录" + res.data.msg);
                    setTimeout(() => {
                        Toast.clear();
                        this.$router.push("/home");
                    }, 400);
                } else {
                    Toast.fail("登录失败:" + res.data.msg);
                }
            });
        },
        /* 跳转忘记密码 */

        linkForgetPassword() {
            // Login_forgetPassword
            this.$router.push({
                name: "Login_forgetPassword"
            });
        }
    }
};
</script>

<style lang='less' scoped>
.Login {
    display: flex;
    flex-direction: column;
    align-items: center;
    .main_img {
        width: 100%;
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
        padding: 30px 20px 5px 20px;
        box-sizing: border-box;
        transform: translateY(-58%);
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
    footer {
        // border: 1px solid #f0f;
        width: 100%;
        .forgetPassword {
            float: right;
            color: rgb(0, 0, 250);
        }
    }
}

/* 组建样式 */

// border: 1px solid #f0f;
</style>
