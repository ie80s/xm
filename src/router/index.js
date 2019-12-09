import Vue from 'vue'
import Router from 'vue-router'
import logoin from '@/components/deng/logoin'
import Logon from  '@/components/deng/Logon'
import message from '@/components/message'
import myrepair from '@/components/myrepair'


Vue.use(Router)

export default new Router({
  routes: [  
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
    }
  ]
})
