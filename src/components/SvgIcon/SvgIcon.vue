<template>
  <svg :style="iconStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import type { CSSProperties } from 'vue'

interface ISvgProps {
  name: string // icon name — required
  prefix?: string // icon prefix — optional (default: "icon")
  iconStyle?: CSSProperties // icon style — optional
}

const props = withDefaults(defineProps<ISvgProps>(), {
  prefix: 'icon',
  iconStyle: () => ({ width: '100px', height: '100px' })
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
