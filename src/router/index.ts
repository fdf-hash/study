import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw
} from 'vue-router'
import guard from './guard'

import { HOME } from 'pages'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HOME,
        meta: { title: '首页' }
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

guard(router)



export default router