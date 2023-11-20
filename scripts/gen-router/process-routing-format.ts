import secondaryAssembly from "./secondary-assembly"
/**
 * 计算文件夹数量
 */
let fileRouter = 0
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
  // 生成文件数量
  fileRouter = newArray.length
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
  secondaryAssembly(childrenRouter,folderArray.views,fileRouter)
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
  const {childrenName} = childrenRoute(filePaths)
  console.log(title);
  
  let pathComponent = `component: () => import('${filePaths
    .replace(/src\\/, "")
    .replace(/\\/g, "/")}')`
  let itemSplitArr = item[1].split(" ")

  let children: RouteConfig = {
    path: itemSplitArr[2] !== "" ? `${childrenName}/${path}` : `${childrenName}`,
    props: itemSplitArr[2] !== "" ? true : false,
    meta: {title: title},
    component: `${pathComponent}`,
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
 * 子级名称、路径
 * @param pathStr
 * @returns
 */
function childrenRoute(pathStr: string): {childrenName: string} {
  // 使用正则表达式来匹配 .vue 和 \ 之间的数据
  const regex = /\\([^\\]+)\.vue/
  const match = pathStr.match(regex)

  const childrenName = match ? match[1] : ""
  return {childrenName}
}
