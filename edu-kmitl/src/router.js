import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import register from './views/register.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Tobe',
      name: 'Tobe',
      component: () => import('./views/Tobe.vue')
    },
    {
      path: '/meetup',
      name: 'meetup',
      component: () => import('./views/meetup.vue')
    },
    {
      path: '/myclassroom',
      name: 'myclassroom',
      component: () => import('./views/myclassroom.vue')
    },
    {
      path: '/viewcourse',
      name: 'viewcourse',
      component: () => import('./views/viewcourse.vue')
    },
    {
      path: '/viewmeetup',
      name: 'viewmeetup',
      component: () => import('./views/viewmeetup.vue')
    },
    {
      path: '/viewvideo',
      name: 'viewvideo',
      component: () => import('./views/viewvideo.vue')
    },
    {
      path: '/managemeetup',
      name: 'managemeetup',
      component: () => import('./views/managemeetup.vue')
    },
    {
      path: '/createmeetup',
      name: 'createmeetup',
      component: () => import('./views/createmeetup.vue')
    }
  ]
})
