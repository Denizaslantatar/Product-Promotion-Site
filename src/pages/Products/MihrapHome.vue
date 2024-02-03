<script>
import MihrapData from "@/JSON/mihrapJason.json";
export default {
    data() {
        return {
            MihrapData,
        };
    },
    mounted() {
        console.log("MihrapData", this.MihrapData);
    },
};
</script>
<template>
    <div class="header">
        <h5 class="text-center p-2">Mihrap</h5>
    </div>
    <section id="mihrapCard">
        <div class="row row-cols-lg-3 row-cols-md-3 row-cols-1 g-4">
            <div class="col-12" v-for="item in MihrapData?.Mihrap" :key="item">
                <div class="card h-100">
                    <img :src="'/images/Mihrap/' + item.imageUrl" class="card-img-top" alt="..." />
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
