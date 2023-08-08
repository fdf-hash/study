import type { RouteRecordRaw } from 'vue-router'
import { layout } from 'layout'

const rsa: RouteRecordRaw[] = [
    {
        path: '/rsa',
        component: layout,
        redirect: '/rsa/index',
        meta: {
            title: 'RSA加密',
            hidden:true
        },
        children: [
            {
                path: 'index',
                component: () => import('pages/rsa/main.vue'),
                meta: { title: 'RSA加密' }
            }
        ]
    },
]

export default rsa
