<script setup lang="ts">
import { useAppStore } from '@/stores/modules/app'
import CloudHeader from './components/CloudHeader.vue'
import CloudAside from './components/CloudAside.vue'
import CloudFooter from './components/CloudFooter.vue'

const cloudAsideRef = ref<{ isCollapse: boolean }>()
const AppStore = useAppStore()
const isCollapse = computed(() => AppStore.isCollapse)
</script>

<template>
  <a-layout class="cloud-layout">
    <!-- header -->
    <cloud-header />
    <a-layout class="aside-content" :class="isCollapse ? 'aside-close' : 'aside-open'">
      <!-- aside menu -->
      <cloud-aside ref="cloudAsideRef" />
      <a-layout class="content-main">
        <a-layout-content>
          <!-- page content -->
          <router-view />
        </a-layout-content>
        <!-- footer -->
        <cloud-footer />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.cloud-layout {
  height: 100%;
  width: 100%;
  .aside-close {
    padding-left: 60px;
    transition: all 0.2s;
  }
  .aside-open {
    padding-left: 180px;
    transition: all 0.2s;
  }
  .aside-content {
    min-height: calc(100% - 60px);
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    .content-main {
      height: 100%;
      flex: 1;
      min-width: 0;
      position: relative;
      .ant-layout-content {
        overflow-y: auto;
        overflow-x: hidden;
        height: calc(100% - 80px);
        // padding-bottom: 40px;
      }
    }
  }
}
</style>
