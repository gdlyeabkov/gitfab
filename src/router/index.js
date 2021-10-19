import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Repo from '../views/Repo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/repo',
    name: 'Repo',
    component: Repo
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
