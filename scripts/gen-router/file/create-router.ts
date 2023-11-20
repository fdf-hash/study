const fs = require("fs")
const path = require("path")

import createAppRoutes from "./create-app-routes"
import deleteRouterFile from "./delete-router"

/**
 * 判断路由文件是否生成完成  写入app-routes文件
 */

let fileRouterNum:number = 0
let fileRouterTitle: string[] = []
let fileRouterTitleChinese: string[] = []


/**
 * 创建  \my-vue-app\src\router\apps  创建路径下的所有路由文件
 * 更新  \my-vue-app\src\router\app-routes.ts 更新该文件内容
 */

// 获取当前脚本所在的目录
const scriptDirectory = __dirname

// 构建要删除的文件夹路径
const folderPath = path.join(
  scriptDirectory,
  "../../..",
  "src",
  "router",
  "apps"
)

// 删除文件
deleteRouterFile(folderPath)

export default function createRouterFile(
  data: any,
  titleFile: string,
  fileRouter: number,
  fileTitle: string
) {
  fileRouterNum++

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, {recursive: true})
    console.log(`Created folder: ${folderPath}`)
  } else {
    console.log(`Folder already exists: ${folderPath}`)
  }

  // 添加内容到文件夹中
  const filePath = path.join(folderPath, `${titleFile}.ts`)

  fs.writeFileSync(filePath, data)
  console.log("文件全部写入完成",fileTitle)
  fileRouterTitle.push(titleFile)
  fileRouterTitleChinese.push(fileTitle)
  if (fileRouterNum === fileRouter) {
    createAppRoutes(fileRouterTitle,fileRouterTitleChinese)
  }
  // console.log(`Added content to ${filePath}`)
}
