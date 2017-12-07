import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Tuijian from '@/components/Tuijian'
import Paihang from '@/components/Paihang'
import Fenlei from '@/components/Fenlei'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Collect from '@/components/Collect'
import Search from '@/components/Search'
import Detailp from '@/components/DetailPaihang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:lid?',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/tuijian',
      name: 'Tuijian',
      component: Tuijian
    },
    {
      path: '/paihang',
      name: 'Paihang',
      component: Paihang
    },
    {
      path: '/detailp/:lid?',
      name: 'Detailp',
      component: Detailp
    },
    {
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }


  ]
})
