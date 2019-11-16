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
            <van-tab title="全部" :name="0" class="van_tab">
                <all></all>
            </van-tab>
            <van-tab title="待发货" :name="1" >
                <await-out-cargo></await-out-cargo>
            </van-tab>
            <van-tab title="待收货" :name="2" >
                <await-in-cargo></await-in-cargo>
            </van-tab>
            <van-tab title="已完成" :name="3" >
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

/* 顶部列表项 配置*/
const tabsConfig = [
    { title: "全部", name: 0 },
    { title: "待发货", name: 1 },
    { title: "待收货", name: 2 },
    { title: "已完成", name: 3 }
];

export default {
    name: "myOrder",
    data() {
        return {
            active: 0, // 顶部选项卡 当前选中项
            tabsConfig, // 顶部列表项
            
            activeId: -1, // 用于按钮加载状态判断
        };
    },
    components: {
        "all": All,
        "await-in-cargo": AwaitInCargo,
        "await-out-cargo": AwaitOutCargo,
        "culfill": Fulfill
    },
    created() {
        // if(this.$route.query.initId) {
        //     this.active = parseInt(this.$route.query.initId);
        // }
        // this.getOrderData(this.getOrderDataParmas[this.active]);
    },
    methods: {

        /* 顶部tab点击事件 */
        clickTopTab(active) {
            this.active = active;
            // 置空 订单数据 以重新获取数据
            console.log("选显卡状态 ==>>" + active);
        },
        
        /* 确认收货 */
        confirmGetCargo(oid) {
            // 按钮是加载状态的时候禁止点击
            if(this.btnLoading && this.activeId == oid) {
                return;
            }
            this.activeId = oid;
            this.btnLoading = true;
            reqGetCargo(oid).then(res => {
                if (res.data.status === 0) {
                    // 收货成功后刷新列表
                    this.orderData = [];
                    // 重置索引页
                    this.getOrderDataParmas[this.active].pageindex = 1;
                    this.getOrderData(this.getOrderDataParmas[this.active]);
                    Toast.success(res.data.msg);
                    this.btnLoading = false;
                } else {
                    Toast.fail(res.data.msg);
                }
            });
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
        z-index: 1;
        .van_tab{
            overflow: scroll;
        }
    }
    
}
// border: 1px solid #0ff;
</style>