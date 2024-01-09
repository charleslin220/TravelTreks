<template>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="Enter city name" />
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
        {{ item.name }}
      </li>
      <li class="search-item border-bottom" v-show="hasNoData">No matched data</li>
    </ul>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import BScroll from '@better-scroll/core'
import { useStore } from 'vuex'

interface CityItem {
  id: string
  name: string
  spell: string
}
export default {
  name: 'CitySearch',
  props: {
    cities: Object as PropType<{ [key: string]: any }>
  },
  data() {
    return {
      keyword: '',
      list: [] as CityItem[], // Explicitly type the list as an array of CityItem
      timer: null as number | null, // Type timer as number or null
      store: useStore(),
      scroll: null as BScroll | null, // Type scroll as BScroll or null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      // if (this.timer) {
      //   this.timer = null
      //   clearTimeout(this.timer)
      // }
      // if (!this.keyword) {
      //   this.list = []
      //   return
      // }
      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result: CityItem[] = []; // Type result as an array of CityItem
        for (let i in this.cities) {
          this.cities[i].forEach((value: CityItem) => { // Explicitly type value
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  methods: {
    handleCityClick(city: string) {
      // this.$store.dispatch('changeCity', city)
      this.store.commit('changeCity', city)
    }
  },
  mounted() {
    this.$nextTick(() => {
      const search = this.$refs.search as HTMLElement
      if (search) {
        this.scroll = new BScroll(search, {
          probeType: 3,
          click: true
        })
      }
    })
  },
  updated() {
    if (this.scroll) {
      this.scroll.refresh() // Refresh BetterScroll on update
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.search
  height: .72rem
  padding: 0 .1rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: .62rem
    padding: 0 .1rem
    line-height: .62rem
    text-align: center
    border-radius: .06rem
    color: #666
.search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eee
  .search-item
    line-height: .62rem
    padding-left: .2rem
    background: #fff
    color: #666
</style>
