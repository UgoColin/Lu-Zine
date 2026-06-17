<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, useTemplateRef, watch } from 'vue'
import signImage from '../../assets/projects/atelier-maree/encadre-lumineux.webp'
import logoClayImage from '../../assets/projects/atelier-maree/logo-argile.webp'
import logoBandImage from '../../assets/projects/atelier-maree/logo-bandeau.webp'
import totebagImage from '../../assets/projects/atelier-maree/totebag-atelier-maree.webp'
import { useEntranceMotion } from '../../composables/useEntranceMotion'

type GalleryItem = {
  image: string
  alt: string
  cardClass: string
}

const galleryItems = shallowRef<GalleryItem[]>([
  {
    image: signImage,
    alt: 'Encadré lumineux Atelier Marée',
    cardClass: 'lg:rotate-[0.8deg] lg:translate-y-5',
  },
  {
    image: logoClayImage,
    alt: 'Logo Atelier Marée sur fond argile',
    cardClass: 'lg:-rotate-[1.3deg] lg:-translate-y-4',
  },
  {
    image: logoBandImage,
    alt: 'Déclinaison du logo Atelier Marée',
    cardClass: 'lg:rotate-[1.4deg] lg:translate-y-9',
  },
  {
    image: totebagImage,
    alt: 'Totebag Atelier Marée',
    cardClass: 'lg:-rotate-[0.9deg] lg:-translate-y-2',
  },
])

const activeImage = shallowRef<GalleryItem | null>(null)
const sectionRef = useTemplateRef<HTMLElement>('gallerySection')
const { isVisible } = useEntranceMotion(sectionRef, {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.14,
})

function openImage(item: GalleryItem) {
  activeImage.value = item
}

function closeImage() {
  activeImage.value = null
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeImage()
  }
}

watch(activeImage, (item) => {
  if (typeof document === 'undefined') {
    return
  }

  document.body.style.overflow = item ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }

  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section ref="gallerySection" class="relative py-6 sm:py-8">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-[9%] top-12 h-28 w-28 rounded-full bg-bleu-clair/20 blur-3xl" />
      <div class="absolute right-[11%] top-24 h-36 w-36 rounded-full bg-orange/10 blur-3xl" />
    </div>

    <div
      class="motion-enter relative overflow-hidden rounded-[2.8rem] border border-bordeau/12 bg-beige/86 p-5 shadow-[0_22px_56px_rgba(109,33,57,0.06)] sm:p-6 lg:p-7"
      :class="{ 'motion-enter-active': isVisible }"
      style="--enter-delay: 80ms; --enter-y: 22px; --enter-duration: 820ms"
    >
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div class="max-w-3xl">
          <p class="text-xs uppercase tracking-[0.34em] text-bordeau/55">Sortie d’atelier</p>
          <h2 class="mt-3 font-title text-[3rem] leading-[0.9] text-bordeau sm:text-[3.9rem]">
            Des applications plus calmes,
            <span class="block text-bleu-fonce">mais toujours très sensibles à la matière.</span>
          </h2>
        </div>

        <div class="rounded-[1.5rem] border border-bleu-clair/35 bg-bleu-clair/38 px-4 py-3 text-bordeau">
          <p class="text-[0.68rem] uppercase tracking-[0.28em] text-bordeau/55">Galerie</p>
          <p class="mt-2 text-lg leading-snug">Enseigne, variations du logo, support textile.</p>
        </div>
      </div>

      <div class="mt-8 columns-1 gap-4 md:columns-2">
        <article
          v-for="(item, index) in galleryItems"
          :key="item.alt"
          class="motion-enter group relative mb-4 break-inside-avoid transition-transform duration-300 lg:hover:z-10"
          :class="[item.cardClass, { 'motion-enter-active': isVisible }]"
          :style="{
            '--enter-delay': `${140 + index * 85}ms`,
            '--enter-y': '18px',
            '--enter-duration': '680ms',
          }"
        >
          <button
            type="button"
            class="block w-full cursor-zoom-in"
            :aria-label="`Agrandir l'image : ${item.alt}`"
            @click="openImage(item)"
          >
            <img
              :src="item.image"
              :alt="item.alt"
              class="h-auto w-full rounded-[1.5rem] transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </button>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="activeImage"
        class="fixed inset-0 z-50 bg-bordeau/72 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-6"
        @click="closeImage"
      >
        <button
          type="button"
          class="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-beige/20 bg-beige/92 text-bordeau transition-transform duration-200 hover:rotate-90 hover:bg-white sm:right-6 sm:top-6"
          aria-label="Fermer l'image"
          @click.stop="closeImage"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6 shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M6 6 18 18" />
            <path d="M6 18 18 6" />
          </svg>
        </button>

        <div class="flex h-full w-full items-center justify-center">
          <img
            :src="activeImage.image"
            :alt="activeImage.alt"
            class="max-h-full max-w-full rounded-[1.6rem] object-contain shadow-[0_30px_80px_rgba(34,12,19,0.32)]"
            @click.stop
          />
        </div>
      </div>
    </Teleport>
  </section>
</template>
