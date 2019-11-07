<template>
    <div class="fullStatus">
        <van-nav-bar title="整体状况" left-text="返回" left-arrow @click-left="linkBack" />
        <nav class="nav">
            <a class="dayDataStatus"  @click="dayDataStatus">日数据概况</a>
            <a class="monthDataStatus" @click="monthDataStatus">月数据概况</a>
            <div class="bottom_bar" :class="{trigger_bar}"></div>
        </nav>
        <article class="container">
            <div @click="showPopup">{{ dateTime }}</div>

            <van-popup class="datetime_picker" v-model="showDatepicker">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    :formatter="formatter"
                    @confirm="clickOk"
                    @cancel="clickCancel"
                />
            </van-popup>
        </article>
        
    </div>
</template>

<script>
import moment from 'moment'
moment().format();
export default {
    name: "fullStatus",
    data() {
        return {
            trigger_bar: false,
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
    background-color: rgb(240,239,245);
    height: 100%;
    .nav{
        height: 40px;
        line-height: 40px;
        margin-top: 1px;
        background-color: #fff;
        display: flex;
        font-size: 16px;
        position: relative;
        a:hover{
            color: rgb(217,187,133);
            text-decoration: none;
        }
        .dayDataStatus{
            flex: 1;
            text-align: center;
        }
        .monthDataStatus{
            flex: 1;
            text-align: center;
        }
        .bottom_bar{
            width: 50%;
            border: rgb(217,187,133) 1px solid;
            position: absolute;
            bottom: 0;
            transition: all .3s ease;
        }
        .trigger_bar{
            transform: translateX(100%);
        }
    }
    .container{
        .datetime_picker{
            width: 70%;
            border-radius: 10px;
        }
    }
}
// border: 1px solid #0ff;
</style>