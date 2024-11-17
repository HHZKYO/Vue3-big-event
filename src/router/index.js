import LayoutContainer from '@/views/layout/LayoutContainer.vue'
import LoginPage from '@/views/login/loginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: LoginPage },
    { 
      path: '/',
      component: LayoutContainer,
      redirect: '/article/manage',
      children: [
        //下面使用了异步导入，练习一下，不影响
        {
          path: '/article/manage',
          component: () => import('../views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('../views/article/ArticleChannel.vue')
        },
        {
          path: '/user/profile',
          component: () => import('../views/user/UserProfile.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('../views/user/UserAvatar.vue')
        },
        {
          path: '/user/password',
          component: () => import('../views/user/UserPassword.vue')
        },
      ]
    }
  ],
})

export default router
