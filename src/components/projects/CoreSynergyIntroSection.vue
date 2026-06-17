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
}

type Step = {
  title: string
  description: string
}

const projectFacts = shallowRef<ProjectFact[]>([
  { label: '1 semaine de cuisson', tone: 'bg-[#e5ab2f] text-bordeau border-[#e5ab2f]/40' },
  { label: 'Projet e-artsup', tone: 'bg-bordeau text-on-bordeau border-bordeau/35' },
  { label: 'En brigade', tone: 'bg-bleu-clair text-on-bleu-clair border-bleu-clair/40' },
  {
    label: 'Co-direction artistique, UX/UI, print',
    tone: 'bg-beige text-on-beige border-bordeau/15',
  },
])

const ingredients = shallowRef<Ingredient[]>([
  { amount: '3 c.à.s', label: "d'Illustrator" },
  { amount: '1 c.à.c', label: 'de Figma' },
])

const steps = shallowRef<Step[]>([
  {
    title: "L'infiltration",
    description:
      "Développement collectif du logo Core Synergy. Nous avons joué sur l'effet de glitch et de décalage de blocs pour symboliser visuellement la fusion des deux entités.",
  },
  {
    title: 'Le script imprimé',
    description:
      "Conception de l'affiche et du kakémono extérieur avec un fond composé de véritables lignes de commande. L'information textuelle est structurée en blocs asymétriques, comme sur une interface de hacker.",
  },
  {
    title: "L'ergonomie de bord",
    description:
      "Création des interfaces mobiles du sommet avec un soin particulier porté à la clarté du catalogue de sessions et à la zone du badge d'accès destinée au scan rapide sur place.",
  },
  {
    title: 'Le dressage de la brigade',
    description:
      "Déclinaison graphique sur les t-shirts du staff avec une typographie pixel affirmée, des symboles de code et des blocs colorés pour identifier l'équipe d'un coup d'œil.",
  },
])

const logoNotes = shallowRef(['Logotype collectif Core Synergy'])
const paletteDots = shallowRef(['#8c79b6', '#4bb37e', '#15b6c6', '#394b9b', '#ffffff'])

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
      <div class="absolute bottom-10 left-1/3 h-28 w-28 rounded-full bg-bleu-clair/14 blur-3xl" />
    </div>

    <div class="relative grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_24rem]">
      <section
        class="motion-enter relative overflow-hidden rounded-[2.9rem] border border-bleu-clair/45 bg-bleu-clair/78 px-6 py-7 text-on-bleu-clair shadow-[0_26px_65px_rgba(109,33,57,0.08)] sm:px-8 sm:py-9 lg:px-10 lg:py-10"
        :class="{ 'motion-enter-active': isVisible }"
        style="--enter-delay: 80ms; --enter-y: 26px; --enter-duration: 840ms"
      >
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute left-10 top-24 h-24 w-24 rounded-full bg-beige/55 blur-2xl" />
          <div class="absolute bottom-10 right-24 h-28 w-28 rounded-full bg-orange/16 blur-2xl" />
        </div>

        <div class="absolute inset-y-0 right-0 hidden w-5 bg-bordeau/90 xl:block" />

        <div>
          <p class="text-xs uppercase tracking-[0.34em] text-bordeau/60">Entrées Signatures</p>
          <h1
            class="mt-4 max-w-4xl font-title text-[3.3rem] leading-[0.88] text-bordeau sm:text-[4.2rem] lg:text-[5.2rem]"
          >
            Core Synergy
            <span class="block text-orange">Decathlon x Adeo</span>
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
              Le Dev Summit 2026 d'ADEO accueillait un invité de marque:
              <span class="font-subtitle text-orange">Decathlon Digital.</span>
            </p>

            <p
              class="motion-enter mt-5 max-w-3xl text-xl leading-relaxed text-bordeau sm:text-2xl"
              :class="{ 'motion-enter-active': isVisible }"
              style="--enter-delay: 250ms; --enter-y: 18px; --enter-duration: 720ms"
            >
              Le brief exigeait une identité visuelle immersive autour du thème Hack / Core
              Synergy. L'objectif était de s'approprier l'esthétique du code informatique, avec ses
              lignes de commande, ses pixels alternés et ses curseurs rétro, tout en concevant un
              écosystème fonctionnel, lisible et moderne pour une communauté de développeurs.
            </p>
          </div>

          <aside
            class="motion-enter rounded-[2rem] border border-bordeau/12 bg-beige/72 p-4 shadow-[0_12px_28px_rgba(109,33,57,0.05)]"
            :class="{ 'motion-enter-active': isVisible }"
            style="--enter-delay: 220ms; --enter-y: 18px; --enter-duration: 700ms"
          >
            <p class="text-[0.68rem] uppercase tracking-[0.28em] text-bordeau/55">Logotype</p>
            <ul class="mt-4 space-y-3 text-bordeau">
              <li
                v-for="(note, index) in logoNotes"
                :key="note"
                class="motion-enter rounded-[1.2rem] border border-bordeau/10 bg-bleu-clair/45 px-3 py-3"
                :class="{ 'motion-enter-active': isVisible }"
                :style="{
                  '--enter-delay': `${300 + index * 80}ms`,
                  '--enter-y': '12px',
                  '--enter-duration': '560ms',
                }"
              >
                <p class="font-subtitle text-[1.55rem] leading-none">{{ note }}</p>
              </li>
            </ul>

            <div class="mt-5 border-t border-[#121c69]/10 pt-4">
              <p class="text-[0.68rem] uppercase tracking-[0.28em] text-bordeau/55">Palette</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="(dot, index) in paletteDots"
                  :key="index"
                  class="motion-enter h-12 w-12 rounded-full border border-bordeau/10"
                  :class="{ 'motion-enter-active': isVisible }"
                  :style="{
                    backgroundColor: dot,
                    '--enter-delay': `${420 + index * 55}ms`,
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
            </article>
          </div>
        </section>

        <section
          class="motion-enter rounded-[2.5rem] border border-bordeau/12 bg-bordeau px-5 py-6 text-on-bordeau shadow-[0_18px_42px_rgba(109,33,57,0.14)] sm:px-6"
          :class="{ 'motion-enter-active': isVisible }"
          style="--enter-delay: 260ms; --enter-y: 24px; --enter-duration: 760ms"
        >
          <p class="text-xs uppercase tracking-[0.34em] opacity-70">La note de la cheffe</p>
          <p class="mt-4 font-subtitle text-[2rem] leading-[0.98] text-orange sm:text-[2.3rem]">
            L'impact devait être brut,
            <span class="text-bleu-clair">mais l'expérience devait rester nette et fonctionnelle.</span>
          </p>
          <p class="mt-4 text-xl leading-relaxed text-beige">
            Toute la difficulté était de faire cohabiter un imaginaire hacker avec une vraie
            lisibilité événementielle.
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
            Comment j'ai monté le système.
          </h2>
        </div>
      </div>

      <div class="mt-6 grid gap-4 xl:grid-cols-2">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="motion-enter rounded-[2rem] border border-bordeau/12 bg-bleu-clair/24 px-5 py-5 text-bordeau shadow-[0_10px_22px_rgba(109,33,57,0.04)]"
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
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bordeau text-sm text-on-bordeau"
            >
              {{ index + 1 }}
            </span>
          </div>

          <p class="mt-4 text-lg leading-relaxed">
            {{ step.description }}
          </p>
        </article>
      </div>
    </section>
  </section>
</template>
