<template>
    <div class="confirmDelivery">
        <van-nav-bar title="以确认送达" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="header">配送日期： 2019.11.9</header>
        <ul class="products">
            <li class="product_item">
                <img
                    class="item_main_img"
                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg"
                />
                <section class="container">
                    <p class="order_describe">现货猕猴桃新鲜水果奇异果10斤当季绿心野生弥整箱非徐香</p>
                    <p class="order_number">数量: 3份</p>
                </section>
            </li>
            
            <li class="product_item">
                <img
                    class="item_main_img"
                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526052080,876486397&fm=26&gp=0.jpg"
                />
                <section class="container">
                    <p class="order_describe">现货猕猴桃新鲜水果奇异果10斤当季绿心野生弥整箱非徐香</p>
                    <p class="order_number">数量: 3份</p>
                </section>
            </li>

        </ul>

        <article class="peoduct_info">

        </article>
    </div>
</template>

<script>
export default {
    name: "confirmDelivery",
    data() {
        return {};
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
.confirmDelivery {
    background-color: rgb(240, 239, 245);
    height: 100%;
    .header {
        height: 45px;
        background-color: #fff;
        border-radius: 5px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: rgb(50, 50, 50);
    }
    .products {
        .product_item {
            background-color: #fff;
            border-radius: 5px;
            margin: 10px;
            height: 100px;
            display: flex;
            align-items: center;
            .item_main_img {
                width: 80px;
                height: 80px;
                margin: 0 20px;
                border-radius: 5px;
            }
            .container {
                height: 100%;
                flex: 3.5;
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: rgb(120, 120, 120);
                font-size: 14px;
                .order_number {
                    margin: 10px 0;
                }
            }
        }
    }
    .peoduct_info{
        background-color: #fff;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        min-height: 100px;
    }
}
// border: 1px solid #0ff;
</style>