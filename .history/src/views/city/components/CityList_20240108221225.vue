<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">Selected City</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">Glasgow</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">Popular Cities</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import BScroll from '@better-scroll/core'

interface cityItem {
  id: string
  spell: string
  name: string
}
export default {
  name: 'CityList',
  props: {
    hotCities: {
      type: Array as PropType<cityItem[]>,
      default: () => [] // Correct way to provide a default value
    },
    cities: Object,
    letter: String
  },
  data() {
    return {
      scroll: null // Define scroll here
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.wrapper) {
        this.scroll = new BScroll(this.$refs.wrapper) // Correctly access the ref and initialize BetterScroll
      }
    })
  },
  updated() {
    if (this.scroll) {
      this.scroll.refresh() // Refresh BetterScroll on update
    }
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
