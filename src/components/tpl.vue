<template>
    <div class="tpl">
        <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="linkBack" />
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
    background-color: rgb(240,239,245);
    height: 100%;
}
// border: 1px solid #0ff;
</style>