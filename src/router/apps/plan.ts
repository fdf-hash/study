
    import type { RouteRecordRaw } from 'vue-router'
    import {layout} from 'layout'
    const plan: RouteRecordRaw[] = [
        {
            path: '/plan',
            meta: { title: '新增' },
            component: layout,
            children:[
  {
    "path": "update",
    "props": false,
    "meta": {
      "title": "更新"
    },
    component: () => import('pages/plan/update/update.vue')
  },
  {
    "path": "set",
    "props": false,
    "meta": {
      "title": "新增"
    },
    component: () => import('pages/plan/set/set.vue')
  }
]
        }
    ]
    
    export default plan
 