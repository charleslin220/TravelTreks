<template>
  <main>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import axios from 'axios'
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'
const getHomeInfo = async () => {
  try {
    const response = await axios.get('/static/mock/index.json')
    getHomeInfoSucc(response)
  } catch (error) {
    console.error(error)
  }
}

const getHomeInfoSucc = (res: any) => {
  // Handle the successful response
  console.log(res)
}

onMounted(() => {
  getHomeInfo()
})
</script>
