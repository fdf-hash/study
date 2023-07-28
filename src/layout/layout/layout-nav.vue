<template>
  <div class="layout-nav">
    <div class="layout-nav-content">
      <!-- <d-menu
        mode="vertical"
        v-for="item in userApps"
        router
        :open-keys="['/web']"
      >
        <d-sub-menu
          :title="item.meta?.title"
          v-if="item.children && item.children.length"
          :key="item.path"
        >
          <template #icon>
            {{ item.path }}
            <i class="icon-system"></i>
          </template>
          <d-menu-item
            v-for="children in item.children"
            :key="`${item.path}/${children.path}`"
          >
            <span>{{ `${item.path}/${children.path}` }}</span>
            <br />
            <span>{{ children.meta?.title }}</span>
          </d-menu-item>
        </d-sub-menu>

        <d-menu-item
          :title="item.meta?.title"
          v-else
        >
          <template #icon>
            <i class="icon-system"></i>
          </template>
          <span>{{ item.meta?.title }}</span>
        </d-menu-item>
      </d-menu> -->
      <!-- <d-menu router v-for="item in userApps" :key="item.path">
        <d-sub-menu :key="item.path" :title="item.meta?.title" v-if="item.children != undefined">
          <template #icon>
            <i class="icon-system"></i>
          </template>
          <d-menu-item v-for="children in item.children" :key="`${item.path}/${children.path}`">
            <template #icon>
            <i class="icon-system"></i>
          </template>
            {{ children.meta?.title }}
          </d-menu-item>
        </d-sub-menu>
      </d-menu> -->
      <d-menu router>
        <d-sub-menu :key="item.path" :title="item.meta?.title" v-for="item in userApps">
            <d-menu-item v-for="children in item.children" :key="`${item.path}/${children.path}`">
              {{ children.meta?.title }}
            </d-menu-item>
        </d-sub-menu>
      </d-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const user = useRouter()

const userApps = user.options.routes

console.log(userApps, "---")
</script>

<style lang="scss" scoped>
.layout-nav {
  position: relative;
  z-index: 2;
  width: 210px;
  height: calc(100vh - 50px);
  overflow: hidden;
  background: #fff;

  .devui-menu {
    border-right: 0px;
  }
}

.layout-nav-content {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: auto;
}

.layout-nav-content::-webkit-scrollbar {
  width: 4px;
}

.layout-nav-content::-webkit-scrollbar-track {
  background-color: #fff;
  /* 滚动条背景颜色 */
}

.layout-nav-content::-webkit-scrollbar-thumb {
  background-color: rgb(211, 211, 211);
  /* 滑块颜色 */
  border-radius: 10px;
  /* 滑块边角的弧度 */
}

.layout-nav::-webkit-scrollbar-thumb:hover {
  background-color: rgb(211, 211, 211);
  /* 悬停时滑块颜色 */
}
</style>
