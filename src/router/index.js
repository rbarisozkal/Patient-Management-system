import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path:'/appointment',
    name:'Get an Appointment',
    component:function () {
      return import('../views/Appointment.vue')
    }
  },
  {
    path:'/appointment',
    name:'Patient List',
    component:function () {
      return import('../components/PatientList.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
