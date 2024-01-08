<template>
  <div class="list wrapper" ref="wrapper">
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
          <div class="button-wrapper">
            <div class="button">Glasgow</div>
          </div>
          <div class="button-wrapper">
            <div class="button">Glasgow</div>
          </div>
          <div class="button-wrapper">
            <div class="button">Glasgow</div>
          </div>
          <div class="button-wrapper">
            <div class="button">Glasgow</div>
          </div>
          <div class="button-wrapper">
            <div class="button">Glasgow</div>
          </div>
          <div class="button-wrapper">
            <div class="button">Glasgow</div>
          </div>
          <div class="button-wrapper">
            <div class="button">Glasgow</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
          <div class="item border-bottom">London</div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script lang="ts">
import { ref, onMounted } from 'vue';
import BScroll from '@better-scroll/core'
export default {
  name: 'CityList',
  setup() {
    const wrapper = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (wrapper.value) {
        new BScroll(wrapper.value);
      }
    });

    return { wrapper };
  }
}
</script> -->

<script lang="ts">
import BScroll from '@better-scroll/core'
export default {
  name: 'CityList',
//   mounted() {
//     let wrapper = document.querySelector('.wrapper') as HTMLElement; // Type assertion
//     let scroll = new BScroll(wrapper);
//   }
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
