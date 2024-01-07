import './assets/main.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as FastClick from 'fastclick';

const app = createApp(App)
FastClick['attach'](document.body);

app.use(router)

app.mount('#app')
