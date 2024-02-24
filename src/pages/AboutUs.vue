<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/scss/index.scss";

// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Mousewheel, Keyboard],
        };
    },
};
</script>
<template>
    <div class="header">
        <h5 class="text-center p-2">Hakkımda</h5>
    </div>
    <section class="swiperContainer">
        <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="/public/images/cami2.jpg" alt="cami" /></swiper-slide><swiper-slide><img src="/public/images/cami.jpg" alt="cami" /></swiper-slide>
            <swiper-slide><img src="/public/images/cami2.jpg" alt="cami" /></swiper-slide><swiper-slide><img src="/public/images/cami.jpg" alt="cami" /></swiper-slide>
        </swiper>
    </section>
</template>
