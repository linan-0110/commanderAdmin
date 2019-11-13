<template>
    <div class="fullStatus">
        <van-nav-bar fixed title="整体状况" left-text="返回" left-arrow @click-left="linkBack" />
        <nav class="nav">
            <a
                class="dayDataStatus"
                :class="{trigger_text: !trigger_bar}"
                @click="dayDataStatus"
            >日数据概况</a>
            <a
                class="monthDataStatus"
                :class="{trigger_text: trigger_bar}"
                @click="monthDataStatus"
            >月数据概况</a>
            <div class="bottom_bar" :class="{trigger_bar}"></div>
        </nav>

        <section class="main_content">
            <article class="container_head">
                <div class="datetime_picker_click" @click="showPopup">
                    {{ dateTime }}
                    <img
                        class="icon_arrow_bottom_black"
                        src="../../assets/icon_arrow_bottom_black.png"
                    />
                </div>
                <span>截止今日{{ moment().format("HH.mm") }}分</span>
            </article>

            <!-- 预估资产数据 -->
            <article class="total_income">
                <header>累计收入（元）</header>
                <section class="value_block">{{ totalIncome.toFixed(2) }}</section>
                <footer class="grid">
                    <div class="item">
                        <p class="title">累计收入</p>
                        <p class="num">{{ totalIncome.toFixed(2) }}</p>
                    </div>
                    <div class="item">
                        <p class="title">推广收益</p>
                        <p class="num">{{ generalizeMoney }}</p>
                    </div>
                    <div class="item">
                        <p class="title">订单佣金</p>
                        <p class="num">{{ orderMoney }}</p>
                    </div>
                </footer>
            </article>

            <!-- 预计订单数据 -->
            <article class="predict_order_data">
                <header>预估订单数据</header>
                <section class="container">
                    <div class="block">
                        <p class="title">累计订单（笔）</p>
                        <p class="num">{{ recordcount }}</p>
                    </div>
                    <div class="block">
                        <p class="title">累计销售额（元）</p>
                        <p class="num">{{ totalMoney.toFixed(2) }}</p>
                    </div>
                </section>
            </article>

            <!-- 预计客人数据 -->
            <!-- <article class="predict_guest">
                <header>预估客户数据（人）</header>
                <section class="container">
                    <div class="block">
                        <p class="title">累计访问人数</p>
                        <p class="num">0</p>
                    </div>
                    <div class="block">
                        <p class="title">累计下单人数</p>
                        <p class="num">0</p>
                    </div>
                </section>
            </article>-->
        </section>

        <!-- 时间选择框 -->
        <van-popup class="datetime_picker" v-model="showDatepicker">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                :formatter="formatter"
                @confirm="clickOk"
                @cancel="clickCancel"
            />
        </van-popup>
    </div>
</template>

<script>
import moment from "moment";
import { reqTotalIncome, reqOrderData } from "@/api/fullStatus";

