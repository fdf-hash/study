import { log } from "console";

export default function processFormat(routerData:any){
    

    // routerData.forEach((item:any) => {
    //     console.log(item.filePath);
    // })

    firstLevelMenu(routerData)
}
/**
 * 判断路由是否为1级菜单 
*/
function firstLevelMenu(routerData:Record<string,any>[]) {
    routerData.forEach(item => {
        let itemSplitArr = item.match[1].split(' ')
        // 如果 item.match 包含 path 为二级路由
        if(itemSplitArr[2] != ''){
            // 二级路由生成
            secondaryRouting(item)
        }
       
    })
}

function secondaryRouting(item:Record<string,any>){
    log(item)
    // 开始第一次组装路由

    let obj = {
        
    }
}