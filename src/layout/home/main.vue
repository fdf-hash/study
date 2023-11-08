<template>
  <div v-if="isWork">
    <div class="image">
      <img src="/src/assets/2057.gif" alt="">
    </div>
    <div class="btn">
      <d-popover content="打工人,打工魂,打工都是人上人！！！" trigger="hover" pop-type="success" :position="['top-start']" align="start">
        <d-button variant="solid" @click="path" size="lg">上班</d-button>
      </d-popover>
      <div class="grid"></div>
      <d-popover content="年轻人,想好了" trigger="hover" pop-type="warning" :position="['top-end']" align="end">
        <d-button variant="solid" color="danger" @click="notPath" size="lg">不上班</d-button>
      </d-popover>
    </div>
  </div>
  <div v-else>
    <div class="time"  v-if="!isWork">
      <d-countdown :value="deadline" format='HH:mm:ss:SSS' v-if="!isWork"/>
    </div>
    <div class="action">
      <d-col :lg="6" :xs="24">
        <d-result icon="danger" title="操作失败" desc="接着上班"></d-result>
      </d-col>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const routers = useRouter()

let deadline = ref();

let isWork = ref(true)

const path = () => {
  routers.push({ path: "/electricity/charge" })
}

const notPath = () => {
  isWork.value = false
  deadline.value = Date.now() + 3 * 900

  setTimeout(() => {
    routers.push({ path: "/electricity/charge" })
  }, 3000)
}
</script>

<style scoped lang="scss">
.image {
  height: calc(50vh);
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  display: flex;
  justify-content: center;

  .grid {
    width: 150px;
  }
}
.time{
  text-align: center;
  margin: 60px 0 200px;
}
.action{
  display: flex;
  justify-content: center;
}
</style>
