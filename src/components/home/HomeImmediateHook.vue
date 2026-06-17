<script setup lang="ts">
import { shallowRef, useTemplateRef } from 'vue'
import cookIllustration from '../../assets/branding/cook.svg'
import { useEntranceMotion } from '../../composables/useEntranceMotion'

type AccentPill = {
  label: string
  tone: string
}

const accentPills = shallowRef<AccentPill[]>([
  {
    label: 'Direction artistique',
    tone: 'bg-bleu-clair text-on-bleu-clair border-bleu-clair/45',
  },
  {
    label: 'Identites visuelles',
    tone: 'bg-rose text-on-rose border-rose/45',
  },
  {
    label: 'Edition & packaging',
    tone: 'bg-vert text-on-vert border-vert/45',
  },
])

const sectionRef = useTemplateRef<HTMLElement>('heroSection')
const { isVisible } = useEntranceMotion(sectionRef, {
  rootMargin: '0px 0px -12% 0px',
  threshold: 0.18,
})
</script>

<template>
  <section ref="heroSection" class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-[6%] top-10 h-32 w-32 rounded-full bg-orange/10 blur-3xl" />
      <div class="absolute right-[10%] top-24 h-40 w-40 rounded-full bg-bleu-clair/20 blur-3xl" />
      <div class="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-rose/15 blur-3xl" />
    </div>

    <div
      class="grid items-center gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(18rem,28rem)] xl:grid-cols-[minmax(0,1.08fr)_minmax(22rem,31rem)]"
    >
      <div
        class="motion-enter rounded-[2.2rem] border border-bordeau/12 bg-beige/82 px-5 py-5 shadow-[0_14px_35px_rgba(109,33,57,0.05)] sm:px-6 sm:py-6 lg:px-7 lg:py-7"
        :class="{ 'motion-enter-active': isVisible }"
        style="--enter-delay: 120ms; --enter-y: 20px; --enter-duration: 720ms"
      >
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="(pill, index) in accentPills"
            :key="pill.label"
            class="motion-enter rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em]"
            :class="[pill.tone, { 'motion-enter-active': isVisible }]"
            :style="{
              '--enter-delay': `${180 + index * 80}ms`,
              '--enter-y': '12px',
              '--enter-duration': '580ms',
            }"
          >
            {{ pill.label }}
          </span>
        </div>

        <h1
          class="mt-5 max-w-4xl font-title text-[3.4rem] leading-[0.9] text-bordeau sm:text-[4.4rem] lg:text-[5.2rem] xl:text-[5.8rem]"
        >
          Lucie Pires
          <span class="mt-3 block font-body text-[1.35rem] font-normal uppercase tracking-[0.22em] text-orange sm:text-[1.55rem]">
            Directrice Artistique
          </span>
        </h1>
        <p
          class="motion-enter max-w-3xl text-[1.7rem] leading-[1.05] text-bordeau sm:text-[2.2rem] lg:text-[2.6rem]"
          :class="{ 'motion-enter-active': isVisible }"
          style="--enter-delay: 240ms; --enter-y: 18px; --enter-duration: 760ms"
        >
          La creation graphique ne s'explique pas, elle se cuisine.
          <span class="mt-3 block text-orange">Tout est une question de dosage.</span>
        </p>
      </div>

      <div
        class="motion-enter relative flex min-h-[20rem] items-end justify-center py-2 sm:min-h-[24rem] lg:min-h-[28rem]"
        :class="{ 'motion-enter-active': isVisible }"
        style="--enter-delay: 180ms; --enter-y: 24px; --enter-duration: 820ms"
      >
        <div
          class="absolute inset-x-8 bottom-8 h-16 rounded-full bg-bordeau/10 blur-2xl"
          aria-hidden="true"
        />

        <div
          class="illustration-drift relative z-10 w-full max-w-[21rem] sm:max-w-[24rem] lg:max-w-[27rem] xl:max-w-[30rem]"
          :class="{ 'illustration-drift-active': isVisible }"
        >
          <img
            :src="cookIllustration"
            alt="Illustration d'une cheffe cuisinant ses logiciels creatifs"
            class="h-auto w-full drop-shadow-[0_18px_30px_rgba(109,33,57,0.18)]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
