import './assets/main.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
