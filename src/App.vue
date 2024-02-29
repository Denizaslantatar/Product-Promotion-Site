<script>
import {RouterLink, RouterView} from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
    components: {
        NavbarComponent,
        FooterComponent,
    },
};
</script>
<template>
    <NavbarComponent />
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
</style>
