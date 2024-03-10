import './assets/scss/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import "@/assets/scss/index.scss";
const app = createApp(App)
import Vue3Marquee from 'vue3-marquee'
import Spinner from "@/components/SpinnerComponent.vue";
app.use(Vue3Marquee)
app.use(router)
app.component("Spinner", Spinner)
app.mount('#app')