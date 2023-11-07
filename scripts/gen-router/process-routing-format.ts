import secondaryAssembly from "./secondary-assembly"
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
  folder(routerData)
}
/**
 * 根据文件名称区分文件夹
 */
function folder(routerData: Record<string, any>[]) {
  const result = {}

  routerData.forEach((item) => {
    const filePath = item.filePath
    const match = item.match

    // 使用正则表达式匹配views\\后面的单词
    const matchResult = filePath.match(/views\\([^\\]+)/)

    if (matchResult && matchResult.length > 1) {
      const key = matchResult[1]
      if (!result[key]) {
        result[key] = {views: key, filePaths: []}
      }
      result[key].filePaths.push(filePath)
      if (result[key].matches === undefined) {
        result[key].matches = []
      }
      result[key].matches.push(match)
    }
  })

  // 将结果转化为数组
  const newArray: Record<string, any> = Object.values(result)

  newArray.forEach((item: Record<string, any>) => {
    firstLevelMenu(item)
  })
}
/**
 * 组装路由
 */
function firstLevelMenu(folderArray: Record<string, any>) {
  let childrenRouter = folderArray.matches.map(
    (item: Record<string, any>, index: number) => {
      return assembleSecondaryRouting(
        folderArray.views,
        folderArray.filePaths[index],
        item
      )
    }
  )
  /**二次组装 */
  secondaryAssembly(childrenRouter)
}

/**
 * 第一次组装路由
 * @param name 父级路由名称
 * @param filePaths 路由路径
 * @param item RouteConfig 整体参数
 * @returns
 */
function assembleSecondaryRouting(
  name: string,
  filePaths: string,
  item: Record<string, any>
): RouteConfig {
  const {title, path} = parseRoute(item[0])

  let itemSplitArr = item[1].split(" ")

  let children: RouteConfig = {
    path: `${name}/${path}`,
    props: itemSplitArr[2] !== "" ? true : false,
    meta: {title: title},
    component: `() => import('${filePaths.replace(/src\\/, "")}')`,
  }

  return children
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
