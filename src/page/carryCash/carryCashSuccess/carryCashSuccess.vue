<template>
    <div class="carryCashSuccess">
        <van-nav-bar fixed title="提现" left-text="返回" left-arrow @click-left="linkBack" />
        <header class="header">
            <img src="http://hbimg.b0.upaiyun.com/7f35761e8c3801b3d8bead4ca1475dac4af38a531558b-gSsBbr_fw658">
            <p class="text">提现申请已提交</p>
            <span class="num">+1.00</span>
        </header>
        <section class="section">
            <article class="item">
                <div class="left">
                    <van-icon name="todo-list-o" class="icon" />
                    <span>银 行 卡</span>
                </div>
                <p class="right">农业银行 储蓄卡333</p>
            </article>
            <article class="item">
                <div class="left">
                    <van-icon name="clock-o" class="icon" />
                    <span>到账时间</span>
                </div>
                <p class="right">预计到账时间当天24点到账</p>
            </article>
        </section>
         <footer class="footer">
            <van-button class="carryCashBtn" @click="fulfill">完成</van-button>
        </footer>
    </div>
</template>

<script>
export default {
    name: "carryCashSuccess",
    data() {
        return {};
    },
    methods: {
        get(params) {
            req(params).then(res => {
                if (res.data.status === 0) {
					console.log(">>>", res.data.data);
                } else {
                    console.error("网络错误:" + res.data.msg);
                }
            });
        },
        
        /* 完成按钮 */
        fulfill() {
            this.$router.back();
        },
        /* 返回 */
        linkBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.carryCashSuccess {
    padding-top: 45px;
    box-sizing: border-box;
    background-color: #fff;
    height: 100%;
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 0;
        img{
            width: 60px;
            height: 60px;
        }
        .text{
            margin: 15px 0;
            color: rgb(137,137,139);
        }
        .num{
            color: rgb(254,86,58);
            font-size: 25px;
            font-weight: 600;
        }
    }
    .section{
        .item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
            .left{
                display: flex;
                align-items: center;
                font-size: 14px;
                .icon{
                    font-size: 16px;
                    margin: 0 10px;
                }
            }
            .right{
                font-size: 12px;
                color: #999;
            }
        }
    }
    .footer{
        text-align: center;
        margin-top: 40px;
        .carryCashBtn{
            width: 70%;
            border-radius: 22px;
            color: #fff;
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