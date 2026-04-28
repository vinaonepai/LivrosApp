import { createRouter, createWebHistory } from '@ionic/vue-router'

import StartPage from '../views/StartPage.vue'
import LoginPage from '../views/LoginPage.vue'
import CadastroPage from '../views/CadastroPage.vue'
import RecuperarPage from '../views/RecuperarPage.vue'
import HomePage from '../views/HomePage.vue'
import DetalhesPage from '../views/DetalhesPage.vue'
import ConfirmacaoPage from '../views/ConfirmacaoPage.vue'
import FavoritosPage from '../views/FavoritosPage.vue'

const routes = [
  { path: '/', component: StartPage },
  { path: '/login', component: LoginPage },
  { path: '/cadastro', component: CadastroPage },
  { path: '/recuperar', component: RecuperarPage },
  { path: '/home', component: HomePage },
  { path: '/detalhes/:id', component: DetalhesPage },
  { path: '/confirmacao', component: ConfirmacaoPage },
  { path: '/favoritos', component: FavoritosPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router