import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw
} from 'vue-router'
import guard from './guard'
import appRoutes from './app-routes'
import { HOME } from 'layout'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HOME,
        meta: { title: '首页' }
    },
    ...appRoutes
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

guard(router)



export default router