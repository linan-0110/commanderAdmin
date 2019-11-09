 <template>
    <div class="discountCoupon">
        <van-nav-bar title="优惠劵" left-text="返回" left-arrow @click-left="linkBack" />
        <date-tiem-picker @ok="clickOk"></date-tiem-picker>
    </div>
</template>

<script>
import dateTiemPicker from "@/components/dateTiemPicker/dateTiemPicker";
export default {
    name: "discountCoupon",
    data() {
        return {};
    },
    methods: {
        clickOk(dateTime) {
            console.log(dateTime);
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    },
    components: {
        "date-tiem-picker": dateTiemPicker
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