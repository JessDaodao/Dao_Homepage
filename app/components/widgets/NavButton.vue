<template>
  <NuxtLink :to="to" class="nav-btn">
    <MdiIcon class="nav-btn-icon" :path="icon" :size="80" />
    <span class="nav-btn-label">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  icon: string
  label: string
}>()
</script>

<style scoped>
.nav-btn {
  position: relative;
  overflow: hidden;
  min-width: 80px;
  padding: 32px 36px;
  border: none;
  border-radius: 12px;
  background-color: #fdf5e6;
  color: #7a6520;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
  display: block;
}

.nav-btn:hover {
  background-color: #f7e8c6;
}

.nav-btn-label {
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  top: 12px;
  left: 12px;
  line-height: 1;
  z-index: 1;
}

.nav-btn-icon {
  position: absolute;
  bottom: -24px;
  right: -24px;
  opacity: 0.12;
  pointer-events: none;
}
</style>
