<template>
  <div>
    <PageHeader title="友情链接" />

    <div class="links-list">
      <GlowBorder v-for="link in links" :key="link.name" border-radius="10px">
        <a
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
      </GlowBorder>
    </div>
  </div>
</template>

<script setup>
useHead({ title: '友情链接' })

const links = [
  { name: '千景', desc: '设计巨神', url: 'https://raku404.com/', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1664147500&spec=100&v=0.26750974337065003' },
  { name: '落雨', desc: '皮肤站大手子', url: 'https://moeluoyu.xyz/', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1498640871&spec=100&v=0.26750974337065003' },
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
