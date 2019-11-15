<template>
    <div class="carryCash">
        <van-nav-bar fixed title="提现" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="bankCard" @click="alterBankCard">
            <h3>
                {{ "中国农业银行" }}
                <span class="side">（{{ "尾号9527" }}）</span>
            </h3>
            <van-icon name="arrow" />
        </header>
        <section class="bankCardInfo">
            <div class="card">
                <span>可提现</span>
                <span>{{ balance }}元</span>
            </div>
            <van-cell-group>
                <van-field v-model="amount" label="提现金额：" :placeholder="'可转出到卡' + balance + '元'"/>
            </van-cell-group>
        </section>
        <aside class="aside">
            <p>1.预计到账时间: 2个工作日内。</p>
            <p>2.单日提现不超过2000元。</p>
        </aside>
        <footer class="footer">
            <van-button class="carryCashBtn" @click="carryCashBtn">提现</van-button>
        </footer>
    </div>
</template>

<script>
import { reqCarryCash } from "@/api/carryCash";
import { Toast } from "vant";

export default {
    name: "carryCash",
    data() {
        return {
            amount: '', // 提现金额
            balance: -1 // 可提现金额
        };
    },
    beforeCreate() {
    },
    created() {
        this.balance = this.$route.query.balance;
    },
    methods: {
        /* 提现 */
        getCarryCash(amount) {
            let toast_1 = Toast.loading({
                message: '加载中...',
                forbidClick: true,
                loadingType: 'spinner'
            });
            reqCarryCash(amount).then(res => {
                if (res.data.status === 0) {
                    console.log(">>>", res.data.data);
                    toast_1.clear();
                    this.$router.push({
                        name: "home_carryCash_carryCashSuccess"
                    })
                } else {
                    Toast(res.data.msg)
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },

        /* 更改银行卡 */
        alterBankCard() {
            this.$router.push({
                name: "home_carryCash_alterBankCard"
            })
        },

        /* 提现 */
        carryCashBtn() {
            if(!parseFloat(this.amount) || parseFloat(this.amount) <= 0.01 ) {
                Toast('至少提现0.01元');
            } else {
                this.getCarryCash(parseFloat(this.amount))
            }
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.carryCash {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    height: 100%;
    .bankCard {
        height: 50px;
        padding: 0 28px;
        margin: 5px 0 10px 0;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            font-weight: normal;
            .side {
                color: #999;
            }
        }
    }
    .bankCardInfo {
        background-color: #fff;
        padding: 0 10px;
        .card {
            height: 40px;
            display: flex;
            font-size: 14px;
            padding: 0 16px;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            border-bottom: 1px solid rgb(240, 239, 245);
        }
    }
    .aside{
        color: rgb(242,88,64);
        font-size: 10px;
        line-height: 18px;
        padding: 10px 0 40px 28px;
    }
    .footer{
        text-align: center;
        .carryCashBtn{
            width: 60%;
            color: #fff;
            border-radius: 22px;
            background-image: linear-gradient(
                to right,
                rgb(247, 177, 124),
                rgb(247, 212, 172);
            );
        }
    }
}
// border: 1px solid #0ff;
</style>