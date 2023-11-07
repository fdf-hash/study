import {log} from "console"

/**
 * 路由类型参数
 */
interface RouteConfig {
  path: string
  props?: boolean
  meta: {title: string}
  component: any
}

export default function processFormat(routerData: any) {
  firstLevelMenu(routerData)
}

/**
 * 组装路由
 */
function firstLevelMenu(routerData: Record<string, any>[]) {
  routerData.forEach((item) => {
    let itemSplitArr = item.match[1].split(" ")
    // 如果 item.match 包含 path 为二级路由
    if (itemSplitArr[2] != "") {
      assembleSecondaryRouting(item)
    } else {
    }
  })
}

/**
 * 二级路由生成
 * @param item
 */
function assembleSecondaryRouting(item: Record<string, any>) {
  const {title, path} = parseRoute(item.match[0])
  const {name} = pathParent(item.filePath)
  let children: RouteConfig = {
    path: `${name}/${path}`,
    props: true,
    meta: {title: title},
    component: `() => import('${item.filePath.replace(/src\\/, "")}')`,
  }

  log(children)
}
/**
 * {
  path: 'form/create',
  props: true,
  meta: { title: '资产新增' },
  component: "() => import('pages\\views\\assets\\form.vue')"
}
{
  path: 'form/:id/view',
  props: true,
  meta: { title: '资产查看' },
  component: "() => import('pages\\views\\assets\\form.vue')"
}
{
  path: 'form/:id/update',
  props: true,
  meta: { title: '资产更新' },
  component: "() => import('pages\\views\\assets\\form.vue')"
}
{
  path: 'form/:id/:taskId/audit',
  props: true,
  meta: { title: '资产审核' },
  component: "() => import('pages\\views\\assets\\form.vue')"
}
 */

/**
 * 路由名称、路径
 * @param routeStr
 * @returns
 */
function parseRoute(routeStr: string): {title: string; path: string} {
  const titleRegex = /title="([^"]*)"/
  const match = routeStr.match(titleRegex)
  const title = match ? match[1] : ""

  const pathRegex = /path="([^"]*)"/
  const pathMatch = routeStr.match(pathRegex)
  const path = pathMatch ? pathMatch[1] : ""

  return {title, path}
}

/**
 * 子路由父级文件名称
 * @param filePath
 * @returns
 */
function pathParent(filePath: string): {name: string} {
  const regex = /\\([^\\]+)\./
  const match = filePath.match(regex)
  const name = match ? match[1]! : ""
  return {name}
}
/**
 * 
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
            },
            {
                path: 'form/create',
                props: true,
                meta: { title: 'Assets网页(新增)' },
                component: () => import('pages/assets/form.vue')
            }, 
            {
                path: 'form/:id/view',
                props: true,
                meta: { title: 'Assets网页(查看)' },
                component: () => import('pages/assets/form.vue')
            },
        ]
    }
]

export default assets
 */
