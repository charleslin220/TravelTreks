<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchStart"
      @click="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated() {
    if (this.$refs['A'] && this.$refs['A'][0]) {
      this.startY = this.$refs['A'][0].offsetTop;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // this.timer = setTimeout(() => {
        //   console.log(this.timer,'this.timer')
        //   const touchY = e.touches[0].clientY - 118
        //   const index = Math.floor((touchY - this.startY) / 20)
        //   if (index >= 0 && index < this.letters.length) {
        //     this.$emit('change', this.letters[index])
        //   }
        // }, 16)
        const touchY = e.touches[0].clientY - 118
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
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
