<template>
  <div class="layout">
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdf5e6;
}

.card {
  width: 100%;
  max-width: 720px;
  padding: 22px 22px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: none;
}
</style>
