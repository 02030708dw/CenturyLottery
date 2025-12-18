<template>
    <div class="contact">
        <div class="content">
            <h1 class="title">
                <p>CONTACT</p>
            </h1>

            <div class="list-block">

                <!-- 联系方式 -->
                <ul class="list-contact list">

                    <li class="list-item">
                        <span class="label">Email :</span>
                        <span class="value">
                            service@shicai-intl.com<br />
                            xinl6367@gmail.com
                        </span>
                    </li>

                    <li class="list-item">
                        <span class="label">Teams :</span>
                        <span class="value">
                            ibarradhon@gmail.com
                        </span>
                    </li>

                    <li class="list-item">
                        <span class="label">Telegram :</span>
                        <span class="value">
                            @gwworld888
                        </span>
                    </li>

                </ul>

                <!-- 菜单 -->
                <ul class="list-menu list">
                    <li
                        class="list-item"
                        v-for="item in isMobile ? mobileNav : pcNav"
                        :key="item.label"
                        @click="emits('changeMenu', item.pages[0])"
                    >
                        {{ $t(item.label) }}
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

const emits = defineEmits(['changeMenu']);

const width = ref(window.innerWidth);

const updateWidth = () => {
    width.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});

const isMobile = computed(() => width.value <= 956);

const mobileNav = [
    { label: "首页", pages: [0] },
    { label: "游戏", pages: [1] },
    { label: "产品优势", pages: [2, 3] },
    { label: "关于我们", pages: [4] },
];

const pcNav = [
    { label: "首页", pages: [0] },
    { label: "游戏", pages: [1] },
    { label: "产品优势", pages: [2, 3, 4] },
    { label: "关于我们", pages: [5] },
];
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

            &::before,
            &::after {
                content: '';
                position: absolute;
                width: 30%;
                height: 1px;
                background: rgba(255, 255, 255, 0.34);
                top: 50%;
            }

            &::before {
                left: 0;
            }

            &::after {
                right: 0;
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
            }

            .list-item {
                width: 300px;
                display: flex;
                gap: 12px;
                color: #fff;
                cursor: pointer;
            }

            .label {
                white-space: nowrap;
                opacity: 0.8;
            }

            .value {
                word-break: break-all; // ⭐ 邮箱自动换行
            }

            .list-contact {
                border-right: 1px solid #fff;
                padding-right: 20px;
            }

            .list-menu {
                border-left: 1px solid #fff;
                padding-left: 20px;
            }
        }
    }
}

/* 📱 小屏优化 */
@media (max-width: 850px) {
    .contact {
        padding: 60px 20px;

        .content {
            .list-block {
                flex-direction: column;

                .list-contact {
                    border-right: none;
                    margin-bottom: 30px;
                }

                .list-menu {
                    display: none;
                }

                .list-item {
                    flex-direction: column; // ⭐ 上下排列
                    gap: 6px;
                }
            }
        }
    }
}
</style>
