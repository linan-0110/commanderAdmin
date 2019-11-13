<template>
    <div class="tpl">
        <van-nav-bar fixed title="标题" left-text="返回" left-arrow @click-left="linkBack" />
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    name: "tpl",
    data() {
        return {};
    },
    methods: {
        get(params) {
            req(params).then(res => {
                if (res.data.status === 0) {
					
                } else {
                    console.error("登录失败:" + res.data.msg);
                }
            });
		},
        /* 返回 */
        linkBack() {
            Toast("返回");
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.tpl {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240,239,245);
    height: 100%;
}
// border: 1px solid #0ff;
</style>