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
      <nav class="actions">
        <button class="btn">主页</button>
        <button class="btn">博客</button>
        <button class="btn">项目</button>
        <button class="btn">关于</button>
      </nav>
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
  border-radius: 20px; /* 圆角正方形 */
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

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.btn {
  padding: 8px 20px;
  border: none;
  border-radius: 999px;
  background-color: #fdf5e6; /* 与背景呼应的浅黄 */
  color: #7a6520;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #f7e8c6;
}
</style>
