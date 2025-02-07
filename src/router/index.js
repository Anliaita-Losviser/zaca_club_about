
import { createWebHistory, createRouter } from 'vue-router'
import aboutZACA from '@/views/aboutZACA.vue'
import HallOfFame from '@/views/HallOfFame.vue'
import FameProfiles from '@/views/FameProfiles.vue'

const routes = [
    {path: '/', redirect:'/about'},
    {path: '/about',name: 'about', component:aboutZACA,
        meta: {
            title: '关于'
        }
    },
    {path: '/hallOfFame',name: 'hallOfFame', component:HallOfFame,
        meta: {
            title: '名人堂'
        }
    },
    {path: '/FameProfile', name: 'FameProfile', component:FameProfiles,},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router