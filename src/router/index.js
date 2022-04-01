import Vue from 'vue'
import VueRouter from 'vue-router'
import basic from '../views/basic.vue'
import marker from '../views/marker.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'basic',
    component: basic
  },
  {
    path: '/marker',
    name: 'marker',
    component: marker
  }
]

const router = new VueRouter({
  routes
})

export default router
