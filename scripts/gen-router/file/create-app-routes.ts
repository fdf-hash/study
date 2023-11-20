const fs = require("fs")
const path = require("path")
// const prettier = require("prettier")
// 获取app-routes.ts目录
const scriptDirectory = __dirname

// 构建要删除的文件夹路径
const folderPath = path.join(
  scriptDirectory,
  "../../..",
  "src",
  "router",
  "app-routes.ts"
)
console.log(folderPath, "--------")

export default function createAppRoutes(
  fileTitle: string[],
  fileTitleChinese: string[]
) {
  let fileRoute = ``
  let routeRow = ``
  fileTitle.forEach((item, index) => {
    let str = `import ${item} from './apps/${item}'\n`
    let obj = `/* ${fileTitleChinese[index]}*/\n ...${item},\n`
    fileRoute += str
    routeRow += obj
  })
  let contentToWrite = `
  import type { RouteRecordRaw } from 'vue-router'
  ${fileRoute}
  const appRoutes: RouteRecordRaw[] = [
${routeRow}]
  export default appRoutes`
  //   contentToWrite = prettier.format(contentToWrite, {parser: "json"})
  // 异步写入文件，覆盖原有内容
  fs.writeFile(folderPath, contentToWrite, (err) => {
    if (err) throw err
    console.log("文件写入成功，内容已被替换。")
  })
}
