
    import type { RouteRecordRaw } from 'vue-router'
    import {layout} from 'layout'
    const web: RouteRecordRaw[] = [
        {
            path: '/web',
            meta: { title: 'web网页' },
            component: layout,
            children:[
  {
    "path": "web",
    "props": false,
    "meta": {
      "title": "web网页"
    },
    component: () => import('pages/web/main.vue')
  }
]
        }
    ]
    
    export default web
 