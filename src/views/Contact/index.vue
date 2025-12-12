<template>
    <div class="contact">
        <div class="content">
            <h1 class="title">
                <p>CONTACT</p>
            </h1>
            <div class="list-block">

                <ul class="list-contact list">
                    <li class="list-item" v-for="item in 4">
                        <img :src="imgUrl(item)">
                        <span>1234567890</span>
                    </li>
                </ul>

                <ul class="list-menu list">
                    <li class="list-item" @click="emits('changeMenu',item.pages[0])" v-for="item in isMobile ? mobileNav : pcNav">{{ item.label }}</li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script setup>

import { computed, ref, onMounted, onUnmounted } from 'vue';
const emits = defineEmits(['changeMenu'])
const width = ref(window.innerWidth)
const updateWidth = () => {
    width.value = window.innerWidth
}
onMounted(() => {
    window.addEventListener('resize', updateWidth)
})
onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
})
const isMobile = computed(() => width.value <= 956)
const mobileNav = [
    { label: "首页", pages: [0] },
    { label: "游戏", pages: [1] },
    { label: "产品优势", pages: [2, 3] },
    { label: "关于我们", pages: [4] },
]
const pcNav = [
    { label: "首页", pages: [0] },
    { label: "游戏", pages: [1] },
    { label: "产品优势", pages: [2, 3, 4] },
    { label: "关于我们", pages: [5] },
]
const imgUrl = (name) => new URL(`../../assets/Image/contact/${name}.png`, import.meta.url).href;
const menuArr = ['首页', '游戏', '产品优势', '关于我们']
</script>
<style scoped lang="scss">
.contact {
    height: 100vh;
    background-color: #222;
    padding: 80px 40px;
    display: flex;

    .content {
        width: 100%;
        height: 500px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .title {
            color: #fff;
            text-align: center;
            position: relative;
            font-size: 5.5vw;

            &::before {
                left: 0;
                content: '';
                position: absolute;
                width: 30%;
                height: 1px;
                background: rgba(255, 255, 255, 0.34);
                top: 50%;
            }

            &::after {
                right: 0;
                content: '';
                position: absolute;
                width: 30%;
                height: 1px;
                background: rgba(255, 255, 255, 0.34);
                top: 50%;
            }
        }

        .list-block {
            margin-top: 20px;
            flex: 1;
            display: flex;
            padding: 0 20px;

            .list {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;

                .list-item {
                    color: #fff;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    cursor: pointer;
                }
            }

            .list-contact {
                border-right: 1px solid #fff;
            }

            .list-menu {
                border-left: 1px solid #fff;

            }
        }
    }

}

@media (max-width: 850px) {
    .contact {
        .content {
            .list-block {
                .list-contact {
                    border: none;
                }

                .list-menu {
                    display: none;
                    border-left: 1px solid #fff;
                }
            }
        }
    }
}
</style>