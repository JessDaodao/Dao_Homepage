<template>
  <div class="links-page">
    <div class="page-header">
      <NuxtLink to="/" class="back-btn">← 返回首页</NuxtLink>
      <h2 class="page-title">友情链接</h2>
    </div>

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

    <p class="footer-hint">欢迎交换友链 ✨</p>
  </div>
</template>

<script setup>
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
  gap: 12px;
  margin-bottom: 20px;
}

.back-btn {
  font-size: 14px;
  color: #888;
  text-decoration: none;
  transition: color 0.2s;
  white-space: nowrap;
}

.back-btn:hover {
  color: #222;
}

.page-title {
  margin: 0;
  font-size: 20px;
  color: #222;
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

.footer-hint {
  margin: 20px 0 0;
  font-size: 13px;
  color: #bbb;
  text-align: center;
}
</style>
