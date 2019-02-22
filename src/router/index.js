import Vue from 'vue'
import Router from 'vue-router'
import calendar from '@/components/calendar'
import signup from '@/components/signup'
import login from '@/components/login'
import forgetpw from '@/components/forgetpw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/forgetpw',
      name: 'forgetpw',
      component: forgetpw
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
})
