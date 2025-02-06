
import { createWebHistory, createRouter } from 'vue-router'
import aboutZACA from '@/views/aboutZACA.vue'

const routes = [
    {path: '/', redirect:'/about'},
    {path: '/about',name: 'about', component:aboutZACA,
        meta: {
            title: '关于'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router