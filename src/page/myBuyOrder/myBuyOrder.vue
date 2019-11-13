 <template>
    <div class="myBuyOrder">
        <van-nav-bar fixed title="我的购买订单" left-text="返回" left-arrow @click-left="linkBack" />
        <van-tabs 
            v-model="active"
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

        <!-- <ul class="data">
            <li class="li" v-for="(item) in orderData" :key="item.id">
                <section class="item">
                    <img
                        class="item_main_img"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573866649&di=556f2122caf3c696e16d1c5b3df08d77&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20130525%2F5947930_105420866000_2.jpg"
                    />
                    <section class="container">
                        <p class="order_money">订单金额：{{ item.amount}}</p>
                        <p class="order_number">订单号：{{ item.id }}</p>
                        <p class="time">订单时间：{{ item.DateTimePay }}</p>
                    </section>
                </section>
                <footer class="get_cargo_address">提货点：浙江省台州市椒江区经中路445-447号</footer>
            </li>
        </ul>-->
        <van-list
            class="data"
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell class="li" v-for="item in orderData" :key="item.id">
                <section class="item">
                    <img
                        class="item_main_img"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573866649&di=556f2122caf3c696e16d1c5b3df08d77&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20130525%2F5947930_105420866000_2.jpg"
                    />
                    <section class="container">
                        <p class="order_money">订单金额：{{ item.amount}}</p>
                        <p class="order_number">订单号：{{ item.id }}</p>
                        <p class="time">订单时间：{{ item.DateTimePay }}</p>
                    </section>
                </section>
                <footer class="get_cargo_address">提货点：{{ item.GetProductAddress }}</footer>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import { reqOrderData } from "@/api/myBuyOrder";
const pagesize = 10;
let tiemr;
export default {
    name: "myBuyOrder",
    data() {
        return {
            active: 0,
            tabsConfig, //顶部列表项
            getOrderDataParmas: {
                //请求订单数据的参数
                pageindex: 1,
                pagesize: pagesize
            },
            orderData: [], //订单数据
            orderDataTotal: 0, //订单数据总条数
            loading: false, //列表加载标识
            finished: false, //数据全部加载完成的状态标识

        };
    },
    created() {
        this.getOrderData(this.getOrderDataParmas);
    },
    methods: {
        onLoad() {
            // 异步更新数据
            if(tiemr) {
                clearTimeout(tiemr);
                return
            }
            tiemr = setTimeout(() => {
                // 请求 订单数据
                this.getOrderDataParmas.pageindex += pagesize;
                this.getOrderData(this.getOrderDataParmas);
                
                // 数据全部加载完成
                if (this.orderData.length >= this.recordcount) {
                    this.finished = true;
                }
                console.log("999");
            }, 500);
            // console.log("999");
        },
        /* 请求 订单数据 */
        getOrderData(params) {
            reqOrderData(params).then(res => {
                if (res.data.status === 0) {
                    if(this.orderData.length <=0 ) {
                        this.orderData = res.data.data.list;
                        this.orderDataTotal = res.data.data.recordcount;
                    } else {
                        res.data.data.list.forEach(item => {
                            this.orderData.push(item)
                        })
                    }
                    
                    
                    // 加载状态结束
                    this.loading = false;
                } else {
                    console.error("登录失败:" + res.data.msg);
                }
            });
        },
        /* 顶部tab点击事件 */
        clickTopTab(name) {
            console.log(name);
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};

/* 顶部列表项 配置*/
const tabsConfig = [
    { title: "全部", name: 0 },
    { title: "代发货", name: 1 },
    { title: "待发货", name: 2 },
    { title: "待收货", name: 3 },
    { title: "已完成", name: 4 }
];
</script>

<style lang="less" scoped>
.myBuyOrder {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    .data {
        display: flex;
        flex-direction: column;
        padding: 10px;
        .li {
            padding: 0;
            background-color: #fff;
            margin-bottom: 10px;
            border-radius: 5px;
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
        }
    }
}
// border: 1px solid #0ff;
</style>