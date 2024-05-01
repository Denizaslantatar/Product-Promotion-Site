<script>
import DuvarKaro from "@/JSON/DuvarKarolar/AltıgenKaro.json";
export default {
    data() {
        return {
            DuvarKaro,
        };
    },
};
</script>
<template>
    <header id="header">
        <h5 class="text-center p-2">Altıgen Karolar 21x23</h5>
    </header>
    <section id="karoCard">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in DuvarKaro.AltıgenKaro" :key="item">
                <div class="card">
                    <img :src="'/images/Duvar Karolar/21x23 Altıgen Karo/' + item.imageUrl" class="card-img-top" alt="duvar karolar" />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
