<template>
    <div class="Login">
        <img class="main_img" src='' alt="登录页主图" />
        <p class="toast">
            <img/>你的账号信息（昵称、头像、地区及性别）
        </p>
        <button class="login_btn" @click="login">授权并登录</button>
        <h6 class="bottom_state">
            登录及代表您已同意
            <a class="protocol_link">《集集享家隐私政策》</a>
        </h6>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    name: "Login",
    data() {
        return {};
	},
	created() {
		console.log(this);
	},
    methods: {
		/* 登录 */
		login() {
			Toast.success('登录成功')
			this.$router.push('/home')
		},
        onClickLeft() {
            Toast("返回")
        }
    }
};
</script>

<style lang='less' scoped>
.Login {
    .main_img {
    }
    .toast {
        font-size: 20px;
        transform: scale(0.5);
        color: rgb(6, 180, 177);
        margin: 0.9rem;
        font-weight: 600;
    }
    .login_btn {
        width: 15.6rem;
        height: 2.6rem;
        border-radius: 1.3rem;
        background-image: linear-gradient(
            to right,
            rgb(255, 184, 128),
            rgb(252, 205, 151)
        );
        border: 0;
        color: rgb(252, 252, 254);
        font-size: 0.88rem;
        font-weight: normal;
    }
    .bottom_state {
        width: 100%;
        font-size: 20px;
        transform: scale(0.5);
        color: rgb(180, 180, 180);
        margin: 1rem 0;
        font-weight: normal;
        position: absolute;
        bottom: 0;
        .protocol_link {
            color: rgb(113, 179, 231);
        }
    }
}
</style>
