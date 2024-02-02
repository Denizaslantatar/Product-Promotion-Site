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
    <div class="swiperContainer">
        <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="../assets//images/cami.jpg" alt="cami" /></swiper-slide>
            <swiper-slide><img src="../assets//images/cami2.jpg" alt="cami" /></swiper-slide><swiper-slide><img src="../assets//images/cami.jpg" alt="cami" /></swiper-slide>
            <swiper-slide><img src="../assets//images/cami2.jpg" alt="cami" /></swiper-slide><swiper-slide><img src="../assets//images/cami.jpg" alt="cami" /></swiper-slide>
            <swiper-slide><img src="../assets//images/cami.jpg" alt="cami" /></swiper-slide>
        </swiper>
    </div>
</template>
