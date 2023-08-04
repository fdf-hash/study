import type { RouteRecordRaw } from 'vue-router'
import { layout } from 'layout'

const plan: RouteRecordRaw[] = [
    {
        path: '/electricity',
        meta: { title: '电费' },
        component: layout,
        children:[
            {
                path: 'charge',
                meta: { title: '电费收取' },
                component:() => import('pages/electricity/charge/main.vue')
            },
            {
                path: 'water',
                meta: { title: '水费收取' },
                component:() => import('pages/electricity/water/main.vue')
            },
        ]
    }
]

export default plan