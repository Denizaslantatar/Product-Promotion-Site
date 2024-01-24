import { createRouter, createWebHistory } from 'vue-router'
import DashboardHome from '../pages/DashboardHome.vue'
import AboutUs from '../pages/AboutUs.vue'
import ContactHome from '../pages/ContactHome.vue'
import GalleryHome from '../pages/GalleryHome.vue'
import CiniArt from '../pages/CiniArt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'anasayfa',
      component: DashboardHome
    },
    {
      path: '/hakkimizda',
      name: 'hakkimizda',
      component: AboutUs,
    },
    {
      path: '/iletisim',
      name: 'iletisim',
      component: ContactHome,
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: GalleryHome,
    },
      {
      path: '/cini-sanati',
      name: 'cini-sanati',
      component: CiniArt,
    },
  ]
})

export default router
