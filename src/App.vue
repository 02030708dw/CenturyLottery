<template>

    <Header :currentPage="currentPage" @changeMenu="goToPage($event)" />

    <Home :isMobile="isMobile"/>
    <Game />
    <Support />
    <About />
    <Contact @changeMenu="goToPage($event)" />

    <MenuDialog :show="MenuDialogShow" :currentPage="currentPage" @close="MenuDialogShow = false"
        @changeMenu="goToPage($event)" />
    <FixedBtn @gotop="goToPage(0)" @show-menu="MenuDialogShow = true" />
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { useFullPageScroll } from '@/util/useFullPageScroll';
import Header from '@/components/Header.vue';
import Home from '@/views/Home/index.vue';
import Game from '@/views/Game/index.vue';
import Support from '@/views/Support/index.vue';
import About from '@/views/About/index.vue';
import Contact from '@/views/Contact/index.vue';
import MenuDialog from '@/components/MenuDialog.vue';
import FixedBtn from '@/components/FixedBtn.vue';

const isMobile = ref(window.innerWidth < 956)
const { currentPage, goToPage } = useFullPageScroll(isMobile.value ? 6 : 7);
const MenuDialogShow = ref(false);
function handleResize() {
    const nowMobile = window.innerWidth < 956;
    if (isMobile.value === true && nowMobile === false) {
        goToPage(0)
    }
    if (isMobile.value === false && nowMobile === true) {
        goToPage(0)
    }
    isMobile.value = nowMobile;
}
onMounted(() => {
    window.addEventListener("resize", handleResize);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});


</script>
