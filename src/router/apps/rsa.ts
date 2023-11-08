
    import type { RouteRecordRaw } from 'vue-router'
    import {layout} from 'layout'
    const rsa: RouteRecordRaw[] = [
        {
            path: '/rsa',
            meta: { title: 'RSA加密' },
            component: layout,
            children:[
  {
    "path": "rsa",
    "props": false,
    "meta": {
      "title": "RSA加密"
    },
    component: () => import('pages/rsa/main.vue')
  }
]
        }
    ]
    
    export default rsa
 