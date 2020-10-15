import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chess from '../views/Chess.vue'
import Nba from '../views/Nba.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chess',
    name: 'Chess',
    component: Chess
  },
  {
    path: '/nba',
    name: 'Nba',
    component: Nba
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
