<template>
  <div>
    <header class="card-header">
      <div class="profile">
        <ImgLazy
          class="avatar"
          src="https://q2.qlogo.cn/headimg_dl?dst_uin=694428809&spec=100&v=0.26750974337065003"
          alt="头像" />
        <h1 class="name">Csituka_D</h1>
        <p class="bio">
          我叫JessDaodao，你可以称呼我为“叨叨” <br />
          目前是一名学生，{{ age }}岁 <br />
          很高兴认识你
        </p>
      </div>
      <div class="nav-btns">
        <ClickTilt>
          <GlowBorder>
            <NavButton to="/projects" :icon="mdiFolderOutline" label="项目" />
          </GlowBorder>
        </ClickTilt>
        <ClickTilt>
          <GlowBorder>
            <NavButton to="/links" :icon="mdiLinkVariant" label="友情链接" />
          </GlowBorder>
        </ClickTilt>
      </div>
    </header>
    <div class="social-links">
      <ClickTilt>
        <GlowBorder>
          <SocialLink href="https://github.com/JessDaodao" src="/links/github.svg" alt="GitHub" title="GitHub" />
        </GlowBorder>
      </ClickTilt>
      <ClickTilt>
        <GlowBorder>
          <SocialLink href="https://space.bilibili.com/494565117" src="/links/bili.svg" alt="Bilibili" title="Bilibili" />
        </GlowBorder>
      </ClickTilt>
      <ClickTilt>
        <GlowBorder>
          <SocialLink href="https://namemc.com/profile/ress2338396" src="/links/namemc.svg" alt="NameMC" title="NameMC" />
        </GlowBorder>
      </ClickTilt>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { mdiLinkVariant, mdiFolderOutline } from '@mdi/js'
useHead({ title: '首页' })

const birth = new Date('2010-02-05')
const age = computed(() => {
  const now = new Date()
  let a = now.getFullYear() - birth.getFullYear()
  const m = now.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) a--
  return a
})
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

@media (max-width: 640px) {
  .card-header {
    flex-direction: column;
  }
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

.social-links {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;
}

@media (max-width: 640px) {
  .social-links {
    justify-content: flex-start;
  }
}
</style>