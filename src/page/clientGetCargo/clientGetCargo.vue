 <template>
    <div class="clientGetCargo">
        <van-nav-bar fixed title="待收货" left-text="返回" left-arrow @click-left="linkBack" />
        <await-in-cargo></await-in-cargo>
    </div>
</template>

<script>
import AwaitInCargo from "../myOrder/sub/AwaitInCargo";

export default {
    name: "clientGetCargo",
    data() {
        return {
            active: 0, // 顶部选项卡 当前选中项
        };
    },
    components: {
        "await-in-cargo": AwaitInCargo
    },
    created() {},
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
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    .tab_bar {
        // position: fixed;
        // top: 45px;
        width: 100%;
        .van_tab{
            overflow: scroll;
        }
    }
    
}
</style>