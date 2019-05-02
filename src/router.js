import Vue from 'vue'
import Router from 'vue-router'
import MusicFinder from './views/MusicFinder'
import TodoList from './views/TodoList'
import Employees from './views/Employees'
import Form from './views/Form.vue'
import Popup from './views/Popup'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MusicFinder
    },
    {
      path: '/music-finder',
      component: MusicFinder
    },
    {
      path: '/popup',
      component: Popup
    },
    {
      path: '/todo',
      component: TodoList
    },
    {
      path: '/employees',
      component: Employees
    },
    {
      path: '/form',
      component: Form
    },
  ]
})
