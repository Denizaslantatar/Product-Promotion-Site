<script>
import KursuData from "@/JSON/kursuData.json";
export default {
    data() {
        return {
            KursuData,
        };
    },
};
</script>
<template>
    <div class="header">
        <h5 class="text-center p-2">Kürsüler</h5>
    </div>
    <section id="kursuCard">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in KursuData?.Kursu" :key="item">
                <div class="card">
                    <img :src="'/images/Kursu/' + item.imageUrl" class="img-fluid" alt="..." />
                    <div class="card-footer">
                        <small class="text-body-secondary">{{ item.footer }}</small>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
