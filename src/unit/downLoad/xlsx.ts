
// base64图片转blob
function imgURLtoBlob(dataUrl:any) {
    const arr = dataUrl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
}

// basePdf转blob
function pdfBase64ToBlob(dataUrl: string) {
    var bstr = atob(dataUrl)
    var n = bstr.length
    var u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: 'application/pdf;base64' })
}

// 下载文件
function downloadFile(url: string, name?: string) {
    const a = document.createElement('a')
    a.setAttribute('href', url)
    const fileName = name + '.pdf'
    a.setAttribute('download', fileName)
    a.setAttribute('target', '_blank')
    const clickEvent = document.createEvent('MouseEvents')
    clickEvent.initEvent('click', true, true)
    a.dispatchEvent(clickEvent)
}

function startDown(myBlob:Blob,name?:string){
    
    const myUrl = URL.createObjectURL(myBlob)
    // 预览
    window.open(myUrl)
    // 下载
    downloadFile(myUrl, name)
}
/**
 * xlsxRes 为后端返回的二进制文件流，需要所有数据，不要 const {data} 解析  
 * @param xlsxRes 
 */
function startXlsx(xlsxRes:any){
    /**
     * 获取返回信息中headers的文件名称，打印xlsxRes中的headers属性可以看到content-disposition这串标识符
     */
    var fileName = decodeURIComponent(xlsxRes.headers["content-disposition"].split("=")[1])

    /**
     * 转换为xlsx文件
     */

    let blob = new Blob([xlsxRes.data], {
      type: 'application/vnd.ms-excel',
    });
    /**开始创建a标签&&下载  */
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = fileName.split(";")[0];
    a.click();
    window.URL.revokeObjectURL(url);
}
/**
 * 下载文件通用方法
 * @param url 文件
 * @param type 文件类型
 * @param xlsxRes xlsx下载信息
 * @param name 可设置下载文件名
 */
export function downloadFileContext(url: string,type:'pdf'|'image'|'xlsx', xlsxRes?:any,name?: string,) {
    if (url && type=='pdf') {
        const myBlob = pdfBase64ToBlob(url) // pdf就调用该方法
        startDown(myBlob,name)
    }else if (url && type=='image'){
        const myBlob = imgURLtoBlob(url) // 图片调用imgURLtoBlob()
        startDown(myBlob,name)
    }else if (url && type=='xlsx'){
        startXlsx(xlsxRes)
    }
    else {
        alert('文件不存在')
    }
}