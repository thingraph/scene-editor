<script setup lang="ts">
const emit = defineEmits(['update:open'])

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
    title="Supported file formats"
    :footer="null"
    @cancel="handleClose"
  >
    <div class="formats-content">
      <div class="format-section">
        <h3>Import formats:</h3>
        <p>
          gltf, glb, obj, stl, ply, jpg, jpeg, png, gif, bmp, tif, tiff, svg, fbx, dae, dxf, dwg
        </p>
      </div>
      <div class="format-section">
        <h3>Export formats:</h3>
        <p>
          glb, gltf, obj, stl, ply
        </p>
      </div>
    </div>
  </a-modal>
</template>

<style scoped>
.formats-content {
  padding: 0 12px;
}

.format-section {
  margin-bottom: 24px;
}

.format-section:last-child {
  margin-bottom: 0;
}

.format-section h3 {
  margin-bottom: 12px;
  font-weight: 500;
}

.format-section p {
  line-height: 1.6;
  color: #666;
}
</style>