<template>
    <div class="clientGetCargo">
        <van-nav-bar title="顾客提货" left-text="返回" left-arrow @click-left="linkBack" />
        <van-search class="seaech" placeholder="请输入搜索的订单" v-model="seaechValue" />
        <article class="hint_info">只显示七天内送达的未送达的自营订单</article>
        <article class="product_card">
            <div class="title">
                <div>
                    <img class="icon_time" src="../../assets/icon_time.png" />
                    提货人：张三 18888888888
                </div>
                <span class="pay_info">1个待提货订单</span>
            </div>
            <header class="header">
                <van-checkbox
                    class="checkbox"
                    v-model="checked"
                    checked-color="rgb(229, 186, 82)"
                >下单时间：2019.11.7</van-checkbox>
            </header>
            <section class="product_list">
                <van-checkbox-group class="checkbox_group" v-model="result">
                    <van-checkbox class="checkbox_item" name="a" checked-color="rgb(229, 186, 82)">
                        <van-card
                            class="card_content"
                            num="2"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573210399823&di=f36d90b9731d4dd5e4d3f355e70a3825&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20150414%2Ftooopen_sy_118451441751.jpg"
                        >
                            <div slot="tags">999</div>
                            <div slot="bottom" style="color: red;">下方</div>
                        </van-card>
                    </van-checkbox>

                    <van-checkbox class="checkbox_item" name="a" checked-color="rgb(229, 186, 82)">
                        <van-card
                            class="card_content"
                            num="2"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573210399823&di=f36d90b9731d4dd5e4d3f355e70a3825&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20150414%2Ftooopen_sy_118451441751.jpg"
                        >
                            <div slot="tags">999</div>
                            <div slot="bottom" style="color: red;">下方</div>
                        </van-card>
                    </van-checkbox>

                    <van-checkbox class="checkbox_item" name="a" checked-color="rgb(229, 186, 82)">
                        <van-card
                            class="card_content"
                            num="2"
                            desc="描述信息"
                            title="商品标题"
                            thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573210399823&di=f36d90b9731d4dd5e4d3f355e70a3825&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20150414%2Ftooopen_sy_118451441751.jpg"
                        >
                            <div slot="tags">999</div>
                            <div slot="bottom" style="color: red;">下方</div>
                        </van-card>
                    </van-checkbox>
                </van-checkbox-group>
                <van-button class="confirm_cargo" type="default" size="small">确认收货</van-button>
            </section>
        </article>

        <footer class="footer">
            <van-button class="inform_all_client" type="default" size="small">一键通知所有顾客提货</van-button>
        </footer>
    </div>
</template>

<script>
export default {
    name: "clientGetCargo",
    data() {
        return {
            seaechValue: "",
            checked: false,
            result: []
        };
    },
    methods: {
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.clientGetCargo {
    background-color: rgb(240, 239, 245);
    height: 100%;
    .seaech {
        margin: 10px;
        border-radius: 5px;
    }
    .hint_info {
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: rgb(121, 121, 121);
        font-size: 12px;
        margin: 10px;
        border-radius: 5px;
        background-color: #fff;
    }
    .product_card {
        background-color: #fff;
        margin: 10px;
        border-radius: 5px;
        .title {
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
            .pay_info {
                color: rgb(249, 83, 87);
            }
        }
        .header {
            padding: 5px 10px;
            .checkbox {
                color: rgb(117, 117, 117);
            }
        }
        .product_list {
            position: relative;
            padding-bottom: 15px;
            .checkbox_group {
                margin: 0 10px;
                .checkbox_item {
                    margin: 10px 0;
                    .card_content {
                        margin: 0;
                        border-radius: 0 0 5px 5px;
                        background-color: #fff;
                    }
                }
            }
            .confirm_cargo {
                position: absolute;
                bottom: 15px;
                right: 15px;
                border-radius: 5px;
                background-color: rgb(227, 186, 91);
                color: #fff;
            }
        }
    }
    .footer {
        display: flex;
        justify-content: center;
        .inform_all_client {
            background-color: rgb(222, 210, 172);
            border-radius: 15px;
            padding: 0 15px;
            margin: 0 auto;
            color: #fff;
            font-size: 14px;
        }
    }
}
// border: 1px solid #0ff;
</style>