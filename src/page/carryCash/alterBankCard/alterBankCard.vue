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
                    placeholder="请输入开户行"
                />
            </van-cell-group>
            <h6 v-if="adminid" class="proportion">分成比例</h6>
            <van-cell-group v-if="adminid">
                <van-field
                    v-model="alterBankParams.pratio"
                    clearable
                    label="企业："
                    placeholder="分成比例相加要等于1"
                />
                <van-field
                    v-model="alterBankParams.myratio"
                    clearable
                    label="团长："
                    placeholder="分成比例相加要等于1"
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
                bankconact: "", // 持卡人
                bankaccount: "", // 卡号
                bankname: "", // 开户行
                pratio: "", // 企业
                myratio: "", // 团长
                // adminid: 0 // 判断是否是企业账号
            },
            adminid: 0 // 保存企业id
        };
    },
    created() {
        if(this.$route.query.bankInfo) {
            this.alterBankParams = this.$route.query.bankInfo;
        }
        this.adminid = this.$route.query.adminid;
    },
    methods: {
        /* 请求 修改绑定银行卡 */
        getAlterBank(params) {
            reqAlterBank(params).then(res => {
                if (res.data.status === 0) {
                    Toast.success(res.data.msg);
                } else {
                    Toast.fail(res.data.msg);
                }
            });
        },

        /* 确认更改按钮 */
        confirmAlter() {
            this.alterBankParams.pratio = parseFloat(this.alterBankParams.pratio);
            this.alterBankParams.myratio = parseFloat(this.alterBankParams.myratio);
            for(let key in this.alterBankParams) {
                if(!this.alterBankParams[key]) {
                    delete this.alterBankParams[key];
                }
            }
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
    .section{
        .proportion{
            padding: 10px 18px;
            color: rgb(105, 104, 109);
            font-size: 16px;
            font-weight: normal;
        }
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