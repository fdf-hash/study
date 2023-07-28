<template>
  <div class="header">
    <div class="header-msg">
      <div class="flex">
        <img src="../../assets/logo.svg" class="header-msg-img"/>
        <p>系统管理</p>
      </div>
      <i></i>
    </div>
  </div>
</template>

<script setup lang="ts">
// import {PiniaLogo} from "components"
</script>

<style lang="scss" scoped>
.flex{
    display: flex;
    align-items: center;
}
.header {
  padding: 0 8px;
  height: 50px;
  display: flex;
  align-items: center;
  background: #844ed3;

  .header-msg {
    width: 200px;
    color: #fff;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    .header-msg-img {
      width: 32px;
      height: 32px;
      margin: 0;
    }
    p {
      font-size: 16px;
      font-weight: 600;
      padding-left: 4px;
      line-height: 50px;
    }
    i {
      display: block;
      width: 1px;
      height: 14px;
      margin-left: 20px;
      background: #fff;
    }
  }
}
</style>
