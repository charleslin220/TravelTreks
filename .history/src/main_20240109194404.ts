import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
// import fastclick from 'fastclick'
import SwiperClass, { Pagination } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'

const app = createApp(App)
// fastclick.FastClick.attach(document.body)
SwiperClass.use([Pagination])
app.use(VueAwesomeSwiper)


app.use(router)
app.use(store)

app.mount('#app')
