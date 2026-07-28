<template>
  <NuxtLayout>
    <div class="error-page">
      <div class="error-code">{{ code }}</div>
      <h1 class="error-title">{{ props.error?.message }}</h1>
      <ClickTilt>
        <GlowBorder>
          <NuxtLink to="/" class="back-btn">返回首页</NuxtLink>
        </GlowBorder>
      </ClickTilt>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps<{ error?: { statusCode?: number; message?: string } }>()
const code = props.error?.statusCode

useHead({ title: `${code}` })
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.error-code {
  font-size: 72px;
  font-weight: 700;
  color: #FAB07A;
  line-height: 1;
  margin-bottom: 8px;
  margin-top: -12px;
}

.error-title {
  margin: 0 0 20px;
  font-size: 20px;
  color: #222;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 12px;
  background-color: #fdf5e6;
  color: #7a6520;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
}

.back-btn:hover {
  background-color: #f7e8c6;
}
</style>
