<template>
    <div class="home">
        <p class="home-title">百款彩票 一秒开号</p>
        <ul class="lottery-list">
            <li class="lottery-item" v-for="item in LotteryList">
                <p class="item-name">{{ item }}</p>
                <div class="item-btn">
                    <div class="offical">官方彩</div>
                    <div class="local">秒开彩</div>
                    <div class="video"></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
const LotteryList = ['时时彩', 'PK10', '番摊', '越南彩', '六合彩', '骰宝', '快3', '泰国彩', '龙虎斗', '3D/P3', '11选5', '鱼虾蟹']
</script>
<style scoped lang="scss">
.home {
    background: url('@/assets/Image/home/index_bg.jpg') no-repeat center bottom;
    height: 100vh;
    padding-top: 7em;

    .home-title {
        text-align: center;
        font-size: 56px;
        font-weight: 600;
        background: linear-gradient(to bottom, #b3b3b3 0%, #efefef 50%, #b3b3b3 51%, #fff 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .lottery-list {
        padding-top: 1em;
        margin: auto;
        width: 95%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .lottery-item {
            padding: 1em 0;
            width: calc((100% - (30px * 4)) / 4);
            margin: 0.5em 15px;
            max-width: 350px;
            border-radius: 12px;
            min-height: 136px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: rgba(26, 26, 26, 0.8);
            color: #fff;

            .item-name {
                text-align: center;
                width: 100%;
                font-style: italic;
                font-size: 42px;
                background: linear-gradient(to bottom, #b3b3b3 0%, #efefef 50%, #b3b3b3 51%, #fff 100%);
                background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 600;
            }

            .item-btn {
                display: flex;
                width: 95%;

                &>div {
                    margin: 0 3px;
                    text-align: center;
                    height: 36px;
                    line-height: 36px;
                    border-radius: 50px;
                    cursor: pointer;
                }

                .offical {
                    width: 40%;
                    background: #921012;
                    border-color: #ff2100;
                    box-shadow: 0 0 5px 3px rgba(255, 33, 0, 0.3), 0 0 6px 3px rgba(255, 33, 0, 0.3) inset;
                }

                .local {
                    width: 40%;
                    background: #116483;
                    border-color: #00deff;
                    box-shadow: 0 0 5px 3px rgba(0, 222, 255, 0.3), 0 0 6px 3px rgba(0, 222, 255, 0.3) inset;
                }
            }

            .video {
                width: 20%;
                background: #231815;
                border: 1px solid #fff;
                box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.2), 0 0 5px 3px rgba(255, 255, 255, 0.2) inset;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    border: 10px solid;
                    left: 50%;
                    top: 50%;
                    border-color: transparent transparent transparent #ff0000;
                    transform: translate(-15%, -50%) scaleY(0.6);
                }
            }
        }
    }
}

@media (max-width: 850px) {
    .home {
        padding-top: 3.5em;

        .home-title {
            font-size: 37.2px;
        }

        .lottery-list {
            width: 98%;

            .lottery-item {
                width: calc((100% - (0.2em * 3)) / 3);
                margin: 0.5em 0.1em;
                padding: 1em 0;
                min-height: 75px;

                .item-name {
                    font-size: 18px;

                }

                .item-btn {
                    display: flex;
                    width: 95%;

                    &>div {
                        margin: 0 3px;
                        text-align: center;
                        height: 20px;
                        line-height: 20px;
                        border-radius: 0;
                        cursor: pointer;
                        border-radius: 3px;

                    }

                    .offical {
                        font-size: 12px;
                        box-shadow: none;
                        border: 1px solid #c69c6d;
                        background: #000;
                        margin: 0 1px;
                    }

                    .local {
                        font-size: 12px;
                        box-shadow: none;
                        border: 1px solid #3fa9f5;
                        background: #000;
                        margin: 0 1px;
                    }

                    .video {
                        width: 20%;
                        box-shadow: none;
                        background-color: #ff0000;
                        border: none;
                        &::after {
                            border-color: transparent transparent transparent #fff;
                        }
                    }
                }
            }
        }
    }
}
</style>