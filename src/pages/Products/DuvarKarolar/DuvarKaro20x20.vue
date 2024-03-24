<script>
import DuvarKaro from "@/JSON/DuvarKarolar/DuvarKaro20x20.json";
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
        <h5 class="text-center p-2">Duvar Karolar 20x20</h5>
    </header>
    <section id="karoCard">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in DuvarKaro.DuvarKaro20x20" :key="item">
                <div class="card">
                    <img :src="'/images/Duvar Karolar/20x20 karo/' + item.imageUrl" class="card-img-top" alt="duvar karolar" />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
