 <template>
    <div class="discountCoupon">
        <van-nav-bar title="优惠劵" left-text="返回" left-arrow @click-left="linkBack" />
    </div>
</template>

<script>
export default {
    name: "discountCoupon",
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
.discountCoupon {
    background-color: rgb(240,239,245);
    height: 100%;
}
// border: 1px solid #0ff;
</style>