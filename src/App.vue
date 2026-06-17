<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteFooter from './components/layout/SiteFooter.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
</script>

<template>
  <div class="min-h-screen">
    <SiteHeader />
    <RouterView />

    <SiteFooter />
  </div>
</template>

<style scoped></style>
