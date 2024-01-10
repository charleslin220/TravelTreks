<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper
        :options="swiperOptions"
        :pagination="{
          type: 'fraction'
        }"
        :navigation="true"
        :modules="modules"
      >
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item as string" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
export default {
  name: 'CommonGallary',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container :deep(.swiper)
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wrapper
    height: 0
    width: 100%
    padding-bottom: 100%
    .gallary-img
      width: 100%
    :deep(.swiper-pagination)
      color: #fff
      bottom: -1rem
</style>
