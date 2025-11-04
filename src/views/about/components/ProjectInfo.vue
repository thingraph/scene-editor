<template>
  <a-card title="Project Info" :bordered="false">
    <a-descriptions bordered :column="2" size="small">
      <a-descriptions-item label="Version">
        <a-tag color="blue">
          {{ version }}
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="Last Build Time">
        <a-tag color="blue">
          {{ lastBuildTime }}
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="Github">
        <a href="https://github.com/you-want/vue3-antd4-admin" target="_blank"> Github </a>
      </a-descriptions-item>
      <a-descriptions-item label="Preview URL">
        <a href="" target="_blank">Preview URL</a>
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<script setup lang="ts">
const { pkg, lastBuildTime } = __APP_INFO__
const { version } = pkg
</script>
