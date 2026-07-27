<template>
  <NuxtLink to="/" class="page-header">
    <MdiIcon :path="mdiArrowLeft" :size="20" />
    <h2 class="page-title">{{ title }}</h2>
  </NuxtLink>
</template>

<script setup lang="ts">
import { mdiArrowLeft } from '@mdi/js'

defineProps<{ title: string }>()
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 20px 0;
  padding: 10px 16px;
  color: #222;
  text-decoration: none;
  transition: color 0.2s;
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  border-radius: 10px;
}

.page-header:hover {
  color: #707070;
}

.page-title {
  margin: 0;
  font-size: 20px;
  line-height: 1;
}
</style>
