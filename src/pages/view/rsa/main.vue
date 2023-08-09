<template>
    <!-- <d-button variant="solid" @click="getKey">生成RSA密钥对</d-button> -->
    <d-card class="card-demo-basic" shadow="never">
        <template #title> 公钥 </template>
        <template #content>
            <d-textarea class="mb-2" v-model="publicKey" autosize disabled></d-textarea>
        </template>
    </d-card>
    <d-card class="card-demo-basic" shadow="never">
        <template #title> 秘钥 </template>
        <template #content>
            <d-textarea class="mb-2" v-model="privateKey" autosize disabled></d-textarea>
        </template>
    </d-card>

    <d-card class="card-demo-basic" shadow="never">
        <template #title> 加密信息 </template>
        <template #content>
            <d-textarea class="mb-2" v-model="encryptionMsg" autosize></d-textarea>
        </template>
    </d-card>
    <d-card class="card-demo-basic" shadow="never">
        <d-button variant="solid" @click="encryptionClick">加密</d-button>
        <template #content>
            <d-textarea class="mb-2" v-model="encryptionResult" autosize></d-textarea>
        </template>
    </d-card>
    <d-card class="card-demo-basic" shadow="never">
        <d-button variant="solid" @click="decryptClick">解密</d-button>
        <template #content>
            <d-textarea class="mb-2" v-model="decryptResult" autosize></d-textarea>
        </template>
    </d-card>
</template>

<script lang="ts" setup>
import JSEncrypt from 'jsencrypt'
import { ref } from 'vue';
import { Message } from 'vue-devui';

let publicKey: any = ref()

let privateKey: any = ref()

let encryptionMsg: any = ref()

let encryptionResult: any = ref()

let decryptResult: any = ref()

const getKey = () => {
    const rsa = new JSEncrypt();
    const keypair = rsa.getKey();
    publicKey = keypair.getPublicKey();
    privateKey = keypair.getPrivateKey();
}

getKey()

const encryptionClick = () => {
    if (encryptionMsg.value == undefined || encryptionMsg.value == '') {
        Message.error('加密信息为空')
        return
    }
    const rsaInstance = new JSEncrypt();
    rsaInstance.setPublicKey(publicKey)
    console.log(rsaInstance.encrypt(encryptionMsg.value));

    encryptionResult.value = rsaInstance.encrypt(encryptionMsg.value)
    Message.success('操作成功')

}

const decryptClick = () => {

    if (encryptionResult.value == undefined || encryptionResult.value == '') {
        Message.error('解密信息为空')
        return
    }
    const rsaInstance = new JSEncrypt();
    rsaInstance.setPrivateKey(privateKey)

    if (rsaInstance.decrypt(encryptionResult.value) == null || false) {
        Message.error('解密失败')
        decryptResult.value = ''
        return
    }

    decryptResult.value = rsaInstance.decrypt(encryptionResult.value)
    Message.success('操作成功')

}

</script>

<style lang="scss" scoped>
::v-deep .devui-textarea--disabled {
    background-color: #fff;
    color: var(--devui-text, #252b3a) !important;
}
</style>