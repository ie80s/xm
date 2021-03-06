import Vue from 'vue'
import Router from 'vue-router'
import Logon from  '@/components/deng/Logon'
import baoxiu from '@/components/baoxiu'
import index2 from '@/components/index2'
import zuoye from '@/components/zuoye'
import upload_test from '@/components/upload_test'
import Vuex from 'vuex'
import logoin from '@/components/deng/logoin'
import message from '@/components/message'
import myrepair from '@/components/myrepair'
import ziliao from '@/components/module/ziliao'
import shezhi from '@/components/module/shezhi'
import ww from '@/components/ww'
import yinsi from '@/components/module/yinsi'



Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [  
    {
      path: '/',
      name: 'index2',
      component: index2
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
    
    {
      path: '/zuoye',
      name: 'zuoye',
      component: zuoye
    },
    {
      path: '/upload_test',
      name: 'upload_test',
      component: upload_test
    },{
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
    {
      path:'/ww',
      name:'ww',
      component:ww
    }, 
  ]
})
