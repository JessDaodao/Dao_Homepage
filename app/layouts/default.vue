<template>
  <div class="layout">
    <div class="card" ref="cardRef">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const cardRef = ref<HTMLElement | null>(null)

let cancelToken = false

watch(
  () => route.path,
  async (_to, from) => {
    if (!from) return

    cancelToken = true
    const token = (cancelToken = false)

    const card = cardRef.value
    if (!card) return

    card.style.transition = 'none'
    card.style.width = ''
    card.style.height = ''
    card.style.overflow = ''

    const oldRect = card.getBoundingClientRect()
    const oldW = oldRect.width
    const oldH = oldRect.height

    card.style.width = oldW + 'px'
    card.style.height = oldH + 'px'
    card.style.transition = 'none'
    card.style.overflow = 'hidden'

    await new Promise((r) => setTimeout(r, 320))
    if (token) return
    await nextTick()
    if (token) return

    card.style.width = ''
    card.style.height = ''
    card.style.transition = 'none'
    const newRect = card.getBoundingClientRect()
    const newW = newRect.width
    const newH = newRect.height

    if (token) {
      card.style.width = ''
      card.style.height = ''
      card.style.transition = ''
      card.style.overflow = ''
      return
    }

    if (Math.abs(newW - oldW) < 1 && Math.abs(newH - oldH) < 1) {
      card.style.width = ''
      card.style.height = ''
      card.style.transition = ''
      card.style.overflow = ''
      return
    }

    card.style.width = oldW + 'px'
    card.style.height = oldH + 'px'
    card.style.transition = 'none'

    requestAnimationFrame(() => {
      if (token) return

      card.style.transition =
        'width 0.35s cubic-bezier(0.4, 0, 0.2, 1), height 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
      card.style.width = newW + 'px'
      card.style.height = newH + 'px'

      let settled = false
      const settle = () => {
        if (settled || token) return
        settled = true
        card.style.width = ''
        card.style.height = ''
        card.style.transition = ''
        card.style.overflow = ''
      }

      card.addEventListener('transitionend', settle, { once: true })
      setTimeout(settle, 500)
    })
  },
)
</script>

<style>
.page-enter-active {
  transition: opacity 0.3s ease 0.4s;
}
.page-leave-active {
  transition: opacity 0.25s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}
</style>

<style scoped>
.layout {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/wallpaper.webp') center / cover no-repeat;
  overflow: hidden;
}

.layout::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 0;
}

.card {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  max-height: calc(100vh - 44px);
  padding: 22px 22px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: none;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
}

.card::-webkit-scrollbar {
  width: 6px;
}

.card::-webkit-scrollbar-track {
  background: transparent;
}

.card::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.card::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
</style>
