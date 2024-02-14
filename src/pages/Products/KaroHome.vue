<script>
import KaroData from "@/JSON/karoData.json";
export default {
    data() {
        return {
            KaroData,
        };
    },
};
</script>
<template>
    <div class="header">
        <h5 class="text-center p-2">Karolar</h5>
    </div>
    <section id="karoCard">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in KaroData?.Karo" :key="item">
                <div class="card">
                    <img :src="'/images/Karolar/' + item.imageUrl" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
