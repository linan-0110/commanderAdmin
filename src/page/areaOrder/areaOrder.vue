<template>
    <div class="areaOrder">
        <van-nav-bar title="小区订单" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="header">
            订单
            <date-tiem-picker class="date_picker" @ok="clickOk"/>
        </header>
        
        <article class="product_card">
            <header class="top_header">
                <div>
                    <img class="icon_time" src="../../assets/icon_time.png">
                    下单时间：2019.8.7 10:22
                </div>
                <span class="pay_info">已支付</span>
            </header>
            <van-card
                class="card_content"
                num="2"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
                <div slot="tags">999</div>
                <div slot="footer" style="color: red;">提货人：张三 18888888888</div>
                <div slot="bottom" style="color: red;">下方</div>
            </van-card>
        </article>
        
        <article class="product_card">
            <header class="top_header">
                <div>
                    <img class="icon_time" src="../../assets/icon_time.png">
                    下单时间：2019.8.7 10:22
                </div>
                <span class="pay_info">已支付</span>
            </header>
            <van-card
                class="card_content"
                num="2"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
                <div slot="tags">999</div>
                <div slot="footer" style="color: red;">提货人：张三 18888888888</div>
                <div slot="bottom" style="color: red;">下方</div>
            </van-card>
        </article>
        
        <article class="product_card">
            <header class="top_header">
                <div>
                    <img class="icon_time" src="../../assets/icon_time.png">
                    下单时间：2019.8.7 10:22
                </div>
                <span class="pay_info">已支付</span>
            </header>
            <van-card
                class="card_content"
                num="2"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            >
                <div slot="tags">999</div>
                <div slot="footer" style="color: red;">提货人：张三 18888888888</div>
                <div slot="bottom" style="color: red;">下方</div>
            </van-card>
        </article>

    </div>
</template>

<script>
import dateTiemPicker from "@/components/dateTiemPicker/dateTiemPicker";
export default {
    name: "areaOrder",
    data() {
        return {};
    },
    components: {
        "date-tiem-picker": dateTiemPicker
    },
    methods: {
        /* 时间选择器 确认事件 */
        clickOk(dateTime) {
            console.log(dateTime);
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.areaOrder {
    background-color: rgb(240, 239, 245);
    height: 100%;
    .header {
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        margin: 10px;
        border-radius: 5px;
        text-align: center;
        font-size: 20px;
        position: relative;
        .date_picker{
            font-size: 14px;
            position: absolute;
            right: 10px;
            top: 0;
        }
    }
    .product_card {
        background-color: #fff;
        margin: 10px;
        border-radius: 5px;
        .top_header {
            height: 30px;
            color: rgb(117,117,117);
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgb(239,238,244);
            .icon_time{
                width: 13px;
                height: 13px;
            }
        }
        .card_content{
            margin: 0;
            border-radius: 0 0 5px 5px;
            background-color: #fff;
        }
    }
}
// border: 1px solid #0ff;
</style>