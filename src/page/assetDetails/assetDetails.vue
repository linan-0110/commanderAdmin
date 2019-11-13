<template>
    <div class="assetDetails">
        <van-nav-bar fixed title="资产明细" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="header">
            <div @click="showPopup">{{ dateTime }}</div>
            <img class="icon_arrow_bottom_black" src="../../assets/icon_arrow_bottom_black.png">
            <van-popup class="datetime_picker" v-model="showDatepicker">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    :formatter="formatter"
                    @confirm="clickOk"
                    @cancel="clickCancel"
                />
            </van-popup>
        </header>
        
        <ul class="data">
            <li class="item">
                <img class="item_main_img" src="../../assets/icon_VIP.png">
                <section class="container">
                    <h3>相关简历项目名称</h3>
                    <p class="order_number">订单号：15685425254667</p>
                    <p class="time">2019.11.7</p>
                </section>
                <span class="number">+12.1</span>
            </li>

            <li class="item">
                <img class="item_main_img" src="../../assets/icon_VIP.png">
                <section class="container">
                    <h3>相关简历项目名称</h3>
                    <p class="order_number">订单号：15685425254667</p>
                    <p class="time">2019.11.7</p>
                </section>
                <span class="number">+12.1</span>
            </li>

            <li class="item">
                <img class="item_main_img" src="../../assets/icon_VIP.png">
                <section class="container">
                    <h3>相关简历项目名称</h3>
                    <p class="order_number">订单号：15685425254667</p>
                    <p class="time">2019.11.7</p>
                </section>
                <span class="number">+12.1</span>
            </li>

            <li class="item">
                <img class="item_main_img" src="../../assets/icon_VIP.png">
                <section class="container">
                    <h3>相关简历项目名称</h3>
                    <p class="order_number">订单号：15685425254667</p>
                    <p class="time">2019.11.7</p>
                </section>
                <span class="number">+12.1</span>
            </li>
        </ul>

    </div>
</template>

<script>
import moment from 'moment'
moment().format();
export default {
    name: "assetDetails",
    data() {
        return {
            currentDate: new Date(),
            showDatepicker: false,
            dateTime: moment().format('YYYY年MM月DD日')
        };
    },
    methods: {
        /* ---------- 日期选择框 start ---------- */
        showPopup() {
            this.showDatepicker = true;
        },
        formatter(type, value) {
            if (type === "year") {
                return `${value}年`;
            } else if (type === "month") {
                return `${value}月`;
            } else if(type === "day") {
                return `${value}日`;
            }
            return value
        },
        /* 时间选择框确认事件 */
        clickOk(dateTime) {
            this.dateTime = moment(dateTime).format('YYYY年MM月DD日');
            this.showDatepicker = false;
        },
        /* 时间选择框取消事件 */
        clickCancel() {
            this.showDatepicker = false;
        },
        /* ---------- 日期选择框 end ---------- */

        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.assetDetails {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    height: 100%;
    .header {
        width: 100%;
        height: 40px;
        font-size: 16px;
        background-color: #fff;
        margin: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon_arrow_bottom_black{
            width: 7px;
            height: 7px;
            margin-left: 10px;
        }
        .datetime_picker{
            width: 70%;
            border-radius: 10px;
        }
    }
    .data{
        display: flex;
        flex-direction: column;
        .item{
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            background-color: #fff;
            margin-bottom: 5px;
            .item_main_img{
                width: 53px;
                height: 46px;
                margin: 0 20px;
            }
            .container{
                height: 100%;
                flex: 3.5;
                display: flex;
                flex-direction: column;
                justify-content: center;
                h3{
                    font-weight: normal;
                    font-size: 16px;
                    color: rgb(50,50,50);
                }
                .order_number{
                    margin: 10px 0;
                    font-size: 12px;
                    color: rgb(50,50,50);
                }
                .time{
                    font-size: 12px;
                    color: rgb(153,153,153);
                }
            }
            .number{
                flex: 2;
                margin: 0 20px 0 5px;
                font-size: 35px;
                color: rgb(236, 82, 58);
            }
        }
    }
}
// border: 1px solid #0ff;
</style>