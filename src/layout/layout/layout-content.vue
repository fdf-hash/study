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
    overflow: auto;
  }

  .layout-view::-webkit-scrollbar {
    width: 4px;
  }

  .layout-view::-webkit-scrollbar-track {
    background-color: #fff;
    /* 滚动条背景颜色 */
  }

  .layout-view::-webkit-scrollbar-thumb {
    background-color: rgb(211, 211, 211,0.7);
    /* 滑块颜色 */
    border-radius: 10px;
    /* 滑块边角的弧度 */
  }

  .layout-view::-webkit-scrollbar-thumb:hover {
    background-color: rgb(211, 211, 211,0.7);
    /* 悬停时滑块颜色 */
  }
}
</style>
