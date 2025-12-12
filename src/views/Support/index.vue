<template>
    <template v-if="!isMobile">
        <Support :data="support1" />
        <Support :data="support2" />
    </template>

    <template v-else>
        <Support :data="mergedData" />
    </template>

    <BackStage />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { support1, support2 } from './data';
import Support from './Support.vue';
import BackStage from './BackStage.vue';
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

const mergedData = computed(() => [...support1, ...support2]);
</script>
