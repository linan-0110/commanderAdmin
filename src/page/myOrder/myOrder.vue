 <template>
    <div class="myOrder">
        <van-nav-bar fixed title="我的订单" left-text="返回" left-arrow @click-left="linkBack" />
        <van-tabs
            v-model="active"
            class="tab_bar"
            title-active-color="rgb(190,157,83)"
            color="rgb(190,157,83)"
            @click="clickTopTab"
        >
            <van-tab title="全部" :name="0" animated>
                <all></all>
            </van-tab>
            <van-tab title="待发货" :name="1" animated>
                <await-out-cargo></await-out-cargo>
            </van-tab>
            <van-tab title="待收货" :name="2" animated>
                <await-in-cargo></await-in-cargo>
            </van-tab>
            <van-tab title="已完成" :name="3" animated>
                <culfill></culfill>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import All from "./sub/All";
import AwaitInCargo from "./sub/AwaitInCargo";
import AwaitOutCargo from "./sub/AwaitOutCargo";
import Fulfill from "./sub/Fulfill";

export default {
    name: "myOrder",
    data() {
        return {
            active: 0, // 顶部选项卡 当前选中项
        };
    },
    components: {
        "all": All,
        "await-in-cargo": AwaitInCargo,
        "await-out-cargo": AwaitOutCargo,
        "culfill": Fulfill
    },
    created() {},
    methods: {
        /* 顶部tab点击事件 */
        clickTopTab(active) {
            this.active = active;
            // 置空 订单数据 以重新获取数据
            console.log("选显卡状态 ==>>" + active);
        },
        
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.myOrder {
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
// border: 1px solid #0ff;
</style>