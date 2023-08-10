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
                component:() => import('pages/plan/set/set.vue')
            },
            {
                path: 'update',
                meta: { title: '更新 UPDATE' },
                component:() => import('pages/plan/update/update.vue')
            }
        ]
    }
]

export default plan