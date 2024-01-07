<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="header-left">1</div>
    <div class="header-input">2</div>
    <div class="header-right">3</div>
  </div>
</template>

<style lang="stylus" scoped>
.header
  display: flex
  line-height: .86rem
  background: #00bcd4;
  color: #fff
  .header-left
    width: .64rem
    float:left
  .header-input
    flex: 1
  .header-right
    width: 1.24rem
    float:right
    text-align: center
</style>
