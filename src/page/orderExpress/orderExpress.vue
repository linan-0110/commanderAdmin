<template>
    <div class="orderExpress">
        <van-nav-bar fixed title="订单配送" left-text="返回" left-arrow @click-left="linkBack" />
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell
                v-for="item in myStockList"
                :key="item.id"
                class="product_card"
                @click="linkConfirmDelivery(item.id, item.status)"
            >
                <header class="top_header">
                    <div>
                        <img class="icon_time" src="../../assets/icon_time.png" />
                        {{ item.creattime }} 下单
                    </div>
                    <van-tag v-if="item.status == 12" round type="warning">备货中</van-tag>
                    <van-tag v-if="item.status == 13" round type="danger">待发货</van-tag>
                    <van-tag v-if="item.status == 15" round type="primary">已发货</van-tag>
                    <van-tag v-if="item.status == 20" round>已完成</van-tag>
                    <!-- <van-tag v-if="item.status == 15" round type="warning">标签</van-tag> -->
                </header>
                <article class="lable">
                    <div class="id">{{ item.id }}</div>
                    <div class="title">{{ item.name }}</div>
                </article>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import { reqMyStock } from "@/api/orderExpress";

// 备货列表请求参数默认值
const pagesize = 20;
let myStockParams = {
    pageindex: 1,
    pagesize
};

export default {
    name: "orderExpress",
    data() {
        return {
            loading: false,
            finished: false,
            myStockParams, // 备货列表请求参数
            myStockList: [], // 备货列表数据
            myStockTotal: 0 // 备货列表数据总长度
        };
    },
    created() {
        // 请求 备货列表
        this.getMyStock(this.myStockParams);
    },
    methods: {
        onLoad() {
            // 数据全部加载完成
            if (this.myStockList.length >= this.myStockTotal) {
                this.finished = true;
                return;
            }
            
            // 请求 备货列表
            this.getMyStock(this.myStockParams);
        },

        /* 请求 备货列表 */
        getMyStock(params) {
            reqMyStock(params).then(res => {
                if (res.data.status === 0) {
                    if (this.myStockList.length <= 0) {
                        this.myStockList = res.data.data.list;
                        this.myStockTotal = res.data.data.recordcount;
                        this.myStockParams.pageindex += pagesize;
                    } else {
                        res.data.data.list.forEach(item => {
                            this.myStockList.push(item);
                        });
                    }
                    // 加载状态结束
                    this.loading = false;
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },
        
        /* 跳转 以确认送达 */
        linkConfirmDelivery(id, status) {
            this.$router.push({
                name: "home_orderExpress_confirmDelivery",
                query: {
                    id,
                    status
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
.orderExpress {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    .product_card {
        width: auto;
        background-color: #fff;
        margin: 10px;
        border-radius: 5px;
        .top_header {
            height: 30px;
            color: rgb(117, 117, 117);
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgb(239, 238, 244);
            .icon_time {
                width: 13px;
                height: 13px;
            }
        }
        .lable {
            display: flex;
            align-items: center;
            padding: 5px;
            .id {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                padding: 3px;
                background-color: rgb(226, 186, 98);
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
            }
            .title {
                font-size: 13px;
            }
        }
    }
}
// border: 1px solid #0ff;
</style>