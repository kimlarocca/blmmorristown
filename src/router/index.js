import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/404.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    alias: '/Home',
    meta: {
      title: 'Black Lives Matter Morristown',
      description: 'The website of the Morristown NJ chapter for Black Lives Matter.',
      layout: 'default'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'Black Lives Matter Morristown | About',
      description: 'The website of the Morristown NJ chapter for Black Lives Matter.',
      layout: 'default'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/RealTalkMatters',
    name: 'RealTalkMatters',
    meta: {
      title: 'Black Lives Matter Morristown | Real Talk Matters',
      description: 'The website of the Morristown NJ chapter for Black Lives Matter.',
      layout: 'default'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "RealTalkMatters" */ '../views/RealTalkMatters.vue')
  },
  {
    path: '/Resources',
    name: 'Resources',
    meta: {
      title: 'Black Lives Matter Morristown | Resources',
      description: 'The website of the Morristown NJ chapter for Black Lives Matter.',
      layout: 'default'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Resources" */ '../views/Resources.vue')
  },
  {
    path: '/Actions',
    name: 'Actions',
    meta: {
      title: 'Black Lives Matter Morristown | Events',
      description: 'The website of the Morristown NJ chapter for Black Lives Matter.',
      layout: 'default'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Events" */ '../views/Actions.vue')
  },
  {
    path: '/Donate',
    name: 'Donate',
    meta: {
      title: 'Black Lives Matter Morristown | Donate',
      description: 'The website of the Morristown NJ chapter for Black Lives Matter.',
      layout: 'default'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Donate" */ '../views/Donate.vue')
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    meta: {
      title: 'Black Lives Matter Morristown | Gallery',
      description: 'The website of the Morristown NJ chapter for Black Lives Matter.',
      layout: 'default'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Gallery" */ '../views/Gallery.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    meta: {
      title: 'Black Lives Matter Morristown | Contact',
      layout: 'default'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
