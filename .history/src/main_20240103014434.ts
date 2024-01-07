import './assets/main.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'

const app = createApp(App)
fastclick.FastClick.attach(document.body)


app.use(router)

app.mount('#app')
