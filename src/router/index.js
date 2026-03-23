import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/services',
            name: 'services',
            component: () => import('../views/ServicesView.vue')
        },
        {
            path: '/about-us',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/terms-conditions',
            name: 'terms',
            component: () => import('../views/TermsConditionsView.vue')
        },
        {
            path: '/accessibility-statement',
            name: 'accessibility',
            component: () => import('../views/AccessibilityStatementView.vue')
        },
        {
            path: '/privacy-policy',
            name: 'privacy',
            component: () => import('../views/PrivacyPolicyView.vue')
        },
        {
            path: '/refund-policy',
            name: 'refund',
            component: () => import('../views/RefundPolicyView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        }

        
    ],
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
