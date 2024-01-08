<template>
  <city-header></city-header>
  <city-search></city-search>
  <city-list></city-list>
</template>
<script lang="ts">
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>
<style lang="stylus" scoped></style>
