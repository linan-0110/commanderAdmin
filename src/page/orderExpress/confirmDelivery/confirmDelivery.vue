<template>
    <div class="confirmDelivery">
        <van-nav-bar fixed title="以确认送达" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="header">配送日期： 2019.11.9</header>
        <aside class="aside">
            <div class="left">
                <img src="../../../assets/icon_todo_list.png" />
                {{ stockInfo.length + "笔订单" + " - " + productTotalNum + "件商品" }} 
            </div>
        </aside>
        <ul class="products">
            <li class="product_item" v-for="(item) in stockInfo" :key="item.id">
                <section class="container">
                    <p class="order_describe">品名：{{ item.ProductName }}</p>
                    <p class="order_number">数量: {{ item.total + item.Unit }}</p>
                    <p>单价: {{ item.price }}元</p>
                    <p>总价: {{ item.amount }}元</p>
                </section>
                <van-stepper
                    class="stepper"
                    :disabled="status != 15"
                    v-model="item.mayGet"
                    integer
                    min="0"
                    :max="item.mayGetMax"
                />
            </li>
        </ul>

        <footer class="footer">
            <p>可以再次修改缺货信息，进行再次提交</p>
            <van-button
                v-if="status == 15"
                class="sunmit_info"
                size="small"
                @click="sunmit_info"
            >提交收货信息</van-button>
        </footer>
    </div>
</template>

<script>
import { Toast } from "vant";
import { reqStockInfo, reqReceipt } from "@/api/orderExpress";
export default {
    name: "reqStockInfo",
    data() {
        return {
            stockInfo: [], // 备货信息列表
            id: -1, // 当前订单ID
            status: -1, // 当前订单状态 （用于判断是否是 已发货（status==15）状态）
            productTotalNum: 0
        };
    },
    created() {
        this.id = this.$route.query.id;
        this.status = this.$route.query.status;
        // 请求 备货信息
        this.getStockInfo(this.id);
    },
    methods: {
        /* 请求 备货信息 */
        getStockInfo(params) {
            reqStockInfo(params).then(res => {
                if (res.data.status === 0) {
                    let values = res.data.data.list;
                    values.forEach(item => {
                        item.mayGet = item.total - item.Actual; // mayGet ==> 可收
                        item.mayGetMax = item.total - item.Actual;
                        this.productTotalNum += item.total - item.Actual;
                    })
                    this.stockInfo = res.data.data.list;
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },

        /* 提交收货信息 */
        sunmit_info() {
            // 加载提示
            let toast = Toast.loading({
                message: "加载中...",
                forbidClick: true,
                duration: 0
            });

            let list = [];
            this.stockInfo.forEach(item => {
                list.push({
                    id: item.id,
                    value: item.total
                });
            });
            // 请求收货的请求参数
            let params = {
                id: this.id,
                list: JSON.stringify(list)
            };

            // 请求 收货
            reqReceipt(params).then(res => {
                if (res.data.status === 0) {
                    toast.clear();
                    Toast.success('确认收货成功');
                    this.$router.back();
                } else {
                    Toast.fail(res.data.msg);
                    console.error("网络错误:" + res.data.msg);
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
.confirmDelivery {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    .header {
        height: 45px;
        background-color: #fff;
        border-radius: 5px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: rgb(50, 50, 50);
    }
    .aside {
        height: 35px;
        background-color: #fff;
        border-radius: 5px;
        margin: 10px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(120, 120, 120);
        font-size: 12px;
        .left {
            display: flex;
            align-items: center;
            img {
                width: 12px;
                height: 14px;
                margin-right: 6px;
            }
        }
    }
    .products {
        .product_item {
            background-color: #fff;
            border-radius: 5px;
            margin: 10px;
            padding: 0 10px;
            height: 100px;
            display: flex;
            align-items: center;
            position: relative;
            .container {
                height: 100%;
                flex: 3.5;
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: rgb(120, 120, 120);
                font-size: 14px;
            }
            .stepper {
                position: absolute;
                right: 10px;
                bottom: 10px;
            }
        }
    }
    .footer {
        color: rgb(120, 120, 120);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        .sunmit_info {
            background-color: rgb(221, 209, 167);
            border-radius: 15px;
            padding: 0 20px;
            margin: 10px 0;
            color: #fff;
            font-size: 20px;
        }
    }
}
// border: 1px solid #0ff;
</style>