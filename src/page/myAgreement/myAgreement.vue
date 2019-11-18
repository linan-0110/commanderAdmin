 <template>
    <div class="myAgreement">
        <van-nav-bar fixed title="我的协议" left-text="返回" left-arrow @click-left="linkBack" />
        <section class="content">
            <div class="container">
                <img src="../../assets/my_agreement.png" />
            </div>
            <article>
                <h1>我的协议</h1>
                <p
                    class="text"
                >若配送出现缺货情况，请在配送当天20:00前提交补货申请，售后会在当日处理，第二天将货品送达;若超过20: 00,售后将在次日进行补货处理，预计三日内送达;提交当天窗口有效，超过24点默认收货完成。</p>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: "myAgreement",
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
.myAgreement {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    height: 100%;
    .content {
        background-color: #fff;
        margin: 10px;
        border-radius: 5px;
        padding: 10px;
        .container {
            display: flex;
            justify-content: center;
            img {
                margin: 25px 0;
            }
        }
        article {
            h1 {
                font-size: 23px;
                font-weight: normal;
            }
            .text {
                margin: 15px 0;
                font-size: 12px;
                color: rgb(102, 102, 102);
            }
        }
    }
}
// border: 1px solid #0ff;
</style>