<template>
  <div>
    <header class="card-header">
      <div class="profile">
        <ImgLazy
          class="avatar"
          src="https://q2.qlogo.cn/headimg_dl?dst_uin=694428809&spec=100&v=0.26750974337065003"
          alt="头像" />
        <h1 class="name">JessDaodao</h1>
        <p class="bio">
          我叫JessDaodao，你可以称呼我为“叨叨” <br />
          目前是一名学生，16岁 <br />
          很高兴认识你
        </p>
      </div>
      <div class="nav-btns">
        <NavButton to="/projects" :icon="mdiFolderOutline" label="项目" />
        <NavButton to="/links" :icon="mdiLinkVariant" label="友情链接" />
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
</style>