import type {RouteRecordRaw} from "vue-router"
import {layout} from "layout"
const electricity: RouteRecordRaw[] = [
  {
    path: "/electricity",
    meta: {title: "电费收取"},
    component: layout,
    children: [
      {
        path: "electricity",
        props: false,
        meta: {
          title: "水费收取",
        },
        component: () => import("pages/electricity/water/water.vue"),
      },
      {
        path: "electricity",
        props: false,
        meta: {
          title: "电费收取",
        },
        component: () => import("pages/electricity/charge/charge.vue"),
      },
    ],
  },
]

export default electricity
