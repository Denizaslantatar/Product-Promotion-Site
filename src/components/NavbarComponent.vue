<script>
export default {
    data() {
        return {};
    },
    computed: {},
    methods: {},
    async mounted() {},
};
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
            <router-link class="navbar-brand text-white" to="/">Anasayfa</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active text-white" aria-current="page" to="/cini-sanati">Çini Sanatı</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/galeri">Galeri</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Ürünler </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Kürsü</a></li>
                            <li><a class="dropdown-item" href="/urunler-mihrap">Mihrap</a></li>
                            <li><a class="dropdown-item" href="#">Müezzinlik</a></li>
                            <li><a class="dropdown-item" href="#">Karolar</a></li>
                            <li><a class="dropdown-item" href="#">Kenarlıklar</a></li>
                            <li><a class="dropdown-item" href="#">El Dekorları</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/hakkimizda">Hakkımızda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/iletisim">İletişim</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
