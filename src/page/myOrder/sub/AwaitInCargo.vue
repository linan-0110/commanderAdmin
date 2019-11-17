<template>
    <div class="AwaitInCargo">
        <van-search
            v-model="getOrderDataParmas.contact"
            placeholder="请输入搜索手机号或姓名"
            show-action
            shape="round"
        >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>

        <van-list
            class="data"
            v-model="listLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell class="li" v-for="item in orderData" :key="item.id">
                <header class="header">
                    <div>订单金额：{{ item.amount}}元</div>
                    <div>订单号：{{ item.id }}</div>
                </header>
                <section class="item" v-for="item_sub in item.detaileList" :key="item_sub.id">
                    <img class="item_main_img" :src="item_sub.mainImg" />
                    <section class="container">
                        <p class="product_name">品名：{{ item_sub.pname }}</p>
                        <p class="product_number">数量：{{ item_sub.number + item_sub.unit }}</p>
                        <p class="product_price">价格：{{ item_sub.pcice }}元</p>
                    </section>
                </section>
                <footer class="get_cargo_address">
                    <p>订单时间：{{ item.CreatTime }}</p>
                    <p>客户：{{ item.consignee }}  {{ item.phone }}</p>
                </footer>
                <van-button
                    v-if="item.States == 15"
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

const pagesize = 5;

export default {
    name: "AwaitInCargo",
    data() {
        return {
            finished: false, // 数据全部加载完成的状态标识
            orderData: [], // 订单数据
            getOrderDataParmas: { pageindex: 1, pagesize, status: 15 }, // 设置默认请求待收货订单数据的参数
            listLoading: false // 列表加载标识
        };
    },
    methods: {
        onLoad() {
            // 请求 订单数据
            this.getOrderData(this.getOrderDataParmas);
        },
        /* 请求 订单数据 */
        getOrderData(params) {
            reqOrderData(params).then(res => {
                // 判断显示全部加载完的状态
                if (res.data.data.list.length < pagesize) {
                    this.finished = true;
                }
                if (res.data.status === 0) {
                    if (this.orderData.length <= 0) {
                        this.orderData = res.data.data.list;
                    } else {
                        res.data.data.list.forEach(item => {
                            this.orderData.push(item);
                        });
                    }
                    // 加载状态结束
                    this.listLoading = false;
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
            this.getOrderDataParmas.pageindex += 1;
        },
        /* 搜索 */
        onSearch() {
            this.orderData = [];
            this.getOrderDataParmas.pageindex = 1;
            this.getOrderData(this.getOrderDataParmas);
        },
        /* 确认收货 */
        confirmGetCargo(oid) {
            let toast_1 = Toast.loading({
                message: "加载中...",
                forbidClick: true,
                duration: 0
            });
            reqGetCargo(oid).then(res => {
                if (res.data.status === 0) {
                    toast_1.clear()
                    // 收货成功后刷新列表
                    this.orderData = [];
                    // 重置索引页
                    this.getOrderDataParmas.pageindex = 1;
                    // 重新请求列表刷新数据
                    this.getOrderData(this.getOrderDataParmas);
                } else {
                    Toast.fail(res.data.msg);
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.AwaitInCargo {
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
            position: relative;
            .header {
                display: flex;
                justify-content: space-between;
                padding: 5px 15px 0 15px;
                font-size: 12px;
                color: #949494;
            }
            .item {
                height: 100px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid rgb(240, 239, 245);
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
                    .product_name {
                        font-weight: normal;
                    }
                    .product_number {
                        margin: 5px 0;
                    }
                    .product_price {
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
    .get_cargo_btn {
        position: absolute;
        right: 10px;
        bottom: 70px;
    }
}
// border: 1px solid #0ff;
</style>