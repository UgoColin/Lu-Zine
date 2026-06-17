<script setup lang="ts">
import HomeAboutSection from '../components/home/HomeAboutSection.vue'
import HomeImmediateHook from '../components/home/HomeImmediateHook.vue'
import HomeSectionDivider from '../components/home/HomeSectionDivider.vue'
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <HomeImmediateHook />
    <HomeSectionDivider />
    <HomeAboutSection />
  </main>
</template>
