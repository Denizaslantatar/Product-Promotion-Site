<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/scss/index.scss";

// import required modules
import {Navigation, Pagination, Keyboard, Autoplay} from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Keyboard, Autoplay],
        };
    },
};
</script>
<template>
    <header id="header">
        <h5 class="text-center p-2">Hakkımızda</h5>
    </header>
    <main id="hakkimizda">
        <section class="swiperContainer">
            <swiper
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                :pagination="{
                    clickable: true,
                }"
                :cssMode="true"
                :navigation="true"
                :keyboard="true"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide><img src="/public/images/ciniKapi.webp" alt="cami" /></swiper-slide>
                <swiper-slide><img src="/public/images/hamam.jpg" alt="cami" /></swiper-slide>
                <swiper-slide><img src="/public/images/cinicami.jpg" alt="cami" /></swiper-slide>
                <swiper-slide><img src="/public/images/dashphoto4.jpg" alt="cami" /></swiper-slide>
            </swiper>
        </section>
        <section id="hakkimizdaText">
            <div class="container">
                <h5 class="text-center fw-bold">Biz kimiz</h5>
                <p class="mt-2 mb-5">
                    Çini sanatının geleneksel dokusunu modern mimariyle buluşturuyoruz. Yıllar boyu edindiğimiz deneyim ve tutkuyla, cami mimberleri, mihraplar, kürsüler ve otel duvarlarından hamam ve
                    şadırvanlara kadar geniş bir yelpazede çini karolar ile çalışmalar yapıyoruz. Elimizde her parça bir sanat eserine dönüşürken, yapılan her işte geleneksel tekniklerle çağdaş
                    tasarımları harmanlıyoruz. Türkiye'nin dört bir yanında, pek çok caminin iç dizaynını gerçekleştirerek adımızı çini sanatında kalıcı kılmış bulunmaktayız. Cami duvarlarına
                    yerleştirdiğimiz çini işleri, ibadetin huzurunu ve estetiğini yansıtmak üzere özenle seçilmiş motiflerle bezenmiştir. Otellerin duvarlarında ve koridorlarında ise çini karolarımız,
                    konuklara sıcak bir atmosfer sunmanın yanı sıra, Türk kültürünün zenginliğini ve zarafetini yansıtmaktadır. Hamam ve şadırvanlarda dizayn ettiğimiz çini işleri, geleneksel Türk
                    hamam kültürünün modern yorumunu sunar. Her bir detay, ziyaretçilere tarihin derinliklerinde bir yolculuk vadederek, ruhu ve bedeni dinlendirme amacı taşır. Bizim için çini sadece
                    bir iş değil, bir tutkudur. Her bir projemizde, geçmişten gelen mirası gelecek nesillere aktarmak ve yaşatmak adına çalışıyoruz. Müşterilerimizin taleplerini özenle dinleyip,
                    onların hayallerini gerçeğe dönüştürmek için var gücümüzle çalışıyoruz. Siz de bize katılın, yaşam alanlarınızı çiniyle buluşturun ve Türk sanatının eşsiz güzelliğini evinize, iş
                    yerinize veya ibadet mekanlarınıza taşıyın. Biz, sizin için buradayız.
                </p>
            </div>
        </section>
    </main>
</template>
