import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


createApp(App).use(store).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@300;400;500;700&display=swap');
</style>