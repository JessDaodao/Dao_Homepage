<template>
  <div class="links-page">
    <NuxtLink to="/" class="page-header">
      <MdiIcon :path="mdiArrowLeft" :size="20" />
      <h2 class="page-title">友情链接</h2>
    </NuxtLink>

    <div class="links-list">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        class="link-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="link-name">{{ link.name }}</span>
        <span class="link-desc">{{ link.desc }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { mdiArrowLeft } from '@mdi/js'

const links = [
  { name: '示例博客', desc: '一个技术博客', url: 'https://example.com' },
  { name: '示例项目', desc: '开源项目主页', url: 'https://example.org' },
  { name: '示例社区', desc: '开发者社区', url: 'https://example.net' },
]
</script>

<style scoped>
.links-page {
  padding: 4px 0;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  color: #222;
  text-decoration: none;
  transition: opacity 0.2s;
}

.page-header:hover {
  opacity: 0.7;
}

.page-title {
  margin: 0;
  font-size: 20px;
  line-height: 1;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 16px;
  border-radius: 10px;
  background-color: #fdf5e6;
  text-decoration: none;
  transition: background-color 0.2s;
}

.link-item:hover {
  background-color: #f7e8c6;
}

.link-name {
  font-size: 15px;
  font-weight: 600;
  color: #7a6520;
}

.link-desc {
  font-size: 13px;
  color: #a09060;
}
</style>
