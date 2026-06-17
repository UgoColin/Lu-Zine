<script setup lang="ts">
import { shallowRef, useTemplateRef } from 'vue'
import { useEntranceMotion } from '../../composables/useEntranceMotion'

type ProjectFact = {
  label: string
  tone: string
}

type Ingredient = {
  amount: string
  label: string
  note: string
}

type Step = {
  title: string
  description: string
}

const projectFacts = shallowRef<ProjectFact[]>([
  { label: '1 jour de cuisson', tone: 'bg-orange text-on-orange border-orange/35' },
  { label: 'Projet e-artsup', tone: 'bg-bordeau text-on-bordeau border-bordeau/35' },
  { label: 'Solo aux fourneaux', tone: 'bg-rose text-on-rose border-rose/40' },
  { label: 'Identité, logo, packaging', tone: 'bg-vert text-on-vert border-vert/40' },
])

const ingredients = shallowRef<Ingredient[]>([
  {
    amount: '500g',
    label: "d'Illustrator",
    note: 'pour le tracé irrégulier',
  },
  {
    amount: '3 c.à.s',
    label: 'de Photoshop',
    note: 'pour les textures de céramique',
  },
])

const steps = shallowRef<Step[]>([
  {
    title: 'Le concassage',
    description:
      "J'ai commencé par dessiner des formes de vaisselle cassée et des motifs abstraits pour sortir de la perfection habituelle du luxe.",
  },
  {
    title: 'Le mélange',
    description:
      "J'ai construit un système visuel où les éléments peuvent s'accumuler. Le logo lui-même est pensé pour bouger et s'adapter selon les supports.",
  },
  {
    title: 'Le dressage',
    description:
      "J'ai mis l'identité en situation sur des boîtes de transport et des étiquettes minimalistes, pour que le contenant soit aussi fou que le contenu.",
  },
])

const typefaces = shallowRef(['Darumadrop One', 'Kindergarten'])
const paletteDots = shallowRef(['#ed6fd5', '#fbb01b', '#fcffff', '#5053bb', '#68312a'])

const sectionRef = useTemplateRef<HTMLElement>('introSection')
const { isVisible } = useEntranceMotion(sectionRef, {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.16,
})
</script>

