<script setup lang="ts">
import { computed, onUnmounted, shallowRef, watch } from 'vue'
import cookLogo from '../../assets/branding/logo.svg'

type SubNavItem = {
  label: string
  href: string
}

type NavItem = {
  label: string
  href: string
  section: string
  links: SubNavItem[]
  tone: string
  chipTone: string
  dotTone: string
}

const currentYear = computed(() =>
  new Intl.DateTimeFormat('fr-FR', { year: 'numeric' }).format(new Date()),
)

const navItems = shallowRef<NavItem[]>([
  {
    label: 'Accueil',
    href: '#',
    section: 'mise en bouche',
    links: [],
    tone: 'bg-orange text-on-orange border-orange/45',
    chipTone: 'bg-on-orange/12 border-on-orange/15 text-on-orange',
    dotTone: 'bg-rose',
  },
  {
    label: 'Entrées Signatures',
    href: '#',
    section: 'branding & identités',
    links: [
      { label: 'Crazy Crockery', href: '#' },
      { label: 'Atelier Marée', href: '#' },
      { label: 'La Ferme Urbaine', href: '#' },
      { label: 'Core Synergy', href: '#' },
    ],
    tone: 'bg-bleu-clair text-on-bleu-clair border-bleu-clair/45',
    chipTone: 'bg-on-bleu-clair/10 border-on-bleu-clair/15 text-on-bleu-clair',
    dotTone: 'bg-bordeau',
  },
  {
    label: 'Plats de Résistance',
    href: '#',
    section: 'grands projets & édition',
    links: [
      { label: 'Lu’zine', href: '#' },
      { label: 'Businessmen', href: '#' },
      { label: 'À Fleur de Nez', href: '#' },
      { label: 'Festival Aurillac', href: '#' },
      { label: 'Les Estivales du Gub', href: '#' },
      { label: 'Superdry x Massin', href: '#' },
    ],
    tone: 'bg-vert text-on-vert border-vert/45',
    chipTone: 'bg-on-vert/10 border-on-vert/15 text-on-vert',
    dotTone: 'bg-orange',
  },
  {
    label: 'Mignardises Business',
    href: '#',
    section: 'signalétique & newsletters',
    links: [
      { label: 'Kakémonos', href: '#' },
      { label: 'Newsletter Formation', href: '#' },
    ],
    tone: 'bg-rose text-on-rose border-rose/45',
    chipTone: 'bg-on-rose/10 border-on-rose/15 text-on-rose',
    dotTone: 'bg-orange',
  },
  {
    label: 'Boissons & Élixirs',
    href: '#',
    section: 'packaging & micro-contenu',
    links: [
      { label: 'Sans Émilion', href: '#' },
      { label: 'Vita Fresh', href: '#' },
      { label: 'Humeurs Liquides', href: '#' },
    ],
    tone: 'bg-bordeau text-on-bordeau border-bordeau/45',
    chipTone: 'bg-on-bordeau/10 border-on-bordeau/15 text-on-bordeau',
    dotTone: 'bg-bleu-clair',
  },
  {
    label: 'On se prend un café ?',
    href: '#',
    section: '',
    links: [],
    tone: 'bg-vert-fonce text-on-vert-fonce border-vert-fonce/45',
    chipTone: 'bg-on-vert-fonce/10 border-on-vert-fonce/15 text-on-vert-fonce',
    dotTone: 'bg-bleu-clair',
  },
])

const isMenuOpen = shallowRef(false)

function formatMenuLabel(label: string) {
  if (!label.includes('&')) {
    return { firstLine: label, secondLine: '' }
  }

  const [first = label, second = ''] = label.split('&')

  return {
    firstLine: first.trim(),
    secondLine: `& ${second.trim()}`,
  }
}

