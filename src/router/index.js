import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Cardview from '../views/Card.vue';
import SigninForm from "../views/SigninForm.vue";
import WeatherApp from "../views/WeatherApp.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/card',
      name: 'card',
      component: Cardview
    },
    {
      path: '/user-list',
      name: 'userList',
      component: SigninForm
    },
    {
      path: '/weather-app',
      name: 'weatherApp',
      component: WeatherApp
    },
  ]
})

export default router