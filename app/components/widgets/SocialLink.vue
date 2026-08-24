<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="social-link"
    :title="title"
  >
    <img :src="src" :alt="alt" class="social-icon" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  src: string
  alt: string
  title: string
}>()
</script>

<style scoped>
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #fdf5e6;
  transition: background 0.2s;
}

.social-link:hover {
  background: #f7e8c6;
}

.social-icon {
  width: 20px;
  height: 20px;
  display: block;
  opacity: 0.6;
}
</style>
