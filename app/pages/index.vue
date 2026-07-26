<template>
  <div>
    <header class="card-header">
      <div class="profile">
        <img
          class="avatar"
          src="https://q2.qlogo.cn/headimg_dl?dst_uin=694428809&spec=100&v=0.26750974337065003"
          alt="头像"
        />
        <h1 class="name">Dao</h1>
        <p class="bio">这里是个人简介，写一些关于自己的话。</p>
      </div>
      <button class="nav-btn">
        <span class="nav-btn-label">导航</span>
      </button>
    </header>
  </div>
</template>

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

/* 右侧独立导航按钮 */
.nav-btn {
  position: relative;
  min-width: 160px;
  padding: 32px 36px;
  border: none;
  border-radius: 12px;
  background-color: #fdf5e6;
  color: #7a6520;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-btn:hover {
  background-color: #f7e8c6;
}

.nav-btn-label {
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  top: 8px;
  left: 14px;
  line-height: 1;
}
</style>