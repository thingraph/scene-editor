<script setup lang="ts">
import ChildMenu from './ChildMenu.vue'
import { staticRouter } from '@/router/modules/staticRouter'
import { useAppStore } from '@/stores/modules/app'
import { isUrl } from '@/utils/is'
import type { RouteRecordRaw } from 'vue-router'

const router = useRouter()
const route = useRoute()
const AppStore = useAppStore()

const theme = computed(() => (AppStore.isDark ? 'dark' : 'light'))

const selectedKeys = ref([route.name as string])
const openKeys = ref([route.meta.parent as string])

watch(
  () => route.path,
  () => {
    selectedKeys.value = [route.name as string]
    openKeys.value = [route.meta.parent as string]
  }
)

const menuList = computed(() => staticRouter.filter((item) => !item.meta?.isHide))
const isCollapse = computed(() => AppStore.isCollapse)
const menuRef = ref(null)

const collapseClick = () => {
  AppStore.setAppState('isCollapse', !isCollapse.value)
}

const menuItemClick = (item: RouteRecordRaw) => {
  const path = item.path
  if (isUrl(path)) return window.open(path)
  router.push({ path })
}

defineExpose({
  isCollapse: isCollapse
})
</script>

<template>
  <a-layout-sider
    v-model:collapsed="isCollapse"
    :collapsedWidth="60"
    :width="180"
    collapsible
    :theme="theme"
    class="CloudAside"
    @collapse="collapseClick"
  >
    <!-- logo & name -->
    <!-- <div :class="isCollapse ? 'title-close' : 'title-open'" class="title">
      <router-link :to="{ path: '/' }" class="logo-a">
        <span class="ee-logo-wrapper">
          <img
            :class="isCollapse ? 'logo-animate' : ''"
            src="https://static0.xesimg.com/productdata-fileupload/logo/future_cloud_logo1.png"
            width="26px"
            height="26px"
          />
        </span>
        <span
          :class="isCollapse ? 'logo-animate2' : ''"
          style="font-size: 16px; font-weight: 700; color: #fff"
        >
        Vue 3 + Ant Design Vue 4
        </span>
      </router-link>
    </div> -->
    <!-- Menu -->
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      :inline-indent="16"
      mode="inline"
      :theme="theme"
      ref="menuRef"
    >
      <template v-for="item in menuList" :key="item.name">
        <template v-if="!item.children || item.meta?.isHideChildren">
          <a-menu-item :key="item.name" @click="menuItemClick(item)">
            <template #icon>
              <component :is="item.meta?.icon" style="margin-right: 8px"></component>
            </template>
            {{ item.meta?.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <child-menu :key="item.name" :menu-info="item" @menuItemClick="menuItemClick" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<style lang="less" scoped>
.CloudAside {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  .toggleBtn {
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 7;
  }
  :deep(.ant-menu-dark) {
    color: #fff;
    font-weight: 500;
  }
}
.title {
  color: #fff;
  width: 180px;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  background-color: #002140;

  img {
    display: inline-block;
    vertical-align: middle;
    width: 26px;
    height: 26px;
  }

  span {
    display: inline-block;
    font-size: 18px;
    line-height: 64px;

    i {
      font-size: 12px;
    }
  }

  .ee-logo-wrapper {
    display: inline-block;
    margin-right: 8px;
  }
}

.title-open {
  transition: all 0.2s;
  overflow: hidden;
}
.title-close {
  padding-left: 16px;
  width: 60px;
  overflow: hidden;
  transition: all 0.2s;
  .logo-animate {
    transition: all 0.3s;
    transform: translateX(2px);
  }

  .logo-animate2 {
    opacity: 0;
    transition: all 0.3s;
    transform: translateX(12px);
  }
}
</style>
