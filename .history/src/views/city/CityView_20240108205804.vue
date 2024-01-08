<template>
  <city-header></city-header>
  <city-search></city-search>
  <city-list></city-list>
  <city-alphabet></city-alphabet>
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
  methods:{
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      console.log(res)
    }
  }
}
</script>
<style lang="stylus" scoped></style>
