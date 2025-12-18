<template>
    <div class="about">
        <div class="text-block">
            <p class="title">{{ $t('关于我们') }}</p>
            <p class="msg">ABOUT US</p>
            <p class="text">
                {{ $t('aboutMessage') }}
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
            padding: 0 20px;
            width: 100%;

            .text {
                font-size: 14px;
            }
        }

        .img-block {
            flex: 1;
            width: 100%;
            align-items: flex-end;
        }
    }
}
</style>