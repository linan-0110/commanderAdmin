<template>
    <div class="confirmDelivery">
        <van-nav-bar fixed title="以确认送达" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="header">配送日期： 2019.11.9</header>
        <aside class="aside">
            <div class="left">
                <img src="../../../assets/icon_todo_list.png">
                二笔订单 三种商品
            </div>
            实际到货
        </aside>
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
                <van-stepper class="stepper" v-model="stepperValue[0]" integer min="0" />
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
                <van-stepper class="stepper" v-model="stepperValue[0]" integer min="0"/>
            </li>
        </ul>

        <article class="peoduct_info">
            <p class="text">
                若配送出现缺货情况，请在配送当天20:00前提交补货申请,售后会
                在当日处理，第二天将货品送达:若超过20: 00,售后将在次日进
                行补货处理，预计三日内送达;提交当天窗口有效，超过24点默认
                收货完成。
            </p>
            <h3 class="describe">缺货信息</h3>
            <div class="container">
                <span>山东黄小米500g×2</span>
                <span>缺1份</span>
            </div>
        </article>

        <footer class="footer">
            <p>可以再次修改缺货信息，进行再次提交</p>
            <van-button class="sunmit_info" size="small" @click="sunmit_info">提交收货信息</van-button>
        </footer>
    </div>
</template>

<script>
export default {
    name: "confirmDelivery",
    data() {
        return {
            stepperValue: [] //步进器值
        };
    },
    methods: {
        /* 提交收货信息 */
        sunmit_info() {
            console.log("提交收货信息");
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.confirmDelivery {
    padding-top: 45px;
    box-sizing: border-box;
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
    .aside{
        height: 35px;
        background-color: #fff;
        border-radius: 5px;
        margin: 10px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(120, 120, 120);
        font-size: 12px;
        .left{
            display: flex;
            align-items: center;
            img{
                width: 12px;
                height: 14px;
                margin-right: 6px;
            }
        }
    }
    .products {
        .product_item {
            background-color: #fff;
            border-radius: 5px;
            margin: 10px;
            height: 100px;
            display: flex;
            align-items: center;
            position: relative;
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
            .stepper{
                position: absolute;
                right: 10px;
                bottom: 10px;
            }
        }
    }
    .peoduct_info {
        background-color: #fff;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        .text{
            color: rgb(120, 120, 120);
            font-size: 12px;
        }
        .describe{
            font-size: 20px;
            font-weight: normal;
            padding: 3px;
            margin: 7px 0;
            border-top: 1px solid rgb(240,239,244);
            border-bottom: 1px solid rgb(240,239,244);
        }
        .container{
            color: rgb(120, 120, 120);
            display: flex;
            justify-content: space-between;
            font-size: 14px;
        }
    }
    .footer{
        color: rgb(120, 120, 120);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        .sunmit_info{
            background-color: rgb(221, 209, 167);
            border-radius: 15px;
            padding: 0 20px;
            margin: 10px 0;
            color: #fff;
            font-size: 20px;
        }
    }
}
// border: 1px solid #0ff;
</style>