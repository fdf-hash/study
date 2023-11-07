/**
 * 获取src/pages目录下所有.vue中文件以"<!-- <router "开头，以"> -->"结尾的信息
 */

import { log } from "console";

const fs = require('fs');
const path = require('path');

/**
 * 指定目录
 */
const directoryPath = 'src/pages/views';

/**
 * 用正则表达式匹配注释格式
 */
const commentRegex = /<router(.*)\/>/

/**
 * 存储所有的文件内容
 */
let allFileContent: any = []

/**
 * .vue文件数量
 */
let numVue = 0

/**
 * 结果
 */

let routerData: any = []

export default function readVueFile() {
    return new Promise((resolve: any, reject) => {
        function readFile(directoryPath) {
            // 读取目录中的文件
            fs.readdir(directoryPath, (err, files) => {
                if (err) {
                    console.error('Error reading directory:', err);
                    reject(err)
                    return;
                }

                // 遍历每个文件
                files.forEach(file => {

                    const filePath = path.join(directoryPath, file);

                    fs.stat(filePath, (err, stats) => {
                        if (err) {
                            console.error('Error getting file stats:', err);
                            reject(err)
                            return;
                        }

                        if (stats.isDirectory()) {
                            // 如果是文件夹，递归处理子目录
                            readFile(filePath);
                        } else if (stats.isFile() && path.extname(file) === '.vue') {
                            // 如果是.vue文件，读取并匹配注释
                            numVue++
                            fs.readFile(filePath, 'utf8', (err, content) => {

                                if (err) {
                                    console.error('Error reading file:', err);
                                    return;
                                }

                                const lines = {
                                    content: content.split('\n'),
                                    filePath: filePath
                                };

                                allFileContent.push(lines)
                                if (allFileContent.length == numVue) {
                                    filterGoContent(allFileContent)
                                }
                            });
                        }
                    });
                });
            });
        }


        function filterGoContent(lines: any) {

            for (const line of lines) {
                for (const child of line.content) {
                    const match = child.match(commentRegex);
                    if (match) {
                        let obj = {
                            filePath: line.filePath,
                            match: match
                        }
                        routerData.push(obj)
                        resolve(routerData)
                        // const extractedContent = match[1].trim();
                        // console.log('拿到的信息', extractedContent);
                    }
                }
            }
        }

        readFile(directoryPath);
    })

}
