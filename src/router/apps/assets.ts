import type { RouteRecordRaw } from 'vue-router'
import {layout} from 'layout'

const assets: RouteRecordRaw[] = [
    {
        path: '/assets',
        meta: { title: 'Assets网页' },
        component: layout,
        children:[
            {
                path:'index',
                meta: { title: 'Assets网页' },
                component:() => import('pages/assets/main.vue')
            },
            {
                path: 'form/create',
                props: true,
                meta: { title: 'Assets网页(新增)' },
                component: () => import('pages/assets/form.vue')
            }, 
            {
                path: 'form/:id/view',
                props: true,
                meta: { title: 'Assets网页(查看)' },
                component: () => import('pages/assets/form.vue')
            },
        ]
    }
]

export default assets