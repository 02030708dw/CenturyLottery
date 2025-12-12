<template>
    <div class="back-stage">
        <div class="text-block">

            <p class="text_block--sub">强大的后台系统</p>
            <div class="text_block--tit">完整后台报表分析<br>完善风险控管功能</div>
            <div class="text_block--txt">
                世彩拥有强大的后台系统，除了提供全方位分析核心运营资料，协助您实时掌控运营数据外，还可锁定用户的赔付上限，或是封锁下注金额过高之玩法。另外能针对玩法设定赔率，并启用自动控赔设置，在投注金额过高时以达成自动降赔，协助您把风险控制在最低范围，轻易达成最高利润。
            </div>
        </div>
        <div class="img-block">
            <div class="img_block--img">
                <img src="@/assets/Image/support/new_dom.png">
            </div>
            <ul class="img_block_list">
                <li class="list-item" v-for="item in BackStageList">
                    <img :src="item.cover">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-message">{{ item.message }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { BackStageList } from "./data.js";
</script>
<style scoped lang="scss">
.back-stage {
    height: 100vh;
    background: #000 url('@/assets/Image/support/new_bg.jpg') no-repeat center top;
    background-size: cover;
    display: flex;
    padding: 140px 40px 70px;
    gap: 70px;

    .text-block {
        padding: 18px;
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .text_block--sub {
            font-size: 24px;
            text-align: center;
            position: relative;
            color: #fff;

            &::before {
                left: 0;
                content: '';
                position: absolute;
                width: 24%;
                height: 1px;
                background: rgba(255, 255, 255, 0.34);
                top: 50%;
            }

            &::after {
                right: 0;
                content: '';
                position: absolute;
                width: 24%;
                height: 1px;
                background: rgba(255, 255, 255, 0.34);
                top: 50%;
            }
        }

        .text_block--tit {
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.34);
            text-align: center;
            color: #fff;
            font-size: 3vw;
        }

        .text_block--txt {
            color: #fff;
            font-size: 18px;
            line-height: 180%;

        }
    }

    .img-block {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .img_block_list {
            width: 100%;
            height: 143px;
            display: flex;
            justify-content: space-between;

            .list-item {
                width: 150px;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                color: #fff;
                font-size: 12px;

                img {
                    width: 70px;
                    height: 70px;
                    border-radius: 70px;
                }

                .item-title {
                    font-size: 14px;
                }
            }
        }
    }
}

@media (max-width: 956px) {
    .back-stage {
        height: 100vh;
        flex-direction: column;
        align-items: center;
        padding: 80px 20px 70px;
        gap: 0;

        .text-block {
            width: 100%;

            .text_block--txt {
                font-size: 14px;
            }
        }

        .img-block {
            width: 100%;

            .img_block--img {
                display: none;
            }

            .img_block_list {
                margin-top: 20px;
                height: auto;
                width: 100%;
                gap: 10px;
                display: flex;
                flex-direction: column;

                .list-item {
                    width: 100%;
                    flex-direction: row;
                    justify-content: space-around;

                    img {
                        width: 55px;
                        height: 55px;
                    }

                    .item-title {
                        width: 100px;
                    }

                    .item-message {
                        width: 140px;
                    }
                }
            }
        }
    }
}
</style>