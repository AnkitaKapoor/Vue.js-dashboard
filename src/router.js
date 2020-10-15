import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'
import Results from './views/Results.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    }

  ]
})