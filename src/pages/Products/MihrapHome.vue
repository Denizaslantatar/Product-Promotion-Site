<script>
import MihrapData from "@/JSON/mihrapData.json";
export default {
    data() {
        return {
            MihrapData,
        };
    },
};
</script>
<template>
    <header id="header">
        <h5 class="text-center p-2">Mihrap</h5>
    </header>
    <section id="mihrapCard">
        <div class="row row-cols-lg-3 row-cols-md-3 row-cols-1 g-4">
            <div class="col-12" v-for="item in MihrapData?.Mihrap" :key="item">
                <div class="card h-100">
                    <img :src="'/images/Mihrap/' + item.imageUrl" class="card-img-top" alt="mihrap islami mimaride önemli bir unsurdur." />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text text-danger fw-bold">{{ item.text }}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">{{ item.footer }}</small>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
