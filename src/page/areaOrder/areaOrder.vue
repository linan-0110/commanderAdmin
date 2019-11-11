<template>
    <div class="areaOrder">
        <van-nav-bar title="小区订单" left-text="返回" left-arrow @click-left="linkBack" />

        <!-- 有订单 -->
        <div v-if="true" class="container_have_order">
            <header class="header">
                订单
                <date-tiem-picker class="date_picker" @ok="clickOk" />
            </header>

            <article class="product_card">
                <header class="top_header">
                    <div>
                        <img class="icon_time" src="../../assets/icon_time.png" />
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
                        <img class="icon_time" src="../../assets/icon_time.png" />
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
                        <img class="icon_time" src="../../assets/icon_time.png" />
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

        <!-- 无订单 -->
        <div v-else class="container_no_order">
            <img src="../../assets/bg_no_order.png" />
            <article class="article">
                <div class="title">
                    暂无
                    <span class="orange">订单</span>
                </div>
                <p class="text">请您去选购心仪产品</p>
            </article>
        </div>
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
    height: 100%;
    display: flex;
    flex-direction: column;
    /* 有订单 */
    .container_have_order {
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
            .date_picker {
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
            .card_content {
                margin: 0;
                border-radius: 0 0 5px 5px;
                background-color: #fff;
            }
        }
    }
    /* 无订单 */
    .container_no_order {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(-15%);
        img {
            width: 278px;
            height: 147px;
        }
        .article {
            text-align: center;
            margin: 25px 0;
            .title {
                border: 1px solid rgb(189, 180, 170);
                height: 25px;
                line-height: 25px;
                width: 150px;
                border-radius: 12px;
                font-size: 14px;
                .orange {
                    color: rgb(238, 185, 104);
                }
            }
            .text {
                color: rgb(161, 161, 161);
                font-size: 10px;
                margin: 10px 0;
            }
        }
    }
}
// border: 1px solid #0ff;
</style>