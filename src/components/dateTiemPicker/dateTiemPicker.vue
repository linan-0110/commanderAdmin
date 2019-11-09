<template>
    <article class="dateTiemPicker">
        <div @click="showPopup">{{ dateTime }}</div>
        <img class="icon_arrow_bottom_black" src="../../assets/icon_arrow_bottom_black.png" />
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
</template>

/* —————————— 用法 —————————— */
/* 确认事件 ok | 返回一个参数*/
/*  1. import dateTiemPicker from "@/components/dateTiemPicker/dateTiemPicker";
    2. components: {
        "date-tiem-picker": dateTiemPicker
       }
    3. <date-tiem-picker></date-tiem-picker>
 */

<script>
import moment from 'moment';
export default {
    name: "dateTiemPicker",
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
            this.$emit("ok", dateTime)
        },
        /* 时间选择框取消事件 */
        clickCancel() {
            this.showDatepicker = false;
        },
        /* ---------- 日期选择框 end ---------- */
    }
};
</script>

<style lang="less" scoped>
.dateTiemPicker {
    display: flex;
    align-items: center;
    .icon_arrow_bottom_black {
        width: 7px;
        height: 7px;
        margin-left: 10px;
    }
    .datetime_picker {
        width: 70%;
        border-radius: 10px;
    }
}
// border: 1px solid #0ff;
</style>