import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Repo from '../views/Repo.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Docs from '../views/Docs.vue'
import Explore from '../views/Explore.vue'
import Issues from '../views/Issues.vue'
import Marketplace from '../views/Marketplace.vue'
import Support from '../views/Support.vue'
import Services from '../views/Services.vue'
import Security from '../views/Security.vue'
import PullRequests from '../views/PullRequests.vue'
import Pricing from '../views/Pricing.vue'
import Status from '../views/Status.vue'
import StartPage from '../views/StartPage.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import ResetPassword from '../views/ResetPassword.vue'
import Main from '../views/Main.vue'
import RepoRegister from '../views/RepoRegister.vue'

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
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/security',
    name: 'Security',
    component: Security
  },
  {
    path: '/pr',
    name: 'PullRequests',
    component: PullRequests
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/market',
    name: 'Marketplace',
    component: Marketplace
  },
  {
    path: '/issues',
    name: 'Issues',
    component: Issues
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/start',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/reset',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/repo/register',
    name: 'RepoRegister',
    component: RepoRegister
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
