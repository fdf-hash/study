<template>
  <div class="btn">
    <d-button variant="solid" @click="path" size="lg">登录</d-button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"

const routers = useRouter()

const path = () => {
  routers.push({path: "/electricity/charge"})
}
</script>

<style scoped lang="scss">
.btn {
  height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
