<template>
    <div class="myEarnings">
        <van-nav-bar fixed title="我的收益" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="header">
            <date-tiem-picker @ok="clickOk"></date-tiem-picker>
            <van-button class="all_btn" color="rgb(226, 186, 98)" size="mini" @click="all">全部</van-button>
        </header>

        <van-list
            class="data"
            v-model="ListLoading"
            :finished="ListFinished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell class="item" v-for="item in myEarningsList" :key="item.id">
                <header class="title">
                    <div class="id">12</div>
                </header>
                <section class="section">
                    <p>类型：{{ item.note }}</p>
                    <p>时间：{{ item.creattime }}</p>
                    <p>订单号：{{ item.orderid }}</p>
                </section>
                <footer class="footer">+{{ item.amount }}</footer>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import dateTiemPicker from "@/components/dateTiemPicker/dateTiemPicker";
import { reqMyEarnings } from "@/api/myEarnings";
import moment from "moment";
moment().format();

// 请求 我的收益记录列表 默认参数
const defaultGetMyEarningsParams = {logtype: 1, pageindex: 1, pagesize: 20};
let getMyEarningsParams = {logtype: 1, pageindex: 1, pagesize: 20};

export default {
    name: "myEarnings",
    data() {
        return {
            myEarningsList: [], // 备货列表 ListFinished
            ListLoading: false,
            ListFinished: false,
            getMyEarningsParams, // 请求 我的收益记录列表 默认参数
            myEarningsTotal: 0 // 收益记录列表数据总长度
        };
    },
    components: {
        "date-tiem-picker": dateTiemPicker
    },
    created() {
        // 发送请求 我的收益记录列表
        this.getMyEarnings(defaultGetMyEarningsParams);
    },
    methods: {
        onLoad() {
            // 数据全部加载完成
            if (this.myEarningsList.length >= this.myEarningsTotal) {
                this.ListFinished = true;
                return;
            }
            // 请求 备货列表
            this.getMyEarningsParams.pageindex += pagesize;
            this.getMyEarnings(this.getMyEarningsParams);
        },

        /* 请求 我的收益记录列表 */
        getMyEarnings(params) {
            reqMyEarnings(params).then(res => {
                if (res.data.status === 0) {
                    if (this.myEarningsList.length <= 0) {
                        this.myEarningsList = res.data.data.list;
                        this.myStockTotal = res.data.data.recordcount;
                    } else {
                        res.data.data.list.forEach(item => {
                            this.myEarningsList.push(item);
                        });
                    }
                    // 加载状态结束
                    this.ListLoading = false;
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },
       
        /* 时间选择框确认事件 */
        clickOk(dateTime) {
            console.log(moment(dateTime).format("YYYY-MM-DD 00:00:00"));
            this.getMyEarningsParams.s = moment(dateTime).format("YYYY-MM-DD 00:00:00");
            this.getMyEarningsParams.e = moment(dateTime).format("YYYY-MM-DD 23:59:59");
            // 重置索引参数为1
            this.getMyEarningsParams.pageindex = 1;
            // 清空备货列表
            this.myEarningsList = [];
            this.getMyEarnings(this.getMyEarningsParams);
        },

        /* 请求全部 我的收益记录列表 */
        all() {
            this.getMyEarnings(defaultGetMyEarningsParams);
        },

        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.myEarnings {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    .header {
        width: 100%;
        height: 40px;
        font-size: 16px;
        background-color: #fff;
        margin: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .all_btn{
            position: absolute;
            right: 10px;
        }
    }
    .data {
        display: flex;
        flex-direction: column;
        .item {
            margin: 3px 0;
            .van-cell__value {
                display: flex;
                .title {
                    display: flex;
                    align-items: center;
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
                }
                .section{
                    flex: 1;
                    color: #888;
                }
                .footer{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 60px;
                    max-width: 90px;
                    font-size: 30px;
                    color: rgb(242,88,64)
                }
            }
        }
    }
}
// border: 1px solid #0ff;
</style>