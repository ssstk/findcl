import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index'
import Help from '@/pages/help'
import Declare from '@/pages/declare'
import List from '@/pages/list'
import Detail from '@/pages/list/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta: {
        title: '首页',
        notKeepAlive: true
      },
      children: []
    },
    {
      path: '/list/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/declare',
      name: 'Declare',
      component: Declare
    }
  ]
})
