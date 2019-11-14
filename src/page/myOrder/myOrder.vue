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
            <van-tab
                v-for="(item) in tabsConfig"
                :key="item.name"
                :title="item.title"
                :name="item.name"
            ></van-tab>
        </van-tabs>

        <van-list
            class="data"
            v-model="listLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell class="li" v-for="item in orderData" :key="item.id">
                <section class="item">
                    <img class="item_main_img" :src="item.detaileList[0].mainImg" />
                    <section class="container">
                        <p class="order_money">订单金额：{{ item.amount}}元</p>
                        <p class="order_number">订单号：{{ item.id }}</p>
                        <p class="time">订单时间：{{ item.DateTimePay }}</p>
                    </section>
                </section>
                <footer
                    class="get_cargo_address"
                >提货点：{{ item.GetProductAddress }} {{item.consignee}}</footer>
                <van-button
                    v-if="item.States == 15"
                    :listLoading="btnLoading && item.id == activeId"
                    type="info"
                    size="mini"
                    class="get_cargo_btn"
                    @click="confirmGetCargo(item.id)"
                >收货</van-button>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import { Toast } from "vant";
import { reqOrderData, reqGetCargo } from "@/api/myOrder";

/* 顶部列表项 配置*/
const tabsConfig = [
    { title: "全部", name: 0 },
    { title: "待发货", name: 1 },
    { title: "待收货", name: 2 },
    { title: "已完成", name: 3 }
];
const pagesize = 10;
//设置默认请求订单数据的参数 (顶部四个选项卡，分别对应五个请求参数)
let getOrderDataParmas = [
    { pageindex: 1, pagesize, status: -1 }, // 全部
    { pageindex: 1, pagesize, status: 10 }, // 待发货
    { pageindex: 1, pagesize, status: 15 }, // 待收货
    { pageindex: 1, pagesize, status: 20 } // 已完成(实际代表未评价)
];
export default {
    name: "myOrder",
    data() {
        return {
            active: 0, // 顶部选项卡 当前选中项
            tabsConfig, // 顶部列表项
            getOrderDataParmas, // 请求订单数据的参数列表
            orderData: [], // 订单数据
            orderDataTotal: 1, // 订单数据总条数
            listLoading: false, // 列表加载标识
            finished: false, // 数据全部加载完成的状态标识
            btnLoading: false, //按钮的加载状态
            activeId: -1 // 用于按钮加载状态判断
        };
    },
    created() {
        this.getOrderData(this.getOrderDataParmas[this.active]);
    },
    methods: {
        onLoad() {
            // 数据全部加载完成
            if (this.orderData.length >= this.orderDataTotal) {
                this.finished = true;
                return;
            }

            // 请求 订单数据
            this.getOrderDataParmas[this.active].pageindex += pagesize;
            this.getOrderData(this.getOrderDataParmas[this.active]);
            console.count("加载中列表 >>>>");
        },

        /* 请求 订单数据 */
        getOrderData(params) {
            reqOrderData(params).then(res => {
                if (res.data.status === 0) {
                    if (this.orderData.length <= 0) {
                        this.orderData = res.data.data.list;
                        this.orderDataTotal = res.data.data.recordcount;
                    } else {
                        res.data.data.list.forEach(item => {
                            this.orderData.push(item);
                        });
                    }
                    // 加载状态结束
                    this.listLoading = false;
                } else {
                    console.error("登录失败:" + res.data.msg);
                }
            });
        },

        /* 顶部tab点击事件 */
        clickTopTab(active) {
            this.active = active;
            // 置空 订单数据 以重新获取数据
            this.orderData = [];
            // 出现加载状态
            this.listLoading = true;
            // 加载订单数据
            this.getOrderData(this.getOrderDataParmas[this.active]);
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
    padding-top: 90px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    .tab_bar {
        position: fixed;
        top: 45px;
        width: 100%;
        z-index: 1;
    }
    .data {
        display: flex;
        flex-direction: column;
        padding: 10px;
        .li {
            padding: 0;
            background-color: #fff;
            margin-bottom: 10px;
            border-radius: 5px;
            position: relative;
            .item {
                height: 100px;
                display: flex;
                align-items: center;
                .item_main_img {
                    width: 80px;
                    height: 80px;
                    margin: 0 20px;
                    border-radius: 5px;
                }
                .container {
                    height: 100%;
                    flex: 3.5;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    color: rgb(120, 120, 120);
                    font-size: 14px;
                    .order_money {
                        font-weight: normal;
                    }
                    .order_number {
                        margin: 10px 0;
                    }
                    .time {
                        font-size: 14px;
                    }
                }
            }
            .get_cargo_address {
                margin: 0 20px 10px 20px;
                color: rgb(120, 120, 120);
                font-size: 12px;
            }
            .get_cargo_btn {
                position: absolute;
                right: 10px;
                top: 10px;
            }
        }
    }
}
// border: 1px solid #0ff;
</style>