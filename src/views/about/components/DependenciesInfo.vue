<template>
  <a-card title="Production Dependencies" :bordered="false">
    <a-descriptions bordered size="small">
      <a-descriptions-item v-for="(value, key) in dependencies" :key="key" :label="key">
        {{ value }}
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<script setup lang="ts">
const {
  pkg: { dependencies }
} = __APP_INFO__
</script>
