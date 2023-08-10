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
        console.log(item.filePath.split('\\'));
    })
}