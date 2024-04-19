<script>
export default {};
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-dark">
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
                        <router-link class="nav-link text-white" aria-current="page" to="/cini-sanati">Çini Sanatı</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link text-white" to="/galeri">Galeri</router-link>
                    </li> -->
                    <li class="nav-item dropdown">
                        <a class="nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ürünler</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/urunler-mimber">Mimber</a></li>
                            <li><a class="dropdown-item" href="/urunler-mihrap">Mihrap</a></li>
                            <li><a class="dropdown-item" href="/urunler-kursuler">Kürsü</a></li>
                            <li><a class="dropdown-item" href="/urunler-muezzinlik">Müezzinlik</a></li>
                            <!-- <li>
                                <a class="dropdown-item" href="/urunler-karo">Yer Karolar</a>
                            </li> -->
                            <li class="dropdown-submenu">
                                <a class="dropdown-item" href="#">
                                    Duvar Karolar
                                    <img class="dropdown-toggle" src="/public/images/toggle.png" alt="yan menü" />
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/urunler-duvar-karolar-20x20">20x20 Karolar</a></li>
                                    <li><a class="dropdown-item" href="#">20x25 Karolar</a></li>
                                    <li><a class="dropdown-item" href="#">20x40 Karolar</a></li>
                                    <li><a class="dropdown-item" href="#">21x23 Altıgen Karolar</a></li>
                                    <li><a class="dropdown-item" href="#">25x40 Desenli Karolar</a></li>
                                </ul>
                            </li>
                            <li class="dropdown-submenu">
                                <a class="dropdown-item" href="#">
                                    Kenar Sular
                                    <img class="dropdown-toggle" src="/public/images/toggle.png" alt="yan menü" />
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/urunler-kenar-sular-10x20">10x20 Kenar</a></li>
                                    <li><a class="dropdown-item" href="/urunler-kenar-sular-15x20">15x20 Kenar</a></li>
                                    <li><a class="dropdown-item" href="/urunler-kenar-sular-20x20">20x20 Kenar</a></li>
                                    <li><a class="dropdown-item" href="/urunler-kenar-sular-20x25">20x25 Kenar</a></li>
                                    <li><a class="dropdown-item" href="/urunler-kenar-sular-25x40">25x40 Kenar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/hakkimizda">Hakkımızda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/iletisim">İletişim</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
