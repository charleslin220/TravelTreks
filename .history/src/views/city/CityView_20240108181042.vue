<template>
  <city-header></city-header>
  <city-search></city-search>
</template>
<script lang="ts">
import CityHeader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
<style lang="stylus" scoped></style>