<template>
  <section ref="introSection" class="relative py-4 sm:py-6">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-[5%] top-8 h-36 w-36 rounded-full bg-bleu-clair/30 blur-3xl" />
      <div class="absolute right-[8%] top-12 h-40 w-40 rounded-full bg-orange/10 blur-3xl" />
      <div class="absolute bottom-10 left-1/3 h-28 w-28 rounded-full bg-rose/14 blur-3xl" />
    </div>

    <div class="relative grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_24rem]">
      <section
        class="motion-enter relative overflow-hidden rounded-[2.9rem] border border-bleu-clair/45 bg-bleu-clair/78 px-6 py-7 text-on-bleu-clair shadow-[0_26px_65px_rgba(109,33,57,0.08)] sm:px-8 sm:py-9 lg:px-10 lg:py-10"
        :class="{ 'motion-enter-active': isVisible }"
        style="--enter-delay: 80ms; --enter-y: 26px; --enter-duration: 840ms"
      >
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute left-10 top-24 h-24 w-24 rounded-full bg-beige/30 blur-2xl" />
          <div class="absolute bottom-10 right-24 h-28 w-28 rounded-full bg-orange/16 blur-2xl" />
        </div>

        <div class="absolute inset-y-0 right-0 hidden w-5 bg-bordeau/90 xl:block" />

        <div>
          <p class="text-xs uppercase tracking-[0.34em] text-bordeau/60">Entrees Signatures</p>
          <h1
            class="mt-4 max-w-4xl font-title text-[3.5rem] leading-[0.88] text-bordeau sm:text-[4.5rem] lg:text-[5.7rem]"
          >
            Crazy Crockery
          </h1>
        </div>

        <div class="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(fact, index) in projectFacts"
                :key="fact.label"
                class="motion-enter rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.24em] shadow-[0_8px_18px_rgba(109,33,57,0.05)]"
                :class="[fact.tone, { 'motion-enter-active': isVisible }]"
                :style="{
                  '--enter-delay': `${150 + index * 65}ms`,
                  '--enter-y': '12px',
                  '--enter-duration': '580ms',
                }"
              >
                {{ fact.label }}
              </span>
            </div>

            <p
              class="motion-enter mt-6 max-w-3xl text-[1.6rem] leading-[1.08] text-bordeau sm:text-[2rem] lg:text-[2rem]"
              :class="{ 'motion-enter-active': isVisible }"
              style="--enter-delay: 180ms; --enter-y: 18px; --enter-duration: 700ms"
            >
              Avec Crazy Crockery, j'avais envie d'arrêter de courir après des services de table
              parfaits et assortis. Le projet célèbre le
              <span class="font-subtitle text-orange"> mix & match</span>, le désordre organisé et
              la vaisselle qui a de la gueule.
            </p>

            <p
              class="motion-enter mt-5 max-w-3xl text-xl leading-relaxed text-bordeau sm:text-2xl"
              :class="{ 'motion-enter-active': isVisible }"
              style="--enter-delay: 250ms; --enter-y: 18px; --enter-duration: 720ms"
            >
              Pour le logo, j'ai cherché quelque chose de brut, presque enfantin, qui évoque la
              cassure et l'assemblage. C'est une marque qui ne se prend pas au sérieux, mais qui
              soigne très précisément son look.
            </p>
          </div>

          <aside
            class="motion-enter rounded-[2rem] border border-bordeau/12 bg-beige/72 p-4 shadow-[0_12px_28px_rgba(109,33,57,0.05)]"
            :class="{ 'motion-enter-active': isVisible }"
            style="--enter-delay: 220ms; --enter-y: 18px; --enter-duration: 700ms"
          >
            <p class="text-[0.68rem] uppercase tracking-[0.28em] text-bordeau/55">Typographies</p>
            <ul class="mt-4 space-y-3 text-bordeau">
              <li
                v-for="(fontName, index) in typefaces"
                :key="fontName"
                class="motion-enter rounded-[1.2rem] border border-bordeau/10 bg-bleu-clair/45 px-3 py-3"
                :class="{ 'motion-enter-active': isVisible }"
                :style="{
                  '--enter-delay': `${300 + index * 80}ms`,
                  '--enter-y': '12px',
                  '--enter-duration': '560ms',
                }"
              >
                <p class="font-subtitle text-[1.55rem] leading-none">{{ fontName }}</p>
              </li>
            </ul>

            <div class="mt-5 border-t border-bordeau/10 pt-4">
              <p class="text-[0.68rem] uppercase tracking-[0.28em] text-bordeau/55">Palette</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="(dot, index) in paletteDots"
                  :key="index"
                  class="motion-enter h-12 w-12 rounded-full border border-bordeau/10"
                  :class="{ 'motion-enter-active': isVisible }"
                  :style="{
                    backgroundColor: dot,
                    '--enter-delay': `${420 + index * 65}ms`,
                    '--enter-y': '10px',
                    '--enter-duration': '540ms',
                  }"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <aside class="grid gap-6">
        <section
          class="motion-enter rounded-[2.5rem] border border-bordeau/12 bg-beige/88 p-5 shadow-[0_20px_48px_rgba(109,33,57,0.06)] sm:p-6"
          :class="{ 'motion-enter-active': isVisible }"
          style="--enter-delay: 160ms; --enter-y: 24px; --enter-duration: 800ms"
        >
          <div>
            <h2 class="font-title text-[2.8rem] leading-[0.9] text-bordeau sm:text-[3.2rem]">
              Ingrédients
            </h2>
          </div>

          <div class="mt-6 space-y-3">
            <article
              v-for="(ingredient, index) in ingredients"
              :key="ingredient.label"
              class="motion-enter border-t border-bordeau/12 px-1 py-4 text-bordeau first:border-t-0 first:pt-0"
              :class="{ 'motion-enter-active': isVisible }"
              :style="{
                '--enter-delay': `${240 + index * 85}ms`,
                '--enter-y': '14px',
                '--enter-duration': '620ms',
              }"
            >
              <p class="text-[0.68rem] uppercase tracking-[0.26em] text-bordeau/60">
                {{ ingredient.amount }}
              </p>
              <p class="mt-2 font-subtitle text-[1.8rem] leading-[0.94]">{{ ingredient.label }}</p>
              <p class="mt-3 text-lg leading-snug">{{ ingredient.note }}</p>
            </article>
          </div>
        </section>

        <section
          class="motion-enter rounded-[2.5rem] border border-bordeau/12 bg-bordeau px-5 py-6 text-on-bordeau shadow-[0_18px_42px_rgba(109,33,57,0.14)] sm:px-6"
          :class="{ 'motion-enter-active': isVisible }"
          style="--enter-delay: 260ms; --enter-y: 24px; --enter-duration: 760ms"
        >
          <p class="text-xs uppercase tracking-[0.34em] opacity-70">La note de la cheffe</p>
          <p class="mt-4 font-subtitle text-[2rem] leading-[0.98] sm:text-[2.3rem]">
            Le plus dur, c'était de trouver l'équilibre entre le trop
            <span class="text-bleu-clair">et le juste ce qu'il faut.</span>
          </p>
          <p class="mt-4 text-xl leading-relaxed text-beige">
            Il fallait que tout cela ressemble à un joyeux bazar, tout en restant
            parfaitement professionnel.
          </p>
        </section>
      </aside>
    </div>

    <section
      class="motion-enter relative mt-6 overflow-hidden rounded-[2.8rem] border border-bordeau/12 bg-beige/88 p-5 shadow-[0_20px_48px_rgba(109,33,57,0.06)] sm:p-6 lg:p-7"
      :class="{ 'motion-enter-active': isVisible }"
      style="--enter-delay: 320ms; --enter-y: 22px; --enter-duration: 840ms"
    >
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.34em] text-bordeau/55">La préparation</p>
          <h2 class="mt-3 font-title text-[3rem] leading-[0.9] text-bordeau sm:text-[3.8rem]">
            Comment j'ai dressé le projet.
          </h2>
        </div>
      </div>

      <div class="mt-6 grid gap-4 xl:grid-cols-3">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="motion-enter rounded-[2rem] border border-bordeau/12 bg-bleu-clair/30 px-5 py-5 text-bordeau shadow-[0_10px_22px_rgba(109,33,57,0.04)]"
          :class="{ 'motion-enter-active': isVisible }"
          :style="{
            '--enter-delay': `${380 + index * 90}ms`,
            '--enter-y': '16px',
            '--enter-duration': '660ms',
          }"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-[0.68rem] uppercase tracking-[0.26em] text-bordeau/55">
                Étape {{ index + 1 }}
              </p>
              <h3 class="mt-3 font-subtitle text-[2rem] leading-[0.94]">{{ step.title }}</h3>
            </div>

            <span
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bordeau text-on-bordeau text-sm"
            >
              {{ index + 1 }}
            </span>
          </div>

          <p class="mt-4 text-xl leading-relaxed">
            {{ step.description }}
          </p>
        </article>
      </div>
    </section>
  </section>
</template>
