/**
 * 删除  \my-vue-app\src\router\apps  删除此路径下的所有路由文件
 */
const fs = require("fs")
const path = require("path")

// 调用函数以删除文件夹中的所有文件
export default function deleteRouterFile(folderPath: string) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("无法读取文件夹内容:", err)
      return
    }

    
    files.forEach((file) => {
      const filePath = path.join(folderPath, file)

      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error("无法获取文件状态:", err)
          return
        }

        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("无法删除文件:", err)
          } else {
            console.log("已删除文件:", filePath)
          }
        })
      })
    })
  })
}
