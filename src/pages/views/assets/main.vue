<!-- <router title="资产" /> -->
<template>
  <div>
    <h1>资产</h1>

    <d-button variant="solid" @click="path">12312</d-button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
import CryptoJS from "crypto-js"
const data = "要加密的数据"
const key = "加密密钥"

// 使用 AES 对数据进行加密
const encryptedData = window.btoa(CryptoJS.AES.encrypt(data, key).toString())
console.log(encryptedData);

// 解密数据
const decryptedData = CryptoJS.AES.decrypt(window.atob(encryptedData), key).toString(
  CryptoJS.enc.Utf8
)
console.log(decryptedData)

const routers = useRouter()

const path = () => {
  routers.push({path: "/assets/form/12313/view"})
}
</script>
