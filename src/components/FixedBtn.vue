<template>
    <div class="fixed-btn">
        <div class="gotop" @click="emits('gotop')"><img src="@/assets/Image/index/go_top.svg"></div>
        <div class="menu" @click="emits('showMenu')">
            <span v-for="_ in 3"></span>
        </div>
    </div>
</template>
<script setup>
const emits = defineEmits(['gotop','showMenu'])
</script>
<style scoped lang="scss">
.fixed-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    overflow: hidden;
    cursor: pointer;
    .gotop,
    .menu {
        width: 100%;
        height: 100%;
    }

    .menu {
        background-color: #c6a64e;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;

        span {
            height: 4px;
            width: 30px;
            background-color: #fff;
        }
    }
}

@media (max-width: 850px) {
    .fixed-btn {
        .gotop {
            display: none;
        }

        .menu {
            display: flex;
        }
    }
}
</style>