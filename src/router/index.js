import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Hello from '@/components/promise'
import Forsettimeout from '@/components/forsettimeout'
import Settimeout from '@/components/settimeout'
import This from '@/components/thiss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
    	path: '/hello',
    	name: 'hello',
    	component: Hello
    },
    {
    	path: '/forsettimeout',
    	name: 'forsettimeout',
    	component: Forsettimeout
    },
    {
    	path: '/settimeout',
    	name: 'settimeout',
    	component: Settimeout
    },
    {
      path: '/this',
      name: 'this',
      component: This
    }
  ]
})
