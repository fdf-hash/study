import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw
} from 'vue-router'


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../view/home/main.vue'),
        meta: { title: '首页' }
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router