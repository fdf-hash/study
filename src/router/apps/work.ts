
    import type { RouteRecordRaw } from 'vue-router'
    import {layout} from 'layout'
    const work: RouteRecordRaw[] = [
        {
            path: '/work',
            meta: { title: '工作台' },
            component: layout,
            children:[
  {
    "path": "work",
    "props": false,
    "meta": {
      "title": "工作台"
    },
    component: () => import('pages/work/main.vue')
  }
]
        }
    ]
    
    export default work
 