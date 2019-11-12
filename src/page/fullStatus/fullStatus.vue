<template>
    <div class="fullStatus">
        <van-nav-bar title="整体状况" left-text="返回" left-arrow @click-left="linkBack" />
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
                <span>截止今日16.13分</span>
            </article>

            <!-- 预估资产数据 -->
            <article class="predict_asset_data">
                <header>累计收入（元）</header>
                <section class="value_block">0</section>
                <footer class="grid">
                    <div class="item">
                        <p class="title">累计收入</p>
                        <p class="num">0</p>
                    </div>
                    <div class="item">
                        <p class="title">日常奖励金</p>
                        <p class="num">0</p>
                    </div>
                    <div class="item">
                        <p class="title">邀请奖励金</p>
                        <p class="num">0</p>
                    </div>
                    <div class="item" style="background-color: #fff;"></div>
                </footer>
            </article>

            <!-- 预计订单数据 -->
            <article class="predict_order_data">
                <header>预估订单数据</header>
                <section class="container">
                    <div class="block">
                        <p class="title">累计订单（笔）</p>
                        <p class="num">0</p>
                    </div>
                    <div class="block">
                        <p class="title">累计销售量（元）</p>
                        <p class="num">0</p>
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
import { reqTotalIncome } from "@/api/fullStatus";

moment().format();
export default {
    name: "fullStatus",
    data() {
        return {
            trigger_bar: false,
            currentDate: new Date(),
            showDatepicker: false,
            dateTime: moment().format("YYYY年MM月DD日"),
            TotalIncome: {} //累计收入
        };
    },
    created() {
        this.getTotalIncome({
            act: 'f',
            cmd: 'commission',
            s: '2019 - 11 - 12',
            e: '2019 - 11 - 12',
            logtype: 1,
            pageindex: 1,
            pagesize: 10000
        });
    },
    methods: {
        /* 请求 累计收入 */
        getTotalIncome(params) {
            reqTotalIncome(params).then(res => {
                if (res.data.status === 0) {
                    this.TotalIncome = res.data.data;
                } else {
                    console.error("登录失败:" + res.data.msg);
                }
            });
        },
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
            this.showDatepicker = false;
        },
        /* 时间选择框取消事件 */
        clickCancel() {
            this.showDatepicker = false;
        },
        /* ---------- 日期选择框 end ---------- */

        /* 日数据概况 */
        dayDataStatus() {
            this.trigger_bar = false;
        },
        /* 月数据概况 */
        monthDataStatus() {
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
        .predict_asset_data {
            background-color: #fff;
            border-radius: 6px;
            padding: 10px 15px 0px 15px;
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
                height: 143px;
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