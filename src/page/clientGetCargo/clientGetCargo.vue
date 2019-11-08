<template>
    <div class="clientGetCargo">
        <van-nav-bar title="顾客提货" left-text="返回" left-arrow @click-left="linkBack" />
    </div>
</template>

<script>
export default {
    name: "clientGetCargo",
    data() {
        return {};
    },
    methods: {
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.clientGetCargo {
    background-color: rgb(240,239,245);
    height: 100%;
}
// border: 1px solid #0ff;
</style>