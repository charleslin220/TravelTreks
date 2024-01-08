<template>
  <city-header></city-header>
  <city-search :cities="cities"></city-search>
  <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
  <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
</template>
<script lang="ts">
import axios from 'axios'
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/CityAlphabet.vue'
export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter:  ''
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange(letter){
      this.letter = letter
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped></style>
