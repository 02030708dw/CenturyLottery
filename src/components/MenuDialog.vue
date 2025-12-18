<template>
    <transition name="fade">
        <div v-if="show" class="dialog-wrapper">
            <div class="dialog-content">

                <div class="top">
                    <div class="link-btn">{{ $t('试玩') }}</div>

                    <div class="lang" @click.stop="toggleLang">
                        <span>{{ currentLang.label }}</span>
                        <ul class="lang-list" v-show="showLang">
                            <li v-for="item in langList" :key="item.value" @click.stop="changeLang(item)"
                                :class="{ active: item.value === currentLang.value }">
                                {{ item.label }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="menu">
                    <p class="title">MENU</p>
                    <ul class="list">
                        <li class="list-item" v-for="(item, i) in isMobile ? mobileNav : pcNav" :key="i"
                            @click="ChangeMenu(item.pages[0])" :class="{ active: item.pages.includes(currentPage) }">
                            {{ $t(item.label) }}
                        </li>
                    </ul>
                </div>

                <div class="bottom">
                    <div class="contact-item">
                        <span class="label">Email</span>
                        <span class="value">
                            service@shicai-intl.com<br />
                            xinl6367@gmail.com
                        </span>
                    </div>

                    <div class="contact-item">
                        <span class="label">Teams</span>
                        <span class="value">
                            ibarradhon@gmail.com
                        </span>
                    </div>

                    <div class="contact-item">
                        <span class="label">Telegram</span>
                        <span class="value">
                            @gwworld888
                        </span>
                    </div>

                    <div class="close" @click="emits('close')"></div>
                </div>


            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps(['show', 'currentPage'])
const emits = defineEmits(['changeMenu', 'close'])

const { locale } = useI18n()

const width = ref(window.innerWidth)

const updateWidth = () => {
    width.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', updateWidth)
    document.addEventListener('click', closeLang)
    initLang()
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
    document.removeEventListener('click', closeLang)
})

const isMobile = computed(() => width.value <= 956)

const ChangeMenu = (value) => {
    emits('close')
    emits('changeMenu', value)
}

const mobileNav = [
    { label: '首页', pages: [0] },
    { label: '游戏', pages: [1] },
    { label: '产品优势', pages: [2, 3] },
    { label: '关于我们', pages: [4] },
    { label: '联系我们', pages: [5] },
]

const pcNav = [
    { label: '首页', pages: [0] },
    { label: '游戏', pages: [1] },
    { label: '产品优势', pages: [2, 3, 4] },
    { label: '关于我们', pages: [5] },
    { label: '联系我们', pages: [6] },
]

const showLang = ref(false)

const langList = [
    { label: '简体中文', value: 'cn' },
    { label: 'English', value: 'en' },
]

const LANG_KEY = 'LANG'
const currentLang = ref(langList[0])

const initLang = () => {
    const localLang = localStorage.getItem(LANG_KEY)
    const langValue = localLang || locale.value
    const matched = langList.find(item => item.value === langValue)
    const finalLang = matched || langList[0]
    currentLang.value = finalLang
    locale.value = finalLang.value
    localStorage.setItem(LANG_KEY, finalLang.value)
}
const toggleLang = () => {
    showLang.value = !showLang.value
}
const closeLang = () => {
    showLang.value = false
}
const changeLang = (item) => {
    currentLang.value = item
    locale.value = item.value
    localStorage.setItem(LANG_KEY, item.value)
    showLang.value = false
}
watch(locale, (newvalue) => {
    initLang()
    emits('changeMenu', 0)
})
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

        /* 顶部 */
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
                box-shadow:
                    0 0 3px 2px #8a6f12,
                    0 0 7px 5px rgba(116, 80, 25, 0.7),
                    0 0 3px 2px #8a6f12 inset,
                    0 0 7px 5px rgba(116, 80, 25, 0.7) inset;
            }

            .lang {
                font-size: 14px;
                color: #fff;
                cursor: pointer;
                position: relative;
                user-select: none;

                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: -12px;
                    transform: translateY(-50%);
                    border: 4px solid;
                    border-color: #b2903d transparent transparent transparent;
                }

                .lang-list {
                    position: absolute;
                    top: 130%;
                    right: -16px;
                    min-width: 120px;
                    background-color: rgba(32, 32, 32, 0.95);
                    border: 1px solid #5d5d5d;
                    border-radius: 6px;
                    overflow: hidden;
                    z-index: 20;

                    li {
                        padding: 10px 14px;
                        font-size: 14px;
                        color: #fff;
                        transition: all 0.2s;

                        &:hover {
                            background-color: rgba(178, 144, 61, 0.2);
                            color: #b2903d;
                        }

                        &.active {
                            color: #b2903d;
                            background-color: rgba(178, 144, 61, 0.15);
                        }
                    }
                }
            }
        }

        /* 菜单 */
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
                    white-space: nowrap;
                    cursor: pointer;
                }

                .active {
                    color: #b2903d;
                }
            }
        }

        /* 底部 */
        .bottom {
            padding-top: 12px;
            color: #898989;
            border-top: 1px solid #fff;
            width: 100%;
            margin-top: auto;
            position: relative;

            .contact-item {
                display: flex;
                align-items: flex-start;
                gap: 8px;
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 6px;
            }

            .label {
                min-width: 70px; // 标签对齐
                white-space: nowrap;
                opacity: 0.7;
            }

            .value {
                color: #bfbfbf;
                word-break: break-all; // ⭐ 长邮箱换行
            }

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

/* 过渡 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
