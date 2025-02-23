import { createRouter, createWebHistory } from 'vue-router'
import SigninView from '@/views/SigninView.vue'
import ProfileView from '@/views/ProfileView.vue'

export const PageSignIn = 'SignIn'
export const PageProfile = 'Profile'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: PageSignIn,
      component: SigninView,
    },
    {
      path: '/profile',
      name: PageProfile,
      component: ProfileView
    }
  ],
})

export default router
