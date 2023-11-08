
    import type { RouteRecordRaw } from 'vue-router'
    import {layout} from 'layout'
    const electricity: RouteRecordRaw[] = [
        {
            path: '/electricity',
            meta: { title: '水费收取' },
            component: layout,
            children:[
  {
    "path": "charge",
    "props": false,
    "meta": {
      "title": "电费收取"
    },
    component: () => import('pages/electricity/charge/charge.vue')
  },
  {
    "path": "water",
    "props": false,
    "meta": {
      "title": "水费收取"
    },
    component: () => import('pages/electricity/water/water.vue')
  }
]
        }
    ]
    
    export default electricity
 