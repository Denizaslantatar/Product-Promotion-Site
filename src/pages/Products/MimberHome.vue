<script>
import MimberData from "@/JSON/mimberData.json";
export default {
    data() {
        return {
            MimberData,
        };
    },
    computed: {},
    methods: {},
    async mounted() {},
};
</script>
<template>
    <div class="header">
        <h5 class="text-center p-2">Mimber</h5>
    </div>
    <section id="mimberCard">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in MimberData?.Mimber" :key="item">
                <div class="card">
                    <img :src="'/images/Mimber/' + item.imageUrl" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.text }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
