<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, useTemplateRef, watch } from 'vue'
import afficheImage from '../../assets/projects/la-ferme-urbaine/affiche.webp'
import posterImage from '../../assets/projects/la-ferme-urbaine/poster-legumes-de-saison.webp'
import websiteImage from '../../assets/projects/la-ferme-urbaine/website.webp'
import mockupBrochureImage from '../../assets/projects/la-ferme-urbaine/mockup-brochure.webp'
import magnetsImage from '../../assets/projects/la-ferme-urbaine/magnets.webp'
import kakemonoDoubleImage from '../../assets/projects/la-ferme-urbaine/kakemono-double.webp'
import kakemono01Image from '../../assets/projects/la-ferme-urbaine/kakemono-01.webp'
import kakemono02Image from '../../assets/projects/la-ferme-urbaine/kakemono-02.webp'
import brochureDetail01Image from '../../assets/projects/la-ferme-urbaine/brochure-detail-01.webp'
import brochureDetail02Image from '../../assets/projects/la-ferme-urbaine/brochure-detail-02.webp'
import brochureDetail03Image from '../../assets/projects/la-ferme-urbaine/brochure-detail-03.webp'
import brochureMockup01Image from '../../assets/projects/la-ferme-urbaine/brochure-mockup-01.webp'
import brochureMockup02Image from '../../assets/projects/la-ferme-urbaine/brochure-mockup-02.webp'
import brochureMockup03Image from '../../assets/projects/la-ferme-urbaine/brochure-mockup-03.webp'
import abribus01Image from '../../assets/projects/la-ferme-urbaine/abribus-01.webp'
import abribus02Image from '../../assets/projects/la-ferme-urbaine/abribus-02.webp'
import { useEntranceMotion } from '../../composables/useEntranceMotion'

type GalleryItem = {
  image: string
  alt: string
  cardClass: string
}

const galleryItems = shallowRef<GalleryItem[]>([
  {
    image: afficheImage,
    alt: 'Affiche La Ferme Urbaine',
    cardClass: 'lg:-rotate-[1deg]',
  },
  {
    image: posterImage,
    alt: 'Poster légumes de saison La Ferme Urbaine',
    cardClass: 'lg:rotate-[0.9deg]',
  },
  {
    image: websiteImage,
    alt: 'Maquette du site La Ferme Urbaine',
    cardClass: 'lg:rotate-[1.1deg]',
  },
  {
    image: mockupBrochureImage,
    alt: 'Mockup brochure La Ferme Urbaine',
    cardClass: 'lg:-rotate-[0.8deg]',
  },
  {
    image: magnetsImage,
    alt: 'Magnets La Ferme Urbaine',
    cardClass: 'lg:rotate-[1.2deg]',
  },
  {
    image: kakemonoDoubleImage,
    alt: 'Double kakémono La Ferme Urbaine',
    cardClass: 'lg:-rotate-[1.1deg]',
  },
  {
    image: kakemono01Image,
    alt: 'Kakémono La Ferme Urbaine version 1',
    cardClass: 'lg:rotate-[1deg]',
  },
  {
    image: kakemono02Image,
    alt: 'Kakémono La Ferme Urbaine version 2',
    cardClass: 'lg:-rotate-[0.9deg]',
  },
  {
    image: brochureDetail01Image,
    alt: 'Détail brochure La Ferme Urbaine 1',
    cardClass: 'lg:rotate-[0.7deg]',
  },
  {
    image: brochureDetail02Image,
    alt: 'Détail brochure La Ferme Urbaine 2',
    cardClass: 'lg:-rotate-[1.2deg]',
  },
  {
    image: brochureDetail03Image,
    alt: 'Détail brochure La Ferme Urbaine 3',
    cardClass: 'lg:rotate-[1deg]',
  },
  {
    image: brochureMockup01Image,
    alt: 'Brochure mockup La Ferme Urbaine 1',
    cardClass: 'lg:-rotate-[0.7deg]',
  },
  {
    image: brochureMockup02Image,
    alt: 'Brochure mockup La Ferme Urbaine 2',
    cardClass: 'lg:rotate-[1.3deg]',
  },
  {
    image: brochureMockup03Image,
    alt: 'Brochure mockup La Ferme Urbaine 3',
    cardClass: 'lg:-rotate-[1deg]',
  },
  {
    image: abribus01Image,
    alt: 'Abribus La Ferme Urbaine 1',
    cardClass: 'lg:rotate-[0.8deg]',
  },
  {
    image: abribus02Image,
    alt: 'Abribus La Ferme Urbaine 2',
    cardClass: 'lg:-rotate-[1.1deg]',
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
          <p class="text-xs uppercase tracking-[0.34em] text-bordeau/55">Sortie du potager</p>
          <h2 class="mt-3 font-title text-[3rem] leading-[0.9] text-bordeau sm:text-[3.9rem]">
            Une récolte d'applications
            <span class="block text-bleu-fonce">pensées pour le quartier et pour la ville.</span>
          </h2>
        </div>

        <div class="rounded-[1.5rem] border border-bleu-clair/35 bg-bleu-clair/38 px-4 py-3 text-bordeau">
          <p class="text-[0.68rem] uppercase tracking-[0.28em] text-bordeau/55">Galerie</p>
          <p class="mt-2 text-lg leading-snug">Affiches, brochure, site, kakémonos, abribus.</p>
        </div>
      </div>

      <div class="mt-8 columns-1 gap-4 md:columns-2 xl:columns-3">
        <article
          v-for="(item, index) in galleryItems"
          :key="item.alt"
          class="motion-enter group relative mb-4 break-inside-avoid transition-transform duration-300 lg:hover:z-10"
          :class="[item.cardClass, { 'motion-enter-active': isVisible }]"
          :style="{
            '--enter-delay': `${140 + index * 65}ms`,
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
