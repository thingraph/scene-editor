<template>
  <a-config-provider
    :locale="locale"
    :component-size="componentSize"
    :theme="{
      token: {
        colorPrimary: '#1890ff'
      }
    }"
  >
    <router-view v-slot="{ Component }">
      <keep-alive v-if="isKeepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-if="!isKeepAlive" />
    </router-view>
  </a-config-provider>
</template>

<script setup lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US'
import dayjs from 'dayjs'
import 'dayjs/locale/en'

const route = useRoute()
const isKeepAlive = ref(route.meta.isKeepAlive)

dayjs.locale('en')

const locale = enUS

type SizeType = 'small' | 'middle' | 'large'
const componentSize = ref<SizeType>('middle')

onBeforeMount(() => {})
</script>
