 <template>
    <div class="myBuyOrder">
        <van-nav-bar title="我的购买订单" left-text="返回" left-arrow @click-left="linkBack" />
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

        <ul class="data">
            <li class="li">
                <section class="item">
                    <img
                        class="item_main_img"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573866649&di=556f2122caf3c696e16d1c5b3df08d77&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20130525%2F5947930_105420866000_2.jpg"
                    />
                    <section class="container">
                        <p class="order_money">订单金额：99.00</p>
                        <p class="order_number">订单号：15685425254667</p>
                        <p class="time">订单时间：2019.11.8 9:16</p>
                    </section>
                </section>
                <footer class="get_cargo_address">提货点：浙江省台州市椒江区经中路445-447号</footer>
            </li>

            <li class="li">
                <section class="item">
                    <img
                        class="item_main_img"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573866649&di=556f2122caf3c696e16d1c5b3df08d77&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20130525%2F5947930_105420866000_2.jpg"
                    />
                    <section class="container">
                        <p class="order_money">订单金额：99.00</p>
                        <p class="order_number">订单号：15685425254667</p>
                        <p class="time">订单时间：2019.11.8 9:16</p>
                    </section>
                </section>
                <footer class="get_cargo_address">提货点：浙江省台州市椒江区经中路445-447号</footer>
            </li>

            <li class="li">
                <section class="item">
                    <img
                        class="item_main_img"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573866649&di=556f2122caf3c696e16d1c5b3df08d77&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20130525%2F5947930_105420866000_2.jpg"
                    />
                    <section class="container">
                        <p class="order_money">订单金额：99.00</p>
                        <p class="order_number">订单号：15685425254667</p>
                        <p class="time">订单时间：2019.11.8 9:16</p>
                    </section>
                </section>
                <footer class="get_cargo_address">提货点：浙江省台州市椒江区经中路445-447号</footer>
            </li>

            <li class="li">
                <section class="item">
                    <img
                        class="item_main_img"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573866649&di=556f2122caf3c696e16d1c5b3df08d77&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20130525%2F5947930_105420866000_2.jpg"
                    />
                    <section class="container">
                        <p class="order_money">订单金额：99.00</p>
                        <p class="order_number">订单号：15685425254667</p>
                        <p class="time">订单时间：2019.11.8 9:16</p>
                    </section>
                </section>
                <footer class="get_cargo_address">提货点：浙江省台州市椒江区经中路445-447号</footer>
            </li>
        </ul>
    </div>
</template>

<script>
import { reqOrderData } from "@/api/myBuyOrder";
const pagesize = 10;
export default {
    name: "myBuyOrder",
    data() {
        return {
            active: 0,
            tabsConfig, //顶部列表项
            getOrderDataParmas: {  //请求订单数据的参数
                pageindex: 1,
                pagesize: pagesize
            }
        };
    },
    created() {
        this.getOrderData(this.getOrderDataParmas);
    },
    methods: {
        /* 请求 订单数据 */
        getOrderData(params) {
            reqOrderData(params).then(res => {
                if (res.data.status === 0) {
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
    background-color: rgb(240, 239, 245);
    height: 100%;
    .data {
        display: flex;
        flex-direction: column;
        padding: 10px;
        .li {
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