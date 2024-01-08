<template>
  <main>
    <home-header :city="city"></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </main>
</template>

<script lang="ts">
// import { onMounted } from 'vue';
import axios from 'axios'
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'

export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      city: ''
    }
  },
  methods: {
    async getHomeInfo() {
      try {
        const response = await axios.get('/api/index.json')
        this.getHomeInfoSucc(response)
      } catch (error) {
        console.error(error)
      }
    },
    getHomeInfoSucc(res: any) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>
