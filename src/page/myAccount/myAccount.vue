<template>
    <div class="myAccount">
        <van-nav-bar title="我的账号" left-text="返回" left-arrow @click-left="linkBack" />
        <ul class="list">
            <li class="head_portrait">
                <article class="lable">个人头像</article>
                <article class="container">
                    <span class="content"></span>
                    <img class="head_img" src="http://b-ssl.duitang.com/uploads/item/201806/07/20180607185957_fjrFt.thumb.700_0.jpeg">
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="name">
                <article class="lable">昵称</article>
                <article class="container">
                    <span class="content">小包子</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="acount_name">
                <article class="lable">账号名</article>
                <article class="container">
                    <span class="content">zhangxan121</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="bank_card">
                <article class="lable">银行卡</article>
                <article class="container">
                    <span class="content">321255568451256455</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="phome_number">
                <article class="lable">我的联系信息</article>
                <article class="container">
                    <span class="content">15999999999</span>
                    <van-icon class="right_arrow" name="arrow" />
                </article>
            </li>
            <li class="shipping_address">
                <article class="lable">收货地址</article>
                <article class="container">
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
.myAccount {
    background-color: rgb(240,239,245);
    height: 100%;
    .list{
        li{
            min-height: 43px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 13px;
            font-size: 18px;
            background-color: #fff;
            margin-bottom: 1px;
            .container{
                color: rgb(135,135,135)
            }
        }
        .head_portrait{
            .head_img{
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