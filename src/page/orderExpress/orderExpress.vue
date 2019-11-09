<template>
    <div class="orderExpress">
        <van-nav-bar title="订单配送" left-text="返回" left-arrow @click-left="linkBack" />
        <article class="product_card" @click="linkConfirmDelivery">
            <header class="top_header">
                <div>
                    <img class="icon_time" src="../../assets/icon_time.png">
                    2019.11.7 送达
                </div>
                <span class="pay_info">三种订单 三种价格</span>
            </header>
            <section class="imgList">
                <div class="imgItem">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg" alt="商品标题">
                    <p class="describe">1份</p>
                </div>
                <div class="imgItem">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg" alt="商品标题">
                    <p class="describe">1份</p>
                </div>
                <div class="imgItem">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg" alt="商品标题">
                    <p class="describe">1份</p>
                </div>
            </section>
        </article>
        
        <article class="product_card" @click="linkConfirmDelivery">
            <header class="top_header">
                <div>
                    <img class="icon_time" src="../../assets/icon_time.png">
                    2019.11.7 送达
                </div>
                <span class="pay_info">三种订单 三种价格</span>
            </header>
            <section class="imgList">
                <div class="imgItem">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg" alt="商品标题">
                    <p class="describe">1份</p>
                </div>
                <div class="imgItem">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg" alt="商品标题">
                    <p class="describe">1份</p>
                </div>
                <div class="imgItem">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg" alt="商品标题">
                    <p class="describe">1份</p>
                </div>
            </section>
        </article>
        
        <article class="product_card" @click="linkConfirmDelivery">
            <header class="top_header">
                <div>
                    <img class="icon_time" src="../../assets/icon_time.png">
                    2019.11.7 送达
                </div>
                <span class="pay_info">三种订单 三种价格</span>
            </header>
            <section class="imgList">
                <div class="imgItem">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg" alt="商品标题">
                    <p class="describe">1份</p>
                </div>
                <div class="imgItem">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg" alt="商品标题">
                    <p class="describe">1份</p>
                </div>
                <div class="imgItem">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg" alt="商品标题">
                    <p class="describe">1份</p>
                </div>
            </section>
        </article>
        
    </div>
</template>

<script>
export default {
    name: "orderExpress",
    data() {
        return {};
    },
    methods: {
        /* 跳转 以确认送达 */
        linkConfirmDelivery() {
            this.$router.push({
                name: "home_orderExpress_confirmDelivery"
            })
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
    background-color: rgb(240,239,245);
    height: 100%;
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
        .imgList{
            display: flex;
            padding: 10px;
            .imgItem{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 10px;
                img{
                    width: 70px;
                    height: 70px;
                    border: 1px solid rgb(50,48,49);
                    border-radius: 5px;
                }
                .describe{
                    color: rgb(117,117,117);
                    font-size: 12px;
                }
            }
        }
    }
}
// border: 1px solid #0ff;
</style>