<script setup lang="ts">
import { shallowRef } from 'vue'

type ContactLink = {
  label: string
  href: string
  note: string
  tone: string
}

const contactLinks = shallowRef<ContactLink[]>([
  {
    label: 'Ecrire un mail',
    href: 'mailto:luciepirescontact@gmail.com',
    note: 'luciepirescontact@gmail.com',
    tone: 'bg-bleu-clair text-on-bleu-clair border-bleu-clair/50',
  },
  {
    label: 'LinkedIn',
    href: '#',
    note: 'lien dummy',
    tone: 'bg-orange text-on-orange border-orange/50',
  },
  {
    label: 'Instagram',
    href: '#',
    note: 'lien dummy',
    tone: 'bg-rose text-on-rose border-rose/50',
  },
])
</script>

<template>
  <footer class="relative mt-20 overflow-hidden bg-bordeau text-on-bordeau">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-0 top-8 h-64 w-64 rounded-full bg-bleu-clair/15 blur-3xl" />
      <div class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange/15 blur-3xl" />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div
        class="overflow-hidden rounded-[2.8rem] border border-beige/15 bg-beige/96 text-on-beige shadow-[0_30px_80px_rgba(34,12,19,0.28)]"
      >
        <div class="grid gap-0 lg:grid-cols-[minmax(0,1.2fr)_17rem]">
          <div class="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div class="absolute left-0 top-0 hidden h-full w-5 bg-bleu-clair lg:block" />

            <div class="max-w-3xl">
              <p class="text-xs uppercase tracking-[0.35em] text-bordeau/65">Reserver une table</p>
              <h2 class="mt-3 font-title text-5xl leading-[0.9] text-bordeau sm:text-6xl">
                Le service se termine ici,
                <span class="block text-orange">mais la cuisine reste ouverte.</span>
              </h2>
              <p class="mt-5 max-w-2xl text-2xl leading-snug text-bordeau">
                Envie de collaborer en brigade ou de discuter design ? Reservons un premier echange
                autour d'un projet, d'une image de marque ou d'une mise en page a faire lever.
              </p>
            </div>

            <div class="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <a
                v-for="link in contactLinks"
                :key="link.label"
                :href="link.href"
                class="group rounded-[1.8rem] border px-5 py-5 transition-transform duration-200 hover:-translate-y-1 hover:rotate-[-0.5deg]"
                :class="link.tone"
              >
                <p class="font-subtitle text-2xl leading-none">{{ link.label }}</p>
                <p class="mt-3 text-sm uppercase tracking-[0.2em] opacity-75">
                  {{ link.note }}
                </p>
              </a>
            </div>

            <div class="mt-8 grid gap-8 border-t border-bordeau/15 pt-8 md:grid-cols-3">
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-bordeau/60">Localisation</p>
                <p class="mt-3 font-subtitle text-3xl text-bordeau">Capinghem</p>
                <p class="mt-1 text-lg">Lille, France</p>
              </div>

              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-bordeau/60">Disponibilite</p>
                <p class="mt-3 font-subtitle text-3xl text-bordeau">Cuisine ouverte</p>
                <p class="mt-1 text-lg">Branding, edition, packaging, digital</p>
              </div>

              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-bordeau/60">Ambiance</p>
                <p class="mt-3 font-subtitle text-3xl text-bordeau">En papier et en pixels</p>
                <p class="mt-1 text-lg">Des systemes visuels sensibles et rigoureux</p>
              </div>
            </div>
          </div>

          <div
            class="relative overflow-hidden border-t border-bordeau/15 bg-bordeau px-6 py-8 text-on-bordeau lg:border-l lg:border-t-0"
          >
            <div
              class="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full border border-bleu-clair/30"
            />
            <p class="text-xs uppercase tracking-[0.35em] opacity-70">Derniere page</p>
            <p class="mt-4 font-subtitle text-4xl">Au menu des futures collaborations</p>
            <ul class="mt-6 space-y-4 text-lg leading-snug">
              <li>Direction artistique 360°</li>
              <li>Design de packaging et volume</li>
              <li>Ecosystemes digitaux et social media</li>
            </ul>

            <div class="mt-10 rounded-[2rem] border border-bleu-clair/25 bg-bleu-clair/10 p-5">
              <p class="text-sm uppercase tracking-[0.28em] opacity-70">Signature de fin</p>
              <p class="mt-3 text-2xl leading-tight">
                La creation graphique ne s'explique pas,
                <span class="text-bleu-clair">elle se cuisine.</span>
              </p>
            </div>

            <p class="mt-12 text-xs uppercase tracking-[0.35em] opacity-60">
              Portfolio Lucie Pires · footer dummy v1
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
