import Vue from 'vue'
import Router from 'vue-router'
import HeaderCommon from '@/components/header-common'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HeaderCommon',
      component: HeaderCommon
    }
  ]
})
