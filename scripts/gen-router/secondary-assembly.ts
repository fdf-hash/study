import createRouterFile from "./file/create-router"

/**
 * 二次组装路由 组装成最终的路由文件
 * @param routerData 整理好的路由
 */
export default function secondaryAssembly(
  routerData: Record<string, any>,
  titleName: string,
  fileRouter: number
) {
  multiLayerRoutingStructure(routerData, titleName, fileRouter)
}

/**
 * 结构组装
 * @param routerMsg
 */
function multiLayerRoutingStructure(
  routerMsg: Record<string, any>,
  titleName: string,
  fileRouter: number
) {
  // let titleName = routerMsg[routerMsg.length - 1].path.replace(/\//g, "")

  // 使用 map 方法来将函数引用传递给生成的路由配置
  let childrenArray = routerMsg.map((route) => ({
    path: route.path,
    props: route.props,
    meta: route.meta,
    component: route.component, // 保留函数引用
  }))
  
  // console.log(childrenArray)

  // 使用JSON.stringify将childrenArray转换为字符串，但在此之前将component属性替换为函数名
  let childrenString = JSON.stringify(
    childrenArray,
    (key, value) => {
      if (key === "component" && typeof value === "function") {
        return value.name // 将函数引用替换为函数名
      }
      return value
    },
    2
  )

  let str = `
    import type { RouteRecordRaw } from 'vue-router'
    import {layout} from 'layout'
    const ${titleName}: RouteRecordRaw[] = [
        {
            path: '/${titleName.replace(/\//, "")}',
            meta: { title: '${routerMsg[routerMsg.length - 1].meta.title}' },
            component: layout,
            children:${childrenString}
        }
    ]
    
    export default ${titleName}
 `
    .replace(/"component": /g, "")
    .replace(
      /"component: \(\) => import\('([^']+\.vue)'\)"/g,
      "component: () => import('$1')"
    )
    .replace(/views\//g, "")

  createRouterFile(
    str,
    titleName,
    fileRouter,
    `${routerMsg[routerMsg.length - 1].meta.title}`
  )
}
