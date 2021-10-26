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
import Settings from '../views/Settings.vue'
import Codespaces from '../views/Codespaces.vue'
import OrganizationsPlan from '../views/OrganizationsPlan.vue'
import Notifications from '../views/Notifications.vue'
import RepoImporter from '../views/RepoImporter.vue'
import GistRegister from '../views/GistRegister.vue'
import ProjectRegister from '../views/ProjectRegister.vue'
import Team from '../views/Team.vue'
import Enterprise from '../views/Enterprise.vue'
import Help from '../views/Help.vue'
import Upgrade from '../views/Upgrade.vue'

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
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/codespaces',
    name: 'Codespaces',
    component: Codespaces
  },
  {
    path: '/organizations',
    name: 'OrganizationsPlan',
    component: OrganizationsPlan
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/repo/import',
    name: 'RepoImporter',
    component: RepoImporter
  },
  {
    path: '/gist/register',
    name: 'GistRegister',
    component: GistRegister
  },
  {
    path: '/project/register',
    name: 'ProjectRegister',
    component: ProjectRegister
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    component: Enterprise
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/upgrade',
    name: 'Upgrade',
    component: Upgrade
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
