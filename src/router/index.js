import Vue from 'vue'
import Router from 'vue-router'
import logoin from '@/components/logoin'
import index from '@/components/index'
import Logon from  '@/components/Logon'
import baoxiu from '@/components/baoxiu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/logoin',
      name:'logoin',
      component: logoin
    },
    {
      path:'/Logon',
      name:'Logon',
      component: Logon
    },
    {
      path:'/baoxiu',
      name:'baoxiu',
      component: baoxiu
    },
    
  ]
})
