import {log} from "console"

/**
 * 二次组装路由 组装成最终的路由文件
 * @param routerData 整理好的路由
 */
export default function secondaryAssembly(routerData: Record<string, any>) {
    multiLayerRoutingStructure(routerData)
}

/**
 * 结构组装
 * @param routerMsg
 */
function multiLayerRoutingStructure(routerMsg: Record<string, any>) {
  let titleName = routerMsg[routerMsg.length - 1].path.replace(/\//g, "")
  let str = `
    import type { RouteRecordRaw } from 'vue-router'
    import {layout} from 'layout'
    const ${titleName}: RouteRecordRaw[] = [
        {
            path: ${titleName},
            meta: { title: ${routerMsg[routerMsg.length - 1].meta.title} },
            component: layout,
            children:${routerMsg}
        }
    ]
    
    export default ${titleName}
 `
  console.log(str)
}
