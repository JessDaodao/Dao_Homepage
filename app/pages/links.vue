<template>
  <div>
    <PageHeader title="友情链接" />

    <div class="links-list">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        class="link-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImgLazy class="link-avatar" :src="link.avatar" alt="" />
        <div class="link-text">
          <span class="link-name">{{ link.name }}</span>
          <span class="link-desc">{{ link.desc }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>

const links = [
  { name: '占位', desc: '占位', url: 'https://example.com', avatar: '/default.png' },
  { name: '占位', desc: '占位', url: 'https://example.org', avatar: '/default.png' },
  { name: '占位', desc: '占位', url: 'https://example.net', avatar: '/default.png' },
]
</script>

<style scoped>
.links-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 10px;
  border-radius: 10px;
  background-color: #fdf5e6;
  text-decoration: none;
  transition: background-color 0.2s;
}

.link-item:hover {
  background-color: #f7e8c6;
}

.link-avatar {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex-shrink: 0;
}

.link-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
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
