<template>
    <div class="support">

        <div class="left" v-if="isMobile && currentIndex > 0" @click="prev"></div>

        <template v-if="!isMobile">
            <div class="support-item" v-for="(item, index) in data" :key="index"
                :style="{ backgroundImage: `url(${item.cover})` }">
                <p class="title">{{ item.title }}</p>
                <p class="text">{{ item.message }}</p>
            </div>
        </template>

        <div class="slide-wrapper" v-else :style="slideStyle">
            <div class="support-item mobile" v-for="(item, index) in data" :key="index"
                :style="{ backgroundImage: `url(${item.cover})` }">
                <p class="title">{{ item.title }}</p>
                <p class="text">{{ item.message }}</p>
            </div>
        </div>

        <div class="right" v-if="isMobile && currentIndex < data.length - 1" @click="next"></div>

    </div>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps(['data']);

const currentIndex = ref(0);
const isMobile = ref(false);

const checkMobile = () => {
    isMobile.value = window.innerWidth <= 956;
};

onMounted(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
    window.removeEventListener("resize", checkMobile);
});

const slideStyle = computed(() => ({
    transform: `translateX(-${currentIndex.value * 100}%)`,
    transition: "transform 0.5s ease"
}));

const prev = () => {
    if (currentIndex.value > 0) currentIndex.value--;
};

const next = () => {
    if (currentIndex.value < props.data.length - 1) currentIndex.value++;
};
</script>


<style scoped lang="scss">
.support {
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

    .left,
    .right {
        width: 40px;
        height: 60px;
        background-image: url('@/assets/Image/index/left.png');
        background-size: 100% 100%;
        cursor: pointer;
        position: absolute;
        left: 20px;
        top: calc(50% - 10px);
        z-index: 10;
    }

    .right {
        background-image: url('@/assets/Image/index/right.png');
        left: auto;
        right: 20px;
    }

    &:not(.mobile) .support-item {
        flex: 1;
        background-size: cover;
        background-position: center;
        transition: 0.4s;
        display: flex;
        flex-direction: column;
        color: #fff;
        padding: 74vh 20px 0;
        cursor: pointer;

        &:hover {
            flex: 1.5;
        }

        .title {
            font-size: 30px;
        }

        .text {
            font-size: 14px;
        }
    }

    &:hover:not(.mobile) .support-item:not(:hover) {
        flex: 0.5;
    }

    .slide-wrapper {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .support-item.mobile {
        min-width: 100%;
        background-size: cover;
        background-position: center;
        padding: 74vh 20px 0;
        display: flex;
        flex-direction: column;
        color: #fff;
        height: 100vh;
    }
}

@media (max-width: 956px) {
    .support {
        display: flex;
        height: 100vh;
    }
}
</style>