function isContactMenu(label: string) {
  return label === 'On se prend un café ?'
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, (open) => {
  if (typeof document === 'undefined') {
    return
  }

  document.body.style.overflow = open ? 'hidden' : ''
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-bordeau/15 bg-beige/92 backdrop-blur-md">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -left-10 top-0 h-24 w-24 rounded-full bg-bleu-clair/15 blur-2xl" />
      <div class="absolute right-0 top-0 h-24 w-24 rounded-full bg-orange/12 blur-2xl" />
    </div>

    <a
      href="#"
      class="group hidden xl:fixed xl:left-6 xl:top-4 xl:z-30 xl:inline-flex xl:items-center xl:gap-4 xl:transition-transform xl:duration-200 xl:hover:-rotate-1"
    >
      <span class="flex h-16 w-16 items-center justify-center text-bordeau">
        <img
          :src="cookLogo"
          alt="Logo Lucie Pires"
          class="h-11 w-auto transition-transform duration-200 group-hover:scale-105"
        />
      </span>
      <span class="flex flex-col">
        <span class="font-subtitle text-[2.2rem] leading-none text-bordeau">Lucie Pires</span>
        <span class="text-xs uppercase tracking-[0.28em] text-bordeau/65">
          portfolio {{ currentYear }}
        </span>
      </span>
    </a>

    <div class="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="relative">
        <div
          class="rounded-[2rem] border border-bordeau/15 bg-beige/88 px-4 py-4 shadow-[0_12px_30px_rgba(109,33,57,0.05)] lg:px-5"
        >
          <div class="flex items-center justify-between gap-4">
            <a
              href="#"
              class="group inline-flex items-center gap-4 transition-transform duration-200 hover:-rotate-1 xl:hidden"
            >
              <span class="flex h-14 w-14 items-center justify-center text-bordeau">
                <img
                  :src="cookLogo"
                  alt="Logo Lucie Pires"
                  class="h-9 w-auto transition-transform duration-200 group-hover:scale-105"
                />
              </span>
              <span class="flex flex-col">
                <span class="font-subtitle text-[1.9rem] leading-none text-bordeau"
                  >Lucie Pires</span
                >
                <span class="text-[0.65rem] uppercase tracking-[0.24em] text-bordeau/65">
                  portfolio {{ currentYear }}
                </span>
              </span>
            </a>

            <div class="hidden flex-1 lg:block" />

            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full border border-bordeau/20 bg-beige px-4 py-2 text-sm text-bordeau transition-transform duration-200 hover:-rotate-2 hover:bg-bleu-clair/40 md:hidden"
              :aria-expanded="isMenuOpen"
              aria-controls="site-nav-mobile"
              @click="toggleMenu"
            >
              <span class="font-subtitle text-lg leading-none">Menu</span>
              <span class="text-xs uppercase tracking-[0.25em]">
                {{ isMenuOpen ? 'Fermer' : 'Ouvrir' }}
              </span>
            </button>
          </div>

          <div class="mt-4 hidden items-center md:flex">
            <nav class="w-full" aria-label="Navigation principale">
              <ul class="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
                <li v-for="item in navItems" :key="item.label">
                  <div class="group relative h-full pb-5 -mb-5">
                    <a
                      :href="item.href"
                      class="block rounded-[1.7rem] border px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:rotate-[0.45deg] hover:shadow-[0_12px_28px_rgba(109,33,57,0.1)]"
                      :class="item.tone"
                    >
                      <div class="flex items-start justify-between gap-3">
                        <div>
                          <span
                            class="leading-none"
                            :class="
                              isContactMenu(item.label)
                                ? 'font-body text-[1.55rem] font-normal'
                                : 'font-subtitle text-[1.8rem]'
                            "
                            :style="isContactMenu(item.label) ? { fontWeight: '400' } : undefined"
                          >
                            <template v-if="item.label.includes('&')">
                              {{ formatMenuLabel(item.label).firstLine }}<br />
                              {{ formatMenuLabel(item.label).secondLine }}
                            </template>
                            <template v-else>
                              {{ item.label }}
                            </template>
                          </span>
                          <p
                            v-if="item.section"
                            class="mt-1 opacity-75"
                            :class="'text-[0.68rem] uppercase tracking-[0.28em]'"
                          >
                            <template v-if="item.section.includes('&')">
                              {{ formatMenuLabel(item.section).firstLine }}<br />
                              {{ formatMenuLabel(item.section).secondLine }}
                            </template>
                            <template v-else>
                              {{ item.section }}
                            </template>
                          </p>
                        </div>
                        <span
                          class="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125"
                          :class="item.dotTone"
                        />
                      </div>
                    </a>

                    <div
                      v-if="item.links.length"
                      class="absolute left-0 right-0 top-full z-20 h-6 bg-transparent"
                      aria-hidden="true"
                    />

                    <div
                      v-if="item.links.length"
                      class="pointer-events-none absolute left-0 right-0 top-[calc(100%+0.85rem)] z-30 rounded-[1.6rem] border bg-beige/98 p-3 opacity-0 shadow-[0_18px_40px_rgba(109,33,57,0.14)] transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
                      :class="item.tone"
                    >
                      <div class="flex flex-wrap gap-2">
                        <a
                          v-for="subItem in item.links"
                          :key="subItem.label"
                          :href="subItem.href"
                          class="rounded-full border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.16em] transition-transform duration-200 hover:-translate-y-0.5"
                          :class="item.chipTone"
                        >
                          {{ subItem.label }}
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <nav
        v-if="isMenuOpen"
        id="site-nav-mobile"
        class="fixed inset-x-4 top-4 z-40 max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-[2rem] border border-bordeau/15 bg-beige/95 p-4 pt-24 shadow-[0_18px_40px_rgba(109,33,57,0.16)] md:hidden"
        aria-label="Navigation mobile"
      >
        <button
          type="button"
          class="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-bordeau/15 bg-beige text-bordeau transition-transform duration-200 hover:rotate-90 hover:bg-bleu-clair/30"
          aria-label="Fermer le menu"
          @click="toggleMenu"
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

        <ul class="space-y-3">
          <li v-for="item in navItems" :key="item.label">
            <a :href="item.href" class="block rounded-[1.5rem] border px-4 py-4" :class="item.tone">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <span
                    class="leading-none"
                    :class="
                      isContactMenu(item.label)
                        ? 'font-body text-[1.45rem] font-normal'
                        : 'font-subtitle text-2xl'
                    "
                    :style="isContactMenu(item.label) ? { fontWeight: '400' } : undefined"
                  >
                    <template v-if="item.label.includes('&')">
                      {{ formatMenuLabel(item.label).firstLine }}<br />
                      {{ formatMenuLabel(item.label).secondLine }}
                    </template>
                    <template v-else>
                      {{ item.label }}
                    </template>
                  </span>
                  <p
                    v-if="item.section"
                    class="mt-1 opacity-75"
                    :class="'text-[0.7rem] uppercase tracking-[0.28em]'"
                  >
                    <template v-if="item.section.includes('&')">
                      {{ formatMenuLabel(item.section).firstLine }}<br />
                      {{ formatMenuLabel(item.section).secondLine }}
                    </template>
                    <template v-else>
                      {{ item.section }}
                    </template>
                  </p>
                </div>
                <span class="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full" :class="item.dotTone" />
              </div>

              <div v-if="item.links.length" class="mt-3 flex flex-wrap gap-2">
                <a
                  v-for="subItem in item.links"
                  :key="subItem.label"
                  :href="subItem.href"
                  class="rounded-full border px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.2em]"
                  :class="item.chipTone"
                >
                  {{ subItem.label }}
                </a>
              </div>

              <div
                v-else
                class="mt-3 border-t border-current/15 pt-3 text-[0.7rem] uppercase tracking-[0.24em] opacity-75"
              >
                {{
                  item.label === 'Accueil'
                    ? 'hero, manifesto, categories'
                    : 'mail, instagram, linkedin'
                }}
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
