<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">Selected City</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ store.state.city }}</div>
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
import { defineComponent, ref, onMounted, watch } from 'vue'
import BScroll from '@better-scroll/core'
import { useStore } from 'vuex'
import type { PropType, Ref } from 'vue'

interface CityItem {
  id: string
  spell: string
  name: string
}

// export default defineComponent({
//   name: 'CityList',
//   props: {
//     hotCities: {
//       type: Array as PropType<CityItem[]>,
//       default: () => []
//     },
//     cities: Object,
//     letter: String
//   },
//   setup(props) {
//     const wrapperRef = ref<HTMLElement | null>(null)
//     const scroll: Ref<BScroll | null> = ref(null) // Typing the scroll ref
//     const store = useStore()

//     onMounted(() => {
//       if (wrapperRef.value) {
//         scroll.value = new BScroll(wrapperRef.value, {
//           probeType: 3,
//           click: true
//         })
//       }
//     })

//     watch(() => props.letter, (newLetter) => {
//       if (newLetter && scroll.value) {
//         const element = wrapperRef.value?.querySelector(`[ref='${newLetter}']`);
//         if (element) {
//           scroll.value.scrollToElement(element as HTMLElement);
//         }
//       }
//     });


//     return {
//       scroll,
//       store
//     }
//   }
// })

export default {
  name: 'CityList',
  props: {
    hotCities: {
      type: Array as PropType<CityItem[]>,
      default: () => [] // Correct way to provide a default value
    },
    cities: Object,
    letter: String
  },
  data() {
    return {
      scroll: null, // Define scroll here
      store: useStore()
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.wrapper) {
        this.scroll = new BScroll(this.$refs.wrapper, {
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
