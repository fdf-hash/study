import type { RouteRecordRaw } from 'vue-router'
import { layout } from 'layout'

const work: RouteRecordRaw[] = [
    {
        path: '/work',
        component: layout,
        redirect: '/work/index',
        meta: {
            title: '工作',
            hidden:true
        },
        children: [
            {
                path: 'index',
                component: () => import('pages/work/main.vue'),
                meta: { title: '工作' }
            }
        ]
    },
]

export default work
