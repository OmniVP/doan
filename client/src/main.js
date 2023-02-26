import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './axios.js'

createApp(App).use(router).mount('#app')
