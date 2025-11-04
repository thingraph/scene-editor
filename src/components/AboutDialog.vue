<script setup lang="ts">
const emit = defineEmits(['update:open'])

const { pkg } = __APP_INFO__
const { description } = pkg

defineProps<{
  open: boolean
}>()

const handleClose = () => {
  emit('update:open', false)
}
</script>

<template>
  <a-modal
    :open="open"
    title="About x-viewer"
    :footer="null"
    @cancel="handleClose"
  >
    <div class="about-content">
      <p>{{description}}</p>
      <p>
        Website: <a href="https://www.thingraph.site/#/" target="_blank">https://www.thingraph.site/#/</a>
      </p>
      <p>
        GitHub: <a href="https://github.com/thingraph" target="_blank">https://github.com/thingraph</a>
      </p>
      <p>
        Email: <a href="mailto:thingraph@outlook.com">thingraph@outlook.com</a>
      </p>
    </div>
  </a-modal>
</template>

<style scoped>
.about-content {
  padding: 0 12px;
}
.about-content p {
  margin-bottom: 12px;
  line-height: 1.6;
}
.about-content a {
  color: #1890ff;
  text-decoration: none;
}
.about-content a:hover {
  text-decoration: underline;
}
</style>
