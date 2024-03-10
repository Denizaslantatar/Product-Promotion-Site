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
    <header id="header">
        <h5 class="text-center p-2">Kürsüler</h5>
    </header>
    <section id="kursuCard">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in KursuData?.Kursu" :key="item">
                <div class="card">
                    <img :src="'/images/Kursu/' + item.imageUrl" class="img-fluid" alt="kursu cami iç mekaninin önemli detayidir. İslam sanatinda zenginlik ve estetigi simgeler." />
                    <div class="card-footer">
                        <small class="text-body-secondary">{{ item.footer }}</small>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
