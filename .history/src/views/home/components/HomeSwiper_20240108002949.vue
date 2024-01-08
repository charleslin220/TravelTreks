<template>
  <div class="wrapper">
    <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide class="slide" v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" :alt="item.text" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

export default defineComponent({
  name: 'HomeSwiper',
  title: 'Pagination',
  data() {
    return {
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg',
          text: 'image1'
        },
        {
          id: '0002',
          imgUrl:
            'https://scontent.fgla3-1.fna.fbcdn.net/v/t39.30808-6/322190635_1345969802867685_3060862018728825820_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=173fa1&_nc_ohc=9Kj33R4fa5EAX8C-y5g&_nc_ht=scontent.fgla3-1.fna&oh=00_AfDCUT3FRp_VpPnf7WNl9SXfs--QFC9cEYGDAJvzlL8wfA&oe=659F6875',
            text: 'image2'
        },
        {
          id: '0003',
          imgUrl: 'http://www.standrewspaisley.com/uploads/6/0/2/3/60230905/travel-tourism_orig.jpg',
          text: 'image3'
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
})
</script>
ß
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
