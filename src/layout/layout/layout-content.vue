<template>
  <div class="layout-content">
    <div class="layout-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-content {
  width: calc(100% - 210px);
  height: calc(100vh - 50px);
  background: rgb(234, 235, 237);
  padding: 10px;
  .layout-view {
    padding: 10px;
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
</style>
