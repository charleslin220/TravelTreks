<template>
  <div class="wrapper">
    <swiper class="swiper">
      <swiper-slide class="slide" v-for="item of iconList" :key="item.id">
        <img :src="item.imgUrl" :alt="item.desc" class="swiper-img" />
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
      iconList: [
        {
          id: '0001',
          imgUrl:
            'https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg',
          desc: 'image1'
        },
        {
          id: '0002',
          imgUrl:
            'https://scontent.fgla3-1.fna.fbcdn.net/v/t39.30808-6/322190635_1345969802867685_3060862018728825820_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=173fa1&_nc_ohc=9Kj33R4fa5EAX8C-y5g&_nc_ht=scontent.fgla3-1.fna&oh=00_AfDCUT3FRp_VpPnf7WNl9SXfs--QFC9cEYGDAJvzlL8wfA&oe=659F6875',
          desc: 'image2'
        },
        {
          id: '0003',
          imgUrl:
            'http://www.standrewspaisley.com/uploads/6/0/2/3/60230905/travel-tourism_orig.jpg',
          desc: 'image3'
        },
        {
          id: '0004',
          imgUrl:
            'https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2021/03/traveling-based-on-fare-deals.jpg',
          desc: 'image4'
        },
        {
          id: '0005',
          imgUrl:
            'https://scontent.fgla3-1.fna.fbcdn.net/v/t39.30808-6/322190635_1345969802867685_3060862018728825820_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=173fa1&_nc_ohc=9Kj33R4fa5EAX8C-y5g&_nc_ht=scontent.fgla3-1.fna&oh=00_AfDCUT3FRp_VpPnf7WNl9SXfs--QFC9cEYGDAJvzlL8wfA&oe=659F6875',
          desc: 'image5'
        },
        {
          id: '0006',
          imgUrl:
            'http://www.standrewspaisley.com/uploads/6/0/2/3/60230905/travel-tourism_orig.jpg',
          desc: 'image6'
        },
        {
          id: '0007',
          imgUrl:
            'http://www.standrewspaisley.com/uploads/6/0/2/3/60230905/travel-tourism_orig.jpg',
          desc: 'image7'
        },
        {
          id: '0008',
          imgUrl:
            'http://www.standrewspaisley.com/uploads/6/0/2/3/60230905/travel-tourism_orig.jpg',
          desc: 'image8'
        },
        {
          id: '0009',
          imgUrl:
            'http://www.standrewspaisley.com/uploads/6/0/2/3/60230905/travel-tourism_orig.jpg',
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
