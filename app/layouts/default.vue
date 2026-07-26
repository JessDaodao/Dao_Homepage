<template>
  <div class="layout">
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}
</style>

<style scoped>
.layout {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdf5e6;
  overflow: hidden;
}

.card {
  width: 100%;
  max-width: 600px;
  padding: 22px 22px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: none;
}
</style>
