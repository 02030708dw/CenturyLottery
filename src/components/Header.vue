<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/Image/index/logo.png">
        </div>
        <div class="menu-bar">

            <ul class="nav">
                <li v-for="(item, i) in isMobile ? mobileNav : pcNav" :key="i"
                    @click="emits('changeMenu', item.pages[0])" :class="{ active: item.pages.includes(currentPage) }">
                    {{ item.label }}
                </li>
            </ul>

            <div class="link-btn">试玩</div>
            <div class="lang">Language</div>
        </div>

    </header>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
const props = defineProps(['currentPage']);
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
    { label: "联系我们", pages: [5] },
]
const pcNav = [
    { label: "首页", pages: [0] },
    { label: "游戏", pages: [1] },
    { label: "产品优势", pages: [2, 3, 4] },
    { label: "关于我们", pages: [5] },
    { label: "联系我们", pages: [6] },
]
</script>


<style scoped lang="scss">
.header {
    z-index: 10;
    width: 100%;
    background-color: rgba(32, 32, 32, 0.6);
    clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
    height: 70px;
    padding: 0 70px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;

    .logo {
        height: 100%;

        img {
            width: 82px;
            height: 100%;
        }
    }

    .menu-bar {
        display: flex;
        align-items: center;
        gap: 20px;

        .nav {
            display: flex;
            gap: 18px;

            li {
                cursor: pointer;
                color: #fff;
            }

            .active {
                color: #b2903d;
            }
        }

        .link-btn {
            cursor: pointer;
            text-align: center;
            color: #fff;
            font-size: 18px;
            width: 150px;
            height: 40px;
            line-height: 40px;
            background: transparent;
            border: 1px solid #fff000;
            border-radius: 50px;
            box-shadow: 0 0 3px 2px #8a6f12, 0 0 7px 5px rgba(116, 80, 25, 0.7), 0 0 3px 2px #8a6f12 inset, 0 0 7px 5px rgba(116, 80, 25, 0.7) inset;
        }

        .lang {
            font-size: 18px;
            color: #fff;
            cursor: pointer;
            border-left: 1px solid #5d5d5d;
            padding-left: 18px;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 50%;
                margin-left: 0.5em;
                border: 4px solid;
                border-color: #b2903d transparent transparent transparent;
            }
        }
    }
}

@media (max-width: 850px) {
    .header {
        background-color: rgba(32, 32, 32, 0);
        padding: 0 20px;
        height: 60px;
        transition: all 0.3s ease;

        .menu-bar {
            gap: 10px;

            .nav {
                display: none;
            }

            .lang {
                display: none;
            }

            .link-btn {
                width: 100px;
                height: 34px;
                font-size: 16px;
                line-height: 34px;
                transition: all 0.3s ease;
                background-color: rgba(32, 32, 32, 0.6);
            }
        }

        .logo img {
            width: 70px;
            transition: all 0.3s ease;
        }
    }
}
</style>