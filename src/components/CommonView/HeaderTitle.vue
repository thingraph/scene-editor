<template>
  <a-card class="HeaderTitle" :body-style="{ padding: '16px 24px' }">
    <a-card-meta :title="titleData.title" :description="titleData.description">
      <template v-if="titleData.avatar" #avatar>
        <a-avatar :src="titleData.avatar" />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts" name="HeaderTitle">
interface ITitleData {
  title: string
  description?: string
  avatar?: string
}
defineProps<{
  titleData: ITitleData
}>()
</script>

<style scoped lang="less">
.HeaderTitle {
  :deep(.ant-avatar) {
    width: 80px;
    height: 80px;
  }
  :deep(.ant-card-body) {
    width: 100%;
  }
  :deep(.ant-card-meta-title) {
    font-size: 20px;
  }
  :deep(.ant-card-meta-description) {
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>
