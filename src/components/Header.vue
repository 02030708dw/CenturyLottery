<template>
    <header class="header">
        <div class="header-bg"></div>

        <div class="logo">
            <img src="@/assets/Image/index/logo.png">
        </div>
        <div class="menu-bar">
            <ul class="nav">
                <li v-for="(item, i) in isMobile ? mobileNav : pcNav" :key="i"
                    @click="emits('changeMenu', item.pages[0])" :class="{ active: item.pages.includes(currentPage) }">
                    {{ $t(item.label) }}
                </li>
            </ul>
            <div class="link-btn">
                <a :href="URL">{{ $t('试玩') }}</a>
            </div>
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
    </header>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted,watch } from 'vue'
import { useI18n } from 'vue-i18n'

const URL = ref('https://original.gw1238.online//login/thirdparty/266-4b6?op=web&thirdpartyUserId=1688735468461')
const props = defineProps(['currentPage'])
const emits = defineEmits(['changeMenu'])

const { locale } = useI18n()

const width = ref(window.innerWidth)

const updateWidth = () => {
    width.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', updateWidth)
    document.addEventListener('click', closeLang)
})
onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
    document.removeEventListener('click', closeLang)
})

const isMobile = computed(() => width.value <= 956)

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
const initLang = () => {
    const localLang = localStorage.getItem(LANG_KEY)
    const langValue = localLang || locale.value
    const matchedLang = langList.find(
        item => item.value === langValue
    )
    const finalLang = matchedLang || langList[0]
    currentLang.value = finalLang
    locale.value = finalLang.value
    localStorage.setItem(LANG_KEY, finalLang.value)
}

const currentLang = ref(langList[0])

onMounted(() => {
    initLang()
})

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
watch(locale,(newvalue)=>{
    initLang()
    emits('changeMenu',0)
})
</script>





<style scoped lang="scss">
.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    padding: 0 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    background: transparent;


    .header-bg {
        position: absolute;
        inset: 0;
        background-color: rgba(32, 32, 32, 0.6);
        clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
        z-index: -1;
    }

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
                white-space: nowrap;
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

            a{
                color: #fff;
                text-decoration: none;
            }
        }

        .lang {
            width: 100px;
            text-align: center;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
            border-left: 1px solid #5d5d5d;
            padding-left: 18px;
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
                left: 0;
                min-width: 120px;
                background-color: rgba(32, 32, 32, 0.95);
                border: 1px solid #5d5d5d;
                border-radius: 6px;
                overflow: hidden;
                z-index: 20;

                li {
                    padding: 10px 14px;
                    font-size: 16px;
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
