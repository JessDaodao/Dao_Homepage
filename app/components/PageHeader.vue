<template>
  <NuxtLink to="/" class="page-header" :class="{ 'page-header--scrolled': scrolled }">
    <MdiIcon :path="mdiArrowLeft" :size="20" />
    <h2 class="page-title">{{ title }}</h2>
  </NuxtLink>
</template>

<script setup lang="ts">
import { mdiArrowLeft } from '@mdi/js'
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{ title: string }>()

const scrolled = ref(false)

onMounted(() => {
  const card = document.querySelector('.card') as HTMLElement | null
  if (!card) return

  const onScroll = () => {
    scrolled.value = card.scrollTop > 8
  }
  card.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => card.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 20px 0;
  padding: 12px 14px;
  color: #222;
  text-decoration: none;
  transition: color 0.2s, box-shadow 0.25s;
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  border-radius: 10px;
}

.page-header--scrolled {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.page-header:hover {
  color: #707070;
}

.page-title {
  margin: 0;
  font-size: 20px;
  line-height: 1;
  transition: color 0.25s;
}
</style>
