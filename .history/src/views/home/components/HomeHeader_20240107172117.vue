<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      Enter City/Landmark/Play Theme
    </div>
    <div class="header-right">
      Cities
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.header
  display: flex
  line-height: .86rem
  background: #00bcd4
  color: #fff
  .header-left
    width: .64rem
    float:left
  .header-input
    flex: 1
    height: .64rem
    line-height .64rem
    margin-top: .12rem
    margin-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    width: 1.24rem
    float:right
    text-align: center
</style>