moment().format();
export default {
    name: "fullStatus",
    data() {
        return {
            trigger_bar: false,
            currentDate: new Date(),
            showDatepicker: false,
            dateTime: moment().format("YYYY年MM月DD日"),
            totalIncome: 0, //累计收入
            generalizeMoney: 0, //推广收益
            orderMoney: 0, //订单佣金
            recordcount: 0, //订单数量
            totalMoney: 0, //累计销售额
            dateTimeStr: moment().format("YYYY-MM-DD") //日期选择器选择的时间
        };
    },
    created() {
        /* 请求 累计收入 默认查询单日 */
        this.getTotalIncome({
            s: moment().format("YYYY-MM-DD") + " 00:00:00",
            e: moment().format("YYYY-MM-DD") + " 23:59:59"
        });

        /* 订单数据 默认查询单日*/
        this.getOrderData({
            s: moment().format("YYYY-MM-DD") + " 00:00:00",
            e: moment().format("YYYY-MM-DD") + " 23:59:59"
        });
    },
    methods: {
        /* 请求 累计收入 */
        getTotalIncome(params) {
            reqTotalIncome(params).then(res => {
                if (res.data.status === 0) {
                    this.totalIncome = 0; //累计收入
                    this.orderMoney = 0; //订单佣金
                    this.generalizeMoney = 0; //推广收益
                    res.data.data.list.forEach(item => {
                        this.totalIncome += item.amount;
                        if (item.otype == 1) {
                            this.orderMoney += item.amount;
                        }
                        if (item.otype == 4) {
                            this.generalizeMoney += item.amount;
                        }
                    });
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },

        /* 请求 订单数据 */
        getOrderData(params) {
            reqOrderData(params).then(res => {
                if (res.data.status === 0) {
                    this.recordcount = 0; //订单数量
                    this.totalMoney = 0; //累计销售额
                    this.recordcount = res.data.data.recordcount;
                    res.data.data.list.forEach(item => {
                        this.totalMoney += item.amount;
                    });
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },

        moment,
        /* ---------- 日期选择框 start ---------- */
        showPopup() {
            this.showDatepicker = true;
        },
        formatter(type, value) {
            if (type === "year") {
                return `${value}年`;
            } else if (type === "month") {
                return `${value}月`;
            } else if (type === "day") {
                return `${value}日`;
            }
            return value;
        },
        /* 时间选择框确认事件 */
        clickOk(dateTime) {
            this.dateTime = moment(dateTime).format("YYYY年MM月DD日");
            this.dateTimeStr = moment(dateTime).format("YYYY-MM-DD");
            if (this.trigger_bar) {
                //是月数据
                /* 请求 累计收入 */
                this.getTotalIncome({
                    s:
                        moment(dateTime)
                            .startOf("month")
                            .format("YYYY-MM-DD") + " 00:00:00",
                    e:
                        moment(dateTime)
                            .endOf("month")
                            .format("YYYY-MM-DD") + " 23:59:59"
                });

                /* 订单数据 查询单月*/
                this.getOrderData({
                    s:
                        moment(dateTime)
                            .startOf("month")
                            .format("YYYY-MM-DD") + " 00:00:00",
                    e:
                        moment(dateTime)
                            .endOf("month")
                            .format("YYYY-MM-DD") + " 23:59:59"
                });
            } else {
                //是日数据
                /* 请求 累计收入 */
                this.getTotalIncome({
                    s: moment(dateTime).format("YYYY-MM-DD") + " 00:00:00",
                    e: moment(dateTime).format("YYYY-MM-DD") + " 23:59:59"
                });

                /* 订单数据 查询单日*/
                this.getOrderData({
                    s: moment(dateTime).format("YYYY-MM-DD") + " 00:00:00",
                    e: moment(dateTime).format("YYYY-MM-DD") + " 23:59:59"
                });
            }

            this.showDatepicker = false;
        },
        /* 时间选择框取消事件 */
        clickCancel() {
            this.showDatepicker = false;
        },
        /* ---------- 日期选择框 end ---------- */

        /* 日数据概况 */
        dayDataStatus() {
            /* 请求 累计收入 */
            this.getTotalIncome({
                s: moment(this.dateTimeStr).format("YYYY-MM-DD") + " 00:00:00",
                e: moment(this.dateTimeStr).format("YYYY-MM-DD") + " 23:59:59"
            });

            /* 订单数据 查询单日*/
            this.getOrderData({
                s: moment(this.dateTimeStr).format("YYYY-MM-DD") + " 00:00:00",
                e: moment(this.dateTimeStr).format("YYYY-MM-DD") + " 23:59:59"
            });
            this.trigger_bar = false;
        },
        /* 月数据概况 */
        monthDataStatus() {
            /* 请求 累计收入 */
            this.getTotalIncome({
                s:
                    moment(this.dateTimeStr)
                        .startOf("month")
                        .format("YYYY-MM-DD") + " 00:00:00",
                e:
                    moment(this.dateTimeStr)
                        .endOf("month")
                        .format("YYYY-MM-DD") + " 23:59:59"
            });

            /* 订单数据 查询单月*/
            this.getOrderData({
                s:
                    moment(this.dateTimeStr)
                        .startOf("month")
                        .format("YYYY-MM-DD") + " 00:00:00",
                e:
                    moment(this.dateTimeStr)
                        .endOf("month")
                        .format("YYYY-MM-DD") + " 23:59:59"
            });
            this.trigger_bar = true;
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.fullStatus {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    height: 100%;
    .nav {
        height: 40px;
        line-height: 40px;
        margin-top: 1px;
        background-color: #fff;
        display: flex;
        font-size: 16px;
        position: relative;
        a:hover {
            color: rgb(217, 187, 133);
            text-decoration: none;
        }

        .dayDataStatus {
            flex: 1;
            text-align: center;
        }
        .monthDataStatus {
            flex: 1;
            text-align: center;
        }
        .bottom_bar {
            width: 50%;
            border: rgb(217, 187, 133) 1px solid;
            position: absolute;
            bottom: 0;
            transition: all 0.3s ease;
        }
        .trigger_bar {
            transform: translateX(100%);
        }
        .trigger_text {
            color: rgb(217, 187, 133);
            text-decoration: none;
        }
    }
    .main_content {
        margin: 10px;
        .container_head {
            display: flex;
            justify-content: space-between;
            color: rgb(50, 50, 50);
            .datetime_picker_click {
                background-color: #fff;
                padding: 3px 8px;
                border-radius: 10px;
                font-size: 12px;
                .icon_arrow_bottom_black {
                    width: 7px;
                    height: 7px;
                }
            }
        }
        .total_income {
            background-color: #fff;
            border-radius: 6px;
            padding: 10px 15px 20px 15px;
            margin: 10px 0;
            header {
                display: inline-block;
                padding: 5px 0;
                font-size: 15px;
                color: rgb(10, 10, 10);
                font-weight: 600;
                border-bottom: 1px solid rgb(217, 187, 133);
            }
            .value_block {
                font-size: 38px;
                padding: 8px 0 8px 40px;
            }
            .grid {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .item {
                    width: 97px;
                    height: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    background-color: rgb(240, 239, 245);
                    border-radius: 3px;
                    .title {
                        color: rgb(99, 99, 101);
                        font-size: 12px;
                        margin-top: 10px;
                    }
                    .num {
                        color: rgb(4, 59, 58);
                        font-size: 16px;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }
                }
            }
        }
        .predict_order_data,
        .predict_guest {
            background-color: #fff;
            border-radius: 6px;
            padding: 10px 15px 10px 15px;
            margin: 10px 0;
            header {
                display: inline-block;
                padding: 5px 0;
                font-size: 15px;
                color: rgb(10, 10, 10);
                font-weight: 600;
                border-bottom: 1px solid rgb(217, 187, 133);
            }
            .container {
                display: flex;
                margin-top: 10px;
                .block {
                    width: 120px;
                    height: 45px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    .title {
                        font-size: 12px;
                        color: rgb(99, 99, 101);
                    }
                    .num {
                        color: rgb(4, 59, 58);
                        font-size: 16px;
                        font-weight: 600;
                    }
                }
            }
        }
    }
}

.datetime_picker {
    width: 70%;
    border-radius: 10px;
}
// border: 1px solid #0ff;
</style>