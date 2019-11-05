<template>
    <div class="tpl">
        <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
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
        onClickLeft() {
            Toast("返回");
        }
    }
};
</script>

<style lang="less" scoped>
.tpl {}
</style>