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
            }
        ]
    }
]

export default assets