import Vue from 'vue'
import Router from 'vue-router'
import Logon from  '@/components/Logon'
import baoxiu from '@/components/baoxiu'
import index1 from '@/components/index1'
import index2 from '@/components/index2'
import zuoye from '@/components/zuoye'
import upload_test from '@/components/upload_test'
import Vuex from 'vuex'

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
      path: '/index1',
      name: 'index1',
      component: index1
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
    },
  ]
})
