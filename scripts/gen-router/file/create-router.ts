const fs = require("fs")
const path = require("path")

import deleteRouterFile from "./delete-router"

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

export default function createRouterFile(data: any, titleFile: string) {
  // console.log(data, titleFile)
  // 创建文件夹（如果它不存在）

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, {recursive: true})
    console.log(`Created folder: ${folderPath}`)
  } else {
    console.log(`Folder already exists: ${folderPath}`)
  }

  // 添加内容到文件夹中
  const filePath = path.join(folderPath, `${titleFile}.ts`)

  fs.writeFileSync(filePath, data)
  console.log(`Added content to ${filePath}`)
}
