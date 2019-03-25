import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import_ = component => () => import('@/views/' + component + '/index.vue')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: _import_('Home')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: _import_('Detail')
    },
    {
      path: '/film',
      name: 'film',
      component: _import_('Film')
    }
  ]
})