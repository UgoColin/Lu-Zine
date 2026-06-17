<script setup lang="ts">
import SiteFooter from './components/layout/SiteFooter.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
</script>

<template>
  <div class="min-h-screen">
    <SiteHeader />

    <main class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div
          class="rounded-[2.6rem] border border-bordeau/15 bg-beige/85 px-6 py-10 shadow-[0_18px_50px_rgba(109,33,57,0.06)] sm:px-8 lg:px-10"
        >
          <h2 class="mt-3 font-title text-5xl leading-[0.92] text-bordeau sm:text-6xl">
            Page d'accueil.
          </h2>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped></style>
