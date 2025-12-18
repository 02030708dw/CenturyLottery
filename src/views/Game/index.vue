<template>
    <div class="game">
        <div class="bg1"></div>
        <div class="bg2"></div>

        <div class="game-info">
            <div class="title">
                {{ $t('游戏') }}<span>GAME</span>
            </div>
            <div class="text">
                {{ $t('游戏message') }}
            </div>
        </div>

        <div class="game-block">
            <div class="left" :style="{ visibility: index > 0 ? 'visible' : 'hidden' }" @click="prev"></div>

            <div class="game-list">
                <div class="top" :style="{ backgroundImage: `url(${imgUrl(GameList[index].bg)})` }">
                    <img :src="imgUrl(GameList[index].cover)" />
                    <p>{{ $t(GameList[index].name) }}</p>
                </div>

                <div class="bottom">
                    {{ $t(GameList[index].name + 'message') }}
                </div>
            </div>

            <div class="right" :style="{ visibility: index < GameList.length - 1 ? 'visible' : 'hidden' }"
                @click="next"></div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue'
import { GameList } from "./data.js";

const index = ref(0);
const imgUrl = (name) => new URL(`../../assets/Image/game/${name}`, import.meta.url).href;
const next = () => {
    if (index.value < GameList.length - 1) index.value++;
};
const prev = () => {
    if (index.value > 0) index.value--;
};
</script>
<style scoped lang="scss">
.game {
    background: url('@/assets/Image/game/game_bg.jpg') right top / cover no-repeat rgb(45, 45, 45);
    background-size: cover;
    min-height: 100vh;
    height: 100vh;
    position: relative;
    display: flex;
    padding: 100px 40px 40px;

    .game-info {
        position: relative;
        z-index: 1;
        width: 50%;

        .title {
            font-size: 36px;
            vertical-align: baseline;
            color: #fff;

            span {
                font-size: 18px;
                padding: 0 1em 0.1em;
                color: #6e6e6e;
                vertical-align: text-bottom;
            }
        }

        .text {
            padding: 18px 0;
            font-size: 18px;
            color: #fff;
            line-height: 200%;
        }
    }

    .game-block {
        position: relative;
        z-index: 1;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .left,
        .right {
            width: 40px;
            height: 60px;
            background-image: url('@/assets/Image/index/left.png');
            background-size: 100% 100%;
            cursor: pointer;
            animation: moveLeftRight 0.5s infinite linear alternate;
        }

        .right {
            background-image: url('@/assets/Image/index/right.png');
        }

        .game-list {
            width: 400px;
            height: 90%;

            .top {
                height: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 200px;
                }

                p {
                    text-align: center;
                    width: 100%;
                    transform: translateY(30px);
                    font-size: 34px;
                    color: #fff;
                }
            }

            .bottom {
                padding: 20px 40px;
                background-color: #fff;
                height: 50%;
            }
        }
    }

    .bg1 {
        background: center center / contain no-repeat url('@/assets/Image/game/game_bg1.png');
        position: absolute;
        top: 50%;
        left: auto;
        right: 2%;
        width: 16%;
        height: 21%;
    }

    .bg2 {
        background: center center / contain no-repeat url('@/assets/Image/game/game_bg2.png');
        position: absolute;
        top: 70%;
        right: 80%;
        width: 30%;
        height: 33%;
    }
}

@media (max-width: 850px) {
    .game {
        flex-direction: column;
        align-items: center;
        padding: 70px 16px;

        .game-info {
            width: 100%;

            .title {
                font-size: 20px;

                span {
                    font-size: 12px;
                }
            }

            .text {
                line-height: 150%;
                font-size: 12px;
            }
        }

        .game-block {
            width: 100%;
            flex: 1;
            gap: 10px;

            .left,
            .right {
                width: 30px;
                height: 45px;
            }

            .game-list {
                width: 100%;
                height: 90%;

                .top {
                    background-size: 100% 100%;


                    img {
                        object-fit: cover;
                        width: auto;
                        height: 60%;
                        aspect-ratio: 1/1;
                        border-radius: 200px;
                    }

                    p {
                        text-align: center;
                        width: 100%;
                        transform: translateY(10px);
                        font-size: 16px;
                        color: #fff;
                    }
                }

                .bottom {
                    padding: 12px;
                    font-size: 12px;
                }
            }
        }
    }


}

@keyframes moveLeftRight {
    0% {
        transform: translateX(-10%);
    }

    100% {
        transform: translateX(10%);

    }
}
</style>