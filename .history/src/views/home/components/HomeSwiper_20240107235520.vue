<template>
  <div class="wrapper">
    <swiper class="swiper">
      <swiper-slide class="slide">
        <img
          class="swiper-img"
          src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide">
        <img
          class="swiper-img"
          src="https://scontent.fgla3-1.fna.fbcdn.net/v/t39.30808-6/322190635_1345969802867685_3060862018728825820_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=173fa1&_nc_ohc=9Kj33R4fa5EAX8C-y5g&_nc_ht=scontent.fgla3-1.fna&oh=00_AfDCUT3FRp_VpPnf7WNl9SXfs--QFC9cEYGDAJvzlL8wfA&oe=659F6875"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="slide">
        <img
          class="swiper-img"
          src="http://www.standrewspaisley.com/uploads/6/0/2/3/60230905/travel-tourism_orig.jpg"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default defineComponent({
  name: 'swiper-example-default',
  title: 'Default',
  components: {
    Swiper,
    SwiperSlide
  }
})
</script>
ß
<style lang="stylus" scoped>
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 56.25%
  background: #eee
  .swiper-img
    width: 100%
</style>
