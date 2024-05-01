import {createRouter, createWebHistory} from "vue-router";
import DashboardHome from "../pages/DashboardHome.vue";
import AboutUs from "../pages/AboutUs.vue";
import ContactHome from "../pages/ContactHome.vue";
import GalleryHome from "../pages/GalleryHome.vue";
import CiniArt from "../pages/CiniArt.vue";
// Products
import MihrapHome from "../pages/Products/MihrapHome.vue";
import MimberHome from "../pages/Products/MimberHome.vue";
import KaroHome from "../pages/Products/KaroHome.vue";
import MuezzinlikHome from "../pages/Products/MuezzinlikHome.vue";
import KursuHome from "../pages/Products/KursuHome.vue";
import Kenar10x20 from "../pages/Products/KenarSular/Kenar10x20.vue";
import Kenar15x20 from "../pages/Products/KenarSular/Kenar15x20.vue";
import Kenar20x20 from "../pages/Products/KenarSular/Kenar20x20.vue";
import Kenar20x25 from "../pages/Products/KenarSular/Kenar20x25.vue";
import Kenar25x40 from "../pages/Products/KenarSular/Kenar25x40.vue";
import DuvarKaro20x20 from "@/pages/Products/DuvarKarolar/DuvarKaro20x20.vue";
import DuvarKaro20x25 from "@/pages/Products/DuvarKarolar/DuvarKaro20x25.vue";
import DuvarKaro20x40 from "@/pages/Products/DuvarKarolar/DuvarKaro20x40.vue";
import AltıgenKaro from "@/pages/Products/DuvarKarolar/AltıgenKaro.vue";
import DesenliKaro from "@/pages/Products/DuvarKarolar/DesenliKaro.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "anasayfa",
            component: DashboardHome,
        },
        {
            path: "/hakkimizda",
            name: "hakkimizda",
            component: AboutUs,
        },
        {
            path: "/iletisim",
            name: "iletisim",
            component: ContactHome,
        },
        {
            path: "/galeri",
            name: "galeri",
            component: GalleryHome,
        },
        {
            path: "/cini-sanati",
            name: "cini-sanati",
            component: CiniArt,
        },
        {
            path: "/urunler-mihrap",
            name: "urunler-mihrap",
            component: MihrapHome,
        },
        {
            path: "/urunler-mimber",
            name: "urunler-mimber",
            component: MimberHome,
        },
        {
            path: "/urunler-karo",
            name: "urunler-karo",
            component: KaroHome,
        },
        {
            path: "/urunler-muezzinlik",
            name: "urunler-muezzinlik",
            component: MuezzinlikHome,
        },
        {
            path: "/urunler-kursuler",
            name: "urunler-kursuler",
            component: KursuHome,
        },
        {
            path: "/urunler-kenar-sular-10x20",
            name: "urunler-kenar-sular-10x20",
            component: Kenar10x20,
        },
        {
            path: "/urunler-kenar-sular-15x20",
            name: "urunler-kenar-sular-15x20",
            component: Kenar15x20,
        },
        {
            path: "/urunler-kenar-sular-20x20",
            name: "urunler-kenar-sular-20x20",
            component: Kenar20x20,
        },
        {
            path: "/urunler-kenar-sular-20x25",
            name: "urunler-kenar-sular-20x25",
            component: Kenar20x25,
        },
        {
            path: "/urunler-kenar-sular-25x40",
            name: "urunler-kenar-sular-25x40",
            component: Kenar25x40,
        },
        {
            path: "/urunler-duvar-karolar-20x20",
            name: "urunler-duvar-karolar-20x20",
            component: DuvarKaro20x20,
        },
        {
            path: "/urunler-duvar-karolar-20x25",
            name: "urunler-duvar-karolar-20x25",
            component: DuvarKaro20x25,
        },
        {
            path: "/urunler-duvar-karolar-20x40",
            name: "urunler-duvar-karolar-20x40",
            component: DuvarKaro20x40,
        },
        {
            path: "/urunler-altigen-karo",
            name: "urunler-altigen-karo",
            component: AltıgenKaro,
        },
        {
            path: "/urunler-desenli-karo",
            name: "urunler-desenli-karo",
            component: DesenliKaro,
        },
    ],
});

export default router;
