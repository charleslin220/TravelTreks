import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import SwiperClass, { /* swiper modules... */ } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'

const app = createApp(App)
fastclick.FastClick.attach(document.body)
SwiperClass.use([/* swiper modules... */])
app.use(VueAwesomeSwiper)


app.use(router)

app.mount('#app')
