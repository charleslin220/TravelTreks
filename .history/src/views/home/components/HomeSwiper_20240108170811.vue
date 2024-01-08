<template>
  <div class="wrapper">
    <swiper
      class="swiper"
      :modules="modules"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="true"
      v-if="showSwiper"
    >
      <swiper-slide class="slide" v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" :alt="item.desc" class="swiper-img" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

interface SwiperItem {
  id: string
  imgUrl: string
  desc: string
}

export default {
  name: 'HomeSwiper',
  props: {
    list: Array as PropType<SwiperItem[]>,
    default: () => [] // Provide a default empty array
  },
  data() {
    return {}
  },
  computed:{
      showSwiper(){
        return this.list && this.list.length
      }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 56.25%
  background: #eee
  .swiper-img
    width: 100%
</style>
