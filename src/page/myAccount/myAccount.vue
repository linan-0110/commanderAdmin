<template>
    <div class="myAccount">
        <van-nav-bar title="我的账号" left-text="返回" left-arrow @click-left="linkBack" />
        <ul class="list">
            <li class="head_portrait">
                <article class="lable">个人头像</article>
                <article class="container">
                    <span class="content"></span>
                    <img
                        v-if="userInfo.sex == '女'"
                        class="head_img"
                        src="../../assets/head_img_woman.png"
                    />
                    <img
                        v-else
                        class="head_img"
                        src="../../assets/head_img_man.png"
                    />
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="name">
                <article class="lable">昵称</article>
                <article class="container">
                    <span class="content">{{ userInfo.RealName }}</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="acount_name">
                <article class="lable">账号</article>
                <article class="container">
                    <span class="content">{{ userInfo.Mobile }}</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="bank_card">
                <article class="lable">银行卡</article>
                <article class="container">
                    <span class="content">无3212*************5</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="phome_number">
                <article class="lable">我的联系信息</article>
                <article class="container">
                    <span class="content">{{ userInfo.Mobile }}</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="shipping_address">
                <article class="lable">收货地址</article>
                <article class="container">
                    <!-- <span class="content">{{ userInfo.GetProductAddress }}</span> -->
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "myAccount",
    data() {
        return {
            userInfo: {}
        };
    },
    created() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
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
.myAccount {
    background-color: rgb(240, 239, 245);
    height: 100%;
    .list {
        li {
            min-height: 43px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 13px;
            font-size: 18px;
            background-color: #fff;
            margin-bottom: 1px;
            .container {
                color: rgb(135, 135, 135);
            }
        }
        .head_portrait {
            .head_img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin: 15px 0;
            }
        }
        /* .name{

        }
        .acount_name{

        }
        .bank_card{

        }
        .phome_number{

        }
        .shipping_address{

        } */
    }
}
</style>