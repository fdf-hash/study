import type { RouteRecordRaw } from 'vue-router'
import { layout } from 'layout'

const plan: RouteRecordRaw[] = [
    {
        path: '/plan',
        meta: { title: 'plan' },
        component: layout,
        children:[
            {
                path: 'set',
                meta: { title: '新增 SET' },
                component:() => import('pages/plan/set/main.vue')
            },
            {
                path: 'update',
                meta: { title: '更新 UPDATE' },
                component:() => import('pages/plan/update/main.vue')
            }
        ]
    }
]

export default plan