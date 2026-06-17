import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AtelierMareeView from '../views/projects/AtelierMareeView.vue'
import CoreSynergyView from '../views/projects/CoreSynergyView.vue'
import CrazyCrockeryView from '../views/projects/CrazyCrockeryView.vue'
import LaFermeUrbaineView from '../views/projects/LaFermeUrbaineView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projets/crazy-crockery',
      name: 'project-crazy-crockery',
      component: CrazyCrockeryView,
    },
    {
      path: '/projets/atelier-maree',
      name: 'project-atelier-maree',
      component: AtelierMareeView,
    },
    {
      path: '/projets/la-ferme-urbaine',
      name: 'project-la-ferme-urbaine',
      component: LaFermeUrbaineView,
    },
    {
      path: '/projets/core-synergy',
      name: 'project-core-synergy',
      component: CoreSynergyView,
    },
  ],
})

export default router
