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
    <div>
        <NavbarComponent />
        <RouterView />
        <FooterComponent />
    </div>
</template>
