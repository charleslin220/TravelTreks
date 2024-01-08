<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon" v-for="item of iconsList" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  name: 'HomeIcons',
  data() {
    return {
      iconsList: [
        {
          id: '0001',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: 'image1'
        },
        {
          id: '0002',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: 'image2'
        },
        {
          id: '0003',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: 'image3'
        },
        {
          id: '0004',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: 'image4'
        },
        {
          id: '0005',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: 'image5'
        },
        {
          id: '0006',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: 'image6'
        },
        {
          id: '0007',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: 'image7'
        },
        {
          id: '0008',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: 'image8'
        },
        {
          id: '0009',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: 'image9'
        }
      ]
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
@import '../../../assets/styles/varibles.styl'
@import '../../../assets/styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icons
  margin-top: .1rem
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
