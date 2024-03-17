<script>
import Kenar10x20 from "@/JSON/KenarSular/Kenar10x20.json";
export default {
    data() {
        return {
            Kenar10x20,
        };
    },
};
</script>
<template>
    <header id="header">
        <h5 class="text-center p-2">Kenar Sular</h5>
    </header>
    <section id="karoCard">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in Kenar10x20.Kenar" :key="item">
                <div class="card">
                    <img :src="'/images/Kenar Sular/10x20 kenar/' + item.imageUrl" class="card-img-top" alt="kenar sular" />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
