<template>
  <layout>
    <div style="margin: 0.5rem 0">
      <PiniaLogo />
    </div>
    <d-button variant="solid" color="primary">确定</d-button>
    <d-button variant="text" color="primary">Text</d-button>

  </layout>
</template>

<script setup lang="ts">
import { layout } from "pages"
import { PiniaLogo } from "components"
</script>

<style scoped>
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
