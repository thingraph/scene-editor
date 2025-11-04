<script setup lang="ts">
import CloudHeader from './components/CloudHeader.vue'
import CloudFooter from './components/CloudFooter.vue'
</script>

<template>
  <a-layout class="cloud-layout">
    <cloud-header />
    <a-layout-content class="content-main">
      <router-view />
    </a-layout-content>
    <cloud-footer />
  </a-layout>
</template>

<style scoped lang="less">
.cloud-layout {
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  padding-bottom: 40px;
  .content-main {
    background: #f1f1f1;
    min-height: calc(100vh - 104px);
    padding: 8px;
  }
}
</style>
