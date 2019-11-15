<template>
    <div class="alterBankCard">
        <van-nav-bar fixed :title="alterBankParams.bankconact ? '更改银行卡' : '绑定银行卡'" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="header">{{ alterBankParams.bankconact ? '更改银行卡' : '绑定银行卡'}}</header>
        <section class="section">
            <van-cell-group>
                <van-field
                    v-model="alterBankParams.bankconact"
                    clearable
                    label="持卡人"
                    placeholder="请输入持卡人姓名"
                />

                <van-field
                    v-model="alterBankParams.bankaccount"
                    clearable
                    label="卡号"
                    placeholder="请输入卡号"
                />
                <van-field
                    v-model="alterBankParams.bankname"
                    clearable
                    label="开户行"
                    placeholder="请输入预留号码"
                />
            </van-cell-group>
        </section>
        <footer class="footer">
            <van-button class="carryCashBtn" @click="confirmAlter">确认更改</van-button>
        </footer>
    </div>
</template>

<script>
import { reqAlterBank } from "@/api/carryCash";
import { Toast, Dialog } from "vant";

export default {
    name: "alterBankCard",
    data() {
        return {
            alterBankParams: {
                bankconact: "",
                bankaccount: "",
                bankname: ""
            }
        };
    },
    created() {
        if(this.$route.params.bankInfo) {
            this.alterBankParams = this.$route.params.bankInfo;
        }
    },
    methods: {
        /* 请求 修改绑定银行卡 */
        getAlterBank(params) {
            reqAlterBank(params).then(res => {
                if (res.data.status === 0) {
                    Toast.success(res.data.msg);
                } else {
                    Toast.fail(res.data.data);
                }
            });
        },

        /* 确认更改按钮 */
        confirmAlter() {
            Dialog.confirm({
                title: "确认",
                message: "确认更改绑定银行卡？"
            })
                .then(() => {
                    this.getAlterBank(this.alterBankParams);
                })
                .catch(() => {});
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.alterBankCard {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    height: 100%;
    .header {
        padding: 18px;
        color: rgb(105, 104, 109);
        font-size: 16px;
    }
    .footer {
        text-align: center;
        margin-top: 40px;
        .carryCashBtn {
            width: 70%;
            border-radius: 22px;
            color: #fff;
            background-image: linear-gradient(
                to right,
                rgb(247, 177, 124),
                rgb(247, 212, 172) ;
            );
        }
    }
}
// border: 1px solid #0ff;
</style>