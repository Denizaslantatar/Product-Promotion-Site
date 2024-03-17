<script>
import Kenar15x20 from "@/JSON/KenarSular/Kenar15x20.json";
export default {
    data() {
        return {
            Kenar15x20,
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
            <div class="col" v-for="item in Kenar15x20.Kenar2" :key="item">
                <div class="card">
                    <img :src="'/images/Kenar Sular/15x20 kenar/' + item.imageUrl" class="card-img-top" alt="kenar sular" />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
