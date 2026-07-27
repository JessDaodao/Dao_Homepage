<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
  <footer class="site-footer">
    <span class="footer-text">Theme By Csituka_D © {{ year }}</span>
  </footer>
</template>

<style scoped>
.site-footer {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 100;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  user-select: none;
}

.footer-text {
  font-size: 11px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 3px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
