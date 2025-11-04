<template>
  <a-card title="Dev Dependencies" :bordered="false">
    <a-descriptions bordered size="small">
      <a-descriptions-item v-for="(value, key) in devDependencies" :key="key" :label="key">
        {{ value }}
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<script setup lang="ts">
const {
  pkg: { devDependencies }
} = __APP_INFO__
</script>
