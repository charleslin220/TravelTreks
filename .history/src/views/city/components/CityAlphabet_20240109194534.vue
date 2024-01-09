<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue'
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object as PropType<{ [key: string]: any }>
  },
  computed: {
    letters(): string[] {
      const letters: string[] = []
      for (const i in this.cities) {
        if (Object.prototype.hasOwnProperty.call(this.cities, i)) {
          letters.push(i)
        }
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null as number | null, // Type timer as number or null
    }
  },
  updated() {
    const aRef = this.$refs['A'] as HTMLElement[]; // Type assertion
    if (aRef && aRef[0]) {
      this.startY = aRef[0].offsetTop;
    }
  },
  methods: {
    handleLetterClick(e: MouseEvent) {
      // this.$emit('change', e.target.innerText)
      const target = e.target as HTMLElement; // Type assertion for the event target
      this.$emit('change', target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e: TouchEvent) {
      if (this.touchStatus) {
        if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }
        this.timer = setTimeout(() => {
          console.log(this.timer, 'this.timer')
          const touchY = e.touches[0].clientY - this.startY
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>
