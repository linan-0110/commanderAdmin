 <template>
    <div class="myAgreement">
        <van-nav-bar title="我的协议" left-text="返回" left-arrow @click-left="linkBack" />
    </div>
</template>

<script>
export default {
    name: "myAgreement",
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
.myAgreement {
    background-color: rgb(240,239,245);
    height: 100%;
}
// border: 1px solid #0ff;
</style>