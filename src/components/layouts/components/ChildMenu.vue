<script setup lang="ts">
const props = defineProps(['menuInfo'])
const emit = defineEmits(['menuItemClick'])

const menuListChild = computed(
  () => props.menuInfo?.children?.filter((item: any) => !item.meta?.isHide)
)
</script>

<template>
  <a-sub-menu :key="menuInfo.name">
    <template #icon>
      <component :is="menuInfo.meta?.icon" style="margin-right: 8px"></component>
    </template>
    <template #title>
      {{ menuInfo.meta?.title }}
    </template>
    <template v-for="item in menuListChild" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name" @click="emit('menuItemClick', item)">
          <template #icon>
            <component :is="item.meta?.icon" style="margin-right: 8px"></component>
          </template>
          {{ item.meta?.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <child-menu :menu-info="item" :key="item.name" />
      </template>
    </template>
  </a-sub-menu>
</template>
