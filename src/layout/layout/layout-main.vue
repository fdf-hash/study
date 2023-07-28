<template>
  <div class="layout-main">
    <LayoutNav></LayoutNav>
    <LayoutContent></LayoutContent>
  </div>
</template>

<script setup lang="ts">
import LayoutContent from "./layout-content.vue";
import LayoutNav from "./layout-nav.vue"
</script>

<style lang="scss" scoped>
.layout-main {
  display: flex;
}
</style>
