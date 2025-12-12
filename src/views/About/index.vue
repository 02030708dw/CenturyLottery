<template>
    <div class="about">
        <div class="text-block">
            <p class="title">关于我们</p>
            <p class="msg">ABOUT US</p>
            <p class="text">
                世彩,专业线上彩票游戏提供者。累积10年以上丰富开发经验的优质团队,提供最完善的全球彩票游戏给所有的营运商,跨平台、跨装置的精彩游戏内容。我们致力于彩票游戏开发,多种官方彩票与各国彩票游戏,不断创新,始终坚持。
            </p>
        </div>
        <div class="img-block">
            <img src="@/assets/Image/about/about_bg.jpg">
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.about {
    height: 100vh;
    display: flex;
    background-color: #1E1E1E;

    .text-block {
        width: 40%;
        padding: 0 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
            color: #fff;
            font-size: 36px;
        }

        .msg {
            font-size: 18px;
            color: #545454;
            margin-bottom: 20px;
        }

        .text {
            font-size: 18px;
            color: #fff;
            line-height: 200%;
        }
    }

    .img-block {
        width: 60%;
        display: flex;
        align-items: center;

        img {
            width: 100%;
        }
    }
}

@media (max-width: 856px) {
    .about {
        flex-direction: column;
        align-items: center;
        padding-top: 10vh;

        .text-block {
            width: 100%;
        }

        .img-block {
            flex: 1;
            width: 100%;
            align-items: flex-end;
        }
    }
}
</style>