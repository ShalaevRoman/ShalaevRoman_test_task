import Vue from 'vue'
import VueRouter from 'vue-router'
import AllVideos from '@/components/AllVideos'
import Documents from '@/components/Documents'
import Theme from '@/components/Theme'
import Auth from '@/components/Auth'
import Categories from '@/components/Categories'
import Consultant from '@/components/Consultant'
import dictionaryUA from '@/dictionary/dictionaryUA'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'allVideos',
    component: AllVideos,
    props: { dictionary: dictionaryUA }
  },
  {
    path: '/documents',
    name: 'documents',
    component: Documents
  },
  {
    path: '/theme',
    name: 'theme',
    component: Theme
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/consultant',
    name: 'consultant',
    component: Consultant
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
