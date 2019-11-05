<template>
    <div class="Login">
        <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <h1>login</h1>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-search placeholder="请输入搜索关键词" v-model="value" />
		<div class="aa">dsasdasdasd</div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: "Login",
    data() {
        return {
            value: ""
        };
    },
    methods: {
        onClickLeft() {
            Toast('返回');
        }
    }
};
</script>

<style lang='less' scoped>
.Login{
	.aa{
		color: red;
	}
}
</style>
