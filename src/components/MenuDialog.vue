<template>
    <transition name="fade">
        <div v-if="show" class="dialog-wrapper">
            <div class="dialog-content">

                <div class="top">
                    <div class="link-btn">试玩</div>
                    <div class="lang">Language</div>
                </div>

                <div class="menu">
                    <p class="title">MENU</p>
                    <ul class="list">
                        <li class="list-item" v-for="(item, i) in isMobile ? mobileNav : pcNav" :key="i"
                            @click="ChangeMenu(item.pages[0])" :class="{ active: item.pages.includes(currentPage) }">
                            {{ item.label }}
                        </li>
                    </ul>
                </div>

                <div class="bottom">
                    <p>Email:</p>
                    <p>Skype:</p>
                    <p>WeChat:</p>
                    <p>QQ:</p>
                    <div class="close" @click="emits('close')"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
const props = defineProps(['show', 'currentPage'])
const emits = defineEmits(['changeMenu', 'close'])
const width = ref(window.innerWidth)
const ChangeMenu = (value) => {
    emits('close')
    emits('changeMenu', value)
}
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
.dialog-wrapper {
    position: fixed;
    inset: 0;
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .dialog-content {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;

        .top {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .link-btn {
                cursor: pointer;
                text-align: center;
                color: #fff;
                font-size: 14px;
                width: 100px;
                height: 30px;
                line-height: 30px;
                background: transparent;
                border: 1px solid #fff000;
                border-radius: 30px;
                box-shadow: 0 0 3px 2px #8a6f12, 0 0 7px 5px rgba(116, 80, 25, 0.7), 0 0 3px 2px #8a6f12 inset, 0 0 7px 5px rgba(116, 80, 25, 0.7) inset;
            }

            .lang {
                font-size: 14px;
                color: #fff;
                cursor: pointer;
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

        .menu {
            margin-top: 40px;

            .title {
                font-size: 24px;
                color: #646565;
            }

            .list {
                margin-top: 10px;
                color: #fff;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;

                .list-item {
                    cursor: pointer;
                }

                .active {
                    color: #b2903d;
                }
            }
        }

        .bottom {
            padding-top: 10px;
            color: #898989;
            border-top: 1px solid #fff;
            width: 100%;
            margin-top: auto;
            .close {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: #c6a64e;
                position: fixed;
                bottom: 20px;
                right: 20px;
                cursor: pointer;

                &::before,
                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 60%;
                    height: 2px;
                    background-color: white;
                    transform-origin: center;
                }

                &::before {
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                &::after {
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            }

        }
    }
}



.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
