<template>
  <div class="layout-main">
    <LayoutNav></LayoutNav>
    <LayoutRouter></LayoutRouter>
  </div>
</template>

<script setup lang="ts">
import LayoutNav from "./layout-nav.vue"
import LayoutRouter from "./layout-router.vue";
</script>

<style lang="scss" scoped>
.layout-main {
  height: calc(100vh - 50px);
  overflow: auto;
  background: rgb(234, 235, 237);
  display: flex;
}
</style>
