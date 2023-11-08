
    import type { RouteRecordRaw } from 'vue-router'
    import {layout} from 'layout'
    const assets: RouteRecordRaw[] = [
        {
            path: '/assets',
            meta: { title: '资产' },
            component: layout,
            children:[
  {
    "path": "form/create",
    "props": true,
    "meta": {
      "title": "资产新增"
    },
    component: () => import('pages/assets/form.vue')
  },
  {
    "path": "form/:id/view",
    "props": true,
    "meta": {
      "title": "资产查看"
    },
    component: () => import('pages/assets/form.vue')
  },
  {
    "path": "form/:id/update",
    "props": true,
    "meta": {
      "title": "资产更新"
    },
    component: () => import('pages/assets/form.vue')
  },
  {
    "path": "form/:id/:taskId/audit",
    "props": true,
    "meta": {
      "title": "资产审核"
    },
    component: () => import('pages/assets/form.vue')
  },
  {
    "path": "assets",
    "props": false,
    "meta": {
      "title": "资产"
    },
    component: () => import('pages/assets/main.vue')
  }
]
        }
    ]
    
    export default assets
 