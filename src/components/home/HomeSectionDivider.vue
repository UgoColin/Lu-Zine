<script setup lang="ts">
import { computed, shallowRef, useTemplateRef } from 'vue'
import { useEntranceMotion } from '../../composables/useEntranceMotion'

type DividerTile = {
  color: string
}

const dividerTiles = shallowRef<DividerTile[]>([
  { color: '#bad8f3' },
  { color: '#d7d35f' },
  { color: '#6d2139' },
  { color: '#e84920' },
  { color: '#f6b6b8' },
  { color: '#878e45' },
  { color: '#bad8f3' },
  { color: '#d7d35f' },
  { color: '#6d2139' },
  { color: '#e84920' },
  { color: '#f6b6b8' },
  { color: '#878e45' },
])

const dividerGradient = computed(() => {
  const step = 100 / dividerTiles.value.length

  const stops = dividerTiles.value.flatMap((tile, index) => {
    const start = (index * step).toFixed(4)
    const end = ((index + 1) * step).toFixed(4)

    return [`${tile.color} ${start}%`, `${tile.color} ${end}%`]
  })

  return `linear-gradient(90deg, ${stops.join(', ')})`
})

const dividerRef = useTemplateRef<HTMLElement>('dividerSection')
const { isVisible } = useEntranceMotion(dividerRef, {
  rootMargin: '0px 0px -15% 0px',
  threshold: 0.28,
})
</script>

<template>
  <section
    ref="dividerSection"
    aria-hidden="true"
    class="relative left-1/2 my-10 w-screen -translate-x-1/2 overflow-hidden py-4 sm:my-12 sm:py-5"
  >
    <div
      class="motion-enter relative overflow-hidden border border-bordeau/10 shadow-[0_10px_30px_rgba(109,33,57,0.06)]"
      :class="{ 'motion-enter-active': isVisible }"
      style="--enter-delay: 40ms; --enter-y: 12px; --enter-scale: 0.985; --enter-duration: 720ms"
    >
      <div
        class="h-6 w-full sm:h-18"
        :style="{ backgroundImage: dividerGradient }"
      />

      <div class="pointer-events-none absolute inset-0 border-y border-beige/35" />
    </div>
  </section>
</template>
