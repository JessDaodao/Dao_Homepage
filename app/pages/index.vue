<template>
  <div>
    <header class="card-header">
      <div class="profile">
        <img
          class="avatar"
          src="https://q2.qlogo.cn/headimg_dl?dst_uin=694428809&spec=100&v=0.26750974337065003"
          alt="头像"
        />
        <h1 class="name">JessDaodao</h1>
        <p class="bio">这里是个人简介，写一些关于自己的话。</p>
      </div>
      <div class="nav-btns">
        <NuxtLink to="/projects" class="nav-btn">
          <MdiIcon class="nav-btn-icon" :path="mdiFolderOutline" :size="80" />
          <span class="nav-btn-label">项目</span>
        </NuxtLink>
        <NuxtLink to="/links" class="nav-btn">
          <MdiIcon class="nav-btn-icon" :path="mdiLinkVariant" :size="80" />
          <span class="nav-btn-label">友情链接</span>
        </NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup>
import { mdiLinkVariant, mdiFolderOutline } from '@mdi/js'
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  display: block;
  user-select: none;
}

.name {
  margin: 16px 0 4px;
  font-size: 24px;
  color: #222;
}

.bio {
  margin: 0;
  font-size: 14px;
  color: #888;
  line-height: 1.6;
}

.nav-btns {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

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