<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header></header>

  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </RouterView>
</template>

<style scoped></style>
