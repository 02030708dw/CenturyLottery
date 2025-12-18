<template>
    <div class="back-stage">
        <div class="text-block">

            <p class="text_block--sub">{{ $t('强大的后台系统') }}</p>
            <div class="text_block--tit">{{ $t('完整后台报表分析') }}<br>{{ $t('完善风险控管功能') }}</div>
            <div class="text_block--txt">
                {{ $t('BackStageMessage') }}
            </div>
        </div>
        <div class="img-block">
            <div class="img_block--img">
                <img src="@/assets/Image/support/new_dom.png">
            </div>
            <ul class="img_block_list">
                <li class="list-item" v-for="item in BackStageList">
                    <img :src="item.cover">
                    <p class="item-title">{{ $t(item.title) }}</p>
                    <p class="item-message">{{ $t(item.title + 'message') }}</p>
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
    gap: 10px;

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
            min-height: 143px;
            display: flex;
            justify-content: space-between;
            gap: 10px;

            .list-item {
                width: 160px;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #fff;
                font-size: 12px;

                img {
                    width: 70px;
                    height: 70px;
                    border-radius: 70px;
                }

                .item-title {
                    white-space: nowrap;
                    font-size: 14px;
                    margin-top: 10px;

                }

                .item-message {
                    margin-top: 10px;
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
                font-size: 12px;
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
                        margin-right: 20px;
                    }

                    .item-title {
                        margin-top: 0;
                        width: 100%;
                        font-size: 10px;
                    }

                    .item-message {
                        font-size: 10px;
                        margin-top: 0;
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>