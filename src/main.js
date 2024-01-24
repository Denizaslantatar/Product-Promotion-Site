import './assets/scss/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from "bootstrap";
import "bootstrap";
import "@/assets/scss/index.scss";

const app = createApp(App)

app.use(router)

app.mount('#app')
