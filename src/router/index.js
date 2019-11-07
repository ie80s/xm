import Vue from 'vue'
import Router from 'vue-router'
import logoin from '@/components/deng/logoin'
import index from '@/components/index'
import Logon from  '@/components/deng/Logon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/deng/logoin',
      name:'logoin',
      component: logoin
    },
    {
      path:'/deng/Logon',
      name:'Logon',
      component: Logon
    }
  ]
})
