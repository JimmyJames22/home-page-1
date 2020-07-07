import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Setpage from '@/components/Setpage'
import Infopage from '@/components/Infopage'
import Classespage from '@/components/Classespage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }, 
    {
      path: '/sets',
      name: 'Setpage',
      component: Setpage
    },
    {
      path: '/home',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/info',
      name: 'Infopage',
      component: Infopage
    },
    {
      path: '/classes',
      name: 'Class List',
      component: Classespage
    },
  ]
})
