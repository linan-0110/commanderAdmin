 <template>
    <div class="discountCoupon">
        <van-nav-bar fixed title="优惠劵" left-text="返回" left-arrow @click-left="linkBack" />
        <van-tabs
            v-model="active"
            title-active-color="rgb(190,157,83)"
            color="rgb(190,157,83)"
            @click="clickTopTab"
        >
            <van-tab
                v-for="(item) in tabsConfig"
                :key="item.name"
                :title="item.title"
                :name="item.name"
            ></van-tab>
        </van-tabs>

        <ul class="list">
            <li class="item">
                <article v-if="true" class="normal_card">
                    <header class="card_top">
                        <div class="card_top_left">
                            <h3 class="lable">通用红包</h3>
                            <p class="text">满100可用</p>
                        </div>
                        <div class="card_top_right">
                            <span class="symbol">￥</span>
                            <span class="money">10</span>
                        </div>
                    </header>
                    <footer class="card_bottom">
                        <div class="valid">有效期至2019.11.15</div>
                        <button class="go_use_btn" is="div" @click="go_use_btn">去使用</button>
                    </footer>
                </article>

                <article v-else class="disabled_card">
                    <header class="card_top">
                        <div class="card_top_left">
                            <h3 class="lable">通用红包</h3>
                            <p class="text">满100可用</p>
                        </div>
                        <div class="card_top_right">
                            <span class="symbol">￥</span>
                            <span class="money">10</span>
                        </div>
                    </header>
                    <footer class="card_bottom">
                        <div class="valid">已过期</div>
                        <button class="go_use_btn" is="div" @click="go_use_btn">去使用</button>
                    </footer>
                </article>
            </li>

            <li class="item">
                <article v-if="false" class="normal_card">
                    <header class="card_top">
                        <div class="card_top_left">
                            <h3 class="lable">通用红包</h3>
                            <p class="text">满100可用</p>
                        </div>
                        <div class="card_top_right">
                            <span class="symbol">￥</span>
                            <span class="money">10</span>
                        </div>
                    </header>
                    <footer class="card_bottom">
                        <div class="valid">有效期至2019.11.15</div>
                        <button class="go_use_btn" is="div" @click="go_use_btn">去使用</button>
                    </footer>
                </article>

                <article v-else class="disabled_card">
                    <header class="card_top">
                        <div class="card_top_left">
                            <h3 class="lable">通用红包</h3>
                            <p class="text">满100可用</p>
                        </div>
                        <div class="card_top_right">
                            <span class="symbol">￥</span>
                            <span class="money">10</span>
                        </div>
                    </header>
                    <footer class="card_bottom">
                        <div class="valid">已过期</div>
                        <button class="go_use_btn" is="div" @click="go_use_btn">去使用</button>
                    </footer>
                </article>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "discountCoupon",
    data() {
        return {
            active: 0,
            tabsConfig //顶部列表项
        };
    },
    created() {},
    methods: {
        /* 优惠劵去使用 */
        go_use_btn() {
            console.log("优惠劵去使用");
        },
        /* 顶部tab点击事件 */
        clickTopTab(name) {
            console.log(name);
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};

/* 顶部列表项 配置*/
const tabsConfig = [
    { title: "全部", name: 0 },
    { title: "可用", name: 1 },
    { title: "不可用", name: 2 }
];
</script>

<style lang="less" scoped>
.discountCoupon {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: rgb(240, 239, 245);
    height: 100%;
    .list {
        display: flex;
        flex-direction: column;
        .item {
            .normal_card,
            .disabled_card {
                height: 115px;
                margin: 10px 10px 0 10px;
                .card_top {
                    height: 45px;
                    color: #fff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 30px;
                    .card_top_left {
                        .lable {
                            font-size: 18px;
                            font-weight: normal;
                            margin-bottom: 5px;
                        }
                        .text {
                            font-size: 12px;
                        }
                    }
                    .card_top_right {
                        .symbol {
                            font-size: 12px;
                        }
                        .money {
                            font-size: 40px;
                        }
                    }
                }
                .card_bottom {
                    height: 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 30px;
                    .valid {
                        color: rgb(100, 100, 100);
                    }
                    .go_use_btn {
                        color: rgb(160, 160, 160);
                        border-radius: 3px;
                        background-color: #fff;
                        border: 1px solid rgb(158, 158, 158);
                        padding: 3px 8px;
                    }
                }
            }
            .normal_card {
                background: url("../../assets/bg_discountCoupon.png") no-repeat;
                background-size: 100%;
            }
            .disabled_card {
                background: url("../../assets/bg_discountCoupon_disable.png")
                    no-repeat;
                background-size: 100%;
            }
        }
    }
}
// border: 1px solid #0ff;
</style>