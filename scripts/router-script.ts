console.log('生成路由脚本开始');
import read from "./gen-router/get-file";
import processFormat from "./gen-router/process-routing-format";

read().then((res:any) => {
    processFormat(res);
})


