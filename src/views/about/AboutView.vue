<template>
  <page-wrapper title="About" :content="description">
    <!-- <project-info class="enter-y" />
    <dependencies class="enter-y !mt-16px" />
    <dev-dependencies class="enter-y !mt-16px" /> -->
      <div class="enter-y !mt-16px about-contact">
        <h3>Contact</h3>
        <ul>
          <li>Website: <a href="https://www.thingraph.site/#/" target="_blank" rel="noopener noreferrer">https://www.thingraph.site/#/</a></li>
          <li>GitHub: <a href="https://github.com/thingraph" target="_blank" rel="noopener noreferrer">https://github.com/thingraph</a></li>
          <li>Email: <a href="mailto:thingraph@outlook.com">thingraph@outlook.com</a></li>
        </ul>
      </div>
  </page-wrapper>
</template>

<script setup lang="ts">
// import ProjectInfo from './components/ProjectInfo.vue'
// import Dependencies from './components/DependenciesInfo.vue'
// import DevDependencies from './components/DevDependencies.vue'
import { PageWrapper } from '@/components/Page'

const { pkg } = __APP_INFO__
const { description } = pkg
</script>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
