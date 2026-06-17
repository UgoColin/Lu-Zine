<script setup lang="ts">
import SiteFooter from './components/layout/SiteFooter.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import HomeImmediateHook from './components/home/HomeImmediateHook.vue'
</script>

<template>
  <div class="min-h-screen">
    <SiteHeader />

    <main class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <HomeImmediateHook />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped></style>
