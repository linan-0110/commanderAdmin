<template>
    <div class="forgetPassword">
        <!-- <img class="main_img" src="../../../assets/forgetPassword.png" /> -->
        <van-cell-group class="input_container">
            <van-field
                v-model="resetPassword.mobile"
                required
                clearable
                label="手机号"
                placeholder="请输入手机号"
                @click-right-icon="$toast('question')"
            />
            <van-field v-model="resetPassword.pw1" label="新密码" placeholder="请输入密码" required />
            <van-field v-model="resetPassword.pw2" label="确认密码" placeholder="再次输入密码" required />
            <van-field
                v-model="imgVCode"
                required
                center
                clearable
                label="图片验证码"
                placeholder="请输入图片验证码"
            >
                <img
                    slot="button"
                    @click="getImgCode"
                    :src="ImgCodeSrc"
                    alt="图片验证码"
                    class="vcode_img"
                />
            </van-field>
            <van-field
                v-model="resetPassword.vcode"
                required
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
            >
                <van-button
                    slot="button"
                    @click="getNoteCode"
                    :disabled="btn_disabled"
                    size="small"
                    type="primary"
                >{{ btn_msg }}</van-button>
            </van-field>
            <button class="login_btn" is="div" @click="getResetPassword">保存</button>
        </van-cell-group>
    </div>
</template>

<script>
import { reqImgCode, reqNoteCode, reqResetPassword } from "@/api/login";
import DEV from "@/dev_config"; // 导入上线配置
const { SERVER_HREF } = DEV;
import { Toast } from "vant";

const initTime = Date.now() + "" + Math.random() * 100000000000000000;
export default {
    name: "forgetPassword",
    data() {
        return {
            ImgCodeSrc: `${SERVER_HREF}/Home/GetVCode?usertoken=${initTime}&time=${Date.now()}`,
            btn_disabled: false,
            btn_msg: "发送验证码",
            resetPassword: {
                mobile: "",
                pw1: "",
                pw2: "",
                vcode: ""
            },
            imgVCode: ""
        };
    },
    created() {},
    methods: {
        /* 点击获取图片验证码 */
        getImgCode() {
            this.ImgCodeSrc = `${SERVER_HREF}/Home/GetVCode?usertoken=${initTime}&time=${Date.now()}`;
        },

        /* 发送短信验证码 */
        getNoteCode() {
            let mobile = this.resetPassword.mobile,
                vcode = this.imgVCode,
                usertoken = initTime,
                data = {
                    mobile,
                    vcode,
                    usertoken
                };
            if (!/^1[3456789]\d{9}$/.test(mobile)) {
                Toast("请输入正确的手机号");
                return;
            }
            if (!vcode) {
                Toast("请输入图片验证码");
                return;
            }
            reqNoteCode(data).then(res => {
                if (res.data.status === 0) {
                    // 发送验证码成功 禁用按钮
                    this.btn_disabled = true;
                    // 图形验证码过期时间
                    let time = 120,
                        timer_1 = setInterval(() => {
                            this.btn_msg = time-- + "秒";
                            if (time <= 0) {
                                // 启用按钮
                                this.btn_disabled = false;
                                this.btn_msg = "发送验证码";
                                clearInterval(timer_1);
                            }
                        }, 1000);
                } 
                this.ImgCodeSrc = `${SERVER_HREF}/Home/GetVCode?usertoken=${initTime}&time=${Date.now()}`;
                Toast(res.data.msg);
            });
        },

        /* 重置密码 */
        getResetPassword() {
            Toast.loading({
                message: "加载中...",
                duration: 0,
                forbidClick: true
            });
            reqResetPassword(this.resetPassword).then(res => {
                Toast.clear();
                Toast(res.data.msg);
            });
        }
    }
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
        height: 330px;
        width: 90%;
        display: flex;
        background-color: #fff;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        padding: 30px 8px;
        box-sizing: border-box;
        transform: translateY(45%);
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
        .vcode_img {
            width: 55px;
            height: 25px;
        }
    }
}

/* 组建样式 */

// border: 1px solid #f0f;
</style>
