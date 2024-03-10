<script>
import {RouterLink, RouterView} from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import {Vue3Marquee} from "vue3-marquee";

export default {
    components: {
        NavbarComponent,
        FooterComponent,
        Vue3Marquee,
    },
};
</script>
<template>
    <NavbarComponent />
    <Vue3Marquee class="info text-white"> Sipariş vermek için whatsapp dan iletişime geçebilirsiniz </Vue3Marquee>
    <RouterView />
    <a href="whatsapp://send?phone=+905555555555"><img src="../src/assets/icons/whatsapp.svg" alt="whatsapp" class="whatsapp" /></a>
    <FooterComponent />
</template>
<style>
.whatsapp {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 9999;
}
.info {
    background-color: #096479;
}
</style>
