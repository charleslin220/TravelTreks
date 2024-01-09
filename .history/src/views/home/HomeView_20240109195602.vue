<template>
  <main>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </main>
</template>

<script lang="ts">
import axios from 'axios'
import { mapState } from 'vuex'
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
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city']),
    isCitySame() {
      return this.lastCity === this.city
    }
  },
  methods: {
    async getHomeInfo() {
      try {
        const response = await axios.get('/api/index.json?city=' + this.city)
        this.getHomeInfoSucc(response)
      } catch (error) {
        console.error(error)
      }
    },
    getHomeInfoSucc(res: any) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    // this.lastCity = this.city
    // this.getHomeInfo()
    if(!this.isCitySame) {
      this.getHomeInfo()
      this.lastCity = this.city as string
    }
  }
  // activated() {
  //   if(!this.isCitySame) {
  //     this.lastCity = this.city
  //     this.getHomeInfo()
  //   }
  // }
}
</script>
