<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      Enter City/Landmark/Play Theme
    </div>
    <div class="header-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String, // Use `String` as the value, not `string`
      required: true // Or `false` depending on whether it's required or not
      // You can also provide a default value if it's not required
      // default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';
@import '../../../assets/styles/mixins.styl'
.header
  display: flex
  line-height: .86rem
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float:left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    width: 1.7rem
    float:right
    text-align: center
    ellipsis()
    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem
</style>
