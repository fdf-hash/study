<!-- <router title="资产" /> -->
<template>
  <div>
    <h1>资产</h1>

    <d-button variant="solid" @click="path">12312</d-button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"

const routers = useRouter()

import {downloadFileContext} from "unit"
console.log(downloadFileContext)

const path = () => {
  routers.push({path: "/assets/form/12313/view"})
}
</script>
