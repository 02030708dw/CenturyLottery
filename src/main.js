import { createApp } from 'vue';
import i18n from "@/lang/index.js";
import './style.css'
import App from './App.vue'
const app = createApp(App)
app.use(i18n)
app.mount('#app')
