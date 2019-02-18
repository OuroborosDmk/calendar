import Vue from 'vue'
import Router from 'vue-router'
import calendar from '@/components/calendar'
import signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
