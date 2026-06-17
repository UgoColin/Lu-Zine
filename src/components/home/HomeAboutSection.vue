<script setup lang="ts">
import { shallowRef, useTemplateRef } from 'vue'
import { useEntranceMotion } from '../../composables/useEntranceMotion'

type Ingredient = {
  amount: string
  label: string
  note: string
  tone: string
}

const ingredients = shallowRef<Ingredient[]>([
  {
    amount: '500g',
    label: "d'Illustrator",
    note: 'pour donner du caractère à l\'identité',
    tone: 'bg-bleu-clair text-on-bleu-clair border-bleu-clair/45',
  },
  {
    amount: '1 dose',
    label: 'de stratégie UI/UX',
    note: 'afin que le beau sache aussi guider',
    tone: 'bg-orange text-on-orange border-orange/45',
  },
  {
    amount: '1 poignée',
    label: 'de branding & packaging',
    note: 'pour faire tenir un univers dans la main',
    tone: 'bg-vert text-on-vert border-vert/45',
  },
  {
    amount: '1 pincée',
    label: 'de calligraphie faite main',
    note: 'pour laisser de l\'air et de l\'accident heureux',
    tone: 'bg-rose text-on-rose border-rose/45',
  },
])

const sectionRef = useTemplateRef<HTMLElement>('aboutSection')
const { isVisible } = useEntranceMotion(sectionRef, {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.18,
})
</script>

<template>
  <section ref="aboutSection" class="relative py-6 sm:py-8">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-[8%] top-10 h-36 w-36 rounded-full bg-bordeau/8 blur-3xl" />
      <div class="absolute right-[14%] top-20 h-32 w-32 rounded-full bg-vert/15 blur-3xl" />
      <div class="absolute bottom-8 right-[28%] h-28 w-28 rounded-full bg-orange/10 blur-3xl" />
    </div>

    <div class="relative grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]">
      <article
        class="motion-enter relative overflow-hidden rounded-[2.7rem] border border-bordeau/15 bg-beige/88 px-6 py-8 shadow-[0_22px_60px_rgba(109,33,57,0.07)] sm:px-8 sm:py-10 lg:px-10"
        :class="{ 'motion-enter-active': isVisible }"
        style="--enter-delay: 80ms; --enter-y: 26px; --enter-duration: 820ms"
      >
        <div class="absolute right-5 top-5 rounded-full border border-bordeau/15 bg-beige px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-bordeau/60">
          Arrière-cuisine
        </div>

        <div class="absolute bottom-0 left-0 hidden h-full w-5 bg-bordeau lg:block" />

        <p class="text-xs uppercase tracking-[0.34em] text-bordeau/55">Présentation de la cheffe</p>
        <h2
          class="mt-4 max-w-4xl font-title text-[3rem] leading-[0.9] text-bordeau sm:text-[4rem] lg:text-[4.8rem]"
        >
          Je compose
          <span class="block text-orange">autant avec la matière qu'avec le sens.</span>
        </h2>

        <div class="mt-8">
          <div class="space-y-5 text-xl leading-relaxed text-bordeau sm:text-2xl">
            <p
              class="motion-enter"
              :class="{ 'motion-enter-active': isVisible }"
              style="--enter-delay: 180ms; --enter-y: 16px; --enter-duration: 680ms"
            >
              Un brief client est une saveur brute qu'il faut savoir relever. Je construis des
              identités visuelles, des mises en page, des packagings et des expériences digitales
              avec une même exigence: trouver le bon équilibre entre intuition, lisibilité et
              caractère.
            </p>

            <p
              class="motion-enter max-w-3xl"
              :class="{ 'motion-enter-active': isVisible }"
              style="--enter-delay: 250ms; --enter-y: 16px; --enter-duration: 700ms"
            >
              Mon terrain de jeu va du papier au pixel, avec un goût marqué pour les systèmes
              visuels sensibles, la typographie qui raconte quelque chose, et les projets qui ont
              une vraie voix plutôt qu'une simple belle surface.
            </p>
          </div>
        </div>

        <div
          class="motion-enter mt-8 rounded-[2rem] border border-bordeau/12 bg-bordeau px-5 py-5 text-on-bordeau shadow-[0_16px_38px_rgba(109,33,57,0.14)] sm:px-6"
          :class="{ 'motion-enter-active': isVisible }"
          style="--enter-delay: 320ms; --enter-y: 18px; --enter-duration: 760ms"
        >
          <p class="text-xs uppercase tracking-[0.34em] opacity-70">Note de la cheffe</p>
          <p class="mt-4 max-w-4xl font-subtitle text-[2rem] leading-[0.98] sm:text-[2.45rem]">
            Une typographie est une épice.
            <span class="text-bleu-clair">Un détail juste peut transformer tout l'équilibre d'un projet.</span>
          </p>
        </div>
      </article>

      <aside class="relative">
        <div
          class="motion-enter relative rounded-[2.8rem] border border-bordeau/15 bg-beige/82 p-5 shadow-[0_20px_50px_rgba(109,33,57,0.06)] sm:p-6"
          :class="{ 'motion-enter-active': isVisible }"
          style="--enter-delay: 140ms; --enter-y: 28px; --enter-duration: 820ms"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.34em] text-bordeau/55">Ingrédients</p>
              <h3
                class="mt-3 font-title text-[2.8rem] leading-[0.9] text-bordeau sm:text-[3.4rem]"
              >
                Ce que je mets dans le plat.
              </h3>
            </div>

            <div class="rounded-full border border-orange/20 bg-orange/12 px-3 py-2 text-[0.62rem] uppercase tracking-[0.26em] text-orange">
              recette maison
            </div>
          </div>

          <div class="mt-6 space-y-3">
            <article
              v-for="(ingredient, index) in ingredients"
              :key="ingredient.label"
              class="motion-enter rounded-[1.9rem] border px-4 py-4 transition-transform duration-200 hover:translate-x-1 sm:px-5"
              :class="[ingredient.tone, { 'motion-enter-active': isVisible }]"
              :style="{
                '--enter-delay': `${250 + index * 85}ms`,
                '--enter-y': '16px',
                '--enter-duration': '640ms',
              }"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-[0.68rem] uppercase tracking-[0.26em] opacity-70">
                    {{ ingredient.amount }}
                  </p>
                  <p class="mt-2 font-subtitle text-[1.9rem] leading-[0.92]">
                    {{ ingredient.label }}
                  </p>
                </div>

                <span class="mt-1 h-3 w-3 shrink-0 rounded-full bg-current opacity-75" />
              </div>

              <p class="mt-3 max-w-xs text-lg leading-snug opacity-85">
                {{ ingredient.note }}
              </p>
            </article>
          </div>

          <div
            class="motion-enter mt-6 rounded-[1.9rem] border border-vert-fonce/18 bg-vert-fonce px-5 py-5 text-on-vert-fonce"
            :class="{ 'motion-enter-active': isVisible }"
            style="--enter-delay: 620ms; --enter-y: 16px; --enter-duration: 700ms"
          >
            <p class="text-xs uppercase tracking-[0.3em] opacity-70">Depuis Capinghem, près de Lille</p>
            <p class="mt-3 text-xl leading-snug">
              Pour des projets sensibles, joyeux, structurés et pas lisses.
            </p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>
