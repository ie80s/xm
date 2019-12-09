import Vue from 'vue'
import Router from 'vue-router'
import logoin from '@/components/deng/logoin'
import index from '@/components/index'
import Logon from  '@/components/deng/Logon'
import message from '@/components/message'
import myrepair from '@/components/myrepair'
import ziliao from '@/components/module/ziliao'
import shezhi from '@/components/module/shezhi'
import yinsi from '@/components/module/yinsi'

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
    },
    {
      path:'/message',
      name:'message',
      component:message
    },
    {
      path:'/myrepair',
      name:'myrepair',
      component:myrepair
    },
    {
      path:'/ziliao',
      name:'ziliao',
      component:ziliao
    },
    {
      path:'/shezhi',
      name:'shezhi',
      component:shezhi
    },
    {
      path:'/yinsi',
      name:'yinsi',
      component:yinsi
    },
  ]
})
